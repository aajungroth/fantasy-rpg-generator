'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Passive } from '../model/passive.entity';

import { BaseDto } from '../dto/Base.dto';

@Injectable()
export class PassiveDao {

  // Retrieves all of the passives in the game
  public async findAllPassives(gameId: string): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('passive')
      .from(Passive, 'passive')
      .where('passive.gameId = :gameId', { gameId: gameId })
      .getMany();
  }

  // Retrieves a single passive by Id
  public async findPassiveById(gameId: string, passiveId: string): Promise<BaseDto> {
    return await getConnection()
      .createQueryBuilder()
      .select('passive')
      .from(Passive, 'passive')
      .where('passive.gameId = :gameId AND passive.id = :id', { gameId: gameId,  id: passiveId })
      .getOne();
  }

  // Retrieves a list of passives by name
  public async findPassiveListByName(gameId: string, passiveName: string): Promise<BaseDto[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('passive')
      .from(Passive, 'passive')
      .where('passive.gameId = :gameId AND passive.name = :name', { gameId: gameId, name: passiveName })
      .getMany();
  }

  // Insert multiple passives at once
  public async insertMultiplePassives(passiveList): Promise<any> {
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
      .values([passiveInfo])
      .execute();
  }

  // Update a single passive
  public async updatePassive(passiveInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .update(Passive)
      .set(passiveInfo)
      .where("gameId = :gameId AND id = :id", { gameId: passiveInfo.gameId, id: passiveInfo.id })
      .execute();
  }

  // Delete a single passive
  public async deletePassive(passiveInfo): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Passive)
      .where("gameId = :gameId AND id = :id", { gameId: passiveInfo.gameId, id: passiveInfo.id })
      .execute();
  }

}
