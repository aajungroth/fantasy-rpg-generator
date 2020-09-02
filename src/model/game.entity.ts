import { Entity, Column, OneToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from './base.entity';
import { GamePublicKey } from './gamePublicKey.entity';

@Entity({ name: 'game' })
export class Game extends BaseEntity {

  @OneToOne(type => GamePublicKey, (gamePublicKey) => gamePublicKey.id, {nullable: false})
  @JoinColumn({ name: 'gamePublicKeyId' })
  public gamePublicKeyId!: GamePublicKey['id'];

}
