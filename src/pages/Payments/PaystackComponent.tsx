import React, { useState } from "react";
import { PaystackButton } from "react-paystack";
import { useNavigate } from "react-router-dom";
import "./pay.css";

const PaystackComponent: React.FC = () => {
  const publicKey = "pk_live_9f6877d3bad9255bd0b7a582cce978fcaf354b80";
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [amount, setAmount] = useState<any>("");
  const [errors, setErrors] = useState<{ email?: string; amount?: string }>({});
  const [validated, setValidated] = useState<boolean>(false);

  const reference = `donation_${Math.floor(Math.random() * 1000000000 + 1)}`;

  const validateInputs = () => {
    const newErrors: { email?: string; amount?: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!amount || amount <= 0) {
      newErrors.amount = "Please enter a valid amount greater than zero.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleProceed = () => {
    if (validateInputs()) {
      setValidated(true); // Trigger Paystack button display
    }
  };

  const componentProps = {
    email,
    amount: amount * 100, // Paystack expects the amount in kobo
    publicKey,
    text: "Donate",
    color: "#fff",
    backgroundColor: "red",
    onSuccess: () => {
      console.log("Payment Successful!");
      navigate("/success");
    },
    onClose: () => {
      console.log("Payment closed");
    },
    reference,
  };

  return (
    <div
      style={{
        padding: "20px",
        // maxWidth: "400px",
        margin: "0 auto",
        paddingTop: 120,
        marginTop: 120,
        marginBottom: 120,
        paddingBottom: 160,
        backgroundColor: "#043424",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div style={{ maxWidth: 400 }}>
        <h2
          style={{
            color: "#FFDB1B",
            fontSize: 48,
            fontWeight: 900,
            textAlign: "center",
          }}
        >
          Donate to Isaac Ukeleghe Foundation
        </h2>
        <form>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginTop: "24px", color: "#FFDB1B" }}>
              Email Address:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={{
                width: "100%",
                padding: "16px",
                marginBottom: "5px",
                backgroundColor: "#fff",
                border: "2px solid #FFDB1B",
                color: "#000",
              }}
              required
            />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label style={{ marginTop: "24px", color: "#FFDB1B" }}>
              Amount (NGN):
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              placeholder="Enter amount"
              style={{
                width: "100%",
                padding: "16px",
                marginBottom: "5px",
                backgroundColor: "#fff",
                border: "2px solid #FFDB1B",
                color: "#000",
              }}
              required
            />
            {errors.amount && <p style={{ color: "red" }}>{errors.amount}</p>}
          </div>
          <br />
          {!validated && (
            <button
              type="button"
              onClick={handleProceed}
              style={{
                backgroundColor: "#FFDB1B",
                color: "#fff",
                border: "none",
                padding: "10px 15px",
                cursor: "pointer",
                borderRadius: "5px",
                marginTop: "10px",
                width: "100%",
              }}
            >
              Proceed
            </button>
          )}
        </form>

        {validated && (
          <div>
            <PaystackButton {...componentProps} className="paystack-button" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PaystackComponent;
