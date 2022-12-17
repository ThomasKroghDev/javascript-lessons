'use strict';
import { halberd, morningstar, shortsword } from './weapons.js';
const paragraph = document.getElementById('information');

const partyMembers = [];

const fighter = {
  role: 'fighter',
  characterName: 'Jhon',
  characterTitle: 'the lionheart',
  rightHand: shortsword,
  leftHand: '',
  neckLine: 'symbol of protection',
  chest: 'snakescale',
  head: 'light helm',
  legs: 'hide pants',
  feet: 'iron boots',
  inventory: ['rations', 'half empty health potion', 'turn undead scroll'],
  healthPoints: 200,
  stamina: 75,
  isDead: false,
};

const cleric = {
  role: 'cleric',
  characterName: 'victor',
  characterTitle: 'the faithful',
  rightHand: morningstar,
  leftHand: 'the book of light',
  neckLine: '',
  chest: 'cloth robes',
  head: '',
  legs: 'hide pants',
  feet: 'sandals',
  inventory: ['rations', 'bandages', 'map', 'symbol of faith'],
  healthPoints: 175,
  stamina: 27,
  isDead: false,
};
const knight = {
  role: 'knight',
  characterName: 'samson',
  characterTitle: 'of the skylands',
  rightHand: halberd,
  leftHand: halberd,
  neckLine: 'symbol of faith',
  chest: 'plate',
  head: 'great helm',
  legs: 'chausses',
  feet: 'sabaton',
  inventory: ['rations', 'house crest', 'dagger', 'symbol of faith', 'journal'],
  healthPoints: 230,
  stamina: 145,
  isDead: false,
  calcAttack: function () {
    const baseDamage = damageGen(this.healthPoints);
    const weaponDamage = Math.ceil(
      Math.random() * (this.stamina * this.rightHand.damage * 0.1) + 1
    );
    this.attackPower = weaponDamage + baseDamage;
    return this.attackPower;
  },
};
partyMembers.push(fighter, cleric, knight);
const role = partyMembers[0].role;

// switch (role) {
//   case 'cleric': {
//     console.log('cleric took damage');
//     break;
//   }
//   case 'knight': {
//     console.log('knight took damage');
//     break;
//   }
//   case 'fighter': {
//     console.log('fighter took damage');
//     break;
//   }
//   default: {
//     console.log('every one took damage.');
//     break;
//   }
// }
function reduceHealth(health, damage, name) {
  const lefterOverHealth = health - damage;
  if (lefterOverHealth > 0) {
    console.log(
      `your ${name} took ${damage} points of damage and now has ${lefterOverHealth} points of health left`
    );
  } else {
    console.log(
      `your ${name} took ${damage} points of damage and now has died`
    );
  }
}
function damageGen(healthPoints) {
  return Math.ceil(Math.random() * (healthPoints * 0.5) + 1);
}
function fatigueGen(stamina) {
  return Math.ceil(Math.random() * (stamina * 0.5) + 1);
}
const damage = damageGen(knight.healthPoints);
const fatigue = fatigueGen(knight.stamina);

function bigAttack(health, stamina, damage, fatigue) {
  const lefterOverHealth = health - damage;
  const lefterOverStamina = stamina - fatigue;
  return { lefterOverHealth, lefterOverStamina };
}
const getLastPartyMember = (party) => party[party.length - 1];
const items = [1, -652, 2, 20];

const temps = [1, 94, 65, 23, 'error', 9, 37, 100];
function calcTempDiff(temperatures, temperatures2) {
  const newtemps = temperatures.concat(temperatures2);
  let max = newtemps[0];
  for (let index = 0; index < newtemps.length; index++) {
    if (typeof newtemps[index] !== 'number') continue;
    if (newtemps[index] > max) {
      max = newtemps[index];
    }
  }

  let min = newtemps[0];
  for (let index = 0; index < newtemps.length; index++) {
    if (typeof newtemps[index] !== 'number') continue;
    if (newtemps[index] < min) {
      min = newtemps[index];
    }
  }
  return max - min;
}
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // value: +prompt('Degrees celsius:'),
    value: 10,
  };
  const kelvin = measurement.value + 273;

  return kelvin;
};

const forecastedMaximumTemps = [17, 21, 23];

function printForecast(arr) {
  let output = '';
  for (let index = 0; index < arr.length; index++) {
    output = output + `... ${arr[index]}°C in ${index + 1} days ... `;
  }

  console.log(output);
}
printForecast(forecastedMaximumTemps);
printForecast([12, 5, -5, 0, 4]);
