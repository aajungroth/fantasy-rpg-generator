'use strict';

import { Test, TestingModule } from '@nestjs/testing';

import { GameController } from './game.controller';

import { GameDao } from './game.dao';

import { GameService } from './game.service';

import { BaseDto } from '../dto/base.dto';

describe('Game Controller', () => {

  let gameController: GameController;
  let gameDao: GameDao;
  let gameService: GameService;

  beforeEach(async () => {
    gameDao        = new GameDao();
    gameService    = new GameService(gameDao);
    gameController = new GameController(gameService);
  });

  it('should be defined', () => {
    expect(gameController).toBeDefined();
  });

  describe('findAllGames', () => {
    it('should return an array of games', async () => {
      const result: BaseDto[] = [{
        'id'         : '31',
        'name'       : 'findAllGames',
        'description': 'A test',
        'createdBy'  : 'spec',
        'lastChangedBy': 'spec'
      }];

      jest
        .spyOn(gameService, 'findAllGames')
        .mockImplementation(() => Promise.resolve(result));

      expect(await gameController.findAllGames()).toBe(result);
    });
  });

  describe('findGameByID', () => {
    it('should return a single game by id', async() => {
      const result: BaseDto = {
        'id'           : '32',
        'name'         : 'findGameByID',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      };

      const id: string = '32';

      jest
        .spyOn(gameService, 'findGameByID')
        .mockImplementation(() => Promise.resolve(result));

      expect(await gameController.findGameByID(id)).toBe(result);
    });
  });

  describe('findGameListByName', () => {
    it('should return a list of games by name', async() => {
      const result: BaseDto[] = [{
        'id'           : '33',
        'name'         : 'findGameListByName',
        'description'  : 'A test',
        'createdBy'    : 'spec',
        'lastChangedBy': 'spec'
      }];

      const name: string = 'findGameListByName';

      jest
        .spyOn(gameService, 'findGameListByName')
        .mockImplementation(() => Promise.resolve(result));

      expect(await gameController.findGameListByName(name)).toBe(result);
    });
  });

});
