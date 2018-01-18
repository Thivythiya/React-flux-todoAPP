import React from 'react';
import actions from '../actions';

class AddTodo extends React.Component{
	constructor(props) {
		super();
		this.state = {
			item:""
		}
	}
	addtodoItem(){
		actions.addTodo(this.state.item);
		this.setState((prevState,props) => {
			return {
				item: ""
			}
		});
	}
	addItem(e){
		let item = e.target.value;
		this.setState((prevState,props) => {
			return {
				item: item
			}
		});
	}
	render(){
		return(
			<div>
				<input type="text" value={this.state.item} onChange={this.addItem.bind(this)} />
				<button onClick={this.addtodoItem.bind(this)}>AddTodo</button>
			</div>	
		)
	}
}

export default AddTodo;