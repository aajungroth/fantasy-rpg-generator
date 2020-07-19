'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

// import { GetCharacterDto } from './dto/get-character.dto';

// import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';

// import { GetBackgroundDto } from './background/dto/get-background.dto';

// import { GetClassDto } from './class/dto/get-class.dto';

// import { GetAbilityDto } from './class/ability/dto/get-ability.dto';

import { PostAbilityDto } from './dto/postAbility.dto';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { CharacterDao } from './character.dao';

import { Character } from '../model/character.entity';

@Injectable()
export class CharacterService {

  constructor(private readonly characterDao: CharacterDao) {}

  // private readonly characterList: BaseDto[] = [
  //   {
  //     'id': 1,
  //     'name': 'Sir Tester'
  //   },
  //   {
  //     'id': 2,
  //     'name': 'Super Guy'
  //   },
  //   {
  //     'id': 3,
  //     'name': 'Macy'
  //   },
  //   {
  //     'id': 4,
  //     'name': 'Wonder Gal'
  //   }
  // ];

  // private readonly characterAncestryList: BaseDto[] = [
  //   {
  //     'id': 3,
  //     'name': 'Elf'
  //   },
  //   {
  //     'id': 4,
  //     'name': 'Human'
  //   }
  // ];

  // private readonly characterBackgroundList: BaseDto[] = [
  //   {
  //     'id': 4,
  //     'name': 'Wanderer'
  //   }
  // ];

  // private readonly characterClassList: BaseDto[] = [
  //   {
  //     'id': 7,
  //     'name': 'Fighter',
  //   },
  //   {
  //     'id': 10,
  //     'name': 'Lancer'
  //   }
  // ];

  // private readonly characterClassAbilityList: BaseDto[] = [
  //   {
  //     'id': 1,
  //     'name': 'Slash'
  //   },
  //   {
  //     'id': 2,
  //     'name': 'Block'
  //   }
  // ];

  public findAllCharacters(): Promise<Character[]> {
    return this.characterDao.findAllCharacters();
  }

  public findCharacter(characterID: string): Promise<Character> {
    return this.characterDao.findCharacter(characterID);
  }

  // // Get all of the character's ancestries
  // public findAllAncestries(characterID): BaseDto[] {
  //   return this.characterAncestryList;
  // }

  // // Get the requested ancestry if the character has that ancestry
  // public findOneAncestry(characterID, ancestryID): BaseDto {
  //   return this.findOne(ancestryID, this.characterAncestryList);
  // }

  // // Get all of the character's backgounds
  // public findAllBackgounds(characterID): BaseDto[] {
  //   return this.characterBackgroundList;
  // }

  // // Get the requested background if the character has that background
  // public findOneBackground(characterID, backgroundID): BaseDto {
  //   return this.findOne(backgroundID, this.characterBackgroundList);
  // }

  // // Get all of the character's classes
  // public findAllClasses(characterID): BaseDto[] {
  //   return this.characterClassList;
  // }

  // // Get the requested class if the character has that class
  // public findOneClass(characterID, classID): BaseDto {
  //   return this.findOne(classID, this.characterClassList);
  // }

  // // Get all abilities for the requested character's class
  // public findAllAbilities(characterID, classID): BaseDto[] {
  //   return this.characterClassAbilityList;
  // }

  // // Get the requested ability if the character's class has that ability
  // public findOneAbility(characterID, classID, abilityID): BaseDto {
  //   return this.findOne(abilityID, this.characterClassAbilityList);
  // }

  // Post an ability id to request an action
  public requestAction(characterID, classID, abilityID, targetID): PostAbilityDto {
    const result : PostAbilityDto = {
      'id': abilityID,
      'name': 'test',
      'characterID': characterID,
      'classID': classID,
      'targetID': targetID
    };

    return result;
  }

  // Post multiple characters
  public insertAllCharacters(characterList: BasePostDto[]): Promise<any> {
    return this.characterDao.insertAllCharacters(characterList);
  }

  // Post a single character
  public insertCharacter(characterInfo: BasePostDto): Promise<any> {
    return this.characterDao.insertCharacter(characterInfo);
  }


  // Todo add updateCharacter

  // Todo add deleteCharacter

}
