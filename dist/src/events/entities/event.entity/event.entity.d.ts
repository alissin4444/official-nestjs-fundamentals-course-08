import * as mongoose from 'mongoose';
export declare class Event extends mongoose.Document {
    type: string;
    name: string;
    payload: Record<string, any>;
}
export declare const EventSchema: mongoose.Schema<Event, mongoose.Model<Event, any, any, any, mongoose.Document<unknown, any, Event> & Event & Required<{
    _id: unknown;
}> & {
    __v?: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Event, mongoose.Document<unknown, {}, mongoose.FlatRecord<Event>> & mongoose.FlatRecord<Event> & Required<{
    _id: unknown;
}> & {
    __v?: number;
}>;
