import React, { useState } from 'react';
import ExpenseTable, { Expense, ExpenseProps } from './components/ExpenseTable';
import './App.css';
import './styles.css';
import AddExpenses from './components/AddExpenses';


const EXPENSES: ExpenseProps[] = [
  { expenseName: "Rent", amount: 1000 },
  { expenseName: "Groceries", amount: 200 },
  { expenseName: "Utilities", amount: 150 },
  { expenseName: "Transportation", amount: 100 },
];


function App() {

  const [income, setIncome] = useState(0);
  const [expenses, setExpenses] = useState<ExpenseProps[]>([...EXPENSES]);


  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    // Set income
    const incomeInput = document.getElementById("income") as HTMLInputElement;
    const incomeValue = parseFloat(incomeInput.value);
    setIncome(incomeValue);

    // Set categories
    
  }
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        
        <div className="container">
            <h1>My Budget</h1>
            <input type="number" placeholder="Income" id="income" />
            <small id="incomeError"></small>
            <AddExpenses expenses={expenses} onAddExpense={setExpenses}/>
            <ExpenseTable expenses={expenses} onDelete={setExpenses}/>
            <input type="button" id="backButton" value="Back" className="hidden" />
            <input type="button" id="categoriesButton" value="Print Categories and Percents" />
        </div>
        
      {/* </header> */}
    </div>
  );
}

export default App;
