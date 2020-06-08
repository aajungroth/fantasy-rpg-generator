import { BaseDto } from '../dto/base.dto';
import { CharacterService } from './character.service';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    findAllCharacters(): Promise<import("../model/character.entity").Character[]>;
    findOneCharacter(params: any): Promise<import("../model/character.entity").Character>;
    findAllAncestries(params: any): BaseDto[];
    findOneAncestry(params: any): BaseDto;
    findAllBackgounds(params: any): BaseDto[];
    findOneBackound(params: any): BaseDto;
    findAllClasses(params: any): BaseDto[];
    findOneClass(params: any): BaseDto;
    findAllAbilities(params: any): BaseDto[];
    findOneAbility(params: any): BaseDto;
    requestAction(params: any): BaseDto;
    insertCharacter(params: any): Promise<any>;
}
