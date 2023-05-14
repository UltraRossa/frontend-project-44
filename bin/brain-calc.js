#!/usr/bin/env node
import manage from '../src/games/index.js';
import calcGame from '../src/games/calc-game.js';

const description = 'What is the result of the expression?';
manage(description, calcGame);
