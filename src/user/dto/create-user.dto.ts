import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';


export class CreateUserDto {
  
  name: string;

  username: string;

  @MinLength(8)
  password: string;


  @IsEmail()
  email: string;
}
