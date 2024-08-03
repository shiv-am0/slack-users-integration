import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { sendToServer, getChannels, sendToSlack } from '../utils/api';
import ChannelsTable from './ChannelsTable';

// Renders this component on successful login.
const UserProfile: React.FC = () => {
  // Hook "useAuth0" is used to get details from the Auth0 API.
  const { user, logout } = useAuth0();
  // Boolean to decide whether user details are sent to server or not.
  const [requestToServer, setRequestToServer] = useState(false);
  // Variable to store Slack channels.
  const [channels, setChannels] = useState<any[]>([]);  // Initialize as an empty array

  // Send user details to the server on first render only.
  useEffect(() => {
    if (user) {
      console.log(user);
      sendToServer(user, setRequestToServer);
    }
  }, [user]);

  // Handler function to get channels from Slack.
  const fetchChannels = async () => {
    const data = await getChannels();
    setChannels(data || []);
  };

  // Handler function to send messages to a specified Slack channel.
  const handleSendMessage = async (channelId: string, user: any) => {
    console.log(`User from handler: ${user}`);
    
    const response = await sendToSlack(channelId, user);
    alert(response);
  };

  return (
    <div style={{ padding: 8 }}>
      <img src={user!.picture} alt={user!.name} />
      <h2>{user!.name}</h2>
      <p>{user!.email}</p>
      {requestToServer ? (
        <div>
          <button style={{ margin: 4 }} onClick={fetchChannels}>Get Slack Channels</button>
          {channels.length > 0 && (  
            <ChannelsTable channels={channels} onSendMessage={handleSendMessage} />
          )}
        </div>
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
