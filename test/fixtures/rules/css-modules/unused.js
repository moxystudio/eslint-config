// unused.js
import React from 'react';

import badStyles from './test.css';
// eslint-disable-next-line no-duplicate-imports
import goodStyles from './test.css';

// `css-modules/no-unused-class` - Alerts whenever a CSS class is not being used
// ---------------------------------------------------------------------
// Bad
(function () {
    const div = <div className={ badStyles.usedClass } />;
})();
// Good
(function () {
    const div = <div className={ [goodStyles.usedClass, goodStyles.unusedClass] } />;
})();
