#!/usr/bin/env node
import runGame from '../src/index.js';
import genIsEvenGameData from '../src/games/isEven-game.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', genIsEvenGameData);
