import './signup.scss'
import imgTrailer from 'assets/trailer.png'
import imgTrailerActive from 'assets/trailer-active.png'
import imgAnimal from 'assets/animal-not-active.png'
import imgAnimalActive from 'assets/animal.png'
import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Link, browserHistory } from 'react-router'
import { register } from 'actions/auth'
import renderField, { validateEmail, minLength } from 'components/renderField'
import classNames from 'classnames'

function validate (values) {
  var errors = {}
  var hasErrors = false
  if (!values.first_name || values.first_name.trim() === '') {
    errors.first_name = 'Enter Your First Name'
    hasErrors = true
  }
  if (!values.last_name || values.last_name.trim() === '') {
    errors.last_name = 'Enter Your Last Name'
    hasErrors = true
  }
  if (!values.password || values.password.trim() === '') {
    errors.password = 'Enter Password'
    hasErrors = true
  }
  if (!values.email || values.email.trim() === '') {
    errors.email = 'Enter Email'
    hasErrors = true
  }
  if (!values.confirmpassword || values.confirmpassword.trim() === '') {
    errors.confirmpassword = 'Enter confirmPass'
    hasErrors = true
  }
  if (values.password !== values.confirmpassword) {
    errors.confirmpassword = 'Dont match password'
    hasErrors = true
  }

  console.log('err', errors)
  return errors
}

class signup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showForm: true,
      btn_ship: false,
      btn_carrier: false,
    }
    this.showForm = this.showForm.bind(this)
  }

  getStyles () {
    return {
      input: {
        width: '100%',
      },
      button: {
        width: '100%',
      },
    }
  }

  showForm (btn) {
    let state = { showForm: false }
    if (btn === 'btn_ship') {
      state.btn_ship = true
      state.btn_carrier = false
      this.props.change('purpose', 'ship')
    } else {
      state.btn_ship = false
      state.btn_carrier = true
      this.props.change('purpose', 'be_a_carrier/')
    }
    this.setState(state)
  }

  // document.getElementById("signUpForm").reset();

  onSignUpUser (values, dispatch) {
    dispatch(
      register(values.first_name, values.last_name, values.email,
        values.password, values.purpose))
  }

  render () {
    const { handleSubmit, submitting, token, loginActive } = this.props
    const styles = this.getStyles()
    return (
      <section id="signup-wrap">
        <div className="container">
          <div className="signup-box">
            <div className="label-wrap-signup">
              <h2>Sign Up</h2>
              <p>I want to ...</p>
            </div>
            <div className="btn-group" role="group" aria-label="...">
              <button type="button" className={classNames('btn btn-ship',
                { active: this.state.btn_ship })}
                      onClick={this.showForm.bind(this, 'btn_ship')}>
                <img src={this.state.btn_ship ? imgAnimalActive : imgAnimal}
                     alt=""/> Ship
              </button>
              <button type="button" className={classNames('btn btn-carrier',
                { active: this.state.btn_carrier })}
                      onClick={this.showForm.bind(this, 'btn_carrier')}>
                <img
                  src={this.state.btn_carrier ? imgTrailerActive : imgTrailer}
                  alt=""/> Be a Carrier
              </button>
            </div>
            <div className={classNames('form-wrap',
              { hidden: this.state.showForm })}>
              <form onSubmit={handleSubmit(this.onSignUpUser)} id="signUpForm">
                <div className="row">
                  <div className="col-sm-6">
                    <Field
                      className="form-group label-floating is-empty"
                      name="first_name"
                      type="name"
                      component={renderField}
                      label="Your First Name"
                      dispayLabel={true}
                      placeholder1="Your Name"
                      style={styles.input}/>
                  </div>
                  <div className="col-sm-6">
                    <Field
                      className="form-group label-floating is-empty"
                      name="last_name"
                      type="name"
                      component={renderField}
                      label="Your Name"
                      dispayLabel={true}
                      placeholder1="Your Last Name"
                      style={styles.input}/>
                  </div>
                </div>
                <Field
                  className="form-group label-floating is-empty"
                  name="email"
                  type="email"
                  component={renderField}
                  label="Email"
                  dispayLabel={true}
                  placeholder1="Your Email"
                  validate={[ validateEmail ]}
                  style={styles.input}/>
                <div className='row'>
                  <div className='col-6'>
                    <Field
                      name="password"
                      type="password"
                      component={renderField}
                      label="Password"
                      dispayLabel={true}
                      className="form-group label-floating is-empty"
                      style={styles.input}/>
                  </div>
                  <div className='col-6'>
                    <Field
                      name="confirmpassword"
                      type="password"
                      dispayLabel={true}
                      component={renderField}
                      label="Confirm Password"
                      className="form-group label-floating is-empty"
                      style={styles.input}/>
                  </div>
                </div>
                <div style={styles.button}>
                  <button
                    type="submit"
                    className="btn btn-success btn-submit"
                    disabled={submitting}>
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default reduxForm({
  form: 'signup',
  enableReinitialize: true,
  validate,
})(signup)
