import React from 'react';
import "./styles.css"

class AddContact extends React.Component{
    state={
    	name:'',
    	number:''
    }
    

	handleChangeName= e =>{
		const name= e.target.value;
       this.setState(()=>{
       	return{
       		name
       	}
       })
	}

	handleChangeNumber= e =>{
	   const number= e.target.value;
       this.setState(()=>{
       	return{
       		number
       	}
       })
	}

	handleSubmit = e =>{
		e.preventDefault();
		const contact ={
			name:this.state.name,
			number:this.state.number
		}
		//console.log("contact sent", contact);
		this.props.addingContact(contact);
	}

	render(){
		//console.log(this.state);
		return(
			<div className="addContacts">
				<form onSubmit={this.handleSubmit}>
					<input onChange={this.handleChangeName} type="text" placeholder="enter your name"></input>
					<input onChange={this.handleChangeNumber} type="tel" placeholder="enter your number"></input>
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}
export default AddContact;