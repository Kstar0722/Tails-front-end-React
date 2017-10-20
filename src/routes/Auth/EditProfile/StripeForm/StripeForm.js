import './StripeForm.scss'
import { connect } from 'react-redux'
import {validationFields} from 'lib/helper'
import { Field, reduxForm, SubmissionError } from 'redux-form'
import renderField from 'components/fieldFormLine'
import classNames from 'classnames'
import {createAccount, fetchStripeAccountInfo, verifyAccount} from 'actions/stripe'

const validate = values => {
	let errors = {}
	
	let fields = [
		{name: 'first_name', rules: ['required']},
		{name: 'last_name', rules: ['required']},
	];
	let legal_entity = validationFields(fields, values.legal_entity);
	
	if(Object.keys(legal_entity).length > 0){
		errors.legal_entity = legal_entity; 
	}

	return errors;
};

const renderFieldOne = ({
  input,
  label,
	type,
	classField,
  meta: { touched, error, warning }
}) => (
	<span className={classNames('' + classField, {'has-danger': touched && error})}>
  	<input {...input} className={"form-control "} placeholder={label} type={type} />
		{touched && ((error && <small className="form-control-feedback">{error}</small>) || (warning && <span>{warning}</span>))}
	</span>
)

class StripeForm extends React.Component {
	constructor(props) {
		super(props);
		this.createAccountStripe = this.createAccountStripe.bind(this);
	}

	componentWillMount() {
		this.props.fetchStripeAccountInfo()
	}

	componentWillReceiveProps(nextProps){
	}

	createAccountStripe(){
		this.props.createAccount();
	}

	submit(values){

		values.legal_entity.type = 'individual';
		let data = {legal_entity : values.legal_entity };
		delete data.legal_entity.verification;
		delete data.legal_entity.business_tax_id_provided;
		delete data.legal_entity.personal_id_number_provided;
		delete data.legal_entity.ssn_last_4_provided;


		if (values.external_account){
			values.external_account.object='bank_account';
			data.external_account = values.external_account;
			data.external_account.currency = 'usd';
			data.external_account.country = data.legal_entity.address.country;
		}	

		let isSubmissionError = false;
	
		return this.props.verifyAccount(data).then(res => {
			let errors = {};
			let tmpObj;
			if (res.verification){
				if(res.verification.fields_needed){
					if(Array.isArray(res.verification.fields_needed)){
						
						res.verification.fields_needed.map(item => {
							if(item == 'external_account'){
								if(!values.external_account){
									errors.external_account = {
										account_number: "Requred",
										routing_number: "Requred"
									}
								} else {
									errors.external_account = {}
									if(!values.external_account.account_number){
										errors.external_account.account_number = "Requred";
									}
									if(!values.external_account.routing_number){
										errors.external_account.routing_number = "Requred";
									}
									if(Object.keys(errors.external_account).length < 1){
										errors = {};
									}
								}
							} else {
								let mas = item.split('.');
								tmpObj = errors;
								if(mas){
									mas.some((item, index)=>{
										if (index >= mas.length-1){
											tmpObj[item] = "Requred";
											return true;
										}
										if (!tmpObj[item]){
											tmpObj[item] = {};
										} 
										tmpObj = tmpObj[item];
									});
								}
							}
						});
	
						if(errors.tos_acceptance){
							delete errors.tos_acceptance;
						}
						
						
					}
				}
			}

			if(Object.keys(errors).length > 0){
				isSubmissionError = true;
				throw new SubmissionError(errors)
			} else {
				return null;
			}
		}).catch(err => {
			if (isSubmissionError){
				throw err
			}
			return err.response.json().then(errBody => {

				let errors = {};
				let tmpObj;

				errBody.errors.map(error => {
					let param = error.param.replace('[','.').replace(']','');
					let mas = param.split('.');
					tmpObj = errors;
					if(mas){
						mas.some((item, index)=>{
							if (index >= mas.length-1){
								tmpObj[item] = 	error.description;
								return true;
							}
							if (!tmpObj[item]){
								tmpObj[item] = {};
							} 
							tmpObj = tmpObj[item];
						});
					}

				})

				throw new SubmissionError(errors)
			})
		});
	}

