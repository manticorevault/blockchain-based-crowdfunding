"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require("semantic-ui-react");

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require("../../../ethereum/web3");

var _web2 = _interopRequireDefault(_web);

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/pages/campaigns/requests/new.js?entry";


var RequestNew = function (_Component) {
    (0, _inherits3.default)(RequestNew, _Component);

    function RequestNew() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, RequestNew);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = RequestNew.__proto__ || (0, _getPrototypeOf2.default)(RequestNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            description: "",
            recipient: "",
            loading: false,
            errorMessage: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, _this$state, description, value, recipient, accounts;

                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                event.preventDefault();

                                campaign = (0, _campaign2.default)(_this.props.address);
                                _this$state = _this.state, description = _this$state.description, value = _this$state.value, recipient = _this$state.recipient;

                                _this.setState({ loading: true, errorMessage: "" });

                                _context.prev = 4;
                                _context.next = 7;
                                return _web2.default.eth.getAccounts();

                            case 7:
                                accounts = _context.sent;
                                _context.next = 10;
                                return campaign.methods.createRequest(description, _web2.default.utils.toWei(value, "ether"), recipient).send({ from: accounts[0] });

                            case 10:

                                _routes.Router.pushRoute("/campaigns/" + _this.props.address + "/requests");

                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context["catch"](4);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 16:

                                _this.setState({ loading: false });

                            case 17:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[4, 13]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(RequestNew, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 52
                }
            }, "Go Back")), _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, "Create a Request"), _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, " Description "), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.description,
                onChange: function onChange(event) {
                    return _this3.setState({ description: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, " Amount in Ether "), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            })), _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, " Recipient Address "), _react2.default.createElement(_semanticUiReact.Input, {
                value: this.state.recipient,
                onChange: function onChange(event) {
                    return _this3.setState({ recipient: event.target.value });
                },
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "Oops!", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, "Create!")));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(props) {
                var address;
                return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                address = props.query.address;
                                return _context2.abrupt("return", { address: address });

                            case 2:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getInitialProps(_x2) {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestNew;
}(_react.Component);

exports.default = RequestNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9uZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiTWVzc2FnZSIsIklucHV0IiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiTGluayIsIlJvdXRlciIsIkxheW91dCIsIlJlcXVlc3ROZXciLCJzdGF0ZSIsInZhbHVlIiwiZGVzY3JpcHRpb24iLCJyZWNpcGllbnQiLCJsb2FkaW5nIiwiZXJyb3JNZXNzYWdlIiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY2FtcGFpZ24iLCJwcm9wcyIsImFkZHJlc3MiLCJzZXRTdGF0ZSIsImV0aCIsImdldEFjY291bnRzIiwiYWNjb3VudHMiLCJtZXRob2RzIiwiY3JlYXRlUmVxdWVzdCIsInV0aWxzIiwidG9XZWkiLCJzZW5kIiwiZnJvbSIsInB1c2hSb3V0ZSIsIm1lc3NhZ2UiLCJ0YXJnZXQiLCJxdWVyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFTOztBQUNoQyxBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQVMsQUFBTSxBQUFjOztBQUM3QixBQUFPLEFBQVk7Ozs7Ozs7OztJLEFBRWI7Ozs7Ozs7Ozs7Ozs7Ozt3TixBQUVGO21CQUFRLEFBQ0csQUFDUDt5QkFGSSxBQUVTLEFBQ2I7dUJBSEksQUFHTyxBQUNYO3FCQUpJLEFBSUssQUFDVDswQixBQUxJLEFBS1U7QUFMVixBQUNKLGlCLEFBYUo7aUdBQVcsaUJBQUEsQUFBTSxPQUFOOzBFQUFBOzs4RUFBQTs4QkFBQTt5REFBQTtpQ0FDUDtzQ0FBQSxBQUFNLEFBRUE7O0FBSEMsMkNBR1Usd0JBQVMsTUFBQSxBQUFLLE1BSHhCLEFBR1UsQUFBb0I7OENBQ0ssTUFKbkMsQUFJd0MsT0FKeEMsQUFJQywwQkFKRCxBQUlDLGFBSkQsQUFJYyxvQkFKZCxBQUljLE9BSmQsQUFJcUIsd0JBSnJCLEFBSXFCLEFBRTVCOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxTQUFGLEFBQVcsTUFBTSxjQU54QixBQU1QLEFBQWMsQUFBK0I7O2dEQU50QztnREFBQTt1Q0FTb0IsY0FBQSxBQUFLLElBVHpCLEFBU29CLEFBQVM7O2lDQUExQjtBQVRILG9EQUFBO2dEQUFBO3VDQVVHLFNBQUEsQUFBUyxRQUFULEFBQ0QsY0FEQyxBQUNhLGFBQWEsY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFYLEFBQWlCLE9BRDNDLEFBQzBCLEFBQXdCLFVBRGxELEFBQzRELFdBRDVELEFBRUQsS0FBSyxFQUFFLE1BQU0sU0FaZixBQVVHLEFBRUksQUFBUSxBQUFTOztpQ0FFM0I7OytDQUFBLEFBQU8sMEJBQXdCLE1BQUEsQUFBSyxNQUFwQyxBQUEwQyxVQWR2Qzs7Z0RBQUE7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBaUJIOztzQ0FBQSxBQUFLLFNBQVMsRUFBRSxjQUFjLFlBakIzQixBQWlCSCxBQUFjLEFBQW9COztpQ0FHdEM7O3NDQUFBLEFBQUssU0FBUyxFQUFFLFNBcEJULEFBb0JQLEFBQWMsQUFBVzs7aUNBcEJsQjtpQ0FBQTtnREFBQTs7QUFBQTt5Q0FBQTtBOzs7Ozs7Ozs7O2lDQXVCRjt5QkFDTDs7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFFSTtBQUZKO0FBQUEsYUFBQSxrQkFFSSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUhSLEFBRUksQUFDSSxBQUtKLDZCQUFBLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVJKLEFBUUksQUFDQSxxQ0FBQSxBQUFDLHVDQUFLLFVBQVUsS0FBaEIsQUFBcUIsVUFBVSxPQUFPLENBQUMsQ0FBQyxLQUFBLEFBQUssTUFBN0MsQUFBbUQ7OEJBQW5EO2dDQUFBLEFBQ0k7QUFESjsrQkFDSyxjQUFELHNCQUFBLEFBQU07OzhCQUFOO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSxrQ0FBQSxBQUFDO3VCQUNVLEtBQUEsQUFBSyxNQURoQixBQUNzQixBQUNsQjswQkFBVSx5QkFBQTsyQkFBUyxPQUFBLEFBQUssU0FBUyxFQUFFLGFBQWEsTUFBQSxBQUFNLE9BQTVDLEFBQVMsQUFBYyxBQUE0QjtBQUZqRTs7OEJBQUE7Z0NBSFIsQUFDSSxBQUVJLEFBTUo7QUFOSTtBQUNJLGlDQUtQLGNBQUQsc0JBQUEsQUFBTTs7OEJBQU47Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ksY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREosQUFDSSxBQUNBLHNDQUFBLEFBQUM7dUJBQ1UsS0FBQSxBQUFLLE1BRGhCLEFBQ3NCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUUsT0FBTyxNQUFBLEFBQU0sT0FBdEMsQUFBUyxBQUFjLEFBQXNCO0FBRjNEOzs4QkFBQTtnQ0FYUixBQVNJLEFBRUksQUFNSjtBQU5JO0FBQ0ksaUNBS1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBQ0Esd0NBQUEsQUFBQzt1QkFDVSxLQUFBLEFBQUssTUFEaEIsQUFDc0IsQUFDbEI7MEJBQVUseUJBQUE7MkJBQVMsT0FBQSxBQUFLLFNBQVMsRUFBRSxXQUFXLE1BQUEsQUFBTSxPQUExQyxBQUFTLEFBQWMsQUFBMEI7QUFGL0Q7OzhCQUFBO2dDQW5CUixBQWlCSSxBQUVJLEFBTUo7QUFOSTtBQUNJLGlDQUtSLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBekJKLEFBeUJJLEFBQ0E7QUFEQTtnQ0FDQSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBUyxLQUFBLEFBQUssTUFBOUIsQUFBb0M7OEJBQXBDO2dDQUFBO0FBQUE7ZUFwQ1osQUFDSSxBQVNJLEFBMEJJLEFBT2Y7Ozs7O21ILEFBekU0Qjs7Ozs7aUNBQ2pCO0EsMENBQVksTSxBQUFNLE0sQUFBbEI7a0VBRUQsRUFBRSxTLEFBQUY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQWJVLEFBc0Z6Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJuZXcuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2V0aGVyZXVtX3NvbGlkaXR5X2RldmVsb3Blci9ibG9ja2NoYWluLWJhc2VkLWNyb3dkZnVuZGluZyJ9