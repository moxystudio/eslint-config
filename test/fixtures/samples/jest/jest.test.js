// `no-disabled-tests` - Disallow disabled tests
// ---------------------------------------------------------------------
// Bad
it.skip('no-disabled-tests bad', () => {});
// Good
it('no-disabled-tests good', () => {});

// `no-focused-tests` - Disallow focused tests
// ---------------------------------------------------------------------
// Bad
it.only('no-focused-tests bad', () => {});
// Good
it('no-focused-tests good', () => {});

// `no-identical-title` - Disallow identical titles
// ---------------------------------------------------------------------
// Bad
it('no-identical-title bad', () => {});
it('no-identical-title bad', () => {});
// Good
it('no-identical-title good', () => {});
it('no-identical-title good 2', () => {});

// `prefer-to-have-length` - Prefer toHaveLength() over toBe()
// ---------------------------------------------------------------------
// Bad
it('prefer-to-have-length bad', () => {
    expect([].length).toBe(0);
});
// Good
it('prefer-to-have-length good', () => {
    expect([].length).toHaveLength(0);
});

// `valid-expect` - Enforce valid expect() usage
// ---------------------------------------------------------------------
// Bad
it('valid-expect bad', () => {
    expect('something');
});
// Good
it('valid-expect good', () => {
    expect('something').not.toEqual('else');
});

// `global-require` - Allow scoped require
// ---------------------------------------------------------------------
it('global-require', () => {
    require('foo');
});
