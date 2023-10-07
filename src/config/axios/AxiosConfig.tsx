import axios from 'axios';

interface reqHeaders {
  token: string;
}

const AxiosConfig = ({token}: reqHeaders) => {
  const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });

  instance.defaults.headers.common['Authorization'] = token;
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  return instance;
};

export default AxiosConfig;
  
  
