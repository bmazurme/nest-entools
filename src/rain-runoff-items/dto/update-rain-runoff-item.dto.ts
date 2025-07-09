import { PartialType } from '@nestjs/swagger';
import { CreateRainRunoffItemDto } from './create-rain-runoff-item.dto';

export class UpdateRainRunoffItemDto extends PartialType(CreateRainRunoffItemDto) {}
