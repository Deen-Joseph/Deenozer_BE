import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';
import { LoginController } from './apps/login/login.controller';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
