import React from "react";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { Button, Image } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { deleteFromCart, clearCart } from "../RTK/slices/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  console.log(cart);
  return (
    <Container>
      <h1 className="py-5">Welcom to cart </h1>
      <Button
        variant="primary"
        onClick={() => {
          dispatch(clearCart());
        }}
      >
        Claer
      </Button>
      <h5>Total Price : {totalPrice.toFixed(2)}$</h5>
      <Table className="m-5" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>image</th>
            <th>Price</th>
            <th>quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>
                <Image
                  src={product.image}
                  alt="title"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.price}</td>
              <td>{product.quantity}</td>

              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFromCart(product));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Cart;
