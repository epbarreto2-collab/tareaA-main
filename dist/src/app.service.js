"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    users = [
        { id: 1, nombre: 'Carlos' },
        { id: 2, nombre: 'Maria' },
    ];
    getHello() {
        return 'API de usuarios funcionando';
    }
    getuser(id) {
        const user = this.users.find(u => u.id === id);
        if (!user) {
            throw new common_1.NotFoundException('Usuario no encontrado');
        }
        return user;
    }
    crear() {
        const nuevoUsuario = {
            id: this.users.length
                ? Math.max(...this.users.map(u => u.id)) + 1
                : 1,
            nombre: 'Nuevo usuario',
        };
        this.users.push(nuevoUsuario);
        return nuevoUsuario;
    }
    putunuser(id) {
        const user = this.getuser(id);
        user.nombre = 'Usuario actualizado';
        return user;
    }
    patchuser(id) {
        const user = this.getuser(id);
        user.nombre = 'Nombre modificado';
        return user;
    }
    deleteuser(id) {
        this.getuser(id);
        this.users = this.users.filter(u => u.id !== id);
        return {
            mensaje: 'Usuario eliminado correctamente',
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map