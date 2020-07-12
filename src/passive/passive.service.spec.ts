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

      jest.spyOn(passiveDao, 'findAllPassives').mockImplementation(() => Promise.resolve(result));

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

      jest.spyOn(passiveDao, 'findPassive').mockImplementation(() => Promise.resolve(result));

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

      jest.spyOn(passiveDao, 'insertMultiplePassives').mockImplementation(() => Promise.resolve(result));

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

      jest.spyOn(passiveDao, 'insertPassive').mockImplementation(() => Promise.resolve(result));

      expect(await passiveService.insertPassive(input)).toBe(result);
    });
  });

  describe('', () => {
    it('', async () => {

    });
  });


  describe('', () => {
    it('', async () => {

    });
  });

  describe('', () => {
    it('', async () => {

    });
  });


  describe('', () => {
    it('', async () => {

    });
  });

});
