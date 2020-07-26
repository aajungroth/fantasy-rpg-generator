'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Modifier } from '../model/modifier.entity';

import { BaseDto } from '../dto/Base.dto';

@Injectable()
export class ModifierDao {

  // Retrieves all of the modifiers in the game
  public async findAllModifiers(): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('modifier')
      .from(Modifier, 'modifier')
      .getMany();
  }

  // Retrieves a single modifier by ID
  public async findModifier(modifierID): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('modifier')
      .from(Modifier, 'modifier')
      .where('modifier.id = :id', { id: modifierID })
      .getOne();
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
      .where("id = :id", { id: modifierInfo.id })
      .execute();
  }

  // Delete a single modifier
  public async deleteModifier(modifierID): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Modifier)
      .where("id = :id", { id: modifierID })
      .execute();
  }

}
