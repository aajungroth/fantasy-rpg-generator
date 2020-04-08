'use strict';

import { Injectable } from '@nestjs/common';

import { GetCharacterDto } from './dto/get-character.dto';

import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';

import { GetBackgroundDto } from './background/dto/get-background.dto';

import { GetClassDto } from './class/dto/get-class.dto';

import { GetAbilityDto } from './class/ability/dto/get-ability.dto';

import { PostAbilityDto } from './class/ability/dto/post-ability.dto';

@Injectable()
export class CharacterDao {
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
      'name': 'Dwarf'
    },
    {
      'id': 2,
      'name': 'Elemental Humanoid'
    },
    {
      'id': 3,
      'name': 'Elf'
    },
    {
      'id': 4,
      'name': 'Human'
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
}
