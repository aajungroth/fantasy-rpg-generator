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
      const params: Object = {
        'gameId': '1'
      };

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

      expect(await abilityService.findAllAbilities(params)).toBe(result);
    });
  });

  describe('findAbilityById', () => {
    it('should return a single ability by id', async () => {
      const params: Object = {
        'gameId': '1',
        'id'    : '4'
      };

      const result: BaseDto = {
        'id'           : '4',
        'name'         : 'findAbilityById',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(abilityDao, 'findAbilityById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.findAbilityById(params)).toBe(result);
    });
  });

  describe('findAbilityListByName', () => {
    it('should return a list of abilities by name', async() => {
      const params: Object = {
        'gameId': '1',
        'name'  : 'findAbilityListByName'
      };

      const result: BaseDto[] = [{
        'id'           : '4a',
        'name'         : 'findAbilityListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec',
      }];

      jest
        .spyOn(abilityDao, 'findAbilityListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.findAbilityListByName(params)).toBe(result);
    });
  });

  describe('insertMultipleAbilities', () => {
    it('should insert an array of abilities', async () => {
      const params: BasePostDto[] = [{
        'gameId'       : '1',
        'name'         : 'insertMultipleAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: any[] = [{
        'id'  : '5',
        'name': 'insertMultipleAbilities'
      }];

      jest
        .spyOn(abilityDao, 'insertMultipleAbilities')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.insertMultipleAbilities(params)).toBe(result);
    });
  });

  describe('insertAbility', () => {
    it('should insert a single ability', async () => {
      const params: BasePostDto = {
        'gameId'       : '1',
        'name'         : 'insertAbility',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = {
        'id'  : '6',
        'name': 'insertAbility'
      };

      jest
        .spyOn(abilityDao, 'insertAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.insertAbility(params)).toBe(result);
    });
  });

  describe('updateMulitpleAbilities', () => {
    it('should update an array of abilities', async () => {
      const params: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '7',
        'name'         : 'updateMulitpleAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: Promise<any> = Promise.resolve({
        'id'  : '7',
        'name': 'updateMulitpleAbilities'
      });

      jest
        .spyOn(abilityDao, 'updateAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.updateMultipleAbilities(params)).toStrictEqual([result]);
    });
  });

  describe('updateAbility', () => {
    it('should update a single ability by Id', async () => {
      const params: BaseDto = {
        'gameId'       : '1',
        'id'           : '8',
        'name'         : 'updateAbility',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = {
        'id'  : '8',
        'name': 'updateAbility'
      };

      jest
        .spyOn(abilityDao, 'updateAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.updateAbility(params)).toBe(result);
    });
  });

  describe('deleteMultipleAbilities', () => {
    it('should delete an array of abilites by Id', async () => {
      const params: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '9',
        'name'         : 'deleteMultipleAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: Promise<any> = Promise.resolve({
        'id'  : '9',
        'name': 'deleteMultipleAbilities'
      });

      jest
        .spyOn(await abilityDao, 'deleteAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.deleteMultipleAbilities(params)).toStrictEqual([result]);
    });
  });

  describe('deleteAbility', () => {
    it('should delete a single ability by Id', async () => {
      const params: BaseDto = {
        'gameId'       : '1',
        'id'           : '10',
        'name'         : 'deleteAbility',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = [{
        'id'  : '10',
        'name': 'deleteAbility'
      }];

      jest
        .spyOn(await abilityDao, 'deleteAbility')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityService.deleteAbility(params)).toBe(result);
    });
  });

});
