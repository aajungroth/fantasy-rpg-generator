import { BaseEntity } from './base.entity';
import { Ability } from './ability.entity';
import { Passive } from './passive.entity';
import { Modifier } from './modifier.entity';
export declare class Class extends BaseEntity {
    abilities: Ability[];
    passives: Passive[];
    modifiers: Modifier[];
}
