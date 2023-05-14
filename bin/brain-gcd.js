#!/usr/bin/env node
import manage from '../src/games/index.js';
import gcdGame from '../src/games/gcd-game.js';

const description = 'Find the greatest common divisor of given numbers.';
manage(description, gcdGame);
