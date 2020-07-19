import { BaseDto } from '../dto/Base.dto';
export declare class PassiveDao {
    findAllPassives(): Promise<BaseDto[]>;
    findPassive(passiveID: any): Promise<BaseDto>;
    insertMultiplePassives(passiveList: any): Promise<any>;
    insertPassive(passiveInfo: any): Promise<any>;
    updatePassive(passiveInfo: any): Promise<any>;
    deletePassive(passiveID: any): Promise<any>;
}
