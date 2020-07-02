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
  @Get(':abilityID')
  public findAbility(@Param() params): Promise<BaseDto> {
    return this.abilityService.findAbility(params.abilityID);
  }

}
