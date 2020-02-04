import { GetCharacterDto } from './dto/get-character.dto';
import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';
import { GetBackgroundDto } from './background/dto/get-background.dto';
import { GetClassDto } from './class/dto/get-class.dto';
export declare class CharacterService {
    private readonly characterList;
    private readonly ancestryList;
    private readonly backgroundList;
    private readonly classList;
    findAll(): GetCharacterDto[];
    findOne(id: any): GetCharacterDto;
    findAllAncestries(): GetAncestryDto[];
    findOneAncestry(ancestryID: any): GetAncestryDto;
    findAllBackgounds(): GetBackgroundDto[];
    findOneBackound(backgroundID: any): GetBackgroundDto;
    findAllClasses(): GetClassDto[];
    findOneClass(classID: any): GetClassDto;
}
