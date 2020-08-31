'use strict';

import { Test, TestingModule } from '@nestjs/testing';

import { AbilityDao } from './ability.dao';

import { AbilityService } from './ability.service';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

describe('AbilityService', () => {

  let abilityDao: AbilityDao;
  let abilityService: AbilityService;

  beforeEach(async () => {
    abilityDao     = new AbilityDao();
    abilityService = new AbilityService(abilityDao);
  });

  it('should be defined', () => {
    expect(abilityService).toBeDefined();
  });

  describe('findAllAbilities', () => {
    it('should return an array of abilities', async () => {
      const result: BaseDto[] = [{
        'id'           : '3',
        'name'         : 'findAllAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(abilityDao, 'findAllAbilities')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.findAllAbilities()).toBe(result);
    });
  });

  describe('findAbilityByID', () => {
    it('should return a single ability by id', async () => {
      const result: BaseDto = {
        'id'           : '4',
        'name'         : 'findAbilityByID',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '4';

      jest
        .spyOn(abilityDao, 'findAbilityByID')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.findAbilityByID(id)).toBe(result);
    });
  });

  describe('findAbilityListByName', () => {
    it('should return a list of abilities by name', async() => {
      const result: BaseDto[] = [{
        'id'           : '4a',
        'name'         : 'findAbilityListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec',
      }];

      const name: string = 'findAbilityListByName';

      jest
        .spyOn(abilityDao, 'findAbilityListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.findAbilityListByName(name)).toBe(result);
    });
  });

  describe('insertMultipleAbilities', () => {
    it('should insert an array of abilities', async () => {
      const result: any[] = [{
        'id'  : '5',
        'name': 'insertMultipleAbilities'
      }];

      const input: BasePostDto[] = [{
        'name'         : 'insertMultipleAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(abilityDao, 'insertMultipleAbilities')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.insertMultipleAbilities(input)).toBe(result);
    });
  });

  describe('insertAbility', () => {
    it('should insert a single ability', async () => {
      const result: any = {
        'id'  : '6',
        'name': 'insertAbility'
      };

      const input: BasePostDto = {
        'name'         : 'insertAbility',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(abilityDao, 'insertAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.insertAbility(input)).toBe(result);
    });
  });

  describe('updateMulitpleAbilities', () => {
    it('should update an array of abilities', async () => {
      const result: Promise<any> = Promise.resolve({
        'id'  : '7',
        'name': 'updateMulitpleAbilities'
      });

      const input: BaseDto[] = [{
        'id'           : '7',
        'name'         : 'updateMulitpleAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(abilityDao, 'updateAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.updateMultipleAbilities(input)).toStrictEqual([result]);
    });
  });

  describe('updateAbility', () => {
    it('should update a single ability by ID', async () => {
      const result: any = {
        'id'  : '8',
        'name': 'updateAbility'
      };

      const input: BaseDto = {
        'id'           : '8',
        'name'         : 'updateAbility',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(abilityDao, 'updateAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.updateAbility(input)).toBe(result);
    });
  });

  describe('deleteMultipleAbilities', () => {
    it('should delete an array of abilites by ID', async () => {
      const result: Promise<any> = Promise.resolve({
        'id'  : '9',
        'name': 'deleteMultipleAbilities'
      });

      const input: BaseDto[] = [{
        'id'           : '9',
        'name'         : 'deleteMultipleAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(await abilityDao, 'deleteAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.deleteMultipleAbilities(input)).toStrictEqual([result]);
    });
  });

  describe('deleteAbility', () => {
    it('should delete a single ability by ID', async () => {
      const result: any = [{
        'id'  : '10',
        'name': 'deleteAbility'
      }];

      const input: BaseDto = {
        'id'           : '10',
        'name'         : 'deleteAbility',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(await abilityDao, 'deleteAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.deleteAbility(input)).toBe(result);
    });
  });

});
