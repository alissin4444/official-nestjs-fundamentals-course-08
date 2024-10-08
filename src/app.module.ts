import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffes/coffees.module';
import { Module } from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose'

@Module({
  imports: [
    CoffeesModule,
    MongooseModule.forRoot('mongodb://localhost:27017/nest-course'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
