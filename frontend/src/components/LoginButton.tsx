import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton: React.FC = () => {
  // Variable to perform a redirect to /authorize (built-in function of "useAuth0" hook)
  const { loginWithRedirect } = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
