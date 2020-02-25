import { useState } from 'react';

// `react-hooks/rules-of-hooks` - Custom hook names must be prefixed with "use"
// --------------------------------------------------------------------
// Good
(function () {
    const useHook = () => {
        useState('foo');
    };

    const Foo = () => {
        useHook();

        return null;
    };
})();
// Bad
(function () {
    const hook = () => {
        useState('foo');
    };

    const Foo = () => {
        hook();

        return null;
    };
})();
