import { BitcoinPriceDto } from '../dto/bitcoin-price.dto';
import { BinanceResponseDto } from '../dto/binance-response.dto';

export class PriceMapper {
  static toBitcoinPriceDto(binanceData: BinanceResponseDto, commission: number): BitcoinPriceDto {
    const bidWithCommission = +binanceData.bidPrice * (1 + commission);
    const askWithCommission = +binanceData.askPrice * (1 + commission);
    const midPrice = (bidWithCommission + askWithCommission) / 2;

    return new BitcoinPriceDto(bidWithCommission, askWithCommission, midPrice);
  }
}