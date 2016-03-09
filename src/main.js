"use strict";

var ReactDOM = require('react-dom');
var React = require('react');

var App = require('./app/app');

ReactDOM.render(
    React.createElement(App),
    document.getElementById('app')
);