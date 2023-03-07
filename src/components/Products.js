import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, fetchProducts } from "./../store/actions/productActions";

const Products = () => {
  const products = useSelector((state) => state.products);
  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="product">
      <div>
        <h1>Product</h1>
        <button
          onClick={() => dispatch(addProduct({ id: 2, title: "product2" }))}
        >
          Add Product
        </button>
        {products.map((product) => (
          <h2 key={product.id}>{product.title}</h2>
        ))}
      </div>
    </div>
  );
};

export default Products;
