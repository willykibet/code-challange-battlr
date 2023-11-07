import React from "react";
import Bot from "./Bots";
import bounju from "./BotCollection.module.css";

function BotCollection({ bots, onAddToArmy }) {
  return (
    <div className={bounju.botCollection}>
      {bots.map((bot) => (
        <Bot key={bot.id} bot={bot} onAddToArmy={onAddToArmy} />
      ))}
    </div>
  );
}

export default BotCollection;
