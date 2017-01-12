import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import { Button, TextField } from '../../components'
import redeemTechDomainValidation from './redeemTechDomainValidation'

class RedeemTechDomainForm extends Component {
  render() {
    const { handleSubmit, style, status } = this.props

    return (
      <form style={style} onSubmit={handleSubmit}>
        <Field name="name" label="Your Name" placeholder="Wade Watts" component={TextField} />
        <Field name="email" label="Email" placeholder="wade@example.com" component={TextField} />
        <Field name="domain" label="Domain" placeholder="parzival.tech" component={TextField} />
        <Field name="secret" label="Secret Code" placeholder="Get from your club leader" component={TextField} />
        <Button type="form">
          Get your .TECH domain!
        </Button>
      </form>
    )
  }
}

export default reduxForm({
  validate: redeemTechDomainValidation,
  form: 'redeemTechDomainRedemption'
})(RedeemTechDomainForm)