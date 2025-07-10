import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheModule } from '@nestjs/cache-manager';

import { OAuthService } from './oauth.service';
import { OAuthController } from './oauth.controller';

import { UsersModule } from '../users/users.module';

import { YandexStrategy } from '../common/strategies/yandex.strategy';
import { JwtStrategy } from '../common/strategies/jwt.strategy';

@Module({
  imports: [
    UsersModule,
    CacheModule.register(),
    JwtModule.registerAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get('JWT_SECRET') ?? 'SECRET',
        signOptions: { expiresIn: '10d' },
      }),
      inject: [ConfigService],
    }),
  ],
  controllers: [OAuthController],
  providers: [OAuthService, YandexStrategy, JwtStrategy],
  exports: [OAuthService],
})
export class OAuthModule {}
