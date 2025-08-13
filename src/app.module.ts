import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { DocumentsModule } from './documents/documents.module';
import { BlocksModule } from './blocks/blocks.module';
import { TypesModule } from './types/types.module';
import { ItemsModule } from './items/items.module';
import { RolesModule } from './roles/roles.module';
import { OAuthModule } from './oauth/oauth.module';
import { RainRunoffsModule } from './rain-runoffs/rain-runoffs.module';
import { RainRoofsModule } from './rain-roofs/rain-roofs.module';

import { TypeOrmModuleConfig } from './common/configs/type-orm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModuleConfig,
    UsersModule,
    ProjectsModule,
    DocumentsModule,
    BlocksModule,
    TypesModule,
    ItemsModule,
    RolesModule,
    OAuthModule,
    RainRunoffsModule,
    RainRoofsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
