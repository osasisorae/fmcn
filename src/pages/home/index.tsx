import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import axios from 'axios';

// type for Confluence OAuth configuration
interface ConfluenceOAuthConfigType {
  client_id: string;
  redirect_uri: string;
  scope: string;
  state: string;
}

// Confluence OAuth configuration
const confluenceOAuthConfig: ConfluenceOAuthConfigType = {
  client_id: process.env.CONFLUENCE_CLIENT_ID || '',
  redirect_uri: process.env.REDIRECT_URL || '', // Change this to your actual dashboard URL
  scope: 'write:confluence-content',
  state: Math.random().toString(36).substring(7), // Generate a random state value
};

// Function to initiate Confluence OAuth flow
const initiateConfluenceOAuth = () => {
  // Convert ConfluenceOAuthConfigType to Record<string, string>
  const queryParams: Record<string, string> = {
    client_id: confluenceOAuthConfig.client_id,
    redirect_uri: confluenceOAuthConfig.redirect_uri,
    scope: confluenceOAuthConfig.scope,
    state: confluenceOAuthConfig.state,
  };

  const authorizationUrl = `https://auth.atlassian.com/authorize?${new URLSearchParams(queryParams).toString()}&response_type=code&prompt=consent`;

  // Redirect the user to the Confluence authorization URL
  window.location.href = authorizationUrl;
};

function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    // Render a loading state if the session is still loading
    return <p>Loading...</p>;
  }

  return (
    <>
      {status === 'authenticated' ? (
        <button
          type="button"
          onClick={() => signOut()}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Logout
        </button>
      ) : (
        <button
          type="button"
          onClick={initiateConfluenceOAuth}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Login
        </button>
      )}
    </>
  );
}

export default HomePage;