import { useEffect, useState, useCallback, useRef } from 'react';

// `react-hooks/rules-of-hooks` - Hooks must always be called at the top level
// --------------------------------------------------------------------
// Bad
{
    const Foo = ({ foo }) => {
        if (foo) {
            useState('foo');
        }

        return null;
    };
}
// Also bad
{
    const Foo = () => {
        for (let x = 0; x < 5; x += 1) {
            useState('foo');
        }

        return null;
    };
}
// Still bad
{
    const Foo = () => {
        const fn = () => {
            useState('foo');
        };

        return null;
    };
}
// Good
{
    const Foo = () => {
        useState('foo');

        return null;
    };
}

// `react-hooks/exhaustive-deps` - Warns about effects not having their dependencies declared
// --------------------------------------------------------------------
// Bad
{
    const Foo = ({ value }) => {
        useEffect(() => {
            const plusOne = value + 1;
        }, []);

        return null;
    };
}
// Good
{
    const Foo = ({ value }) => {
        useEffect(() => {
            const plusOne = value + 1;
        }, [value]);

        return null;
    };
}

// `react-hooks/rules-of-hooks` - Custom hook names must be prefixed with "use"
// --------------------------------------------------------------------
// Bad
{
    const hook = () => {
        useState('foo');
    };

    const Foo = () => {
        hook();

        return null;
    };
}
// Good
{
    const useHook = () => {
        useState('foo');
    };

    const Foo = () => {
        useHook();

        return null;
    };
}

// `react-hooks/exhaustive-deps` - Warns about function references changing every render
// --------------------------------------------------------------------
// Not advisable
{
    const Foo = () => {
        const fn = () => {};

        useEffect(() => {
            fn();
        }, [fn]);

        return null;
    };
}
// Good
{
    const Foo = () => {
        const fn = useCallback(() => {}, []);

        useEffect(() => {
            fn();
        }, [fn]);

        return null;
    };
}
// `react-hooks/exhaustive-deps` - Warns about preservation of most recent value
// --------------------------------------------------------------------
// Not advisable
{
    const Foo = ({ value }) => {
        let currentValue;

        useEffect(() => {
            currentValue = value;
        }, [value]);

        return null;
    };
}
// Good
{
    const Foo = ({ value }) => {
        const currentValueRef = useRef(value);

        useEffect(() => {
            currentValueRef.current = value;
        }, [value]);

        return null;
    };
}
