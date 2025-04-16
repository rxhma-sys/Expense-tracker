import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import SearchBar from './Components/SearchBar';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Header from './Components/Header';

import './App.css';

const App = () => {
  const [state, setState] = useState({
    expenses: [
      { id: 1, title: "Skincare", category: "Self-care", amount: 7500, date: "2025-03-29", description: "Moisturizer and cleanser" },
      { id: 2, title: "Black Abaya", category: "Clothing", amount: 6500, date: "2025-03-24", description: "Elegant black abaya" },
      { id: 3, title: "Umrah", category: "Religious", amount: 53000, date: "2025-06-27", description: "Travel and visa expenses" },
      { id: 4, title: "Orphanage Visit", category: "Charity", amount: 2000, date: "2025-05-10", description: "Donation and supplies" }
    ],
    searchTerm: "",
    isLoggedIn: false,
    isLogin: true,
    signupForm: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    },
    loginForm: {
      email: "",
      password: ""
    }
  });

  const handleAddExpense = (expense) => {
    const newExpense = { ...expense, id: Date.now() };
    setState(prev => ({ ...prev, expenses: [...prev.expenses, newExpense] }));
  };

  const handleDeleteExpense = (id) => {
    setState(prev => ({ ...prev, expenses: prev.expenses.filter(e => e.id !== id) }));
  };

  const handleSearch = (term) => {
    setState(prev => ({ ...prev, searchTerm: term }));
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, signupForm: { ...prev.signupForm, [name]: value } }));
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, loginForm: { ...prev.loginForm, [name]: value } }));
  };

  const toggleAuthForm = () => {
    setState(prev => ({ ...prev, isLogin: !prev.isLogin }));
  };

  const handleLoginSubmit = () => {
    if (state.loginForm.email && state.loginForm.password) {
      setState(prev => ({ ...prev, isLoggedIn: true }));
    }
  };

  const handleSignupSubmit = () => {
    if (
      state.signupForm.firstName &&
      state.signupForm.lastName &&
      state.signupForm.email &&
      state.signupForm.password
    ) {
      setState(prev => ({ ...prev, isLogin: true }));
    }
  };

  const handleLogout = () => {
    setState(prev => ({
      ...prev,
      isLoggedIn: false,
      loginForm: { email: "", password: "" }
    }));
  };

  const filteredExpenses = state.expenses.filter(expense =>
    expense.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      {!state.isLoggedIn ? (
        <div className="auth-container">
          {state.isLogin ? (
            <Login
              loginForm={state.loginForm}
              handleLoginChange={handleLoginChange}
              toggleAuthForm={toggleAuthForm}
              onSubmit={handleLoginSubmit}
            />
          ) : (
            <Signup
              signupForm={state.signupForm}
              handleSignupChange={handleSignupChange}
              toggleAuthForm={toggleAuthForm}
              onSubmit={handleSignupSubmit}
            />
          )}
        </div>
      ) : (
        <div className="main-content">
          <Header userName={state.signupForm.firstName} onLogout={handleLogout} />
          <SearchBar searchTerm={state.searchTerm} onSearch={handleSearch} />
          <ExpenseForm onAddExpense={handleAddExpense} />
          <ExpenseTable expenses={filteredExpenses} onDelete={handleDeleteExpense} />
        </div>
      )}
    </div>
  );
};

export default App;
