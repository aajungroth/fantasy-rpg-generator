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
      const gameId: string = '1';

      const result: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '13',
        'name'         : 'findAllPassives',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(passiveDao, 'findAllPassives')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.findAllPassives(gameId)).toBe(result);
    });
  });

  describe('findPassiveById', () => {
    it('should return a single passive by id', async () => {
      const gameId: string = '1';
      const id: string     = '14';

      const result: BaseDto = {
        'gameId'       : '1',
        'id'           : '14',
        'name'         : 'findPassiveById',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(passiveDao, 'findPassiveById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.findPassiveById(gameId, id)).toBe(result);
    });
  });

  describe('findPassiveListByName', () => {
    it('should return a list of passives by name', async () => {
      const gameId: string = '1';
      const name: string   = 'findPassiveListByName';

      const result: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '14a',
        'name'         : 'findPassiveListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(passiveDao, 'findPassiveListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.findPassiveListByName(gameId, name)).toBe(result);
    });
  });

  describe('insertMultiplePassives', () => {
    it('should insert an array of passives', async () => {
      const params: BasePostDto[] = [{
       'gameId'       : '1',
       'name'         : 'insertMultiplePassives',
       'description'  : 'A test',
       'createdBy'    : 'spec',
       'lastChangedBy': 'spec'
      }];

      const result: any[] = [{
        'gameId': '1',
        'id'    : '15',
        'name'  : 'insertMultiplePassives'
      }];

      jest
        .spyOn(passiveDao, 'insertMultiplePassives')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.insertMultiplePassives(params)).toBe(result);
    });
  });

  describe('insertPassive', () => {
    it('should insert a single passive', async () => {
      const params: BasePostDto = {
        'gameId'       : '1',
        'name'         : 'insertPassive',
        'description'  :'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = {
        'gameId': '1',
        'id'    : '16',
        'name'  : 'insertPassive'
      };

      jest
        .spyOn(passiveDao, 'insertPassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.insertPassive(params)).toBe(result);
    });
  });

  describe('updateMultiplePassives', () => {
    it('should update an array of passives', async () => {
      const params: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '17',
        'name'         : 'updateMultiplePassives',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: Promise<any> = Promise.resolve({
        'gameId': '1',
        'id'    : '17',
        'name'  : 'updateMultiplePassives'
      });

      jest
        .spyOn(passiveDao, 'updatePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.updateMultiplePassives(params)).toStrictEqual([result]);
    });
  });


  describe('updatePassive', () => {
    it('should update a single passive by Id', async () => {
      const params: BaseDto = {
        'gameId'       : '1',
        'id'           : '18',
        'name'         : 'updatePassive',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = {
        'gameId': '1',
        'id'    : '18',
        'name'  : 'updatePassive'
      };

      jest
        .spyOn(passiveDao, 'updatePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.updatePassive(params)).toBe(result);
    });
  });

  describe('deleteMultiplePassives', () => {
    it('should delete an array of passive by Id', async () => {
      const params: BaseDto[] = [{
        'gameId'       : '1',
        'id'           : '19',
        'name'         : 'deleteMultiplePassives',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const result: Promise<any> = Promise.resolve({
        'gameId': '1',
        'id'    : '19',
        'name'  : 'deleteMultiplePassives'
      });

      jest
        .spyOn(await passiveDao, 'deletePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.deleteMultiplePassives(params)).toStrictEqual([result]);
    });
  });


  describe('deletePassive', () => {
    it('should delete a single passive by Id', async () => {
      const params: BaseDto = {
        'gameId'       : '1',
        'id'           : '20',
        'name'         : 'deletePassive',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const result: any = [{
        'gameId': '1',
        'id'    : '20',
        'name'  : 'deletePassive'
      }];

      jest
        .spyOn(await passiveDao, 'deletePassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.deletePassive(params)).toBe(result);
    });
  });

});
