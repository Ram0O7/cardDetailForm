import React from "react";

export default function CardDisplay({ data }) {
  const { name, month, year, cvv, card_number } = data;
  return (
    <div className="flex-1 relative">
      <picture className="absolute top-0 left-0 -z-10 overflow-hidden h-full scale-x-150 lg:scale-100 lg:w-3/4">
        <source
          media="(min-width:1024px)"
          srcSet="/images/bg-main-desktop.png"
        />
        <img src="/images/bg-main-mobile.png" alt="card" />
      </picture>
      <div className="card_back absolute -top-2 -right-6 lg:top-2/4 lg:right-44 scale-75 lg:scale-100 w-fit">
        <img src="/images/bg-card-back.png" alt="card back" />
        <div className="absolute flex justify-end items-center top-0 left-0 w-full h-full p-12">
          <p className="font-bold tracking-widest text-White">{cvv}</p>
        </div>
      </div>
      <div className="card_back absolute top-2/4 -left-6 lg:top-36 lg:left-44 scale-75 lg:scale-100 w-fit">
        <img src="/images/bg-card-front.png" alt="card front" />
        <div className="absolute flex flex-col justify-between top-0 left-0 w-full h-full p-6">
          <div>
            <img
              src="/images/card-logo.svg"
              alt="card logo"
              className="scale-90 lg:scale-100"
            />
          </div>
          <div className="flex flex-col gap-4 text-White">
            <p className="font-bold text-2xl lg:text-3xl tracking-widest">
              {card_number}
            </p>
            <div className="flex justify-between">
              <p className="uppercase">{name}</p>
              <p>{`${month}/${year.substring(year.length - 2)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}