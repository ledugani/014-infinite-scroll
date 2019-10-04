import React from 'react';
import fetch from 'isomorphic-fetch';
import Contact from './contact';

class ContactList extends React.Component {
  state = {
    contacts: []
  }

  componentWillMount() {
    this.loadContacts()
  }

  loadContacts = () => {
    fetch('https://xxx.example-api.com/contacts.json')
      .then(response => response.json())
      .then(json => this.setState({
        contacts: json.contacts
      }))
  }

  render() {
    return <ul>

    </ul>
  }
}