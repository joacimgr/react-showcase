/** @jsx React.DOM */
'use strict';

var React = require('react');
class Hello extends React.Component {
    render() {
        return (<div><h1>Hello World</h1>
            <p>I am the greatest Wizard!</p>
        </div>
                )
    }
}

module.exports = Hello;