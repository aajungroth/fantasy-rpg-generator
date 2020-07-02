'use strict';

import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Character } from '../model/character.entity';

// import { GetCharacterDto } from './dto/get-character.dto';

// import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';

// import { GetBackgroundDto } from './background/dto/get-background.dto';

// import { GetClassDto } from './class/dto/get-class.dto';

// import { GetAbilityDto } from './class/ability/dto/get-ability.dto';

// import { PostAbilityDto } from './class/ability/dto/post-ability.dto';

import { BaseDto } from '../dto/Base.dto';

import { BasePostDto } from '../dto/BasePost.dto';

@Injectable()
export class CharacterDao {

  public async findAllCharacters(): Promise<Character[]> {
    return await getConnection()
      .createQueryBuilder()
      .select('character')
      .from(Character, 'character')
      .getMany();
  }

  public async findCharacter(id: string): Promise<Character> {
    return await getConnection()
      .createQueryBuilder()
      .select('character')
      .from(Character, 'character')
      .where('character.id = :id', { id: id })
      .getOne();
  }

  public async insertAllCharacters(characterList: BasePostDto[]): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Character)
      .values(characterList)
      .execute();
  }

  public async insertCharacter(characterInfo: BasePostDto): Promise<any> {
    return await getConnection()
      .createQueryBuilder()
      .insert()
      .into(Character)
      .values([characterInfo])
      .execute();
  }

}
