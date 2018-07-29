import React from "react";
import "./styles.css"

class DisplayContacts extends React.Component{

	render(){
		const { deletingContact } = this.props;
		const { image, name,number } = this.props;

		return(
			<div className="contacts_contanier">
			    <img src={image} className="picture"/>
				<div>Name: {name}</div>
				<div>Number: {number}</div>
				<button onClick={() => deletingContact(number)} >Delete</button>
			</div>
		)
	}
}
export default DisplayContacts;