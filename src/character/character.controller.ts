'use strict';

import { Controller, Get, Param } from '@nestjs/common';

import { GetCharacterDto } from './dto/get-character.dto';

@Controller('character')
export class CharacterController {

  @Get()
  public findall(): GetCharacterDto[]{
    const result: GetCharacterDto[] = [
      {
        'name': 'Tester'
      }
    ];

    return result;
  }

  @Get(':id')
  public findOne(@Param() params): string {
    let id = Math.abs(parseInt(params.id, 10));

    if (Number.isInteger(id) === false) {
      return `Must be integer`;
    }

    return `Received #${id}`;
  }
}
