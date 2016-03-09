var React = require("react");
var Radium = require("radium");
var template = require("./wrapper.rt");
var style = require("./wrapper.scss");

module.exports = Radium(React.createClass({
    displayName: "Wrapper",
    render: template,
    style: style
}));