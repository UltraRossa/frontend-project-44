#!/usr/bin/env node
import manage from '../src/games/index.js';
import progressionGame from '../src/games/progression-game.js';

const description = 'What number is missing in the progression?';
manage(description, progressionGame);
