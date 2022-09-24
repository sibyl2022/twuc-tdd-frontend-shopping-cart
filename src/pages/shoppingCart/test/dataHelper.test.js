import axios from 'axios';
import {getData} from '../dataHelper';

jest.mock('axios');

describe('dataHelper', function () {
  test('test getData method', async () => {
    //数据层：stub axios返回一条数据
    //given
    axios.get.mockResolvedValue('TEXT');

    //when
    //异步操作等待才能拿到数据，要不然是空的
    const result = await getData();

    //then
    expect(result).toBe('TEXT');
  });

  test('test getData method with param', async () => {
    //数据层：stub axios返回一条数据
    //given
    axios.get.mockResolvedValue('TEXT');
    //_mocks_下data.json; package.json scripts:start-server, npm run start-server获得地址
    const baseURL = 'http://127.0.0.1:8000/';

    //when
    //此处不关心返回结果
    await getData(baseURL);

    //then
    expect(axios.get).toBeCalledWith(baseURL);
  });
});