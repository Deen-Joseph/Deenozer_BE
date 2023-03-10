import {
  Controller,
  Post,
  UseGuards,
  Request,
  HttpCode,
  Body,
} from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { LocalAuthGuard } from 'src/services/auth/local-strategy/local-auth.guard';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller('auth')
export class LoginController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() createUserData: CreateUserDto) {
    return this.authService.register(createUserData);
  }

  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Body() UserData: CreateUserDto): any {   
    return this.authService.validateUser(UserData.email, UserData.password);
  }
}
