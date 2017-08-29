/* eslint quote-props:0 */

'use strict';

const eslint = require('eslint');

it('should pass on all files', () => {
    const cli = new eslint.CLIEngine({
        useEslintrc: true,
    });

    const report = cli.executeOnFiles([`${__dirname}/fixtures/**/*.js`]);
    const results = report.results;

    results.forEach((object) => {
        const filePath = object.filePath;

        // Build actual
        const actual = object.messages
        .map((message) => ({ rule: message.ruleId, severity: message.severity, line: message.line, column: message.column }))
        .sort((warn1, warn2) => warn1.line - warn2.line || warn1.column - warn2.column || warn1.rule.localeCompare(warn2.rule));

        // Uncomment line below to rewrite all expected json results
        // require('fs').writeFileSync(filePath.replace(/\.js$/, '.json'), JSON.stringify(actual, null, 4));

        // Read expected
        const expected = require(filePath.replace(/\.js$/, '.json'));  // eslint-disable-line global-require

        try {
            expect(actual).toEqual(expected);
        } catch (err) {
            console.log(`Tests failed at ${filePath}`);
            console.log(`You might need to edit ${filePath.replace(/\.js$/, '.json')}`);
            throw err;
        }
    });
});
