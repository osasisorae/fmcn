// utils/confluenceAuth.js
import axios from 'axios';

export const initiateConfluenceOAuth = () => {
  const confluenceOAuthConfig = {
    client_id: process.env.CONFLUENCE_CLIENT_ID,
    redirect_uri: process.env.REDIRECT_URL,
    scope: 'write:confluence-content read:confluence-content.all readonly:content.attachment:confluence',
    state: Math.random().toString(36).substring(7),
  };

  const confluenceAuthorizationUrl = `https://auth.atlassian.com/authorize?${new URLSearchParams(
    confluenceOAuthConfig
  ).toString()}&response_type=code&prompt=consent`;

  // Redirect the user to the Confluence authorization URL
  window.location.href = confluenceAuthorizationUrl;
};

export const exchangeConfluenceCodeForToken = async (code) => {
  // Implement logic to exchange the authorization code for an access token
  // Make a POST request to the Confluence token endpoint
  try {
    const response = await axios.post('https://auth.atlassian.com/oauth/token', {
      grant_type: 'authorization_code',
      client_id: process.env.CONFLUENCE_CLIENT_ID,
      client_secret: process.env.CONFLUENCE_CLIENT_SECRET, // Replace with your actual client secret
      code,
      redirect_uri: process.env.REDIRECT_URL,
    });

    // Handle the response (e.g., store the access token)
    const accessToken = response.data.access_token;
    // Do something with the access token, such as storing it in a session or database
    print(accessToken)
    // Redirect the user to the desired page
    window.location.href = '/dashboard';
  } catch (error) {
    console.error('Error exchanging code for access token:', error);
    // Handle the error, e.g., show an error message to the user
  }
};
