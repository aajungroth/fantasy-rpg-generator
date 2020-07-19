import { BaseDto } from '../dto/Base.dto';
export declare class AbilityDao {
    findAllAbilities(): Promise<BaseDto[]>;
    findAbility(abilityID: any): Promise<BaseDto>;
    insertMultipleAbilities(abilityList: any): Promise<any>;
    insertAbility(abilityInfo: any): Promise<any>;
    updateAbility(abilityInfo: any): Promise<any>;
    deleteAbility(abilityID: any): Promise<any>;
}
