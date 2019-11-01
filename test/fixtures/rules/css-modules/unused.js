import React from 'react';
import badStyles from './test.css';
import goodStyles from './test-copy.css';

// `css-modules/no-unused-class` - alerts whenever a CSS class is not being used
// ---------------------------------------------------------------------
// Bad
(function () {
    const div = <div className={ badStyles.foo } />;
})();
// Good
// Good
(function () {
    const div = <div className={ `${goodStyles.foo} ${goodStyles.bar}` } />;
})();
