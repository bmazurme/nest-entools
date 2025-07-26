import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';

import { swaggerConfig } from './common/configs/swagger.config';
import { loggerConfig } from './common/configs/logger.config';
import { configureCors } from './common/configs/cors.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, loggerConfig);

  app.use(cookieParser());
  configureCors(app);

  const documentFactory = () =>
    SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
