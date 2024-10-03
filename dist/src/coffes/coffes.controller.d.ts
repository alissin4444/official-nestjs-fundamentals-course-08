import { CoffeesService } from './coffes.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
export declare class CoffeesController {
    private readonly coffeesService;
    constructor(coffeesService: CoffeesService);
    findAll(paginationQuery: PaginationQueryDto): Promise<(import("mongoose").Document<unknown, {}, import("./entities/coffee.entity").Coffee> & import("./entities/coffee.entity").Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./entities/coffee.entity").Coffee> & import("./entities/coffee.entity").Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/coffee.entity").Coffee> & import("./entities/coffee.entity").Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<import("mongoose").Document<unknown, {}, import("./entities/coffee.entity").Coffee> & import("./entities/coffee.entity").Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
}
