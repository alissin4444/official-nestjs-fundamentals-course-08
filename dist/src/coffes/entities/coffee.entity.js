"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeeSchema = exports.Coffee = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let Coffee = class Coffee extends mongoose_2.Document {
};
exports.Coffee = Coffee;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Coffee.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Coffee.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)([String]),
    __metadata("design:type", Array)
], Coffee.prototype, "flavors", void 0);
exports.Coffee = Coffee = __decorate([
    (0, mongoose_1.Schema)()
], Coffee);
exports.CoffeeSchema = mongoose_1.SchemaFactory.createForClass(Coffee);
//# sourceMappingURL=coffee.entity.js.map