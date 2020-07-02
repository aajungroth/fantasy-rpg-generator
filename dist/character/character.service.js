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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const common_1 = require("@nestjs/common");
const character_dao_1 = require("./character.dao");
let CharacterService = (() => {
    let CharacterService = class CharacterService {
        constructor(characterDao) {
            this.characterDao = characterDao;
        }
        findAllCharacters() {
            return this.characterDao.findAllCharacters();
        }
        findCharacter(characterID) {
            return this.characterDao.findCharacter(characterID);
        }
        requestAction(characterID, classID, abilityID, targetID) {
            const result = {
                'id': abilityID,
                'name': 'test',
                'characterID': characterID,
                'classID': classID,
                'targetID': targetID
            };
            return result;
        }
        insertAllCharacters(characterList) {
            return this.characterDao.insertAllCharacters(characterList);
        }
        insertCharacter(characterInfo) {
            return this.characterDao.insertCharacter(characterInfo);
        }
    };
    CharacterService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [character_dao_1.CharacterDao])
    ], CharacterService);
    return CharacterService;
})();
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map