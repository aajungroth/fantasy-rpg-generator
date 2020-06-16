'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { AbilityService } from './ability.service';

@Controller('ability')
export class AbilityController {

  constructor(private readonly abilityService: AbilityService) {}

  // Get all abilities in the game
  @Get()
  public findAllAbilities() {
    return this.abilityService.findAllAbilities();
  }

  // Get the requested character if it exists
  @Get(':abilityID')
  public findOneAbility(@Param() params) {
    return this.abilityService.findOneCharacter(params.abilityID);
  }

}
