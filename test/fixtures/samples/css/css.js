// Made up sample.. not genuine

import React from 'react';
import styles from './test.css';

// Bad
(function () {
    const div = <div className="exampleClass" />;
})();

// Bad
(function () {
    const div = <div className={ 'exampleClass' } />;
})();

// Good
(function () {
    const div = <div className={ styles.exampleClass } />;
})();

// Good
(function () {
    const div = <div className={ `${styles.exampleClass}` } />;
})();
