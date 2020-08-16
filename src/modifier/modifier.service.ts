'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { ModifierDao } from './modifier.dao';

import { Modifier } from '../model/modifier.entity';

@Injectable()
export class ModifierService {

  constructor(private readonly modifierDao: ModifierDao) {}

  // Get all modifiers in the game
  public findAllModifiers(): Promise<BaseDto[]> {
    return this.modifierDao.findAllModifiers();
  }

  // Get one modifier by ID
  public findModifier(modifierID: string): Promise<BaseDto> {
    return this.modifierDao.findModifier(modifierID);
  }

  // Insert mulitple modifiers at once
  public insertMultipleModifiers(modifierList: BasePostDto[]): Promise<any> {
    return this.modifierDao.insertMultipleModifiers(modifierList);
  }

  // Insert a single modifier
  public insertModifier(modifierInfo: BasePostDto): Promise<any> {
    return this.modifierDao.insertModifier(modifierInfo);
  }

  // Update multiple modifiers at once
  public updateMultipleModifiers(modifierList: BaseDto[]): Promise<any>[] {
    let result = [];

    modifierList.forEach((modifierInfo: BaseDto) => {
      result.push(this.modifierDao.updateModifier(modifierInfo));
    });

    return result;
  }

  // Update a single modifier
  public updateModifier(modifierInfo: BaseDto): Promise<any> {
    return this.modifierDao.updateModifier(modifierInfo);
  }

  // Delete mulitple modifiers
  public deleteMultipleModifiers(modifierList: BaseDto[]): Promise<any>[] {
    let result = [];

    modifierList.forEach((modifierInfo: BaseDto) => {
      result.push(this.modifierDao.deleteModifier(modifierInfo));
    });

    return result;
  }

  // Delete a single modifier
  public deleteModifier(modifierInfo: BaseDto): Promise<any> {
    return this.modifierDao.deleteModifier(modifierInfo);
  }

}
