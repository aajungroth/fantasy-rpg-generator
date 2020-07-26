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

      expect(await passiveController.findAllPassives()).toBe(result);
    });
  });

  describe('findPassive', () => {
    it('should return a single passive by id', async () => {
      const result: BaseDto = {
        'id'           : '12',
        'name'         : 'findPassive',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '12';

      jest
        .spyOn(passiveService, 'findPassive')
        .mockImplementation(() => Promise.resolve(result));

      expect(await passiveController.findPassive(id)).toBe(result);
    });
  });

});
