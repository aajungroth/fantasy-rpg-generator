'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PassiveDao = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const passive_entity_1 = require("../model/passive.entity");
let PassiveDao = (() => {
    let PassiveDao = class PassiveDao {
        async findAllPassives() {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .select('passive')
                .from(passive_entity_1.Passive, 'passive')
                .getMany();
        }
        async findPassive(passiveID) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .select('passive')
                .from(passive_entity_1.Passive, 'passive')
                .where('passive.id = :id', { id: passiveID })
                .getOne();
        }
        async insertMultiplePassives(passiveList) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(passive_entity_1.Passive)
                .values(passiveList)
                .execute();
        }
        async insertPassive(passiveInfo) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .insert()
                .into(passive_entity_1.Passive)
                .values([passiveInfo])
                .execute();
        }
        async updatePassive(passiveInfo) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .update(passive_entity_1.Passive)
                .set(passiveInfo)
                .where("id = :id", { id: passiveInfo.id })
                .execute();
        }
        async deletePassive(passiveID) {
            return await typeorm_1.getConnection()
                .createQueryBuilder()
                .delete()
                .from(passive_entity_1.Passive)
                .where("id = :id", { id: passiveID })
                .execute();
        }
    };
    PassiveDao = __decorate([
        common_1.Injectable()
    ], PassiveDao);
    return PassiveDao;
})();
exports.PassiveDao = PassiveDao;
//# sourceMappingURL=passive.dao.js.map