import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharacterController } from './character/character.controller';
import { CharacterService } from './character/character.service';
import { CharacterDao } from './character/character.dao';

@Module({
  imports: [],
  controllers: [AppController, CharacterController],
  providers: [AppService, CharacterService, CharacterDao],
})
export class AppModule {}
