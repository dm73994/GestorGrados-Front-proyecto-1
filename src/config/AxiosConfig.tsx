import axios from 'axios';

interface reqHeaders {
  token: string;
}

const AxiosConfig = ({token}: reqHeaders) => {

  console.log("HOLA DESDE AXIOS")
  //console.log(process.env.API_DEV)
  const instance = axios.create({
    baseURL: 'http://localhost:5000',
  });

  instance.defaults.headers.common['Authorization'] = token;
  instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

  return instance;
};

export default AxiosConfig;
  
  
