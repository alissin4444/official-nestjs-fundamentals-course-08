import { Document } from 'mongoose';
export declare class Coffee extends Document {
    name: string;
    brand: string;
    flavors: string[];
}
export declare const CoffeeSchema: import("mongoose").Schema<Coffee, import("mongoose").Model<Coffee, any, any, any, Document<unknown, any, Coffee> & Coffee & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Coffee, Document<unknown, {}, import("mongoose").FlatRecord<Coffee>> & import("mongoose").FlatRecord<Coffee> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
