import { BaseEntity } from './base.entity';
import { Ancestry } from './ancestry.entity';
import { Background } from './background.entity';
import { Class } from './class.entity';
export declare class World extends BaseEntity {
    abilities: Ancestry[];
    backgrounds: Background[];
    classes: Class[];
}
