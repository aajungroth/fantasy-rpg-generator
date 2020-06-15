'use strict';

import { Test, TestingModule } from '@nestjs/testing';
import { AbilityDao } from './ability.dao';
import { AbilityService } from './ability.service';

describe('AbilityService', () => {

  let abilityDao: AbilityDao;
  let abilityService: AbilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AbilityService, AbilityDao],
    }).compile();

    abilityDao = module.get<AbilityDao>(AbilityDao);
    abilityService = module.get<AbilityService>(AbilityService);
  });

  it('should be defined', () => {
    expect(abilityService).toBeDefined();
  });

  describe('findAllAbilities', () => {
    it('should return an array of abilities', async () => {
      const result = [{
        'id': '3',
        'name': 'findAllAbilities'
      }];

      jest.spyOn(abilityDao, 'findAllAbilities').mockImplementation(() => result);

      expect(await abilityService.findAllAbilities()).toBe(result);
    });
  });

  describe('findOneAbility', () => {
    it('should return a single ability by id', async () => {
      const result = {
        'id': '4',
        'name': 'findOneAbility'
      };

      jest.spyOn(abilityDao, 'findOneAbility').mockImplementation(() => result);

      expect(await abilityService.findOneAbility()).toBe(result);
    });
  });

  describe('insertMultipleAbilities', () => {
    it('should insert an array of abilities', async () => {
      const result = [{
        'id': '5',
        'name': 'insertMultipleAbilities'
      }];

      jest.spyOn(abilityDao, 'insertMultipleAbilities').mockImplementation(() => result);

      expect(await abilityService.insertMultipleAbilities()).toBe(result);
    });
  });

  describe('insertOneAbility', () => {
    it('should insert a single ability', async () => {
      const result = {
        'id': '6',
        'name': 'insertOneAbility'
      };

      jest.spyOn(abilityDao, 'insertOneAbility').mockImplementation(() => result);

      expect(await abilityService.insertOneAbility()).toBe(result);
    });
  });

  describe('updateMulitpleAbilities', () => {
    it('should update an array of abilities', async () => {
      const result = [{
        'id': '7',
        'name': 'updateMulitpleAbilities'
      }];

      jest.spyOn(abilityDao, updateMulitpleAbilities).mockImplementation(() => result);

      expect(await abilityService.updateMulitpleAbilities()).toBe(result);
    });
  });

  describe('updateOneAbility', () => {
    it('should update a single ability by ID', async () => {
      const result = {
        'id': '8',
        'name': 'updateOneAbility'
      };

      jest.spyOn(abilityDao, updateOneAbility).mockImplementation(() => result);

      expect(await abilityService.updateOneAbility()).toBe(result);
    });
  });

  describe('deleteMultipleAbilities', () => {
    it('should delete an array of abilites by ID', async () => {
      const result = [{
        'id': '9',
        'name': 'deleteMultipleAbilities'
      }];

      jest.spyOn(await deleteMultipleAbilities, 'deleteMultipleAbilities').mockImplementation(() => result);

      expect(await abilityService.deleteMultipleAbilities()).toBe(result);
    });
  });

  describe('deleteOneAbility', () => {
    it('should delet a single ability by ID', async () => {
      const result = [{
        'id': '10',
        'name': 'deleteOneAbility'
      }];

      jest.spyOn(await deleteOneAbility, 'deleteOneAbility').mockImplementation(() => result);

      expect(await abilityService.deleteOneAbility()).toBe(result);
    });
  });

});
