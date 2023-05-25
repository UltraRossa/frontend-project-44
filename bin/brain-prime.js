#!/usr/bin/env node
import runGame from '../src/index.js';
import genIsPrimeGameData from '../src/games/isPrime-game.js';

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', genIsPrimeGameData);
