import { Coffee, CoffeeSchema } from './entities/coffee.entity';
import { Event, EventSchema } from 'src/events/entities/event.entity';

import { CoffeesController } from 'src/coffes/coffes.controller';
import { CoffeesService } from 'src/coffes/coffes.service';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { 
      name: Coffee.name, 
      schema: CoffeeSchema 
    }, {
      name: Event.name,
      schema: EventSchema
    }
  ])
],
  controllers: [CoffeesController],
  providers: [CoffeesService],
})
export class CoffeesModule {}
