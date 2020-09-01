import { Entity, Column, ManyToMany, ManyToOne, JoinTable } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Ancestry } from './ancestry.entity';
import { Background } from './background.entity';
import { Class } from './class.entity';
import { Game } from './game.entity';

@Entity({ name: 'character' })
export class Character extends BaseEntity {

  @ManyToMany(type => Ancestry)
  @JoinTable()
  abilities: Ancestry[];

  @ManyToMany(type => Background)
  @JoinTable()
  backgrounds: Background[];

  @ManyToMany(type => Class)
  @JoinTable()
  classes: Class[];

  @ManyToOne(type => Game, (game) => game.id, {nullable: false})
  public gameId!: Game['id'];

}
