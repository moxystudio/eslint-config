import React from 'react';

// Should ignore react/jsx-no-bind and react/prop-types
const MyComponent = ({ message }) => <div onClick={ () => {} }>{ message }</div>;

export default MyComponent;
