import React from 'react';

import styles from './test.css';

// Existing css class
(function () {
    const div = <div className={ styles.usedClass } />;
})();
(function () {
    const div = <div className={ styles.unusedClass } />;
})();

(function () {
    const div = <div className={ `${styles.usedClass}` } />;
})();
(function () {
    const div = <div className={ `${styles.unusedClass}` } />;
})();

// no-undef-class
(function () {
    const div = <div className={ styles.undefClass } />;
})();

(function () {
    const div = <div className={ `${styles.undefClass}` } />;
})();
