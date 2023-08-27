import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegistrarModule } from './modules/registrar/registrar.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './modules/registrar/entities/registrar-entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    password: 'sysdba',
    username: 'postgres',
    entities: [Colaborador],
    database: 'desafiofullstack',
    synchronize: true,
    logging: true,
  }),
    RegistrarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
