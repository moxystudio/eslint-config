import React from 'react';

import styles from './test.css';

// No unused or undefenmied css classes
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
