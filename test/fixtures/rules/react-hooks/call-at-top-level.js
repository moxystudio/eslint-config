import { useState } from 'react';

// `react-hooks/rules-of-hooks` - Hooks must always be called at the top level
// --------------------------------------------------------------------
// Good
(function() {
    const Foo = () => {
        useState('foo');

        return null;
    };
})();
// Bad
(function() {
    const Foo = () => {
        if (true) {
            useState('foo');
        }

        return null;
    };
})();
// Also bad
(function() {
    const Foo = () => {
        for (;;) {
            useState('foo');
        }

        return null;
    };
})();
// Also bad
(function() {
    const Foo = () => {
        const fn = () => {
            useState('foo');
        };

        return null;
    };
})();
