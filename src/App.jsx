import React, { useEffect, useState } from "react";
import CardDisplay from "./components/cardDisplay";
import CardDetail from "./components/CardDetail";
import ThankYou from "./components/ThankYou";
const App = () => {
  // state variable for card form data
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvv, setCvv] = useState("");

  // confirm form submission
  const [detailSubmitted, setDetailSubmitted] = useState(false);

  //handle input changes
  const handleNameChange = (e) => {
    setName(e.target.value);
    // Perform validation and update nameError
  };

  const handleCardNumberChange = (e) => {
    setCardNumber(e.target.value);
    // Perform validation and update cardNumberError
  };

  const handleMonthChange = (e) => {
    setMonth(e.target.value);
    // Perform validation and update cardNumberError
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    // Perform validation and update cardNumberError
  };

  const handleCvvChange = (e) => {
    setCvv(e.target.value);
    // Perform validation and update cardNumberError
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDetailSubmitted(true);
  };

  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <CardDisplay
        name={name}
        cardNumber={cardNumber}
        month={month}
        year={year}
        cvv={cvv}
      />
      {detailSubmitted ? (
        <ThankYou onContinue={() => setDetailSubmitted(false)} name={name} />
      ) : (
        <CardDetail
          // input change handlers
          handleNameChange={handleNameChange}
          handleCardNumberChange={handleCardNumberChange}
          handleMonthChange={handleMonthChange}
          handleYearChange={handleYearChange}
          handleCvvChange={handleCvvChange}
          // handle form submission
          handleSubmit={handleSubmit}
        />
      )}
    </main>
  );
};

export default App;
