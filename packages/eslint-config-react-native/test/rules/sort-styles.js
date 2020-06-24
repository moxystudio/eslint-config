import { StyleSheet } from 'react-native';

// `sort-styles` - Require StyleSheet keys to be sorted
// --------------------------------------------------------------------
// Bad
{
    const styles = StyleSheet.create({
        a: {},
        c: {},
        b: {},
    });
}
// Also bad
{
    const styles = StyleSheet.create({
        a: {
            b: 'foo',
            a: 'foo',
            c: 'foo',
        },
        c: {},
        b: {},
    });
}
// Good: sorted alphabetically
{
    const styles = StyleSheet.create({
        a: {},
        b: {},
        c: {},
    });
}
// Also good
{
    const styles = StyleSheet.create({
        a: {
            a: 'foo',
            b: 'foo',
            c: 'foo',
        },
        b: {},
        c: {},
    });
}
