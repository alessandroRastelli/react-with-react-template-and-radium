var React = require("react");
var Radium = require("radium");
var template = require("./app.rt");

module.exports = Radium(React.createClass({
    displayName: "App",
    render: template
}));