import { Module } from '@nestjs/common';
import { RegistrarService } from './registrar.service';
import { RegistrarController } from './registrar.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './entities/registrar-entity';
//import { IsUniqueConstraint } from 'src/validador';


@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  controllers: [RegistrarController],
  providers: [
    RegistrarService,
 // IsUniqueConstraint
] ,
})
export class RegistrarModule {}
