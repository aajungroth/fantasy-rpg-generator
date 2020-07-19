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
exports.PassiveService = void 0;
const common_1 = require("@nestjs/common");
const passive_dao_1 = require("./passive.dao");
let PassiveService = (() => {
    let PassiveService = class PassiveService {
        constructor(passiveDao) {
            this.passiveDao = passiveDao;
        }
        findAllPassives() {
            return this.passiveDao.findAllPassives();
        }
        findPassive(passiveID) {
            return this.passiveDao.findPassive(passiveID);
        }
        insertMultiplePassives(passiveList) {
            return this.passiveDao.insertMultiplePassives(passiveList);
        }
        insertPassive(passiveInfo) {
            return this.passiveDao.insertPassive(passiveInfo);
        }
        updateMultiplePassives(passiveList) {
            let result;
            passiveList.forEach((passiveInfo) => {
                result = this.passiveDao.updatePassive(passiveInfo);
            });
            return result;
        }
        updatePassive(passiveInfo) {
            return this.passiveDao.updatePassive(passiveInfo);
        }
        deleteMultiplePassives(passiveList) {
            let result;
            passiveList.forEach((passiveInfo) => {
                result = this.passiveDao.deletePassive(passiveInfo);
            });
            return result;
        }
        deletePassive(passiveInfo) {
            return this.passiveDao.deletePassive(passiveInfo);
        }
    };
    PassiveService = __decorate([
        common_1.Injectable(),
        __metadata("design:paramtypes", [passive_dao_1.PassiveDao])
    ], PassiveService);
    return PassiveService;
})();
exports.PassiveService = PassiveService;
//# sourceMappingURL=passive.service.js.map