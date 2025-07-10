/**
 * DTO (Data Transfer Object) для создания нового проекта
 * Используется при создании проекта через API
 * Содержит обязательные поля для создания проекта
 */
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
  /**
   * Название проекта
   *
   * @example 'Новый проект'
   * @description Обязательное поле, содержит название создаваемого проекта
   * @type {string}
   */
  @ApiProperty({
    description: 'Название проекта',
    example: 'Новый проект',
  })
  name: string;

  /**
   * Описание проекта
   *
   * @example 'Описание нового проекта'
   * @description Детальное описание проекта, его назначение и особенности
   * @type {string}
   */
  @ApiProperty({
    description: 'Описание проекта',
    example: 'Описание нового проекта',
  })
  description: string;

  /**
   * Адрес проекта
   *
   * @example 'г. Москва, ул. Примерная, д. 1'
   * @description Физический адрес расположения проекта
   * @type {string}
   */
  @ApiProperty({
    description: 'Адрес проекта',
    example: 'г. Москва, ул. Примерная, д. 1',
  })
  address: string;
}
