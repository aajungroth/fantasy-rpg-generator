'use strict';

import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { AbilityService } from '../src/ability/ability.service';
import { INestApplication } from '@nestjs/common';

describe('Ability', () => {

  let app: INestApplication;
  let abilityService = {
    findAllAbilities: () => [{'id': '1', 'name': 'findOneAbility'}],
    findOneAbility: () => {'id': '2', 'name': 'findOneAbility'},
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
    it('should get all abilities', () => {
      return request(app.getHttpServer())
        .get('/ability')
        .expect(200)
        .expect({
          data: abilityService.findAllAbilities(),
        });
    });
  });

  describe('/GET ability/:abilityID', () => {
    it('should get one ability by ID', () => {
      return request(ap.getHttpServer())
        .get('/ability/1')
        .expect(200)
        .expect({
          data: abilityService.findOneAbility(),
        })
    });
  });

  afterAll(async () => {
    await app.close();
  });

})