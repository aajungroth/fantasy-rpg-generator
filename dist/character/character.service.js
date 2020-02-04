'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
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
        this.ancestryList = [
            {
                'id': 1,
                'name': 'Half Elf'
            },
            {
                'id': 2,
                'name': 'Dwarf'
            },
            {
                'id': 3,
                'name': 'Elemental Humanoid'
            }
        ];
        this.backgroundList = [
            {
                'id': 1,
                'name': 'Farmer'
            },
            {
                'id': 2,
                'name': 'Inn Keeper'
            },
            {
                'id': 3,
                'name': 'Miner'
            },
            {
                'id': 4,
                'name': 'Wanderer'
            }
        ];
        this.classList = [
            {
                'id': 1,
                'name': 'Archer'
            },
            {
                'id': 2,
                'name': 'Bard'
            },
            {
                'id': 3,
                'name': 'Beserker'
            },
            {
                'id': 4,
                'name': 'Cleric'
            },
            {
                'id': 5,
                'name': 'Druid'
            },
            {
                'id': 6,
                'name': 'Elementalist'
            },
            {
                'id': 7,
                'name': 'Fighter'
            },
            {
                'id': 8,
                'name': 'Healer'
            },
            {
                'id': 9,
                'name': 'Illusionist'
            },
            {
                'id': 10,
                'name': 'Lancer'
            },
            {
                'id': 11,
                'name': 'Monk'
            },
            {
                'id': 12,
                'name': 'Rogue'
            }
        ];
    }
    findAll() {
        return this.characterList;
    }
    findOne(id) {
        id = Math.abs(parseInt(id, 10));
        if (Number.isInteger(id) === false) {
            throw (`Must be integer`);
        }
        return this.characterList.find(character => {
            if (character.id === id) {
                return character;
            }
        });
    }
    findAllAncestries() {
        return this.ancestryList;
    }
    findOneAncestry(ancestryID) {
        return this.ancestryList[ancestryID];
    }
    findAllBackgounds() {
        return this.backgroundList;
    }
    findOneBackound(backgroundID) {
        return this.backgroundList[backgroundID];
    }
    findAllClasses() {
        return this.classList;
    }
    findOneClass(classID) {
        return this.classList[classID];
    }
};
CharacterService = __decorate([
    common_1.Injectable()
], CharacterService);
exports.CharacterService = CharacterService;
//# sourceMappingURL=character.service.js.map