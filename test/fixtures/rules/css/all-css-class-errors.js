import React from 'react';
// no-unused-class
import styles from './test.css';
// Existing css class
(function () {
    const div = <div className={ styles.usedClass } />;
})();

// no-undef-class
(function () {
    const div = <div className={ styles.undefClass } />;
})();
// Existing css class
(function () {
    const div = <div className={ `${styles.usedClass}` } />;
})();

// no-undef-class
(function () {
    const div = <div className={ `${styles.undefClass}` } />;
})();
// Existing css class
(function () {
    const div = <div className={ `${styles.usedClass}` } />;
})();

// no-undef-class not detected
(function () {
    const div = <div className={ 'undefClass' } />;
})();
// no-undef-class not detected
(function () {
    const div = <div className="undefClass" />;
})();
// no-unused-class not detected
(function () {
    const div = <div className={ 'unusedClass' } />;
})();
// no-unused-class not detected
(function () {
    const div = <div className="unusedClass" />;
})();
