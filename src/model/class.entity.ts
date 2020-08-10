import { Entity, Column, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Ability } from './ability.entity';
import { Passive } from './passive.entity';
import { Modifier } from './modifier.entity';
import { Game } from './game.entity';

@Entity({ name: 'class' })
export class Class extends BaseEntity {

  @ManyToMany(type => Ability)
  @JoinTable()
  abilities: Ability[];

  @ManyToMany(type => Passive)
  @JoinTable()
  passives: Passive[];

  @ManyToMany(type => Modifier)
  @JoinTable()
  modifiers: Modifier[];

  @ManyToOne(type => Game, (game) => game.id, {nullable: false})
  public game!: Game;

}
