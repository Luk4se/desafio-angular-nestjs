import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';
const { cors } = require('cors-ts')

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({transform: true}))
 app.enableCors({
  origin: "localhost:4200",
 })
  useContainer(app.select(AppModule), {fallbackOnErrors: true});
  await app.listen(3000);
}
bootstrap();
