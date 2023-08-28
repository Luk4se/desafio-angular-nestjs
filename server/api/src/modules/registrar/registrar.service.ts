import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Colaborador } from './entities/registrar-entity';
import { CriarColaboradorDto } from './dto/criarColaborador.dto';



@Injectable()
export class RegistrarService {
    constructor(
        @InjectRepository(Colaborador) private readonly colaboradorRepository: Repository<Colaborador>,
      ) {}

      criarColaborador(criarColaboradorDto: CriarColaboradorDto): Promise<Colaborador> {
        const colaborador: Colaborador = new Colaborador();

        colaborador.nome = criarColaboradorDto.nome;
        colaborador.email = criarColaboradorDto.email;
        colaborador.cpf = criarColaboradorDto.cpf;
        colaborador.celular = criarColaboradorDto.celular;
        colaborador.conhecimento = criarColaboradorDto.conhecimentos;
        colaborador.validacao = criarColaboradorDto.validacao;
        colaborador.dataAlteracao = criarColaboradorDto.dataAlteracao;
        return this.colaboradorRepository.save(colaborador);
      }

      encontrarColaboradores(): Promise<Colaborador[]> {
        return this.colaboradorRepository.find();
      }

      verColaborador(id: number): Promise<Colaborador> {
        return this.colaboradorRepository.findOneBy({ id });
      }
}
