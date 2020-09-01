'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { AbilityDao } from './ability.dao';

@Injectable()
export class AbilityService {

  constructor(private readonly abilityDao: AbilityDao) {}

  // Get all abilities in the game
  public findAllAbilities(gameId: string): Promise<BaseDto[]> {
    return this.abilityDao.findAllAbilities(gameId);
  }

  // Get one ability by Id
  public findAbilityById(gameId: string, abilityId: string): Promise<BaseDto> {
    return this.abilityDao.findAbilityById(gameId, abilityId);
  }

  // Get a list of abilities by name
  public findAbilityListByName(gameId: string, abilityName: string): Promise<BaseDto[]> {
    return this.abilityDao.findAbilityListByName(gameId, abilityName);
  }

  // Insert multiple abilities at once
  public insertMultipleAbilities(abilityList: BasePostDto[]): Promise<any> {
    return this.abilityDao.insertMultipleAbilities(abilityList);
  }

  // Insert a single ability
  public insertAbility(abilityInfo: BasePostDto): Promise<any> {
    return this.abilityDao.insertAbility(abilityInfo);
  }

  // Update multiple abilitis at once
  public updateMultipleAbilities(abilityList: BaseDto[]): Promise<any>[] {
    let result = [];

    abilityList.forEach((abilityInfo: BaseDto) => {
      result.push(this.abilityDao.updateAbility(abilityInfo));
    });

    return result;
  }

  // Update a single ability
  public updateAbility(abilityInfo: BaseDto): Promise<any> {
    return this.abilityDao.updateAbility(abilityInfo);
  }

  // Delete multiple abilities
  public deleteMultipleAbilities(abilityList: BaseDto[]): Promise<any>[] {
    let result = [];

    abilityList.forEach((abilityInfo: BaseDto) => {
      result.push(this.abilityDao.deleteAbility(abilityInfo));
    });

    return result;
  }

  // Delete a single ability
  public deleteAbility(abilityInfo: BaseDto): Promise<any> {
    return this.abilityDao.deleteAbility(abilityInfo);
  }

}
