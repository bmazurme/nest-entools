export type TypeRainArea = {
  roof: number;
  stone: number;
  lawns: number;
  tracks: number;
  ground: number;
  pavements: number;
  cobblestone: number;
};

export type TypeRainFlow = {
  place: number;
  condition: number;
  area: TypeRainArea;
  intensity: number;
  lengthPipe: number;
  lengthTray: number;
  velocityPipe: number;
  velocityTray: number;
  timeInit: number;
};
