import { useAuth0 } from "@auth0/auth0-react";
import React from 'react';

// Interface to induce a type to the Slack channels with the required properties.
interface Channel {
  id: string;
  name: string;
}

// Interface to define the props
interface ChannelsTableProps {
  channels: Channel[];
  onSendMessage: (channelId: string, user: any) => void;
}

// Component that stores the channel details in a table. Takes "ChannelsTableProps" as generic type.
const ChannelsTable: React.FC<ChannelsTableProps> = ({ channels, onSendMessage }) => {
  const { user } = useAuth0();

  return (
    <div style={{ marginTop: '8px' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        marginTop: '8px',
      }}>
        <thead>
          <tr>
            <th style={{border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black'}}>Channel Name</th>
            <th style={{border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black'}}>Channel ID</th>
            <th style={{border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#f2f2f2', color: 'black'}}>Action</th>
          </tr>
        </thead>
        <tbody>
          {channels.map((channel) => (
            <tr key={channel.id}>
              <td style={{border: '1px solid #ddd', padding: '12px'}}>{channel.name}</td>
              <td style={{border: '1px solid #ddd', padding: '12px'}}>{channel.id}</td>
              <td style={{border: '1px solid #ddd', padding: '12px'}}>
                <button
                  style={{padding: '8px 16px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer'}}
                  onClick={() => onSendMessage(channel.id, user)}
                >
                  Send Message
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ChannelsTable;
