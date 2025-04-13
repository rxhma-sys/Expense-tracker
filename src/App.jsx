import React, { useState } from 'react';
import SideBar from './Components/sideBar';
import Header from './Components/Header';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import SearchBar from './Components/SearchBar';
import './App.css'; // Optional if you're using App-level styling

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, name: 'Groceries', amount: 2500, category: 'Food' },
    { id: 2, name: 'Transport', amount: 2200, category: 'Travel' },
    { id: 3, name: 'Wi-Fi', amount: 2100, category: 'Utilities' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  function addExpense(newExpense) {
    setExpenses([...expenses, { ...newExpense, id: expenses.length + 1 }]);
  }

  function deleteExpense(id) {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
  }

  function handleSearch(term) {
    setSearchTerm(term);
  }

  function handleSort(criteria) {
    setSortBy(criteria);
  }

  const filteredExpenses = expenses
    .filter((expense) =>
      expense.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      expense.category?.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'category') {
        return a.category.localeCompare(b.category);
      } else {
        return 0;
      }
    });

  return (
    <div className="App">
      <SideBar />
      <div className="main-content">
        <Header />
        <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
        <ExpenseForm onAddExpense={addExpense} />
        <ExpenseTable
          expenses={filteredExpenses}
          onDelete={deleteExpense}
          onSort={handleSort}
        />
      </div>
    </div>
  );
}

export default App;
