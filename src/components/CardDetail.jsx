import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function CardDetail({ updateCardDetail }) {
  const [cardData, setCardData] = useState({
    name: "Jane Appleseed",
    month: "0",
    year: "2000",
    cvv: "000",
    card_number: "0000 0000 0000 0000",
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const numberInputRef = useRef(null);

  function formatCreditCard(input) {
    // Remove any non-digit characters
    var value = input.value.replace(/\D/g, "");

    // Add space after every 4 digits
    if (value.length > 0) {
      value = value.match(new RegExp(".{1,4}", "g")).join(" ");
    }

    input.value = value;
  }

  const onSubmit = (data) => {
    setCardData({
      ...data,
      card_number: numberInputRef.current.value,
    });
    // reset the form
    updateCardDetail(cardData);
    reset();
  };

  return (
    <div className="flex-1 flex justify-center items-center lg:justify-start">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-10/12 lg:max-w-sm flex flex-col gap-6"
      >
        <div className="name flex flex-col gap-1">
          <label htmlFor="name">CARDHOLDER NAME</label>
          <input
            type="text"
            id="name"
            placeholder="e.g. Jane Appleseed"
            {...register("name", {
              required: "Cardholder name is required!",
              maxLength: {
                value: 20,
                message: "name cannot exceed 20 characters!",
              },
            })}
          />
          {errors.name && (
            <p className="text-xs text-input_errors">{errors.name?.message}</p>
          )}
        </div>
        <div className="card-number flex flex-col gap-1">
          <label htmlFor="card-number">CARD NUMBER</label>
          <input
            ref={numberInputRef}
            type="text"
            id="card-number"
            placeholder="e.g. 1234 5678 9123 0000"
            pattern="[0-9]{4}(\s[0-9]{4}){3}"
            onInput={() => formatCreditCard(numberInputRef.current)}
            maxLength={19}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="expiry">EXP. DATE (MM/YY)&nbsp;&nbsp;&nbsp;CVV</label>
          <div className="grid grid-cols-4 gap-x-3">
            <input
              id="expiry"
              placeholder="MM"
              type="number"
              {...register("month", {
                required: "this is a required field!",
                min: {
                  value: 1,
                  message: "month must be within 1-12!",
                },
                max: {
                  value: 12,
                  message: "month must be within 1-12!",
                },
              })}
              className="col-span-1"
            />
            <input
              placeholder="YY"
              type="number"
              {...register("year", {
                required: "this is a required field!",
                min: {
                  value: new Date().getFullYear(),
                  message: "valid expiry year required!",
                },
                max: {
                  value: new Date().getFullYear() + 10,
                  message: "valid expiry year required!",
                },
              })}
              className="col-span-1"
            />
            <input
              placeholder="e.g. 123"
              className="col-span-2"
              type="number"
              {...register("cvv", {
                required: "this is a required field!",
                min: {
                  value: 100,
                  message: "cvv must contain 3 digits!",
                },
                max: {
                  value: 999,
                  message: "cvv must contain 3 digits!",
                },
              })}
            />
          </div>
          {(errors.month || errors.year || errors.cvv) && (
            <p className="text-xs text-input_errors">
              {errors.month?.message ||
                errors.year?.message ||
                errors.cvv?.message}
            </p>
          )}
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
