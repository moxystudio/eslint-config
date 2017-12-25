/* eslint no-unused-vars:2 */

import React, { Component } from 'react';

// `jsx-uses-react` - prevent React to be incorrectly marked as unused
// ---------------------------------------------------------------------
// Should not give an error
(function () {
    class MyComponent extends Component {
        render() {
            return <div>foo</div>;
        }
    }

    console.log(MyComponent);
})();

// `jsx-uses-vars` - prevent variables used in JSX to be incorrectly marked as unused
// ---------------------------------------------------------------------
// Should not give an error
(function () {
    const isLoading = true;
    const component = <Component isLoading={ isLoading } />;

    console.log(isLoading, component);
})();
