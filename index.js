const logger = require('./src/logger.js').getLogger();

logger.info('index.js - Starting...');

// Initiation
require('./src/init')

// validate configs (using joi)
require('./config')



