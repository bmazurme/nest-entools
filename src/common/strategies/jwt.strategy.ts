/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * JWT authentication strategy for Passport.js
 * Handles JWT token verification and user validation
 * Extracts token from Authorization header and validates it against secret key
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  /**
   * Constructor initializing strategy configuration
   * @param configService Service for retrieving configuration settings
   * @description Sets up JWT strategy with secret key and token extraction method
   */
  constructor(private readonly configService: ConfigService) {
    super({
      // jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      jwtFromRequest: (request) => {
        const token = request.cookies?.access_token;
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return token;
      },
      secretOrKey: configService.get('JWT_SECRET') ?? 'SECRET',
    });
  }

  /**
   * Validates decoded JWT payload
   * @param payload Decoded JWT payload containing user information
   * @returns User object with ID and roles
   * @description Extracts user ID and roles from payload for further use in application
   */
  validate(payload: { sub: number; roles: string[] }) {
    console.log(payload);

    return {
      id: payload.sub,
      roles: payload.roles,
    };
  }
}
