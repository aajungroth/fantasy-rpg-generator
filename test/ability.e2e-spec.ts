'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { AbilityService } from '../src/ability/ability.service';

import { INestApplication } from '@nestjs/common';

describe('Ability', () => {

  const findAllAbilitiesResult = [{'id': '1', 'name': 'findAbilities'}];
  const findAbilityResult      = {'id': '2', 'name': 'findAbility'};

  let app: INestApplication;
  let abilityService = {
    findAllAbilities: () => findAllAbilitiesResult,
    findAbility: () => findAbilityResult,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
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

  describe('/GET ability/:abilityID', () => {
    it('should get one ability by ID', (done) => {
      return request(app.getHttpServer())
        .get('/ability/1')
        .expect(200)
        .expect(abilityService.findAbility())
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
