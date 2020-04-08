import { GetCharacterDto } from './dto/get-character.dto';
import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';
import { GetBackgroundDto } from './background/dto/get-background.dto';
import { GetClassDto } from './class/dto/get-class.dto';
import { GetAbilityDto } from './class/ability/dto/get-ability.dto';
import { PostAbilityDto } from './class/ability/dto/post-ability.dto';
import { CharacterService } from './character.service';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    findAllCharacters(): GetCharacterDto[];
    findOneCharacter(params: any): GetCharacterDto;
    findAllAncestries(params: any): GetAncestryDto[];
    findOneAncestry(params: any): GetAncestryDto;
    findAllBackgounds(params: any): GetBackgroundDto[];
    findOneBackound(params: any): GetBackgroundDto;
    findAllClasses(params: any): GetClassDto[];
    findOneClass(params: any): GetClassDto;
    findAllAbilities(params: any): GetAbilityDto[];
    findOneAbility(params: any): GetAbilityDto;
    requestAction(params: any): PostAbilityDto;
}
