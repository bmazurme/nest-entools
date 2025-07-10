import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { User } from '../../users/entities/user.entity';
import { Role } from '../../roles/entities/role.entity';

export const TypeOrmModuleConfig = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST') ?? 'localhost',
    port: +configService.get('POSTGRES_PORT') || 5432,
    username: configService.get('POSTGRES_USER') ?? 'postgres',
    password: configService.get('POSTGRES_PASSWORD') ?? 'newPassword',
    database: configService.get('POSTGRES_DB') ?? 'my-db-name',
    entities: [User, Role],
    synchronize: true,
  }),
  inject: [ConfigService],
});
