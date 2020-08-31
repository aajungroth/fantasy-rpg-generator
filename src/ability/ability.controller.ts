'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { AbilityService } from './ability.service';

@Controller('ability')
export class AbilityController {

  constructor(private readonly abilityService: AbilityService) {}

  // Get all abilities in the game
  @Get()
  public findAllAbilities(): Promise<BaseDto[]> {
    return this.abilityService.findAllAbilities();
  }

  // Get one ability by ID
  @Get('id/:abilityID')
  public findAbilityByID(@Param() params): Promise<BaseDto> {
    return this.abilityService.findAbilityByID(params.abilityID);
  }

  // Get a list of abilities by name
  @Get('name/:abilityName')
  public findAbilityListByName(@Param() params): Promise<BaseDto[]> {
    return this.abilityService.findAbilityListByName(params.abilityName);
  }

}
