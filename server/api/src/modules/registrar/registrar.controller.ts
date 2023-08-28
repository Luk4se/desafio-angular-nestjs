import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarService } from './registrar.service';
import { CriarColaboradorDto } from './dto/criarColaborador.dto';

@Controller('registrar')
export class RegistrarController {
  constructor(private readonly registrarService: RegistrarService) {}

  @Post()
  registrar(@Body() criarColaborador: CriarColaboradorDto) {
    console.log(criarColaborador)
    this.registrarService.criarColaborador(criarColaborador)
  }
}
