// pages/api/auth/confluence-callback.js
import { exchangeConfluenceCodeForToken } from '../../pages/utils/confluenceAuth';

export default async function handler(req, res) {
  const { code } = req.query;

  try {
    await exchangeConfluenceCodeForToken(code);

    // You can redirect the user to a dashboard page or display a success message
    res.redirect('/dashboard');
  } catch (error) {
    console.error('Error handling Confluence OAuth callback:', error);
    // Handle the error, e.g., show an error message to the user
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
