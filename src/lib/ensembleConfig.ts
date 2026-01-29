// src/lib/ensembleConfig.ts

export const SCENES = [
  {
    id: 'scene-1',
    title: 'The Vision',
    members: ['secretary-id', 'deputy-id'], // The Crown
    layout: 'center-stage', // Layout logic
  },
  {
    id: 'scene-2',
    title: 'The Architects',
    members: ['head-tech', 'head-creative'], // The Orbit
    layout: 'dual-focus',
  },
  {
    id: 'scene-3',
    title: 'The Voice',
    members: ['head-pr', 'head-media'],
    layout: 'dual-focus',
  },
  {
    id: 'scene-4',
    title: 'The Force',
    members: ['core-1', 'core-2', 'core-3', '...'], // The Cloud
    layout: 'ensemble-grid',
  }
];