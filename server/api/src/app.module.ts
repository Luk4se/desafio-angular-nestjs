import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrarModule } from './modules/registrar/registrar.module';

@Module({
  imports: [RegistrarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
