import React from 'react';
import AddContact from './AddContact';
import DisplayContacts from './DisplayContacts';

class Container extends React.Component {
  state = {
    contacts: []
  };

  addingContact = contact => {
    this.setState(prevstate => {
      let a = prevstate.contacts;
      a.push(contact);
      localStorage.setItem('contacts', JSON.stringify(a));
      return {
        contacts: a
      };
    });
  };

  deletingContact = number => {
    this.setState(prevstate => {
      const newContacts = prevstate.contacts.filter(c => c.number !== number);
      localStorage.setItem('contacts', JSON.stringify(newContacts));
      return {
        contacts: newContacts
      };
    });
  };

  componentDidMount() {
    let localContacts = localStorage.getItem('contacts');
    if (localContacts) {
      this.setState({
        contacts: JSON.parse(localContacts)
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>
          <font face="Comic sans MS" size="7">
            Contacts App
          </font>
        </h1>
        <AddContact addingContact={this.addingContact} />
        <h2>
          <font face="Comic sans MS" size=" 5">
            Contacts List
          </font>
        </h2>
        <div className="ancestor">
          <div className="parent_contanier">
            {this.state.contacts.map(info => (
              <DisplayContacts
                key={info.number}
                name={info.name}
                number={info.number}
                image={info.image}
                deletingContact={this.deletingContact}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Container;
