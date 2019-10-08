'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { GetCharacterDto } from './dto/get-character.dto';

@Controller('character')
export class CharacterController {

  // Get all characters in the game
  @Get()
  public findall(): GetCharacterDto[]{
    const result: GetCharacterDto[] = [
      {
        'name': 'Tester'
      }
    ];

    return result;
  }

  // Get the requested character if it exists
  @Get(':id')
  public findOne(@Param() params): string {
    let id = Math.abs(parseInt(params.id, 10));

    if (Number.isInteger(id) === false) {
      return `Must be integer`;
    }

    return `Received #${id}`;
  }

  // Get all of the character's ancestries
  @Get(':id/ancestry')
  public findAllAncestries(@Param() params): string {
    return params;
  }

  // Get the requested ancestry if the character has that ancestry
  @Get(':id/ancestry/:ancestryID')
  public findOneAncestry(@Param() params):
    string {
      return params;
  }

  // Get all of the character's backgounds
  @Get(':id/background')
  public findAllBackgounds(@Param() params):
    string {
      return params;
   }

  // Get the requested background if the character has that background
  @Get(':id/background/:backgroundID')
  public findOneBackound(@Param() params):
    string {
      return params;
  }

  // Get all of the character's classes
  @Get(':id/class')
  public findAllClasses(@Param() params):
    string {
      return params;
  }

  // Get the requested class if the character has that class
  @Get(':id/class/:classID')
  public findOneClass(@Param() params):
    string {
      return params;
   }

  // Get all abilities for the requested character's class
  @Get(':id/class/:classID/ability')
  public findAllAbilities(@Param() params):
    string {
      return params;
  }

  // Get the requested ability if the character's class has that ability
  @Get(':id/class/:classID/ability/:abilityID')
  public findOneAbility(@Param() params):
    string {
      return params;
  }

  /* todo: post an ability to request an action */

}
