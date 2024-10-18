import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { BinanceService } from '../services/binance.service';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
  ],
  providers: [BinanceService],
  exports: [BinanceService],
})
export class BinanceModule {}