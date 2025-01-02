import axios from 'axios';

export default async function fetchApplicationByUserEmail(email) {
  try {
    const res = await axios.post('/api/GetApplicationByUserEmail', { email });
    return res.data;
  } catch (err) {
    console.error('Error fetching application:', err.message);
    return { success: false, message: err.message };
  }
}
