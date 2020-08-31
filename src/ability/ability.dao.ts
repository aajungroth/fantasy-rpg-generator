'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Ability } from '../model/ability.entity';

import { BaseDto } from '../dto/Base.dto';

@Injectable()
export class AbilityDao {

  // Retrieves all of the abilities in the game
  public async findAllAbilities(): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('ability')
      .from(Ability, 'ability')
      .getMany();
  }

  // Retrieves a single ability by ID
  public async findAbilityByID(abilityID): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('ability')
      .from(Ability, 'ability')
      .where('ability.id = :id', { id: abilityID })
      .getOne();
  }


  // Retrieves a list of abilities by name
  public async findAbilityListByName(abilityName): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('ability')
      .from(Ability, 'ability')
      .where('ability.name = :name', { name: abilityName})
      .getMany();
  }

  // Insert mulitple abilities at once
  public async insertMultipleAbilities(abilityList): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Ability)
      .values(abilityList)
      .execute();
  }

  // Insert a single ability
  public async insertAbility(abilityInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Ability)
      .values([abilityInfo])
      .execute();
  }


  // Update a single ability
  public async updateAbility(abilityInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(Ability)
      .set(abilityInfo)
      .where("id = :id", { id: abilityInfo.id })
      .execute();
  }


  // Delete a single ability
  public async deleteAbility(abilityID): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Ability)
      .where("id = :id", { id: abilityID })
      .execute();
  }

}
