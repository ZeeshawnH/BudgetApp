import React, { Dispatch, SetStateAction, useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { FiEdit2 } from 'react-icons/fi';

export interface ExpenseProps {
  expenseName: string;
  amount: number;
  category?: string;
}

type ExpenseRowProps = ExpenseProps & {
  onExpenseChange?: Dispatch<SetStateAction<ExpenseProps[]>>;
};

export function Expense({expenseName, amount, category, onExpenseChange}: ExpenseRowProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(expenseName);
  const [editedAmount, setEditedAmount] = useState(amount);
  const [editedCategory, setEditedCategory] = useState(category || '');
  const [nameError, setNameError] = useState("");
  const [amountError, setAmountError] = useState("");

  // Delete button handler
  const handleDelete = () => {
    console.log("Delete clicked");
    if (onExpenseChange) {
      onExpenseChange((prevExpenses) =>
        prevExpenses.filter((e) => e.expenseName !== expenseName)
      );
    }
  };

  // Edit button handler
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Save button handler for when editing
  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate inputs
    if (editedName === "") {
      setNameError("Please enter an expense name.");
      return;
    }
    if (editedAmount <= 0) {
      setAmountError("Please enter a valid amount.");
      return;
    }

    if (onExpenseChange) {
      onExpenseChange((prevExpenses) =>
        prevExpenses.map((e) =>
          e.expenseName === expenseName ? {
            expenseName: editedName,
            amount: editedAmount,
            category: editedCategory || undefined
          } : e
        )
      );
    }
    setIsEditing(false);
  };

  // Cancel button handler for when editing
  const handleCancel = () => {
    setEditedName(expenseName);
    setEditedAmount(amount);
    setEditedCategory(category || '');
    setNameError("");
    setAmountError("");
    setIsEditing(false);
  };

  // Render the component when editing
  if (isEditing) {
    return (
      <form className="expense-row edit-form" onSubmit={handleSave}>
        <div className="input-group">
          <input
            type="text"
            className={`form-input ${nameError ? 'error' : ''}`}
            value={editedName}
            onChange={(e) => {
              setEditedName(e.target.value);
              setNameError("");
            }}
          />
          {nameError && <small className="error-message">{nameError}</small>}
        </div>

        <div className="input-group">
          <input
            type="text"
            className="form-input"
            placeholder="Category (optional)"
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          />
        </div>
        
        <div className="input-group">
          <input
            type="number"
            className={`form-input ${amountError ? 'error' : ''}`}
            value={editedAmount || ''}
            onChange={(e) => {
              setEditedAmount(Number(e.target.value));
              setAmountError("");
            }}
          />
          {amountError && <small className="error-message">{amountError}</small>}
        </div>

        <div className="expense-actions">
          <button type="submit" className="save-button">
            Save
          </button>
          <button type="button" className="cancel-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="expense-row">
      <div className="expense-name">{expenseName}</div>
      <div className="expense-amount">${amount.toFixed(2)}</div>
      <div className="expense-actions">
        <div className="expense-edit" onClick={handleEdit}>
          <FiEdit2 size={20} />
        </div>
        <div className="expense-delete" onClick={handleDelete}>
          <IoCloseCircleOutline size={20} />
        </div>
      </div>
    </div>
  );
}

interface ExpenseTableProps {
  expenses: ExpenseProps[];
  total?: number;
  income?: number;
  onExpenseChange?: Dispatch<SetStateAction<ExpenseProps[]>>;
}

export default function ExpenseTable({expenses, total, income, onExpenseChange}: ExpenseTableProps) {
  return (
    <div className="expense-table">
      <div className="expense-header">
        <div className="expense-name">Expense</div>
        <div className="expense-amount">Amount</div>
        <div className="expense-actions"></div>
      </div>
      <div className="expense-list">
        {expenses.map((expense, index) => (
          <Expense 
            key={index} 
            expenseName={expense.expenseName} 
            amount={expense.amount}
            category={expense.category}
            onExpenseChange={onExpenseChange}
          />
        ))}
      </div>
      {total && total > 0 && (
        <div className="expense-total">
          <div className="total-label">Total</div>
          <div className="total-amount">${total.toFixed(2)}</div>
        </div>
      )}
      {income && income > 0 && total && total > 0 && (
        <div className="expense-total">
          <div className="total-label">Remaining</div>
          <div className="total-amount">${(income - total).toFixed(2)}</div>
        </div>
      )}
    </div>
  );
}