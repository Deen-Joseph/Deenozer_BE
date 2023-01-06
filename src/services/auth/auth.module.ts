import { Module } from '@nestjs/common';
import { AuthService } from 'src/services/auth/auth.service';
import { UsersModule } from 'src/services/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { LocalStrategy } from './local-strategy/local.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt-startegy/jwt.strategy';

@Module({
    imports: [UsersModule, UserModule,
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '60s' },
      }),],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService, ],
  })
export class AuthModule {}
