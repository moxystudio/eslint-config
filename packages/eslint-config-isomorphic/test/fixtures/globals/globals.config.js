/* No errors should be cause due to using window, process */

import parser from 'accept-language-parser';
import addVary from './util/vary';

// Require should be possible in files with name like *.config.js
const path = require('path');

console.log(path.resolve('./'));

const isDebug = process.env.DEBUG;

const createPolicy = (options) => {
    options = {
        loose: true,
        ...options,
    };

    return {
        match(locales, { req, res }) {
            const acceptLanguage = typeof window !== 'undefined' ? navigator.languages.join(',') : req.headers['accept-language'];
            const languages = locales.map((locale) => locale.id);

            const localeId = parser.pick(languages, acceptLanguage, options);

            isDebug && console.log('LocaleID: ', localeId);

            if (!localeId) {
                return null;
            }

            if (typeof window === 'undefined' && res) {
                addVary(res, 'Accept-Language');
            }

            return localeId;
        },

        watch(callback) {
            const handleLanguageChange = () => callback(navigator.language);

            window.addEventListener('languagechange', handleLanguageChange);

            return () => {
                window.removeEventListener('languagechange', handleLanguageChange);
            };
        },
    };
};

export default createPolicy;
