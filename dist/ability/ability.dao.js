'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbilityDao = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const ability_entity_1 = require("../model/ability.entity");
let AbilityDao = (() => {
    let AbilityDao = class AbilityDao {
        async findAllAbilities() {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .select('ability')
                .from(ability_entity_1.Ability, 'ability')
                .getMany();
        }
        async findAbility(abilityID) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .select('ability')
                .from(ability_entity_1.Ability, 'ability')
                .where('ability.id = :id', { id: abilityID })
                .getOne();
        }
        async insertMultipleAbilities(abilityList) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(ability_entity_1.Ability)
                .values(abilityList)
                .execute();
        }
        async insertAbility(abilityInfo) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(ability_entity_1.Ability)
                .values([abilityInfo])
                .execute();
        }
        async updateAbility(abilityInfo) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .update(ability_entity_1.Ability)
                .set(abilityInfo)
                .where("id = :id", { id: abilityInfo.id })
                .execute();
        }
        async deleteAbility(abilityID) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .delete()
                .from(ability_entity_1.Ability)
                .where("id = :id", { id: abilityID })
                .execute();
        }
    };
    AbilityDao = __decorate([
        common_1.Injectable()
    ], AbilityDao);
    return AbilityDao;
})();
exports.AbilityDao = AbilityDao;
//# sourceMappingURL=ability.dao.js.map