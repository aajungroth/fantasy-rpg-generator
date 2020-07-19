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
exports.Background = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("./base.entity");
const ability_entity_1 = require("./ability.entity");
const passive_entity_1 = require("./passive.entity");
const modifier_entity_1 = require("./modifier.entity");
let Background = (() => {
    let Background = class Background extends base_entity_1.BaseEntity {
    };
    __decorate([
        typeorm_1.ManyToMany(type => ability_entity_1.Ability),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Background.prototype, "abilities", void 0);
    __decorate([
        typeorm_1.ManyToMany(type => passive_entity_1.Passive),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Background.prototype, "passives", void 0);
    __decorate([
        typeorm_1.ManyToMany(type => modifier_entity_1.Modifier),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Background.prototype, "modifiers", void 0);
    Background = __decorate([
        typeorm_1.Entity({ name: 'background' })
    ], Background);
    return Background;
})();
exports.Background = Background;
//# sourceMappingURL=background.entity.js.map