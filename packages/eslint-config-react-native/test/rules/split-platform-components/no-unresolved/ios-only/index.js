// `no-unresolved` - Ensure imports point to a file/module that can be resolved
// --------------------------------------------------------------------
// Bad: should fail when only `.ios.js` module exists
import MyComponent from './MyComponent';
