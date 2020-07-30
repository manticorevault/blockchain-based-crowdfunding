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
            }, this.renderCampaigns(), _react2.default.createElement(_semanticUiReact.Button, {
                content: "Create Campaign",
                icon: "add",
                primary: true,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQ2FyZCIsIkJ1dHRvbiIsImZhY3RvcnkiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU07O0FBQ2YsQUFBTyxBQUFhOzs7Ozs7Ozs7QUFHcEI7O0ksQUFDTTs7Ozs7Ozs7Ozs7MENBU2dCLEFBQ2Q7QUFDQTtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSyxBQUNSO2lEQUFhLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSxxQkFBQSxFQUZWLEFBRVUsQUFDYjsyQkFIRyxBQUdJLEtBSFgsQUFBTyxBQUdTLEFBRW5CO0FBTFUsQUFDSDtBQUZSLEFBQWMsQUFRZCxhQVJjOztBQVNkO2lEQUFPLEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBb0I7OEJBQXBCO2dDQUFQLEFBQU8sQUFFVjtBQUZVO2FBQUE7Ozs7aUNBSUYsQUFDVDtBQUNJO21DQUFPLGNBQUE7OzhCQUFBO2dDQUFBLEFBQ0Q7QUFEQztBQUFBLGFBQUEsT0FBQSxBQUNELEFBQUssQUFDUCxtQ0FBQSxBQUFDO3lCQUFELEFBQ1ksQUFDUjtzQkFGSixBQUVTLEFBQ0w7eUJBSEosQUFHYTs7OEJBSGI7Z0NBRkosQUFBTyxBQUVILEFBTVA7QUFOTztBQUNJOzs7YUE1Qlo7Ozs7Ozs7Ozs7O3VDQUU0QixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUJBQWhCLEFBQXVDLEE7O2lDQUF6RDtBO2lFQUdDLEVBQUUsV0FBRixBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTmEsQSxBQXFDNUI7O2tCQUFBLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL2hvbWUvYXJ0dXIvRG9jdW1lbnRzL2V0aGVyZXVtX3NvbGlkaXR5X2RldmVsb3Blci9ibG9ja2NoYWluLWJhc2VkLWNyb3dkZnVuZGluZyJ9