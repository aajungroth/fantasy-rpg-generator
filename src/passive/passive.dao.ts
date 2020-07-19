'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Passive } from '../model/passive.entity';

@Injectble()
export class PassiveDao {

  // Retrieves all of the passives in the game
  public async findAllPassives(): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('passive')
      .from(Passive, 'passive')
      .getMany();
  }

  // Retrieves a single passive by ID
  public async findPassive(passiveID): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('passive')
      .from(Passive, 'passive')
      .where('passive.id = :id', { id: passiveID })
      .getOne();
  }

  // Insert multiple passives at once
  public async insertMulitplePassives(passiveList): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Passive)
      .values(passiveList)
      .execute();
  }

  // Insert a single passive
  public async insertPassive(passiveInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Passive)
      .values([PassiveInfo])
      .execute();
  }

  // Update a single passive
  public async updatePassive(passiveInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(Passive)
      .set(passiveInfo)
      .where("id = :id", { id: passiveInfo.id })
      .execute();
  }

  // Delete a single passive
  public async deletePassive(passiveID): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Passive)
      .where("id = :id", { id: passiveID })
      .execute();
  }

}
