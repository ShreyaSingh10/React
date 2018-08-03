import React from 'react';
import './styles.css';

class DisplayContacts extends React.Component {
  render() {
    const { deletingContact } = this.props;
    const { image, name, number } = this.props;

    return (
      <div className="contacts_contanier">
        <img src={image} className="picture" />
        <div>
          <font face="Comic sans MS" size=" 2">
            Name: {name}
          </font>
        </div>
        <div>
          <font face="Comic sans MS" size=" 2">
            Number: {number}
          </font>
        </div>
        <button className="delete" onClick={() => deletingContact(number)}>
          Delete
        </button>
      </div>
    );
  }
}
export default DisplayContacts;
