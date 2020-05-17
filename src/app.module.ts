import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { CharacterDao } from './character/character.dao';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController, CharacterController],
  providers: [AppService, CharacterService, CharacterDao],
})
export class AppModule {}
