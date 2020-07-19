import { BaseDto } from '../dto/base.dto';
import { PassiveService } from './passive.service';
export declare class PassiveController {
    private readonly passiveService;
    constructor(passiveService: PassiveService);
    findAllPassives(): Promise<BaseDto[]>;
    findPassive(params: any): Promise<BaseDto>;
}
