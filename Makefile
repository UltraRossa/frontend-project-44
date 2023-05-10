install:
	npm ci

brain-games:
	node games/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

brain-even:
	node games/bin/brain-even.js

brain-calc:
	node games/bin/brain-calc.js

brain-bcd:
	node games/bin/brain-bcd.js

brain-bcd:
	node games/bin/brain-progression.js


