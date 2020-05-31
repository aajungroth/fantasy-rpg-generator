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
exports.World = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const ancestry_entity_1 = require("./ancestry.entity");
const background_entity_1 = require("./background.entity");
const class_entity_1 = require("./class.entity");
let World = (() => {
    let World = class World extends base_entity_1.BaseEntity {
    };
    __decorate([
        typeorm_1.ManyToMany(type => ancestry_entity_1.Ancestry),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], World.prototype, "abilities", void 0);
    __decorate([
        typeorm_1.ManyToMany(type => background_entity_1.Background),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], World.prototype, "backgrounds", void 0);
    __decorate([
        typeorm_1.ManyToMany(type => class_entity_1.Class),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], World.prototype, "classes", void 0);
    World = __decorate([
        typeorm_1.Entity({ name: 'world' })
    ], World);
    return World;
})();
exports.World = World;
//# sourceMappingURL=world.entity.js.map