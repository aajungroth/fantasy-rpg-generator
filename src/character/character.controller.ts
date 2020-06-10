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
  @Get(':characterID')
  public findOneCharacter(@Param() params) {
    return this.characterService.findOneCharacter(params.characterID);
  }

  // Get all of the character's ancestries
  @Get(':characterID/ancestry')
  public findAllAncestries(@Param() params) {
    return this.characterService.findAllAncestries(params.characterID);
  }

  // Get the requested ancestry if the character has that ancestry
  @Get(':characterID/ancestry/:ancestryID')
  public findOneAncestry(@Param() params) {
    return this.characterService.findOneAncestry(params.characterID,
      params.ancestryID);
  }

  // Get all of the character's backgounds
  @Get(':characterID/background')
  public findAllBackgounds(@Param() params) {
    return this.characterService.findAllBackgounds(params.characterID);
  }

  // Get the requested background if the character has that background
  @Get(':characterID/background/:background')
  public findOneBackound(@Param() params) {
    return this.characterService.findOneBackground(params.characterID,
      params.backgroundID);
  }

  // Get all of the character's classes
  @Get(':characterID/class')
  public findAllClasses(@Param() params) {
    return this.characterService.findAllClasses(params.characterID);
  }

  // Get the requested class if the character has that class
  @Get(':characterID/class/:classID')
  public findOneClass(@Param() params) {
    return this.characterService.findOneClass(params.characterID,
      params.classID);
  }

  // Get all abilities for the requested character's class
  @Get(':characterID/class/:classID/ability')
  public findAllAbilities(@Param() params) {
    return this.characterService.findAllAbilities(params.characterID,
      params.classID);
  }

  // Get the requested ability if the character's class has that ability
  @Get(':characterID/class/:classID/ability/:abilityID')
  public findOneAbility(@Param() params) {
    return this.characterService.findOneAbility(params.characterID,
      params.classID, params.abilityID);
  }

  // Post a character's action with a target
  @Post(':characterID/class/:classID/ability/:abilityID/target/:targetID')
  public requestAction(@Param() params) {
    return this.characterService.requestAction(params.characterID,
      params.classID, params.abilityID, params.targetID);
  }

  // Post a character
  @Post()
  public insertCharacter(@Param() params) {
    let character: BasePostDto = {
      'name'       : 'Tester 3',
      'description': 'A tester',
      'createdBy': 'Post Route',
      'lastChangedBy': 'Post Route',
      //'internalComment': 'A tester who tests'
    };

    return this.characterService.insertCharacter(character);
  }

}
