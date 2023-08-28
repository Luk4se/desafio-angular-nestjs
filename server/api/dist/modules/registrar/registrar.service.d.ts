import { Repository } from 'typeorm';
import { Colaborador } from './entities/registrar-entity';
import { CriarColaboradorDto } from './dto/criarColaborador.dto';
export declare class RegistrarService {
    private readonly colaboradorRepository;
    constructor(colaboradorRepository: Repository<Colaborador>);
    criarColaborador(criarColaboradorDto: CriarColaboradorDto): Promise<Colaborador>;
    encontrarColaboradores(): Promise<Colaborador[]>;
    verColaborador(id: number): Promise<Colaborador>;
}
