// `forbid-foreign-prop-types` - forbid foreign propTypes
// ---------------------------------------------------------------------
// Bad
import Component1 from './Component1';

const { propTypes } = Component1;

// Good
import Component2, { propTypes as Component2PropTypes } from './Component2';
