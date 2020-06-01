import { GetCharacterDto } from './dto/get-character.dto';
import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';
import { GetBackgroundDto } from './background/dto/get-background.dto';
import { GetClassDto } from './class/dto/get-class.dto';
import { GetAbilityDto } from './class/ability/dto/get-ability.dto';
import { PostAbilityDto } from './class/ability/dto/post-ability.dto';
import { CharacterDao } from './character.dao';
export declare class CharacterService {
    private readonly characterDao;
    constructor(characterDao: CharacterDao);
    private readonly characterList;
    private readonly characterAncestryList;
    private readonly characterBackgroundList;
    private readonly characterClassList;
    private readonly characterClassAbilityList;
    findOne(id: any, list: any): any;
    findAllCharacters(): GetCharacterDto[];
    findOneCharacter(characterID: any): GetCharacterDto;
    findAllAncestries(characterID: any): GetAncestryDto[];
    findOneAncestry(characterID: any, ancestryID: any): GetAncestryDto;
    findAllBackgounds(characterID: any): GetBackgroundDto[];
    findOneBackground(characterID: any, backgroundID: any): GetBackgroundDto;
    findAllClasses(characterID: any): GetClassDto[];
    findOneClass(characterID: any, classID: any): GetClassDto;
    findAllAbilities(characterID: any, classID: any): GetAbilityDto[];
    findOneAbility(characterID: any, classID: any, abilityID: any): GetAbilityDto;
    requestAction(characterID: any, classID: any, abilityID: any, targetID: any): PostAbilityDto;
}
