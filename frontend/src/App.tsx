import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0();
  const [ requestToServer, setRequestToServer ] = useState(false);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if(isAuthenticated) {
    if(user) {
      console.log(user);
      sendToServer(user, setRequestToServer);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        { isAuthenticated ? (
            <div style={{padding: 8}}>
              <img src={user!.picture} alt={user!.name} />
              <h2>{user!.name}</h2>
              <p>{user!.email}</p>
              { requestToServer ? (
                  <button style={{margin: 4}}>Send to Slack</button>
              ) : <p>Send user info to server to connect to Slack</p>
              }
              <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
            </div>
          ) : <button onClick={() => loginWithRedirect()}>Log In</button>
        }
      </header>
    </div>
  );
}

async function sendToServer(user: any, setRequestToServer: any) {
  console.log(`My User: ${user.name}`);

  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/callback`, { user });
    console.log(response.data.message);
    alert(response.data.message);
    setRequestToServer(true);
  } catch (error) {
      console.error('Error sending request', error);
  }
}

export default App;
