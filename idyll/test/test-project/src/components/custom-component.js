const React = require('react');
const IdyllComponent = require('idyll-component');

class CustomComponent extends IdyllComponent {
  render() {
    return (
      <div {...this.props}>
        This is a custom component
      </div>
    );
  }
}

module.exports = CustomComponent;

module.exports.IndexedComponent = class extends IdyllComponent {
  render() {
    return (
      <div {...this.props}>
        This is another custom component
      </div>
    );
  }
};