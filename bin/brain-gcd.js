#!/usr/bin/env node
import runGame from '../src/index.js';
import genGcdGameData from '../src/games/gcd-game.js';

runGame('Find the greatest common divisor of given numbers.', genGcdGameData);
