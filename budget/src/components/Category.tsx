import React, { useState } from 'react';
import ExpenseTable, { ExpenseProps } from './ExpenseTable';

export interface CategoryProps {
    categoryName: string;
    budget?: number;
    expenses: ExpenseProps[];
}

export default function Category({categoryName, budget, expenses}: CategoryProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="category">
        <div className="category-header" onClick={() => setIsExpanded(!isExpanded)}>
            <h2 className="category-heading">{categoryName}</h2>
            <span className={`category-toggle ${isExpanded ? 'expanded' : ''}`}>▼</span>
        </div>
        <div className={`category-content ${isExpanded ? 'expanded' : ''}`}>
            <ExpenseTable expenses={expenses}></ExpenseTable>
        </div>
    </div>
  );
}