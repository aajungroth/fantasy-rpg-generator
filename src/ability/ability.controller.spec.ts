'use strict';

import { Test, TestingModule } from '@nestjs/testing';
import { AbilityController } from './ability.controller';
import { AbilityService } from './ability.service';

describe('Ability Controller', () => {

  let abilityController: AbilityController;
  let abilityService: AbilityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AbilityController],
      providers: [AbilityService],
    }).compile();

    abilityService = module.get<AbilityService>(AbilityService);
    abilityController = module.get<AbilityController>(AbilityController);
  });

  it('should be defined', () => {
    expect(abilityController).toBeDefined();
  });

  describe('findAllAbilities', () => {
    it('should return an array of abilities', async () => {
      const result = [{
        'id'  : '1',
        'name': 'findAllAbilities',
      }];

      jest.spyOn(abilityService, 'findAllAbilities').mockImplementation(() => result);

      expect(await abilityService.findAllAbilities()).toBe(result);
    });
  });

  describe('findOneAbility', () => {
    it('should return a single ability by id', async () => {
      const result = {
        'id'  : '2',
        'name': 'findOneAbility'
      };

      jest.spyOn(abilityService, 'findOneAbility').mockImplementation(() => result);

      expect(await abilityService.findOneAbility()).toBe(result);
    });
  });

});
