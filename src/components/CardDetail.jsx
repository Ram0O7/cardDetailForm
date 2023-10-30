import React, { useEffect, useRef, useState } from "react";

export default function CardDetail({
  handleNameChange,
  handleCardNumberChange,
  handleMonthChange,
  handleYearChange,
  handleCvvChange,
  handleSubmit,
}) {
  // error state variables for tracking validation
  const [nameError, setNameError] = useState("");
  const [cardNumberError, setCardNumberError] = useState("");
  const [monthError, setMonthError] = useState("");
  const [yearError, setYearError] = useState("");
  const [cvvError, setCvvError] = useState("");

  function validateCardNumber(input) {
    // Remove any non-digit characters
    var value = input.target.value.replace(/\D/g, "");
    if (input.target.validity.patternMismatch) {
      setCardNumberError("please enter a valid card number !");
    } else {
      setCardNumberError("");
    }
    // formatting the credit card value by
    // Adding space after every 4 digits
    if (value.length > 0) {
      value = value.match(new RegExp(".{1,4}", "g")).join(" ");
    }
    input.target.value = value;
  }

  // setting error states for cardHolderName
  const validateName = (input) => {
    if (input.target.value.length > 19) {
      setNameError("name must be within 20 characters !");
    } else if (input.target.validity.patternMismatch) {
      setNameError("only simple characters are allowed!");
    } else {
      setNameError("");
    }
  };

  // setting error states for month
  const validateMonth = (input) => {
    input.target.value = input.target.value.replace(/\D/g, "").slice(0, 2);

    if (input.target.validity.patternMismatch) {
      setMonthError("valid expiry month required (1..12) !");
      setYearError("");
      setCvvError("");
    } else {
      setMonthError("");
    }
  };

  // setting error states for year
  const validateYear = (input) => {
    input.target.value = input.target.value.replace(/\D/g, "").slice(0, 2);

    if (input.target.validity.patternMismatch) {
      setYearError("valid expiry year required e.g. 23, 25 !");
      setMonthError("");
      setCvvError("");
    } else {
      setYearError("");
    }
  };

  // setting error states for cvv
  const validateCvv = (input) => {
    input.target.value = input.target.value.replace(/\D/g, "").slice(0, 3);

    if (input.target.validity.patternMismatch) {
      setCvvError("cvv must contain at least 3 digits!");
      setMonthError("");
      setYearError("");
    } else {
      setCvvError("");
    }
  };

  return (
    <div className="flex-1 flex justify-center items-center lg:justify-start">
      <form
        onSubmit={handleSubmit}
        className="w-10/12 lg:max-w-sm flex flex-col gap-6"
      >
        <div className="name flex flex-col gap-1">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Jane Appleseed"
            maxLength={20}
            pattern="[A-Za-z\s]+"
            onChange={handleNameChange}
            onInput={validateName}
            required
          />
          {nameError && (
            <p className="text-xs text-input_errors">{nameError}</p>
          )}
        </div>
        <div className="card-number flex flex-col gap-1">
          <label htmlFor="card-number">CARD NUMBER</label>
          <input
            type="text"
            id="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
            pattern="[0-9]{4}(\s[0-9]{4}){3}"
            onInput={validateCardNumber}
            maxLength={19}
            onChange={handleCardNumberChange}
            required
          />
          {cardNumberError && (
            <p className="text-xs text-input_errors">{cardNumberError}</p>
          )}
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="expiry">EXP. DATE (MM/YY)&nbsp;&nbsp;&nbsp;CVV</label>
          <div className="grid grid-cols-4 gap-x-3">
            <input
              id="expiry"
              placeholder="MM"
              type="text"
              pattern="^([1-9]|1[0-2])$"
              onInput={validateMonth}
              className="col-span-1"
              onChange={handleMonthChange}
              required
            />
            <input
              placeholder="YY"
              type="text"
              pattern="^(23|24|25|26|27|28|29|30|31|32)$"
              className="col-span-1"
              onInput={validateYear}
              onChange={handleYearChange}
              required
            />
            <input
              placeholder="e.g. 123"
              className="col-span-2"
              type="txt"
              pattern="^\d{3}$"
              onInput={validateCvv}
              onChange={handleCvvChange}
              required
            />
          </div>
          {monthError && (
            <p className="text-xs text-input_errors">{monthError}</p>
          )}
          {yearError && (
            <p className="text-xs text-input_errors">{yearError}</p>
          )}
          {cvvError && <p className="text-xs text-input_errors">{cvvError}</p>}
        </div>
        <div>
          <input
            type="submit"
            value="Confirm"
            className="w-full bg-Very_dark_violet text-Light_grayish_violet py-2"
          />
        </div>
      </form>
    </div>
  );
}
