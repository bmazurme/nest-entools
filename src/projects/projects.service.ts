import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { Project } from './entities/project.entity';
import { User } from '../users/entities/user.entity';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectRepository(Project)
    private readonly projectRepository: Repository<Project>,
  ) {}

  async create(createProjectDto: CreateProjectDto, user: User) {
    const project = new Project();
    project.name = createProjectDto.name;
    project.description = createProjectDto.description;
    project.address = createProjectDto.address;
    project.creator = user;

    return await this.projectRepository.save(project);
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    return this.projectRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateProjectDto: UpdateProjectDto) {
    return this.projectRepository.update(+id, updateProjectDto);
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }
}
