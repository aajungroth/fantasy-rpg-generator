'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let CharacterDao = class CharacterDao {
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
                'name': 'Dwarf'
            },
            {
                'id': 2,
                'name': 'Elemental Humanoid'
            },
            {
                'id': 3,
                'name': 'Elf'
            },
            {
                'id': 4,
                'name': 'Human'
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
};
CharacterDao = __decorate([
    common_1.Injectable()
], CharacterDao);
exports.CharacterDao = CharacterDao;
//# sourceMappingURL=character.dao.js.map