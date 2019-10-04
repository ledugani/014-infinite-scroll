import React from 'react';
import fetch from 'isomorphic-fetch';
import Contact from './contact';

class ContactList extends React.Component {
  state = {
    contacts: [],
    per: 2,
    page: 1,
    totalPages: null,
  }

  componentWillMount() {
    this.loadContacts()
  }

  loadContacts = () => {
    const { per, page, contacts } = this.state;
    const url = `https://xxx.example-api.com/contacts.json?per=${per}&page=${page}`
    fetch(url)
      .then(response => response.json())
      .then(json => this.setState({
        contacts: [...contacts, ...json.contacts]
      }))
  }

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }))
  }

  render() {
    return <div>
      <ul className="contacts">
        {
          this.state.contacts.map(contact => <li key={contact.id}>
            <Contact {...contact} />
          </li>)
        }
      </ul>
      <a onClick={this.loadMore} href="">Load more</a>
    </div>

  }
}