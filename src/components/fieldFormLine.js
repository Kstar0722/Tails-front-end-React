import React, { Component } from 'react'
import classNames from 'classnames'

class FieldForm extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    
  }

  render() {
    const { input, label, type, amount, options, meta: { touched, error, warning } } = this.props;


    let input_component;

    switch(type){
      case 'textarea': 
        input_component = <textarea {...input} className="form-control"></textarea>;
        break;
      case 'select':
        console.log('select')
        input_component = <select {...input} className="form-control">
          {options.map(item => <option value={item.value}>{item.text}</option>)}
        </select>;
        break;
      default: 
        input_component = <input {...input} type={type} className={classNames("form-control", {'form-control-danger': touched && error})}/>
    }

    return (
      <div className={classNames("form-group row", {'has-danger': touched && error})}>
        <label className="col-sm-4 col-form-label">{label}</label>
        <div className="col-sm-6">
          { input_component }
          {touched && ((error && <small className="form-control-feedback">{error}</small>) || (warning && <span>{warning}</span>))}
        </div>
      </div>
    )
  }
}

export default FieldForm;