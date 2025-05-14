import React, { Dispatch, SetStateAction } from 'react';
import { useState } from 'react';

export enum IncomeFrequency {
  WEEKLY = 'weekly',
  BIWEEKLY = 'biweekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

interface IncomeInputProps {
  income: number;
  frequency: IncomeFrequency;
  onIncomeChange: Dispatch<SetStateAction<number>>;
  onFrequencyChange: Dispatch<SetStateAction<IncomeFrequency>>;
}

export default function IncomeInput({ 
  income, 
  frequency, 
  onIncomeChange, 
  onFrequencyChange 
}: IncomeInputProps) {
  const [incomeValue, setIncomeValue] = useState(income);
  const [error, setError] = useState("");

  const handleIncomeChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (incomeValue < 0) {
      setError("Please enter a valid income amount.");
      return;
    }

    onIncomeChange(incomeValue);
    setError("");
  };

  return (
    <form className="income-form" onSubmit={handleIncomeChange}>
      <div className="form-group">
        <div className="input-group">
          <input
            type="number"
            className={`form-input ${error ? 'error' : ''}`}
            placeholder="Enter Income"
            value={incomeValue || ''}
            onChange={(e) => {
              setIncomeValue(Number(e.target.value));
              setError("");
            }}
          />
          {error && <small className="error-message">{error}</small>}
        </div>

        <select 
          className="frequency-select"
          value={frequency}
          onChange={(e) => onFrequencyChange(e.target.value as IncomeFrequency)}
        >
          <option value={IncomeFrequency.WEEKLY}>Weekly</option>
          <option value={IncomeFrequency.BIWEEKLY}>Bi-weekly</option>
          <option value={IncomeFrequency.MONTHLY}>Monthly</option>
          <option value={IncomeFrequency.YEARLY}>Yearly</option>
        </select>

        <button type="submit" className="add-button">
          Update Income
        </button>
      </div>
    </form>
  );
} 