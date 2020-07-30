webpackHotUpdate(5,{

/***/ 520:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = __webpack_require__(521);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Access Metamask's Provider
var web3 = void 0;

//Check if it's executed inside the browser and MetaMask is available
if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
    //Hijack's MetaMask Web3 Provider
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // We are not on the servevr OR the user is not running metamask
    // Connect via Infura
    var provider = new _web2.default.providers.HttpProvider("https://rinkeby.infura.io/v3/ac81fd6a6d694102aebb0c10fc7f28f3");

    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL3dlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsIndlYjMiLCJ3aW5kb3ciLCJjdXJyZW50UHJvdmlkZXIiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFFQTtBQUNBLElBQUksWUFBSjs7QUFFQTtBQUNBLElBQUksT0FBTyxBQUFQLFdBQWtCLEFBQWxCLGVBQWlDLE9BQU8sT0FBTyxBQUFkLFNBQXVCLEFBQTVELGFBQXlFLEFBQ3JFO0FBQ0E7V0FBTyxBQUFJLEFBQUosa0JBQVMsT0FBTyxBQUFQLEtBQVksQUFBckIsQUFBUCxBQUNIO0FBSEQsT0FHTyxBQUNIO0FBQ0E7QUFDQTtRQUFNLFdBQVcsSUFBSSxjQUFLLEFBQUwsVUFBZSxBQUFuQixhQUNiLEFBRGEsQUFBakIsQUFJQTs7V0FBTyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFQLEFBRUg7QUFFRDs7a0JBQWUsQUFBZiIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2FydHVyL0RvY3VtZW50cy9ldGhlcmV1bV9zb2xpZGl0eV9kZXZlbG9wZXIvYmxvY2tjaGFpbi1iYXNlZC1jcm93ZGZ1bmRpbmcifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/ethereum/web3.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/home/artur/Documents/ethereum_solidity_developer/blockchain-based-crowdfunding/ethereum/web3.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45NzM0OGNjOTcyYWNhNjVhMzY4My5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vZXRoZXJldW0vd2ViMy5qcz9hNjk5NDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBXZWIzIGZyb20gXCJ3ZWIzXCI7XG5cbi8vQWNjZXNzIE1ldGFtYXNrJ3MgUHJvdmlkZXJcbmxldCB3ZWIzO1xuXG4vL0NoZWNrIGlmIGl0J3MgZXhlY3V0ZWQgaW5zaWRlIHRoZSBicm93c2VyIGFuZCBNZXRhTWFzayBpcyBhdmFpbGFibGVcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVvZiB3aW5kb3cud2ViMyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIC8vSGlqYWNrJ3MgTWV0YU1hc2sgV2ViMyBQcm92aWRlclxuICAgIHdlYjMgPSBuZXcgV2ViMyh3aW5kb3cud2ViMy5jdXJyZW50UHJvdmlkZXIpO1xufSBlbHNlIHtcbiAgICAvLyBXZSBhcmUgbm90IG9uIHRoZSBzZXJ2ZXZyIE9SIHRoZSB1c2VyIGlzIG5vdCBydW5uaW5nIG1ldGFtYXNrXG4gICAgLy8gQ29ubmVjdCB2aWEgSW5mdXJhXG4gICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgV2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKFxuICAgICAgICBcImh0dHBzOi8vcmlua2VieS5pbmZ1cmEuaW8vdjMvYWM4MWZkNmE2ZDY5NDEwMmFlYmIwYzEwZmM3ZjI4ZjNcIlxuICAgICk7XG5cbiAgICB3ZWIzID0gbmV3IFdlYjMocHJvdmlkZXIpO1xuXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdlYjM7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZXRoZXJldW0vd2ViMy5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUlBO0FBQ0E7QUFEQTs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9