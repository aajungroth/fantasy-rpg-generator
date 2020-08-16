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

      expect(await modifierController.findAllModifiers()).toBe(result);
    });
  });

  describe('findModifier', () => {
    it('should return a single modifier by id', async() => {
      const result: BaseDto = {
        'id'           : '22',
        'name'         : 'findModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '22';

      jest
        .spyOn(modifierService, 'findModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierController.findModifier(id)).toBe(result);
    });
  });

});
