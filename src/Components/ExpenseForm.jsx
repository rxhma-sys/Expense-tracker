import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [form, setForm] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.amount || !form.date) return;
    onAddExpense(form);
    setForm({ title: "", amount: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" type="number" />
      <input name="date" value={form.date} onChange={handleChange} placeholder="Date" type="date" />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
