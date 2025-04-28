package trading.tradestat.service;

import trading.tradestat.model.Trade;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.util.List;

@Service
public class ExcelService {
    private static final String FILE_PATH = "trades.xlsx";

    public void exportTradesToExcel(List<Trade> trades) {
        try {
            Workbook workbook;
            Sheet sheet;

            File file = new File(FILE_PATH);
            if (file.exists()) {
                FileInputStream fis = new FileInputStream(file);
                workbook = new XSSFWorkbook(fis);
                sheet = workbook.getSheetAt(0);
                fis.close();
            } else {
                workbook = new XSSFWorkbook();
                sheet = workbook.createSheet("Trades");

                Row header = sheet.createRow(0);
                header.createCell(0).setCellValue("ID");
                header.createCell(1).setCellValue("Trade Type");
                header.createCell(2).setCellValue("Entry Price");
                header.createCell(3).setCellValue("Exit Price");
                header.createCell(4).setCellValue("Stop Loss");
                header.createCell(5).setCellValue("Take Profit");
                header.createCell(6).setCellValue("Trade Date");
            }

            int rowNum = sheet.getLastRowNum() + 1;
            for (Trade trade : trades) {
                Row row = sheet.createRow(rowNum++);
                row.createCell(0).setCellValue(trade.getId());
                row.createCell(1).setCellValue(trade.getTradeType());
                row.createCell(2).setCellValue(trade.getEntryPrice());
                row.createCell(3).setCellValue(trade.getExitPrice());
                row.createCell(4).setCellValue(trade.getStopLoss());
                row.createCell(5).setCellValue(trade.getTakeProfit());
                row.createCell(6).setCellValue(trade.getTradeDate().toString());
            }

            FileOutputStream fos = new FileOutputStream(FILE_PATH);
            workbook.write(fos);
            fos.close();
            workbook.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}