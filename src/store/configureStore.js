import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';

const reducersMap = {
  expenses: expensesReducer,
  filters: filtersReducer,
};

export default () => createStore(combineReducers(reducersMap), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
