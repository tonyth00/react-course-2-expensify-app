import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

const reducersMap = {
  expenses: expensesReducer,
  filters: filtersReducer,
  auth: authReducer,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () =>
  createStore(combineReducers(reducersMap), composeEnhancers(applyMiddleware(thunk)));
