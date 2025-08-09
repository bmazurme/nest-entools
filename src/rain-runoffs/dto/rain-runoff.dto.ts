import { TypeRainArea } from '../../calc/rain-flow/rain-flow.type';
import { UpdateRainRunoffDto } from './update-rain-runoff.dto';

export class RainRunoffDto {
  constructor({
    id,
    roof,
    pavements,
    tracks,
    ground,
    cobblestone,
    stone,
    lawns,
    place,
    intensity,
    condition,
    timeInit,
    lengthPipe,
    lengthTray,
    velocityPipe,
    velocityTray,
    flow,
  }: UpdateRainRunoffDto) {
    this.id = id;
    this.area = {
      roof,
      pavements,
      tracks,
      ground,
      cobblestone,
      stone,
      lawns,
    };
    this.place = place;
    this.intensity = intensity;
    this.condition = condition;
    this.timeInit = timeInit;
    this.lengthPipe = lengthPipe;
    this.lengthTray = lengthTray;
    this.velocityPipe = velocityPipe;
    this.velocityTray = velocityTray;
    this.flow = flow;
  }

  id: number;
  // roof: number;
  // pavements: number;
  // tracks: number;
  // ground: number;
  // cobblestone: number;
  // stone: number;
  // lawns: number;
  area: TypeRainArea;
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
