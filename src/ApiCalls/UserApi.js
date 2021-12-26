import axios from "axios";

const ENDPOINT_PATH = "http://localhost:8000/";

const  Login =  (email, password) =>{

  const user = {email, password}

  return axios.post(ENDPOINT_PATH + 'login', user)
 
}

const  CreateUser  =  (name, email, password) =>{

  const user = {name, email, password}

  return axios.post(ENDPOINT_PATH + 'createuser', user)
 
}

export default { Login,CreateUser };