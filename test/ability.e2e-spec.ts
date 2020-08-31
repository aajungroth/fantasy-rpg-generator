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
    findAbilityByID      : () => findAbilityResult,
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

  describe('/GET ability', () => {
    it('should get all abilities', (done) => {
      return request(app.getHttpServer())
        .get('/ability')
        .expect(200)
        .expect(abilityService.findAllAbilities())
        .end(done);
    });
  });

  describe('/GET ability/id/:abilityID', () => {
    it('should get one ability by ID', (done) => {
      return request(app.getHttpServer())
        .get('/ability/id/1')
        .expect(200)
        .expect(abilityService.findAbilityByID())
        .end(done);
    });
  });

  describe('/GET ability/name/:abilityName', () => {
    it('should get a list of abilities by name', (done) => {
      return request(app.getHttpServer())
        .get('/ability/name/findAbilityListByName')
        .expect(200)
        .expect(abilityService.findAbilityListByName())
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
