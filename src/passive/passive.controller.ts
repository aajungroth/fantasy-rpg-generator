'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { PassiveService } from './passive.service';

@Controller('passive')
export class PassiveController {

  constructor(private readonly passiveService: PassiveService) {}

  // Get all passives in the game
  @Get()
  public findAllPassives(): Promise<BaseDto[]> {
    return this.passiveService.findAllPassives();
  }

  // Get one passive by ID
  @Get(':passiveID')
  public findPassive(@Param() params): Promise<BaseDto> {
    return this.passiveService.findPassive(params.passiveID);
  }

}
