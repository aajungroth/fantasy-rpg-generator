'use strict';

import * as request from 'supertest';

import { Test } from '@nestjs/testing';

import { AppModule } from '../src/app.module';

import { ModifierService } from '../src/modifier/modifier.service';

import { INestApplication } from '@nestjs/common';

describe('Modifier', () => {

  const findAllModifiersResult = [{'id': '1', 'name': 'findModifiers'}];
  const findModifierResult    = {'id': '2', 'name': 'findModifier'};

  let app: INestApplication;
  let modifierService = {
    findAllModifiers: () => findAllModifiersResult,
    findModifier: () => findModifierResult,
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ModifierService)
      .useValue(modifierService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  describe('/GET modifier', () => {
    it('should get all modifiers', (done) => {
      return request(app.getHttpServer())
        .get('/modifier')
        .expect(200)
        .expect(modifierService.findAllModifiers())
        .end(done);
    });
  });

  describe('/GET modifier/:modifierID', () => {
    it('should get one modifier by ID', (done) => {
      return request(app.getHttpServer())
        .get('/modifier/1')
        .expect(200)
        .expect(modifierService.findModifier())
        .end(done)
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
