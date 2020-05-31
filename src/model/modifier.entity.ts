import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'modifier' })
export class Modifier extends BaseEntity {}
