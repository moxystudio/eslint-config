import { useEffect } from 'react';

// `react-hooks/exhaustive-deps` - Warns about effects not having their dependencies declared
// --------------------------------------------------------------------
// Good
(function() {
    const Foo = ({ value }) => {
        useEffect(() => {
            const plusOne = value + 1;
        }, [value]);

        return null;
    };
})();
// Bad
(function() {
    const Foo = ({ value }) => {
        useEffect(() => {
            const plusOne = value + 1;
        }, []);

        return null;
    };
})();
