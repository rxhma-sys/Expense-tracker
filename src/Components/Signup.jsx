import React from 'react';

const Signup = ({ signupForm, handleSignupChange, toggleAuthForm, onSubmit }) => {
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
        <input name="firstName" value={signupForm.firstName} onChange={handleSignupChange} placeholder="First Name" />
        <input name="lastName" value={signupForm.lastName} onChange={handleSignupChange} placeholder="Last Name" />
        <input name="email" value={signupForm.email} onChange={handleSignupChange} placeholder="Email" />
        <input type="password" name="password" value={signupForm.password} onChange={handleSignupChange} placeholder="Password" />
        <button type="submit">Sign Up</button>
        <button type="button" onClick={toggleAuthForm}>Already have an account? Login</button>
      </form>
    </div>
  );
};

export default Signup;
