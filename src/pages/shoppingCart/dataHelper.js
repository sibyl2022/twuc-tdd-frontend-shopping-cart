import axios from 'axios';

function getData(path) {
  return axios.get(path);
}

export {getData};