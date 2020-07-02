import { PostAbilityDto } from './dto/postAbility.dto';
import { BasePostDto } from '../dto/basePost.dto';
import { CharacterDao } from './character.dao';
import { Character } from '../model/character.entity';
export declare class CharacterService {
    private readonly characterDao;
    constructor(characterDao: CharacterDao);
    findAllCharacters(): Promise<Character[]>;
    findCharacter(characterID: string): Promise<Character>;
    requestAction(characterID: any, classID: any, abilityID: any, targetID: any): PostAbilityDto;
    insertAllCharacters(characterList: BasePostDto[]): Promise<any>;
    insertCharacter(characterInfo: BasePostDto): Promise<any>;
}
