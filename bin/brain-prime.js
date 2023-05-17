#!/usr/bin/env node
import manage from '../src/index.js';
import isPrimeGame from '../src/games/isPrime-game.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
manage(description, isPrimeGame);
