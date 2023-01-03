import { Controller, Post, UseGuards, Request } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { LocalAuthGuard } from 'src/services/auth/local-auth.guard';

@Controller()
export class LoginController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
     login(@Request() req):any {
      // return this.authService.login(req.user);
      return req.user
    }
}
