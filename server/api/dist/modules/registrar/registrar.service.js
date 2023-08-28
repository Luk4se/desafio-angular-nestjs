"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const registrar_entity_1 = require("./entities/registrar-entity");
let RegistrarService = class RegistrarService {
    constructor(colaboradorRepository) {
        this.colaboradorRepository = colaboradorRepository;
    }
    criarColaborador(criarColaboradorDto) {
        const colaborador = new registrar_entity_1.Colaborador();
        colaborador.nome = criarColaboradorDto.nome;
        colaborador.email = criarColaboradorDto.email;
        colaborador.cpf = criarColaboradorDto.cpf;
        colaborador.celular = criarColaboradorDto.celular;
        colaborador.conhecimento = criarColaboradorDto.conhecimentos;
        colaborador.validacao = criarColaboradorDto.validacao;
        colaborador.dataAlteracao = criarColaboradorDto.dataAlteracao;
        return this.colaboradorRepository.save(colaborador);
    }
    encontrarColaboradores() {
        return this.colaboradorRepository.find();
    }
    verColaborador(id) {
        return this.colaboradorRepository.findOneBy({ id });
    }
};
exports.RegistrarService = RegistrarService;
exports.RegistrarService = RegistrarService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(registrar_entity_1.Colaborador)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RegistrarService);
//# sourceMappingURL=registrar.service.js.map