import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { Role } from '../roles/entities/role.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';

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
      relations: ['roles'],
    });
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email },
      relations: ['roles'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne({
      where: { id },
      relations: ['roles'],
    });

    if (user?.roles) {
      const role = new Role();
      role.id = updateUserDto.role.id;
      role.name = updateUserDto.role.name;

      await user.updateRoles([role], this.userRepository.manager);
    }

    return user;
  }

  async updateUserProfile(id: number, updateUserDto: UpdateUserDto) {
    // Используем findOrFail для исключения лишнего условия if
    try {
      const user = await this.userRepository.findOneOrFail({
        where: { id },
        relations: ['roles'],
      });

      // Обновляем только измененные поля
      const updatedFields = Object.entries(updateUserDto).reduce(
        (acc, [key, value]) => {
          if (user[key] !== value) {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            acc[key] = value;
          }
          return acc;
        },
        {} as Partial<UpdateUserDto>,
      );

      // Если есть изменения - обновляем
      if (Object.keys(updatedFields).length > 0) {
        await this.userRepository.update(id, updatedFields);
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      // Обработка ошибки, если пользователь не найден
      throw new NotFoundException('Пользователь не найден');
    }
  }

  async updateUserStatus(id: number, updateUserStatusDto: UpdateUserStatusDto) {
    return await this.userRepository.update(+id, updateUserStatusDto);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }

  async findCurrent(user: User) {
    return await this.userRepository.findOne({
      where: { id: user.id },
      relations: ['roles'],
    });
  }
}
