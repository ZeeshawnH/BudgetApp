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
    setNameError("");
    setAmountError("");
  }

  return (
    <form className="add-expense-form" onSubmit={handleAddExpense}>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className={`form-input ${nameError ? 'error' : ''}`}
            placeholder="Add Expense"
            value={expenseName}
            onChange={(e) => {
              setExpenseName(e.target.value);
              setNameError("");
            }}
          />
          {nameError && <small className="error-message">{nameError}</small>}
        </div>
        
        <div className="input-group">
          <input
            type="number"
            className={`form-input ${amountError ? 'error' : ''}`}
            placeholder="Amount"
            value={amount || ''}
            onChange={(e) => {
              setAmount(Number(e.target.value));
              setAmountError("");
            }}
          />
          {amountError && <small className="error-message">{amountError}</small>}
        </div>

        <button type="submit" className="add-button">
          Add Expense
        </button>
      </div>
    </form>
  )
}