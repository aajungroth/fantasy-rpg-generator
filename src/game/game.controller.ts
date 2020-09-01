'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { GameDto } from './dto/game.dto';

import { GameService } from './game.service';

@Controller('game')
export class GameController {

  constructor(private readonly gameService: GameService) {}

  // Get all games
  @Get()
  public findAllGames(): Promise<GameDto[]> {
    return this.gameService.findAllGames();
  }

  // Get one game by Id
  @Get('id/:gameId')
  public findGameById(@Param() params): Promise<GameDto> {
    return this.gameService.findGameById(params.gameId);
  }

  // Get a list of games by name
  @Get('name/:gameName')
  public findGameListByName(@Param() params): Promise<GameDto[]> {
    return this.gameService.findGameListByName(params.gameName);
  }

}
