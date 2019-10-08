import { GetCharacterDto } from './dto/get-character.dto';
export declare class CharacterController {
    findall(): GetCharacterDto[];
    findOne(params: any): string;
    findAllAncestries(params: any): string;
    findOneAncestry(params: any): string;
    findAllBackgounds(params: any): string;
    findOneBackound(params: any): string;
    findAllClasses(params: any): string;
    findOneClass(params: any): string;
    findAllAbilities(params: any): string;
    findOneAbility(params: any): string;
}
