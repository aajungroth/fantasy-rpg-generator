import { BaseDto } from '../dto/base.dto';
import { BasePostDto } from '../dto/basePost.dto';
import { AbilityDao } from './ability.dao';
export declare class AbilityService {
    private readonly abilityDao;
    constructor(abilityDao: AbilityDao);
    findAllAbilities(): Promise<BaseDto[]>;
    findAbility(abilityID: string): Promise<BaseDto>;
    insertMultipleAbilities(abilityList: BasePostDto[]): Promise<any>;
    insertAbility(abilityInfo: BasePostDto): Promise<any>;
    updateMultipleAbilities(abilityList: BaseDto[]): Promise<any[]>;
    updateAbility(abilityInfo: BaseDto): Promise<any>;
    deleteMultipleAbilities(abilityList: BaseDto[]): Promise<any[]>;
    deleteAbility(abilityInfo: BaseDto): Promise<any>;
}
