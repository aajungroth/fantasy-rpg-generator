import { BaseDto } from '../dto/base.dto';
import { AbilityService } from './ability.service';
export declare class AbilityController {
    private readonly abilityService;
    constructor(abilityService: AbilityService);
    findAllAbilities(): Promise<BaseDto[]>;
    findAbility(params: any): Promise<BaseDto>;
}
