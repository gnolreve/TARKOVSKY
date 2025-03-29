const axios = require('axios');

const trackIP = async (ipAddress) => {
  const apiKey = 'YOUR_API_KEY'; // api^^
  const url = `http://api.ipstack.com/${ipAddress}?access_key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(`IP Address: ${data.ip}`);
    console.log(`Country: ${data.country_name}`);
    console.log(`Region: ${data.region_name}`);
    console.log(`City: ${data.city}`);
    console.log(`Latitude: ${data.latitude}`);
    console.log(`Longitude: ${data.longitude}`);
    console.log(`ISP: ${data.connection.isp}`);
  } catch (error) {
    console.error('Error tracking IP address:', error.message);
  }
};

//for me^^
trackIP('8.8.8.8');
