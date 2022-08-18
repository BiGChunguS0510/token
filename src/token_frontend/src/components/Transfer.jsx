import React, { useState } from "react";
import { token_backend } from "../../../declarations/token_backend";
import { Principal } from "@dfinity/principal";

function Transfer() {

  const [toId, setId] = useState("");
  const [toAmount, setAmount] = useState("");
  const [transferText, setTransfer] = useState("Transfer")
  const [isDisable, setDisable] = useState(false);
  const [isHidden, setHidden] = useState(true);
  
  async function handleClick() {
    setDisable(true);
    const transferId = Principal.fromText(toId);
    const amountTransfer = Number(toAmount);
    const isTransferred = await token_backend.transfer(transferId, amountTransfer);
    setTransfer(isTransferred);
    setDisable(false);
    setHidden(false);
  }

  return (
    <div className="window white">
      <div className="transfer">
        <fieldset>
          <legend>To Account:</legend>
          <ul>
            <li>
              <input
                type="text"
                id="transfer-to-id"
                onChange={(e) => {
                  setId(e.target.value);
                }}
                value = {toId}
              />
            </li>
          </ul>
        </fieldset>
        <fieldset>
          <legend>Amount:</legend>
          <ul>
            <li>
              <input
                type="number"
                id="amount"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
                value = {toAmount}
              />
            </li>
          </ul>
        </fieldset>
        <p className="trade-buttons">
          <button disabled={isDisable} id="btn-transfer" onClick={handleClick} >
            Transfer
          </button>
        </p>
        <p hidden = {isHidden}>{transferText}</p>
      </div>
    </div>
  );
}

export default Transfer;
