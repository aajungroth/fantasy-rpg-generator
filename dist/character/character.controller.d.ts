import { PostAbilityDto } from './dto/postAbility.dto';
import { CharacterService } from './character.service';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    findAllCharacters(): Promise<import("../model/character.entity").Character[]>;
    findCharacter(params: any): Promise<import("../model/character.entity").Character>;
    requestAction(params: any): PostAbilityDto;
    insertCharacter(params: any): Promise<any>;
}
