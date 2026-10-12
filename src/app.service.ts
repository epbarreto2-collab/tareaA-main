
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class AppService {
  private users = [
    { id: 1, nombre: 'Carlos' },
    { id: 2, nombre: 'Maria' },
  ];

  // GET: mensaje inicial
  getHello(): string {
    return 'API de usuarios funcionando';
  }

  // GET: buscar usuario por ID
  getuser(id: number) {
    const user = this.users.find(u => u.id === id);

    if (!user) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return user;
  }

  // POST: crear usuario
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

  // PUT: actualizar usuario
  putunuser(id: number) {
    const user = this.getuser(id);
    user.nombre = 'Usuario actualizado';
    return user;
  }

  // PATCH: modificar parcialmente usuario
  patchuser(id: number) {
    const user = this.getuser(id);
    user.nombre = 'Nombre modificado';
    return user;
  }

  // DELETE: eliminar usuario
  deleteuser(id: number) {
    this.getuser(id);
    this.users = this.users.filter(u => u.id !== id);

    return {
      mensaje: 'Usuario eliminado correctamente',
    };
  }
}