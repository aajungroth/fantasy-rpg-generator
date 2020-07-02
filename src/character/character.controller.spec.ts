import { Test, TestingModule } from '@nestjs/testing';
import { CharacterController } from './character.controller';
import { CharacterDao} from './character.dao';
import { CharacterService } from './character.service';

describe('Character Controller', () => {

  let characterController: CharacterController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterController],
      providers: [CharacterDao, CharacterService]
    }).compile();

    characterController = module.get<CharacterController>(CharacterController);
  });

  it('should be defined', () => {
    expect(characterController).toBeDefined();
  });

});
