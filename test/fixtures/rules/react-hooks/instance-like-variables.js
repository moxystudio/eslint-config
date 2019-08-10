import { useEffect } from 'react';

// `react-hooks/exhaustive-deps` - Warns about preservation of most recent value
// --------------------------------------------------------------------
(function() {
    const Foo = ({ value }) => {
        let currentValue;

        useEffect(() => {
            currentValue = value;
        }, [value]);

        return null;
    };
})();
