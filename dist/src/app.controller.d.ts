import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
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
