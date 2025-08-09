import { PartialType } from '@nestjs/swagger';

import { CreateRainRunoffDto } from './create-rain-runoff.dto';

export class UpdateRainRunoffDto extends PartialType(CreateRainRunoffDto) {
  id: number;
  roof: number;
  pavements: number;
  tracks: number;
  ground: number;
  cobblestone: number;
  stone: number;
  lawns: number;
  place: number;
  intensity: number;
  condition: number;
  timeInit: number;
  lengthPipe: number;
  lengthTray: number;
  velocityPipe: number;
  velocityTray: number;
  flow: number;
}
