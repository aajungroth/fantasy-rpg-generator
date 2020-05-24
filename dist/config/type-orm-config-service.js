"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
let TypeOrmConfigService = (() => {
    let TypeOrmConfigService = class TypeOrmConfigService {
        createTypeOrmOptions() {
            return {
                type: this.ConfigService.get('type'),
                host: this.ConfigService.get('host'),
                port: this.ConfigService.get('port'),
                username: this.ConfigService.get('username'),
                password: this.ConfigService.get('password'),
                database: this.ConfigService.get('database'),
                entities: this.ConfigService.get('entitites'),
                synchronize: this.ConfigService.get('synchronize'),
                logging: this.ConfigService.get('logging'),
                migrationsRun: this.ConfigService.get('migrationsRun'),
            };
        }
    };
    TypeOrmConfigService = __decorate([
        Injectable()
    ], TypeOrmConfigService);
    return TypeOrmConfigService;
})();
//# sourceMappingURL=type-orm-config-service.js.map