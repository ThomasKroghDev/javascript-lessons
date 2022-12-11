const shortsword = {
  name: 'short sword',
  type: 'light',
  costToSwing: 9,
  value: 95,
  weight: 12,
  attributes: [],
};
const morningstar = {
  name: 'morning star',
  type: 'medium',
  costToSwing: 15,
  value: 125,
  weight: 20,
  attributes: ['holy'],
};
const halberd = {
  name: 'halberd',
  type: 'medium-heavy',
  costToSwing: 15,
  value: 75,
  weight: 22,
  attributes: ['length-advantage', { oneHandSwingCost: 30 }],
  damage: 40,
};
export { halberd, morningstar, shortsword };
