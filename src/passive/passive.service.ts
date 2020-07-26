'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { PassiveDao } from './passive.dao';

import { Passive } from '../model/passive.entity';

@Injectable()
export class PassiveService {

  constructor(private readonly passiveDao: PassiveDao) {}

  // Get all passives in the game
  public findAllPassives(): Promise<BaseDto[]> {
    return this.passiveDao.findAllPassives();
  }

  // Get one passive by ID
  public findPassive(passiveID: string): Promise<BaseDto> {
    return this.passiveDao.findPassive(passiveID);
  }

  // Insert multiple passives at once
  public insertMultiplePassives(passiveList: BasePostDto[]): Promise<any> {
    return this.passiveDao.insertMultiplePassives(passiveList);
  }

  // Insert a single passive
  public insertPassive(passiveInfo: BasePostDto): Promise<any> {
    return this.passiveDao.insertPassive(passiveInfo);
  }

  // Update multiple passives at once
  public updateMultiplePassives(passiveList: BaseDto[]): Promise<any>[] {
    let result = [];

    passiveList.forEach((passiveInfo: BaseDto) => {
      result.push(this.passiveDao.updatePassive(passiveInfo));
    });

    return result;
  }

  // Update a single passive
  public updatePassive(passiveInfo: BaseDto): Promise<any> {
    return this.passiveDao.updatePassive(passiveInfo);
  }

  // Delete multiple passives
  public deleteMultiplePassives(passiveList: BaseDto[]): Promise<any>[] {
    let result = [];

    passiveList.forEach((passiveInfo: BaseDto) => {
      result.push(this.passiveDao.deletePassive(passiveInfo));
    });

    return result;
  }

  // Delete a single passive
  public deletePassive(passiveInfo: BaseDto): Promise<any> {
    return this.passiveDao.deletePassive(passiveInfo);
  }

}
