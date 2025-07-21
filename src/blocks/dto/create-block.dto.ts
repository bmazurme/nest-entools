import { ApiProperty } from '@nestjs/swagger';

export class CreateBlockDto {
  @ApiProperty({
    description: 'Название блока',
    example: 'Основной блок',
    required: true,
  })
  name: string;

  @ApiProperty({
    description: 'Индекс позиции блока',
    example: 1,
    minimum: 0,
    required: true,
  })
  index: number;

  @ApiProperty({
    description: 'Документ, к которому относится блок',
    type: Object,
    required: true,
  })
  document: {
    id: number;
  };
}
