import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';

@Controller('login')
export class LoginController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
}
