import { GetCharacterDto } from './dto/get-character.dto';
export declare class CharacterDao {
    findAllCharacters(): Promise<GetCharacterDto[]>;
    private readonly characterList;
    private readonly ancestryList;
    private readonly backgroundList;
    private readonly classList;
}
