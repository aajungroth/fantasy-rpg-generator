import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'ability' })
export class Ability extends BaseEntity {}