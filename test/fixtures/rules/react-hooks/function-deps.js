import { useEffect } from 'react';

// `react-hooks/exhaustive-deps` - Warns about function references changing every render
// --------------------------------------------------------------------
(function() {
    const Foo = () => {
        const fn = () => {};

        useEffect(() => {
            fn();
        }, [fn]);

        return null;
    };
})();
