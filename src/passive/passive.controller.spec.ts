'use strict';

import { Test, TestingModule } from '@nestjs/testing';

import { PassiveController } from './passive.controller';

import { PassiveDao } from './passive.dao';

import { PassiveService } from './passive.service';

import { BaseDto } from '../dto/base.dto'

describe('Passive Controller', () => {

  let passiveController: PassiveController;
  let passiveDao: PassiveDao;
  let passiveService: PassiveService;

  beforeEach(async () => {
    passiveDao        = new PassiveDao();
    passiveService    = new PassiveService(passiveDao);
    passiveController = new PassiveController(passiveService);
  });

  it('should be defined', () => {
    expect(passiveController).toBeDefined();
  });

  describe('findAllPassives', () => {
    it('should return an array of passives', async () => {
      const params: Object = {
        'gameId': '1'
      };

      const result: BaseDto[] = [{
        'id'           : '11',
        'name'         : 'findAllPassives',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(passiveService, 'findAllPassives')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveController.findAllPassives(params)).toBe(result);
    });
  });

  describe('findPassiveById', () => {
    it('should return a single passive by id', async () => {
      const params: Object = {
        'gameId': '1',
        'id'    : '12'
      };

      const result: BaseDto = {
        'id'           : '12',
        'name'         : 'findPassiveById',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      jest
        .spyOn(passiveService, 'findPassiveById')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveController.findPassiveById(params)).toBe(result);
    });
  });

  describe('findPassiveListByName', () => {
    it('should return a list of passives by name', async() => {
      const params: Object = {
        'gameId': '1',
        'name'  : 'findPassiveListByName'
      };

      const result: BaseDto[] = [{
        'id'           : '12a',
        'name'         : 'findPassiveListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(passiveService, 'findPassiveListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveController.findPassiveListByName(params)).toBe(result);
    });
  });

});
