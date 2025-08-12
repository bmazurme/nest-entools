import { PartialType } from '@nestjs/swagger';
import { CreateRainRoofDto } from './create-rain-roof.dto';

export class UpdateRainRoofDto extends PartialType(CreateRainRoofDto) {}
