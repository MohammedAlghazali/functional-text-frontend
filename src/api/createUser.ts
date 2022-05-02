import axios from 'axios';
import { CreateUserInterface } from '../interfaces/CreateUserInterface';

const createUserApi = (userData: CreateUserInterface) =>
  axios.post(`${process.env.REACT_APP_API_DOMAIN}/api/v1/users`, {
    ...userData,
  });

export default createUserApi;
