import {render, screen, waitFor} from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';
import {getProducts} from '../service';

jest.mock('../service');

describe('Shopping Cart', () => {
  test('should show shopping cart page', () => {
    const {getByText} = render(<ShoppingCart/>);

    expect(getByText('Shopping Cart')).toBeInTheDocument();
  });

  test('should show the shopping cart header', () => {
    //given:[]

    //when
    render(<ShoppingCart/>);

    //then
    expect(screen.getByText('商品名称')).toBeInTheDocument();
    expect(screen.getByText('单 价')).toBeInTheDocument();
    expect(screen.getByText('数 量')).toBeInTheDocument();
  });

  test('should show 1 product info', async () => {
    //given
    const productList = [
      {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
    ];
    getProducts.mockResolvedValue(productList);

    //when
    render(<ShoppingCart/>);

    //then
    await waitFor(()=>{
      expect(screen.getByText('小米手环')).toBeInTheDocument();
      expect(screen.getByText('299.00')).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
    });
  });

  test('should show 2 product info', async () => {
    //given
    const productList = [
      {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
      {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099.00, 'count': 2}
    ];
    getProducts.mockResolvedValue(productList);

    //when
    render(<ShoppingCart/>);

    //then
    expect(await screen.findByText('小米手环')).toBeInTheDocument();
    expect(await screen.findByText('299.00')).toBeInTheDocument();
    expect(await screen.findByText('1')).toBeInTheDocument();
    expect(await screen.findByText('任天堂 Nintendo Switch')).toBeInTheDocument();
    expect(await screen.findByText('2099.00')).toBeInTheDocument();
    expect(await screen.findByText('2')).toBeInTheDocument();
  });
});
