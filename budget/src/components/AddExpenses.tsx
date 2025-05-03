import React, { Dispatch, FormEvent, SetStateAction } from 'react';
import { useState } from 'react';
import { ExpenseProps } from './ExpenseTable';

interface AddExpenseProps {
  expenses: ExpenseProps[];
  onAddExpense: Dispatch<SetStateAction<ExpenseProps[]>>;
}


export default function AddExpenses({expenses, onAddExpense}: AddExpenseProps) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [nameError, setNameError] = useState("");
  const [amountError, setAmountError] = useState("");


  const handleAddExpense = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate inputs
    if (expenseName === "") {
      setNameError("Please enter an expense name.");
      return;
    }
    if (amount <= 0) {
      setAmountError("Please enter a valid amount.");
      return;
    }
    // Call the onAddExpense function passed from the parent component
    onAddExpense(
      [...expenses,
      {expenseName: expenseName, amount: amount}
      ]
    );
    // Clear the input fields
    setExpenseName("");
    setAmount(0);
  }

  return (
    <form className="field" onSubmit={handleAddExpense}>
        <div className="addExpense">
          <input type="text" name="addExpense" id="addExpense" placeholder="Add Expense" value={expenseName} onChange={(e) => setExpenseName(e.target.value)}/>
          <small id="expenseError" >{nameError}</small>
          <input type="number" id="amount" placeholder="Amount" value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
          <small id="amountError">{amountError}</small>
          <input type="submit" id="add" value="Add"/>
        </div>
        <small id="categoryError"></small>
    </form>
  )
}