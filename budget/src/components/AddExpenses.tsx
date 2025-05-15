import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';
import { ExpenseProps } from './ExpenseTable';

interface AddExpenseProps {
  expenses: ExpenseProps[];
  onAddExpense: Dispatch<SetStateAction<ExpenseProps[]>>;
  categories: string[];
  onCategoryChange?: Dispatch<SetStateAction<string[]>>;
  onCategoryAdd?: Dispatch<SetStateAction<string[]>>;
}

export default function AddExpenses({expenses, onAddExpense, categories, onCategoryAdd}: AddExpenseProps) {
  const [expenseName, setExpenseName] = useState("");
  const [amount, setAmount] = useState(0);
  const [nameError, setNameError] = useState("");
  const [amountError, setAmountError] = useState("");
  const [category, setCategory] = useState("");
  const [showCategoryInput, setShowCategoryInput] = useState(false);
  const [newCategory, setNewCategory] = useState("");

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === "addCategory") {
      setShowCategoryInput(true);
      setCategory("");
    } else {
      setShowCategoryInput(false);
      setCategory(e.target.value);
    }
  };

  const handleAddCategory = () => {
    if (newCategory && onCategoryAdd) {
      onCategoryAdd([...categories, newCategory]);
      setCategory(newCategory);
      setNewCategory("");
      setShowCategoryInput(false);
    }
  };

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
      {expenseName: expenseName, amount: amount, category: category || undefined}
      ]
    );
    // Clear the input fields
    setExpenseName("");
    setAmount(0);
    setCategory("");
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
        <div className="input-group">
          {showCategoryInput ? (
            <div className="category-input-group">
              <input
                type="text"
                className="form-input"
                placeholder="New Category"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
              />
              <button 
                type="button" 
                className="add-category-button"
                onClick={handleAddCategory}
              >
                Add
              </button>
              <button 
                type="button" 
                className="back-category-button"
                onClick={() => {
                  setShowCategoryInput(false);
                  setNewCategory("");
                }}
              >
                Back
              </button>
            </div>
          ) : (
            <select 
              name="category" 
              id="categorySelector"
              value={category}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category (optional)</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
              <option value="addCategory">Add Category</option>
            </select>
          )}
        </div>

        <button type="submit" className="add-button">
          Add Expense
        </button>
      </div>
    </form>
  )
}