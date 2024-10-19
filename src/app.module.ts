import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { BinanceModule } from './modules/binance-module.module';
import { BitcoinPriceController } from './controllers/bitcoin-price.controller';


@Module({
  imports: [ConfigModule, BinanceModule],
  controllers: [BitcoinPriceController],
})
export class AppModule {}
