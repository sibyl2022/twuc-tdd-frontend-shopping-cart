import axios from 'axios';
import {getData} from '../dataHelper';
import {BASIC_URL} from '../../../constants';

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

    //when
    //此处不关心返回结果
    await getData(BASIC_URL);

    //then
    expect(axios.get).toBeCalledWith(BASIC_URL);
  });
});