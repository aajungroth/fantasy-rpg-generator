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
      const result: BaseDto[] = [{
        'id'           : '23',
        'name'         : 'findAllModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(modifierDao, 'findAllModifiers')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.findAllModifiers()).toBe(result);
    });
  });

  describe('findModifier', () => {
    it('should return a single modifier by id', async () => {
      const result: BaseDto = {
        'id'           : '24',
        'name'         : 'findModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '24';

      jest
        .spyOn(modifierDao, 'findModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.findModifier(id)).toBe(result);
    });
  });

  describe('insertMultipleModifiers', () => {
    it('should insert an array of modifiers', async () => {
      const result: any[] = [{
        'id'  : '25',
        'name': 'insertMultipleModifiers'
      }];

      const input: BasePostDto[] = [{
        'name'         : 'insertMultipleModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(modifierDao, 'insertMultipleModifiers')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.insertMultipleModifiers(input)).toBe(result);
    });
  });

  describe('insertModifier', () => {
    it('should insert a single modifier', async () => {
      const result: any = {
        'id'  : '26',
        'name': 'insertModifier'
      };

      const input: BasePostDto = {
        'name'         : 'insertModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec',
      };

      jest
        .spyOn(modifierDao, 'insertModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.insertModifier(input)).toBe(result);
    });
  });

  describe('updateMultipleModifiers', () => {
    it('should update an array of modifiers', async() => {
      const result: Promise<any> = Promise.resolve({
        'id'  : '27',
        'name': 'updateMultipleModifiers'
      });

      const input: BaseDto[] = [{
        'id'           : '27',
        'name'         : 'updateMultipleModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(modifierDao, 'updateModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.updateMultipleModifiers(input)).toStrictEqual([result]);
    });
  });

  describe('updateModifier', () => {
    it('should update a single modifier by ID', async () => {
      const result: any = {
        'id'  : '28',
        'name': 'updateModifier'
      };

      const input: BaseDto = {
        'id'           : '28',
        'name'         : 'updateModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(modifierDao, 'updateModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.updateModifier(input)).toBe(result);
    });
  });

  describe('deleteMultipleModifiers', () => {
    it('should delete an array of multiples by ID', async () => {
      const result: Promise<any> = Promise.resolve({
        'id'  : '29',
        'name': 'deleteMultipleModifiers'
      });

      const input: BaseDto[] = [{
        'id'           : '29',
        'name'         : 'deleteMultipleModifiers',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(await modifierDao, 'deleteModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.deleteMultipleModifiers(input)).toStrictEqual([result]);
    });
  });

  describe('deleteModifier', () => {
    it('should delete a single modifier by ID', async() => {
      const result: any = [{
        'id'  : '30',
        'name': 'deleteModifier'
      }];

      const input: BaseDto = {
        'id'           : '20',
        'name'         : 'deleteModifier',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(await modifierDao, 'deleteModifier')
        .mockImplementation(() => Promise.resolve(result));

      expect(await modifierService.deleteModifier(input)).toBe(result);
    });
  });

});
