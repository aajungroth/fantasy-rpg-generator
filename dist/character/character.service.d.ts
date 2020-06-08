import { BaseDto } from '../dto/base.dto';
import { CharacterDao } from './character.dao';
import { Character } from '../model/character.entity';
export declare class CharacterService {
    private readonly characterDao;
    constructor(characterDao: CharacterDao);
    private readonly characterList;
    private readonly characterAncestryList;
    private readonly characterBackgroundList;
    private readonly characterClassList;
    private readonly characterClassAbilityList;
    findOne(id: any, list: any): any;
    findAllCharacters(): Promise<Character[]>;
    findOneCharacter(characterID: any): Promise<Character>;
    findAllAncestries(characterID: any): BaseDto[];
    findOneAncestry(characterID: any, ancestryID: any): BaseDto;
    findAllBackgounds(characterID: any): BaseDto[];
    findOneBackground(characterID: any, backgroundID: any): BaseDto;
    findAllClasses(characterID: any): BaseDto[];
    findOneClass(characterID: any, classID: any): BaseDto;
    findAllAbilities(characterID: any, classID: any): BaseDto[];
    findOneAbility(characterID: any, classID: any, abilityID: any): BaseDto;
    requestAction(characterID: any, classID: any, abilityID: any, targetID: any): BaseDto;
    insertAllCharacters(characterList: any): Promise<any>;
    insertCharacter(characterInfo: any): Promise<any>;
}
