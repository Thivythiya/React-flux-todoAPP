import React, {Component} from 'react';
import AppStore from '../AppStore';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import actions from '../actions';
import FilterList from './FilterList';

class TodoApp extends React.Component{
	constructor(props){
		super();
		this.state = {
			todoList : [],
			filter:"all",
		}
		this._onModelChange = this._onModelChange.bind(this);
	}

	componentWillMount(){
		AppStore.addStoreListener(this._onModelChange);
	}

	_onModelChange(){
		let {todoList, filter} = AppStore.getAll();
		if(filter == "active"){
			todoList = todoList.filter((item) => {
				return item['status'] == "active"
			});
		}else if(filter == "inactive"){
			todoList = todoList.filter((item) => {
				return item['status'] == "inactive"
			});
		}else{

		}

		this.setState({
			todoList:todoList,
			filter: filter
		});

	}
	
	strikeTodoItem(item){
		actions.strikeTodo(item.id);
	}

	render(){
		let {todoList, filter} = this.state;
		return (
			<div id="todoApp">
				<AddTodo />
				<TodoList todolist={this.state.todoList} strikeTodoItem = {this.strikeTodoItem.bind(this)}/>
				<FilterList />
			</div>
		)
	}
}
export default TodoApp;