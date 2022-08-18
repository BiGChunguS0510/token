import React, { useState } from "react";
import { token_backend } from "../../../declarations/token_backend";
import { useState } from "react";

function Faucet() {

  const [isPressed, setPress] = useState(false);
  const [buttonText, setText] = useState("Gimme Gib");
  async function handleClick(event) {
    setPress(true);
    const text = await token_backend.payOut();
    setText(text);
    // setPress(false);
  }

  return (
    <div className="blue window">
      <h2>
        <span role="img" aria-label="tap emoji">
          🚰
        </span>
        Faucet
      </h2>
      <label>Get your free DAngela tokens here! Claim 10,000 DANG coins to your account.</label>
      <p className="trade-buttons">
        <button disabled={isPressed} id="btn-payout" onClick={handleClick}>
          {buttonText}
        </button>
      </p>
    </div>
  );
}

export default Faucet;
