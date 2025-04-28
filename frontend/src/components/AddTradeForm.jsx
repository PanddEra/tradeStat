import React, { useState } from "react";
import axios from "axios";

const AddTradeForm = ({ onTradeAdded }) => {
  const [formData, setFormData] = useState({
    symbol: "",
    tradeType: "",
    entryPrice: "",
    exitPrice: "",
    stopLoss: "",
    takeProfit: "",
    tradeDate: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/trades", formData);
      alert("Угода додана успішно!");
      onTradeAdded?.();
      setFormData({
        symbol: "",
        tradeType: "",
        entryPrice: "",
        exitPrice: "",
        stopLoss: "",
        takeProfit: "",
        tradeDate: "",
      });
    } catch (error) {
      console.error("Помилка при додаванні угоди:", error);
      alert("Не вдалося додати угоду.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Додати нову угоду</h2>
      <input type="text" name="symbol" placeholder="Пара(BTCUSDT)" value={formData.symbol} onChange={handleChange} required />
      <input type="text" name="tradeType" placeholder="Тип (LONG/SHORT)" value={formData.tradeType} onChange={handleChange} required />
      <input type="number" name="entryPrice" placeholder="Ціна входу" value={formData.entryPrice} onChange={handleChange} required />
      <input type="number" name="exitPrice" placeholder="Ціна виходу" value={formData.exitPrice} onChange={handleChange} required />
      <input type="number" name="stopLoss" placeholder="Stop Loss" value={formData.stopLoss} onChange={handleChange} required />
      <input type="number" name="takeProfit" placeholder="Take Profit" value={formData.takeProfit} onChange={handleChange} required />
      <input type="datetime-local" name="tradeDate" value={formData.tradeDate} onChange={handleChange} required />
      <button type="submit">Додати</button>
    </form>
  );
};

export default AddTradeForm;