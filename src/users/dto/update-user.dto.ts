import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';

import { CreateUserDto } from './create-user.dto';
import { Role } from '../../roles/entities/role.entity';

/**
 * DTO для обновления пользователя
 * Наследует поля от CreateUserDto, делая их опциональными
 * Содержит обязательные поля для идентификации пользователя при обновлении
 */
export class UpdateUserDto extends PartialType(CreateUserDto) {
  /**
   * Роль пользователя в системе
   *
   * @example Role.ADMIN
   * @description Новая роль пользователя, которую можно обновить
   * @type {Role}
   */
  @ApiProperty({
    description: 'Роль пользователя в системе',
  })
  role: Role;
}
