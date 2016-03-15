var React = require("react");
var Radium = require("radium");
var template = require("./calculator.rt");
var style = require("./calculator.radium");

module.exports = Radium(React.createClass({
    displayName: "Calculator",
    render: template,
    style: style(),

    getInitialState: function () {
        return {
            a: 0,
            b: 0,
            result: 0
        };
    },

    refresh: function (key, event) {
        var a = this.state.a, b = this.state.b;
        var value = event.target.value;

        if (key === 'a') a = value;
        if (key === 'b') b = value;

        var result = a + b;

        this.setState({a, b, result});
    }

}));