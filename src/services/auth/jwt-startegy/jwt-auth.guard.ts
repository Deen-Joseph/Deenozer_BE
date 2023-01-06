import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard, IAuthGuard } from '@nestjs/passport';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') implements IAuthGuard {

    canActivate(context: ExecutionContext) {
        // Add your custom authentication logic here
        // for example, call super.logIn(request) to establish a session.
        return super.canActivate(context);
      }
    
      handleRequest(err, user, info) {
        // You can throw an exception based on either "info" or "err" arguments
        if (err || !user) {
          throw err || new UnauthorizedException();
        }
        return user;
      }

}
