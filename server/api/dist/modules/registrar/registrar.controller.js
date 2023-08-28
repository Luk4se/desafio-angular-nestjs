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
exports.RegistrarController = void 0;
const common_1 = require("@nestjs/common");
const registrar_service_1 = require("./registrar.service");
const criarColaborador_dto_1 = require("./dto/criarColaborador.dto");
let RegistrarController = class RegistrarController {
    constructor(registrarService) {
        this.registrarService = registrarService;
    }
    registrar(criarColaborador) {
        console.log(criarColaborador);
        this.registrarService.criarColaborador(criarColaborador);
    }
    findAll() {
        return this.registrarService.encontrarColaboradores();
    }
    findOne(id) {
        return this.registrarService.verColaborador(+id);
    }
};
exports.RegistrarController = RegistrarController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [criarColaborador_dto_1.CriarColaboradorDto]),
    __metadata("design:returntype", void 0)
], RegistrarController.prototype, "registrar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RegistrarController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], RegistrarController.prototype, "findOne", null);
exports.RegistrarController = RegistrarController = __decorate([
    (0, common_1.Controller)('registrar'),
    __metadata("design:paramtypes", [registrar_service_1.RegistrarService])
], RegistrarController);
//# sourceMappingURL=registrar.controller.js.map