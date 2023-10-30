import React, { useState, useEffect } from "react";

export default function CardDisplay({ name, cardNumber, month, year, cvv }) {
  const [currentName, setCurrentName] = useState("Your Name");
  const [currentCardNumber, setCurrentCardNumber] = useState(
    "0000 0000 0000 0000"
  );
  const [currentMonth, setCurrentMonth] = useState("0");
  const [currentYear, setCurrentYear] = useState("00");
  const [currentCvv, setCurrentCvv] = useState("000");

  useEffect(() => {
    name ? setCurrentName(name) : setCurrentName("Your Name");
    cardNumber
      ? setCurrentCardNumber(cardNumber)
      : setCurrentCardNumber("0000 0000 0000 0000");
    month ? setCurrentMonth(month) : setCurrentMonth("0");
    year ? setCurrentYear(year) : setCurrentYear("00");
    cvv ? setCurrentCvv(cvv) : setCurrentCvv("000");
  }, [name, cardNumber, month, year, cvv]);

  return (
    <div className="flex-1 relative">
      <picture className="absolute top-0 left-0 -z-10 overflow-hidden h-full scale-x-150 lg:scale-100 lg:w-3/4">
        <source media="(min-width:1024px)" srcSet="./bg-main-desktop.png" />
        <img src="./bg-main-mobile.png" alt="card" />
      </picture>
      <div
        id="card-back"
        className="absolute -top-2 -right-6 lg:top-2/4 lg:right-44 scale-75 lg:scale-100 w-fit rounded-lg shadow-xl"
      >
        <img src="./bg-card-back.png" alt="card back" />
        <div className="absolute flex justify-end items-center top-0 left-0 w-full h-full p-10 lg:p-12">
          <p className="font-bold tracking-widest text-White mb-2">
            {currentCvv}
          </p>
        </div>
      </div>
      <div
        id="card-front"
        className="absolute top-2/4 -left-6 lg:top-36 lg:left-44 scale-75 lg:scale-100 w-fit rounded-lg shadow-xl"
      >
        <img src="./bg-card-front.png" alt="card front" />
        <div className="absolute flex flex-col justify-between top-0 left-0 w-full h-full p-6">
          <div>
            <img
              src="./card-logo.svg"
              alt="card logo"
              className="scale-90 lg:scale-100"
            />
          </div>
          <div className="flex flex-col gap-4 text-White">
            <p className="font-bold text-2xl lg:text-3xl tracking-widest uppercase">
              {currentCardNumber}
            </p>
            <div className="flex justify-between">
              <p className="capitalize">{currentName}</p>
              <p>{`${
                currentMonth < 10 ? "0" + currentMonth : currentMonth
              }/${currentYear}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
