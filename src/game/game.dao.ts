'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Game } from '../model/game.entity';

import { GameDto } from './dto/Game.dto';

@Injectable()
export class GameDao {

  // Retrieves all of the games
  public async findAllGames(): Promise<GameDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('game')
      .from(Game, 'game')
      .getMany();
  }

  // Retrieves a single game by Id
  public async findGameById(gameId): Promise<GameDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('game')
      .from(Game, 'game')
      .where('game.id = :id', { id: gameId })
      .getOne();
  }

  // Retrieves a list of games by name
  public async findGameListByName(gameName): Promise<GameDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('game')
      .from(Game, 'game')
      .where('game.name = :name', { name: gameName })
      .getMany();
  }

}
