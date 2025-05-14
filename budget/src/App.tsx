import React, { useState } from 'react';
import ExpenseTable, { ExpenseProps } from './components/ExpenseTable';
import './App.css';
import './styles.css';
import AddExpenses from './components/AddExpenses';
import IncomeInput, { IncomeFrequency } from './components/IncomeInput';

const EXPENSES: ExpenseProps[] = [
  { expenseName: "Rent", amount: 1000, category: "Housing" },
  { expenseName: "Groceries", amount: 200, category: "Food" },
  { expenseName: "Utilities", amount: 150, category: "Bills" },
  { expenseName: "Transportation", amount: 100, category: "Transport" },
];

function App() {
  const [income, setIncome] = useState(0);
  const [frequency, setFrequency] = useState<IncomeFrequency>(IncomeFrequency.MONTHLY);
  const [expenses, setExpenses] = useState<ExpenseProps[]>([...EXPENSES]);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="App">
      <div className="container">
        <h1>My Budget</h1>
        <IncomeInput 
          income={income} 
          frequency={frequency}
          onIncomeChange={setIncome}
          onFrequencyChange={setFrequency}
        />
        {income > 0 && (
          <div className="income-display">
            <div className="income-label">Income:</div>
            <div className="income-amount">${income.toFixed(2)}</div>
          </div>
        )}
        <ExpenseTable expenses={expenses} onExpenseChange={setExpenses} total={total} income={income}/>
        <AddExpenses expenses={expenses} onAddExpense={setExpenses}/>
        <input type="button" id="backButton" value="Back" className="hidden" />
        <input type="button" id="categoriesButton" value="Print Categories and Percents" />
      </div>
    </div>
  );
}

export default App;
