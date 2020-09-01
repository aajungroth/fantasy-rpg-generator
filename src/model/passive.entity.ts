import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Game } from './game.entity';

@Entity({ name: 'passive' })
export class Passive extends BaseEntity {

  @ManyToOne(type => Game, (game) => game.id, {nullable: false})
  public gameId!: Game['id'];

}
