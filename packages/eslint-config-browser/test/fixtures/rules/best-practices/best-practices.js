// Move to browser
// `no-alert` - disallow the use of alert, confirm, and prompt
// ---------------------------------------------------------------------
// Disencouraged
alert('Hello');
confirm('Hello');
prompt('What\'s your name?');

// `no-global-assign` - disallow assignments to native objects or read-only global variables
// ---------------------------------------------------------------------
// Bad
window = {};

