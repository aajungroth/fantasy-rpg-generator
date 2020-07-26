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
  @Get(':modifierID')
  public findModifier(@Param() params): Promise<BaseDto> {
    return this.modifierService.findModifier(params.modifierID);
  }

}
