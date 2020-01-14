import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import TextInput from '../components/TextInput';

class ContactForm extends Component {
  required(value) {
    return value && value.length > 0 ? undefined : 'This field is required.';
  }

  maxLength(max) {
    return value => value && value.length <= max ? undefined : `Must have ${max} characters or less.`;
  }

  phoneFormat(value) {
    return value && /^\+1 \([0-9]{3}\) [0-9]{3}-[0-9]{4}$/.test(value) ? undefined : 'Must be in US format, e.g. +1 (111) 111-1111';
  }

  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        {/*
        <fieldset className="form-group">
          <label htmlFor="name" className="control-label">Name</label>
          <Field name="name" component="input" type="text" placeholder="e.g. John Doe" props={{ className: 'form-control' }} />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="phone" className="control-label">Phone</label>
          <Field name="phone" component="input" type="text" placeholder="(111) 111-1111" props={{ className: 'form-control' }} />
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="email" className="control-label">Email</label>
          <Field name="email" component="input" type="email" placeholder="john.doe@example.com" props={{ className: 'form-control' }} />
        </fieldset>

        <fieldset>
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>
          <button type="button" className="btn btn-default" onClick={reset} disabled={pristine || submitting}>Reset</button>
          <Link to="/"><i className="glyphicon glyphicon-chevron-left"></i> Back to Home Page</Link>
        </fieldset>
      */}

        <Field
          name="name"
          component={TextInput}
          type="text"
          label="Name"
          placeholder="e.g. John Doe"
          validate={[
            this.required,
            (() => this.maxLength(25))() // maxLength returns the actual validation function,
                                         // so we need to actually call it here instead of just passing it
          ]}
        />

        <Field
          name="phone"
          component={TextInput}
          type="text"
          label="Phone"
          placeholder="+1 (111) 111-1111"
          validate={[
            this.required,
            this.phoneFormat
          ]}
        />

        <Field
          name="email"
          component={TextInput}
          type="email"
          label="Email"
          placeholder="john.doe@example.com"
          validate={this.required}
        />

        <fieldset className="form-group">
          <button type="submit" className="btn btn-primary" disabled={pristine || submitting}>Submit</button>&nbsp;
          <button type="button" className="btn btn-default" onClick={reset} disabled={pristine || submitting}>Reset</button>&nbsp;
          <Link to="/"><i className="glyphicon glyphicon-chevron-left"></i> Back to Home Page</Link>
        </fieldset>

        <Field type="hidden" component="input" name="id" />
      </form>
    );
  }
}

const phoneUnique = values => {
  const { phone, id } = values;
  return fetch(`/contacts?phone=${btoa(phone)}&id=${id}`)
    .then(response => response.json())
    .then(json => {
      if (json.length > 0) {
        // eslint-disable-next-line
        throw { phone: 'This phone number already exists.' };
      }
    });
}

export default reduxForm({
  form: 'contact', // This is the form's name and must be unique across the app
  asyncValidate: phoneUnique,
  asyncBlurFields: ['phone'],
  enableReinitialize: true // This makes the form initialize again when ContactEdit re-renders
})(ContactForm);
