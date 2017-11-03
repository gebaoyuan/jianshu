import './config';
import axios from 'axios';
export default {
  login(send){
    return axios.post('url',Object.assign({},send));
  }
}
