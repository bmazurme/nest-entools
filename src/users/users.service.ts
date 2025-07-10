import { BadRequestException, Injectable } from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { Role } from '../roles/entities/role.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const { email } = createUserDto;
    const existUsers = await this.findByEmail(email);

    if (existUsers) {
      throw new BadRequestException(`user with email ${email} exist`);
    }

    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({
      relations: ['roles'],
    });
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({
      where: { id },
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['roles'],
    });

    if (user?.roles) {
      const role = new Role();
      role.id = updateUserDto.id;
      role.name = updateUserDto.name;

      await user.updateRoles([role], this.userRepository.manager);
    }

    return user;
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
