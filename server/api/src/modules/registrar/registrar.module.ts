import { Module } from '@nestjs/common';
import { RegistrarService } from './registrar.service';
import { RegistrarController } from './registrar.controller';
import { IsUniqueConstraint } from 'src/validador';


@Module({
  controllers: [RegistrarController],
  providers: [
    RegistrarService,
  IsUniqueConstraint],
})
export class RegistrarModule {}
