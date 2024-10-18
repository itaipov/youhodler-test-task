import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger();
  const configService = app.get(ConfigService);
  const port = configService.getPort() || 8888;
  await app.listen(port);
  logger.log(`Service successfully listening on port ${port}`);
}

bootstrap();
