'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Modifier } from '../model/modifier.entity';

import { BaseDto } from '../dto/Base.dto';

@Injectable()
export class ModifierDao {

  // Retrieves all of the modifiers in the game
  public async findAllModifiers(gameId): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('modifier')
      .from(Modifier, 'modifier')
      .where('modifier.gameId = :gameId', { gameId: gameId })
      .getMany();
  }

  // Retrieves a single modifier by Id
  public async findModifierById(gameId, modifierId): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('modifier')
      .from(Modifier, 'modifier')
      .where('modifier.gameId = :gameId AND modifier.id = :id', { gameId: gameId, id: modifierId })
      .getOne();
  }

  // Retrieves a list of modifiers by name
  public async findModifierListByName(gameId, modifierName): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('modifier')
      .from(Modifier, 'modifier')
      .where('modifier.gameId = :gameId AND modifier.name = :name', { gameId: gameId, name: modifierName })
      .getMany();
  }

  // Insert multiple modifiers at once
  public async insertMultipleModifiers(modifierList): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Modifier)
      .values(modifierList)
      .execute();
  }

  // Insert a single modifier
  public async insertModifier(modifierInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Modifier)
      .values([modifierInfo])
      .execute();
  }

  // Update a single modifier
  public async updateModifier(modifierInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(Modifier)
      .set(modifierInfo)
      .where("gameId = :gameId AND id = :id", { gameId: modifierInfo.gameId, id: modifierInfo.id })
      .execute();
  }

  // Delete a single modifier
  public async deleteModifier(modifierInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Modifier)
      .where("gameId = :gameId AND id = :id", { gameId: modifierInfo.gameId, id: modifierInfo.id })
      .execute();
  }

}
