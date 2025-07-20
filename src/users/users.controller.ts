import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateUserStatusDto } from './dto/update-user-status.dto';
import { User } from './entities/user.entity';
import { JwtGuard } from '../common/guards/jwt.guard';

/**
 * Основной контроллер для работы с пользователями
 *
 * @class UsersController
 * @description Контроллер содержит методы для создания, получения, обновления и удаления пользователей
 */
@Controller('users')
export class UsersController {
  /**
   * Конструктор контроллера
   *
   * @constructor
   * @param {UsersService} usersService - Сервис для работы с пользователями
   */
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(JwtGuard)
  @Get('/me')
  findCurrent(@Req() req: { user: User }) {
    return this.usersService.findCurrent(req.user);
  }

  /**
   * Создает нового пользователя
   *
   * @method create
   * @param {CreateUserDto} createUserDto - Данные для создания пользователя
   * @returns {Promise<any>} - Созданный пользователь
   */
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid user data' })
  @ApiBody({ type: CreateUserDto })
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /**
   * Получает всех пользователей
   *
   * @method findAll
   * @returns {Promise<any[]>} - Список всех пользователей
   */
  @Get()
  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ status: 200, description: 'List of users' })
  findAll() {
    return this.usersService.findAll();
  }

  /**
   * Получает пользователя по ID
   *
   * @method findOne
   * @param {string} id - ID пользователя
   * @returns {Promise<any>} - Пользователь
   */
  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'User found' })
  @ApiResponse({ status: 404, description: 'User not found' })
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /**
   * Обновляет пользователя по ID
   *
   * @method update
   * @param {string} id - ID пользователя
   * @param {UpdateUserDto} updateUserDto - Данные для обновления
   * @returns {Promise<any>} - Обновленный пользователь
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Update user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'User updated' })
  @ApiResponse({ status: 404, description: 'User not found' })
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.updateUserProfile(+id, updateUserDto);
  }

  @Patch('status/:id')
  updateStatus(
    @Param('id') id: string,
    @Body() updateUserStatusDto: UpdateUserStatusDto,
  ) {
    return this.usersService.updateUserStatus(+id, updateUserStatusDto);
  }

  /**
   * Удаляет пользователя по ID
   *
   * @method remove
   * @param {string} id - ID пользователя
   * @returns {Promise<void>} - Удаленный пользователь
   */
  @Delete(':id')
  @ApiOperation({ summary: 'Delete user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 204, description: 'User deleted' })
  @ApiResponse({ status: 404, description: 'User not found' })
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
