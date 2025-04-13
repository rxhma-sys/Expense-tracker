import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    description: '',
    amount: '',
    category: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.description && formData.amount && formData.category) {
      const newExpense = {
        ...formData,
        id: Date.now(), 
      };

      onAddExpense(newExpense); 
      setFormData({ description: '', amount: '', category: '' }); 
      
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '30px' }}>
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        style={inputStyle}
      />
      <input
        type="number"
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        style={inputStyle}
      />
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        style={inputStyle}
      />
      <button type="submit" style={buttonStyle}>Add Expense</button>
    </form>
  );
}

const inputStyle = {
  marginRight: '10px',
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '8px 12px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: '#3b82f6',
  color: 'white',
  cursor: 'pointer',
};

export default ExpenseForm;
