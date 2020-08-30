'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { PassiveService } from '../src/passive/passive.service';

import { INestApplication } from '@nestjs/common';

describe('Passive', ()  => {

  const findAllPassivesResult       = [{'id': '1', 'name': 'findAllPassives'}];
  const findPassiveByIDResult       = {'id': '2', 'name': 'findPassiveByID'};
  const findPassiveListByNameResult = [{'id': '3', 'name': 'findPassiveListByName'}];

  let app: INestApplication;
  let passiveService = {
    findAllPassives      : () => findAllPassivesResult,
    findPassiveByID      : () => findPassiveByIDResult,
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

  describe('/GET passive', () => {
    it('should get all passives', (done) => {
      return request(app.getHttpServer())
        .get('/passive')
        .expect(200)
        .expect(passiveService.findAllPassives())
        .end(done);
    });
  });

  describe('/GET passive/id/:passiveID', () => {
    it('should get one passive by ID', (done) => {
      return request(app.getHttpServer())
        .get('/passive/id/1')
        .expect(200)
        .expect(passiveService.findPassiveByID())
        .end(done);
    });
  });

  describe('/GET passive/name/:passiveName', () => {
    it('should get one passive by name', (done) => {
      return request(app.getHttpServer())
        .get('/passive/name/findPassiveListByName')
        .expect(200)
        .expect(passiveService.findPassiveListByName())
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
