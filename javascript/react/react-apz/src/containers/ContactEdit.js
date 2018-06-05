import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link, withRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
// import { contactFormUpdate, contactEdit } from '../actions';
import { contactEdit } from '../actions';
import ContactForm from './ContactForm';

class ContactEdit extends Component {
  state = {
    contact: {}
  }

  componentWillMount() {
    const { contactId } = this.props.match.params;

    const contact = this.props.contactList.find(c => c.id === contactId);

    this.setState({ contact });
  }

  handleSubmit(values) {
    const { id, name, phone, email } = values;

    this.props.onSubmit({ id, name, phone, email });
    // this.props.push('/');
    this.props.history.push('/');
  }

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit.bind(this)} initialValues={this.state.contact} />
    );
  }
}

const mapStateToProps = state => ({
  ...state.contacts
});

const mapDispatchToProps = dispatch => ({
  // onChange: ({ prop, value }) => dispatch(contactFormUpdate({ prop, value })),
  onSubmit: contact => dispatch(contactEdit(contact))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactEdit));
