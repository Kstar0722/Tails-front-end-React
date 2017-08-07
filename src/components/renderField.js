import React, {Component} from 'react';
import classNames from 'classnames'

export const minLength = min => value =>
    (value && value.length < min
        ? `Must be ${min} characters or more`
        : undefined);

export const validateEmail = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined);

class RenderField extends Component {
	constructor(props) {
        super(props);
        this.state = {
            active: false
        }
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }
    
    onFocus(){
        this.setState({active: true})
    }

    onBlur(){
        if(this.props.input.value === ''){
            this.setState({active: false})
        }
    }

    componentWillMount() {
		if(this.props.input.value != ''){
            this.setState({active: true})
        }
	}

	render() {
        const { id, className, input, label, type, style, placeholder, dispayLabel = false, meta:{touched, error, invalid, warning}} = this.props 
        console.log('error', error)
        console.log('touched', touched)
		return (
            <div className={classNames(`form-group ${className ? className: ''}`, {'is-focused': this.state.active }, {'has-error': touched && error})} style={style} >
                {dispayLabel ? <label className="label-control control-label" htmlFor={id || `input_${input.name}`}>{label}</label> : <br/>}
                <input {...input} onFocus={this.onFocus} onBlur={this.onBlur} id={id || `input_${input.name}`} className={`form-control ${touched && invalid ? 'has-error': ''}`} placeholder={placeholder} type={type}/>
                <div className="help-block">
                    {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
                </div>
            </div>
        )
	}
}

export default RenderField