import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'passive' })
export class Passive extends BaseEntity {}
