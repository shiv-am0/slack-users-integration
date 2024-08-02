import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

interface Channel {
  id: string;
  name: string;
}

interface ChannelsTableProps {
  channels: Channel[];
  onSendMessage: (channelId: string, user: any) => void;
}

const ChannelsTable: React.FC<ChannelsTableProps> = ({ channels, onSendMessage }) => {
  const { user } = useAuth0();

  return <div style={{marginTop: 8}}>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>ID</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {channels.map((channel) => (
          <tr key={channel.id}>
            <td>{channel.name}</td>
            <td>{channel.id}</td>
            <td>
              <button onClick={() => onSendMessage(channel.id, user)}>Send Message</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
};

export default ChannelsTable;
