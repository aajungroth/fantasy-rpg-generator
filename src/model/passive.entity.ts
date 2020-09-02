import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Game } from './game.entity';

@Entity({ name: 'passive' })
export class Passive extends BaseEntity {

  @ManyToOne(type => Game, (game) => game.id, {nullable: false})
  @JoinColumn({ name: 'gameId' })
  public gameId!: Game['id'];

}
