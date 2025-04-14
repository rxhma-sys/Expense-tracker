import React, { useState } from 'react';
import "./App.css";
import Header from './Components/Header';

function App() {
  const [expenses, setExpenses] = useState([
    {
      title: "Skincare",
      description: "New face serum & masks",
      category: "Self-Care",
      amount: 7500,
      date: "2025-03-29",
    },
    {
      title: "Black Abaya",
      description: "Elegant black with stones",
      category: "Abaya Purchase",
      amount: 6500,
      date: "2025-03-24",
    },
    {
      title: "Umrah Saving",
      description: "Monthly saving deposit",
      category: "Umrah",
      amount: 53000,
      date: "2025-06-27",
    },
    {
      title: "Orphan Donation",
      description: "Helping hands foundation",
      category: "Charity",
      amount: 2000,
      date: "2025-04-01",
    },
  ]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setExpenses([...expenses, formData]);
    setFormData({
      title: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  const handleDelete = (index) => {
    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <Header />

      <div className="content">
        <form onSubmit={handleSubmit} className="expense-form">
          <h2>Add Expense</h2>
          <input
            type="text"
            placeholder="Expense title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            placeholder="Enter expense description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select category</option>
            <option value="Self-Care">Self-Care</option>
            <option value="Abaya Purchase">Abaya Purchase</option>
            <option value="Umrah">Umrah</option>
            <option value="Charity">Charity</option>
          </select>
          <input
            type="number"
            placeholder="Enter amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>

        <div className="expense-table">
          <input
            type="text"
            placeholder="Search expenses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <table>
            <thead>
              <tr>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {filteredExpenses.map((expense, index) => (
                <tr key={index}>
                  <td>{expense.title}</td>
                  <td>{expense.description}</td>
                  <td>{expense.category}</td>
                  <td>{expense.amount}</td>
                  <td>{expense.date}</td>
                  <td>
                    <button
                      className="delete-btn"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
              {filteredExpenses.length === 0 && (
                <tr>
                  <td colSpan="6">No expenses found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;

