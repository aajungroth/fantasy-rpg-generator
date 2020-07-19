import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Ability } from './ability.entity';
import { Passive } from './passive.entity';
import { Modifier } from './modifier.entity';

@Entity({ name: 'ancestry' })
export class Ancestry extends BaseEntity {
  @ManyToMany(type => Ability)
  @JoinTable()
  abilities: Ability[];

  @ManyToMany(type => Passive)
  @JoinTable()
  passives: Passive[];

  @ManyToMany(type => Modifier)
  @JoinTable()
  modifiers: Modifier[];
}
