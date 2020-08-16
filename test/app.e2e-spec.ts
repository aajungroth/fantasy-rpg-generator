'use strict';

import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('app', () => {
    it('/GET', (done) => {
      return request(app.getHttpServer())
        .get('/')
        .expect(200)
        .expect('Hello World!')
        .end(done);
    });
  });

  afterAll(async () => {
    await app.close();
  });

});
