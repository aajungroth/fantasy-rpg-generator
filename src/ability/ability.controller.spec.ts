'use strict';

import { Test, TestingModule } from '@nestjs/testing';

import { AbilityController } from './ability.controller';

import { AbilityDao } from './ability.dao';

import { AbilityService } from './ability.service';

import { BaseDto } from '../dto/base.dto';

describe('Ability Controller', () => {

  let abilityController: AbilityController;
  let abilityDao: AbilityDao;
  let abilityService: AbilityService;

  beforeEach(async () => {
    abilityDao        = new AbilityDao();
    abilityService    = new AbilityService(abilityDao);
    abilityController = new AbilityController(abilityService);
  });

  it('should be defined', () => {
    expect(abilityController).toBeDefined();
  });

  describe('findAllAbilities', () => {
    it('should return an array of abilities', async () => {
      const params: Object = {
        'gameId': '1'
      };

      const result: BaseDto[] = [{
        'id'           : '1',
        'name'         : 'findAllAbilities',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(abilityService, 'findAllAbilities')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityController.findAllAbilities(params)).toBe(result);
    });
  });

  describe('findAbilityById', () => {
    it('should return a single ability by id', async () => {
      const params: Object = {
        'gameId': '1',
        'id'    : '1'
      };

      const result: BaseDto = {
        'id'           : '2',
        'name'         : 'findAbilityById',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(abilityService, 'findAbilityById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityController.findAbilityById(params)).toBe(result);
    });
  });

  describe('findAbilityListByName', () => {
    it('should return a list of abilities by name', async() => {
      const params: Object = {
        'gameId': '1',
        'name'  : 'findAbilityListByName'
      };

      const result: BaseDto[] = [{
        'id'           : '2a',
        'name'         : 'findAbilityListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(abilityService, 'findAbilityListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityController.findAbilityListByName(params)).toBe(result);
    });
  });

});
