const userCreate = require('./create-user');
const repositoryCreate = require('./create-repository');
const contributionCreate = require('./create-contribution');

console.log('>>> Executig DB create processes.');
(async () => {
    console.log('>>> Executing db create users table.');
    await userCreate.exec()
        .then((msg) => {
            console.log(`>>> ${msg}`);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log('>>> Executing db create repository table.');
    await repositoryCreate.exec()
        .then((msg) => {
            console.log(`>>> ${msg}`);
        })
        .catch((error) => {
            console.log(error);
        });

    console.log('>>> Executing db create contribution table.');
    await contributionCreate.exec()
        .then((msg) => {
            console.log(`>>> ${msg}`);
        })
        .catch((error) => {
            console.log(error);
        });
})();


