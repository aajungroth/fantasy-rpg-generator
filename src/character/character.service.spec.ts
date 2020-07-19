import { Test, TestingModule } from '@nestjs/testing';
import { CharacterDao } from './character.dao';
import { CharacterService } from './character.service';

describe('CharacterService', () => {

  let characterService: CharacterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterService, CharacterDao],
    }).compile();

    characterService = module.get<CharacterService>(CharacterService);
  });

  it('should be defined', () => {
    expect(characterService).toBeDefined();
  });

});
