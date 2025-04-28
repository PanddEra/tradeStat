import React, { useEffect, useState } from "react";
import { getTrades } from "../services/api";

const TradeList = () => {
    const [trades, setTrades] = useState([]);

    useEffect(() => {
        const fetchTrades = async () => {
            try {
                const data = await getTrades();
                setTrades(data);
            } catch (error) {
                console.error("Помилка завантаження данних: ", error);
            }
        };

        fetchTrades();
    }, []);

    return (
        <div>
            <h2>Список угод</h2>
            <ul>
                {trades.map((trade) => (
                    <li key={trade.id}>
                  {trade.symbol} - {trade.tradeType} - {trade.entryPrice} - {trade.exitPrice} - {trade.tradeDate}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TradeList;