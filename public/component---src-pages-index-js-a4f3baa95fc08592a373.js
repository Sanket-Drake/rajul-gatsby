webpackJsonp([35783957827783],{226:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var u=a(1),s=n(u),c=a(2),f=n(c),i=a(56),d=n(i),p=function(e){function t(){return l(this,t),r(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data,t=e.allMarkdownRemark.edges;return s.default.createElement("section",{className:"section"},s.default.createElement("div",{className:"container"},s.default.createElement("div",{className:"content"},s.default.createElement("h1",{className:"has-text-weight-bold is-size-2"},"Latest Stories")),t.map(function(e){var t=e.node;return s.default.createElement("div",{className:"content",style:{border:"1px solid #eaecee",padding:"2em 4em"},key:t.id},s.default.createElement("p",null,s.default.createElement(d.default,{className:"has-text-primary",to:t.fields.slug},t.frontmatter.title),s.default.createElement("span",null," • "),s.default.createElement("small",null,t.frontmatter.date)),s.default.createElement("p",null,t.excerpt,s.default.createElement("br",null),s.default.createElement("br",null),s.default.createElement(d.default,{className:"button is-small",to:t.fields.slug},"Keep Reading →")))})))},t}(s.default.Component);t.default=p,p.propTypes={data:f.default.shape({allMarkdownRemark:f.default.shape({edges:f.default.array})})};t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-js-a4f3baa95fc08592a373.js.map