'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { GameService } from '../src/game/game.service';

import { INestApplication } from '@nestjs/common';

describe('Game', () => {

  const findAllGamesResult       = [{'id': '1', 'name': 'findAllGames'}];
  const findGameByIdResult       = {'id': '2', 'name': 'findGameById'};
  const findGameListByNameResult = [{'id': '3', 'name': 'findGameListByName'}];

  let app: INestApplication;
  let gameService = {
    findAllGames      : () => findAllGamesResult,
    findGameById      : () => findGameByIdResult,
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

  describe('/GET game/id/:gameId', () => {
    it('should get one game by Id', (done) => {
      return request(app.getHttpServer())
        .get('/game/id/1')
        .expect(200)
        .expect(gameService.findGameById())
        .end(done);
    });
  });

  describe('/GET game/name/:gameName', () => {
    it('should get a list of games by name', (done) => {
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
