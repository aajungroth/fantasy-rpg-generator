import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { CharacterDao } from './character/character.dao';
import { AbilityController } from './ability/ability.controller';
import { AbilityService } from './ability/ability.service';
import { AbilityDao } from './ability/ability.dao';
import { PassiveController } from './passive/passive.controller';
import { PassiveService } from './passive/passive.service';
import { PassiveDao } from './passive/passive.dao';
import { ModifierController } from './modifier/modifier.controller';
import { ModifierService } from './modifier/modifier.service';
import { ModifierDao } from './modifier/modifier.dao';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return {
          type         : configService.get<string>('type'),
          host         : configService.get<string>('host'),
          port         : configService.get<string>('port'),
          username     : configService.get<string>('username'),
          password     : configService.get<string>('password'),
          database     : configService.get<string>('database'),
          entities     : configService.get<string[]>('entities'),
          synchronize  : configService.get<boolean>('synchronize'),
          logging      : configService.get<boolean>('logging'),
          migrationsRun: configService.get<boolean>('migrationsRun'),
        } as TypeOrmModuleOptions;
      },
    }),
  ],
  controllers: [AppController, CharacterController, AbilityController,
    PassiveController, ModifierController],
  providers: [AppService, CharacterService, CharacterDao, AbilityService,
    AbilityDao, PassiveService, PassiveDao, ModifierService, ModifierDao],
})
export class AppModule {}
