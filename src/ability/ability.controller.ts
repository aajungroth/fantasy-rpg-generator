'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { AbilityService } from './ability.service';

@Controller('ability')
export class AbilityController {

  constructor(private readonly abilityService: AbilityService) {}

  // Get all abilities in the game
  @Get('gameId/:gameId')
  public findAllAbilities(@Param() params): Promise<BaseDto[]> {
    return this.abilityService.findAllAbilities(params.gameId);
  }

  // Get one ability by Id
  @Get('gameId/:gameId/id/:abilityId')
  public findAbilityById(@Param() params): Promise<BaseDto> {
    return this.abilityService.findAbilityById(params.gameId, params.abilityId);
  }

  // Get a list of abilities by name
  @Get('gameId/:gameId/name/:abilityName')
  public findAbilityListByName(@Param() params): Promise<BaseDto[]> {
    return this.abilityService.findAbilityListByName(params.gameId, params.abilityName);
  }

}
