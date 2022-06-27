import ShopBanner from "../shopBanner/ShopBanner";
import SingleProduct from "../singleProduct/SingleProduct";
import { useSelector, useDispatch } from "react-redux";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../redux/cartSlice";
import Table from "react-bootstrap/Table";
import "./cart.css";

function Cart() {
  const cart = useSelector((state) => state.cart);
  console.log(cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  return (
    <div>
      <ShopBanner />
      <div className="container">
        <Table bordered hover className="table">
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr key={product._id}>
                  <td>
                    <img
                      className="image-item-cart"
                      src={`${process.env.REACT_APP_BACKEND_URL}/images/${product.image}`}
                      alt="imagen"
                    />
                    {product.name}
                  </td>
                  <td>${product.price}</td>
                  <td>
                    {product.quantity}{" "}
                    <span
                      onClick={() => {
                        dispatch(incrementQuantity({ product }));
                      }}
                    >
                      +
                    </span>
                    <span
                      onClick={() => {
                        dispatch(decrementQuantity({ product }));
                      }}
                    >
                      -
                    </span>{" "}
                  </td>
                  <td>{product.price * product.quantity}</td>
                  <td>
                    <span
                      onClick={() => {
                        dispatch(removeFromCart({ product }));
                      }}
                    >
                      Quitar
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <p>Total price: ${totalPrice}</p>
        </Table>
      </div>
    </div>
  );
}

export default Cart;
