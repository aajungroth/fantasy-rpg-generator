export class BaseDto {
  readonly gameId          : string;
  readonly id              : string;
  readonly name            : string;
  readonly description     : string;
  readonly createdBy       : string;
  readonly lastChangedBy   : string;
  readonly internalComment?: string | null;
}
