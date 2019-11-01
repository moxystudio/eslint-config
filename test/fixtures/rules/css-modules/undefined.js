import React from 'react';
import styles from './test.css';

// `css-modules/no-undef-class` - alerts when using a CSS class that is not defined
// ---------------------------------------------------------------------
// Bad
(function () {
    const div = <div className={ styles.undef } />;
})();
// Good
(function () {
    const div = <div className={ `${styles.foo} ${styles.bar}` } />;
})();
