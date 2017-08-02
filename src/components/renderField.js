import React,{Component, PropTypes} from 'react';

export const minLength = min => value =>
    (value && value.length < min
        ? `Must be ${min} characters or more`
        : undefined);

export const validateEmail = value =>
    (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined);

const renderField = ({ input, label, type, style, placeholder, meta:{touched, error, invalid, warning}}) => (
    <div className="form-group" style={style} >
        <div className="form-item">
            {/* <label>{label}</label> */}
            <input {...input} className={`form-control ${touched && invalid ? 'has-error': ''}`} placeholder={placeholder} type={type}/>
        </div>
        <div className="help-block">
            {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)

export default renderField;