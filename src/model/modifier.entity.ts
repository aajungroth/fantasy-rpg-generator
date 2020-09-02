import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Game } from './game.entity';

@Entity({ name: 'modifier' })
export class Modifier extends BaseEntity {

  @ManyToOne(type => Game, (game) => game.id, {nullable: false})
  @JoinColumn({ name: 'gameId' })
  public gameId!: Game['id'];

}
