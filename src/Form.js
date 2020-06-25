import React, {Component} from 'react';
import './Form.css';


class Form extends Component {

	constructor(props){
		super(props);
		this.state = { fullname: "prachi",
                       email: "prachi",
                       phone: "8856945263",
                       message: "Hii all"	                

        }
	}

	handlechangeall = (event) => {
		this.setState ({[event.target.name] :event.target.value})
	}

	handlesubmit = (event) => {
		// alert(`my name is${this.state.fullname}`);
		alert(JSON.stringify(this.state));
		event.preventDefault();
	}
render(){
	return(
		<div>
		<h1>Get in touch</h1>
		<form onSubmit={this.handlesubmit}>
		<label> Fullname   </label><br />
		<input type ="text" name="fullname" value = {this.state.fullname}
		onChange={this.handlechangeall} /><br /><br />
		<label> Email </label><br />
		<input type ="email" name="email" value = {this.state.email} 
		onChange={this.handlechangeall}/><br /><br />
		<label> Mobile no </label><br />
		<input type ="number" name="phone" value = {this.state.phone} 
		onChange={this.handlechangeall}/><br /><br />
		<label> Message </label><br />
		<textarea name="message"  value = {this.state.message}
		onChange={this.handlechangeall}/><br /><br />
		<input type ="submit" value="send" />
		</form>
		</div>
		)
}
	
}
export default Form;