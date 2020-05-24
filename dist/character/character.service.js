'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterService = void 0;
const common_1 = require("@nestjs/common");
let CharacterService = (() => {
    let CharacterService = class CharacterService {
        constructor() {
            this.characterList = [
                {
                    'id': 1,
                    'name': 'Sir Tester'
                },
                {
                    'id': 2,
                    'name': 'Super Guy'
                },
                {
                    'id': 3,
                    'name': 'Macy'
                },
                {
                    'id': 4,
                    'name': 'Wonder Gal'
                }
            ];
            this.characterAncestryList = [
                {
                    'id': 3,
                    'name': 'Elf'
                },
                {
                    'id': 4,
                    'name': 'Human'
                }
            ];
            this.characterBackgroundList = [
                {
                    'id': 4,
                    'name': 'Wanderer'
                }
            ];
            this.characterClassList = [
                {
                    'id': 7,
                    'name': 'Fighter',
                },
                {
                    'id': 10,
                    'name': 'Lancer'
                }
            ];
            this.characterClassAbilityList = [
                {
                    'id': 1,
                    'name': 'Slash'
                },
                {
                    'id': 2,
                    'name': 'Block'
                }
            ];
        }
        findOne(id, list) {
            id = Math.abs(parseInt(id, 10));
            if (Number.isInteger(id) === false) {
                throw new common_1.HttpException(`ID must be an integer.`, common_1.HttpStatus.BAD_REQUEST);
            }
            return list.find(element => {
                if (element.id === id) {
                    return element;
                }
            });
        }
        findAllCharacters() {
            return this.characterList;
        }
        findOneCharacter(characterID) {
            return this.findOne(characterID, this.characterList);
        }
        findAllAncestries(characterID) {
            return this.characterAncestryList;
        }
        findOneAncestry(characterID, ancestryID) {
            return this.findOne(ancestryID, this.characterAncestryList);
        }
        findAllBackgounds(characterID) {
            return this.characterBackgroundList;
        }
        findOneBackground(characterID, backgroundID) {
            return this.findOne(backgroundID, this.characterBackgroundList);
        }
        findAllClasses(characterID) {
            return this.characterClassList;
        }
        findOneClass(characterID, classID) {
            return this.findOne(classID, this.characterClassList);
        }
        findAllAbilities(characterID, classID) {
            return this.characterClassAbilityList;
        }
        findOneAbility(characterID, classID, abilityID) {
            return this.findOne(abilityID, this.characterClassAbilityList);
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
    };
    CharacterService = __decorate([
        common_1.Injectable()
    ], CharacterService);
    return CharacterService;
})();
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map