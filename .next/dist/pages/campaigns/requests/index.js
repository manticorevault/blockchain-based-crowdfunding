"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

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

var _routes = require("../../../routes");

var _Layout = require("../../../components/Layout");

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = require("../../../ethereum/campaign");

var _campaign2 = _interopRequireDefault(_campaign);

var _RequestRow = require("../../../components/RequestRow");

var _RequestRow2 = _interopRequireDefault(_RequestRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/pages/campaigns/requests/index.js?entry";


var RequestIndex = function (_Component) {
    (0, _inherits3.default)(RequestIndex, _Component);

    function RequestIndex() {
        (0, _classCallCheck3.default)(this, RequestIndex);

        return (0, _possibleConstructorReturn3.default)(this, (RequestIndex.__proto__ || (0, _getPrototypeOf2.default)(RequestIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(RequestIndex, [{
        key: "renderRows",
        value: function renderRows() {
            var _this2 = this;

            return this.props.requests.map(function (request, index) {
                return _react2.default.createElement(_RequestRow2.default, {
                    request: request,
                    id: index,
                    key: index,
                    address: _this2.props.address,
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 27
                    }
                });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var Header = _semanticUiReact.Table.Header,
                Row = _semanticUiReact.Table.Row,
                HeaderCell = _semanticUiReact.Table.HeaderCell,
                Body = _semanticUiReact.Table.Body;

            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, "Requests"), _react2.default.createElement(_routes.Link, { route: "/campaigns/" + this.props.address + "/requests/new", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement("a", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, " Add Request "))), _react2.default.createElement(_semanticUiReact.Table, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }, _react2.default.createElement(Header, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, _react2.default.createElement(Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 50
                }
            }, _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                }
            }, "ID"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, "Description"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, "Amount"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, "Recipient"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, "Approval"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, "Approve"), _react2.default.createElement(HeaderCell, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, "Finalize"))), _react2.default.createElement(Body, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, this.renderRows())));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, campaign, requestCount, requests;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                address = props.query.address;
                                campaign = (0, _campaign2.default)(address);
                                _context.next = 4;
                                return campaign.methods.getRequestsCount().call();

                            case 4:
                                requestCount = _context.sent;
                                _context.next = 7;
                                return _promise2.default.all(Array(parseInt(requestCount)).fill().map(function (element, index) {
                                    return campaign.methods.requests(index).call();
                                }));

                            case 7:
                                requests = _context.sent;

                                console.log(requests);

                                return _context.abrupt("return", { address: address, requests: requests, requestCount: requestCount });

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return RequestIndex;
}(_react.Component);

exports.default = RequestIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9yZXF1ZXN0cy9pbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIlRhYmxlIiwiTGluayIsIkxheW91dCIsIkNhbXBhaWduIiwiUmVxdWVzdFJvdyIsIlJlcXVlc3RJbmRleCIsInByb3BzIiwicmVxdWVzdHMiLCJtYXAiLCJyZXF1ZXN0IiwiaW5kZXgiLCJhZGRyZXNzIiwiSGVhZGVyIiwiUm93IiwiSGVhZGVyQ2VsbCIsIkJvZHkiLCJyZW5kZXJSb3dzIiwicXVlcnkiLCJjYW1wYWlnbiIsIm1ldGhvZHMiLCJnZXRSZXF1ZXN0c0NvdW50IiwiY2FsbCIsInJlcXVlc3RDb3VudCIsImFsbCIsIkFycmF5IiwicGFyc2VJbnQiLCJmaWxsIiwiZWxlbWVudCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVMsQUFBUTs7QUFDakIsQUFBUyxBQUFZOztBQUNyQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBZ0I7Ozs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7OztxQ0FpQlc7eUJBQ1Q7O3dCQUFPLEFBQUssTUFBTCxBQUFXLFNBQVgsQUFBb0IsSUFBSSxVQUFBLEFBQUMsU0FBRCxBQUFVLE9BQVUsQUFDL0M7dUNBQU8sQUFBQzs2QkFBRCxBQUNNLEFBQ1Q7d0JBRkcsQUFFQyxBQUNKO3lCQUhHLEFBR0UsQUFDTDs2QkFBUyxPQUFBLEFBQUssTUFKWCxBQUlpQjs7a0NBSmpCO29DQUFQLEFBQU8sQUFNVjtBQU5VO0FBQ0gsaUJBREc7QUFEWCxBQUFPLEFBUVYsYUFSVTs7OztpQ0FVRjtnQkFBQSxBQUNHLFNBREgsQUFDcUMsdUJBRHJDLEFBQ0c7Z0JBREgsQUFDVyxNQURYLEFBQ3FDLHVCQURyQyxBQUNXO2dCQURYLEFBQ2dCLGFBRGhCLEFBQ3FDLHVCQURyQyxBQUNnQjtnQkFEaEIsQUFDNEIsT0FENUIsQUFDcUMsdUJBRHJDLEFBQzRCLEFBRWpDOzttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSxhQUFBLGtCQUNJLGNBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQURKLEFBQ0ksQUFDQSw2QkFBQSxBQUFDLDhCQUFLLHVCQUFxQixLQUFBLEFBQUssTUFBMUIsQUFBZ0MsVUFBdEM7OEJBQUE7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNJLEFBQUMseUNBQU8sU0FBUjs4QkFBQTtnQ0FBQTtBQUFBO2VBSlosQUFFSSxBQUNJLEFBQ0ksQUFJUixvQ0FBQSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBSUEsdUJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBTEosQUFLSSxBQUlBLGdDQUFDLGNBQUQ7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQVRKLEFBU0ksQUFJQSwyQkFBQyxjQUFEOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFiSixBQWFJLEFBSUEsOEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBakJKLEFBaUJJLEFBSUEsNkJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBckJKLEFBcUJJLEFBSUEsNEJBQUMsY0FBRDs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBM0JaLEFBQ0ksQUFDSSxBQXlCSSxBQU1SLCtCQUFDLGNBQUQ7OzhCQUFBO2dDQUFBLEFBQ0s7QUFETDtBQUFBLG9CQTFDWixBQUNJLEFBUUksQUFpQ0ksQUFDSyxBQUFLLEFBS3pCOzs7OztpSCxBQTlFNEI7Ozs7O2lDQUNqQjtBLDBDQUFZLE1BQU0sQSxNQUFsQixBQUNGLEE7QSwyQ0FBVyx3QixBQUFBLEFBQVM7O3VDQUNDLFNBQUEsQUFBUyxRQUFULEFBQWlCLG1CQUFqQixBLEFBQW9DOztpQ0FBekQ7QTs7eURBRWlCLEFBQVEsVUFDckIsU0FBTixBQUFNLEFBQVMsZUFBZixBQUE4QixPQUE5QixBQUFxQyxJQUFJLFVBQUEsQUFBQyxTQUFELEFBQVUsT0FBVSxBQUN6RDsyQ0FBTyxTQUFBLEFBQVMsUUFBVCxBQUFpQixTQUFqQixBQUEwQixPQUFqQyxBQUFPLEFBQWlDLEFBQzNDO0EsQUFIa0IsQUFDbkIsaUNBQUEsQ0FEbUI7O2lDQUFqQjtBLG9EQU1OOzt3Q0FBQSxBQUFRLElBQVIsQUFBWTs7aUVBRUwsRUFBRSxTQUFGLFNBQVcsVUFBWCxVQUFxQixjQUFyQixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZFksQSxBQWtGM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2V0aGVyZXVtX3NvbGlkaXR5X2RldmVsb3Blci9ibG9ja2NoYWluLWJhc2VkLWNyb3dkZnVuZGluZyJ9