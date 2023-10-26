import React, { useState } from "react";
import CardDisplay from "./components/cardDisplay";
import CardDetail from "./components/CardDetail";

const App = () => {
  const [updatedCardData, setUpdatedCardData] = useState({
    name: "Jane Appleseed",
    month: "10",
    year: "2025",
    cvv: "169",
    card_number: "2345 9087 1234 9087",
  });

  const updateCardDetail = (data) => {
    setUpdatedCardData(data);
  };

  return (
    <main className="min-h-screen w-full flex flex-col lg:flex-row overflow-hidden">
      <CardDisplay data={updatedCardData} />
      <CardDetail updateCardDetail={updateCardDetail} />
    </main>
  );
};

export default App;
