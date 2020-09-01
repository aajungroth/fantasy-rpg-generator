'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Ability } from '../model/ability.entity';

import { BaseDto } from '../dto/Base.dto';

@Injectable()
export class AbilityDao {

  // Retrieves all of the abilities in the game
  public async findAllAbilities(gameId: string): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('ability')
      .from(Ability, 'ability')
      .where('ability.gameId = :gameId', { gameId: gameId })
      .getMany();
  }

  // Retrieves a single ability by Id
  public async findAbilityById(gameId: string, abilityId: string): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('ability')
      .from(Ability, 'ability')
      .where('ability.gameId = :gameId AND ability.id = :id', { gameId: gameId, id: abilityId })
      .getOne();
  }

  // Retrieves a list of abilities by name
  public async findAbilityListByName(gameId: string, abilityName: string): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('ability')
      .from(Ability, 'ability')
      .where('ability.gameId = :gameId AND ability.name = :name', { gameId: gameId, name: abilityName})
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
      .where("gameId = :gameId AND id = :id", { gameId: abilityInfo.gameId, id: abilityInfo.id })
      .execute();
  }

  // Delete a single ability
  public async deleteAbility(abilityInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Ability)
      .where("gameId = :gameId AND id = :id", { gameId: abilityInfo.gameId, id: abilityInfo.id })
      .execute();
  }

}
