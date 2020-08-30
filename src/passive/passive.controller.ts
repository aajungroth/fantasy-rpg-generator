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
  @Get('id/:passiveID')
  public findPassiveByID(@Param() params): Promise<BaseDto> {
    return this.passiveService.findPassiveByID(params.passiveID);
  }

  // Get a list of passives by name
  @Get('name/:passiveName')
  public findPassiveListByName(@Param() params): Promise<BaseDto[]> {
    return this.passiveService.findPassiveListByName(params.passiveName);
  }

}
