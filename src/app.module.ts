import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';
import { LoginController } from './apps/login/login.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [AuthModule, UsersModule, UserModule,TypeOrmModule.forRootAsync({
    imports: [ConfigModule.forRoot({
      isGlobal:true,
      envFilePath :'.local.env',
      // envFilePath:'.prod.env', for production
    })],
    useFactory: (configService: ConfigService) => ({
      type: 'postgres',
      host: configService.get('DB_HOST'),
      port: +configService.get<number>('DB_PORT'),
      username: configService.get('DB_USER'),
      password: configService.get('DB_PASSWORD'),
      database: configService.get('DB_DATABASE'),
      synchronize: configService.get<boolean>('DB_SYNC'),
      logging: true,
      entities: [__dirname+ '/**/*.entity{.ts,.js}'],
    }),
    inject: [ConfigService],
  })],
    
  controllers: [AppController, LoginController],
  providers: [AppService],
})
export class AppModule {}
