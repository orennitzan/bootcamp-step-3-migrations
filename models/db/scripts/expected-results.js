const createUserTableExpectedResults = [
    { command: 'SET', rowCount: null },
    { command: 'DROP', rowCount: null },
    { command: 'CREATE', rowCount: null },
    { command: 'INSERT', rowCount: 1 },
    { command: 'INSERT', rowCount: 1 },
    { command: 'INSERT', rowCount: 1 },
    { command: 'INSERT', rowCount: 1 }
];

const createRepositoryTableExpectedResults = [
    { command: 'SET', rowCount: null },
    { command: 'DROP', rowCount: null },
    { command: 'CREATE', rowCount: null },
    { command: 'INSERT', rowCount: 1 },
    { command: 'INSERT', rowCount: 1 },
    { command: 'INSERT', rowCount: 1 },
    { command: 'INSERT', rowCount: 1 }
];

const createContributionTableExpectedResults = [
    { command: 'SET', rowCount: null },
    { command: 'DROP', rowCount: null },
    { command: 'CREATE', rowCount: null }
];

module.exports = {
    createUserTableExpectedResults,
    createRepositoryTableExpectedResults,
    createContributionTableExpectedResults

}
