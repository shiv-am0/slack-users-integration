import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { sendToServer, getChannels } from '../utils/api';

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth0();
  const [requestToServer, setRequestToServer] = useState(false);

  useEffect(() => {
    if (user) {
      console.log(user);
      sendToServer(user, setRequestToServer);
    }
  }, [user]);

  return (
    <div style={{ padding: 8 }}>
      <img src={user!.picture} alt={user!.name} />
      <h2>{user!.name}</h2>
      <p>{user!.email}</p>
      {requestToServer ? (
        <button style={{ margin: 4 }} onClick={() => getChannels()}>Get Slack Channels</button>
      ) : (
        <p>Send user info to server to connect to Slack</p>
      )}
      <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
        Log Out
      </button>
    </div>
  );
};

export default UserProfile;
