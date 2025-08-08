import { PartialType } from '@nestjs/swagger';

import { CreateRainRunoffDto } from './create-rain-runoff.dto';

export class UpdateRainRunoffDto extends PartialType(CreateRainRunoffDto) {}
