'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { AbilityService } from '../src/ability/ability.service';

import { INestApplication } from '@nestjs/common';

describe('Ability', () => {

  const findAllAbilitiesResult      = [{'id': '1', 'name': 'findAllAbilities'}];
  const findAbilityResult           = {'id': '2', 'name': 'findAbilityByID'};
  const findAbilityListByNameResult = [{'id': '3', 'name': 'findAbilityListByNameResult'}];

  let app: INestApplication;
  let abilityService = {
    findAllAbilities     : () => findAllAbilitiesResult,
    findAbilityById      : () => findAbilityResult,
    findAbilityListByName: () => findAbilityListByNameResult,
  };

  beforeAll(async () => {
    const module = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .overrideProvider(AbilityService)
      .useValue(abilityService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('/GET ability/gameId/:gameId', () => {
    it('should get all abilities', (done) => {
      return request(app.getHttpServer())
        .get('/ability/gameId/1')
        .expect(200)
        .expect(abilityService.findAllAbilities())
        .end(done);
    });
  });

  describe('/GET ability/gameId/:gameId/id/:abilityId', () => {
    it('should get one ability by Id', (done) => {
      return request(app.getHttpServer())
        .get('/ability/gameId/1/id/1')
        .expect(200)
        .expect(abilityService.findAbilityById())
        .end(done);
    });
  });

  describe('/GET ability/gameId/:gameId/name/:abilityName', () => {
    it('should get a list of abilities by name', (done) => {
      return request(app.getHttpServer())
        .get('/ability/gameId/1/name/findAbilityListByName')
        .expect(200)
        .expect(abilityService.findAbilityListByName())
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
