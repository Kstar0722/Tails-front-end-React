import React, { Component } from 'react'
import classNames from 'classnames'

class FieldForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    const { input, label, type, amount, meta: { touched, error, warning } } = this.props
    return (
    <div className={classNames("form-group", {'has-danger': touched && error})}>
      <label className="control-label">{label}</label>
      <div className={classNames({'input-group': amount})}>
        {amount ? <div className="input-group-addon">$</div> : null }
        { (type === 'textarea') ?
          <textarea {...input} className="form-control"></textarea>
          :
          <input {...input} type={type} className={classNames("form-control", {'form-control-danger': touched && error})}/>
        }
        {touched && ((error && <small className="form-control-feedback">{error}</small>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
    )
  }
}

export default FieldForm;