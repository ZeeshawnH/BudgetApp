import React, { Dispatch, SetStateAction, } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

export interface ExpenseProps {
  expenseName: string;
  amount: number;
}

type ExpenseRowProps = ExpenseProps & {
  onDelete?: Dispatch<SetStateAction<ExpenseProps[]>>;
};

export function Expense({expenseName, amount, onDelete}: ExpenseRowProps) {
  const handleDelete = () => {
    console.log("Delete clicked");
    if (onDelete) {
      onDelete((prevExpenses) =>
        prevExpenses.filter((e) => e.expenseName !== expenseName)
      );
    }
  };

  return (
    <div className="expense-row">
      <div className="expense-name">{expenseName}</div>
      <div className="expense-amount">${amount.toFixed(2)}</div>
      <div className="expense-delete" onClick={handleDelete}>
        <IoCloseCircleOutline size={20} />
      </div>
    </div>
  );
}

interface ExpenseTableProps {
  expenses: ExpenseProps[];
  total?: number;
  onDelete?: Dispatch<SetStateAction<ExpenseProps[]>>;
}

export default function ExpenseTable({expenses, total, onDelete}: ExpenseTableProps) {
  return (
    <div className="expense-table">
      <div className="expense-header">
        <div className="expense-name">Expense</div>
        <div className="expense-amount">Amount</div>
        <div className="expense-delete"></div>
      </div>
      <div className="expense-list">
        {expenses.map((expense, index) => (
          <Expense 
            key={index} 
            expenseName={expense.expenseName} 
            amount={expense.amount} 
            onDelete={onDelete}
          />
        ))}
      </div>
      {total && total > 0 && (
        <div className="expense-total">
          <div className="total-label">Total</div>
          <div className="total-amount">${total.toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}