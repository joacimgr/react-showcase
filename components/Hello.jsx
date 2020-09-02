/** @jsx React.DOM */
'use strict';

var React = require('react');
class Hello extends React.Component {
    render() {
        return (<div><h1>Hello World</h1>
            <p>I am the greatest Wizard! (of all)</p>

            <div style="height: 200px; margin: 0 auto;">
                <h1>I am in the middle</h1>
            </div>
        </div>
                )
    }
}

module.exports = Hello;