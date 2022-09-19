import axios from 'axios';
import {getData} from '../dataHelper';

jest.mock('axios');

describe('dataHelper', function () {
  //数据层：stub axios返回一条数据
  test('should return one data',async ()=>{
    //given
    axios.get.mockResolvedValue('TEXT');

    //when
    //异步操作等待才能拿到数据，要不然是空的
    const result = await getData();

    //then
    expect(result).toBe('TEXT');
  });
});