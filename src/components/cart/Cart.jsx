import ShopBanner from "../shopBanner/ShopBanner";
import SingleProduct from "../singleProduct/SingleProduct";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

function Cart() {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <ShopBanner />
      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>PRODUCT</th>
              <th>PRICE</th>
              <th>QUANTITY</th>
              <th>SUBTOTAL</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((product) => {
              return (
                <tr>
                  <td>{product.product.name}</td>
                  <td>{product.product.price}</td>
                  <td>{product.qty}</td>
                  <td>{product.product.price * product.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default Cart;
