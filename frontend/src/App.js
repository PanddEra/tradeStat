import React, { useEffect, useState } from "react";
import axios from "axios";
import AddTradeForm from "./components/AddTradeForm";

function App() {
  const [trades, setTrades] = useState([]);

  const fetchTrades = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/trades");
      setTrades(response.data);
    } catch (error) {
      console.error("Помилка при отриманні трейдів:", error);
    }
  };

  useEffect(() => {
    fetchTrades();
  }, []);

  return (
    <div>
      <h1>Список трейдів</h1>
      {trades.length === 0 ? (
        <p>Немає трейдів</p>
      ) : (
        <ul>
          {trades.map((trade) => (
            <li key={trade.id}>
            {trade.symbol} | {trade.tradeType} ↪ {trade.entryPrice} → {trade.exitPrice}  |  Date:  {trade.tradeDate}
            </li>
          ))}
        </ul>
      )}

      <AddTradeForm onTradeAdded={fetchTrades} />
    </div>
  );
}

export default App;