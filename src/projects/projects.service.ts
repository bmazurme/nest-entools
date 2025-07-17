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
    const current = await this.findCurrent(user);

    if (current) {
      current.isActive = false;
      await this.projectRepository.update(current.id, current);
    }

    const project = new Project();
    project.name = createProjectDto.name;
    project.description = createProjectDto.description;
    project.address = createProjectDto.address;
    project.creator = user;
    project.isActive = true;

    return await this.projectRepository.save(project);
  }

  async setActive(id: number, user: User) {
    const current = await this.findCurrent(user);
    const target = await this.findOne(id);

    if (current) {
      current.isActive = false;
      await this.projectRepository.update(current.id, current);
    }

    if (target) {
      target.isActive = true;
      await this.projectRepository.update(target.id, target);
    }

    return target;
  }

  findAll() {
    return this.projectRepository.find();
  }

  findOne(id: number) {
    return this.projectRepository.findOne({
      where: { id },
    });
  }

  async findCurrent(user: User) {
    return await this.projectRepository.findOne({
      where: {
        creator: user,
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        description: true,
        isActive: true,
      },
    });
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    await this.projectRepository.update(+id, updateProjectDto);
    return await this.projectRepository.findOne({
      where: { id },
    });
  }

  remove(id: number) {
    return this.projectRepository.delete(id);
  }

  async findAllByUser(user: User) {
    return await this.projectRepository.find({
      where: {
        creator: user,
      },
      select: {
        id: true,
        name: true,
      },
    });
  }
}
