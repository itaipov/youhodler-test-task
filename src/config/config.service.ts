import { Injectable } from '@nestjs/common';
import { ConfigService as AppConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: AppConfigService) {}

  getBinanceUrl(): string {
    return this.configService.get<string>('URL_BINANCE');
  }

  getCommission(): number {
    return parseFloat(this.configService.get<string>('COMMISSION'));
  }

  getUpdateFrequency(): number {
    return parseInt(this.configService.get<string>('UPDATE_FREQUENCY'), 10);
  }

  getPort(): number {
    return parseInt(this.configService.get<string>('PORT'), 10);
  }
}