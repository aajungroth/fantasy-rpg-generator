"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const character_controller_1 = require("./character/character.controller");
const character_service_1 = require("./character/character.service");
const character_dao_1 = require("./character/character.dao");
const ability_controller_1 = require("./ability/ability.controller");
const ability_service_1 = require("./ability/ability.service");
const ability_dao_1 = require("./ability/ability.dao");
const passive_controller_1 = require("./passive/passive.controller");
const passive_service_1 = require("./passive/passive.service");
const passive_dao_1 = require("./passive/passive.dao");
const configuration_1 = require("./config/configuration");
let AppModule = (() => {
    let AppModule = class AppModule {
    };
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({
                    isGlobal: true,
                    load: [configuration_1.default],
                }),
                typeorm_1.TypeOrmModule.forRootAsync({
                    inject: [config_1.ConfigService],
                    useFactory: (configService) => {
                        return {
                            type: configService.get('type'),
                            host: configService.get('host'),
                            port: configService.get('port'),
                            username: configService.get('username'),
                            password: configService.get('password'),
                            database: configService.get('database'),
                            entities: configService.get('entities'),
                            synchronize: configService.get('synchronize'),
                            logging: configService.get('logging'),
                            migrationsRun: configService.get('migrationsRun'),
                        };
                    },
                }),
            ],
            controllers: [app_controller_1.AppController, character_controller_1.CharacterController, ability_controller_1.AbilityController, passive_controller_1.PassiveController],
            providers: [app_service_1.AppService, character_service_1.CharacterService, character_dao_1.CharacterDao, ability_service_1.AbilityService, ability_dao_1.AbilityDao, passive_service_1.PassiveService, passive_dao_1.PassiveDao],
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map