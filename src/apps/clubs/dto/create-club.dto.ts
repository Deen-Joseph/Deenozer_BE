import {
  IsDate,
  IsMimeType,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateClubDto {
  club_name: string;

  league_name: string;

  nationality: string;

  confederation: string;

  @IsDate()
  dof: Date;

  about: string;

  ranking: number;

  @IsMimeType()
  attachFile: any;
}
