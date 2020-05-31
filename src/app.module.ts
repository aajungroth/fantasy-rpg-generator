import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { CharacterDao } from './character/character.dao';
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
  controllers: [AppController, CharacterController],
  providers: [AppService, CharacterService, CharacterDao],
})
export class AppModule {}
