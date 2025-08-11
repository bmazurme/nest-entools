import { TypeRainArea } from './rain-flow/rain-flow.type';

/**
 * расчетная площадь стока, га
 */
export default function getAreaSumm(area: TypeRainArea) {
  const {
    roof = 0,
    pavements = 0,
    tracks = 0,
    ground = 0,
    cobblestone = 0,
    stone = 0,
    lawns = 0,
  } = area;

  return roof + pavements + tracks + ground + cobblestone + stone + lawns;
}
