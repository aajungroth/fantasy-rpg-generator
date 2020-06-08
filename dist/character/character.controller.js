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
exports.CharacterController = void 0;
const common_1 = require("@nestjs/common");
const character_service_1 = require("./character.service");
let CharacterController = (() => {
    let CharacterController = class CharacterController {
        constructor(characterService) {
            this.characterService = characterService;
        }
        findAllCharacters() {
            return this.characterService.findAllCharacters();
        }
        findOneCharacter(params) {
            return this.characterService.findOneCharacter(params.characterID);
        }
        findAllAncestries(params) {
            return this.characterService.findAllAncestries(params.characterID);
        }
        findOneAncestry(params) {
            return this.characterService.findOneAncestry(params.characterID, params.ancestryID);
        }
        findAllBackgounds(params) {
            return this.characterService.findAllBackgounds(params.characterID);
        }
        findOneBackound(params) {
            return this.characterService.findOneBackground(params.characterID, params.backgroundID);
        }
        findAllClasses(params) {
            return this.characterService.findAllClasses(params.characterID);
        }
        findOneClass(params) {
            return this.characterService.findOneClass(params.characterID, params.classID);
        }
        findAllAbilities(params) {
            return this.characterService.findAllAbilities(params.characterID, params.classID);
        }
        findOneAbility(params) {
            return this.characterService.findOneAbility(params.characterID, params.classID, params.abilityID);
        }
        requestAction(params) {
            return this.characterService.requestAction(params.characterID, params.classID, params.abilityID, params.targetID);
        }
        insertCharacter(params) {
            let character = {
                'name': 'Tester 3',
                'description': 'A tester',
                'createdBy': 'Post Route',
                'lastChangedBy': 'Post Route',
                'internalComment': 'A tester who tests'
            };
            return this.characterService.insertCharacter(character);
        }
    };
    __decorate([
        common_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findAllCharacters", null);
    __decorate([
        common_1.Get(':characterID'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findOneCharacter", null);
    __decorate([
        common_1.Get(':characterID/ancestry'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findAllAncestries", null);
    __decorate([
        common_1.Get(':characterID/ancestry/:ancestryID'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findOneAncestry", null);
    __decorate([
        common_1.Get(':characterID/background'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findAllBackgounds", null);
    __decorate([
        common_1.Get(':characterID/background/:background'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findOneBackound", null);
    __decorate([
        common_1.Get(':characterID/class'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findAllClasses", null);
    __decorate([
        common_1.Get(':characterID/class/:classID'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findOneClass", null);
    __decorate([
        common_1.Get(':characterID/class/:classID/ability'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findAllAbilities", null);
    __decorate([
        common_1.Get(':characterID/class/:classID/ability/:abilityID'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "findOneAbility", null);
    __decorate([
        common_1.Post(':characterID/class/:classID/ability/:abilityID/target/:targetID'),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "requestAction", null);
    __decorate([
        common_1.Post(),
        __param(0, common_1.Param()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CharacterController.prototype, "insertCharacter", null);
    CharacterController = __decorate([
        common_1.Controller('character'),
        __metadata("design:paramtypes", [character_service_1.CharacterService])
    ], CharacterController);
    return CharacterController;
})();
exports.CharacterController = CharacterController;
//# sourceMappingURL=character.controller.js.map