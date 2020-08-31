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

      expect(await abilityController.findAllAbilities()).toBe(result);
    });
  });

  describe('findAbilityByID', () => {
    it('should return a single ability by id', async () => {
      const result: BaseDto = {
        'id'           : '2',
        'name'         : 'findAbilityByID',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '2';

      jest
        .spyOn(abilityService, 'findAbilityByID')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityController.findAbilityByID(id)).toBe(result);
    });
  });

  describe('findAbilityListByName', () => {
    it('should return a list of abilities by name', async() => {
      const result: BaseDto[] = [{
        'id'           : '2a',
        'name'         : 'findAbilityListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const name: string = 'findAbilityListByName';

      jest
        .spyOn(abilityService, 'findAbilityListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await abilityController.findAbilityListByName(name)).toBe(result);
    });
  });

});
