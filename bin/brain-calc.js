#!/usr/bin/env node
import runGame from '../src/index.js';
import genCalcGameData from '../src/games/calc-game.js';

runGame('What is the result of the expression?', genCalcGameData);
