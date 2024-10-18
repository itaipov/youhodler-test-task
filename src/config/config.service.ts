import { Injectable } from '@nestjs/common';
import { ConfigService as AppConfigService } from '@nestjs/config';

@Injectable()
export class ConfigService {
  constructor(private readonly configService: AppConfigService) {}

  getBinanceUrl(): string {
    return this.configService.get<string>('BINANCE_URL');
  }

  getCommission(): number {
    return parseFloat(this.configService.get<string>('COMMISSION', '0.0001'));
  }

  getUpdateFrequency(): number {
    return parseInt(this.configService.get<string>('UPDATE_FREQUENCY', '10'), 10);
  }

  getPort(): number {
    return parseInt(this.configService.get<string>('PORT'), 10);
  }
}