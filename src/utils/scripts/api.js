import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_URL}/api`,
  timeout: 5000, // Timeout if necessary
  header: {
    'ContentType': 'application/json',
    // Add all custom headers here
  },
});

export default axiosInstance;