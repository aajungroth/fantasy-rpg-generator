import { Entity, Column, ManyToMany, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Ancestry } from './ancestry.entity';
import { Background } from './background.entity';
import { Class } from './class.entity';

@Entity({ name: 'world' })
export class World extends BaseEntity {
  @ManyToMany(type => Ancestry)
  @JoinTable()
  abilities: Ancestry[];

  @ManyToMany(type => Background)
  @JoinTable()
  backgrounds: Background[];

  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class[];
}
