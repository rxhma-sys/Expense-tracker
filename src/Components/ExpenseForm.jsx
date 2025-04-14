import React, { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.title ||
      !formData.description ||
      !formData.category ||
      !formData.amount ||
      !formData.date
    )
      return;

    onAddExpense(formData);
    setFormData({
      title: "",
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Expense title"
      />
      <input
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Enter expense description"
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Enter expense category"
      />
      <input
        name="amount"
        type="number"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Enter amount"
      />
      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={handleChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ExpenseForm;
