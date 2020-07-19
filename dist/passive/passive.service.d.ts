import { BaseDto } from '../dto/base.dto';
import { BasePostDto } from '../dto/basePost.dto';
import { PassiveDao } from './passive.dao';
export declare class PassiveService {
    private readonly passiveDao;
    constructor(passiveDao: PassiveDao);
    findAllPassives(): Promise<BaseDto[]>;
    findPassive(passiveID: string): Promise<BaseDto>;
    insertMultiplePassives(passiveList: BasePostDto[]): Promise<any>;
    insertPassive(passiveInfo: BasePostDto): Promise<any>;
    updateMultiplePassives(passiveList: BaseDto[]): Promise<any>;
    updatePassive(passiveInfo: BaseDto): Promise<any>;
    deleteMultiplePassives(passiveList: BaseDto[]): Promise<any>;
    deletePassive(passiveInfo: BaseDto): Promise<any>;
}
