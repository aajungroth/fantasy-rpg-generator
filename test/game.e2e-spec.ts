'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { GameService } from '../src/game/game.service';

import { INestApplication } from '@nestjs/common';

describe('Game', () => {

  const findAllGamesResult       = [{'id': '1', 'name': 'findGameResult'}];
  const findGameByIDResult       = {'id': '2', 'name': 'findGameByIDResult'};
  const findGameListByNameResult = [{'id': '3', 'name': 'findGameListByNameResult'}];

  let app: INestApplication;
  let gameService = {
    findAllGames      : () => findAllGamesResult,
    findGameByID      : () => findGameByIDResult,
    findGameListByName: () => findGameListByNameResult,
  };

  beforeAll(async () => {
    const module = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .overrideProvider(GameService)
      .useValue(gameService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('/GET game', () => {
    it('should get all games', (done) => {
      return request(app.getHttpServer())
        .get('/game')
        .expect(200)
        .expect(gameService.findAllGames())
        .end(done);
    });
  });

  describe('/Get game/id/:gameID', () => {
    it('should get one game by ID', (done) => {
      return request(app.getHttpServer())
        .get('/game/id/1')
        .expect(200)
        .expect(gameService.findGameByID())
        .end(done);
    });
  });

  describe('/Get game/name/:gameName', () => {
    it('should get one game by Name', (done) => {
      return request(app.getHttpServer())
        .get('/game/name/findGameListByName')
        .expect(200)
        .expect(gameService.findGameListByName())
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
