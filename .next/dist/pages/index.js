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

var _factory = require("../ethereum/factory");

var _factory2 = _interopRequireDefault(_factory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/pages/index.js?entry";


//Shows all the deployed Campaigns

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
                    description: _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 21
                        }
                    }, "View Campaign"),
                    fluid: true // Stretches all the width of the container
                };
            });

            // Render the objects as a new card component
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            // Retrieve the Campaigns object
            return _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, this.renderCampaigns());
        }
    }], [{
        key: "getInitialProps",

        //Defines a class function within NextJS
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

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsImZhY3RvcnkiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTOztBQUNULEFBQU8sQUFBYTs7Ozs7Ozs7O0FBR3BCOztJQUNNLEE7Ozs7Ozs7Ozs7OzBDQVNnQixBQUNkO0FBQ0E7Z0JBQU0sYUFBUSxBQUFLLE1BQUwsQUFBVyxVQUFYLEFBQXFCLElBQUksbUJBQVcsQUFDOUM7OzRCQUFPLEFBQ0ssQUFDUjtpREFBYSxjQUFBOztzQ0FBQTt3Q0FBQTtBQUFBO0FBQUEscUJBQUEsRUFGVixBQUVVLEFBQ2I7MkJBSEcsQUFHSSxLQUhYLEFBQU8sQUFHUyxBQUVuQjtBQUxVLEFBQ0g7QUFGUixBQUFjLEFBUWQsYUFSYzs7QUFTZDtpREFBTyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW9COzhCQUFwQjtnQ0FBUCxBQUFPLEFBRVY7QUFGVTthQUFBOzs7O2lDQUlGLEFBQ1Q7QUFDSTttQ0FBTyxjQUFBOzs4QkFBQTtnQ0FBQSxBQUFPO0FBQVA7QUFBQSxhQUFBLE9BQVAsQUFBTyxBQUFPLEFBQUssQUFDdEI7OzthQTFCRDs7Ozs7Ozs7Ozs7dUNBRTRCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF1Qzs7aUNBQXpEO0E7aUVBR0MsRUFBRSxXQUFGLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOYSxBLEFBOEI1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvaG9tZS9hcnR1ci9Eb2N1bWVudHMvZXRoZXJldW1fc29saWRpdHlfZGV2ZWxvcGVyL2Jsb2NrY2hhaW4tYmFzZWQtY3Jvd2RmdW5kaW5nIn0=