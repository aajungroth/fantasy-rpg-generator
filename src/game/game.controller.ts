'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { GameService } from './game.service';

@Controller('game')
export class GameController {

  constructor(private readonly gameService: GameService) {}

  // Get all games
  @Get()
  public findAllGames(): Promise<BaseDto[]> {
    return this.gameService.findAllGames();
  }

  // Get one game by ID
  @Get('id/:gameID')
  public findGameByID(@Param() params): Promise<BaseDto> {
    return this.gameService.findGameByID(params.gameID);
  }

  // Get one game by name
  @Get('name/:gameName')
  public findGameByName(@Param() params): Promise<BaseDto> {
    return this.gameService.findGameByName(params.gameName);
  }

}
