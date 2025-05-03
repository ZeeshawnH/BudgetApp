import React, { Dispatch, SetStateAction } from 'react';

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
    <tr className="budget-list-item">
      <td className="expenseName">{expenseName}</td>
      <td className="amount">{amount}</td>
      <td className="close">
        <span onClick={handleDelete} style={{ cursor: 'pointer' }}>{"\u00D7"}</span>
      </td>
    </tr>
  );
}

interface ExpenseTableProps {
  expenses: ExpenseProps[];
  onDelete?: Dispatch<SetStateAction<ExpenseProps[]>>;
}

export default function ExpenseTable({expenses, onDelete}: ExpenseTableProps) {
  return (
    <table id="expenseTable">
      <tbody>
        {expenses.map((expense, index) => {
          return (
            <Expense key={index} expenseName={expense.expenseName} amount={expense.amount} onDelete={onDelete}/>
          );
        })}
      </tbody>
    </table>
  );
}