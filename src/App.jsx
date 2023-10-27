import React, { useState } from "react";
import CardDisplay from "./components/cardDisplay";
import CardDetail from "./components/CardDetail";
import ThankYou from "./components/ThankYou";

const App = () => {
  const [updatedCardData, setUpdatedCardData] = useState({
    name: "Jane Appleseed",
    month: "0",
    year: "2000",
    cvv: "000",
    card_number: "0000 0000 0000 0000",
  });
  const [detailSubmitted, setDetailSubmitted] = useState(false);

  const handleCardUpdate = (data) => {
    if (!detailSubmitted) {
      setUpdatedCardData(data);
      setDetailSubmitted(true);
    }
  };

  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <CardDisplay data={updatedCardData} />
      {detailSubmitted ? (
        <ThankYou
          onContinue={() => setDetailSubmitted(false)}
          name={updatedCardData.name}
        />
      ) : (
        <CardDetail updateCardDetail={handleCardUpdate} />
      )}
    </main>
  );
};

export default App;
