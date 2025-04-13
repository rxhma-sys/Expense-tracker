import React from 'react';

function ExpenseTable({ expenses = [], onDelete, searchTerm = '', onSort }) {
  const filteredExpenses = expenses.filter(
    (expense) =>
      (expense.description?.toLowerCase() || '').includes(searchTerm.toLowerCase()) ||
      (expense.category?.toLowerCase() || '').includes(searchTerm.toLowerCase())
  );

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th onClick={() => onSort('description')} style={clickableStyle}>Description ⬍</th>
          <th>Amount (Ksh)</th>
          <th onClick={() => onSort('category')} style={clickableStyle}>Category ⬍</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.amount}</td>
            <td>{expense.category}</td>
            <td>
              <button style={deleteStyle} onClick={() => onDelete(expense.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const tableStyle = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '30px',
};

const clickableStyle = {
  cursor: 'pointer',
  textDecoration: 'underline',
};

const deleteStyle = {
  padding: '5px 10px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#ef4444',
  color: 'white',
  cursor: 'pointer',
};

export default ExpenseTable;
