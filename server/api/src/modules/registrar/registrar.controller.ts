import { Body, Controller, Post } from '@nestjs/common';
import { RegistrarService } from './registrar.service';
import { RegistrarColaborador } from './model/colaborador-registrar';

@Controller('registrar')
export class RegistrarController {
  constructor(private readonly registrarService: RegistrarService) {}

  @Post()
  registrar(@Body() cadastroColaborador: RegistrarColaborador) {
    return cadastroColaborador;
  }
}
