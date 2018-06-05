import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';

class ContactForm extends Component {
  render() {
    const {
      handleSubmit,
      pristine,
      submitting,
      reset
    } = this.props;

    return (
      <form onSubmit={handleSubmit}>
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
      </form>
    );
  }
}

export default reduxForm({
  form: 'contact' // This is the form's name and must be unique across the app
})(ContactForm);
