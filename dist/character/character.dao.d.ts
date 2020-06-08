import { Character } from '../model/character.entity';
export declare class CharacterDao {
    findAllCharacters(): Promise<Character[]>;
    findCharacter(id: any): Promise<Character>;
    insertAllCharacters(characterInfo: any): Promise<any>;
    insertCharacter(characterList: any): Promise<any>;
}
