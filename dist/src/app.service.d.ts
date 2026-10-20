export declare class AppService {
    private users;
    getHello(): string;
    getuser(id: number): {
        id: number;
        nombre: string;
    };
    crear(): {
        id: number;
        nombre: string;
    };
    putunuser(id: number): {
        id: number;
        nombre: string;
    };
    patchuser(id: number): {
        id: number;
        nombre: string;
    };
    deleteuser(id: number): {
        mensaje: string;
    };
}
