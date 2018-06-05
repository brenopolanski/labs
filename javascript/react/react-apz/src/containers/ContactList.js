import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { contactDelete } from '../actions';

import Button from '../components/Button';

class ContactList extends Component {
  render() {
    return (
      <div>
        <h1>Contacts</h1>
        <Link to="/new" className="btn btn-primary">
          Create Contact
        </Link>
        <table className="table table-striped table-responsive">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.contactList.map(({ name, phone, email }, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{phone}</td>
                  <td>{email}</td>
                  <td>
                    <Button
                      buttonType="btn-danger"
                      onClick={() => this.props.onClickDelete(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.contacts
});

const mapDispatchToProps = dispatch => ({
  onClickDelete: index => dispatch(contactDelete(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactList));
