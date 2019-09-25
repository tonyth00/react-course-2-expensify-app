// expenseCount
// expenseTotal - total of the visible expenses
import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummary = ({ expenseCount, expensesTotal }) => (
  <div>
    Viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling
    {numeral(expensesTotal / 100).format('$0,0.00')}
  </div>
);

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
