// import plugin - https://github.com/benmosher/eslint-plugin-import/

'use strict';

module.exports = {
    rules: {
        // Ensure imports point to a file/module that can be resolved
        // Issues:
        // - https://github.com/Intellicode/eslint-plugin-react-native/issues/32
        'import/no-unresolved': 'error',
    },
};
