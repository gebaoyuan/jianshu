import './config';
import axios from 'axios';

export default {
  login(send) {
    return axios.post('url', Object.assign({}, send));
  },
  getArticleList(send) {
    let url = "api/getArticleList";
    return axios.get(url, {
      params: send
    })
  }
}
