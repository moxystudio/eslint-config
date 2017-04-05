/* eslint quote-props:0 */

'use strict';

const CLIEngine = require('eslint').CLIEngine;

const cli = new CLIEngine({
    useEslintrc: true,
});

function runStylelintOnGoodFiles() {
    const report = cli.executeOnFiles([`${__dirname}/**/good-*.js`]);
    const results = report.results;

    results.map((object) => {
        const messages = object.messages
        .map((message) => ({ rule: message.ruleId, severity: message.severity, line: message.line, column: message.column }));

        require('fs').writeFileSync(object.filePath.replace(/\.js$/, '.result.json'), JSON.stringify(messages, null, 2));

        return messages;
    });
}

function runStylelintOnBadFiles() {
    const report = cli.executeOnFiles([`${__dirname}/**/bad-*.js`]);
    const results = report.results;

    results.map((object) => {
        const messages = object.messages
        .map((message) => ({ rule: message.ruleId, severity: message.severity, line: message.line, column: message.column }));

        require('fs').writeFileSync(object.filePath.replace(/\.js$/, '.result.json'), JSON.stringify(messages, null, 2));

        return messages;
    });
}

// ----------------------------------------------------------

it('should pass on good files', () => runStylelintOnGoodFiles());

it('should fail on bad files', () => runStylelintOnBadFiles());