	render() {
		const {handleSubmit, submitting, user, returnForm, stripe} = this.props;

		if(!user.stripe_account_created){
			return (
				<div className="row justify-content-center stripe-content">
					<button onClick={this.createAccountStripe} className='btn save-profile block-btn blue'>Create account Stripe</button>
				</div>
			)
		} else {
			if (!stripe.charges_enabled || !stripe.payouts_enabled){
				return (
					<form onSubmit={handleSubmit(this.submit.bind(this))} className="form-stripe">
						<h5>Charges: {stripe.charges_enabled ? <span className="text-success">Enable</span> : <span className="text-danger">Disable</span>}</h5>
						<h5>Payouts: {stripe.payouts_enabled ? <span className="text-success">Enable</span> : <span className="text-danger">Disable</span>}</h5>
						<h3>Your personal details</h3>
						<Field name="legal_entity[first_name]" type="text" component={renderField} label="First Name"/>
					
						<Field name="legal_entity[last_name]" type="text" component={renderField} label="Last Name"/>
						
						{stripe.legal_entity ? stripe.legal_entity.ssn_last_4_provided ? null : <Field name="legal_entity[ssn_last_4]" type="text" component={renderField} label="Social Security Number"/> : null }
						{stripe.legal_entity ? stripe.legal_entity.personal_id_number_provided ? null : 	<Field name="legal_entity[personal_id_number]" type="text" component={renderField} label="Personal number"/> : null }
					
						<div className={classNames("form-group row")}>
							<label className="col-sm-4 col-form-label">Date of birth</label>
							<div className="col-sm-6">
								<div className='row dod'>
									<Field name="legal_entity[dob][day]" type="number" classField='col-sm-4' component={renderFieldOne} label="dd"/>
									<Field name="legal_entity[dob][month]" type="number" classField='col-sm-4' component={renderFieldOne} label="mm"/>
									<Field name="legal_entity[dob][year]" type="number" classField='col-sm-4' component={renderFieldOne} label="yyyy"/>
								</div>
							</div>
						</div>
						<hr/>
						<h3>Account details</h3>
						<Field name="legal_entity[address][line1]" type="text" component={renderField} label="Address 1"/>
						<Field name="legal_entity[address][line2]" type="text" component={renderField} label="Address 2"/>
						<Field name="legal_entity[address][country]" type="text" component={renderField} label="Country"/>
						<Field name="legal_entity[address][city]" type="text" component={renderField} label="City"/>
						<Field name="legal_entity[address][state]" type="text" component={renderField} label="State"/>
						<Field name="legal_entity[address][postal_code]" type="text" component={renderField} label="ZIP"/>

						<hr/>
						<h3>Bank details</h3>
						<Field name="external_account[account_number]" type="text" component={renderField} label="Account number"/>
						<Field name="external_account[routing_number]" type="text" component={renderField} label="Routing number"/>
						
						<hr/>

						<button className="btn save-profile block-btn blue">Save</button>

					</form>
				);
			}else{
				return(
					<div className="row justify-content-center stripe-content">
						<h3>Stripe account is verified</h3>
					</div>
					)
			}
		}
	}
}

StripeForm = reduxForm({
	form: 'stripeForm',
	enableReinitialize: true,
	// validate,
})(StripeForm)

StripeForm = connect(
	state => ({
			initialValues: state.profile.stripe ? ((state) => {
				if (state.profile.stripe.external_accounts){
					if (state.profile.stripe.external_accounts.data){
						if(state.profile.stripe.external_accounts.data[0]){
							state.profile.stripe.external_account = {
								// account_number: state.profile.stripe.external_accounts[0].account_number,
								routing_number: state.profile.stripe.external_accounts.data[0].routing_number,
							}
						}
					}
				}
				return state.profile.stripe;
			})(state) : {},
			user: state.profile.data,
			stripe: state.profile.stripe,
			returnForm: state.form.stripeForm ? state.form.stripeForm ? state.form.stripeForm.values : {} : {}
	}),
	{createAccount, fetchStripeAccountInfo, verifyAccount}
)(StripeForm)

export default StripeForm
