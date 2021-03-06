import { useState } from "react";
import "./checkout.css";

function Step2({ setStep, setOrder }) {
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvvCode, setCvvCode] = useState("");
  return (
    <>
      <h3 className="step-title">PAYMENT METHOD</h3>
      <div className="container-billing-details">
        <div className="payment-method">
          <div className="payment-method">
            {" "}
            <label className="payment-method-label">
              {" "}
              <input
                type="radio"
                onClick={() => setPaymentMethod("credit")}
              />{" "}
              Credit Card
            </label>
          </div>

          <div className="payment-method">
            <div>
              <img
                className="credit-card"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/556px-Visa_Inc._logo.svg.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="credit-card"
                src="https://upload.wikimedia.org/wikipedia/commons/7/72/MasterCard_early_1990s_logo.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="credit-card"
                src="https://www.estrategiamagazine.com/wp-content/uploads/2018/08/historia-de-american-express.jpeg"
                alt=""
              />
            </div>
          </div>
        </div>
        {paymentMethod === "credit" && (
          <>
            <p className="payment-method-info">
              Safe money transfer using your bank account. Visa, Master Card,
              American Express.
            </p>
            <label className="label" htmlFor="">
              Card number
            </label>
            <div className="credit-card-container">
              <input
                placeholder="0000 0000 0000 0000"
                type="number"
                className="input input-credit-card"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
              />
              <div className="credit-card credit-card-input" />
            </div>

            <div className="card-info-container">
              <div className="name-on-card-container">
                <label className="label" htmlFor="">
                  Name on card
                </label>
                <div className="credit-card-container">
                  <input
                    type="text"
                    className=" input-credit-card input-short"
                    value={nameOnCard}
                    onChange={(event) => setNameOnCard(event.target.value)}
                  />
                </div>
              </div>

              <div className="expiry-date-container">
                <label className="label" htmlFor="">
                  Expiry date
                </label>
                <div className="credit-card-container">
                  <input
                    placeholder="MM/YY"
                    type="text"
                    className="input-short input-credit-card"
                    value={expiryDate}
                    onChange={(event) => setExpiryDate(event.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className="label" htmlFor="">
                  Card Verification Number
                </label>
                <div className="credit-card-container cvv-container">
                  <input
                    type="password"
                    className="input-short input-credit-card"
                    value={cvvCode}
                    onChange={(event) => setCvvCode(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </>
        )}
        <button
          type="button"
          className="checkout-btn mt-3"
          onClick={() => {
            setStep("1");
            // setOrder({});
          }}
        >
          PREVIOUS
        </button>
        <button
          type="button"
          className="checkout-btn mt-3 ms-4"
          onClick={() => {
            setStep("3");
            // setOrder({});
          }}
        >
          NEXT
        </button>
      </div>
    </>
  );
}

export default Step2;
