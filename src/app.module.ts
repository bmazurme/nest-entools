import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { DocumentsModule } from './documents/documents.module';
import { BlocksModule } from './blocks/blocks.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { RainRunoffItemsModule } from './rain-runoff-items/rain-runoff-items.module';
import { RolesModule } from './roles/roles.module';
import { UserRolesModule } from './user-roles/user-roles.module';

import { TypeOrmModuleConfig } from './common/configs/type-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModuleConfig,
    UsersModule,
    ProjectsModule,
    DocumentsModule,
    BlocksModule,
    DocumentTypesModule,
    RainRunoffItemsModule,
    RolesModule,
    UserRolesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
