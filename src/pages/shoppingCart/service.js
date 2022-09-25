import {getData} from './dataHelper';
import {BASIC_URL} from '../../constants';

const getProducts = () => {
  //getData返回axios的响应结构，所以要把data拿出来，data返回一个products的object
  return getData(BASIC_URL)
    .then(response => response.data.products)
    .catch(() => []);
};

export {getProducts};