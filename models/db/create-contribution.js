const { deepStrictEqual } = require('assert');
const { Client } = require('pg');
const { readFileSync } = require('fs');
const path = require('path');
const { config } = require('../../config');
const { createContributionTableExpectedResults } = require('./scripts/expected-results');

const sqlPath = path.join(__dirname, 'scripts', 'create-contribution.sql');

const getQuery = (filePath = sqlPath) => readFileSync(filePath, 'utf8');
async function exec() {
    const query = getQuery();
    const client = new Client(config.POSTGRES_CONFIG);
    await client.connect();
    try {
        const results = await client.query(query);
        await client.end();
        const currentResults = results.map(item => ({
            command: item.command,
            rowCount: item.rowCount
        }));
        
        deepStrictEqual(currentResults, createContributionTableExpectedResults, 'Error: Execution results are are not equal to expected results!!!');
        return Promise.resolve(`${currentResults.length} commands processed successfully.`);
    }
    catch (error) {
        return Promise.resolve(error);
    }
};

module.exports = {
    exec
};
