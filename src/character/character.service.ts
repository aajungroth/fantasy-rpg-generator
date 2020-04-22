'use strict';

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { GetCharacterDto } from './dto/get-character.dto';

import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';

import { GetBackgroundDto } from './background/dto/get-background.dto';

import { GetClassDto } from './class/dto/get-class.dto';

import { GetAbilityDto } from './class/ability/dto/get-ability.dto';

import { PostAbilityDto } from './class/ability/dto/post-ability.dto';

@Injectable()
export class CharacterService {
  private readonly characterList: GetCharacterDto[] = [
    {
      'id': 1,
      'name': 'Sir Tester'
    },
    {
      'id': 2,
      'name': 'Super Guy'
    },
    {
      'id': 3,
      'name': 'Macy'
    },
    {
      'id': 4,
      'name': 'Wonder Gal'
    }
  ];

  private readonly characterAncestryList: GetAncestryDto[] = [
    {
      'id': 3,
      'name': 'Elf'
    },
    {
      'id': 4,
      'name': 'Human'
    }
  ];

  private readonly characterBackgroundList: GetBackgroundDto[] = [
    {
      'id': 4,
      'name': 'Wanderer'
    }
  ];

  private readonly characterClassList: GetClassDto[] = [
    {
      'id': 7,
      'name': 'Fighter',
    },
    {
      'id': 10,
      'name': 'Lancer'
    }
  ];

  private readonly characterClassAbilityList: GetAbilityDto[] = [
    {
      'id': 1,
      'name': 'Slash'
    },
    {
      'id': 2,
      'name': 'Block'
    }
  ];

  public findOne(id, list): any {
    // Convert id from a string to an integer
    id = Math.abs(parseInt(id, 10));

    // Throw an error for invalid input
    if (Number.isInteger(id) === false) {
      throw new HttpException(`ID must be an integer.`, HttpStatus.BAD_REQUEST);
    }

    // Find the element with the id
    return list.find(element => {
      if (element.id === id) {
        return element;
      }
    });
  }

  public findAllCharacters(): GetCharacterDto[] {
    return this.characterList;
  }

  public findOneCharacter(characterID): GetCharacterDto {
    return this.findOne(characterID, this.characterList);
  }

  // Get all of the character's ancestries
  public findAllAncestries(characterID): GetAncestryDto[] {
    return this.characterAncestryList;
  }

  // Get the requested ancestry if the character has that ancestry
  public findOneAncestry(characterID, ancestryID): GetAncestryDto {
    return this.findOne(ancestryID, this.characterAncestryList);
  }

  // Get all of the character's backgounds
  public findAllBackgounds(characterID): GetBackgroundDto[] {
    return this.characterBackgroundList;
  }

  // Get the requested background if the character has that background
  public findOneBackground(characterID, backgroundID): GetBackgroundDto {
    return this.findOne(backgroundID, this.characterBackgroundList);
  }

  // Get all of the character's classes
  public findAllClasses(characterID): GetClassDto[] {
    return this.characterClassList;
  }

  // Get the requested class if the character has that class
  public findOneClass(characterID, classID): GetClassDto {
    return this.findOne(classID, this.characterClassList);
  }

  // Get all abilities for the requested character's class
  public findAllAbilities(characterID, classID): GetAbilityDto[] {
    return this.characterClassAbilityList;
  }

  // Get the requested ability if the character's class has that ability
  public findOneAbility(characterID, classID, abilityID): GetAbilityDto {
    return this.findOne(abilityID, this.characterClassAbilityList);
  }

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
}
