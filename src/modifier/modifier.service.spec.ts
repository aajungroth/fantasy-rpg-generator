'use strict';

import { Test, TestingModule } from '@nestjs/testing';

import { ModifierDao } from './modifier.dao';

import { ModifierService } from './modifier.service';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

describe('ModifierService', () => {

  let modifierDao: ModifierDao;
  let modifierService: ModifierService;

  beforeEach(async () => {
    modifierDao     = new ModifierDao();
    modifierService = new ModifierService(modifierDao);
  });

  it('should be defined', () => {
    expect(modifierService).toBeDefined();
  });

  describe('findAllModifiers', () => {
    it('should return an array of modifiers', async() => {
      const gameId: string = '1';

      const result: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '23',
        'name'         : 'findAllModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(modifierDao, 'findAllModifiers')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.findAllModifiers(gameId)).toBe(result);
    });
  });

  describe('findModifierById', () => {
    it('should return a single modifier by id', async () => {
      const gameId: string = '1';
      const id: string     = '24';

      const result: BaseDto = {
        'gameId'       : '1',
        'id'           : '24',
        'name'         : 'findModifierById',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(modifierDao, 'findModifierById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.findModifierById(gameId, id)).toBe(result);
    });
  });

  describe('findModifierByGame', () => {
    it('should return a list of modifiers by name', async () => {
      const gameId: string = '1';
      const name: string   = 'findModifierListByName';

      const result: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '24a',
        'name'         : 'findModifierListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(modifierDao, 'findModifierListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.findModifierListByName(gameId, name)).toBe(result);
    });
  });

  describe('insertMultipleModifiers', () => {
    it('should insert an array of modifiers', async () => {
      const params: BasePostDto[] = [{
        'gameId'       : '1',
        'name'         : 'insertMultipleModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: any[] = [{
        'gameId': '1',
        'id'    : '25',
        'name'  : 'insertMultipleModifiers'
      }];

      jest
        .spyOn(modifierDao, 'insertMultipleModifiers')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.insertMultipleModifiers(params)).toBe(result);
    });
  });

  describe('insertModifier', () => {
    it('should insert a single modifier', async () => {
      const params: BasePostDto = {
        'gameId'       : '1',
        'name'         : 'insertModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec',
      };

      const result: any = {
        'gameId': '1',
        'id'    : '26',
        'name'  : 'insertModifier'
      };

      jest
        .spyOn(modifierDao, 'insertModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.insertModifier(params)).toBe(result);
    });
  });

  describe('updateMultipleModifiers', () => {
    it('should update an array of modifiers', async() => {
      const params: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '27',
        'name'         : 'updateMultipleModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: Promise<any> = Promise.resolve({
        'gameId': '1',
        'id'    : '27',
        'name'  : 'updateMultipleModifiers'
      });

      jest
        .spyOn(modifierDao, 'updateModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.updateMultipleModifiers(params)).toStrictEqual([result]);
    });
  });

  describe('updateModifier', () => {
    it('should update a single modifier by Id', async () => {
      const params: BaseDto = {
        'gameId'       : '1',
        'id'           : '28',
        'name'         : 'updateModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = {
        'gameId': '1',
        'id'    : '28',
        'name'  : 'updateModifier'
      };

      jest
        .spyOn(modifierDao, 'updateModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.updateModifier(params)).toBe(result);
    });
  });

  describe('deleteMultipleModifiers', () => {
    it('should delete an array of multiples by Id', async () => {
      const params: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '29',
        'name'         : 'deleteMultipleModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: Promise<any> = Promise.resolve({
        'gameId': '1',
        'id'    : '29',
        'name'  : 'deleteMultipleModifiers'
      });

      jest
        .spyOn(await modifierDao, 'deleteModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.deleteMultipleModifiers(params)).toStrictEqual([result]);
    });
  });

  describe('deleteModifier', () => {
    it('should delete a single modifier by Id', async() => {
      const params: BaseDto = {
        'gameId'       : '1',
        'id'           : '20',
        'name'         : 'deleteModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = [{
        'gameId': '1',
        'id'    : '30',
        'name'  : 'deleteModifier'
      }];

      jest
        .spyOn(await modifierDao, 'deleteModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.deleteModifier(params)).toBe(result);
    });
  });

});
