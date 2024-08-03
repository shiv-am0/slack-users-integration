import axios from 'axios';

// Function to send the user details to the server after successful authentication.
export const sendToServer = async (user: any, setRequestToServer: any) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/callback`, { user });
        console.log(response.data.message);
        alert(response.data.message);
        setRequestToServer(true);
    } catch (error) {
        console.error('Error sending request', error);
    }
};

// Function to get the list of all the Slack channels in the desired workspace.
export const getChannels = async () => {
    try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/slack/channels`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending request', error);
        return [];
    }
};

// Function to send the "user" details to the slack channel as defined in "channelId".
export const sendToSlack = async (channelId: string, user: any) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/slack/send`, { channelId, user });
        return(response.data.message);
    } catch (error) {
      console.error('Error sending request to Slack', error);
      return ('Failed to send message to Slack');
    }
};