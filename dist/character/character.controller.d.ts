import { GetCharacterDto } from './dto/get-character.dto';
import { CharacterService } from './character.service';
export declare class CharacterController {
    private readonly characterService;
    constructor(characterService: CharacterService);
    findall(): GetCharacterDto[];
    findOne(params: any): GetCharacterDto;
    findAllAncestries(params: any): string;
    findOneAncestry(params: any): string;
    findAllBackgounds(params: any): string;
    findOneBackound(params: any): string;
    findAllClasses(params: any): string;
    findOneClass(params: any): string;
    findAllAbilities(params: any): string;
    findOneAbility(params: any): string;
    requestAction(params: any): string;
}
