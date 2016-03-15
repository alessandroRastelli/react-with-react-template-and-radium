var React = require("react");
var Radium = require("radium");
var template = require("./counter.rt");
var style = require("./counter.radium");

module.exports = Radium(React.createClass({
    displayName: "Counter",
    render: template,
    style: style(),

    propTypes: {
        start: React.PropTypes.string.isRequired,
        step: React.PropTypes.string
    },

    getInitialState: function () {
        return {
            count: parseInt(this.props.start),
            step: parseInt(this.props.step)
        };
    },

    increment: function (event) {
        this.setState({"count": this.state.count + this.state.step});
        event.preventDefault();
    }
}));