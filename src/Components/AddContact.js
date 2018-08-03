import React from 'react';
import './styles.css';

import { phoneValidator } from '../helpers/validators';

import defaultProfileImage from '../dummy.jpeg';

class AddContact extends React.Component {
  state = {
    name: '',
    number: '',
    image: null,
    fileindex: null,
    phoneError: false,
    nameError: false
  };

  handleChangeName = e => {
    const name = e.target.value;
    this.setState({
      name,
      nameError: !(name.length > 0)
    });
  };

  handleChangeNumber = e => {
    const number = e.target.value;
    this.setState({
      number,
      phoneError: !phoneValidator(number)
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number, image } = this.state;

    const phoneError = !phoneValidator(number);
    const nameError = !(name.length > 0);

    if (phoneError) {
      this.setState({
        phoneError
      });
      return;
    }

    if (nameError) {
      this.setState({
        nameError
      });
      return;
    }

    const contact = {
      name,
      number,
      image: image ? image : defaultProfileImage
    };

    this.props.addingContact(contact);
    this.setState({
      name: '',
      number: '',
      image: '',
      fileindex: null,
      phoneError: false,
      nameError: false
    });
  };
  fileChangedHandler = event => {
    const file = event.target.files[0];
    event.target.value = null;
    // coverting to b64
    const reader = new FileReader();
    reader.onloadend = () => {
      this.setState({ image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  render() {
    const { name, number, image, nameError, phoneError } = this.state;
    return (
      <div className="addContacts">
        <form onSubmit={this.handleSubmit}>
          <div>
            {image ? (
              <img className="picture" src={image} align="middle" />
            ) : (
              <input
                className="file-upload"
                type="file"
                onChange={this.fileChangedHandler}
              />
            )}
          </div>
          <div>
            <input
              onChange={this.handleChangeName}
              value={name}
              type="text"
              placeholder="Enter name"
            />
          </div>
          {nameError && (
            <p>
              <b>Enter a valid name</b>
            </p>
          )}
          <div>
            <input
              onChange={this.handleChangeNumber}
              value={number}
              type="tel"
              placeholder="Enter number"
            />
          </div>
          {phoneError && (
            <p>
              <b>Enter a valid number</b>
            </p>
          )}
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddContact;
