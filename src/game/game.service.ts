'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { GameDao } from './game.dao';

@Injectable()
export class GameService {

  constructor(private readonly gameDao: GameDao) {}

  // Get all games
  public findAllGames(): Promise<BaseDto[]> {
    return this.gameDao.findAllGames();
  }

  // Get one game by ID
  public findGameByID(gameID: string): Promise<BaseDto> {
    return this.gameDao.findGameByID(gameID);
  }

  // Get one game by name
  public findGameByName(gameName: string): Promise<BaseDto> {
    return this.gameDao.findGameByName(gameName);
  }

}