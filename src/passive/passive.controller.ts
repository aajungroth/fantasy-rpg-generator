'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { PassiveService } from './passive.service';

@Controller('passive')
export class PassiveController {

  constructor(private readonly passiveService: PassiveService) {}

  // Get all passives in the game
  @Get('gameId/:gameId')
  public findAllPassives(@Param() params): Promise<BaseDto[]> {
    return this.passiveService.findAllPassives(params.gameId);
  }

  // Get one passive by Id
  @Get('gameId/:gameId/id/:passiveId')
  public findPassiveById(@Param() params): Promise<BaseDto> {
    return this.passiveService.findPassiveById(params.gameId, params.passiveId);
  }

  // Get a list of passives by name
  @Get('gameId/:gameId/name/:passiveName')
  public findPassiveListByName(@Param() params): Promise<BaseDto[]> {
    return this.passiveService.findPassiveListByName(params.gameId, params.passiveName);
  }

}
