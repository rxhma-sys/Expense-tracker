import React from 'react';

const Login = ({ loginForm, handleLoginChange, toggleAuthForm, onSubmit }) => {
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <input name="email" value={loginForm.email} onChange={handleLoginChange} placeholder="Email" />
        <input type="password" name="password" value={loginForm.password} onChange={handleLoginChange} placeholder="Password" />
        <a href="#">Forgot Password?</a>
        <button type="submit">Login</button>
        <button type="button" onClick={toggleAuthForm}>Don't have an account? Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
