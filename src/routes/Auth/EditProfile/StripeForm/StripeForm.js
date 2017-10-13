import './StripeForm.scss'
import { connect } from 'react-redux'
import {validationFields} from 'lib/helper'
import { Field, reduxForm } from 'redux-form'
import renderField from 'components/fieldFormLine'
import classNames from 'classnames'
import {createAccount, fetchStripeAccountInfo, verifyAccount} from 'actions/stripe'

const validate = values => {
	let errors = {}
	
	let fields = [
		{name: 'first_name', rules: ['required']},
		{name: 'last_name', rules: ['required']},
	];
	let legal_entity = validationFields(fields.legal_entity, values);
	
	errors.legal_entity = legal_entity; 
	return errors;
};

const renderFieldOne = ({
  input,
  label,
	type,
	classField,
  meta: { touched, error, warning }
}) => (
  <input {...input} className={"form-control " + classField} placeholder={label} type={type} />
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
		console.log(values);
		values.legal_entity.type = 'individual';
		let data = {legal_entity : values.legal_entity };
		delete data.legal_entity.verification;
		delete data.legal_entity.business_tax_id_provided;
		delete data.legal_entity.personal_id_number_provided;
		delete data.legal_entity.ssn_last_4_provided;
		this.props.verifyAccount(data);
	}

	render() {
		const {handleSubmit, submitting, user} = this.props;

		if(!user.stripe_account_created){
			return (
				<div className="row justify-content-center stripe-content">
					<button onClick={this.createAccountStripe} className='btn save-profile block-btn blue'>Create account Stripe</button>
				</div>
			)
		} else {
			if (!user.stripe_charges_enabled){
				return (
					<form onSubmit={handleSubmit(this.submit.bind(this))} className="form-stripe">
						<h3>Your personal details</h3>
						<Field name="legal_entity[first_name]" type="text" component={renderField} label="First Name"/>
					
						<Field name="legal_entity[last_name]" type="text" component={renderField} label="Last Name"/>
						<Field name="legal_entity[ssn_last_4]" type="text" component={renderField} label="Social Security Number"/>
						<div className={classNames("form-group row")}>
							<label className="col-sm-4 col-form-label">Date of birth</label>
							<div className="col-sm-8">
								<div className='row dod'>
									<Field name="legal_entity[dob][day]" type="number" classField='col-sm-2' component={renderFieldOne} label="dd"/>
									<Field name="legal_entity[dob][month]" type="number" classField='col-sm-2' component={renderFieldOne} label="mm"/>
									<Field name="legal_entity[dob][year]" type="number" classField='col-sm-2' component={renderFieldOne} label="yyyy"/>
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

						<button>Save</button>

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
	validate,
})(StripeForm)

StripeForm = connect(
	state => ({
			initialValues: state.profile.stripe,
			user: state.profile.data
	}),
	{createAccount, fetchStripeAccountInfo, verifyAccount}
)(StripeForm)

export default StripeForm
