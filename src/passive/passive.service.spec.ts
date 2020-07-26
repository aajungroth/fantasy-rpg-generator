import { Test, TestingModule } from '@nestjs/testing';

import { PassiveDao } from './passive.dao';

import { PassiveService } from './passive.service';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

describe('PassiveService', () => {

  let passiveDao: PassiveDao;
  let passiveService: PassiveService;

  beforeEach(async () => {
    passiveDao     = new PassiveDao();
    passiveService = new PassiveService(passiveDao);
  });

  it('should be defined', () => {
    expect(passiveService).toBeDefined();
  });

  describe('findAllPassives', () => {
    it('should return an array of passives', async () => {
      const result: BaseDto[] = [{
        'id'           : '13',
        'name'         : 'findAllPassives',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(passiveDao, 'findAllPassives')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.findAllPassives()).toBe(result);
    });
  });

  describe('findPassive', () => {
    it('should return a single passive by id', async () => {
      const result: BaseDto = {
        'id'           : '14',
        'name'         : 'findPassive',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '14';

      jest
        .spyOn(passiveDao, 'findPassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.findPassive(id)).toBe(result);
    });
  });

  describe('insertMultiplePassives', () => {
    it('should insert an array of passives', async () => {
      const result: any[] = [{
        'id'  : '15',
        'name': 'insertMultiplePassives'
      }];

      const input: BasePostDto[] = [{
       'name'         : 'insertMultiplePassives',
       'description'  : 'A test',
       'createdBy'    : 'spec',
       'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(passiveDao, 'insertMultiplePassives')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.insertMultiplePassives(input)).toBe(result);
    });
  });

  describe('insertPassive', () => {
    it('should insert a single passive', async () => {
      const result: any = {
        'id'  : '16',
        'name': 'insertPassive'
      };

      const input: BasePostDto = {
        'name'         : 'insertPassive',
        'description'  :'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(passiveDao, 'insertPassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.insertPassive(input)).toBe(result);
    });
  });

  describe('updateMultiplePassives', () => {
    it('should update an array of passives', async () => {
      const result: any = {
        'id'  : '17',
        'name': 'updateMultiplePassives'
      };

      const input: BaseDto[] = [{
        'id'           : '17',
        'name'         : 'updateMultiplePassives',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(passiveDao, 'updatePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.updateMultiplePassives(input)).toBe([result]);
    });
  });


  describe('updatePassive', () => {
    it('should update a single passive by ID', async () => {
      const result: any = {
        'id'  : '18',
        'name': 'updatePassive'
      };

      const input: BaseDto = {
        'id'           : '18',
        'name'         : 'updatePassive',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(passiveDao, 'updatePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.updatePassive(input)).toBe(result);
    });
  });

  describe('deleteMultiplePassives', () => {
    it('should delete an array of passive by ID', async () => {
      const result: any = {
        'id'  : '19',
        'name': 'deleteMultiplePassives'
      };

      const input: BaseDto[] = [{
        'id'           : '19',
        'name'         : 'deleteMultiplePassives',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(await passiveDao, 'deletePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.deleteMultiplePassives(input)).toBe([result]);
    });
  });


  describe('deletePassive', () => {
    it('should delete a single passive by ID', async () => {
      const result: any = [{
        'id'  : '20',
        'name': 'deletePassive'
      }];

      const input: BaseDto = {
        'id'           : '20',
        'name'         : 'deletePassive',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(await passiveDao, 'deletePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.deletePassive(input)).toBe(result);
    });
  });

});
