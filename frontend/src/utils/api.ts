import axios from 'axios';

export const sendToServer = async (user: any, setRequestToServer: any) => {
  console.log(`My User: ${user.name}`);

  try {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/callback`, { user });
    console.log(response.data.message);
    alert(response.data.message);
    setRequestToServer(true);
  } catch (error) {
    console.error('Error sending request', error);
  }
};

export const getChannels = async () => {
  try {
    const response = await axios.get(`${process.env.REACT_APP_API_URL}/slack/channels`);
    console.log(response.data);
  } catch (error) {
    console.error('Error sending request', error);
  }
};
