import { Test, TestingModule } from '@nestjs/testing';
import { PassiveService } from './passive.service';

describe('PassiveService', () => {
  let service: PassiveService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PassiveService],
    }).compile();

    service = module.get<PassiveService>(PassiveService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
