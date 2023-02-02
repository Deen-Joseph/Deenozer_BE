import {
  IsDate,
  IsMimeType,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateFaDto {
  fa_name: string;

  confederation: string;

  nationality: string;

  @IsDate()
  dof: Date;

  about: string;

  ranking: number;
  
  @IsMimeType()
  attachFile: any;
}
