'use strict';

const path = require('path');
const eslint = require('eslint');
const glob = require('glob');

const packagePaths = glob.sync(`${__dirname}/packages/eslint-config-*`);

packagePaths.forEach((packagePath) => {
    const cli = new eslint.CLIEngine({
        useEslintrc: true,
        cwd: packagePath,
    });

    const report = cli.executeOnFiles(['test/fixtures/**/*.{js,jsx,vue}']);
    const results = report.results;

    results.forEach((object) => {
        const filePath = object.filePath;
        const relativeFilePath = path.relative(__dirname, filePath).replace(/\\/g, '/');

        it(`should pass on ${relativeFilePath}`, () => {
            const result = object.messages
                .map((message) => ({ rule: message.ruleId, severity: message.severity, line: message.line, column: message.column }))
                .sort((warn1, warn2) => warn1.line - warn2.line || warn1.column - warn2.column || warn1.rule.localeCompare(warn2.rule));

            expect(result).toMatchSnapshot();
        });
    });
});
