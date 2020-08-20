webpackHotUpdate(7,{

/***/ 1429:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(508);

var _web = __webpack_require__(1138);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/components/RequestRow.js";


var RequestRow = function (_Component) {
    (0, _inherits3.default)(RequestRow, _Component);

    function RequestRow() {
        (0, _classCallCheck3.default)(this, RequestRow);

        return (0, _possibleConstructorReturn3.default)(this, (RequestRow.__proto__ || (0, _getPrototypeOf2.default)(RequestRow)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestRow, [{
        key: "render",
        value: function render() {
            var Row = _semanticUiReact.Table.Row,
                Cell = _semanticUiReact.Table.Cell;
            var _props = this.props,
                id = _props.id,
                request = _props.request;

            return _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 11
                }
            }, _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 12
                }
            }, id), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                }
            }, request.description), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                }
            }, _web2.default.utils.fromWei(request.value, "ether")), _react2.default.createElement(Cell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                }
            }, request.recipient));
        }
    }]);

    return RequestRow;
}(_react.Component);

exports.default = RequestRow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIlRhYmxlIiwid2ViMyIsIlJlcXVlc3RSb3ciLCJSb3ciLCJDZWxsIiwicHJvcHMiLCJpZCIsInJlcXVlc3QiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInZhbHVlIiwicmVjaXBpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBVTs7Ozs7Ozs7O0lBRVgsQTs7Ozs7Ozs7Ozs7aUNBQ087Z0JBQUEsQUFDRyxNQURILEFBQ2lCLHVCQURqQixBQUNHO2dCQURILEFBQ1EsT0FEUixBQUNpQix1QkFEakIsQUFDUTt5QkFDVyxLQUZuQixBQUV3QjtnQkFGeEIsQUFFRyxZQUZILEFBRUc7Z0JBRkgsQUFFTyxpQkFGUCxBQUVPLEFBRVo7O21DQUNLLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLGFBQUEsa0JBQ0ssY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsZUFESixBQUNJLEFBR0EscUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsdUJBSkosQUFJSSxBQUNjLEFBRWQsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsNkJBQ00sQUFBSyxNQUFMLEFBQVcsUUFBUSxRQUFuQixBQUEyQixPQVJyQyxBQU9JLEFBQ00sQUFBa0MsQUFFeEMsMkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUEsQUFDTTtBQUROO0FBQUEsdUJBWFIsQUFDSSxBQVVJLEFBQ2MsQUFLekI7Ozs7O0FBdEJvQixBLEFBeUJ6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJSZXF1ZXN0Um93LmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ldGhlcmV1bV9zb2xpZGl0eV9kZXZlbG9wZXIvYmxvY2tjaGFpbi1iYXNlZC1jcm93ZGZ1bmRpbmcifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/components/RequestRow.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/components/RequestRow.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4xZGZhYzNhNGJlOThhZTljOWY1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZXF1ZXN0Um93LmpzPzVkZjU4NDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVGFibGUgfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLi9ldGhlcmV1bS93ZWIzXCI7XG5cbmNsYXNzIFJlcXVlc3RSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBSb3csIENlbGwgfSA9IFRhYmxlO1xuICAgICAgICBjb25zdCB7IGlkLCByZXF1ZXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Um93PlxuICAgICAgICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgICAgICAgICB7IGlkIH1cbiAgICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWVzdC5kZXNjcmlwdGlvbiB9XG4gICAgICAgICAgICAgICAgPC9DZWxsPlxuICAgICAgICAgICAgICAgIDxDZWxsPlxuICAgICAgICAgICAgICAgICAgICB7IHdlYjMudXRpbHMuZnJvbVdlaShyZXF1ZXN0LnZhbHVlLCBcImV0aGVyXCIpIH1cbiAgICAgICAgICAgICAgICA8L0NlbGw+XG4gICAgICAgICAgICAgICAgPENlbGw+XG4gICAgICAgICAgICAgICAgICAgIHsgcmVxdWVzdC5yZWNpcGllbnQgfVxuICAgICAgICAgICAgICAgIDwvQ2VsbD5cblxuICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0Um93O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVxdWVzdFJvdy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7O0FBR0E7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7QUFTQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9