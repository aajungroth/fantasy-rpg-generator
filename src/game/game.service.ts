'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { GameDto } from './dto/game.dto';

import { GamePostDto } from './dto/gamePost.dto';

import { GameDao } from './game.dao';

@Injectable()
export class GameService {

  constructor(private readonly gameDao: GameDao) {}

  // Get all games
  public findAllGames(): Promise<GameDto[]> {
    return this.gameDao.findAllGames();
  }

  // Get one game by Id
  public findGameById(gameId: string): Promise<GameDto> {
    return this.gameDao.findGameById(gameId);
  }

  // Get a list of games by name
  public findGameListByName(gameName: string): Promise<GameDto[]> {
    return this.gameDao.findGameListByName(gameName);
  }

}
