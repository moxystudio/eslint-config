'use strict';

const path = require('path');
const eslint = require('eslint');

const cli = new eslint.CLIEngine({
    useEslintrc: true,
});

const report = cli.executeOnFiles([`${__dirname}/fixtures/**/*.{js,jsx}`]);
const results = report.results;

results.forEach((object) => {
    const filePath = object.filePath;

    it(`should pass on ${path.relative(__dirname, filePath)}`, () => {
        const result = object.messages
        .map((message) => ({ rule: message.ruleId, severity: message.severity, line: message.line, column: message.column }))
        .sort((warn1, warn2) => warn1.line - warn2.line || warn1.column - warn2.column || warn1.rule.localeCompare(warn2.rule));

        expect(result).toMatchSnapshot();
    });
});
