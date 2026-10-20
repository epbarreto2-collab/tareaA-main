import { ProductoService } from './producto.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
export declare class ProductoController {
    private readonly productoService;
    constructor(productoService: ProductoService);
    create(createProductoDto: CreateProductoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProductoDto: UpdateProductoDto): string;
    remove(id: string): string;
}
