import React from 'react';

import styles from './test.css';

(function () {
    const div = <div className={ styles.usedClass } />;
})();

(function () {
    const div = <div className={ `${styles.usedClass}` } />;
})();
