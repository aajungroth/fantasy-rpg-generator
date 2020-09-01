'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { PassiveService } from '../src/passive/passive.service';

import { INestApplication } from '@nestjs/common';

describe('Passive', ()  => {

  const findAllPassivesResult       = [{'id': '1', 'name': 'findAllPassives'}];
  const findPassiveByIdResult       = {'id': '2', 'name': 'findPassiveById'};
  const findPassiveListByNameResult = [{'id': '3', 'name': 'findPassiveListByName'}];

  let app: INestApplication;
  let passiveService = {
    findAllPassives      : () => findAllPassivesResult,
    findPassiveById      : () => findPassiveByIdResult,
    findPassiveListByName: () => findPassiveListByNameResult,
  };

  beforeAll(async () => {
    const module = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .overrideProvider(PassiveService)
      .useValue(passiveService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('/GET passive/gameId/:gameId', () => {
    it('should get all passives', (done) => {
      return request(app.getHttpServer())
        .get('/passive/gameId/1')
        .expect(200)
        .expect(passiveService.findAllPassives())
        .end(done);
    });
  });

  describe('/GET passive/gameId/:gameId/id/:passiveId', () => {
    it('should get one passive by Id', (done) => {
      return request(app.getHttpServer())
        .get('/passive/gameId/1/id/1')
        .expect(200)
        .expect(passiveService.findPassiveById())
        .end(done);
    });
  });

  describe('/GET passive/gameId/:gameId/name/:passiveName', () => {
    it('should get a list of passives by name', (done) => {
      return request(app.getHttpServer())
        .get('/passive/gameId/1/name/findPassiveListByName')
        .expect(200)
        .expect(passiveService.findPassiveListByName())
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
