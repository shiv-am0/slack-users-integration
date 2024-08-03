import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
  // Variable to perform a redirect to /authorize (built-in function of "useAuth0" hook)
  const { loginWithRedirect } = useAuth0();

  return <div>
    <h1>Welcome to Slack Users Integration!</h1>
    <h3>Login below to start.</h3>
    <button 
      style={{
        backgroundColor: '#4CAF50',
        padding: "15px 30px", 
        textAlign: 'center', 
        display: 'inline-block',
        fontSize: '18px', 
        fontWeight: 'bold', 
        margin: '10px 2px',
        cursor: 'pointer',
        borderRadius: '8px',}}
      onClick={() => loginWithRedirect()}
    >Log In
    </button>
  </div>
};

export default LoginButton;
