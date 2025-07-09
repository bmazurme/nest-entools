/**
 * Конфигурация Swagger для NestJS приложения
 *
 * Этот файл содержит настройки для генерации документации Swagger
 * с помощью NestJS Swagger модуля.
 */
import { DocumentBuilder } from '@nestjs/swagger';

/**
 * Экспортируемая конфигурация Swagger
 *
 * Содержит основные параметры для построения документации:
 * - название API
 * - описание
 * - версия
 * - теги
 */
export const swaggerConfig = new DocumentBuilder()
  /**
   * Устанавливает название API
   *
   * @param title Название API, которое будет отображаться в документации
   */
  .setTitle('Entools')
  .setDescription('The place API description')
  .setVersion('1.0')
  .addTag('entools')
  .build();
