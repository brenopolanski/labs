import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ContactForm from './ContactForm';
import { contactAdd } from '../actions';

class ContactCreate extends Component {
  handleSubmit({ name, phone, email }) {
    // const { onSubmit, push } = this.props;
    // onSubmit({ name, phone, email });
    // push('/');

    this.props.onSubmit({ name, phone, email });
    this.props.history.push('/');
  }

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: contact => dispatch(contactAdd(contact))
});

export default connect(null, mapDispatchToProps)(withRouter(ContactCreate));
