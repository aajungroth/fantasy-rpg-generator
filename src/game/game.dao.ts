'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Game } from '../model/game.entity';

import { BaseDto } from '../dto/Base.dto';

@Injectable()
export class GameDao {

  // Retrieves all of the games
  public async findAllGames(): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('game')
      .from(Game, 'game')
      .getMany();
  }

  // Retrieves a single game by ID
  public async findGameByID(gameID): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('game')
      .from(Game, 'game')
      .where('game.id = :id', { id: gameID })
      .getOne();
  }

  // Retrieves a list of games by name
  public async  findGameListByName(gameName): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('game')
      .from(Game, 'game')
      .where('game.name = :game', { name: gameName })
      .getOne();
  }

}
