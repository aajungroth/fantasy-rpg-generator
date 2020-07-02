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
exports.AbilityService = void 0;
const common_1 = require("@nestjs/common");
const ability_dao_1 = require("./ability.dao");
let AbilityService = (() => {
    let AbilityService = class AbilityService {
        constructor(abilityDao) {
            this.abilityDao = abilityDao;
        }
        findAllAbilities() {
            return this.abilityDao.findAllAbilities();
        }
        findAbility(abilityID) {
            return this.abilityDao.findAbility(abilityID);
        }
        insertMultipleAbilities(abilityList) {
            return this.abilityDao.insertMultipleAbilities(abilityList);
        }
        insertAbility(abilityInfo) {
            return this.abilityDao.insertAbility(abilityInfo);
        }
        updateMultipleAbilities(abilityList) {
            let result;
            abilityList.forEach((abilityInfo) => {
                result = this.abilityDao.updateAbility(abilityInfo);
            });
            return result;
        }
        updateAbility(abilityInfo) {
            return this.abilityDao.updateAbility(abilityInfo);
        }
        deleteMultipleAbilities(abilityList) {
            let result;
            abilityList.forEach((abilityInfo) => {
                result = this.abilityDao.deleteAbility(abilityInfo);
            });
            return result;
        }
        deleteAbility(abilityInfo) {
            return this.abilityDao.deleteAbility(abilityInfo);
        }
    };
    AbilityService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [ability_dao_1.AbilityDao])
    ], AbilityService);
    return AbilityService;
})();
exports.AbilityService = AbilityService;
//# sourceMappingURL=ability.service.js.map