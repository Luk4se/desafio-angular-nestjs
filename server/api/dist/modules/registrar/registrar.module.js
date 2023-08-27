"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrarModule = void 0;
const common_1 = require("@nestjs/common");
const registrar_service_1 = require("./registrar.service");
const registrar_controller_1 = require("./registrar.controller");
const validador_1 = require("../../validador");
let RegistrarModule = class RegistrarModule {
};
exports.RegistrarModule = RegistrarModule;
exports.RegistrarModule = RegistrarModule = __decorate([
    (0, common_1.Module)({
        controllers: [registrar_controller_1.RegistrarController],
        providers: [
            registrar_service_1.RegistrarService,
            validador_1.IsUniqueConstraint
        ],
    })
], RegistrarModule);
//# sourceMappingURL=registrar.module.js.map