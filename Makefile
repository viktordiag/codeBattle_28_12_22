install:
	npm ci

brain-games2:
	node bin/brain-games.js

publish:
	npm publish --dry-run
