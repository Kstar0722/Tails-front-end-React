import React, { Component } from 'react'
import classNames from 'classnames'

class CheckboxField extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  componentWillMount() {
    
  }

  handleInputChange(event) {
    const target = event.target;
    this.props.input.onChange(target.checked);
  }

  render() {
    const { input, label, meta: { touched, error, warning } } = this.props
    return (

      <div className={classNames("form-group", {'has-danger': touched && error})}>
        <label className="custom-control custom-checkbox">
          <input type="checkbox" checked={this.props.input.value} onChange={this.handleInputChange} className="custom-control-input"/>
          <span className="custom-control-indicator"></span>
          <span className="custom-control-description">{label}</span>
        </label>
      </div>
    )
  }
}

export default CheckboxField;