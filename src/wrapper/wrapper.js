var React = require("react");
var Radium = require("radium");
var template = require("./wrapper.rt");
var style = require("./wrapper.radium");

module.exports = Radium(React.createClass({
    displayName: "Wrapper",
    render: template,
    style: style({
        myPadding: 25
    })
}));