import { Test, TestingModule } from '@nestjs/testing';
import { PassiveController } from './passive.controller';

describe('Passive Controller', () => {
  let controller: PassiveController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PassiveController],
    }).compile();

    controller = module.get<PassiveController>(PassiveController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
