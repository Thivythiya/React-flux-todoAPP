import React from 'react';


class TodoList extends React.Component{
	constructor(props){
		super();
		this.strikeItem = this.strikeItem.bind(this);
	}

	strikeItem(item){
		this.props.strikeTodoItem(item);
	}
	render(){
		let {todolist} = this.props;
		return (
			<div>	
				{
					todolist.map((item,i) => {
						return <p key={i} className={(item['status'] == 'inactive') ? "inactive-item" : ""} onClick={this.strikeItem.bind(this,item)}>{item.item}</p>	
					})
				}
			</div>
		)
	}
} 

export default TodoList;