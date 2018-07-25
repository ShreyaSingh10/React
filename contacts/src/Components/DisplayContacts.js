import React from "react";
import "./styles.css"

class DisplayContacts extends React.Component{

	handleDelete = e =>{
		/*const contact:[
		"name":this.props.name,
  		"number": this.props.number
		]*/
		//console.log("target",   e.target.value);
		this.props.deletingContact(e.target.value);
	}
	render(){
		return(
			<div className="contacts_contanier">
				<p>Name: {this.props.name}</p>
				<p>Number: {this.props.number}</p>
				<button onClick={this.handleDelete} value={this.props.number}>Delete</button>
			</div>
		)
	}
}
export default DisplayContacts;