'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CharacterController = class CharacterController {
    findall() {
        const result = [
            {
                'name': 'Tester'
            }
        ];
        return result;
    }
    findOne(params) {
        let id = Math.abs(parseInt(params.id, 10));
        if (Number.isInteger(id) === false) {
            return `Must be integer`;
        }
        return `Received #${id}`;
    }
    findAllAncestries(params) {
        return params;
    }
    findOneAncestry(params) {
        return params;
    }
    findAllBackgounds(params) {
        return params;
    }
    findOneBackound(params) {
        return params;
    }
    findAllClasses(params) {
        return params;
    }
    findOneClass(params) {
        return params;
    }
    findAllAbilities(params) {
        return params;
    }
    findOneAbility(params) {
        return params;
    }
    requestAction(params) {
        return `post ${params}`;
    }
};
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], CharacterController.prototype, "findall", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findOne", null);
__decorate([
    common_1.Get(':id/ancestry'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findAllAncestries", null);
__decorate([
    common_1.Get(':id/ancestry/:ancestryID'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findOneAncestry", null);
__decorate([
    common_1.Get(':id/background'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findAllBackgounds", null);
__decorate([
    common_1.Get(':id/background/:backgroundID'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findOneBackound", null);
__decorate([
    common_1.Get(':id/class'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findAllClasses", null);
__decorate([
    common_1.Get(':id/class/:classID'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findOneClass", null);
__decorate([
    common_1.Get(':id/class/:classID/ability'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findAllAbilities", null);
__decorate([
    common_1.Get(':id/class/:classID/ability/:abilityID'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "findOneAbility", null);
__decorate([
    common_1.Post(':id/class/:classID/ability/:abilityID'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], CharacterController.prototype, "requestAction", null);
CharacterController = __decorate([
    common_1.Controller('character')
], CharacterController);
exports.CharacterController = CharacterController;
//# sourceMappingURL=character.controller.js.map