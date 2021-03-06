import { useSelector } from "react-redux";
import "./cartCheckout.css";
import axios from "axios";
import { Link } from "react-router-dom";

function CartCheckout({ total }) {
  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);
  const totalPrice = cart.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );
  const checkOutHandler = () => {
    const response = async () => {
      await axios.patch(`${process.env.REACT_APP_BACKEND_URL}/api/product`, {
        items: cart,
      });
    };
  };

  // async function createOrder(event) {
  //   const products = [];
  //   cart.map((product) => {
  //     products.push({
  //       name: product.name,
  //       quantity: product.quantity,
  //       price: product.price * product.quantity,
  //     });
  //   });

  //   const response = await axios.post(
  //     `${process.env.REACT_APP_BACKEND_URL}/create/order`,
  //     {
  //       products,
  //       totalPrice: totalPrice,
  //       user: user.user,
  //     }
  //   );

  // }

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">CART TOTALS</h2>
      <table className="checkout-table">
        <tr className="checkout-table-row">
          <td className="checkout-table-cell">Subtotal</td>
          <td className="checkout-table-cell">${total}</td>
        </tr>
        <tr className="checkout-table-row">
          <td className="checkout-table-cell">Total</td>
          <td className="checkout-table-cell">${total}</td>
        </tr>
      </table>
      <Link to="/checkout">
        <button
          className="checkout-btn"
          onClick={() => {
            checkOutHandler();
          }}
        >
          PROCEED TO CHECKOUT
        </button>
      </Link>
    </div>
  );
}

export default CartCheckout;
