import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Put,
} from '@nestjs/common';

import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { JwtGuard } from '../common/guards/jwt.guard';
import { User } from '../users/entities/user.entity';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post()
  @UseGuards(JwtGuard)
  create(
    @Body() createProjectDto: CreateProjectDto,
    @Req() req: { user: User },
  ) {
    return this.projectsService.create(createProjectDto, req.user);
  }

  @Put(':id')
  @UseGuards(JwtGuard)
  setActive(@Param('id') id: string, @Req() req: { user: User }) {
    return this.projectsService.setActive(+id, req.user);
  }

  @Get('/my')
  @UseGuards(JwtGuard)
  findAllByUser(@Req() req: { user: User }) {
    return this.projectsService.findAllByUser(req.user);
  }

  @Get('/current')
  @UseGuards(JwtGuard)
  findCurrent(@Req() req: { user: User }) {
    return this.projectsService.findCurrent(req.user);
  }

  @Get()
  @UseGuards(JwtGuard)
  findAll() {
    return this.projectsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectsService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectsService.remove(+id);
  }
}
