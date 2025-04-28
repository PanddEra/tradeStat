package trading.tradestat.controller;
import trading.tradestat.model.Trade;
import trading.tradestat.service.ExcelService;
import trading.tradestat.service.TradeService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/trades")
@CrossOrigin(origins = "http://localhost:3000")
public class TradeController {
    private final TradeService tradeService;
    private final ExcelService excelService;

    public TradeController(TradeService tradeService, ExcelService excelService) {
        this.tradeService = tradeService;
        this.excelService = excelService;
    }

    @PostMapping
    public Trade addTrade(@RequestBody Trade trade) {
        Trade savedTrade = tradeService.saveTrade(trade);
        excelService.exportTradesToExcel(tradeService.getAllTrades());
        return savedTrade;
    }

    @GetMapping
    public List<Trade> getAllTrades() {
        return tradeService.getAllTrades();
    }
}