import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import UserProfile from './UserProfile';
import LoginButton from './LoginButton';

const Header: React.FC = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <header className="App-header">
      {isAuthenticated ? <UserProfile /> : <LoginButton />}
    </header>
  );
};

export default Header;
