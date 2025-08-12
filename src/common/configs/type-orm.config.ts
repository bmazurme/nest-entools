import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { User } from '../../users/entities/user.entity';
import { Role } from '../../roles/entities/role.entity';
import { Project } from '../../projects/entities/project.entity';
import { Document } from '../../documents/entities/document.entity';
import { Type } from '../../types/entities/type.entity';
import { Block } from '../../blocks/entities/block.entity';
import { Item } from '../../items/entities/item.entity';
import { RainRunoff } from '../../rain-runoffs/entities/rain-runoff.entity';
import { RainRoof } from '../../rain-roofs/entities/rain-roof.entity';

export const TypeOrmModuleConfig = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('POSTGRES_HOST') ?? 'localhost',
    port: +configService.get('POSTGRES_PORT') || 5432,
    username: configService.get('POSTGRES_USER') ?? 'postgres',
    password: configService.get('POSTGRES_PASSWORD') ?? 'newPassword',
    database: configService.get('POSTGRES_DB') ?? 'my-db-name',
    entities: [
      User,
      Role,
      Project,
      Document,
      Type,
      Block,
      Item,
      RainRunoff,
      RainRoof,
    ],
    synchronize: true,
  }),
  inject: [ConfigService],
});
