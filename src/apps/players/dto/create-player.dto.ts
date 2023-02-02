import { IsDate, IsMimeType, IsOptional, IsString, MinLength } from 'class-validator';

export class CreatePlayerDto {
  first_name: string;

  last_name: string;

  nationality: string;

  gender: string;

  club: string;
  
  @IsDate()
  dob: Date;

  about: string;

  position: string;

  @IsMimeType()
  attachFile: any;
}
