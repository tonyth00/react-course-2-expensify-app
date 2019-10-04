import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

const reducersMap = {
  expenses: expensesReducer,
  filters: filtersReducer,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(combineReducers(reducersMap), composeEnhancers(applyMiddleware(thunk)));
