// pages/index.js
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';
import { initiateConfluenceOAuth } from '../utils/confluenceAuth'; // Create this file

function HomePage() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
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
          onClick={() => initiateConfluenceOAuth()} // Call the Confluence OAuth function
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Login to Confluence
        </button>
      )}
    </>
  );
}

export default HomePage;
