'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { ModifierService} from './modifier.service';

@Controller('modifier')
export class ModifierController {

  constructor(private readonly modifierService: ModifierService) {}

  // Get all modifiers in the game
  @Get()
  public findAllModifiers(): Promise<BaseDto[]> {
    return this.modifierService.findAllModifiers();
  }

  // Get one modifier by ID
  @Get('id/:modifierID')
  public findModifierByID(@Param() params): Promise<BaseDto> {
    return this.modifierService.findModifierByID(params.modifierID);
  }

  // Get a list of modifiers by name
  @Get('name/:modifierName')
  public findModifierListByName(@Param() params): Promise<BaseDto[]> {
    return this.modifierService.findModifierListByName(params.modifierName);
  }

}
