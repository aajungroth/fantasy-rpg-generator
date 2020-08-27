'use strict';

import { Test, TestingModule } from '@nestjs/testing';

import { GameDao } from  './game.dao';

import { GameService } from './game.service';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

describe('GameService', () => {

  let gameDao: GameDao;
  let gameService: GameService;

  beforeEach(async () => {
    gameDao     = new GameDao();
    gameService = new GameService(gameDao);
  });

  it('should be defined', () => {
    expect(gameService).toBeDefined();
  });

  describe('findAllGames', () => {
    it('should return an array of games', async() => {
      const result: BaseDto[] = [{
        'id'           : '34',
        'name'         : 'findAllGames',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(gameDao, 'findAllGames')
        .mockImplementation(() => Promise.resolve(result));

      expect(await gameService.findAllGames()).toBe(result);
   });
  });

  describe('findGameByID', () => {
    it('should return a game by id', async() => {
      const result: BaseDto = {
        'id'           : '35',
        'name'         : 'findGameByID',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '35';

      jest
        .spyOn(gameDao, 'findGameByID')
        .mockImplementation(() => Promise.resolve(result));

      expect(await gameService.findGameByID(id)).toBe(result);
    });
  });

  describe('findGameListByName', () => {
    it('should return a list of games by name', async() => {
      const result: BaseDto[] = [{
        'id'           : '36',
        'name'         : 'findGameListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const name: string = 'findGameListByName';

      jest
        .spyOn(gameDao, 'findGameListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await gameService.findGameListByName(name)).toBe(result);
    });
  });

});
