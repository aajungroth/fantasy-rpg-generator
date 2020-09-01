'use strict';

import { Controller, Get, Param, Post } from '@nestjs/common';

// import { GetCharacterDto } from './dto/get-character.dto';

// import { GetAncestryDto } from './ancestry/dto/get-ancestry.dto';

// import { GetBackgroundDto } from './background/dto/get-background.dto';

// import { GetClassDto } from './class/dto/get-class.dto';

// import { GetAbilityDto } from './class/ability/dto/get-ability.dto';

import { PostAbilityDto } from './dto/postAbility.dto';

import { BaseDto } from '../dto/base.dto';

import { BasePostDto } from '../dto/basePost.dto';

import { CharacterService } from './character.service';

@Controller('character')
export class CharacterController {

  constructor(private readonly characterService: CharacterService) {}

  // Get all characters in the game
  @Get()
  public findAllCharacters() {
    return this.characterService.findAllCharacters();
  }

  // Get the requested character if it exists
  @Get(':characterId')
  public findCharacter(@Param() params) {
    return this.characterService.findCharacter(params.characterId);
  }

  // // Get all of the character's ancestries
  // @Get(':characterId/ancestry')
  // public findAllAncestries(@Param() params) {
  //   return this.characterService.findAllAncestries(params.characterId);
  // }

  // // Get the requested ancestry if the character has that ancestry
  // @Get(':characterId/ancestry/:ancestryId')
  // public findOneAncestry(@Param() params) {
  //   return this.characterService.findOneAncestry(params.characterId,
  //     params.ancestryId);
  // }

  // // Get all of the character's backgounds
  // @Get(':characterId/background')
  // public findAllBackgounds(@Param() params) {
  //   return this.characterService.findAllBackgounds(params.characterId);
  // }

  // // Get the requested background if the character has that background
  // @Get(':characterId/background/:background')
  // public findOneBackound(@Param() params) {
  //   return this.characterService.findOneBackground(params.characterId,
  //     params.backgroundId);
  // }

  // // Get all of the character's classes
  // @Get(':characterId/class')
  // public findAllClasses(@Param() params) {
  //   return this.characterService.findAllClasses(params.characterId);
  // }

  // // Get the requested class if the character has that class
  // @Get(':characterId/class/:classId')
  // public findOneClass(@Param() params) {
  //   return this.characterService.findOneClass(params.characterId,
  //     params.classId);
  // }

  // // Get all abilities for the requested character's class
  // @Get(':characterId/class/:classId/ability')
  // public findAllAbilities(@Param() params) {
  //   return this.characterService.findAllAbilities(params.characterId,
  //     params.classId);
  // }

  // // Get the requested ability if the character's class has that ability
  // @Get(':characterId/class/:classId/ability/:abilityId')
  // public findOneAbility(@Param() params) {
  //   return this.characterService.findOneAbility(params.characterId,
  //     params.classId, params.abilityId);
  // }

  // Post a character's action with a target
  @Post(':characterId/class/:classId/ability/:abilityId/target/:targetId')
  public requestAction(@Param() params) {
    return this.characterService.requestAction(params.characterId,
      params.classId, params.abilityId, params.targetId);
  }

  // Post a character
  @Post()
  public insertCharacter(@Param() params) {
    let character: BasePostDto = {
      'gameId'           : '1',
      'name'             : 'Tester 3',
      'description'      : 'A tester',
      'createdBy'        : 'Post Route',
      'lastChangedBy'    : 'Post Route',
      //'internalComment': 'A tester who tests'
    };

    return this.characterService.insertCharacter(character);
  }

}
