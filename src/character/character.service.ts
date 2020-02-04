'use strict';

import { Injectable } from '@nestjs/common';

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

  private readonly ancestryList: GetAncestryDto[] = [
    {
      'id': 1,
      'name': 'Half Elf'
    },
    {
      'id': 2,
      'name': 'Dwarf'
    },
    {
      'id': 3,
      'name': 'Elemental Humanoid'
    }
  ];

  private readonly backgroundList: GetBackgroundDto[] = [
    {
      'id': 1,
      'name': 'Farmer'
    },
    {
      'id': 2,
      'name': 'Inn Keeper'
    },
    {
      'id': 3,
      'name': 'Miner'
    },
    {
      'id': 4,
      'name': 'Wanderer'
    }
  ];

  private readonly classList: GetClassDto[] = [
    {
      'id': 1,
      'name': 'Archer'
    },
    {
      'id': 2,
      'name': 'Bard'
    },
    {
      'id': 3,
      'name': 'Beserker'
    },
    {
      'id': 4,
      'name': 'Cleric'
    },
    {
      'id': 5,
      'name': 'Druid'
    },
    {
      'id': 6,
      'name': 'Elementalist'
    },
    {
      'id': 7,
      'name': 'Fighter'
    },
    {
      'id': 8,
      'name': 'Healer'
    },
    {
      'id': 9,
      'name': 'Illusionist'
    },
    {
      'id': 10,
      'name': 'Lancer'
    },
    {
      'id': 11,
      'name': 'Monk'
    },
    {
      'id': 12,
      'name': 'Rogue'
    }
  ];

  public findAll(): GetCharacterDto[] {
    return this.characterList;
  }

  public findOne(id): GetCharacterDto {
    id = Math.abs(parseInt(id, 10));

    if (Number.isInteger(id) === false) {
      throw(`Must be integer`);
    }

    return this.characterList.find(character => {
      if (character.id === id) {
        return character;
      }
     });
  }

  // Get all of the character's ancestries
  public findAllAncestries(): GetAncestryDto[] {
    return this.ancestryList;
  }

  // Get the requested ancestry if the character has that ancestry
  public findOneAncestry(ancestryID): GetAncestryDto {
     return this.ancestryList[ancestryID];
  }

  // Get all of the character's backgounds
  public findAllBackgounds(): GetBackgroundDto[] {
     return this.backgroundList;
  }

  // Get the requested background if the character has that background
  public findOneBackound(backgroundID): GetBackgroundDto {
    return this.backgroundList[backgroundID];
  }

  // Get all of the character's classes
  public findAllClasses(): GetClassDto[] {
    return this.classList;
  }

  // Get the requested class if the character has that class
  public findOneClass(classID): GetClassDto {
     return this.classList[classID];
  }

  // // Get all abilities for the requested character's class
  // public findAllAbilities(@Param() params): string {
  //     return params;
  // }

  // // Get the requested ability if the character's class has that ability
  // public findOneAbility(@Param() params): string {
  //     return params;
  // }

  // // Post an ability id to request an action
  // public requestAction(@Param() params): string {
  //   return `post ${params}`;
  // }
}
