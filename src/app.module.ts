import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { DocumentsModule } from './documents/documents.module';
import { BlocksModule } from './blocks/blocks.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { ItemsModule } from './items/items.module';
import { RolesModule } from './roles/roles.module';
import { OAuthModule } from './oauth/oauth.module';

import { TypeOrmModuleConfig } from './common/configs/type-orm.config';
import { RainRunoffsModule } from './rain-runoffs/rain-runoffs.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModuleConfig,
    UsersModule,
    ProjectsModule,
    DocumentsModule,
    BlocksModule,
    DocumentTypesModule,
    ItemsModule,
    RolesModule,
    OAuthModule,
    RainRunoffsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
