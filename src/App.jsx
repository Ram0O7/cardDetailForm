import React, { useEffect, useState } from "react";
import CardDisplay from "./components/cardDisplay";
import CardDetail from "./components/CardDetail";
import ThankYou from "./components/ThankYou";
const App = () => {
  const [cardData, setCardData] = useState({
    name: "Jane Appleseed",
    month: "0",
    year: "2000",
    cvv: "000",
    card_number: "0000 0000 0000 0000",
  });
  const [detailSubmitted, setDetailSubmitted] = useState(false);

  const handleCardUpdate = (data) => {
    setCardData(data);
  };

  useEffect(() => {
    if (!detailSubmitted) {
      setDetailSubmitted(true);
    }
  }, [cardData]);

  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <CardDisplay data={cardData} />
      {detailSubmitted ? (
        <ThankYou
          onContinue={() => setDetailSubmitted(false)}
          name={cardData.name}
        />
      ) : (
        <CardDetail
          updateCardDetail={handleCardUpdate}
          detailSubmitted={detailSubmitted}
        />
      )}
    </main>
  );
};

export default App;
