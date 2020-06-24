// `no-unresolved` - Ensure imports point to a file/module that can be resolved
// --------------------------------------------------------------------
// Bad: should fail when neither `.ios.js` and `.android.js` modules exist
import MyComponent from './MyComponent';
