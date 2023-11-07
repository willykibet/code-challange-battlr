import React, { useState, useEffect } from "react";
import BotCollection from "./BotsCollection";
import YourBotArmy from "./YourBotArmy";
import "./App.css";
function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((response) => response.json())
      .then((data) => setBots(data));
  }, []);

  const addToArmy = (bot) => {
    if (!yourBotArmy.includes(bot)) {
      setYourBotArmy([...yourBotArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = yourBotArmy.filter((b) => b.id !== bot.id);
    setYourBotArmy(updatedArmy);
  };

  return (
    <div>
      <YourBotArmy yourBotArmy={yourBotArmy} onRelease={releaseBot} />
      <BotCollection
        bots={bots}
        onAddToArmy={addToArmy}
        yourBotArmy={yourBotArmy}
      />
    </div>
  );
}

export default App;
