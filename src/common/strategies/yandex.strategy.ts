/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-yandex';

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, 'yandex') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('CLIENT_YANDEX_ID') ?? '',
      clientSecret: configService.get('CLIENT_YANDEX_SECRET') ?? '',
      callbackURL: 'http://localhost:3000/oauth/yandex/redirect',
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (err: any, user: any, info?: any) => void,
  ): any {
    // auth service - get user or create
    // generate jwt
    const { default_email } = profile._json;
    const user = { email: default_email };
    const payload = {
      user,
      accessToken,
    };

    done(null, payload);
  }
}
