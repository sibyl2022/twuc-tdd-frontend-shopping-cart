import React, {useEffect, useState} from 'react';
import './index.css';
import {getProducts} from './service';

const ShoppingCart = () => {
  const [productList, setProductList] = useState([]);

  // useEffect(() => {
  //   getProducts().then(list =>
  //     setProductList(list)
  //   );
  // }, []);
  //useEffect不可直接接async
  useEffect(() => {
    const fn = async () => {
      const list = await getProducts();
      setProductList(list);
    };
    fn();
  }, []);

  //map return的第一个元素一定要有key
  return (
    <div className="wrapper">
      <div className="title">Shopping Cart</div>
      <table className="table">
        <thead className="table-header">
          <tr className="table-row">
            <th className="table-cell align-left">商品名称</th>
            <th className="table-cell align-right">单 价</th>
            <th className="table-cell align-right">数 量</th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) =>
            <tr className="table-row" key={product.name}>
              <td className="table-cell align-left">{product.name}</td>
              <td className="table-cell align-right">{product.price.toFixed(2)}</td>
              <td className="table-cell align-right">{product.count}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


export default ShoppingCart;
