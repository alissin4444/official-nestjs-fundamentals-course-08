"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesModule = void 0;
const coffee_entity_1 = require("./entities/coffee.entity");
const event_entity_1 = require("../events/entities/event.entity");
const coffes_controller_1 = require("./coffes.controller");
const coffes_service_1 = require("./coffes.service");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let CoffeesModule = class CoffeesModule {
};
exports.CoffeesModule = CoffeesModule;
exports.CoffeesModule = CoffeesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: coffee_entity_1.Coffee.name,
                    schema: coffee_entity_1.CoffeeSchema
                }, {
                    name: event_entity_1.Event.name,
                    schema: event_entity_1.EventSchema
                }
            ])
        ],
        controllers: [coffes_controller_1.CoffeesController],
        providers: [coffes_service_1.CoffeesService],
    })
], CoffeesModule);
//# sourceMappingURL=coffees.module.js.map