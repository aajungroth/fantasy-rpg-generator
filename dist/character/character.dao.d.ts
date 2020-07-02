import { Character } from '../model/character.entity';
import { BasePostDto } from '../dto/BasePost.dto';
export declare class CharacterDao {
    findAllCharacters(): Promise<Character[]>;
    findCharacter(id: string): Promise<Character>;
    insertAllCharacters(characterList: BasePostDto[]): Promise<any>;
    insertCharacter(characterInfo: BasePostDto): Promise<any>;
}
