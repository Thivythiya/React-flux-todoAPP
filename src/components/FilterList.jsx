import React from 'react';
import actions from '../actions';

class FilterList extends React.Component{
	constructor(props){
		super();
		this.setVisibilityFilter = this.setVisibilityFilter.bind(this);
	}
	setVisibilityFilter(status){
		actions.setFilter(status);
	}
	render(){
		return (
			<div className="filter-list">
				<span key={1} onClick={this.setVisibilityFilter.bind(this,'all')}>All</span>
				<span key={2} onClick={this.setVisibilityFilter.bind(this,'active')}>Active</span>
				<span key={3} onClick={this.setVisibilityFilter.bind(this,'inactive')}>Completed</span>
			</div>
		)
	}
}
export default FilterList;
