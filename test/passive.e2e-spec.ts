'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { PassiveService } from '../src/passive/passive.service';

import { INestApplication } from '@nestjs/common';

describe('Passive', ()  => {

  const findAllPassivesResult = [{'id': '1', 'name': 'findPassives'}];
  const findPassiveResult     = {'id': 2, 'name': 'findPassive'};

  let app: INestApplication;
  let passiveService = {
    findAllPassives: () => findAllPassivesResult,
    findPassive: () => findPassiveResult,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
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

  describe('/Get passive/:passiveID', () => {
    it('should get one passive by ID', (done) => {
      return request(app.getHttpServer())
        .get('/passive/1')
        .expect(200)
        .expect(passiveService.findPassive())
        .end(done)
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
