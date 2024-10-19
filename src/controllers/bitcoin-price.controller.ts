import { Controller, Get } from '@nestjs/common';
import { BinanceService } from '../services/binance.service';
import { BitcoinPriceDto } from '../services/dto/bitcoin-price.dto';

@Controller('api/bitcoin-price')
export class BitcoinPriceController {
  constructor(private readonly binanceService: BinanceService) {}

  @Get()
  async getBitcoinPrice(): Promise<BitcoinPriceDto> {
    return this.binanceService.getLatestPrice();
  }
}