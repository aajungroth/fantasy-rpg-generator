import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'serverKeyPair' })
export class ServerKeyPair extends BaseEntity {

  @Column({ type: 'varchar', length: 1023 })
  publicKey: string;

  @Column({ type: 'varchar', length: 4095 })
  privateKey: string;

}
