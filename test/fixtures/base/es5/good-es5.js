var React = require('react');

var Component = React.createClass({
    render: function() {
        return [1, 2, 3].map(function(item) {

        });
    },

    propTypes: {
        name: React.PropTypes.string.isRequired,
    },
});
