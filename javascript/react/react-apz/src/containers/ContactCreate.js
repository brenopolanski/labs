import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import { contactAdd } from '../actions';

class ContactCreate extends Component {
  handleSubmit({ name, phone, email }) {
    this.props.onSubmit({ name, phone, email });
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

export default connect(null, mapDispatchToProps)(ContactCreate);
