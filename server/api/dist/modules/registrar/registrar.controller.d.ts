import { RegistrarService } from './registrar.service';
import { CriarColaboradorDto } from './dto/criarColaborador.dto';
export declare class RegistrarController {
    private readonly registrarService;
    constructor(registrarService: RegistrarService);
    registrar(criarColaborador: CriarColaboradorDto): void;
    findAll(): Promise<import("./entities/registrar-entity").Colaborador[]>;
    findOne(id: string): Promise<import("./entities/registrar-entity").Colaborador>;
}
