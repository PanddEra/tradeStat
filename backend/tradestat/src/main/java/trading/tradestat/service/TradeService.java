package trading.tradestat.service;

import trading.tradestat.model.Trade;
import trading.tradestat.repository.TradeRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TradeService {
    private final TradeRepository tradeRepository;

    public TradeService(TradeRepository tradeRepository) {
        this.tradeRepository = tradeRepository;
    }

    public Trade saveTrade(Trade trade) {
        return tradeRepository.save(trade);
    }

    public List<Trade> getAllTrades() {
        return tradeRepository.findAll();
    }
}