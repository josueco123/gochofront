import axios from "axios";

const ENDPOINT_PATH = "https://devtest.mincrix.com/public/";

const config = {
  headers: {
    "Accept": "*/*",      
    "Content-type": "application/json",
  },
};

const  Login =  (email, password) =>{
  
  const user = {email, password}

  return axios.post(ENDPOINT_PATH + 'login', user, config)
 
}

const  CreateUser  =  (name, email, password) =>{

  const user = {name, email, password}

  return axios.post(ENDPOINT_PATH + 'createuser', user)
 
}

export default { Login,CreateUser };