import {getData} from './dataHelper';

const getProducts = () => {
  //getData返回axios的响应结构，所以要把data拿出来
  return getData('http://127.0.0.1:8000/').then(response => response.data);
};

export {getProducts};