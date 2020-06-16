'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { AbilityDao } from '../ability.dao';

import { Ability } from '../model/ability.entity';

@Injectable()
export class AbilityService {

  constructor(private readonly abilityDao: AbilityDao) {}

  public findAllAbilities(): Promise<Ability[]> {
    return this.abilityDao.findAllAbilities();
  }

  public findOneAbility(abilityID): Promise<Ability> {
    return this.abilityDao.findOneAbility(abilityID);
  }

}
