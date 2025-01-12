import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { CardItemTypes } from "../../types/card";

const Cards = ({ type }: { type: string }) => {
  const [cards, setCards] = useState([]);
  async function getCards() {
    const response = await fetch(
      "https://json-server-seven-murex.vercel.app/tamkart/"
    );
    const data = await response.json();
    setCards(data.cards.filter((item: CardItemTypes) => item.type === type));
  }

  useEffect(() => {
    getCards();
  }, [type]);

  return (
    <div className="flex w-full flex-col gap-11 mt-10">
      {cards.map((card, index) => (
        <CardItem data={card} key={index} />
      ))}
    </div>
  );
};

export default Cards;
