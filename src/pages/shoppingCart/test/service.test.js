import {getData} from '../dataHelper';
import {getProducts} from '../service';

jest.mock('../dataHelper');
describe('service', () => {
  test('should return product list', async () => {
    //given
    const productList = [
      {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
      {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099.00, 'count': 2},
      {'id': 3, 'name': 'SONY WH-1000XM4 无线智能降噪耳机', 'price': 2099.00, 'count': 1},
      {'id': 4, 'name': 'iPhone 13 256GB', 'price': 6799.00, 'count': 1}
    ];
    //axios响应结构
    getData.mockResolvedValue({
      data:{
        products:productList
      }
    });

    //when
    //注意getProducts返回的是一个promise
    const list = await getProducts();

    //then
    expect(list).toEqual(productList);
  });

  test('should return empty product list when request has error', async () => {
    //given
    //axios响应结构
    getData.mockRejectedValue(new Error('error'));

    //when
    //注意getProducts返回的是一个promise
    const list = await getProducts();

    //then
    expect(list).toEqual([]);
  });
});