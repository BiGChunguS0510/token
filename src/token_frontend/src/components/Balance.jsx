import React, { useState } from "react";
import { token_backend } from "../../../declarations/token_backend";
import { Principal } from "@dfinity/principal";
function Balance() {

  const [inputValue, setValue] = useState("");
  const [balanceValue, setBalance] = useState("");
  const [cryptoSymbol, setSymbol] = useState("");
  const [isHidden, setHidden] = useState(true);

  function getValue(event){
    const currentValue = event.target.value;
    setValue(currentValue);
  }
  
  async function handleClick(event) {
    // event.preventDefault();
    console.log(inputValue);
    const principal = Principal.fromText(inputValue);
    const balance = await token_backend.balanceOf(principal);
    const symbol = await token_backend.getSymbol();
    setSymbol(symbol);
    setBalance(balance.toLocaleString());
    setHidden(false);
    // const balance = token_backend.balanceOf(document.getElementById("balance-principal-id").value);
    // console.log(balance);
  }


  return (
    <div className="window white">
      <label>Check account token balance:</label>
      <p>
        <input
          id="balance-principal-id"
          type="text"
          placeholder="Enter a Principal ID"
          value={inputValue}
          onChange={getValue}
        />
      </p>
      <p className="trade-buttons">
        <button
          id="btn-request-balance"
          onClick={handleClick}
        >
          Check Balance
        </button>
      </p>
      <p hidden={isHidden}>This account has a balance of {balanceValue} {cryptoSymbol}.</p>
    </div>
  );
}

export default Balance;
