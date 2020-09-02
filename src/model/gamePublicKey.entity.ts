import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'gamePublicKey' })
export class GamePublicKey extends BaseEntity {

  @Column({ type: 'varchar', length: 1023 })
  publicKey: string;

}
