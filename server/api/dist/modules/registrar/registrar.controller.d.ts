import { RegistrarService } from './registrar.service';
import { RegistrarColaborador } from './model/colaborador-registrar';
export declare class RegistrarController {
    private readonly registrarService;
    constructor(registrarService: RegistrarService);
    registrar(cadastroColaborador: RegistrarColaborador): RegistrarColaborador;
}
