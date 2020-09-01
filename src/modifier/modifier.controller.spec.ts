'use strict';

import { Test, TestingModule } from '@nestjs/testing';

import { ModifierController } from './modifier.controller';

import { ModifierDao } from './modifier.dao';

import { ModifierService } from './modifier.service';

import { BaseDto } from '../dto/base.dto';

describe('Modifier Controller', () => {

  let modifierController: ModifierController;
  let modifierDao: ModifierDao;
  let modifierService: ModifierService;

  beforeEach(async () => {
    modifierDao        = new ModifierDao();
    modifierService    = new ModifierService(modifierDao);
    modifierController = new ModifierController(modifierService);
  });

  it('should be defined', () => {
    expect(modifierController).toBeDefined();
  });

  describe('findAllModifiers', () => {
    it('should return an array of modifiers', async () => {
      const params: Object = {
        'gameId': '1'
      };

      const result: BaseDto[] = [{
        'id'           : '21',
        'name'         : 'findAllModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec',
      }];

      jest
        .spyOn(modifierService, 'findAllModifiers')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierController.findAllModifiers(params)).toBe(result);
    });
  });

  describe('findModifierById', () => {
    it('should return a single modifier by id', async() => {
      const params: Object = {
        'gameId': '1',
        'id'    : '22'
      };

      const result: BaseDto = {
        'id'           : '22',
        'name'         : 'findModifierById',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(modifierService, 'findModifierById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierController.findModifierById(params)).toBe(result);
    });
  });

  describe('findModifierListByName', () => {
    it('should return a list of modifiers by name', async() => {
      const params: Object = {
        'gameId': '1',
        'name'  : 'findModifierListByName'
      };

      const result: BaseDto[] = [{
        'id'           : '22a',
        'name'         : 'findModifierListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(modifierService, 'findModifierListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierController.findModifierListByName(params)).toBe(result);
    });
  });

});
