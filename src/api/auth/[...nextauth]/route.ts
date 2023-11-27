// pages/api/auth/[...nextauth].ts
import { NextApiRequest, NextApiResponse } from 'next';
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

export default NextAuth({
  providers: [
    Providers.Atlassian({
      clientId: process.env.CONFLUENCE_CLIENT_ID,
      clientSecret: process.env.CONFLUENCE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // Do something when the user signs in
      return true;
    },
    async jwt(token, user, account, profile, isNewUser) {
      // Do something with the token
      return token;
    },
    async session(session, token) {
      // Do something with the session
      return session;
    },
  },
});
