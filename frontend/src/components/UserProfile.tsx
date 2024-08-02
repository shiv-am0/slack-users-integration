import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { sendToServer, getChannels, sendToSlack } from '../utils/api';
import ChannelsTable from './ChannelsTable';

const UserProfile: React.FC = () => {
  const { user, logout } = useAuth0();
  const [requestToServer, setRequestToServer] = useState(false);
  const [channels, setChannels] = useState<any[]>([]);  // Initialize as an empty array

  useEffect(() => {
    if (user) {
      console.log(user);
      sendToServer(user, setRequestToServer);
    }
  }, [user]);

  const fetchChannels = async () => {
    const data = await getChannels();
    setChannels(data || []);
  };

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
          {channels.length > 0 && (  // Check if channels is defined and has length
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
