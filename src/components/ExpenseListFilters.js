import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = props => {
	const onValueChangeHandler = e => {
		props.dispatch(setTextFilter(e.target.value));
	};
	
	const onSelectChangeHandler = e => {
		switch(e.target.value) {
			case 'date':
				return props.dispatch(sortByDate());
			case 'amount':
				return props.dispatch(sortByAmount());
		}
	};

	return (
		<div>
			<input type="text" value={props.filters.text} onChange={onValueChangeHandler} />
			<select value={props.filters.sortBy} onChange={onSelectChangeHandler}>
				<option value="date">Date</option>
				<option value="amount">Amount</option>
			</select>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		filters: state.filters,
	};
};
export default connect(mapStateToProps)(ExpenseListFilters);
