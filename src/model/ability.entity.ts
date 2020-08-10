import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Game } from './game.entity';

@Entity({ name: 'ability' })
export class Ability extends BaseEntity {

  @ManyToOne(type => Game, (game) => game.id, {nullable: false})
  public game!: Game;

}
