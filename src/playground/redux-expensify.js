import { createStore, combineReducers } from 'redux';


const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return [...state.filter(expense => expense.id !== action.id)];
    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date', // date or amount
  startDate: undefined,
  endDate: undefined,
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
		case 'SET_TEXT_FILTER':
			return {
				...state,
				text: action.text,
			};
    default:
      return state;
  }
};



const reducersMap = {
  expenses: expensesReducer,
  filters: filtersReducer,
};

const store = createStore(combineReducers(reducersMap));

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Other', amount: 10 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(setTextFilter('hello'));
store.dispatch(setTextFilter());
