// undefined.js
import React from 'react';

import styles from './test.css';

// `css-modules/no-undef-class` - Alerts whenever a CSS class is not being used
// ---------------------------------------------------------------------
// Bad
(function () {
    const div = <div className={ styles.undefClass } />;
})();
// Good
(function () {
    const div = <div className={ [styles.usedClass, styles.unusedClass] } />;
})();
