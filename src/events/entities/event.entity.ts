import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { Prop, SchemaFactory } from '@nestjs/mongoose';

/* Event */
@Index(['name', 'type'])
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Prop({ index: true})
  @Column()
  type: string;

  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}


export const EventSchema = SchemaFactory.createForClass(Event);
EventSchema.index({ name: 1, type: -1 })