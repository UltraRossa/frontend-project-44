#!/usr/bin/env node
import manage from '../src/games/index.js';
import isEvenGame from '../src/games/isEven-game.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
manage(description, isEvenGame);
