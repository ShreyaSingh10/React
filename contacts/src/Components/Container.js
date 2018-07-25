import React from "react";
import AddContact from "./AddContact";
import DisplayContacts from "./DisplayContacts"

class Container extends React.Component{

    state={
    	contacts:[
    			{
				"name": "Shreya",
				"number": 9137142992
				},
				{
				"name": "Shanaya",
				"number": 7091311596
				},
    	]
    }

    addingContact = (contact) => {
    	//console.log("CONTACT", contact);
    	this.setState((prevstate) =>{
    		let a= prevstate.contacts;
    		a.push(contact);
    		this.setState({
    			contacts:a,
    		})
    	})
	}

	deletingContact = (number) => {
		console.log("coming here", number);
		this.setState((prevstate)=> {
			console.log("prevstate", prevstate.contacts);
			let newContacts= prevstate.contacts.filter((c)=>{
				console.log(c.number);
				console.log(number);
				return c.number !== number
			})
			
			console.log("new Contacts", newContacts);
			this.setState({
				contacts: newContacts
			})
		})
	}

	render(){
		console.log("state", this.state.contacts);
		return(
			<div className="container">
			<h1>Contacts App</h1>
			<AddContact addingContact={this.addingContact}/>
			{this.state.contacts.map((info)=>
				<DisplayContacts 
				key={info.number}
				name={info.name} 
				number={info.number}
				deletingContact={this.deletingContact}/>
			)}
			</div>
		)
	}
}
export default Container;