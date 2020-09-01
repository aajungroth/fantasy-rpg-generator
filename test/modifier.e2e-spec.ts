'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { ModifierService } from '../src/modifier/modifier.service';

import { INestApplication } from '@nestjs/common';

describe('Modifier', () => {

  const findAllModifiersResult       = [{'id': '1', 'name': 'findAllModifiers'}];
  const findModifierByIdResult       = {'id': '2', 'name': 'findModifierById'};
  const findModifierListByNameResult = [{'id': '3', 'name': 'findModifierListByName'}];

  let app: INestApplication;
  let modifierService = {
    findAllModifiers      : () => findAllModifiersResult,
    findModifierById      : () => findModifierByIdResult,
    findModifierListByName: () => findModifierListByNameResult,
  };

  beforeAll(async () => {
    const module = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .overrideProvider(ModifierService)
      .useValue(modifierService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('/GET modifier/gameId/:gameId', () => {
    it('should get all modifiers', (done) => {
      return request(app.getHttpServer())
        .get('/modifier/gameId/1')
        .expect(200)
        .expect(modifierService.findAllModifiers())
        .end(done);
    });
  });

  describe('/GET modifier/gameId/:gameId/id/:modifierId', () => {
    it('should get one modifier by Id', (done) => {
      return request(app.getHttpServer())
        .get('/modifier/gameId/1/id/1')
        .expect(200)
        .expect(modifierService.findModifierById())
        .end(done);
    });
  });

  describe('/GET modifier/gameId/:gameId/name/:modifierName', () => {
    it('should get a list of modifiers by name', (done) => {
      return request(app.getHttpServer())
        .get('/modifier/gameId/1/name/findModifierListByName')
        .expect(200)
        .expect(modifierService.findModifierListByName())
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
