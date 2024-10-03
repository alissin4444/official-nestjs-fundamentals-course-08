import { Connection, Model } from 'mongoose';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto/pagination-query.dto';
import { Event } from '../events/entities/event.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { Coffee } from './entities/coffee.entity';
export declare class CoffeesService {
    private readonly coffeeModel;
    private readonly connection;
    private readonly eventModel;
    constructor(coffeeModel: Model<Coffee>, connection: Connection, eventModel: Model<Event>);
    findAll(paginationQuery: PaginationQueryDto): Promise<(import("mongoose").Document<unknown, {}, Coffee> & Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Coffee> & Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    create(createCoffeeDto: CreateCoffeeDto): Promise<import("mongoose").Document<unknown, {}, Coffee> & Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    update(id: string, updateCoffeeDto: UpdateCoffeeDto): Promise<import("mongoose").Document<unknown, {}, Coffee> & Coffee & Required<{
        _id: unknown;
    }> & {
        __v?: number;
    }>;
    recommendCoffee(coffee: Coffee): Promise<void>;
}
