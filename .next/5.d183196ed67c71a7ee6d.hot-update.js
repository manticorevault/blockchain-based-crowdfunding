webpackHotUpdate(5,{

/***/ 836:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _factory = __webpack_require__(1137);

var _factory2 = _interopRequireDefault(_factory);

var _Layout = __webpack_require__(1408);

var _Layout2 = _interopRequireDefault(_Layout);

var _routes = __webpack_require__(832);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/pages/index.js?entry";


// Shows all the deployed Campaigns

var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: "renderCampaigns",
        value: function renderCampaigns() {
            // Iterate over list of Campaign Address to create an object
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement(_routes.Link, { route: "/campaigns/" + address, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 23
                        }
                    }, _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 24
                        }
                    }, "Ver Projeto")),
                    fluid: true // Stretches all the width of the container
                };
            });

            // Render the objects as a new card component
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            // Retrieve the Campaigns object
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement("h1", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, " Links "), _react2.default.createElement("h5", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, " Governanca de Projetos")), _react2.default.createElement("hr", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                }
            }), _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, " Projetos Abertos "), _react2.default.createElement(_routes.Link, { route: "/campaigns/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, _react2.default.createElement(_semanticUiReact.Button, {
                content: "Criar Projetos",
                icon: "add",
                floated: "right",
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                }
            }))), this.renderCampaigns())));
        }
    }], [{
        key: "getInitialProps",

        // Defines a class function within NextJS
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt("return", { campaigns: campaigns });

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

;

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJMYXlvdXQiLCJMaW5rIiwiQ2FtcGFpZ25JbmRleCIsIml0ZW1zIiwicHJvcHMiLCJjYW1wYWlnbnMiLCJtYXAiLCJoZWFkZXIiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJmbHVpZCIsInJlbmRlckNhbXBhaWducyIsIm1ldGhvZHMiLCJnZXREZXBsb3llZENhbXBhaWducyIsImNhbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNOztBQUNmLEFBQU8sQUFBYTs7OztBQUNwQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUyxBQUFZOzs7Ozs7O0FBRXJCOztJLEFBQ007Ozs7Ozs7Ozs7OzBDQVNnQixBQUNkO0FBQ0E7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDOUM7OzRCQUFPLEFBQ0ssQUFDUjtpREFDSSxBQUFDLDhCQUFLLHVCQUFOLEFBQTJCO3NDQUEzQjt3Q0FBQSxBQUNJO0FBREo7cUJBQUEsa0JBQ0ksY0FBQTs7c0NBQUE7d0NBQUE7QUFBQTtBQUFBLHVCQUpMLEFBR0MsQUFDSSxBQUlSOzJCQVJHLEFBUUksS0FSWCxBQUFPLEFBUVMsQUFFbkI7QUFWVSxBQUNIO0FBRlIsQUFBYyxBQWFkLGFBYmM7O0FBY2Q7aURBQU8sQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBQVAsQUFBTyxBQUVWO0FBRlU7YUFBQTs7OztpQ0FJRixBQUNMO0FBQ0E7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUVJO0FBRko7QUFBQSwrQkFFSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0EsNEJBQUEsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBSlIsQUFFSSxBQUVJLEFBRUo7OzhCQUFBO2dDQU5KLEFBTUksQUFDQTtBQURBO0FBQUEsZ0NBQ0EsY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUVBLHVDQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDO3lCQUFELEFBQ1ksQUFDUjtzQkFGSixBQUVTLEFBQ0w7eUJBSEosQUFHWSxBQUNSO3lCQUpKLEFBSWE7OzhCQUpiO2dDQUxaLEFBR0ksQUFDSSxBQUNJLEFBU1A7QUFUTztBQUNJLHVCQWY1QixBQUNJLEFBQ0ksQUFPSSxBQWNLLEFBQUssQUFNekI7OzthQTNERDs7Ozs7Ozs7Ozs7dUNBRTRCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QixBQUFoQixBQUF1Qzs7aUNBQXpEO0E7aUVBR0MsRUFBRSxXLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQU5hOztBQTZEM0IsQUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvZXRoZXJldW1fc29saWRpdHlfZGV2ZWxvcGVyL2Jsb2NrY2hhaW4tYmFzZWQtY3Jvd2RmdW5kaW5nIn0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5kMTgzMTk2ZWQ2N2M3MWE3ZWU2ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MWEwMDY3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDYXJkLCBCdXR0b24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCBmYWN0b3J5IGZyb20gXCIuLi9ldGhlcmV1bS9mYWN0b3J5XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCIuLi9yb3V0ZXNcIjtcblxuLy8gU2hvd3MgYWxsIHRoZSBkZXBsb3llZCBDYW1wYWlnbnNcbmNsYXNzIENhbXBhaWduSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIC8vIERlZmluZXMgYSBjbGFzcyBmdW5jdGlvbiB3aXRoaW4gTmV4dEpTXG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgICAgICAgY29uc3QgY2FtcGFpZ25zID0gYXdhaXQgZmFjdG9yeS5tZXRob2RzLmdldERlcGxveWVkQ2FtcGFpZ25zKCkuY2FsbCgpO1xuXG4gICAgICAgIC8vIE9iamVjdCB0byBiZSBwcm92aWRlZCBpbiB0aGUgY29tcG9uZW50IGFzIHByb3BzXG4gICAgICAgIHJldHVybiB7IGNhbXBhaWducyB9O1xuICAgIH07XG5cbiAgICByZW5kZXJDYW1wYWlnbnMoKSB7XG4gICAgICAgIC8vIEl0ZXJhdGUgb3ZlciBsaXN0IG9mIENhbXBhaWduIEFkZHJlc3MgdG8gY3JlYXRlIGFuIG9iamVjdFxuICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMucHJvcHMuY2FtcGFpZ25zLm1hcChhZGRyZXNzID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiBhZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAoXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIHJvdXRlPXtgL2NhbXBhaWducy8ke2FkZHJlc3N9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5WZXIgUHJvamV0bzwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBmbHVpZDogdHJ1ZSAvLyBTdHJldGNoZXMgYWxsIHRoZSB3aWR0aCBvZiB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBSZW5kZXIgdGhlIG9iamVjdHMgYXMgYSBuZXcgY2FyZCBjb21wb25lbnRcbiAgICAgICAgcmV0dXJuIDxDYXJkLkdyb3VwIGl0ZW1zPXtpdGVtc30gLz5cblxuICAgIH07XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIFJldHJpZXZlIHRoZSBDYW1wYWlnbnMgb2JqZWN0XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIDxkaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT4gTGlua3MgPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT4gR292ZXJuYW5jYSBkZSBQcm9qZXRvczwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4gUHJvamV0b3MgQWJlcnRvcyA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayByb3V0ZT1cIi9jYW1wYWlnbnMvbmV3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9XCJDcmlhciBQcm9qZXRvc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiYWRkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsb2F0ZWQ9XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5PXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVyQ2FtcGFpZ25zKCl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICk7XG5cbiAgICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FtcGFpZ25JbmRleDtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQUE7O0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFQQTtBQVdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUZBO0FBQUE7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFFQTtBQUZBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBOztBQUpBO0FBU0E7QUFUQTtBQUNBOzs7QUE3Q0E7QUFDQTs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFEQTs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdEQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==