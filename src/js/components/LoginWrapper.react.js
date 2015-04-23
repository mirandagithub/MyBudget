

var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');

var AppWrapper = require('./AppWrapper.react.js');

var LoginWrapper = React.createClass({
  mixins: [ParseReact.Mixin],

  getInitialState: function() {
    return {
      error: null,
      signup: false
    };
  },

  observe: function() {
    return {
      user: ParseReact.currentUser
    };
  },

  render: function() {
    return (
      <div>Hello</div>
    );
  }
});

module.exports = LoginWrapper;
