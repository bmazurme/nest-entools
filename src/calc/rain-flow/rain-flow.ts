import getA from '../get-a';
import getAreaSumm from '../get-area-summ';
import getFlow from '../get-flow';
import getIndex from '../get-index';
import getN from '../get-n';
import getPa from '../get-pa';
import getTimePipeOrTray from '../get-time-pipe-or-tray';
import getTimeSumm from '../get-time-summ';
import getZMid from '../get-z-mid';
import getZ from '../get-z';
import { places } from '../data/places';
import { CONDITIONS } from '../data/conditions';

import { TypeRainFlow } from './rain-flow.type';

/**
 * Расчет расхода поверхностных сточных вод (Qr) методом предельных интенсивностей
 * производится по формулам рекомендаций 2015 НИИ ВОДГЕО к СП 32.13330.2018, пункт «6.2.1».
 */
export default function getRainFlow({
  place,
  condition,
  area,
  intensity,
  lengthPipe,
  lengthTray,
  velocityPipe,
  velocityTray,
  timeInit,
}: TypeRainFlow) {
  const { gamma, mr } = places[place];
  const index = getIndex(intensity);
  const p = CONDITIONS[condition][index];
  const n = getN(p, places[place].n, places[place].n1);
  const pa = getPa(p, mr);
  const a = getA(intensity, n, pa, gamma);
  const z = getZ(a, n);
  const timePipe = getTimePipeOrTray('pipe', lengthPipe, velocityPipe);
  const timeTray = getTimePipeOrTray('tray', lengthTray, velocityTray);
  const timeSumm = getTimeSumm(timeInit, timePipe, timeTray);
  const areaSumm = getAreaSumm(area);
  const zMid = getZMid(area, areaSumm, z);
  const flow = getFlow(zMid, a, areaSumm, timeSumm, n);

  return {
    a,
    pa,
    z,
    zMid,
    n,
    p,
    mr,
    gamma,
    areaSumm,
    flow,
    place,
    condition,
    intensity,
    lengthPipe,
    lengthTray,
    velocityPipe,
    velocityTray,
    time: {
      timeSumm,
      timeInit,
      timePipe,
      timeTray,
    },
    area,
  };
}
