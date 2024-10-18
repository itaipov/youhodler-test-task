import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { PriceMapper } from './mapper/bitcoin-price.mapper';
import { BitcoinPriceDto } from './dto/bitcoin-price.dto';
import { BinanceResponseDto } from './dto/binance-response.dto';
import { ConfigService } from '../config/config.service';

@Injectable()
export class BinanceService {
  private readonly logger = new Logger(BinanceService.name);
  private latestPrice: BitcoinPriceDto;
  private intervalId: NodeJS.Timeout;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
  }

  onModuleInit() {
    const updateFrequency = this.configService.getUpdateFrequency() * 1000;
    this.logger.log(`Setting interval for updating price every ${updateFrequency / 1000} seconds`);


    this.intervalId = setInterval(() => {
      this.updateBitcoinPrice();
    }, updateFrequency);
  }

  onModuleDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


  async updateBitcoinPrice() {
    this.logger.log('Updating Bitcoin price...');
    const price = await this.getBitcoinPrice();
    this.latestPrice = price;
    this.logger.log(`Latest price updated: ${JSON.stringify(price)}`);
  }

  async getBitcoinPrice(): Promise<BitcoinPriceDto> {
    const url = this.configService.getBinanceUrl();
    const commission = this.configService.getCommission();

    this.logger.debug(`Sending request to Binance API at ${url}`);

    const { data } = await this.httpService.axiosRef.get(url);
    const binanceData: BinanceResponseDto = data;

    this.logger.debug(`Received data from Binance: ${JSON.stringify(binanceData)}`);

    const bitcoinPrice = PriceMapper.toBitcoinPriceDto(binanceData, commission);

    this.logger.debug(
      `Prices calculated - Bid: ${bitcoinPrice.bid}, Ask: ${bitcoinPrice.ask}, Mid: ${bitcoinPrice.mid}, Commission: ${commission}`,
    );

    return bitcoinPrice;
  }

  async getLatestPrice(): Promise<BitcoinPriceDto> {
    return this.latestPrice;
  }
}