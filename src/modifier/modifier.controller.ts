'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { ModifierService} from './modifier.service';

@Controller('modifier')
export class ModifierController {

  constructor(private readonly modifierService: ModifierService) {}

  // Get all modifiers in the game
  @Get('gameId/:gameId')
  public findAllModifiers(@Param() params): Promise<BaseDto[]> {
    return this.modifierService.findAllModifiers(params.gameId);
  }

  // Get one modifier by Id
  @Get('gameId/:gameId/id/:modifierId')
  public findModifierById(@Param() params): Promise<BaseDto> {
    return this.modifierService.findModifierById(params.gameId, params.modifierId);
  }

  // Get a list of modifiers by name
  @Get('gameId/:gameId/name/:modifierName')
  public findModifierListByName(@Param() params): Promise<BaseDto[]> {
    return this.modifierService.findModifierListByName(params.gameId, params.modifierName);
  }

}
