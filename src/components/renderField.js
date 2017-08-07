import React,{Component, PropTypes} from 'react';

export const minLength = min => value =>
    (value && value.length < min
        ? `Must be ${min} characters or more`
        : undefined);

export const validateEmail = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined);

const renderField = ({ id, className, input, label, type, style, placeholder, dispayLabel = false, meta:{touched, error, invalid, warning}}) => (
    <div className={`form-group ${className ? className: ''}`} style={style} >
        {dispayLabel ? <label className="label-control control-label" htmlFor={id || `input_${input.name}`}>{label}</label> : <br/>}
        <input {...input} id={id || `input_${input.name}`} className={`form-control ${touched && invalid ? 'has-error': ''}`} placeholder={placeholder} type={type}/>
        <div className="help-block">
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
//<div className="form-item">
    //<input {...input} id={id || `input_${input.name}`} className={`form-control ${touched && invalid ? 'has-error': ''}`} placeholder={placeholder} type={type}/>
//</div>

export default renderField;
