'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var Image$1 = require('next/image');
var lodash = require('lodash');
var reactDom = require('react-dom');
var reactPopper = require('react-popper');
var ReactPaginate = require('react-paginate');
var classNames = require('classnames');
var useEmblaCarousel = require('embla-carousel-react');
var Autoplay = require('embla-carousel-autoplay');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var Image__default = /*#__PURE__*/_interopDefaultLegacy(Image$1);
var ReactPaginate__default = /*#__PURE__*/_interopDefaultLegacy(ReactPaginate);
var classNames__default = /*#__PURE__*/_interopDefaultLegacy(classNames);
var useEmblaCarousel__default = /*#__PURE__*/_interopDefaultLegacy(useEmblaCarousel);
var Autoplay__default = /*#__PURE__*/_interopDefaultLegacy(Autoplay);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get__default["default"](theme, path, fallback);
    };
};

var rotate$3 = styled.keyframes(templateObject_1$1s || (templateObject_1$1s = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$M || (templateObject_2$M = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$3);
var Svg = styled__default["default"].svg(templateObject_3$y || (templateObject_3$y = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors.".concat(color), color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "gray900",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$1s, templateObject_2$M, templateObject_3$y;

var Icon$3k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M16.59 9H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V9H7.41C6.52 9 6.07 10.08 6.7 10.71L11.29 15.3C11.68 15.69 12.31 15.69 12.7 15.3L17.29 10.71C17.92 10.08 17.48 9 16.59 9ZM5 19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18H6C5.45 18 5 18.45 5 19Z" })));
};

var Icon$3j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9.38031 13.532L4.01253 11.58C3.71703 11.4726 3.46156 11.2772 3.28053 11.0201C3.09949 10.763 3.00159 10.4566 3.00002 10.1422C2.99844 9.82779 3.09327 9.52044 3.27172 9.26156C3.45016 9.00268 3.70367 8.80471 3.99807 8.69431L18.9218 3.09796C19.1983 2.99424 19.4988 2.97234 19.7875 3.03486C20.0761 3.09738 20.3407 3.24168 20.5495 3.45052C20.7584 3.65936 20.9027 3.92392 20.9652 4.21257C21.0277 4.50122 21.0057 4.80176 20.902 5.07829V5.07824L15.3056 20.0019C15.1974 20.2961 15.0011 20.5498 14.7435 20.7284C14.4858 20.907 14.1794 21.0019 13.8659 21H13.8578C13.5429 21.0003 13.2356 20.9032 12.9782 20.7219C12.7207 20.5406 12.5257 20.2841 12.4199 19.9875L10.468 14.6197L4.40017 20.6874C4.25593 20.8317 4.0603 20.9127 3.85631 20.9127C3.65233 20.9127 3.4567 20.8317 3.31246 20.6874C3.16822 20.5432 3.08718 20.3476 3.08718 20.1436C3.08718 19.9396 3.16822 19.744 3.31246 19.5997L9.38031 13.532Z" })));
};

var Icon$3i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default["default"].createElement("path", { d: "M11.4545 4.90909C11.4545 4.90909 10.6364 8.18182 9 8.18182C7.36364 8.18182 6.54545 4.90909 6.54545 4.90909L11.4545 4.90909Z" }),
        React__default["default"].createElement("path", { d: "M9 9.81818C10.6364 9.81818 11.4545 13.0909 11.4545 13.0909H6.54545C6.54545 13.0909 7.36364 9.81818 9 9.81818Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0V0.818182C18 1.72193 17.2674 2.45455 16.3636 2.45455H15.4292C15.1634 4.44627 14.4814 6.05746 13.7994 7.23802C13.3629 7.9933 12.9252 8.57483 12.5928 8.97116L12.5685 9L12.5928 9.02889C12.9252 9.42522 13.3629 10.0067 13.7994 10.7621C14.4814 11.9426 15.1634 13.5538 15.4292 15.5455L16.3636 15.5455C17.2674 15.5455 18 16.2781 18 17.1818V18H0L0 17.1818C0 16.2781 0.732613 15.5455 1.63636 15.5455H2.5708C2.83662 13.5538 3.51857 11.9426 4.20065 10.7621C4.63705 10.0068 5.07481 9.42525 5.4072 9.02891L5.43149 9.00005L5.40722 8.97119C5.07481 8.57488 4.63705 7.99335 4.20065 7.23807C3.51857 6.05751 2.8366 4.44629 2.5708 2.45455H1.63636C0.732613 2.45455 0 1.72193 0 0.818182L0 0L18 0ZM13.7762 2.45455L4.22384 2.45455C4.47523 4.0977 5.04644 5.43099 5.61753 6.41941C5.99931 7.08019 6.37974 7.58431 6.66096 7.91964C6.80144 8.08711 6.91664 8.21188 6.99417 8.29238L7.02486 8.32397C7.04865 8.34826 7.06738 8.36681 7.08044 8.37957L7.09932 8.39777L7.10089 8.39927L7.10209 8.4004C7.26883 8.55518 7.36364 8.77243 7.36364 9.00002C7.36364 9.22764 7.26883 9.44492 7.10209 9.5997L7.10136 9.60038L7.09932 9.6023L7.08046 9.6205L7.06396 9.63676L7.0483 9.65241C7.03317 9.66759 7.01507 9.68605 6.9942 9.70769C6.97824 9.72427 6.96069 9.74273 6.94164 9.76303C6.92533 9.7804 6.90795 9.79913 6.88955 9.81923C6.85452 9.85746 6.81579 9.9006 6.77385 9.94859C6.73844 9.98909 6.70071 10.0331 6.66099 10.0805C6.37974 10.4158 5.99931 10.9199 5.61753 11.5807C5.04644 12.5691 4.47526 13.9024 4.22387 15.5455H13.7761C13.5247 13.9024 12.9536 12.5691 12.3825 11.5807C12.0007 10.9199 11.6203 10.4157 11.339 10.0804C11.1986 9.91294 11.0833 9.78817 11.0058 9.70764C10.9893 9.69057 10.9746 9.67548 10.9617 9.66243L10.9347 9.63541L10.9195 9.62048L10.9007 9.60225L10.8991 9.60075L10.8979 9.59968C10.7312 9.4449 10.6364 9.22759 10.6364 9C10.6364 8.77238 10.7312 8.55508 10.898 8.4003L10.8987 8.39957L10.9007 8.39772L10.9196 8.37952C10.9378 8.36169 10.9671 8.33258 11.0058 8.29233C11.0834 8.21183 11.1986 8.08706 11.339 7.91959C11.6203 7.58429 12.0007 7.08014 12.3825 6.41936C12.9536 5.43094 13.5248 4.09768 13.7762 2.45455Z" })));
};

var Icon$3h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "url(#paint0_linear_425_18017)" }),
        React__default["default"].createElement("path", { d: "M37.1865 28.2572L30.6206 24.4412L48.4798 14L66.3917 24.4412L59.8257 28.2572L48.4798 21.6851L37.1865 28.2572ZM71.0666 34.8293V42.5145L77.6325 38.6984V31.0133L71.0666 27.1442L64.5007 30.9603L71.0666 34.8293ZM41.9139 31.0133L48.4798 34.8293L55.0457 31.0133L48.4798 27.1442L41.9139 31.0133ZM66.3917 37.5854L59.8257 33.7693L48.4798 40.3414L37.1865 33.7693L30.6206 37.5854V45.2705L41.9139 51.8426V64.9868L48.4798 68.8029L55.0457 64.9868V51.8426L66.3917 45.2705V37.5854ZM71.0666 61.1708L59.7732 67.7429V75.428L77.685 64.9868V44.1575L71.0666 48.0266V61.1708ZM59.7732 62.2838L66.3391 58.4677V50.7296L59.7732 54.5457V62.2838ZM41.9139 70.4989V78.1841L48.4798 82.0001L55.0457 78.1841V70.4989L48.4798 74.315L41.9139 70.4989ZM19.2747 38.6984L25.8406 42.5145V34.8293L32.4065 31.0133L25.8931 27.1442L19.3272 30.9603V38.6984H19.2747ZM25.8931 48.0266L19.3272 44.2105V65.0398L37.239 75.481V67.7959L25.8931 61.1708V48.0266ZM37.1865 54.5987L30.6206 50.7826V58.4677L37.1865 62.2838V54.5987Z", fill: "#14151A" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_425_18017", x1: "48", y1: "0", x2: "48", y2: "96", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#F0B90B" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFD349" })))));
};

var Icon$3g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM8.29289 11.7071C7.90237 11.3166 7.90237 10.6834 8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929L12 12.5858L14.2929 10.2929C14.6834 9.90237 15.3166 9.90237 15.7071 10.2929C16.0976 10.6834 16.0976 11.3166 15.7071 11.7071L12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L8.29289 11.7071Z" })));
};

var Icon$3f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", width: "24", height: "24", rx: "12" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.29289 10.2929C7.90237 10.6834 7.90237 11.3166 8.29289 11.7071L11.2929 14.7071C11.6834 15.0976 12.3166 15.0976 12.7071 14.7071L15.7071 11.7071C16.0976 11.3166 16.0976 10.6834 15.7071 10.2929C15.3166 9.90237 14.6834 9.90237 14.2929 10.2929L12 12.5858L9.70711 10.2929C9.31658 9.90237 8.68342 9.90237 8.29289 10.2929Z" })));
};

var Icon$3e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.29289 9.79289C6.90237 10.1834 6.90237 10.8166 7.29289 11.2071L11.2929 15.2071C11.6834 15.5976 12.3166 15.5976 12.7071 15.2071L16.7071 11.2071C17.0976 10.8166 17.0976 10.1834 16.7071 9.79289C16.3166 9.40237 15.6834 9.40237 15.2929 9.79289L12 13.0858L8.70711 9.79289C8.31658 9.40237 7.68342 9.40237 7.29289 9.79289Z" })));
};

var Icon$3d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM11.7071 8.29289C11.3166 7.90237 10.6834 7.90237 10.2929 8.29289C9.90237 8.68342 9.90237 9.31658 10.2929 9.70711L12.5858 12L10.2929 14.2929C9.90237 14.6834 9.90237 15.3166 10.2929 15.7071C10.6834 16.0976 11.3166 16.0976 11.7071 15.7071L14.7071 12.7071C15.0976 12.3166 15.0976 11.6834 14.7071 11.2929L11.7071 8.29289Z" })));
};

var Icon$3c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", width: "24", height: "24", rx: "12" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.2929 8.29289C10.6834 7.90237 11.3166 7.90237 11.7071 8.29289L14.7071 11.2929C15.0976 11.6834 15.0976 12.3166 14.7071 12.7071L11.7071 15.7071C11.3166 16.0976 10.6834 16.0976 10.2929 15.7071C9.90237 15.3166 9.90237 14.6834 10.2929 14.2929L12.5858 12L10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289Z" })));
};

var Icon$3b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.79289 7.29289C10.1834 6.90237 10.8166 6.90237 11.2071 7.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L11.2071 16.7071C10.8166 17.0976 10.1834 17.0976 9.79289 16.7071C9.40237 16.3166 9.40237 15.6834 9.79289 15.2929L13.0858 12L9.79289 8.70711C9.40237 8.31658 9.40237 7.68342 9.79289 7.29289Z" })));
};

var Icon$3a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289C14.0976 8.68342 14.0976 9.31658 13.7071 9.70711L11.4142 12L13.7071 14.2929C14.0976 14.6834 14.0976 15.3166 13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L12.2929 8.29289Z" })));
};

var Icon$39 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", width: "24", height: "24", rx: "12" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071L12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071C14.0976 15.3166 14.0976 14.6834 13.7071 14.2929L11.4142 12L13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289Z" })));
};

var Icon$38 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.2071 7.29289C13.8166 6.90237 13.1834 6.90237 12.7929 7.29289L8.79289 11.2929C8.40237 11.6834 8.40237 12.3166 8.79289 12.7071L12.7929 16.7071C13.1834 17.0976 13.8166 17.0976 14.2071 16.7071C14.5976 16.3166 14.5976 15.6834 14.2071 15.2929L10.9142 12L14.2071 8.70711C14.5976 8.31658 14.5976 7.68342 14.2071 7.29289Z" })));
};

var Icon$37 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.29289 14.2071C6.90237 13.8166 6.90237 13.1834 7.29289 12.7929L11.2929 8.79289C11.6834 8.40237 12.3166 8.40237 12.7071 8.79289L16.7071 12.7929C17.0976 13.1834 17.0976 13.8166 16.7071 14.2071C16.3166 14.5976 15.6834 14.5976 15.2929 14.2071L12 10.9142L8.70711 14.2071C8.31658 14.5976 7.68342 14.5976 7.29289 14.2071Z" })));
};

var Icon$36 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0ZM8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L12 11.4142L14.2929 13.7071C14.6834 14.0976 15.3166 14.0976 15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929L12.7071 9.29289C12.3166 8.90237 11.6834 8.90237 11.2929 9.29289L8.29289 12.2929Z" })));
};

var Icon$35 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", width: "24", height: "24", rx: "12", transform: "matrix(-1 0 0 1 24 0)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.29289 13.7071C7.90237 13.3166 7.90237 12.6834 8.29289 12.2929L11.2929 9.29289C11.6834 8.90237 12.3166 8.90237 12.7071 9.29289L15.7071 12.2929C16.0976 12.6834 16.0976 13.3166 15.7071 13.7071C15.3166 14.0976 14.6834 14.0976 14.2929 13.7071L12 11.4142L9.70711 13.7071C9.31658 14.0976 8.68342 14.0976 8.29289 13.7071Z" })));
};

var Icon$34 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M13.7929 6.79289C14.1834 6.40237 14.8166 6.40237 15.2071 6.79289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L15.2071 17.2071C14.8166 17.5976 14.1834 17.5976 13.7929 17.2071C13.4024 16.8166 13.4024 16.1834 13.7929 15.7929L16.5858 13H4.9375C4.41973 13 4 12.5523 4 12C4 11.4477 4.41973 11 4.9375 11H16.5858L13.7929 8.20711C13.4024 7.81658 13.4024 7.18342 13.7929 6.79289Z" })));
};

var Icon$33 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M6.79289 10.2071C6.40237 9.81658 6.40237 9.18342 6.79289 8.79289L11.2929 4.29289C11.6834 3.90237 12.3166 3.90237 12.7071 4.29289L17.2071 8.79289C17.5976 9.18342 17.5976 9.81658 17.2071 10.2071C16.8166 10.5976 16.1834 10.5976 15.7929 10.2071L13 7.41421L13 19.0625C13 19.5803 12.5523 20 12 20C11.4477 20 11 19.5803 11 19.0625L11 7.41421L8.20711 10.2071C7.81658 10.5976 7.18342 10.5976 6.79289 10.2071Z" })));
};

var Icon$32 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M10.2071 17.2071C9.81658 17.5976 9.18342 17.5976 8.79289 17.2071L4.29289 12.7071C3.90237 12.3166 3.90237 11.6834 4.29289 11.2929L8.79289 6.79289C9.18342 6.40237 9.81658 6.40237 10.2071 6.79289C10.5976 7.18342 10.5976 7.81658 10.2071 8.20711L7.41421 11H19.0625C19.5803 11 20 11.4477 20 12C20 12.5523 19.5803 13 19.0625 13H7.41421L10.2071 15.7929C10.5976 16.1834 10.5976 16.8166 10.2071 17.2071Z" })));
};

var Icon$31 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M6.79289 13.7929C6.40237 14.1834 6.40237 14.8166 6.79289 15.2071L11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L17.2071 15.2071C17.5976 14.8166 17.5976 14.1834 17.2071 13.7929C16.8166 13.4024 16.1834 13.4024 15.7929 13.7929L13 16.5858L13 4.9375C13 4.41973 12.5523 4 12 4C11.4477 4 11 4.41973 11 4.9375L11 16.5858L8.20711 13.7929C7.81658 13.4024 7.18342 13.4024 6.79289 13.7929Z" })));
};

var Icon$30 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M9.58578 7.05025C9.58578 6.49796 10.0335 6.05025 10.5858 6.05025L16.9497 6.05025C17.502 6.05025 17.9497 6.49796 17.9497 7.05025V13.4142C17.9497 13.9665 17.502 14.4142 16.9497 14.4142C16.3975 14.4142 15.9497 13.9665 15.9497 13.4142V9.46446L7.71316 17.701C7.34705 18.0672 6.73367 18.0474 6.34314 17.6568C5.95262 17.2663 5.93283 16.6529 6.29895 16.2868L14.5355 8.05025L10.5858 8.05025C10.0335 8.05025 9.58578 7.60253 9.58578 7.05025Z" })));
};

var Icon$2$ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M17.0024 7C17.0024 6.44772 16.5547 6 16.0024 6C15.4502 6 15.0024 6.44772 15.0024 7L15.0024 17C15.0024 17.5523 15.4502 18 16.0024 18C16.5547 18 17.0024 17.5523 17.0024 17L17.0024 7Z" }),
        React__default["default"].createElement("path", { d: "M11.1725 12L7.2925 15.88C6.9025 16.27 6.9125 16.91 7.2925 17.3C7.6825 17.69 8.3125 17.69 8.7025 17.3L13.2925 12.71C13.6825 12.32 13.6825 11.69 13.2925 11.3L8.7025 6.70998C8.3125 6.31998 7.6825 6.31998 7.2925 6.70998C6.9025 7.09998 6.9025 7.72998 7.2925 8.11998L11.1725 12Z" })));
};

var Icon$2_ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M7 7C7 6.44772 7.44772 6 8 6C8.55228 6 9 6.44772 9 7L9 17C9 17.5523 8.55229 18 8 18C7.44772 18 7 17.5523 7 17L7 7Z" }),
        React__default["default"].createElement("path", { d: "M12.8299 12L16.7099 15.88C17.0999 16.27 17.0899 16.91 16.7099 17.3C16.3199 17.69 15.6899 17.69 15.2999 17.3L10.7099 12.71C10.3199 12.32 10.3199 11.69 10.7099 11.3L15.2999 6.70998C15.6899 6.31998 16.3199 6.31998 16.7099 6.70998C17.0999 7.09998 17.0999 7.72998 16.7099 8.11998L12.8299 12Z" })));
};

var Icon$2Z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.29289 11.7071C6.90237 11.3166 6.90237 10.6834 7.29289 10.2929L11.2929 6.29289C11.6834 5.90237 12.3166 5.90237 12.7071 6.29289L16.7071 10.2929C17.0976 10.6834 17.0976 11.3166 16.7071 11.7071C16.3166 12.0976 15.6834 12.0976 15.2929 11.7071L12 8.41421L8.70711 11.7071C8.31658 12.0976 7.68342 12.0976 7.29289 11.7071Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.29289 17.7071C6.90237 17.3166 6.90237 16.6834 7.29289 16.2929L11.2929 12.2929C11.6834 11.9024 12.3166 11.9024 12.7071 12.2929L16.7071 16.2929C17.0976 16.6834 17.0976 17.3166 16.7071 17.7071C16.3166 18.0976 15.6834 18.0976 15.2929 17.7071L12 14.4142L8.70711 17.7071C8.31658 18.0976 7.68342 18.0976 7.29289 17.7071Z" })));
};

var Icon$2Y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 1L18.5621 6.01512C19.0652 6.39965 19.1468 7.10101 18.7443 7.58167C18.3418 8.06232 17.6076 8.14025 17.1045 7.75573L12 3.8546L6.89551 7.75573C6.39237 8.14025 5.6582 8.06232 5.25569 7.58167C4.85319 7.10101 4.93476 6.39965 5.4379 6.01512L12 1Z" }),
        React__default["default"].createElement("path", { opacity: "0.56", fillRule: "evenodd", clipRule: "evenodd", d: "M12 8L18.5621 13.7316C19.0652 14.171 19.1468 14.9726 18.7443 15.5219C18.3418 16.0712 17.6076 16.1603 17.1045 15.7208L12 11.2624L6.89551 15.7208C6.39237 16.1603 5.6582 16.0712 5.25569 15.5219C4.85319 14.9726 4.93476 14.171 5.4379 13.7316L12 8Z" }),
        React__default["default"].createElement("path", { opacity: "0.32", fillRule: "evenodd", clipRule: "evenodd", d: "M12 16L18.5621 21.0151C19.0652 21.3996 19.1468 22.101 18.7443 22.5817C18.3418 23.0623 17.6076 23.1403 17.1045 22.7557L12 18.8546L6.89551 22.7557C6.39237 23.1403 5.6582 23.0623 5.25569 22.5817C4.85319 22.101 4.93476 21.3996 5.4379 21.0151L12 16Z" })));
};

var Icon$2X = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5V11H7.5C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H11V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V13H16.5C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11H13V7.5Z" })));
};

var Icon$2W = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 6.5C12.5523 6.5 13 6.94772 13 7.5V11H16.5C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13H13V16.5C13 17.0523 12.5523 17.5 12 17.5C11.4477 17.5 11 17.0523 11 16.5V13H7.5C6.94772 13 6.5 12.5523 6.5 12C6.5 11.4477 6.94772 11 7.5 11H11V7.5C11 6.94772 11.4477 6.5 12 6.5Z" })));
};

var Icon$2V = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 7.5C13 6.94772 12.5523 6.5 12 6.5C11.4477 6.5 11 6.94772 11 7.5V11H7.5C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13H11V16.5C11 17.0523 11.4477 17.5 12 17.5C12.5523 17.5 13 17.0523 13 16.5V13H16.5C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11H13V7.5Z" })));
};

var Icon$2U = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13C12.6261 13 10.7826 13 16.5 13C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11C11.3593 11 13.2503 11 7.5 11Z" })));
};

var Icon$2T = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM6.5 12C6.5 11.4477 6.94772 11 7.5 11H16.5C17.0523 11 17.5 11.4477 17.5 12C17.5 12.5523 17.0523 13 16.5 13H7.5C6.94772 13 6.5 12.5523 6.5 12Z" })));
};

var Icon$2S = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.5 11C6.94772 11 6.5 11.4477 6.5 12C6.5 12.5523 6.94772 13 7.5 13C12.6407 13 10.7497 13 16.5 13C17.0523 13 17.5 12.5523 17.5 12C17.5 11.4477 17.0523 11 16.5 11C10.7497 11 12.6407 11 7.5 11Z" }),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" })));
};

var Icon$2R = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M23.5013 16.8342L15.0233 1.67412C13.6612 -0.556558 10.3407 -0.559522 8.9767 1.67412L0.499073 16.8342C-0.893396 19.1136 0.792464 22 3.52167 22H20.478C23.205 22 24.8938 19.1159 23.5013 16.8342Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.99753C12.6618 5.99753 13.2005 6.53623 13.2005 7.19802V13.2005C13.2005 13.8623 12.6618 14.401 12 14.401C11.3382 14.401 10.7995 13.8623 10.7995 13.2005V7.19802C10.7995 6.53623 11.3382 5.99753 12 5.99753ZM10.7995 16.802C10.7995 16.1402 11.3382 15.6015 12 15.6015C12.6618 15.6015 13.2005 16.1402 13.2005 16.802C13.2005 17.4637 12.6618 18.0024 12 18.0024C11.3382 18.0024 10.7995 17.4637 10.7995 16.802Z" })));
};

var Icon$2Q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.0233 1.67412L23.5013 16.8342C24.8938 19.1159 23.205 22 20.478 22H3.52167C0.792464 22 -0.893396 19.1136 0.499073 16.8342L8.9767 1.67412C10.3407 -0.559522 13.6612 -0.556558 15.0233 1.67412ZM13.2005 7.19802C13.2005 6.53623 12.6618 5.99753 12 5.99753C11.3382 5.99753 10.7995 6.53623 10.7995 7.19802V13.2005C10.7995 13.8623 11.3382 14.401 12 14.401C12.6618 14.401 13.2005 13.8623 13.2005 13.2005V7.19802ZM12 15.6015C11.3382 15.6015 10.7995 16.1402 10.7995 16.802C10.7995 17.4637 11.3382 18.0024 12 18.0024C12.6618 18.0024 13.2005 17.4637 13.2005 16.802C13.2005 16.1402 12.6618 15.6015 12 15.6015Z" })));
};

var Icon$2P = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.7743 17.8436L13.3003 2.69073C12.7121 1.76987 11.2881 1.76965 10.6997 2.69072L2.22588 17.844L2.2058 17.8768C1.67816 18.7406 2.256 20 3.52167 20H20.478C21.7431 20 22.322 18.741 21.7941 17.8761L21.7743 17.8436ZM8.9767 1.67412C10.3407 -0.559522 13.6612 -0.556558 15.0233 1.67412L23.5013 16.8342C24.8938 19.1159 23.205 22 20.478 22H3.52167C0.792464 22 -0.893396 19.1136 0.499073 16.8342L8.9767 1.67412Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.99753C12.6618 5.99753 13.2005 6.53623 13.2005 7.19802V13.2005C13.2005 13.8623 12.6618 14.401 12 14.401C11.3382 14.401 10.7995 13.8623 10.7995 13.2005V7.19802C10.7995 6.53623 11.3382 5.99753 12 5.99753ZM10.7995 16.802C10.7995 16.1402 11.3382 15.6015 12 15.6015C12.6618 15.6015 13.2005 16.1402 13.2005 16.802C13.2005 17.4637 12.6618 18.0024 12 18.0024C11.3382 18.0024 10.7995 17.4637 10.7995 16.802Z" })));
};

var Icon$2O = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 160 160", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "160", height: "160", rx: "80", fill: "white" }),
        React__default["default"].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M120.726 104.348L85.418 41.2114C82.967 37.3744 77.0336 37.3735 74.582 41.2113L39.2745 104.35L39.1908 104.487C36.9923 108.086 39.4 113.333 44.6736 113.333H115.325C120.596 113.333 123.008 108.087 120.809 104.484L120.726 104.348ZM67.4029 36.9755C73.0861 27.6687 86.9215 27.681 92.5971 36.9755L127.922 100.143C133.724 109.65 126.687 121.667 115.325 121.667H44.6736C33.3019 121.667 26.2775 109.64 32.0795 100.143L67.4029 36.9755Z", fill: "#FFCD1C" }),
        React__default["default"].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M79.9991 54.9898C82.7566 54.9898 85.0012 57.2344 85.0012 59.9918V85.0021C85.0012 87.7595 82.7566 90.0041 79.9991 90.0041C77.2417 90.0041 74.9971 87.7595 74.9971 85.0021V59.9918C74.9971 57.2344 77.2417 54.9898 79.9991 54.9898ZM74.9971 100.008C74.9971 97.2507 77.2417 95.0062 79.9991 95.0062C82.7566 95.0062 85.0012 97.2507 85.0012 100.008C85.0012 102.766 82.7566 105.01 79.9991 105.01C77.2417 105.01 74.9971 102.766 74.9971 100.008Z", fill: "#FFCD1C" })));
};

var Icon$2N = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.98959 16.5963C5.59907 16.9868 5.59907 17.6199 5.98959 18.0105C6.38012 18.401 7.01328 18.401 7.40381 18.0105L12 13.4143L16.5962 18.0105C16.9867 18.401 17.6199 18.401 18.0104 18.0105C18.4009 17.6199 18.4009 16.9868 18.0104 16.5963L13.4142 12.0001L18.0104 7.40386C18.4009 7.01334 18.4009 6.38018 18.0104 5.98965C17.6199 5.59913 16.9867 5.59913 16.5962 5.98965L12 10.5858L7.4038 5.98965C7.01328 5.59913 6.38011 5.59913 5.98959 5.98965C5.59907 6.38018 5.59907 7.01334 5.98959 7.40387L10.5858 12.0001L5.98959 16.5963Z" })));
};

var Icon$2M = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5251 8.11091C9.13458 7.72039 8.50141 7.72039 8.11089 8.11091C7.72036 8.50144 7.72036 9.1346 8.11089 9.52513L10.5858 12L8.11089 14.4749C7.72036 14.8654 7.72036 15.4986 8.11089 15.8891C8.50141 16.2796 9.13458 16.2796 9.5251 15.8891L12 13.4142L14.4748 15.8891C14.8654 16.2796 15.4985 16.2796 15.8891 15.8891C16.2796 15.4986 16.2796 14.8654 15.8891 14.4749L13.4142 12L15.8891 9.52513C16.2796 9.1346 16.2796 8.50144 15.8891 8.11091C15.4985 7.72039 14.8654 7.72039 14.4748 8.11091L12 10.5858L9.5251 8.11091Z" }),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" })));
};

var Icon$2L = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM8.11089 8.11091C8.50141 7.72039 9.13458 7.72039 9.5251 8.11091L12 10.5858L14.4748 8.11091C14.8654 7.72039 15.4985 7.72039 15.8891 8.11091C16.2796 8.50144 16.2796 9.1346 15.8891 9.52513L13.4142 12L15.8891 14.4749C16.2796 14.8654 16.2796 15.4986 15.8891 15.8891C15.4985 16.2796 14.8654 16.2796 14.4748 15.8891L12 13.4142L9.5251 15.8891C9.13458 16.2796 8.50141 16.2796 8.11089 15.8891C7.72036 15.4986 7.72036 14.8654 8.11089 14.4749L10.5858 12L8.11089 9.52513C7.72036 9.1346 7.72036 8.50144 8.11089 8.11091Z" })));
};

var Icon$2K = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 4C1 5.10457 1.89543 6 3 6L21 6C22.1046 6 23 6.89543 23 8V20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20V4ZM21 14C21 15.1046 20.1046 16 19 16C17.8954 16 17 15.1046 17 14C17 12.8954 17.8954 12 19 12C20.1046 12 21 12.8954 21 14Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 2C1.89543 2 1 2.89543 1 4C1 5.10457 1.89543 6 3 6H4C3.44772 6 3 5.55228 3 5C3 4.44772 3.44772 4 4 4H20.9953C20.9218 2.88314 19.9926 2 18.8571 2H3Z" })));
};

var Icon$2J = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M1 4C1 2.89543 1.89543 2 3 2H18.8571C20.0406 2 21 2.95939 21 4.14286V6H3C1.89543 6 1 5.10457 1 4Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1 4C1 5.10457 1.89543 6 3 6L21 6C22.1046 6 23 6.89543 23 8V20C23 21.1046 22.1046 22 21 22H3C1.89543 22 1 21.1046 1 20V4ZM21 14C21 15.1046 20.1046 16 19 16C17.8954 16 17 15.1046 17 14C17 12.8954 17.8954 12 19 12C20.1046 12 21 12.8954 21 14Z" })));
};

var Icon$2I = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "1", y: "1", width: "22", height: "22", rx: "2" }),
        React__default["default"].createElement("path", { d: "M6.65018 6.75638H4.91204C4.43168 6.75638 4.04297 7.14509 4.04297 7.62545C4.04297 8.10582 4.43168 8.49452 4.91204 8.49452H6.65018V10.2327C6.65018 10.713 7.03889 11.1017 7.51925 11.1017C7.99962 11.1017 8.38832 10.713 8.38832 10.2327V8.49452H10.1265C10.6068 8.49452 10.9955 8.10582 10.9955 7.62545C10.9955 7.14509 10.6068 6.75638 10.1265 6.75638H8.38832V5.01824C8.38832 4.53788 7.99962 4.14917 7.51925 4.14917C7.03889 4.14917 6.65018 4.53788 6.65018 5.01824V6.75638Z" }),
        React__default["default"].createElement("path", { d: "M13.8586 8.49449H19.1309C19.6113 8.49449 20 8.10578 20 7.62542C20 7.14505 19.6113 6.75635 19.1309 6.75635H13.8586C13.3782 6.75635 12.9895 7.14505 12.9895 7.62542C12.9895 8.10578 13.3782 8.49449 13.8586 8.49449Z" }),
        React__default["default"].createElement("path", { d: "M13.8586 19.1791H19.1309C19.6113 19.1791 20 18.7904 20 18.3101C20 17.8297 19.6113 17.441 19.1309 17.441H13.8586C13.3782 17.441 12.9895 17.8297 12.9895 18.3101C12.9895 18.7904 13.3782 19.1791 13.8586 19.1791Z" }),
        React__default["default"].createElement("path", { d: "M13.8586 15.7029H19.1309C19.6113 15.7029 20 15.3142 20 14.8338C20 14.3534 19.6113 13.9647 19.1309 13.9647H13.8586C13.3782 13.9647 12.9895 14.3534 12.9895 14.8338C12.9895 15.3142 13.3782 15.7029 13.8586 15.7029Z" }),
        React__default["default"].createElement("path", { d: "M9.97712 19.0298C10.3166 18.6903 10.3166 18.1403 9.97712 17.8009L8.74819 16.5719L9.97712 15.343C10.3166 15.0036 10.3166 14.4536 9.97712 14.1141C9.63766 13.7746 9.08765 13.7746 8.74819 14.1141L7.51927 15.343L6.29034 14.1141C5.95088 13.7746 5.40088 13.7746 5.06142 14.1141C4.72196 14.4536 4.72196 15.0036 5.06142 15.343L6.29034 16.5719L5.06142 17.8009C4.72196 18.1403 4.72196 18.6903 5.06142 19.0298C5.40088 19.3692 5.95088 19.3692 6.29034 19.0298L7.51927 17.8009L8.74819 19.0298C9.08765 19.3692 9.63766 19.3692 9.97712 19.0298Z" })));
};

var Icon$2H = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 1C1.89543 1 1 1.89543 1 3V21C1 22.1046 1.89543 23 3 23H21C22.1046 23 23 22.1046 23 21V3C23 1.89543 22.1046 1 21 1H3ZM4.91204 6.75638H6.65018V5.01824C6.65018 4.53788 7.03889 4.14917 7.51925 4.14917C7.99962 4.14917 8.38832 4.53788 8.38832 5.01824V6.75638H10.1265C10.6068 6.75638 10.9955 7.14509 10.9955 7.62545C10.9955 8.10582 10.6068 8.49452 10.1265 8.49452H8.38832V10.2327C8.38832 10.713 7.99962 11.1017 7.51925 11.1017C7.03889 11.1017 6.65018 10.713 6.65018 10.2327V8.49452H4.91204C4.43168 8.49452 4.04297 8.10582 4.04297 7.62545C4.04297 7.14509 4.43168 6.75638 4.91204 6.75638ZM19.1309 8.49449H13.8586C13.3782 8.49449 12.9895 8.10578 12.9895 7.62542C12.9895 7.14505 13.3782 6.75635 13.8586 6.75635H19.1309C19.6113 6.75635 20 7.14505 20 7.62542C20 8.10578 19.6113 8.49449 19.1309 8.49449ZM19.1309 15.7029H13.8586C13.3782 15.7029 12.9895 15.3142 12.9895 14.8338C12.9895 14.3534 13.3782 13.9647 13.8586 13.9647H19.1309C19.6113 13.9647 20 14.3534 20 14.8338C20 15.3142 19.6113 15.7029 19.1309 15.7029ZM13.8586 19.1791H19.1309C19.6113 19.1791 20 18.7904 20 18.3101C20 17.8297 19.6113 17.441 19.1309 17.441H13.8586C13.3782 17.441 12.9895 17.8297 12.9895 18.3101C12.9895 18.7904 13.3782 19.1791 13.8586 19.1791ZM9.97712 19.0298C10.3166 18.6903 10.3166 18.1403 9.97712 17.8009L8.74819 16.5719L9.97712 15.343C10.3166 15.0036 10.3166 14.4536 9.97712 14.1141C9.63766 13.7746 9.08765 13.7746 8.74819 14.1141L7.51927 15.343L6.29034 14.1141C5.95088 13.7746 5.40088 13.7746 5.06142 14.1141C4.72196 14.4536 4.72196 15.0036 5.06142 15.343L6.29034 16.5719L5.06142 17.8009C4.72196 18.1403 4.72196 18.6903 5.06142 19.0298C5.40088 19.3692 5.95088 19.3692 6.29034 19.0298L7.51927 17.8009L8.74819 19.0298C9.08765 19.3692 9.63766 19.3692 9.97712 19.0298Z" })));
};

var Icon$2G = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 3C0 1.34314 1.34315 0 3 0H21C22.6569 0 24 1.34315 24 3V21C24 22.6569 22.6569 24 21 24H3C1.34314 24 0 22.6569 0 21V3ZM3 2C2.44771 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H21C21.5523 22 22 21.5523 22 21V3C22 2.44771 21.5523 2 21 2H3Z" }),
        React__default["default"].createElement("path", { d: "M6.65018 6.75638H4.91204C4.43168 6.75638 4.04297 7.14509 4.04297 7.62545C4.04297 8.10582 4.43168 8.49452 4.91204 8.49452H6.65018V10.2327C6.65018 10.713 7.03889 11.1017 7.51925 11.1017C7.99962 11.1017 8.38832 10.713 8.38832 10.2327V8.49452H10.1265C10.6068 8.49452 10.9955 8.10582 10.9955 7.62545C10.9955 7.14509 10.6068 6.75638 10.1265 6.75638H8.38832V5.01824C8.38832 4.53788 7.99962 4.14917 7.51925 4.14917C7.03889 4.14917 6.65018 4.53788 6.65018 5.01824V6.75638Z" }),
        React__default["default"].createElement("path", { d: "M13.8586 8.49449H19.1309C19.6113 8.49449 20 8.10578 20 7.62542C20 7.14505 19.6113 6.75635 19.1309 6.75635H13.8586C13.3782 6.75635 12.9895 7.14505 12.9895 7.62542C12.9895 8.10578 13.3782 8.49449 13.8586 8.49449Z" }),
        React__default["default"].createElement("path", { d: "M13.8586 19.1791H19.1309C19.6113 19.1791 20 18.7904 20 18.3101C20 17.8297 19.6113 17.441 19.1309 17.441H13.8586C13.3782 17.441 12.9895 17.8297 12.9895 18.3101C12.9895 18.7904 13.3782 19.1791 13.8586 19.1791Z" }),
        React__default["default"].createElement("path", { d: "M13.8586 15.7029H19.1309C19.6113 15.7029 20 15.3142 20 14.8338C20 14.3534 19.6113 13.9647 19.1309 13.9647H13.8586C13.3782 13.9647 12.9895 14.3534 12.9895 14.8338C12.9895 15.3142 13.3782 15.7029 13.8586 15.7029Z" }),
        React__default["default"].createElement("path", { d: "M9.97712 19.0298C10.3166 18.6903 10.3166 18.1403 9.97712 17.8009L8.74819 16.5719L9.97712 15.343C10.3166 15.0036 10.3166 14.4536 9.97712 14.1141C9.63766 13.7746 9.08765 13.7746 8.74819 14.1141L7.51927 15.343L6.29034 14.1141C5.95088 13.7746 5.40088 13.7746 5.06142 14.1141C4.72196 14.4536 4.72196 15.0036 5.06142 15.343L6.29034 16.5719L5.06142 17.8009C4.72196 18.1403 4.72196 18.6903 5.06142 19.0298C5.40088 19.3692 5.95088 19.3692 6.29034 19.0298L7.51927 17.8009L8.74819 19.0298C9.08765 19.3692 9.63766 19.3692 9.97712 19.0298Z" })));
};

var Icon$2F = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { opacity: "0.48" },
            React__default["default"].createElement("path", { d: "M12.0005 0C5.37525 0 0.00044632 5.36802 0.00044632 11.9937C0.00044632 18.6257 5.37525 24 12.0004 24C18.6293 24 23.9995 18.6256 23.9995 11.9937C23.9996 5.36802 18.6293 0 12.0005 0Z" })),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.2123 17.998C12.4016 17.9502 12.5748 17.8564 12.7317 17.7168C12.9701 17.505 13.0894 17.2136 13.0898 16.8427C13.0898 16.5089 12.9756 16.228 12.7479 16.0003C12.5198 15.7726 12.2389 15.6588 11.9051 15.6588C11.5659 15.6588 11.28 15.7726 11.0469 16.0003C10.8138 16.228 10.6969 16.5089 10.6969 16.8427C10.6969 17.219 10.8177 17.5119 11.0589 17.721C11.2168 17.8585 11.3925 17.9508 11.586 17.998H12.2123ZM15.0481 11.2355C15.3001 10.9888 15.5174 10.6964 15.7003 10.3572C15.8832 10.018 15.9746 9.62319 15.9739 9.17357C15.9739 8.60129 15.8134 8.07144 15.4931 7.58408C15.1724 7.09635 14.7178 6.71082 14.1297 6.4276C13.5416 6.14394 12.8636 6.00195 12.0953 6.00195C11.2692 6.00195 10.5456 6.17176 9.92586 6.51096C9.30577 6.84977 8.83422 7.27774 8.51084 7.79444C8.18783 8.31113 8.02614 8.82128 8.02614 9.32449C8.02614 9.56836 8.12802 9.79485 8.33177 10.004C8.5359 10.2132 8.78632 10.3178 9.08308 10.3178C9.58591 10.3178 9.92781 10.0184 10.1084 9.41943C10.2994 8.84715 10.5321 8.41419 10.8076 8.12015C11.0832 7.8261 11.5123 7.67908 12.0953 7.67908C12.5935 7.67908 13.0003 7.82496 13.3155 8.1163C13.6312 8.40764 13.7882 8.76497 13.7882 9.18905C13.7882 9.40628 13.7373 9.60733 13.6335 9.79295C13.5304 9.97819 13.4034 10.1464 13.2522 10.2977C13.1013 10.4486 12.8563 10.6724 12.5171 10.9691C12.13 11.3083 11.8229 11.6009 11.5948 11.8474C11.3671 12.094 11.1838 12.3799 11.0468 12.706C10.9091 13.0321 10.84 13.4176 10.84 13.8625C10.84 14.2175 10.9338 14.4849 11.1217 14.6651C11.3104 14.8454 11.5419 14.9353 11.8175 14.9353C12.3473 14.9353 12.6626 14.6598 12.7629 14.1087C12.8219 13.849 12.8655 13.6673 12.8945 13.5642C12.9234 13.4609 12.9643 13.3574 13.0176 13.254C13.0705 13.1506 13.1515 13.0368 13.2599 12.9121C13.3684 12.7879 13.5131 12.6436 13.6929 12.4792C14.3451 11.8965 14.7969 11.482 15.0481 11.2355Z" })));
};

var Icon$2E = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0.00044632 11.9937C0.00044632 5.36802 5.37525 0 12.0005 0C18.6293 0 23.9996 5.36802 23.9995 11.9937C23.9995 18.6256 18.6293 24 12.0004 24C5.37525 24 0.00044632 18.6257 0.00044632 11.9937ZM12.7317 17.7168C12.5748 17.8564 12.4016 17.9502 12.2123 17.998H11.586C11.3925 17.9508 11.2168 17.8585 11.0589 17.721C10.8177 17.5119 10.6969 17.219 10.6969 16.8427C10.6969 16.5089 10.8138 16.228 11.0469 16.0003C11.28 15.7726 11.5659 15.6588 11.9051 15.6588C12.2389 15.6588 12.5198 15.7726 12.7479 16.0003C12.9756 16.228 13.0898 16.5089 13.0898 16.8427C13.0894 17.2136 12.9701 17.505 12.7317 17.7168ZM15.7003 10.3572C15.5174 10.6964 15.3001 10.9888 15.0481 11.2355C14.7969 11.482 14.3451 11.8965 13.6929 12.4792C13.5131 12.6436 13.3684 12.7879 13.2599 12.9121C13.1515 13.0368 13.0705 13.1506 13.0176 13.254C12.9643 13.3574 12.9234 13.4609 12.8945 13.5642C12.8655 13.6673 12.8219 13.849 12.7629 14.1087C12.6626 14.6598 12.3473 14.9353 11.8175 14.9353C11.5419 14.9353 11.3104 14.8454 11.1217 14.6651C10.9338 14.4849 10.84 14.2175 10.84 13.8625C10.84 13.4176 10.9091 13.0321 11.0468 12.706C11.1838 12.3799 11.3671 12.094 11.5948 11.8474C11.8229 11.6009 12.13 11.3083 12.5171 10.9691C12.8563 10.6724 13.1013 10.4486 13.2522 10.2977C13.4034 10.1464 13.5304 9.97819 13.6335 9.79295C13.7373 9.60733 13.7882 9.40628 13.7882 9.18905C13.7882 8.76497 13.6312 8.40764 13.3155 8.1163C13.0003 7.82496 12.5935 7.67908 12.0953 7.67908C11.5123 7.67908 11.0832 7.8261 10.8076 8.12015C10.5321 8.4142 10.2994 8.84715 10.1084 9.41943C9.92781 10.0184 9.58591 10.3178 9.08308 10.3178C8.78632 10.3178 8.5359 10.2132 8.33177 10.004C8.12802 9.79485 8.02614 9.56836 8.02614 9.32449C8.02614 8.82128 8.18783 8.31113 8.51084 7.79444C8.83422 7.27774 9.30577 6.84977 9.92586 6.51096C10.5456 6.17176 11.2692 6.00195 12.0953 6.00195C12.8636 6.00195 13.5416 6.14394 14.1297 6.4276C14.7178 6.71082 15.1724 7.09635 15.4931 7.58408C15.8134 8.07144 15.9739 8.60129 15.9739 9.17357C15.9746 9.62319 15.8832 10.018 15.7003 10.3572Z" })));
};

var Icon$2D = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_1093_17235)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.2123 17.998C12.4016 17.9502 12.5748 17.8564 12.7316 17.7168C12.9701 17.505 13.0894 17.2136 13.0898 16.8427C13.0898 16.5089 12.9756 16.228 12.7479 16.0003C12.5198 15.7726 12.2389 15.6588 11.9051 15.6588C11.5659 15.6588 11.28 15.7726 11.0469 16.0003C10.8138 16.228 10.6969 16.5089 10.6969 16.8427C10.6969 17.219 10.8177 17.5119 11.0588 17.721C11.2168 17.8585 11.3925 17.9508 11.586 17.998H12.2123ZM15.0481 11.2355C15.3001 10.9888 15.5174 10.6964 15.7003 10.3572C15.8832 10.018 15.9746 9.62319 15.9739 9.17357C15.9739 8.60129 15.8134 8.07144 15.4931 7.58408C15.1724 7.09635 14.7178 6.71082 14.1297 6.4276C13.5416 6.14394 12.8636 6.00195 12.0953 6.00195C11.2691 6.00195 10.5456 6.17176 9.92585 6.51096C9.30576 6.84977 8.83421 7.27774 8.51083 7.79444C8.18782 8.31113 8.02613 8.82128 8.02613 9.32449C8.02613 9.56836 8.12801 9.79485 8.33176 10.004C8.5359 10.2132 8.78631 10.3178 9.08307 10.3178C9.5859 10.3178 9.9278 10.0184 10.1084 9.41943C10.2994 8.84715 10.5321 8.41419 10.8076 8.12015C11.0832 7.8261 11.5123 7.67908 12.0953 7.67908C12.5935 7.67908 13.0002 7.82496 13.3155 8.1163C13.6312 8.40764 13.7882 8.76497 13.7882 9.18905C13.7882 9.40628 13.7373 9.60733 13.6334 9.79295C13.5304 9.97819 13.4034 10.1464 13.2522 10.2977C13.1013 10.4486 12.8563 10.6724 12.5171 10.9691C12.13 11.3083 11.8229 11.6009 11.5948 11.8474C11.3671 12.094 11.1838 12.3799 11.0468 12.706C10.9091 13.0321 10.84 13.4176 10.84 13.8625C10.84 14.2175 10.9338 14.4849 11.1217 14.6651C11.3104 14.8454 11.5419 14.9353 11.8175 14.9353C12.3473 14.9353 12.6626 14.6598 12.7629 14.1087C12.8219 13.849 12.8655 13.6673 12.8945 13.5642C12.9234 13.4609 12.9643 13.3574 13.0176 13.254C13.0705 13.1506 13.1515 13.0368 13.2599 12.9121C13.3684 12.7879 13.5131 12.6436 13.6929 12.4792C14.3451 11.8965 14.7969 11.482 15.0481 11.2355Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_1093_17235" },
                React__default["default"].createElement("rect", { width: "24", height: "24" })))));
};

var Icon$2C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.691 1.1034C10.3526 0.955478 9.95691 1.05846 9.73354 1.35259C9.51016 1.64673 9.51717 2.05555 9.75051 2.34185C10.0134 2.66438 10.5059 3.75618 9.69399 5.04339C9.14525 5.91339 8.24187 6.84059 7.22756 7.87547L7.18068 7.9233L7.18067 7.92331C6.08199 9.04416 4.86006 10.2908 4.13127 11.5775C2.78309 13.9578 2.35163 16.1631 3.45565 18.5428C4.00968 19.737 5.3642 21.2517 6.88789 22.481C8.39215 23.6947 10.2493 24.7836 11.9086 24.9485C11.9707 24.957 12.0336 24.9581 12.0959 24.9518C12.1057 24.9509 12.1154 24.9498 12.1251 24.9485C14.92 24.5771 17.0137 23.0387 18.9438 20.9176C21.4948 18.1142 21.4974 15.1283 20.6956 13.1969C20.095 11.75 18.7206 9.96204 18.1289 9.26368C17.9026 8.99652 17.5288 8.9076 17.2064 9.0442C16.884 9.1808 16.6879 9.51118 16.7224 9.85962C16.7442 10.0793 16.7232 10.4072 16.6119 10.7594C16.649 9.65232 16.5369 8.41286 16.1699 7.17348C15.4748 4.82613 13.8652 2.49077 10.691 1.1034ZM17.3891 20.2386C17.5128 20.1096 17.6365 19.9769 17.7604 19.8408C19.8774 17.5143 19.7915 15.192 19.2179 13.8103C18.9451 13.1533 18.4534 12.3694 17.9694 11.6825C17.6148 12.4913 16.9506 13.3036 15.7781 13.7814C15.4955 13.8965 15.1719 13.8408 14.944 13.6378C14.7162 13.4347 14.6237 13.1197 14.7057 12.8256C15.0441 11.6118 15.2219 9.60731 14.6357 7.62774C14.1958 6.14201 13.326 4.66399 11.7412 3.52379C11.757 4.23986 11.5783 5.05509 11.0473 5.89697C10.3974 6.92727 9.37526 7.97009 8.41215 8.95266L8.37023 8.99543C7.21463 10.1745 6.13814 11.2808 5.52347 12.366C4.32925 14.4745 4.09385 16.1166 4.90705 17.8694C5.18478 18.4681 5.80828 19.2827 6.63864 20.1112C6.61653 19.9362 6.60716 19.7571 6.61215 19.574C6.66961 17.4619 7.8233 15.9881 8.47229 15.4642C8.66416 15.3093 8.91298 15.254 9.14651 15.3053C9.22584 14.4389 9.45917 13.4891 10.0232 12.7383C11.0872 11.322 12.0782 10.6161 12.5877 10.4226C12.9085 10.3007 13.2714 10.397 13.4895 10.662C13.7076 10.9271 13.7323 11.3017 13.551 11.5931C13.4203 11.8031 13.0554 12.8928 14.4797 14.2186C15.6026 15.2639 16.479 16.488 16.9725 17.694C17.3131 18.5262 17.4943 19.4124 17.3891 20.2386ZM8.21155 19.6175C8.23118 18.8962 8.42707 18.2821 8.66695 17.8019C8.91401 18.1664 9.27381 18.5034 9.78912 18.7383C10.0669 18.8649 10.3924 18.8225 10.6284 18.6289C10.8644 18.4353 10.9696 18.1243 10.8997 17.8271C10.7929 17.3734 10.6834 16.5875 10.7186 15.7693C10.7546 14.9331 10.9367 14.1861 11.3024 13.6993C11.5103 13.4226 11.7103 13.183 11.8978 12.977C12.0698 13.7357 12.5139 14.5746 13.3895 15.3897C14.3713 16.3037 15.0996 17.3418 15.4917 18.3C15.8923 19.279 15.8971 20.0505 15.6549 20.5429C15.6476 20.5577 15.6408 20.5727 15.6345 20.588C15.4229 21.0951 14.8802 21.7218 14.1301 22.2794C13.4489 22.7858 12.6865 23.1679 12.0294 23.333C11.3595 23.142 10.4018 22.6738 9.60021 22.0053C8.71522 21.2673 8.18939 20.432 8.21155 19.6175Z" })));
};

var Icon$2B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.2501 4.90742C11.3616 3.14525 10.7132 1.56824 10.2501 1C16.5605 3.75818 16.5396 10.1812 15.7403 13.0479C17.6959 12.2511 18.0192 10.3791 17.9364 9.5427C18.5638 10.2833 19.9666 12.1208 20.5582 13.5459C21.2977 15.3272 21.3425 18.1812 18.8327 20.9393C16.8249 23.1459 14.7394 24.5658 13.9476 25C15.6283 23.4485 15.8748 23.1804 16.7039 21.4948C17.533 19.8093 16.3453 17.0511 14.0821 14.9441C12.2714 13.2586 12.5657 11.6369 12.9392 11.0367C12.6031 11.1644 11.6574 11.7837 10.5639 13.2394C9.4703 14.6951 9.71979 17.2809 9.98123 18.3919C8.9056 17.9015 8.71139 16.8085 8.74874 16.3232C8.21093 16.7574 7.12185 18.1199 7.06807 20.0966C7.01429 22.0733 8.98777 24.1891 9.98123 25C7.58348 23.5251 4.62551 20.8244 3.5947 18.6026C2.56389 16.3807 2.92243 14.3121 4.28937 11.8986C5.01728 10.6135 6.26623 9.3392 7.4847 8.09602L7.4847 8.09601C8.55441 7.00461 9.60062 5.93718 10.2501 4.90742Z" })));
};

var Icon$2A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M10.2501 3.90742C11.3616 2.14525 10.7132 0.568236 10.2501 0C16.5605 2.75818 16.5396 9.18117 15.7403 12.0479C17.6959 11.2511 18.0192 9.37909 17.9364 8.5427C18.5638 9.28332 19.9666 11.1208 20.5582 12.5459C21.2977 14.3272 21.3425 17.1812 18.8327 19.9393C16.8249 22.1459 14.7453 23.6383 12.0234 24C13.7041 22.4485 15.8748 22.1804 16.7039 20.4948C17.533 18.8093 16.3453 16.0511 14.0821 13.9441C12.2714 12.2586 12.5657 10.6369 12.9392 10.0367C12.6031 10.1644 11.6574 10.7837 10.5639 12.2394C9.4703 13.6951 9.71979 16.2809 9.98123 17.3919C8.9056 16.9015 8.71139 15.8085 8.74874 15.3232C8.21093 15.7574 7.12185 17.1199 7.06807 19.0966C7.01429 21.0733 11.03 23.1891 12.0234 24C8.95579 23.7212 4.62551 19.8244 3.5947 17.6026C2.56389 15.3807 2.92243 13.3121 4.28937 10.8986C5.01728 9.61349 6.26623 8.3392 7.4847 7.09602C8.5544 6.00461 9.60062 4.93718 10.2501 3.90742Z" }),
        React__default["default"].createElement("path", { d: "M12.0195 24.0001C13.8262 23.6409 16.0809 21.9883 16.704 20.4948C17.5331 18.8093 16.3455 16.0511 14.0822 13.9442C12.2715 12.2586 12.5658 10.6369 12.9393 10.0367C12.6032 10.1644 11.6575 10.7838 10.564 12.2395C9.47042 13.6952 9.71991 16.281 9.98134 17.3919C8.90572 16.9015 8.71151 15.8085 8.74885 15.3233C8.21104 15.7574 7.12197 17.1199 7.06819 19.0966C6.99929 21.629 10.2925 23.6011 12.0195 24.0001Z" })));
};

var Icon$2z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 18.0025C12.6618 18.0025 13.2005 17.4638 13.2005 16.802V10.7995C13.2005 10.1377 12.6618 9.59903 12 9.59903C11.3382 9.59903 10.7995 10.1377 10.7995 10.7995V16.802C10.7995 17.4638 11.3382 18.0025 12 18.0025ZM10.7995 7.19805C10.7995 7.85984 11.3382 8.39854 12 8.39854C12.6618 8.39854 13.2005 7.85984 13.2005 7.19805C13.2005 6.53626 12.6618 5.99756 12 5.99756C11.3382 5.99756 10.7995 6.53626 10.7995 7.19805Z" })));
};

var Icon$2y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 12C0 5.40891 5.40891 0 12 0C18.5911 0 24 5.40891 24 12C24 18.5911 18.5911 24 12 24C5.40891 24 0 18.5911 0 12ZM13.2005 16.802C13.2005 17.4638 12.6618 18.0025 12 18.0025C11.3382 18.0025 10.7995 17.4638 10.7995 16.802V10.7995C10.7995 10.1377 11.3382 9.59903 12 9.59903C12.6618 9.59903 13.2005 10.1377 13.2005 10.7995V16.802ZM12 8.39854C11.3382 8.39854 10.7995 7.85984 10.7995 7.19805C10.7995 6.53626 11.3382 5.99756 12 5.99756C12.6618 5.99756 13.2005 6.53626 13.2005 7.19805C13.2005 7.85984 12.6618 8.39854 12 8.39854Z" })));
};

var Icon$2x = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M12 0C5.40891 0 0 5.40891 0 12C0 18.5911 5.40891 24 12 24C18.5911 24 24 18.5911 24 12C24 5.40891 18.5911 0 12 0Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 18.0025C12.6618 18.0025 13.2005 17.4638 13.2005 16.802V10.7995C13.2005 10.1377 12.6618 9.59903 12 9.59903C11.3382 9.59903 10.7995 10.1377 10.7995 10.7995V16.802C10.7995 17.4638 11.3382 18.0025 12 18.0025ZM10.7995 7.19805C10.7995 7.85984 11.3382 8.39854 12 8.39854C12.6618 8.39854 13.2005 7.85984 13.2005 7.19805C13.2005 6.53626 12.6618 5.99756 12 5.99756C11.3382 5.99756 10.7995 6.53626 10.7995 7.19805Z" })));
};

var Icon$2w = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M3.35896 15.349L6.14896 18.139C6.45896 18.459 6.99896 18.239 6.99896 17.789L6.99896 15.999L13.009 15.999C13.559 15.999 14.009 15.549 14.009 14.999C14.009 14.449 13.559 13.999 13.009 13.999L6.99896 13.999L6.99896 12.209C6.99896 11.759 6.45896 11.539 6.14896 11.859L3.35896 14.649C3.16896 14.839 3.16896 15.159 3.35896 15.349Z" }),
        React__default["default"].createElement("path", { d: "M17.0189 7.99899L11.0089 7.99899C10.4589 7.99899 10.0089 8.44899 10.0089 8.99899C10.0089 9.54899 10.4589 9.99899 11.0089 9.99899L17.0189 9.99899L17.0189 11.789C17.0189 12.239 17.5589 12.459 17.8689 12.139L20.6489 9.34899C20.8389 9.14899 20.8389 8.83899 20.6489 8.63899L17.8689 5.84899C17.5589 5.52899 17.0189 5.75899 17.0189 6.19899L17.0189 7.99899Z" })));
};

var Icon$2v = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M17.0189 7.99899L11.0089 7.99899C10.4589 7.99899 10.0089 8.44899 10.0089 8.99899C10.0089 9.54899 10.4589 9.99899 11.0089 9.99899L17.0189 9.99899L17.0189 11.789C17.0189 12.239 17.5589 12.459 17.8689 12.139L20.6489 9.34899C20.8389 9.14899 20.8389 8.83899 20.6489 8.63899L17.8689 5.84899C17.5589 5.52899 17.0189 5.75899 17.0189 6.19899L17.0189 7.99899ZM3.35893 15.349L6.14893 18.139C6.45893 18.459 6.99893 18.239 6.99893 17.789L6.99893 15.999L13.0089 15.999C13.5589 15.999 14.0089 15.549 14.0089 14.999C14.0089 14.449 13.5589 13.999 13.0089 13.999L6.99893 13.999L6.99893 12.209C6.99893 11.759 6.45893 11.539 6.14893 11.859L3.35893 14.649C3.16893 14.839 3.16893 15.159 3.35893 15.349Z" })));
};

var Icon$2u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z" }),
        React__default["default"].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16Z" })));
};

var Icon$2t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65 3.35002L5.86 6.14002C5.54 6.45002 5.76 6.99002 6.21 6.99002H8V13C8 13.55 8.45 14 9 14C9.55 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35 3.35002C9.16 3.16002 8.84 3.16002 8.65 3.35002Z" })));
};

var Icon$2s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.2396 4.37031C12.2098 4.40409 12.173 4.43117 12.1316 4.44973C12.0903 4.46829 12.0454 4.4779 12 4.4779C11.9546 4.4779 11.9097 4.46829 11.8684 4.44973C11.827 4.43117 11.7902 4.40409 11.7604 4.37031C10.8202 3.29323 9.20573 2 6.8747 2C3.669 2 1.0339 4.63125 1.00059 7.86615C0.972031 10.6891 1.98472 13.2958 4.09999 15.8349C5.09258 17.026 6.89215 18.9312 11.0481 21.7099C11.3287 21.8985 11.6603 21.9996 12 22C12.3396 21.9997 12.6713 21.8988 12.9519 21.7104C17.1079 18.9318 18.9074 17.0266 19.9 15.8354C22.0142 13.2969 23.028 10.6901 22.9994 7.86667C22.9661 4.63125 20.331 2 17.1253 2C14.7943 2 13.1798 3.29219 12.2396 4.37031ZM21.044 7.88735C21.022 5.7732 19.2833 4 17.1253 4C15.565 4 14.4389 4.8531 13.699 5.70157L13.6918 5.70979C13.4737 5.95706 13.2089 6.15028 12.9179 6.28095C12.6271 6.41154 12.3143 6.4779 12 6.4779C11.6856 6.4779 11.3729 6.41154 11.0821 6.28095C10.7911 6.15028 10.5263 5.95704 10.3082 5.70977L10.3017 5.7023C9.56079 4.85361 8.43449 4 6.8747 4C4.71659 4 2.97801 5.77331 2.95604 7.88684M21.044 7.88735C21.0668 10.1438 20.2779 12.2973 18.4113 14.5386C17.5587 15.5617 15.9277 17.318 12.0004 19.9569C8.07227 17.3176 6.44116 15.561 5.58851 14.5378C3.72137 12.2966 2.9333 10.143 2.95604 7.88684" })));
};

var Icon$2r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 22C11.6603 21.9996 11.3287 21.8985 11.0481 21.7099C6.89215 18.9312 5.09258 17.026 4.09999 15.8349C1.98472 13.2958 0.972031 10.6891 1.00059 7.86615C1.0339 4.63125 3.669 2 6.8747 2C9.20573 2 10.8202 3.29323 11.7604 4.37031C11.7902 4.40409 11.827 4.43117 11.8684 4.44973C11.9097 4.46829 11.9546 4.4779 12 4.4779C12.0454 4.4779 12.0903 4.46829 12.1316 4.44973C12.173 4.43117 12.2098 4.40409 12.2396 4.37031C13.1798 3.29219 14.7943 2 17.1253 2C20.331 2 22.9661 4.63125 22.9994 7.86667C23.028 10.6901 22.0142 13.2969 19.9 15.8354C18.9074 17.0266 17.1079 18.9318 12.9519 21.7104C12.6713 21.8988 12.3396 21.9997 12 22Z" })));
};

var Icon$2q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 3C2.89543 3 2 3.89543 2 5V7C2 8.10457 2.89543 9 4 9H6C7.10457 9 8 8.10457 8 7V5C8 3.89543 7.10457 3 6 3H4ZM13.5 4.5C12.6716 4.5 12 5.17157 12 6C12 6.82843 12.6716 7.5 13.5 7.5H20.5C21.3284 7.5 22 6.82843 22 6C22 5.17157 21.3284 4.5 20.5 4.5H13.5ZM2 17C2 15.8954 2.89543 15 4 15H6C7.10457 15 8 15.8954 8 17V19C8 20.1046 7.10457 21 6 21H4C2.89543 21 2 20.1046 2 19V17ZM13.5 16.5C12.6716 16.5 12 17.1716 12 18C12 18.8284 12.6716 19.5 13.5 19.5H20.5C21.3284 19.5 22 18.8284 22 18C22 17.1716 21.3284 16.5 20.5 16.5H13.5Z" })));
};

var Icon$2p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2C2.89543 2 2 2.89543 2 4V6C2 7.10457 2.89543 8 4 8H6C7.10457 8 8 7.10457 8 6V4C8 2.89543 7.10457 2 6 2H4ZM18 2C16.8954 2 16 2.89543 16 4V6C16 7.10457 16.8954 8 18 8H20C21.1046 8 22 7.10457 22 6V4C22 2.89543 21.1046 2 20 2H18ZM2 18C2 16.8954 2.89543 16 4 16H6C7.10457 16 8 16.8954 8 18V20C8 21.1046 7.10457 22 6 22H4C2.89543 22 2 21.1046 2 20V18ZM18 16C16.8954 16 16 16.8954 16 18V20C16 21.1046 16.8954 22 18 22H20C21.1046 22 22 21.1046 22 20V18C22 16.8954 21.1046 16 20 16H18Z" })));
};

var Icon$2o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" })));
};

var Icon$2n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 6.47002C14.76 6.47002 17 8.71002 17 11.47C17 11.98 16.9 12.47 16.76 12.93L19.82 15.99C21.21 14.76 22.31 13.22 23 11.46C21.27 7.08002 17 3.97002 12 3.97002C10.73 3.97002 9.51 4.17002 8.36 4.54002L10.53 6.71002C11 6.57002 11.49 6.47002 12 6.47002ZM2.71 3.13002C2.32 3.52002 2.32 4.15002 2.71 4.54002L4.68 6.51002C3.06 7.80002 1.77 9.50002 1 11.47C2.73 15.86 7 18.97 12 18.97C13.52 18.97 14.97 18.67 16.31 18.15L19.03 20.87C19.42 21.26 20.05 21.26 20.44 20.87C20.83 20.48 20.83 19.85 20.44 19.46L4.13 3.13002C3.74 2.74002 3.1 2.74002 2.71 3.13002ZM12 16.47C9.24 16.47 7 14.23 7 11.47C7 10.7 7.18 9.97002 7.49 9.33002L9.06 10.9C9.03 11.08 9 11.27 9 11.47C9 13.13 10.34 14.47 12 14.47C12.2 14.47 12.38 14.44 12.57 14.4L14.14 15.97C13.49 16.29 12.77 16.47 12 16.47ZM14.97 11.14C14.82 9.74002 13.72 8.65002 12.33 8.50002L14.97 11.14Z" })));
};

var Icon$2m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M17.7212 7.79053C17.3499 7.40303 16.747 7.40328 16.3752 7.79053L10.3174 14.1047L7.62503 11.2985C7.25325 10.911 6.65061 10.911 6.27883 11.2985C5.90706 11.686 5.90706 12.3141 6.27883 12.7016L9.6442 16.2093C9.82998 16.4029 10.0736 16.5 10.3172 16.5C10.5608 16.5 10.8046 16.4032 10.9904 16.2093L17.7212 9.19364C18.0929 8.80641 18.0929 8.17801 17.7212 7.79053Z" })));
};

var Icon$2l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM16.3752 7.79053C16.747 7.40328 17.3499 7.40303 17.7212 7.79053C18.0929 8.17801 18.0929 8.80641 17.7212 9.19364L10.9904 16.2093C10.8046 16.4032 10.5608 16.5 10.3172 16.5C10.0736 16.5 9.82998 16.4029 9.6442 16.2093L6.27883 12.7016C5.90706 12.3141 5.90706 11.686 6.27883 11.2985C6.65061 10.911 7.25325 10.911 7.62503 11.2985L10.3174 14.1047L16.3752 7.79053Z" })));
};

var Icon$2k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" }),
        React__default["default"].createElement("path", { d: "M17.7212 7.79053C17.3499 7.40303 16.747 7.40328 16.3752 7.79053L10.3174 14.1047L7.62503 11.2985C7.25325 10.911 6.65061 10.911 6.27883 11.2985C5.90706 11.686 5.90706 12.3141 6.27883 12.7016L9.6442 16.2093C9.82998 16.4029 10.0736 16.5 10.3172 16.5C10.5608 16.5 10.8046 16.4032 10.9904 16.2093L17.7212 9.19364C18.0929 8.80641 18.0929 8.17801 17.7212 7.79053Z" })));
};

var Icon$2j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { cx: "12", cy: "6", r: "5" }),
        React__default["default"].createElement("path", { d: "M2 19.6667C2 15.9848 4.98477 13 8.66667 13H15.3333C19.0152 13 22 15.9848 22 19.6667C22 21.5076 20.5076 23 18.6667 23H5.33333C3.49238 23 2 21.5076 2 19.6667Z" })));
};

var Icon$2i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { cx: "12", cy: "6", r: "5" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M2 19.6667C2 15.9848 4.98477 13 8.66667 13H15.3333C19.0152 13 22 15.9848 22 19.6667C22 21.5076 20.5076 23 18.6667 23H5.33333C3.49238 23 2 21.5076 2 19.6667Z" })));
};

var Icon$2h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M21.1006 16.1893C21.0185 16.0911 20.9379 15.9929 20.8588 15.8981C19.7712 14.5914 19.1132 13.8027 19.1132 10.1035C19.1132 8.1883 18.6519 6.61687 17.7428 5.4383C17.0724 4.56763 16.1662 3.90714 14.9718 3.41902C14.9564 3.41053 14.9427 3.39938 14.9313 3.38612C14.5017 1.9571 13.326 1 12.0001 1C10.6742 1 9.49908 1.9571 9.06947 3.38464C9.058 3.39742 9.04447 3.40821 9.02943 3.41656C6.24214 4.55634 4.88755 6.74308 4.88755 10.102C4.88755 13.8027 4.23053 14.5914 3.14192 15.8967C3.06282 15.9914 2.98223 16.0877 2.90017 16.1879C2.68818 16.4418 2.55387 16.7508 2.51313 17.0782C2.47239 17.4056 2.52693 17.7377 2.67028 18.0353C2.97531 18.6737 3.62542 19.07 4.36747 19.07H19.6382C20.3768 19.07 21.0225 18.6742 21.3285 18.0387C21.4725 17.7411 21.5275 17.4086 21.4871 17.0809C21.4467 16.7531 21.3126 16.4437 21.1006 16.1893Z" }),
        React__default["default"].createElement("path", { d: "M14.0332 22.4397C13.4201 22.804 12.7192 22.9966 12.0048 22.9972C11.2905 22.9965 10.5897 22.8038 9.9767 22.4396C9.3637 22.0754 8.86136 21.5531 8.52294 20.9283C8.50698 20.8983 8.4991 20.8647 8.50008 20.8308C8.50106 20.7969 8.51087 20.7638 8.52854 20.7348C8.54621 20.7058 8.57115 20.6818 8.60092 20.6652C8.6307 20.6486 8.6643 20.6399 8.69844 20.64H15.3122C15.3463 20.64 15.3798 20.6487 15.4095 20.6654C15.4392 20.682 15.4641 20.706 15.4817 20.735C15.4993 20.764 15.5091 20.7971 15.5101 20.8309C15.511 20.8648 15.5031 20.8983 15.4872 20.9283C15.1487 21.5532 14.6463 22.0755 14.0332 22.4397Z" })));
};

var Icon$2g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M21.1006 16.1893C21.0185 16.0911 20.9379 15.9929 20.8588 15.8981C19.7712 14.5914 19.1132 13.8027 19.1132 10.1035C19.1132 8.1883 18.6519 6.61687 17.7428 5.4383C17.0724 4.56763 16.1662 3.90714 14.9718 3.41902C14.9564 3.41053 14.9427 3.39938 14.9313 3.38612C14.5017 1.9571 13.326 1 12.0001 1C10.6742 1 9.49908 1.9571 9.06947 3.38464C9.058 3.39742 9.04447 3.40821 9.02943 3.41656C6.24214 4.55634 4.88755 6.74308 4.88755 10.102C4.88755 13.8027 4.23053 14.5914 3.14192 15.8967C3.06282 15.9914 2.98223 16.0877 2.90017 16.1879C2.68818 16.4418 2.55387 16.7508 2.51313 17.0782C2.47239 17.4056 2.52693 17.7377 2.67028 18.0353C2.97531 18.6737 3.62542 19.07 4.36747 19.07H19.6382C20.3768 19.07 21.0225 18.6742 21.3285 18.0387C21.4725 17.7411 21.5275 17.4086 21.4871 17.0809C21.4467 16.7531 21.3126 16.4437 21.1006 16.1893Z" }),
        React__default["default"].createElement("path", { d: "M14.0281 22.4423C13.415 22.8065 12.7141 22.9991 11.9997 22.9997C11.2854 22.9991 10.5846 22.8064 9.97158 22.4422C9.35857 22.0779 8.85623 21.5557 8.51781 20.9308C8.50185 20.9009 8.49397 20.8673 8.49495 20.8334C8.49594 20.7995 8.50574 20.7664 8.52341 20.7374C8.54108 20.7083 8.56602 20.6843 8.5958 20.6677C8.62557 20.6511 8.65917 20.6425 8.69332 20.6426H15.3071C15.3412 20.6425 15.3747 20.6513 15.4044 20.6679C15.4341 20.6846 15.459 20.7086 15.4766 20.7376C15.4942 20.7666 15.504 20.7996 15.5049 20.8335C15.5059 20.8674 15.498 20.9009 15.4821 20.9308C15.1436 21.5558 14.6412 22.078 14.0281 22.4423Z" })));
};

var Icon$2f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16ZM9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18Z" }),
        React__default["default"].createElement("path", { d: "M14.7618 16.1761C15.2868 15.7617 15.7617 15.2868 16.1761 14.7618L22.7071 21.2929C23.0977 21.6834 23.0977 22.3166 22.7071 22.7071C22.3166 23.0977 21.6834 23.0977 21.2929 22.7071L14.7618 16.1761Z" })));
};

var Icon$2e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 16C13.0899 16 16 13.0899 16 9.5C16 5.91015 13.0899 3 9.5 3C5.91015 3 3 5.91015 3 9.5C3 13.0899 5.91015 16 9.5 16ZM9.5 18C14.1944 18 18 14.1944 18 9.5C18 4.80558 14.1944 1 9.5 1C4.80558 1 1 4.80558 1 9.5C1 14.1944 4.80558 18 9.5 18Z", fillOpacity: "0.48" }),
        React__default["default"].createElement("path", { d: "M14.7618 16.1761C15.2868 15.7617 15.7617 15.2868 16.1761 14.7618L22.7071 21.2929C23.0977 21.6834 23.0977 22.3166 22.7071 22.7071C22.3166 23.0977 21.6834 23.0977 21.2929 22.7071L14.7618 16.1761Z" })));
};

var Icon$2d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.66731 7.05611C8.59612 7.21067 8.44985 7.31709 8.28106 7.33713L1.43179 8.15034C1.01763 8.19951 0.851309 8.71211 1.1575 8.99566L6.22134 13.685C6.34614 13.8005 6.40201 13.9727 6.36888 14.1397L5.02468 20.914C4.9434 21.3236 5.37885 21.6404 5.74277 21.4364L11.7613 18.0629C11.9096 17.9797 12.0904 17.9797 12.2387 18.0629L18.2572 21.4364C18.6212 21.6404 19.0566 21.3236 18.9753 20.914L17.6311 14.1397C17.598 13.9727 17.6539 13.8005 17.7787 13.685L22.8425 8.99566C23.1487 8.71211 22.9824 8.19951 22.5682 8.15034L15.7189 7.33713C15.5501 7.31709 15.4039 7.21067 15.3327 7.05612L12.4438 0.784422C12.2691 0.405193 11.7309 0.405193 11.5562 0.784421L8.66731 7.05611ZM12 4.60137L10.4839 7.89286C10.122 8.67854 9.37757 9.22099 8.51686 9.32318L4.91635 9.75067L7.58025 12.2175C8.21533 12.8057 8.49889 13.681 8.33063 14.5289L7.62422 18.089L10.7834 16.3182C11.5392 15.8946 12.4608 15.8946 13.2166 16.3182L16.3758 18.089L15.6694 14.5289C15.5011 13.681 15.7847 12.8056 16.4198 12.2175L19.0836 9.75067L15.4831 9.32318C14.6224 9.22099 13.878 8.67855 13.5161 7.89286L12 4.60137Z" })));
};

var Icon$2c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M11.5562 0.784421C11.7309 0.405193 12.2691 0.405193 12.4438 0.784422L15.3327 7.05612C15.4039 7.21067 15.5501 7.31709 15.7189 7.33713L22.5682 8.15034C22.9824 8.19951 23.1487 8.71211 22.8425 8.99566L17.7787 13.685C17.6539 13.8005 17.598 13.9727 17.6311 14.1397L18.9753 20.914C19.0566 21.3236 18.6212 21.6404 18.2572 21.4364L12.2387 18.0629C12.0904 17.9797 11.9096 17.9797 11.7613 18.0629L5.74277 21.4364C5.37885 21.6404 4.9434 21.3236 5.02468 20.914L6.36888 14.1397C6.40201 13.9727 6.34614 13.8005 6.22134 13.685L1.1575 8.99566C0.851309 8.71211 1.01763 8.19951 1.43179 8.15034L8.28106 7.33713C8.44985 7.31709 8.59612 7.21067 8.66731 7.05611L11.5562 0.784421Z" })));
};

var Icon$2b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M11.5562 0.784421C11.7309 0.405193 12.2691 0.405193 12.4438 0.784422L15.3327 7.05612C15.4039 7.21067 15.5501 7.31709 15.7189 7.33713L22.5682 8.15034C22.9824 8.19951 23.1487 8.71211 22.8425 8.99566L17.7787 13.685C17.6539 13.8005 17.598 13.9727 17.6311 14.1397L18.9753 20.914C19.0566 21.3236 18.6212 21.6404 18.2572 21.4364L12.2387 18.0629C12.0904 17.9797 11.9096 17.9797 11.7613 18.0629L5.74277 21.4364C5.37885 21.6404 4.9434 21.3236 5.02468 20.914L6.36888 14.1397C6.40201 13.9727 6.34614 13.8005 6.22134 13.685L1.1575 8.99566C0.851309 8.71211 1.01763 8.19951 1.43179 8.15034L8.28106 7.33713C8.44985 7.31709 8.59612 7.21067 8.66731 7.05611L11.5562 0.784421Z" })));
};

var Icon$2a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M20.1732 13.078C20.2172 12.726 20.2502 12.374 20.2502 12C20.2502 11.626 20.2172 11.274 20.1732 10.922L22.4942 9.107C22.7032 8.942 22.7582 8.645 22.6262 8.403L20.4262 4.597C20.2942 4.355 19.9972 4.267 19.7552 4.355L17.0162 5.455C16.4442 5.015 15.8282 4.652 15.1572 4.377L14.7392 1.462C14.7062 1.198 14.4752 1 14.2002 1H9.80024C9.52524 1 9.29424 1.198 9.26124 1.462L8.84324 4.377C8.17224 4.652 7.55624 5.026 6.98424 5.455L4.24524 4.355C3.99224 4.256 3.70624 4.355 3.57424 4.597L1.37424 8.403C1.23124 8.645 1.29724 8.942 1.50624 9.107L3.82724 10.922C3.78324 11.274 3.75024 11.637 3.75024 12C3.75024 12.363 3.78324 12.726 3.82724 13.078L1.50624 14.893C1.29724 15.058 1.24224 15.355 1.37424 15.597L3.57424 19.403C3.70624 19.645 4.00324 19.733 4.24524 19.645L6.98424 18.545C7.55624 18.985 8.17224 19.348 8.84324 19.623L9.26124 22.538C9.29424 22.802 9.52524 23 9.80024 23H14.2002C14.4752 23 14.7062 22.802 14.7392 22.538L15.1572 19.623C15.8282 19.348 16.4442 18.974 17.0162 18.545L19.7552 19.645C20.0082 19.744 20.2942 19.645 20.4262 19.403L22.6262 15.597C22.7582 15.355 22.7032 15.058 22.4942 14.893L20.1732 13.078ZM12.0002 15.85C9.87724 15.85 8.15024 14.123 8.15024 12C8.15024 9.877 9.87724 8.15 12.0002 8.15C14.1232 8.15 15.8502 9.877 15.8502 12C15.8502 14.123 14.1232 15.85 12.0002 15.85Z" })));
};

var Icon$29 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.15027 12C8.15027 14.123 9.87727 15.85 12.0003 15.85C14.1233 15.85 15.8503 14.123 15.8503 12C15.8503 9.87702 14.1233 8.15002 12.0003 8.15002C9.87727 8.15002 8.15027 9.87702 8.15027 12Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M20.1732 13.078C20.2172 12.726 20.2502 12.374 20.2502 12C20.2502 11.626 20.2172 11.274 20.1732 10.922L22.4942 9.107C22.7032 8.942 22.7582 8.645 22.6262 8.403L20.4262 4.597C20.2942 4.355 19.9972 4.267 19.7552 4.355L17.0162 5.455C16.4442 5.015 15.8282 4.652 15.1572 4.377L14.7392 1.462C14.7062 1.198 14.4752 1 14.2002 1H9.80024C9.52524 1 9.29424 1.198 9.26124 1.462L8.84324 4.377C8.17224 4.652 7.55624 5.026 6.98424 5.455L4.24524 4.355C3.99224 4.256 3.70624 4.355 3.57424 4.597L1.37424 8.403C1.23124 8.645 1.29724 8.942 1.50624 9.107L3.82724 10.922C3.78324 11.274 3.75024 11.637 3.75024 12C3.75024 12.363 3.78324 12.726 3.82724 13.078L1.50624 14.893C1.29724 15.058 1.24224 15.355 1.37424 15.597L3.57424 19.403C3.70624 19.645 4.00324 19.733 4.24524 19.645L6.98424 18.545C7.55624 18.985 8.17224 19.348 8.84324 19.623L9.26124 22.538C9.29424 22.802 9.52524 23 9.80024 23H14.2002C14.4752 23 14.7062 22.802 14.7392 22.538L15.1572 19.623C15.8282 19.348 16.4442 18.974 17.0162 18.545L19.7552 19.645C20.0082 19.744 20.2942 19.645 20.4262 19.403L22.6262 15.597C22.7582 15.355 22.7032 15.058 22.4942 14.893L20.1732 13.078ZM12.0002 15.85C9.87724 15.85 8.15024 14.123 8.15024 12C8.15024 9.877 9.87724 8.15 12.0002 8.15C14.1232 8.15 15.8502 9.877 15.8502 12C15.8502 14.123 14.1232 15.85 12.0002 15.85Z" })));
};

var Icon$28 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_1149_17426)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.7655 8.49505L23.4443 10.396C24.1639 11.2277 24.1639 12.6535 23.5643 13.4851L21.8854 15.3861C21.5256 15.7426 21.2858 16.4554 21.2858 16.9307V18.9505C21.2858 20.1386 20.3264 21.2079 19.0073 21.2079H16.9687C16.489 21.2079 15.7695 21.4455 15.4097 21.802L13.491 23.4653C12.6516 24.1782 11.3324 24.1782 10.493 23.4653L8.57427 21.802C8.21451 21.4455 7.49499 21.2079 7.01532 21.2079H4.97668C3.77748 21.2079 2.6982 20.2574 2.6982 18.9505V16.9307C2.6982 16.4554 2.45836 15.7426 2.0986 15.3861L0.53964 13.4851C-0.17988 12.6535 -0.17988 11.3465 0.53964 10.5148L2.0986 8.61386C2.45836 8.25742 2.6982 7.54455 2.6982 7.0693V5.0495C2.6982 3.86138 3.65756 2.79208 4.97668 2.79208H7.01532C7.49499 2.79208 8.21451 2.55445 8.57427 2.19802L10.3731 0.534653C11.2125 -0.178218 12.5316 -0.178218 13.3711 0.534653L15.2898 2.19802C15.6495 2.55445 16.3691 2.79208 16.8487 2.79208H18.8874C20.0866 2.79208 21.1659 3.74257 21.1659 5.0495V6.95049C21.1659 7.42574 21.4057 8.13861 21.7655 8.49505ZM16.3752 7.79053C16.747 7.40328 17.3499 7.40303 17.7212 7.79053C18.0929 8.17801 18.0929 8.80641 17.7212 9.19364L10.9904 16.2093C10.8046 16.4032 10.5608 16.5 10.3172 16.5C10.0736 16.5 9.82998 16.4029 9.6442 16.2093L6.27883 12.7016C5.90706 12.3141 5.90706 11.686 6.27883 11.2985C6.65061 10.911 7.25325 10.911 7.62503 11.2985L10.3174 14.1047L16.3752 7.79053Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_1149_17426" },
                React__default["default"].createElement("rect", { width: "24", height: "24" })))));
};

var Icon$27 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M23.4443 10.396L21.7655 8.49505C21.4057 8.13861 21.1659 7.42574 21.1659 6.95049V5.0495C21.1659 3.74257 20.0866 2.79208 18.8874 2.79208H16.8487C16.3691 2.79208 15.6495 2.55445 15.2898 2.19802L13.3711 0.534653C12.5316 -0.178218 11.2125 -0.178218 10.3731 0.534653L8.57427 2.19802C8.21451 2.55445 7.49499 2.79208 7.01532 2.79208H4.97668C3.65756 2.79208 2.6982 3.86138 2.6982 5.0495V7.0693C2.6982 7.54455 2.45836 8.25742 2.0986 8.61386L0.53964 10.5148C-0.17988 11.3465 -0.17988 12.6535 0.53964 13.4851L2.0986 15.3861C2.45836 15.7426 2.6982 16.4554 2.6982 16.9307V18.9505C2.6982 20.2574 3.77748 21.2079 4.97668 21.2079H7.01532C7.49499 21.2079 8.21451 21.4455 8.57427 21.802L10.493 23.4653C11.3324 24.1782 12.6516 24.1782 13.491 23.4653L15.4097 21.802C15.7695 21.4455 16.489 21.2079 16.9687 21.2079H19.0073C20.3264 21.2079 21.2858 20.1386 21.2858 18.9505V16.9307C21.2858 16.4554 21.5256 15.7426 21.8854 15.3861L23.5643 13.4851C24.1639 12.6535 24.1639 11.2277 23.4443 10.396Z" }),
        React__default["default"].createElement("path", { d: "M17.7212 7.79053C17.3499 7.40303 16.747 7.40328 16.3752 7.79053L10.3174 14.1047L7.62503 11.2985C7.25325 10.911 6.65061 10.911 6.27883 11.2985C5.90706 11.686 5.90706 12.3141 6.27883 12.7016L9.6442 16.2093C9.82998 16.4029 10.0736 16.5 10.3172 16.5C10.5608 16.5 10.8046 16.4032 10.9904 16.2093L17.7212 9.19364C18.0929 8.80641 18.0929 8.17801 17.7212 7.79053Z" })));
};

var Icon$26 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 4C5 2.34315 6.34315 1 8 1H19C20.6569 1 22 2.34315 22 4V17C22 18.6569 20.6569 20 19 20H8C6.34315 20 5 18.6569 5 17V4ZM8 3C7.44772 3 7 3.44772 7 4V17C7 17.5523 7.44772 18 8 18H19C19.5523 18 20 17.5523 20 17V4C20 3.44772 19.5523 3 19 3H8Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 6C3.55228 6 4 6.44772 4 7V18C4 19.6569 5.34315 21 7 21H16C16.5523 21 17 21.4477 17 22C17 22.5523 16.5523 23 16 23H7C4.23858 23 2 20.7614 2 18V7C2 6.44772 2.44772 6 3 6Z" })));
};

var Icon$25 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { x: "6", y: "1", width: "16", height: "18", rx: "2" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M4 6C2.89543 6 2 6.89543 2 8V19C2 21.2091 3.79086 23 6 23H15C16.1046 23 17 22.1046 17 21V20.7324C16.7058 20.9026 16.3643 21 16 21H7C5.34315 21 4 19.6569 4 18V6Z" })));
};

var Icon$24 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "2", y: "5", width: "16", height: "18", rx: "2" }),
        React__default["default"].createElement("rect", { x: "5", y: "1", width: "17", height: "19", rx: "2" })));
};

var Icon$23 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.4455 8.73398C20.5812 8.73398 22.3125 7.00267 22.3125 4.86699C22.3125 2.73131 20.5812 1 18.4455 1C16.3098 1 14.5785 2.73131 14.5785 4.86699C14.5785 5.24159 14.6318 5.60375 14.7311 5.94631L8.2323 9.81117C8.71482 10.2744 9.07742 10.8617 9.26887 11.5217L15.7677 7.65681C16.4626 8.32395 17.4061 8.73398 18.4455 8.73398ZM18.4455 6.73398C19.4766 6.73398 20.3125 5.8981 20.3125 4.86699C20.3125 3.83588 19.4766 3 18.4455 3C17.4144 3 16.5785 3.83588 16.5785 4.86699C16.5785 5.8981 17.4144 6.73398 18.4455 6.73398Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.33711 13.4082C9.3924 13.1479 9.42148 12.8778 9.42148 12.601C9.42148 10.4653 7.69017 8.73401 5.55449 8.73401C3.41881 8.73401 1.6875 10.4653 1.6875 12.601C1.6875 14.7367 3.41881 16.468 5.55449 16.468C6.69474 16.468 7.71972 15.9745 8.42749 15.1894L14.6522 18.3778C14.7865 17.6993 15.0983 17.0846 15.5373 16.5841L9.33711 13.4082ZM5.55449 14.468C6.5856 14.468 7.42148 13.6321 7.42148 12.601C7.42148 11.5699 6.5856 10.734 5.55449 10.734C4.52338 10.734 3.6875 11.5699 3.6875 12.601C3.6875 13.6321 4.52338 14.468 5.55449 14.468Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.3125 19.133C22.3125 21.2687 20.5812 23 18.4455 23C16.3098 23 14.5785 21.2687 14.5785 19.133C14.5785 16.9973 16.3098 15.266 18.4455 15.266C20.5812 15.266 22.3125 16.9973 22.3125 19.133ZM20.3125 19.133C20.3125 20.1641 19.4766 21 18.4455 21C17.4144 21 16.5785 20.1641 16.5785 19.133C16.5785 18.1019 17.4144 17.266 18.4455 17.266C19.4766 17.266 20.3125 18.1019 20.3125 19.133Z" })));
};

var Icon$22 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.4455 8.73398C20.5812 8.73398 22.3125 7.00267 22.3125 4.86699C22.3125 2.73131 20.5812 1 18.4455 1C16.3098 1 14.5785 2.73131 14.5785 4.86699C14.5785 7.00267 16.3098 8.73398 18.4455 8.73398Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.55449 16.468C7.69017 16.468 9.42148 14.7367 9.42148 12.601C9.42148 10.4653 7.69017 8.73401 5.55449 8.73401C3.41881 8.73401 1.6875 10.4653 1.6875 12.601C1.6875 14.7367 3.41881 16.468 5.55449 16.468Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6522 18.3778L8.42749 15.1894C8.87353 14.6946 9.19358 14.084 9.33709 13.4082L15.5373 16.5841C15.0983 17.0846 14.7865 17.6993 14.6522 18.3778Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.7312 5.94629L8.2323 9.81117C8.71482 10.2744 9.07742 10.8617 9.26887 11.5217L15.7677 7.65678C15.2852 7.19352 14.9226 6.60628 14.7312 5.94629Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.4455 23C20.5812 23 22.3125 21.2687 22.3125 19.133C22.3125 16.9973 20.5812 15.266 18.4455 15.266C16.3098 15.266 14.5785 16.9973 14.5785 19.133C14.5785 21.2687 16.3098 23 18.4455 23Z" })));
};

var Icon$21 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M18.4455 8.73398C20.5812 8.73398 22.3125 7.00267 22.3125 4.86699C22.3125 2.73131 20.5812 1 18.4455 1C16.3098 1 14.5785 2.73131 14.5785 4.86699C14.5785 7.00267 16.3098 8.73398 18.4455 8.73398Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M5.55449 16.468C7.69017 16.468 9.42148 14.7367 9.42148 12.601C9.42148 10.4653 7.69017 8.73401 5.55449 8.73401C3.41881 8.73401 1.6875 10.4653 1.6875 12.601C1.6875 14.7367 3.41881 16.468 5.55449 16.468Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.6522 18.3778L8.42749 15.1894C8.87353 14.6946 9.19358 14.084 9.33709 13.4082L15.5373 16.5841C15.0983 17.0846 14.7865 17.6993 14.6522 18.3778Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.7312 5.94629L8.2323 9.81117C8.71482 10.2744 9.07742 10.8617 9.26887 11.5217L15.7677 7.65678C15.2852 7.19352 14.9226 6.60628 14.7312 5.94629Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M18.4455 23C20.5812 23 22.3125 21.2687 22.3125 19.133C22.3125 16.9973 20.5812 15.266 18.4455 15.266C16.3098 15.266 14.5785 16.9973 14.5785 19.133C14.5785 21.2687 16.3098 23 18.4455 23Z" })));
};

var Icon$20 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.7159 1.60938H3.28413C2.8416 1.60972 2.40869 1.73851 2.03793 1.98011C1.66717 2.22171 1.37451 2.56573 1.19546 2.97042C1.01642 3.37511 0.958682 3.82307 1.02927 4.25993C1.09986 4.69679 1.29573 5.10377 1.59311 5.43148L9.14768 13.7399V21.5756C9.14775 21.7288 9.19098 21.8788 9.27242 22.0086C9.35386 22.1383 9.47021 22.2424 9.60813 22.3091C9.71835 22.3634 9.83973 22.3913 9.96263 22.3905C10.1479 22.3904 10.3275 22.3272 10.472 22.2113L14.5467 18.9515C14.642 18.8752 14.7189 18.7784 14.7718 18.6684C14.8247 18.5584 14.8522 18.4379 14.8523 18.3158V13.7399L22.4069 5.43148C22.7043 5.10377 22.9001 4.69679 22.9707 4.25993C23.0413 3.82307 22.9836 3.37511 22.8045 2.97042C22.6255 2.56573 22.3328 2.22171 21.9621 1.98011C21.5913 1.73851 21.1584 1.60972 20.7159 1.60938ZM21.0739 4.22185C21.1371 4.15219 21.1788 4.06568 21.1938 3.97281C21.2088 3.87995 21.1965 3.78472 21.1584 3.6987C21.1204 3.61267 21.0582 3.53954 20.9794 3.48818C20.9007 3.43691 20.8088 3.40954 20.7149 3.40937H3.28508C3.19117 3.40954 3.09932 3.43691 3.02064 3.48818C2.94182 3.53954 2.87961 3.61267 2.84155 3.6987C2.80349 3.78472 2.79122 3.87995 2.80622 3.97281C2.8212 4.06548 2.86268 4.15182 2.92567 4.2214C2.92581 4.22155 2.92553 4.22125 2.92567 4.2214L10.9477 13.0439V19.5256L13.0523 17.8419V13.0439L21.0739 4.22185Z" })));
};

var Icon$1$ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M20.7159 1.60938H3.28413C2.8416 1.60972 2.40869 1.73851 2.03793 1.98011C1.66717 2.22171 1.37451 2.56573 1.19546 2.97042C1.01642 3.37511 0.958682 3.82307 1.02927 4.25993C1.09986 4.69679 1.29573 5.10377 1.59311 5.43148L9.14768 13.7399V21.5756C9.14775 21.7288 9.19098 21.8788 9.27242 22.0086C9.35386 22.1383 9.47021 22.2424 9.60813 22.3091C9.71835 22.3634 9.83973 22.3913 9.96263 22.3905C10.1479 22.3904 10.3275 22.3272 10.472 22.2113L12 20.9888L14.5467 18.9515C14.642 18.8752 14.7189 18.7784 14.7718 18.6684C14.8247 18.5584 14.8522 18.4379 14.8523 18.3158V13.7399L22.4069 5.43148C22.7043 5.10377 22.9001 4.69679 22.9707 4.25993C23.0413 3.82307 22.9836 3.37511 22.8045 2.97042C22.6255 2.56573 22.3328 2.22171 21.9621 1.98011C21.5913 1.73851 21.1584 1.60972 20.7159 1.60938Z" })));
};

var Icon$1_ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M9.14771 13.7399V21.5756C9.14777 21.7288 9.191 21.8788 9.27244 22.0086C9.35388 22.1383 9.47023 22.2424 9.60815 22.3091C9.71838 22.3634 9.83976 22.3913 9.96265 22.3906C10.1479 22.3904 10.3275 22.3272 10.472 22.2113L12 20.9888L14.5467 18.9515C14.642 18.8752 14.719 18.7784 14.7719 18.6684C14.8248 18.5584 14.8523 18.4379 14.8523 18.3158V13.7399C12.4501 13.7399 10.3699 13.7398 9.14771 13.7399Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M20.7159 1.60938H3.28413C2.8416 1.60972 2.40869 1.73851 2.03793 1.98011C1.66717 2.22171 1.37451 2.56573 1.19546 2.97042C1.01642 3.37511 0.958682 3.82307 1.02927 4.25993C1.09986 4.69679 1.29573 5.10377 1.59311 5.43148L9.14768 13.7399C11.0045 13.7399 13.0827 13.7399 14.8523 13.7399L22.4069 5.43148C22.7043 5.10377 22.9001 4.69679 22.9707 4.25993C23.0413 3.82307 22.9836 3.37511 22.8045 2.97042C22.6255 2.56573 22.3328 2.22171 21.9621 1.98011C21.5913 1.73851 21.1584 1.60972 20.7159 1.60938Z" })));
};

var Icon$1Z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.1565 1H5.88296C4.31477 1 3.03918 2.27559 3.03918 3.84378V20.1564C3.03918 21.7246 4.31478 23.0002 5.88292 23.0002H20.1565C20.6009 23.0002 20.9612 22.6399 20.9612 22.1955V1.8047C20.9612 1.3603 20.601 1 20.1565 1ZM4.64863 3.84378C4.64863 3.16332 5.20259 2.60941 5.88296 2.60941H19.3518V17.3127H5.88296C5.44091 17.3127 5.02216 17.4144 4.64863 17.5952V3.84378ZM5.88301 21.3908C5.2025 21.3908 4.64863 20.8369 4.64863 20.1564C4.64863 19.4759 5.20251 18.9221 5.88296 18.9221H19.3518V21.3908H5.88301Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.77393 6.29441C6.77393 5.85223 7.13238 5.49377 7.57457 5.49377L16.4255 5.49378C16.8677 5.49378 17.2261 5.85223 17.2261 6.29442C17.2261 6.7366 16.8677 7.09505 16.4255 7.09505L7.57457 7.09505C7.13238 7.09505 6.77393 6.7366 6.77393 6.29441Z" })));
};

var Icon$1Y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.1566 1H5.88309C4.3149 1 3.03931 2.27559 3.03931 3.84378V20.1564C3.03931 21.7246 4.3149 23.0002 5.88304 23.0002H20.1566C20.601 23.0002 20.9613 22.6399 20.9613 22.1955V1.8047C20.9613 1.3603 20.6011 1 20.1566 1ZM5.88313 21.3908C5.20262 21.3908 4.64876 20.8369 4.64876 20.1564C4.64876 19.4759 5.20263 18.9221 5.88309 18.9221H19.3519V21.3908H5.88313ZM7.57457 5.49377C7.13238 5.49377 6.77393 5.85223 6.77393 6.29441C6.77393 6.7366 7.13238 7.09505 7.57457 7.09505L16.4255 7.09505C16.8677 7.09505 17.2261 6.7366 17.2261 6.29441C17.2261 5.85223 16.8677 5.49378 16.4255 5.49378L7.57457 5.49377Z" })));
};

var Icon$1X = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.6488 20.1565C4.6488 20.837 5.20267 21.3908 5.88318 21.3908H19.352V18.9221H5.88313C5.20268 18.9221 4.6488 19.476 4.6488 20.1565Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.77393 6.29441C6.77393 5.85223 7.13238 5.49377 7.57457 5.49377H16.4255C16.8677 5.49377 17.2261 5.85223 17.2261 6.29441C17.2261 6.7366 16.8677 7.09505 16.4255 7.09505L7.57457 7.09505C7.13238 7.09505 6.77393 6.7366 6.77393 6.29441Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M20.1566 1H5.88309C4.3149 1 3.03931 2.27559 3.03931 3.84378V20.1564C3.03931 21.7246 4.3149 23.0002 5.88304 23.0002H20.1566C20.601 23.0002 20.9613 22.6399 20.9613 22.1955V1.8047C20.9613 1.3603 20.6011 1 20.1566 1ZM5.88313 21.3908C5.20262 21.3908 4.64876 20.8369 4.64876 20.1564C4.64876 19.4759 5.20263 18.9221 5.88309 18.9221H19.3519V21.3908H5.88313ZM7.57457 5.49377C7.13238 5.49377 6.77393 5.85223 6.77393 6.29441C6.77393 6.7366 7.13238 7.09505 7.57457 7.09505L16.4255 7.09505C16.8677 7.09505 17.2261 6.7366 17.2261 6.29441C17.2261 5.85223 16.8677 5.49378 16.4255 5.49378L7.57457 5.49377Z" })));
};

var Icon$1W = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M7.74995 9.95776C7.30812 9.95776 6.94995 10.3159 6.94995 10.7578C6.94995 11.1996 7.30812 11.5578 7.74995 11.5578H16.25C16.6918 11.5578 17.05 11.1996 17.05 10.7578C17.05 10.3159 16.6918 9.95776 16.25 9.95776H7.74995Z" }),
        React__default["default"].createElement("path", { d: "M6.94995 14.2578C6.94995 13.8159 7.30812 13.4578 7.74995 13.4578H16.25C16.6918 13.4578 17.05 13.8159 17.05 14.2578C17.05 14.6996 16.6918 15.0578 16.25 15.0578H7.74995C7.30812 15.0578 6.94995 14.6996 6.94995 14.2578Z" }),
        React__default["default"].createElement("path", { d: "M7.74995 16.9578C7.30812 16.9578 6.94995 17.3159 6.94995 17.7578C6.94995 18.1996 7.30812 18.5578 7.74995 18.5578H10.75C11.1918 18.5578 11.55 18.1996 11.55 17.7578C11.55 17.3159 11.1918 16.9578 10.75 16.9578H7.74995Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.5149 1.46811C15.1836 1.1669 14.7519 1 14.3041 1H5.3C4.30589 1 3.5 1.80589 3.5 2.8V21.2C3.5 22.1941 4.30589 23 5.3 23H18.7C19.6941 23 20.5 22.1941 20.5 21.2V6.79627C20.5 6.28913 20.2861 5.80551 19.9108 5.46437L15.5149 1.46811ZM5.1 2.8V21.2C5.1 21.3105 5.18954 21.4 5.3 21.4H18.7C18.8105 21.4 18.9 21.3105 18.9 21.2V7.3H16C15.0058 7.3 14.2 6.49411 14.2 5.5V2.6H5.3C5.18954 2.6 5.1 2.68954 5.1 2.8ZM15.8 3.88957L17.7914 5.7H16C15.8895 5.7 15.8 5.61046 15.8 5.5V3.88957Z" })));
};

var Icon$1V = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M15.1797 7.44531C14.3504 7.44531 13.6758 6.77066 13.6758 5.94141V1H5.98438C4.68126 1 3.62109 2.06017 3.62109 3.36328V20.6367C3.62109 21.9398 4.68126 23 5.98438 23H18.0156C19.3187 23 20.3789 21.9398 20.3789 20.6367V7.44531H15.1797ZM7.14453 16.4688H10.2692C10.6252 16.4688 10.9138 16.7573 10.9138 17.1133C10.9138 17.4692 10.6252 17.7578 10.2692 17.7578H7.14453C6.78858 17.7578 6.5 17.4692 6.5 17.1133C6.5 16.7573 6.78858 16.4688 7.14453 16.4688ZM6.5 13.6758C6.5 13.3198 6.78858 13.0312 7.14453 13.0312H16.5977C16.9536 13.0312 17.2422 13.3198 17.2422 13.6758C17.2422 14.0317 16.9536 14.3203 16.5977 14.3203H7.14453C6.78858 14.3203 6.5 14.0317 6.5 13.6758ZM16.5977 9.59375C16.9536 9.59375 17.2422 9.88233 17.2422 10.2383C17.2422 10.5942 16.9536 10.8828 16.5977 10.8828H7.14453C6.78858 10.8828 6.5 10.5942 6.5 10.2383C6.5 9.88233 6.78858 9.59375 7.14453 9.59375H16.5977Z" }),
        React__default["default"].createElement("path", { d: "M14.9648 5.94143C14.9648 6.0599 15.0612 6.15627 15.1797 6.15627H20.0916C19.9737 5.9386 19.822 5.73866 19.6398 5.56623L15.4966 1.64653C15.3358 1.49442 15.1567 1.36754 14.9649 1.26733V5.94143H14.9648Z" })));
};

var Icon$1U = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M18.39 23H5.60992C4.60162 23 3.78418 22.1826 3.78418 21.1743V2.82574C3.78422 1.81739 4.60162 1 5.60992 1H13.989C14.4557 1 14.9047 1.17875 15.2437 1.49947L19.6447 5.6631C20.0092 6.00792 20.2157 6.48758 20.2157 6.98937V21.1743C20.2157 22.1826 19.3983 23 18.39 23Z" }),
        React__default["default"].createElement("path", { d: "M15.3775 6.47719H20.1418C20.0518 6.16949 19.882 5.88765 19.6447 5.6631L15.2436 1.49947C15.0223 1.29009 14.754 1.14172 14.4646 1.0636V5.56431C14.4646 6.06847 14.8733 6.47719 15.3775 6.47719Z" }),
        React__default["default"].createElement("path", { d: "M17.3453 10.8828H6.65469C6.28447 10.8828 5.98438 10.5942 5.98438 10.2383C5.98438 9.88233 6.28447 9.59375 6.65469 9.59375H17.3453C17.7155 9.59375 18.0156 9.88233 18.0156 10.2383C18.0156 10.5942 17.7155 10.8828 17.3453 10.8828Z" }),
        React__default["default"].createElement("path", { d: "M17.3453 14.3203H6.65469C6.28447 14.3203 5.98438 14.0317 5.98438 13.6758C5.98438 13.3198 6.28447 13.0312 6.65469 13.0312H17.3453C17.7155 13.0312 18.0156 13.3198 18.0156 13.6758C18.0156 14.0317 17.7155 14.3203 17.3453 14.3203Z" }),
        React__default["default"].createElement("path", { d: "M10.3341 17.7578H6.65469C6.28447 17.7578 5.98438 17.4692 5.98438 17.1133C5.98438 16.7573 6.28447 16.4688 6.65469 16.4688H10.3341C10.7043 16.4688 11.0044 16.7573 11.0044 17.1133C11.0044 17.4692 10.7042 17.7578 10.3341 17.7578Z" })));
};

var Icon$1T = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M21.3867 8.81698C21.0182 8.45396 20.5214 8.25087 20.0041 8.25178C19.8073 8.25158 19.6113 8.2779 19.4215 8.33004C18.7606 7.42342 18.0278 6.57142 17.2303 5.78227C16.4341 4.98633 15.5796 4.25097 14.6738 3.58233C14.7759 3.2309 14.7805 2.85831 14.6871 2.50448C14.5936 2.15064 14.4057 1.82889 14.1434 1.57368C13.7736 1.20623 13.2734 1 12.7521 1C12.2308 1 11.7307 1.20623 11.3609 1.57368L6.30012 6.63443C5.92141 6.99957 5.70259 7.49974 5.69144 8.0257C5.69117 8.28469 5.74256 8.54113 5.8426 8.78001C5.94263 9.0189 6.0893 9.23544 6.27403 9.41697V9.46044C6.45539 9.64479 6.67209 9.79064 6.91115 9.88926C7.15021 9.98787 7.40672 10.0372 7.6653 10.0343C7.85716 10.036 8.04801 10.0066 8.23051 9.94739C8.54354 10.3706 8.87397 10.7879 9.22179 11.1995C6.43925 13.5299 3.08281 16.5037 2.7089 16.9211C2.37607 17.2555 2.14959 17.6809 2.05797 18.1437C1.96635 18.6065 2.01369 19.0861 2.19403 19.5221C2.37437 19.958 2.67965 20.3309 3.07144 20.5938C3.46323 20.8566 3.92402 20.9977 4.39582 20.9993C4.71772 21.0073 5.0379 20.9498 5.33687 20.8302C5.63584 20.7107 5.90736 20.5315 6.13491 20.3037C6.5175 19.9124 9.52612 16.5646 11.8565 13.7038C12.2652 14.0516 12.726 14.3908 13.0999 14.6951C12.9863 15.0299 12.9651 15.3892 13.0385 15.735C13.112 16.0809 13.2774 16.4005 13.5173 16.6603L13.5608 16.7037C13.7433 16.8865 13.9603 17.0313 14.1991 17.1298C14.4378 17.2283 14.6938 17.2786 14.9521 17.2776C15.2107 17.2805 15.4672 17.2312 15.7062 17.1326C15.9453 17.0339 16.162 16.8881 16.3433 16.7037L21.4041 11.643C21.5904 11.4574 21.7379 11.2365 21.8381 10.9933C21.9382 10.7501 21.9889 10.4894 21.9873 10.2263C21.9857 9.96333 21.9318 9.70327 21.8286 9.46131C21.7255 9.21934 21.5753 9.00032 21.3867 8.81698ZM10.6044 12.5995C8.30007 15.4255 5.27406 18.808 4.93493 19.1124C4.79198 19.2521 4.60004 19.3303 4.40017 19.3303C4.20029 19.3303 4.00836 19.2521 3.8654 19.1124C3.79303 19.0426 3.73566 18.9588 3.69679 18.8661C3.65792 18.7734 3.63836 18.6738 3.63931 18.5733C3.63852 18.4741 3.65819 18.3758 3.69708 18.2845C3.73598 18.1932 3.79328 18.111 3.8654 18.0428C4.19582 17.7037 7.57835 14.6777 10.4044 12.3647L10.5 12.4691L10.6044 12.5995ZM18.1172 9.30393L14.0304 13.3908C13.1886 12.7706 12.395 12.0875 11.6565 11.3474C10.9187 10.6066 10.2358 9.81325 9.61308 8.9735L13.6999 4.89534C14.5417 5.51559 15.3352 6.19868 16.0738 6.93877C16.8136 7.67447 17.4967 8.46512 18.1172 9.30393ZM20.3693 10.2517C20.3701 10.2953 20.3621 10.3386 20.3456 10.3789C20.3292 10.4193 20.3047 10.4559 20.2737 10.4865L15.2564 15.5472C15.2258 15.5783 15.1892 15.6027 15.1488 15.6192C15.1085 15.6356 15.0652 15.6437 15.0216 15.6429C14.9341 15.6417 14.8503 15.6075 14.7869 15.5472H14.7434C14.7124 15.5165 14.6877 15.48 14.6709 15.4397C14.6541 15.3994 14.6455 15.3561 14.6455 15.3125C14.6455 15.2688 14.6541 15.2256 14.6709 15.1853C14.6877 15.145 14.7124 15.1084 14.7434 15.0777L19.752 10.0691C19.8069 10.0205 19.8787 9.99549 19.952 9.99956C20.0074 10.0006 20.0621 10.0126 20.1129 10.035C20.1637 10.0574 20.2095 10.0897 20.2476 10.13C20.2977 10.1597 20.3396 10.2016 20.3693 10.2517ZM13.0304 3.29538L12.5956 3.73015L7.98703 8.28656C7.93073 8.34053 7.85631 8.37154 7.77834 8.37351C7.73388 8.37491 7.68968 8.36624 7.64903 8.34818C7.60838 8.33011 7.57233 8.3031 7.54357 8.26917L7.43053 8.26047C7.37491 8.1983 7.34417 8.11781 7.34417 8.03439C7.34417 7.95098 7.37491 7.87049 7.43053 7.80831L12.4913 2.74757C12.52 2.71944 12.554 2.69727 12.5913 2.68235C12.6286 2.66742 12.6685 2.66004 12.7087 2.66061C12.765 2.66113 12.8207 2.67383 12.8717 2.69784C12.9227 2.72185 12.968 2.75661 13.0043 2.79974C13.0654 2.85761 13.1022 2.93662 13.107 3.02065C13.1118 3.10468 13.0844 3.18739 13.0304 3.2519V3.29538Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9 22.2C9 21.7582 9.35817 21.4 9.8 21.4L20.2 21.4C20.6418 21.4 21 21.7582 21 22.2C21 22.6419 20.6418 23 20.2 23L9.8 23C9.35817 23 9 22.6419 9 22.2Z" })));
};

var Icon$1S = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M21.489 9.03777C20.9785 8.5266 20.2079 8.44183 19.6022 8.7666C18.8884 7.75867 18.0674 6.78117 17.1448 5.85964C16.2222 4.9373 15.2443 4.11659 14.2361 3.40222C14.5594 2.79507 14.4673 2.01831 13.9168 1.46796C13.2935 0.844014 12.2772 0.844014 11.6523 1.46796L6.36063 6.75714C5.73649 7.38109 5.73649 8.39703 6.36223 9.02257L6.40943 9.06976C6.72152 9.38175 7.13201 9.53773 7.54171 9.53773C7.80257 9.53773 8.06101 9.46734 8.2971 9.34093C8.76041 9.99527 9.27014 10.636 9.82466 11.2584C6.77431 13.7222 2.99265 17.1123 2.59893 17.5059C1.80036 18.3034 1.80036 19.6025 2.59893 20.4009C2.99824 20.8 3.52235 21 4.04646 21C4.57057 21 5.0955 20.8 5.49481 20.4009C5.88849 20.0065 9.2789 16.226 11.7435 13.1766C12.366 13.7318 13.007 14.2414 13.6624 14.7045C13.3367 15.3109 13.4223 16.0804 13.9328 16.59L13.9809 16.6388L13.9817 16.6396C14.2938 16.9516 14.7043 17.1083 15.1147 17.1083C15.5244 17.1083 15.9349 16.9515 16.247 16.6396L21.5378 11.3504C22.162 10.7264 22.162 9.7105 21.489 9.03777Z" }),
        React__default["default"].createElement("rect", { x: "9", y: "20", width: "12", height: "3", rx: "1.5" })));
};

var Icon$1R = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M21.4891 9.03777C20.9786 8.5266 20.208 8.44183 19.6023 8.7666C18.8885 7.75867 18.0675 6.78117 17.1449 5.85964C16.2223 4.9373 15.2444 4.11659 14.2362 3.40222C14.5595 2.79507 14.4674 2.01831 13.9169 1.46796C13.2936 0.844014 12.2773 0.844014 11.6524 1.46796L6.36073 6.75714C5.73659 7.38109 5.73659 8.39703 6.36233 9.02257L6.40953 9.06976C6.72162 9.38175 7.13211 9.53773 7.54181 9.53773C7.80267 9.53773 8.06111 9.46734 8.2972 9.34093C9.5 11.5 12 13.5 13.6625 14.7045C13.3368 15.3109 13.4224 16.0804 13.9329 16.59L13.981 16.6388L13.9818 16.6396C14.2939 16.9516 14.7044 17.1083 15.1148 17.1083C15.5245 17.1083 15.935 16.9515 16.2471 16.6396L21.5379 11.3504C22.1621 10.7264 22.1621 9.7105 21.4891 9.03777Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M9.82466 11.2584C6.77431 13.7222 2.99265 17.1124 2.59893 17.5059C1.80036 18.3035 1.80036 19.6026 2.59893 20.4009C2.99824 20.8 3.52235 21 4.04646 21C4.57057 21 5.0955 20.8 5.49481 20.4009C5.88849 20.0065 9.2789 16.226 11.7435 13.1767C11 12.5 10.5 12 9.82466 11.2584Z" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "9", y: "20", width: "12", height: "3", rx: "1.5" })));
};

var Icon$1Q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_1216_17643)" },
            React__default["default"].createElement("path", { d: "M16.3514 9.56078C16.6652 9.87187 16.6673 10.3784 16.3562 10.6921L12.5682 14.5126C12.2571 14.8263 11.7506 14.8285 11.4368 14.5174C11.1231 14.2063 11.1209 13.6998 11.432 13.386L15.2201 9.5656C15.5311 9.25185 16.0377 9.2497 16.3514 9.56078Z" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.71772 0.00012207C9.2759 0.00012207 8.91772 0.358294 8.91772 0.800122C8.91772 1.24195 9.2759 1.60012 9.71772 1.60012H11.2002V3.74336C5.97179 4.15121 1.8562 8.52307 1.8562 13.8562C1.8562 19.4585 6.39778 24.0001 12.0001 24.0001C17.6024 24.0001 22.144 19.4585 22.144 13.8562C22.144 11.3667 21.2472 9.08676 19.7591 7.32163L20.8109 6.27002C21.1233 5.95762 21.1234 5.45109 20.811 5.13865C20.4986 4.8262 19.9921 4.82617 19.6796 5.13857L18.6351 6.18293C17.0452 4.80697 15.0233 3.91683 12.8002 3.74337V1.60012H14.2828C14.7246 1.60012 15.0828 1.24195 15.0828 0.800122C15.0828 0.358294 14.7246 0.00012207 14.2828 0.00012207H9.71772ZM12.0001 22.4001C16.7188 22.4001 20.544 18.5748 20.544 13.8562C20.544 9.13751 16.7188 5.31228 12.0001 5.31228C7.28143 5.31228 3.4562 9.13751 3.4562 13.8562C3.4562 18.5748 7.28143 22.4001 12.0001 22.4001Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_1216_17643" },
                React__default["default"].createElement("rect", { width: "24", height: "24" })))));
};

var Icon$1P = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_1216_17642)" },
            React__default["default"].createElement("path", { d: "M19.935 6.51244L21.4422 5.00531C21.7168 4.73072 21.7168 4.28555 21.4422 4.01095C21.1676 3.73636 20.7224 3.73636 20.4478 4.01095L18.9407 5.51808C17.2495 4.03688 15.0834 3.08672 12.7031 2.92969V1.40625H13.4062C13.7946 1.40625 14.1094 1.09144 14.1094 0.703125C14.1094 0.314812 13.7946 0 13.4062 0H10.5938C10.2054 0 9.89062 0.314812 9.89062 0.703125C9.89062 1.09144 10.2054 1.40625 10.5938 1.40625H11.2969V2.92969C5.80781 3.2925 1.45312 7.87359 1.45312 13.4531C1.45312 19.2689 6.18422 24 12 24C17.8158 24 22.5469 19.2689 22.5469 13.4531C22.5469 10.7977 21.5607 8.36864 19.935 6.51244ZM12 21.1875C7.73531 21.1875 4.26562 17.7178 4.26562 13.4531C4.26562 9.18844 7.73531 5.71875 12 5.71875C16.2647 5.71875 19.7344 9.18844 19.7344 13.4531C19.7344 17.7178 16.2647 21.1875 12 21.1875Z" }),
            React__default["default"].createElement("path", { d: "M12 7.125C8.51062 7.125 5.67188 9.96375 5.67188 13.4531C5.67188 16.9425 8.51062 19.7812 12 19.7812C15.4894 19.7812 18.3281 16.9425 18.3281 13.4531C18.3281 9.96375 15.4894 7.125 12 7.125ZM15.4791 10.9688L12.4973 13.9505C12.2227 14.2247 11.7773 14.2252 11.5027 13.9505C11.2284 13.6758 11.2284 13.2305 11.5027 12.9558L14.4844 9.97406C14.7591 9.69937 15.2044 9.69937 15.4791 9.97406C15.7537 10.2487 15.7537 10.6941 15.4791 10.9688Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_1216_17642" },
                React__default["default"].createElement("rect", { width: "24", height: "24" })))));
};

var Icon$1O = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_1216_17641)" },
            React__default["default"].createElement("path", { opacity: "0.48", d: "M19.935 6.51244L21.4422 5.00531C21.7168 4.73072 21.7168 4.28555 21.4422 4.01095C21.1676 3.73636 20.7224 3.73636 20.4478 4.01095L18.9407 5.51808C17.2495 4.03688 15.0834 3.08672 12.7031 2.92969V1.40625H13.4062C13.7946 1.40625 14.1094 1.09144 14.1094 0.703125C14.1094 0.314812 13.7946 0 13.4062 0H10.5938C10.2054 0 9.89062 0.314812 9.89062 0.703125C9.89062 1.09144 10.2054 1.40625 10.5938 1.40625H11.2969V2.92969C5.80781 3.2925 1.45312 7.87359 1.45312 13.4531C1.45312 19.2689 6.18422 24 12 24C17.8158 24 22.5469 19.2689 22.5469 13.4531C22.5469 10.7977 21.5607 8.36864 19.935 6.51244ZM12 21.1875C7.73531 21.1875 4.26562 17.7178 4.26562 13.4531C4.26562 9.18844 7.73531 5.71875 12 5.71875C16.2647 5.71875 19.7344 9.18844 19.7344 13.4531C19.7344 17.7178 16.2647 21.1875 12 21.1875Z" }),
            React__default["default"].createElement("path", { d: "M12 7.125C8.51062 7.125 5.67188 9.96375 5.67188 13.4531C5.67188 16.9425 8.51062 19.7812 12 19.7812C15.4894 19.7812 18.3281 16.9425 18.3281 13.4531C18.3281 9.96375 15.4894 7.125 12 7.125ZM15.4791 10.9688L12.4973 13.9505C12.2227 14.2247 11.7773 14.2252 11.5027 13.9505C11.2284 13.6758 11.2284 13.2305 11.5027 12.9558L14.4844 9.97406C14.7591 9.69937 15.2044 9.69937 15.4791 9.97406C15.7537 10.2487 15.7537 10.6941 15.4791 10.9688Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_1216_17641" },
                React__default["default"].createElement("rect", { width: "24", height: "24" })))));
};

var Icon$1N = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.45666 3.99963C7.52036 3.99963 7.01214 5.09487 7.61667 5.80986L9.11732 7.58469V10.2075L5.01074 15.4798C3.57843 17.3187 4.88883 20.0004 7.21974 20.0004H16.7803C19.1112 20.0004 20.4216 17.3187 18.9893 15.4798L14.8827 10.2075V7.58469L16.3833 5.80986C16.9879 5.09487 16.4796 3.99963 15.5433 3.99963H8.45666ZM9.53419 5.59963L10.4573 6.69141C10.6252 6.88998 10.7173 7.14161 10.7173 7.40164V10.3792C10.7173 10.6241 10.6356 10.862 10.4851 11.0551L6.27303 16.463C5.65918 17.2511 6.22078 18.4004 7.21974 18.4004H16.7803C17.7792 18.4004 18.3408 17.2511 17.727 16.463L13.5149 11.0551C13.3644 10.862 13.2827 10.6241 13.2827 10.3792V7.40164C13.2827 7.14161 13.3748 6.88998 13.5427 6.69141L14.4658 5.59963H9.53419Z" })));
};

var Icon$1M = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "1", y: "1", width: "22", height: "22", rx: "4" }),
        React__default["default"].createElement("path", { d: "M8.80407 5.73356L15.1369 5.73353C15.3761 5.73353 15.4959 6.0228 15.3268 6.19198L13.8123 7.70645C13.762 7.75682 13.7337 7.82513 13.7337 7.89635V10.545C13.7337 10.6072 13.7553 10.6674 13.7947 10.7155L17.5945 15.3391C18.5546 16.5074 17.7235 18.2662 16.2113 18.2662H7.71693C6.21711 18.2662 5.38204 16.5326 6.31695 15.3598L10.02 10.7146C10.0579 10.6671 10.0786 10.6081 10.0786 10.5472V7.88981C10.0786 7.82248 10.0533 7.75761 10.0077 7.70804L8.60637 6.18389C8.44809 6.01173 8.57021 5.73356 8.80407 5.73356Z" })));
};

var Icon$1L = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 1C2.79086 1 1 2.79086 1 5L1 19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1L5 1ZM15.1369 5.7335L8.80407 5.73353C8.57021 5.73353 8.44809 6.0117 8.60637 6.18385L10.0077 7.70801C10.0533 7.75758 10.0786 7.82245 10.0786 7.88978V10.5472C10.0786 10.608 10.0579 10.667 10.02 10.7146L6.31695 15.3598C5.38204 16.5325 6.21711 18.2662 7.71693 18.2662H16.2113C17.7235 18.2662 18.5546 16.5074 17.5945 15.3391L13.7947 10.7155C13.7553 10.6674 13.7337 10.6071 13.7337 10.545V7.89632C13.7337 7.8251 13.762 7.75679 13.8123 7.70642L15.3268 6.19195C15.4959 6.02277 15.3761 5.7335 15.1369 5.7335Z" })));
};

var Icon$1K = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.9 6.6144L17.1934 6.89199C14.8555 7.81055 12.196 7.26858 10.4039 5.50837C9.44485 4.56637 7.99556 4.33255 6.78892 4.92514L6.1 5.26348V14.2183C8.36275 13.4332 10.906 13.9827 12.6463 15.6921C13.5376 16.5676 14.8604 16.8372 16.0233 16.3803L17.9 15.6429V6.6144ZM4.95699 4.04228C4.67725 4.17966 4.5 4.46419 4.5 4.77584V15.5987C4.5 16.122 5.04881 16.4639 5.51851 16.2332L6.08361 15.9557C7.89991 15.0636 10.0815 15.4156 11.5251 16.8336C12.8668 18.1514 14.8579 18.5572 16.6084 17.8695L18.8302 16.9965C19.2343 16.8378 19.5 16.4479 19.5 16.0138V5.63313C19.5 4.97675 18.8391 4.52636 18.2282 4.76638L16.6084 5.40281C14.8579 6.09053 12.8668 5.68475 11.5251 4.3669C10.0815 2.94895 7.89991 2.59698 6.08361 3.48899L4.95699 4.04228Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.5 4.77572C4.5 4.46407 4.67725 4.17954 4.95699 4.04216L6.08361 3.48886C7.89991 2.59686 10.0815 2.94882 11.5251 4.36678C12.8668 5.68463 14.8579 6.0904 16.6084 5.40268L18.2282 4.76626C18.8391 4.52624 19.5 4.97663 19.5 5.63301V16.0136C19.5 16.4478 19.2343 16.8377 18.8302 16.9964L16.6084 17.8694C14.8579 18.5571 12.8668 18.1513 11.5251 16.8334C10.0858 15.4198 7.91302 15.0657 6.1 15.9475V21.1999C6.1 21.6417 5.74183 21.9999 5.3 21.9999C4.85817 21.9999 4.5 21.6417 4.5 21.1999V4.77572ZM17.1934 6.89187L17.9 6.61427V15.6428L16.0233 16.3802C14.8604 16.837 13.5376 16.5675 12.6463 15.692C10.906 13.9826 8.36275 13.4331 6.1 14.2182V5.26335L6.78892 4.92502C7.99556 4.33242 9.44485 4.56625 10.4039 5.50825C12.196 7.26846 14.8555 7.81043 17.1934 6.89187Z" })));
};

var Icon$1J = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { x: "2.69995", y: "4", width: "1.6", height: "18", rx: "0.8" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M6.30005 4.7758C6.30005 4.46414 6.4773 4.17962 6.75704 4.04223L7.88366 3.48894C9.69996 2.59693 11.8815 2.9489 13.3251 4.36685C14.6668 5.68471 16.658 6.09048 18.4084 5.40276L20.0283 4.76634C20.6392 4.52631 21.3 4.97671 21.3 5.63309V16.0137C21.3 16.4478 21.0343 16.8377 20.6303 16.9965L18.4084 17.8694C16.658 18.5571 14.6668 18.1514 13.3251 16.8335C11.8815 15.4156 9.69996 15.0636 7.88366 15.9556L7.31856 16.2331C6.84886 16.4638 6.30005 16.1219 6.30005 15.5986V4.7758Z" })));
};

var Icon$1I = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { x: "2.69995", y: "4", width: "1.6", height: "18", rx: "0.8" }),
        React__default["default"].createElement("path", { d: "M6.30005 4.7758C6.30005 4.46414 6.4773 4.17962 6.75704 4.04223L7.88366 3.48894C9.69996 2.59693 11.8815 2.9489 13.3251 4.36685C14.6668 5.68471 16.658 6.09048 18.4084 5.40276L20.0283 4.76634C20.6392 4.52631 21.3 4.97671 21.3 5.63309V16.0137C21.3 16.4478 21.0343 16.8377 20.6303 16.9965L18.4084 17.8694C16.658 18.5571 14.6668 18.1514 13.3251 16.8335C11.8815 15.4156 9.69996 15.0636 7.88366 15.9556L7.31856 16.2331C6.84886 16.4638 6.30005 16.1219 6.30005 15.5986V4.7758Z" })));
};

var Icon$1H = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3288 19.7429C16.6049 21.1536 14.4013 22 12 22C6.47715 22 2 17.5228 2 12C2 9.59871 2.84638 7.3951 4.25709 5.67123L18.3288 19.7429ZM19.743 18.3287L5.67131 4.25702C7.39517 2.84635 9.59875 2 12 2C17.5228 2 22 6.47715 22 12C22 14.4013 21.1536 16.6048 19.743 18.3287ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" })));
};

var Icon$1G = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.0001 18C17.6096 18.3905 16.9764 18.3905 16.5859 18L6.00008 7.41417C5.60955 7.02364 5.60955 6.39048 6.00008 5.99995C6.3906 5.60943 7.02376 5.60943 7.41429 5.99995L18.0001 16.5857C18.3906 16.9763 18.3906 17.6094 18.0001 18Z" })));
};

var Icon$1F = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM16.5859 18C16.9764 18.3905 17.6096 18.3905 18.0001 18C18.3906 17.6095 18.3906 16.9763 18.0001 16.5858L7.41429 6C7.02377 5.60948 6.3906 5.60948 6.00008 6C5.60955 6.39052 5.60955 7.02369 6.00008 7.41421L16.5859 18Z" })));
};

var Icon$1E = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 9C12.825 9 13.5 8.325 13.5 7.5C13.5 6.675 12.825 6 12 6C11.175 6 10.5 6.675 10.5 7.5C10.5 8.325 11.175 9 12 9ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5ZM12 15C11.175 15 10.5 15.675 10.5 16.5C10.5 17.325 11.175 18 12 18C12.825 18 13.5 17.325 13.5 16.5C13.5 15.675 12.825 15 12 15Z" })));
};

var Icon$1D = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 12C0 5.40891 5.40891 0 12 0C18.5911 0 24 5.40891 24 12C24 18.5911 18.5911 24 12 24C5.40891 24 0 18.5911 0 12ZM13.5 7.5C13.5 8.325 12.825 9 12 9C11.175 9 10.5 8.325 10.5 7.5C10.5 6.675 11.175 6 12 6C12.825 6 13.5 6.675 13.5 7.5ZM10.5 12C10.5 11.175 11.175 10.5 12 10.5C12.825 10.5 13.5 11.175 13.5 12C13.5 12.825 12.825 13.5 12 13.5C11.175 13.5 10.5 12.825 10.5 12ZM10.5 16.5C10.5 15.675 11.175 15 12 15C12.825 15 13.5 15.675 13.5 16.5C13.5 17.325 12.825 18 12 18C11.175 18 10.5 17.325 10.5 16.5Z" })));
};

var Icon$1C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M12 0C5.40891 0 0 5.40891 0 12C0 18.5911 5.40891 24 12 24C18.5911 24 24 18.5911 24 12C24 5.40891 18.5911 0 12 0Z" }),
        React__default["default"].createElement("path", { d: "M12 9C12.825 9 13.5 8.325 13.5 7.5C13.5 6.675 12.825 6 12 6C11.175 6 10.5 6.675 10.5 7.5C10.5 8.325 11.175 9 12 9ZM12 10.5C11.175 10.5 10.5 11.175 10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5ZM12 15C11.175 15 10.5 15.675 10.5 16.5C10.5 17.325 11.175 18 12 18C12.825 18 13.5 17.325 13.5 16.5C13.5 15.675 12.825 15 12 15Z" })));
};

var Icon$1B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M9 12C9 11.175 8.325 10.5 7.5 10.5C6.675 10.5 6 11.175 6 12C6 12.825 6.675 13.5 7.5 13.5C8.325 13.5 9 12.825 9 12ZM10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5C11.175 10.5 10.5 11.175 10.5 12ZM15 12C15 12.825 15.675 13.5 16.5 13.5C17.325 13.5 18 12.825 18 12C18 11.175 17.325 10.5 16.5 10.5C15.675 10.5 15 11.175 15 12Z" })));
};

var Icon$1A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M0 12C0 5.40891 5.40891 0 12 0C18.5911 0 24 5.40891 24 12C24 18.5911 18.5911 24 12 24C5.40891 24 0 18.5911 0 12ZM7.5 10.5C8.325 10.5 9 11.175 9 12C9 12.825 8.325 13.5 7.5 13.5C6.675 13.5 6 12.825 6 12C6 11.175 6.675 10.5 7.5 10.5ZM12 13.5C11.175 13.5 10.5 12.825 10.5 12C10.5 11.175 11.175 10.5 12 10.5C12.825 10.5 13.5 11.175 13.5 12C13.5 12.825 12.825 13.5 12 13.5ZM16.5 13.5C15.675 13.5 15 12.825 15 12C15 11.175 15.675 10.5 16.5 10.5C17.325 10.5 18 11.175 18 12C18 12.825 17.325 13.5 16.5 13.5Z" })));
};

var Icon$1z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M12 0C5.40891 0 0 5.40891 0 12C0 18.5911 5.40891 24 12 24C18.5911 24 24 18.5911 24 12C24 5.40891 18.5911 0 12 0Z" }),
        React__default["default"].createElement("path", { d: "M9 12C9 11.175 8.325 10.5 7.5 10.5C6.675 10.5 6 11.175 6 12C6 12.825 6.675 13.5 7.5 13.5C8.325 13.5 9 12.825 9 12ZM10.5 12C10.5 12.825 11.175 13.5 12 13.5C12.825 13.5 13.5 12.825 13.5 12C13.5 11.175 12.825 10.5 12 10.5C11.175 10.5 10.5 11.175 10.5 12ZM15 12C15 12.825 15.675 13.5 16.5 13.5C17.325 13.5 18 12.825 18 12C18 11.175 17.325 10.5 16.5 10.5C15.675 10.5 15 11.175 15 12Z" })));
};

var Icon$1y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 4C1.44772 4 1 4.44772 1 5V19.0012C1 19.5535 1.44772 20.0012 2 20.0012H18.0536C18.4143 20.0012 18.747 19.807 18.9244 19.493L22.8779 12.4924C23.0502 12.1872 23.0502 11.8141 22.8779 11.5089L18.9244 4.50826C18.747 4.19421 18.4143 4 18.0536 4H2ZM5.61571 10.1544C4.76597 10.1544 4.07712 10.8432 4.07712 11.6929C4.07712 12.5427 4.76597 13.2315 5.61571 13.2315C6.46544 13.2315 7.15428 12.5427 7.15428 11.6929C7.15428 10.8432 6.46544 10.1544 5.61571 10.1544ZM10.2315 11.6929C10.2315 10.8432 10.9203 10.1544 11.7701 10.1544C12.6198 10.1544 13.3087 10.8432 13.3087 11.6929C13.3087 12.5427 12.6198 13.2315 11.7701 13.2315C10.9203 13.2315 10.2315 12.5427 10.2315 11.6929ZM17.9243 10.1544C17.0746 10.1544 16.3858 10.8432 16.3858 11.6929C16.3858 12.5427 17.0746 13.2315 17.9243 13.2315C18.7741 13.2315 19.4629 12.5427 19.4629 11.6929C19.4629 10.8432 18.7741 10.1544 17.9243 10.1544Z" })));
};

var Icon$1x = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.1204 5.56158C21.4902 5.19189 21.4984 4.57923 21.1171 4.19232C21.1164 4.19166 21.1158 4.19099 21.1151 4.19033L19.8103 2.88536C19.8096 2.88468 19.809 2.884 19.8083 2.88333C19.4214 2.50227 18.8094 2.5102 18.4395 2.87928C18.4392 2.87954 18.439 2.87981 18.4387 2.88007L16.1619 5.16606L4.12044 17.1983V17.207L3.82281 17.5048L2.93394 21.0663L6.49474 20.1777L6.79302 19.8795H6.80241L18.8417 7.84952L18.8444 7.84679L21.1204 5.56158ZM1.01877 22.1325L2.33425 16.8617C2.36207 16.7405 2.42729 16.6378 2.52044 16.5445V16.5352L15.031 4.03425L17.3073 1.7487C18.3056 0.750434 19.9287 0.750434 20.9364 1.7487L22.2517 3.06417C23.25 4.07166 23.25 5.69495 22.2517 6.69305L19.9754 8.9786L7.46479 21.4795H7.45565C7.36241 21.5727 7.25977 21.6381 7.13853 21.6661L1.86774 22.9814C1.81171 22.9908 1.75586 23 1.69983 23C1.51329 23 1.33598 22.9254 1.20531 22.7949C1.02817 22.6176 0.962746 22.3658 1.01877 22.1325Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.8678 9.12111L14.6206 4.87392L15.752 3.74255L19.9991 7.98974L18.8678 9.12111Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.25424 20.8982L3.00706 16.651L4.13843 15.5197L8.38561 19.7668L7.25424 20.8982Z" })));
};

var Icon$1w = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M19.2536 9.25677L7.87542 20.6266H7.86687L3.37842 16.1381V16.1296L14.7566 4.75977L19.2536 9.25677Z" }),
        React__default["default"].createElement("path", { d: "M21.3245 7.17796L19.2541 9.25673L14.7571 4.75973L16.8275 2.68096C17.7354 1.77301 19.2117 1.77301 20.1282 2.68096L21.3245 3.87741C22.2324 4.79375 22.2324 6.27017 21.3245 7.17796V7.17796Z" }),
        React__default["default"].createElement("path", { d: "M7.86718 20.6265C7.78236 20.7113 7.68898 20.7709 7.57867 20.7963L2.78477 21.9926C2.73381 22.0012 2.68301 22.0096 2.63205 22.0096C2.46239 22.0096 2.30113 21.9417 2.18227 21.823C2.02116 21.6617 1.96166 21.4327 2.01261 21.2205L3.20907 16.4266C3.23439 16.3163 3.2939 16.2229 3.37873 16.1381L7.86718 20.6265Z" })));
};

var Icon$1v = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M14.5862 4.69604L2.48148 16.8017C2.42058 16.8628 2.37661 16.9399 2.35567 17.0228L1.01398 22.4081C0.973841 22.5702 1.02148 22.7426 1.13979 22.8609C1.2293 22.9504 1.35128 22.9999 1.47604 22.9999C1.51425 22.9999 1.55334 22.9952 1.59138 22.9856L6.97667 21.6438C7.0606 21.6228 7.13685 21.579 7.19775 21.5181L19.3036 9.41336L14.5862 4.69604Z" }),
        React__default["default"].createElement("path", { d: "M22.3025 3.04551L20.9551 1.69805C20.0545 0.797479 18.4849 0.798352 17.5854 1.69805L15.9348 3.34861L20.652 8.06575L22.3025 6.41519C22.7524 5.96552 23.0001 5.367 23.0001 4.73044C23.0001 4.09388 22.7524 3.49536 22.3025 3.04551Z" })));
};

var Icon$1u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M17.0909 9.06666C17.0909 11.9017 14.8116 14.2 12 14.2C9.18837 14.2 6.90909 11.9017 6.90909 9.06666C6.90909 6.2316 9.18837 3.93333 12 3.93333C14.8116 3.93333 17.0909 6.2316 17.0909 9.06666Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.39785 2.46693C8.74545 1.51168 10.3527 0.999364 12 1C13.6472 0.999362 15.2543 1.51161 16.6019 2.46673C17.9494 3.42185 18.9716 4.77325 19.5287 6.33624C20.0858 7.89924 20.1507 9.59757 19.7144 11.1991C19.2782 12.8007 18.3621 14.2274 17.0914 15.2842V22.2666C17.0914 22.3916 17.0598 22.5146 16.9994 22.6237C16.939 22.7329 16.852 22.8247 16.7465 22.8904C16.6411 22.9562 16.5207 22.9936 16.3969 22.9992C16.2731 23.0049 16.1499 22.9785 16.039 22.9226L11.9999 20.8865L7.96218 22.9225C7.8513 22.9785 7.72808 23.0049 7.60423 22.9993C7.48038 22.9937 7.36 22.9562 7.25454 22.8905C7.14908 22.8248 7.06203 22.733 7.00166 22.6238C6.94129 22.5146 6.90961 22.3916 6.90962 22.2666V15.2851C5.63866 14.2284 4.72231 12.8018 4.28583 11.2002C3.84936 9.59852 3.91405 7.90006 4.47107 6.3369C5.02809 4.77375 6.05025 3.42218 7.39785 2.46693ZM8.36354 14.5543C9.43993 15.2796 10.7054 15.6666 12 15.6666C13.7354 15.6647 15.3991 14.9687 16.6262 13.7314C17.8533 12.4941 18.5435 10.8165 18.5455 9.06666C18.5455 7.7613 18.1616 6.48526 17.4423 5.3999C16.7231 4.31454 15.7009 3.4686 14.5048 2.96906C13.3088 2.46952 11.9927 2.33882 10.723 2.59348C9.45335 2.84814 8.28706 3.47673 7.37166 4.39976C6.45627 5.32278 5.83287 6.49879 5.58032 7.77906C5.32776 9.05933 5.45738 10.3864 5.95279 11.5924C6.4482 12.7984 7.28715 13.8291 8.36354 14.5543Z" })));
};

var Icon$1t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.65237 1H14.7661C15.249 1.00231 15.7116 1.17798 16.0531 1.48886C16.3946 1.79975 16.5876 2.22073 16.5901 2.66038V8.58304C17.2466 8.61403 17.865 8.87293 18.3181 9.30644C18.7711 9.73994 19.0245 10.3151 19.0258 10.9134V16.3614C19.0258 16.7007 19.1738 17.0262 19.4374 17.2661C19.7011 17.5061 20.0586 17.6409 20.4313 17.6409C20.8041 17.6409 21.1616 17.5061 21.4252 17.2661C21.6888 17.0262 21.8369 16.7007 21.8369 16.3614V8.42091C19.6599 6.44897 19.2382 6.40111 19.8294 4.23285L18.1803 2.08413L18.838 1.56257L23 5.31307V16.3683C22.9863 16.979 22.7101 17.5604 22.2308 17.9879C21.7515 18.4154 21.1072 18.6548 20.4362 18.6548C19.7651 18.6548 19.1208 18.4154 18.6415 17.9879C18.1622 17.5604 17.8861 16.979 17.8723 16.3683V10.9183C17.8696 10.6003 17.7376 10.2944 17.5015 10.0599C17.2654 9.82535 16.9423 9.67881 16.5944 9.64861V20.4518H17.8369C17.9921 20.4521 18.1407 20.5082 18.2504 20.608C18.3603 20.7077 18.4222 20.8429 18.4227 20.9841V22.4667C18.4222 22.608 18.3603 22.7433 18.2505 22.8432C18.1408 22.9432 17.9922 22.9995 17.8369 23H1.58476C1.42967 22.9995 1.28109 22.9431 1.17152 22.8431C1.06195 22.7432 1.00028 22.608 1 22.4667V20.9841C1.00028 20.843 1.06198 20.7078 1.17159 20.608C1.28119 20.5083 1.42976 20.4521 1.58476 20.4518H2.82833V2.66428C2.83086 2.22464 3.02386 1.80365 3.36538 1.49277C3.7069 1.18189 4.16938 1.00622 4.65237 1.00391V1ZM5.46674 3.65172H13.9506C14.0607 3.65197 14.1661 3.69188 14.244 3.76271C14.3218 3.83354 14.3656 3.92953 14.3659 4.0297V8.83991C14.3653 8.9399 14.3214 9.03565 14.2436 9.10627C14.1658 9.17689 14.0605 9.21666 13.9506 9.21691H5.46674C5.35708 9.2164 5.25206 9.17652 5.1745 9.10592C5.09696 9.03534 5.05314 8.93974 5.05258 8.83991V4.0297C5.05286 3.9297 5.09655 3.83385 5.17414 3.76305C5.25171 3.69225 5.35688 3.65224 5.46674 3.65172Z" })));
};

var Icon$1s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M22.0952 9.78332C23.8348 10.7877 23.8348 13.2985 22.0952 14.3029L5.8369 23.6896C4.09732 24.694 1.92286 23.4385 1.92286 21.4298L1.92286 2.65634C1.92286 0.647655 4.09732 -0.607772 5.8369 0.396571L22.0952 9.78332Z" })));
};

var Icon$1r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 7.79V6C8.69 6 6 8.69 6 12C6 12.79 6.15 13.56 6.44 14.25C6.59 14.61 6.48 15.02 6.21 15.29C5.7 15.8 4.84 15.62 4.57 14.95C4.2 14.04 4 13.04 4 12C4 7.58 7.58 4 12 4V2.21C12 1.76 12.54 1.54 12.85 1.85L15.64 4.64C15.84 4.84 15.84 5.15 15.64 5.35L12.85 8.14C12.54 8.46 12 8.24 12 7.79ZM17.56 9.75C17.41 9.4 17.52 8.98 17.79 8.71C18.3 8.2 19.16 8.38 19.43 9.05C19.8 9.96 20 10.96 20 12C20 16.42 16.42 20 12 20V21.8C12 22.24 11.46 22.46 11.15 22.15L8.36 19.36C8.16 19.16 8.16 18.85 8.36 18.65L11.15 15.86C11.46 15.54 12 15.76 12 16.21V18C15.31 18 18 15.31 18 12C18 11.21 17.84 10.45 17.56 9.75Z" })));
};

var Icon$1q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" }),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var rotate$2 = styled.keyframes(templateObject_1$1r || (templateObject_1$1r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Loader$2 = styled__default["default"](Svg)(templateObject_2$L || (templateObject_2$L = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$2);
var Icon$1o = function (props) {
    return (React__default["default"].createElement(Loader$2, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 7.79V6C8.69 6 6 8.69 6 12C6 12.79 6.15 13.56 6.44 14.25C6.59 14.61 6.48 15.02 6.21 15.29C5.7 15.8 4.84 15.62 4.57 14.95C4.2 14.04 4 13.04 4 12C4 7.58 7.58 4 12 4V2.21C12 1.76 12.54 1.54 12.85 1.85L15.64 4.64C15.84 4.84 15.84 5.15 15.64 5.35L12.85 8.14C12.54 8.46 12 8.24 12 7.79ZM17.56 9.75C17.41 9.4 17.52 8.98 17.79 8.71C18.3 8.2 19.16 8.38 19.43 9.05C19.8 9.96 20 10.96 20 12C20 16.42 16.42 20 12 20V21.8C12 22.24 11.46 22.46 11.15 22.15L8.36 19.36C8.16 19.16 8.16 18.85 8.36 18.65L11.15 15.86C11.46 15.54 12 15.76 12 16.21V18C15.31 18 18 15.31 18 12C18 11.21 17.84 10.45 17.56 9.75Z" })));
};
var templateObject_1$1r, templateObject_2$L;

var rotate$1 = styled.keyframes(templateObject_1$1q || (templateObject_1$1q = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Loader$1 = styled__default["default"](Svg)(templateObject_2$K || (templateObject_2$K = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Icon$1n = function (props) {
    return (React__default["default"].createElement(Loader$1, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" }),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};
var templateObject_1$1q, templateObject_2$K;

var rotate = styled.keyframes(templateObject_1$1p || (templateObject_1$1p = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Loader = styled__default["default"](Svg)(templateObject_2$J || (templateObject_2$J = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Icon$1m = function (props) {
    return (React__default["default"].createElement(Loader, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};
var templateObject_1$1p, templateObject_2$J;

var Icon$1l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M17.65 6.34999C16.02 4.71999 13.71 3.77999 11.17 4.03999C7.49999 4.40999 4.47999 7.38999 4.06999 11.06C3.51999 15.91 7.26999 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.40999 17.35 6.61999 15.54 6.14999 13.32C5.30999 9.43999 8.25999 5.99999 12 5.99999C13.66 5.99999 15.14 6.68999 16.22 7.77999L14.71 9.28999C14.08 9.91999 14.52 11 15.41 11H19C19.55 11 20 10.55 20 9.99999V6.40999C20 5.51999 18.92 5.06999 18.29 5.69999L17.65 6.34999Z" })));
};

var Icon$1k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" }),
        React__default["default"].createElement("path", { d: "M17.65 6.34999C16.02 4.71999 13.71 3.77999 11.17 4.03999C7.49999 4.40999 4.47999 7.38999 4.06999 11.06C3.51999 15.91 7.26999 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.40999 17.35 6.61999 15.54 6.14999 13.32C5.30999 9.43999 8.25999 5.99999 12 5.99999C13.66 5.99999 15.14 6.68999 16.22 7.77999L14.71 9.28999C14.08 9.91999 14.52 11 15.41 11H19C19.55 11 20 10.55 20 9.99999V6.40999C20 5.51999 18.92 5.06999 18.29 5.69999L17.65 6.34999Z" })));
};

var Icon$1j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM11.17 4.03999C13.71 3.77999 16.02 4.71999 17.65 6.34999L18.29 5.69999C18.92 5.06999 20 5.51999 20 6.40999V9.99999C20 10.55 19.55 11 19 11H15.41C14.52 11 14.08 9.91999 14.71 9.28999L16.22 7.77999C15.14 6.68999 13.66 5.99999 12 5.99999C8.26001 5.99999 5.31001 9.43999 6.15001 13.32C6.62001 15.54 8.41001 17.35 10.63 17.84C13.59 18.5 16.3 16.96 17.43 14.53C17.59 14.2 17.94 14 18.31 14C19.05 14 19.53 14.77 19.21 15.44C17.93 18.13 15.19 20 12 20C7.27001 20 3.52001 15.91 4.07001 11.06C4.48001 7.38999 7.50001 4.40999 11.17 4.03999Z" })));
};

var Icon$1i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "2", y: "2", width: "20", height: "20", rx: "4" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 7C6 6.44772 6.44772 6 7 6H16C16.5523 6 17 6.44772 17 7C17 7.55228 16.5523 8 16 8H7C6.44771 8 6 7.55228 6 7ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18H13C13.5523 18 14 17.5523 14 17C14 16.4477 13.5523 16 13 16H7Z" })));
};

var Icon$1h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 2C2.79086 2 1 3.79086 1 6V18C1 20.2091 2.79086 22 5 22H17C19.2091 22 21 20.2091 21 18V6C21 3.79086 19.2091 2 17 2H5ZM6 6C5.44772 6 5 6.44772 5 7C5 7.55229 5.44771 8 6 8H15C15.5523 8 16 7.55229 16 7C16 6.44772 15.5523 6 15 6H6ZM6 11C5.44772 11 5 11.4477 5 12C5 12.5523 5.44771 13 6 13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H6ZM5 17C5 16.4477 5.44772 16 6 16H12C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18H6C5.44772 18 5 17.5523 5 17Z" })));
};

var Icon$1g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M13.1107 1.01123C10.6949 1.02299 8.35129 1.8358 6.44701 3.32231C4.54273 4.80882 3.18537 6.88505 2.58759 9.22571L1.85635 8.11986C1.78712 8.00408 1.69516 7.90353 1.58602 7.82425C1.47687 7.74498 1.35281 7.68863 1.2213 7.65861C1.08979 7.62859 0.953558 7.62551 0.820826 7.64957C0.688094 7.67362 0.561609 7.72431 0.448998 7.79857C0.336387 7.87284 0.239983 7.96914 0.1656 8.08167C0.0912171 8.1942 0.0403956 8.32063 0.0162004 8.45334C-0.00799469 8.58605 -0.00506219 8.72228 0.0248211 8.85382C0.0547044 8.98536 0.110919 9.10949 0.190076 9.21872L2.38779 12.5493C2.54045 12.7629 2.76553 12.9138 3.02114 12.9738C3.28213 13.0256 3.55303 12.9736 3.77635 12.829L7.07293 10.6083C7.18659 10.5373 7.28481 10.4442 7.36174 10.3345C7.43867 10.2247 7.49274 10.1007 7.52073 9.96961C7.54871 9.83856 7.55005 9.70322 7.52465 9.57164C7.49926 9.44006 7.44765 9.31494 7.3729 9.20372C7.29815 9.0925 7.20179 8.99746 7.08955 8.92425C6.97731 8.85104 6.85149 8.80116 6.71958 8.77758C6.58767 8.754 6.45236 8.7572 6.32171 8.78699C6.19106 8.81679 6.06773 8.87256 5.95908 8.951L4.45964 9.96195C4.85871 8.34202 5.70508 6.86688 6.90219 5.70483C8.0993 4.54278 9.59894 3.74062 11.23 3.38988C12.8611 3.03913 14.5579 3.15392 16.1269 3.72114C17.6958 4.28837 19.0738 5.28519 20.1035 6.59788C21.1332 7.91057 21.7732 9.48626 21.9504 11.1452C22.1277 12.8041 21.8351 14.4794 21.106 15.9801C20.3769 17.4807 19.2407 18.7461 17.827 19.6321C16.4133 20.518 14.779 20.9887 13.1107 20.9905C11.6805 20.9866 10.2724 20.6375 9.00607 19.9728C7.73975 19.3081 6.65266 18.3474 5.83721 17.1725C5.76418 17.0603 5.66936 16.964 5.55838 16.8892C5.4474 16.8144 5.32252 16.7627 5.19116 16.7371C5.05981 16.7115 4.92464 16.7126 4.7937 16.7402C4.66276 16.7679 4.53871 16.8215 4.42892 16.8981C4.31913 16.9746 4.22583 17.0724 4.15456 17.1857C4.0833 17.2989 4.03552 17.4254 4.01407 17.5575C3.99261 17.6896 3.99792 17.8246 4.02967 17.9546C4.06143 18.0847 4.11898 18.2069 4.19891 18.3143C5.5246 20.2255 7.42839 21.661 9.63048 22.4099C11.8326 23.1588 14.2168 23.1816 16.4328 22.4749C18.6488 21.7682 20.5797 20.3693 21.9417 18.4838C23.3036 16.5983 24.0248 14.3257 23.9993 11.9998C24.0092 9.09975 22.8683 6.31417 20.827 4.25415C18.7857 2.19413 16.0107 1.02788 13.1107 1.01123Z" }),
        React__default["default"].createElement("path", { d: "M13.0107 5.95605C12.7457 5.95605 12.4916 6.0613 12.3043 6.24864C12.117 6.43599 12.0117 6.69008 12.0117 6.95502V11.9998C12.016 12.2639 12.1206 12.5164 12.3044 12.7061L15.3013 15.7299C15.4894 15.915 15.7423 16.0193 16.0061 16.0206C16.27 16.022 16.5239 15.9201 16.7138 15.7369C16.9019 15.5504 17.0082 15.2968 17.0093 15.0319C17.0104 14.767 16.9063 14.5125 16.7198 14.3244L14.0096 11.5892V6.95502C14.0096 6.69008 13.9044 6.43599 13.717 6.24864C13.5297 6.0613 13.2756 5.95605 13.0107 5.95605Z" })));
};

var Icon$1f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { x: "1", y: "1", width: "8", height: "8", rx: "4" }),
        React__default["default"].createElement("rect", { x: "1", y: "15", width: "8", height: "8", rx: "1" }),
        React__default["default"].createElement("rect", { x: "15", y: "1", width: "8", height: "8", rx: "1" }),
        React__default["default"].createElement("rect", { x: "15", y: "15", width: "8", height: "8", rx: "1" })));
};

var Icon$1e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { x: "1", y: "1", width: "8", height: "8", rx: "4" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "1", y: "15", width: "8", height: "8", rx: "1" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "15", y: "1", width: "8", height: "8", rx: "1" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "15", y: "15", width: "8", height: "8", rx: "1" })));
};

var Icon$1d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M2 20H22C22.55 20 23 19.55 23 19C23 18.45 22.55 18 22 18H2C1.45 18 1 18.45 1 19C1 19.55 1.45 20 2 20ZM2 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM1 5C1 5.55 1.45 6 2 6H22C22.55 6 23 5.55 23 5C23 4.45 22.55 4 22 4H2C1.45 4 1 4.45 1 5Z" })));
};

var Icon$1c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M10.5858 12L4.22183 5.63607C3.83292 5.24716 3.83292 4.61077 4.22183 4.22186C4.61074 3.83295 5.24713 3.83295 5.63604 4.22186L12 10.5858L18.364 4.22186C18.7529 3.83295 19.3893 3.83295 19.7782 4.22186C20.1671 4.61077 20.1671 5.24716 19.7782 5.63607L13.4142 12L19.7782 18.364C20.1671 18.7529 20.1671 19.3893 19.7782 19.7782C19.3893 20.1671 18.7529 20.1671 18.364 19.7782L12 13.4142L5.63604 19.7782C5.24713 20.1671 4.61074 20.1671 4.22183 19.7782C3.83292 19.3893 3.83292 18.7529 4.22183 18.364L10.5858 12Z" })));
};

var Icon$1b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.6005 11.0834C14.518 11.4697 16 12.2774 16 14.1388C16 15.7332 14.8762 16.7165 13.1272 17.0045V18.1072H11.0833V17.0256C8.84972 16.7165 7.99983 15.2626 7.99983 13.8929H10.2264C10.2264 14.6866 10.8656 15.2204 12.0034 15.2204C13.2466 15.2204 13.7453 14.8552 13.7453 14.1317C13.7453 13.4715 13.064 13.1976 11.8278 12.9166C10.2194 12.5303 8.23864 11.8981 8.23864 9.87528C8.23864 8.41431 9.17984 7.34669 11.0833 7.10788V5.89275H13.1272V7.16407C14.827 7.49419 15.6699 8.56181 15.6699 10.0649H13.4433C13.4433 9.53111 13.064 8.99729 11.8981 8.99729C10.711 8.99729 10.4652 9.45384 10.4652 9.88932C10.4652 10.5004 11.0973 10.8024 12.6005 11.0834Z" }),
        React__default["default"].createElement("path", { d: "M15.9999 14.1387C15.9999 12.2774 14.5179 11.4696 12.6004 11.0833C11.0973 10.8024 10.4651 10.5003 10.4651 9.88927C10.4651 9.45379 10.711 8.99724 11.898 8.99724C13.064 8.99724 13.4432 9.53106 13.4432 10.0649H15.6698C15.6698 8.56176 14.8269 7.49414 13.1272 7.16402V5.8927H11.0832V7.10783C9.17976 7.34664 8.23857 8.41426 8.23857 9.87523C8.23857 11.8981 10.2193 12.5302 11.8278 12.9166C13.064 13.1975 13.7453 13.4714 13.7453 14.1317C13.7453 14.8551 13.2466 15.2204 12.0034 15.2204C10.8655 15.2204 10.2263 14.6866 10.2263 13.8929H7.99976C7.99976 15.2625 8.84964 16.7165 11.0832 17.0255V18.1072H13.1272V17.0044C14.8761 16.7165 15.9999 15.7331 15.9999 14.1387Z" })));
};

var Icon$1a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.6005 11.0834C14.518 11.4697 16 12.2774 16 14.1388C16 15.7332 14.8762 16.7165 13.1272 17.0045V18.1072H11.0833V17.0256C8.84972 16.7165 7.99983 15.2626 7.99983 13.8929H10.2264C10.2264 14.6866 10.8656 15.2204 12.0034 15.2204C13.2466 15.2204 13.7453 14.8552 13.7453 14.1317C13.7453 13.4715 13.064 13.1976 11.8278 12.9166C10.2194 12.5303 8.23864 11.8981 8.23864 9.87528C8.23864 8.41431 9.17984 7.34669 11.0833 7.10788V5.89275H13.1272V7.16407C14.827 7.49419 15.6699 8.56181 15.6699 10.0649H13.4433C13.4433 9.53111 13.064 8.99729 11.8981 8.99729C10.711 8.99729 10.4652 9.45384 10.4652 9.88932C10.4652 10.5004 11.0973 10.8024 12.6005 11.0834Z" })));
};

var Icon$19 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12Z" }),
        React__default["default"].createElement("path", { d: "M15.9999 14.1387C15.9999 12.2774 14.5179 11.4696 12.6004 11.0833C11.0973 10.8024 10.4651 10.5003 10.4651 9.88927C10.4651 9.45379 10.711 8.99724 11.898 8.99724C13.064 8.99724 13.4432 9.53106 13.4432 10.0649H15.6698C15.6698 8.56176 14.8269 7.49414 13.1272 7.16402V5.8927H11.0832V7.10783C9.17976 7.34664 8.23857 8.41426 8.23857 9.87523C8.23857 11.8981 10.2193 12.5302 11.8278 12.9166C13.064 13.1975 13.7453 13.4714 13.7453 14.1317C13.7453 14.8551 13.2466 15.2204 12.0034 15.2204C10.8655 15.2204 10.2263 14.6866 10.2263 13.8929H7.99976C7.99976 15.2625 8.84964 16.7165 11.0832 17.0255V18.1072H13.1272V17.0044C14.8761 16.7165 15.9999 15.7331 15.9999 14.1387Z" })));
};

var Icon$18 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 22C19.0751 22 24 17.0751 24 11C24 4.92487 19.0751 0 13 0C6.92487 0 2 4.92487 2 11C2 11.9071 2.10981 12.7886 2.31685 13.6319C3.12425 13.2276 4.03555 13 5 13C8.31371 13 11 15.6863 11 19C11 19.9645 10.7724 20.8758 10.3681 21.6831C11.2114 21.8902 12.0929 22 13 22ZM13.875 15.7774V16.8333H12.125V15.7822C10.0784 15.4251 9.5 13.8339 9.5 12.9405H11.25C11.2596 13.0797 11.3891 13.9137 13 13.9137C14.2075 13.9137 14.75 13.3444 14.75 12.9405C14.75 12.6252 14.75 11.9673 13 11.9673C9.955 11.9673 9.5 10.1377 9.5 9.04773C9.5 7.79425 10.4004 6.53299 12.125 6.21086V5.16663H13.875V6.2459C15.3922 6.64491 15.975 8.04923 15.975 9.04773H15.1L14.225 9.06525C14.2127 8.69543 14.0369 8.07453 13 8.07453C11.8634 8.07453 11.25 8.5767 11.25 9.04773C11.25 9.41171 11.25 10.0209 13 10.0209C16.045 10.0209 16.5 11.8505 16.5 12.9405C16.5 14.194 15.5996 15.4552 13.875 15.7774Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 24C7.76142 24 10 21.7614 10 19C10 16.2386 7.76142 14 5 14C2.23858 14 0 16.2386 0 19C0 21.7614 2.23858 24 5 24ZM4.25 16.75C4.25 16.3358 4.58582 16 5 16C5.41418 16 5.75 16.3358 5.75 16.75V18.25H7.25C7.66418 18.25 8 18.5858 8 19C8 19.4142 7.66418 19.75 7.25 19.75H5.75V21.25C5.75 21.6642 5.41418 22 5 22C4.58582 22 4.25 21.6642 4.25 21.25V19.75H2.75C2.33582 19.75 2 19.4142 2 19C2 18.5858 2.33582 18.25 2.75 18.25H4.25V16.75Z" })));
};

var Icon$17 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M13 22C19.0751 22 24 17.0751 24 11C24 4.92487 19.0751 0 13 0C6.92487 0 2 4.92487 2 11C2 12.2643 2.21329 13.4788 2.60585 14.6094C3.31688 14.2209 4.13265 14 5 14C7.76142 14 10 16.2386 10 19C10 19.8674 9.77915 20.6831 9.39061 21.3941C10.5212 21.7867 11.7357 22 13 22Z" }),
        React__default["default"].createElement("path", { d: "M13.875 15.7774V16.8333H12.125V15.7822C10.0784 15.4251 9.5 13.8339 9.5 12.9405H11.25C11.2596 13.0797 11.3891 13.9137 13 13.9137C14.2075 13.9137 14.75 13.3444 14.75 12.9405C14.75 12.6252 14.75 11.9673 13 11.9673C9.955 11.9673 9.5 10.1377 9.5 9.04773C9.5 7.79425 10.4004 6.53299 12.125 6.21086V5.16663H13.875V6.2459C15.3922 6.64491 15.975 8.04923 15.975 9.04773H15.1L14.225 9.06525C14.2127 8.69543 14.0369 8.07453 13 8.07453C11.8634 8.07453 11.25 8.5767 11.25 9.04773C11.25 9.4117 11.25 10.0209 13 10.0209C16.045 10.0209 16.5 11.8505 16.5 12.9405C16.5 14.194 15.5996 15.4552 13.875 15.7774Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5 24C7.76142 24 10 21.7614 10 19C10 16.2386 7.76142 14 5 14C2.23858 14 0 16.2386 0 19C0 21.7614 2.23858 24 5 24ZM4.25 16.75C4.25 16.3358 4.58582 16 5 16C5.41418 16 5.75 16.3358 5.75 16.75V18.25H7.25C7.66418 18.25 8 18.5858 8 19C8 19.4142 7.66418 19.75 7.25 19.75H5.75V21.25C5.75 21.6642 5.41418 22 5 22C4.58582 22 4.25 21.6642 4.25 21.25V19.75H2.75C2.33582 19.75 2 19.4142 2 19C2 18.5858 2.33582 18.25 2.75 18.25H4.25V16.75Z" })));
};

var Icon$16 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM9.74996 4.25L14.8928 8.10714L9.74996 11.9643V10.0354C6.53567 10.0354 5.24996 11.3214 3.96425 13.2499C3.96425 8.10705 6.53566 6.17838 9.74996 6.17826V4.25ZM14.25 20.25L9.10718 16.3929L14.25 12.5357V14.4646C17.4643 14.4646 18.75 13.1786 20.0357 11.2501C20.0357 16.393 17.4643 18.3216 14.25 18.3217L14.25 20.25Z" })));
};

var Icon$15 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "12", cy: "12", r: "12" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8928 8.10714L9.74997 4.25L9.74997 6.17826C6.53566 6.17838 3.96425 8.10705 3.96425 13.2499C5.24996 11.3214 6.53567 10.0354 9.74997 10.0354L9.74997 11.9643L14.8928 8.10714Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.10718 16.3929L14.25 20.25L14.25 18.3217C17.4643 18.3216 20.0357 16.393 20.0357 11.2501C18.75 13.1786 17.4643 14.4646 14.25 14.4646L14.25 12.5357L9.10718 16.3929Z" })));
};

var Icon$14 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "1", y: "1", width: "22", height: "4", rx: "1" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 7C1.44772 7 1 7.44772 1 8V22C1 22.5523 1.44772 23 2 23H14C14.5523 23 15 22.5523 15 22V8C15 7.44772 14.5523 7 14 7H2ZM12.9971 10.0767C13.0394 9.52609 12.6274 9.04535 12.0767 9.00299C11.526 8.96064 11.0453 9.37269 11.0029 9.92335C10.9248 10.9391 10.6432 12.3259 10.114 13.2758C9.85133 13.7472 9.58117 14.0142 9.34053 14.1329C9.14478 14.2294 8.86385 14.2823 8.39392 14.081C7.46385 13.6824 6.56562 13.6836 5.77491 14.0735C5.0291 14.4413 4.5055 15.093 4.13895 15.7509C3.40989 17.0593 3.09148 18.7724 3.00295 19.9234C2.96059 20.4741 3.37265 20.9548 3.92331 20.9972C4.47396 21.0395 4.9547 20.6275 4.99706 20.0768C5.07519 19.0611 5.35678 17.6742 5.88605 16.7243C6.14867 16.253 6.41883 15.986 6.65947 15.8673C6.85522 15.7708 7.13616 15.7178 7.60608 15.9192C8.53616 16.3178 9.43439 16.3166 10.2251 15.9267C10.9709 15.5589 11.4945 14.9072 11.8611 14.2493C12.5901 12.9409 12.9085 11.2277 12.9971 10.0767Z", fill: "#fff" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "17", y: "7", width: "6", height: "16", rx: "1" })));
};

var Icon$13 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("rect", { opacity: "0.24", x: "1", y: "1", width: "22", height: "4", rx: "1" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 7C1.44772 7 1 7.44772 1 8V22C1 22.5523 1.44772 23 2 23H14C14.5523 23 15 22.5523 15 22V8C15 7.44772 14.5523 7 14 7H2ZM12.9971 10.0767C13.0394 9.52609 12.6274 9.04535 12.0767 9.00299C11.526 8.96064 11.0453 9.37269 11.0029 9.92335C10.9248 10.9391 10.6432 12.3259 10.114 13.2758C9.85133 13.7472 9.58117 14.0142 9.34053 14.1329C9.14478 14.2294 8.86385 14.2823 8.39392 14.081C7.46385 13.6824 6.56562 13.6836 5.77491 14.0735C5.0291 14.4413 4.5055 15.093 4.13895 15.7509C3.40989 17.0593 3.09148 18.7724 3.00295 19.9234C2.96059 20.4741 3.37265 20.9548 3.92331 20.9972C4.47396 21.0395 4.9547 20.6275 4.99706 20.0768C5.07519 19.0611 5.35678 17.6742 5.88605 16.7243C6.14867 16.253 6.41883 15.986 6.65947 15.8673C6.85522 15.7708 7.13616 15.7178 7.60608 15.9192C8.53616 16.3178 9.43439 16.3166 10.2251 15.9267C10.9709 15.5589 11.4945 14.9072 11.8611 14.2493C12.5901 12.9409 12.9085 11.2277 12.9971 10.0767Z", fill: "#fff" }),
        React__default["default"].createElement("rect", { opacity: "0.24", x: "17", y: "7", width: "6", height: "16", rx: "1" })));
};

var Icon$12 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 10.6205C6 7.05919 7.58188 3.68182 10.3178 1.40189L11.3598 0.533536C11.7307 0.224498 12.2693 0.224498 12.6402 0.533537L13.6822 1.4019C16.4181 3.68182 18 7.05919 18 10.6205V13L19.6904 13.8452C21.1059 14.5529 22 15.9997 22 17.5822C22 17.8129 21.8129 18 21.5822 18H2.41781C2.18706 18 2 17.8129 2 17.5822C2 15.9997 2.89412 14.5529 4.30958 13.8452L6 13V10.6205ZM14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" }),
        React__default["default"].createElement("path", { d: "M13.3359 23.1094C14.3755 22.4163 15 21.2495 15 20H9C9 21.2495 9.62446 22.4163 10.6641 23.1094L12 24L13.3359 23.1094Z" })));
};

var Icon$11 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.3178 1.40189C7.58188 3.68182 6 7.05919 6 10.6205V18H18V10.6205C18 7.05919 16.4181 3.68182 13.6822 1.4019L12.6402 0.533537C12.2693 0.224498 11.7307 0.224498 11.3598 0.533536L10.3178 1.40189ZM12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M2 17.5822C2 15.9997 2.89412 14.5529 4.30958 13.8452L6 13V18H2.41781C2.18706 18 2 17.8129 2 17.5822V17.5822Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M22 17.5822C22 15.9997 21.1059 14.5529 19.6904 13.8452L18 13V18H21.5822C21.8129 18 22 17.8129 22 17.5822V17.5822Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M9 20H15V20C15 21.2495 14.3755 22.4163 13.3359 23.1094L12 24L10.6641 23.1094C9.62446 22.4163 9 21.2495 9 20V20Z" })));
};

var Icon$10 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 2C3.44772 2 3 2.44772 3 3V4H4L3 10C2.44772 10 2 10.4477 2 11V12.0218C3.0103 11.375 4.21136 11 5.5 11C9.08985 11 12 13.9101 12 17.5C12 18.0163 11.9398 18.5185 11.8261 19H16.0275C16.2762 16.75 18.1837 15 20.5 15C21.0259 15 21.5308 15.0902 21.9999 15.256V12.7346C21.9999 11.7393 21.268 10.8954 20.2827 10.7547L15 10L13 4H14V3C14 2.44772 13.5523 2 13 2H4ZM5.22754 9L6 4H11L12.6578 9H5.22754Z" }),
        React__default["default"].createElement("path", { d: "M5.5 23C8.53757 23 11 20.5376 11 17.5C11 14.4624 8.53757 12 5.5 12C2.46243 12 0 14.4624 0 17.5C0 20.5376 2.46243 23 5.5 23Z" }),
        React__default["default"].createElement("path", { d: "M24 19.5C24 21.433 22.433 23 20.5 23C18.567 23 17 21.433 17 19.5C17 17.567 18.567 16 20.5 16C22.433 16 24 17.567 24 19.5Z" })));
};

var Icon$$ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 3C3 2.44772 3.44772 2 4 2H13C13.5523 2 14 2.44772 14 3V4H13L15 10H3L4 4H3V3ZM6 4L5.22754 9H12.6578L11 4H6Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 11C2 10.4477 2.44772 10 3 10H15L20.2827 10.7547C21.268 10.8954 21.9999 11.7393 21.9999 12.7346V15.256C21.5308 15.0902 21.0259 15 20.5 15C18.1837 15 16.2762 16.75 16.0275 19H11.8261C11.9398 18.5185 12 18.0163 12 17.5C12 13.9101 9.08985 11 5.5 11C4.21136 11 3.0103 11.375 2 12.0218V11Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M5.5 23C8.53757 23 11 20.5376 11 17.5C11 14.4624 8.53757 12 5.5 12C2.46243 12 0 14.4624 0 17.5C0 20.5376 2.46243 23 5.5 23Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M20.5 23C22.433 23 24 21.433 24 19.5C24 17.567 22.433 16 20.5 16C18.567 16 17 17.567 17 19.5C17 21.433 18.567 23 20.5 23Z" })));
};

var Icon$_ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M8.7275 4.25047C8.7275 5.7567 7.50645 6.97774 6.00022 6.97774C4.49399 6.97774 3.27295 5.7567 3.27295 4.25047C3.27295 2.74424 4.49399 1.52319 6.00022 1.52319C7.50645 1.52319 8.7275 2.74424 8.7275 4.25047Z" }),
        React__default["default"].createElement("path", { d: "M20.7275 4.25047C20.7275 5.7567 19.5065 6.97774 18.0002 6.97774C16.494 6.97774 15.2729 5.7567 15.2729 4.25047C15.2729 2.74424 16.494 1.52319 18.0002 1.52319C19.5065 1.52319 20.7275 2.74424 20.7275 4.25047Z" }),
        React__default["default"].createElement("path", { d: "M12 13.7727C14.0083 13.7727 15.6364 12.1446 15.6364 10.1363C15.6364 8.12799 14.0083 6.49994 12 6.49994C9.99169 6.49994 8.36364 8.12799 8.36364 10.1363C8.36364 12.1446 9.99169 13.7727 12 13.7727Z" }),
        React__default["default"].createElement("path", { d: "M9.57576 15.2272C6.89801 15.2272 4.72727 17.398 4.72727 20.0757C4.72727 21.4146 5.81264 22.4999 7.15152 22.4999H16.8485C18.1874 22.4999 19.2727 21.4146 19.2727 20.0757C19.2727 17.398 17.102 15.2272 14.4242 15.2272H9.57576Z" }),
        React__default["default"].createElement("path", { d: "M16.6592 10.1363C16.6592 11.4706 16.0983 12.6738 15.1995 13.5232H22.3621C22.9646 13.5232 23.453 13.0348 23.453 12.4323C23.453 10.0223 21.4994 8.06866 19.0894 8.06866L16.1764 8.06867C16.4855 8.69168 16.6592 9.3937 16.6592 10.1363Z" }),
        React__default["default"].createElement("path", { d: "M7.82406 8.06867C7.51504 8.69168 7.34131 9.3937 7.34131 10.1363C7.34131 11.4706 7.90216 12.6738 8.80098 13.5232H1.63632C1.03383 13.5232 0.54541 13.0348 0.54541 12.4323C0.54541 10.0223 2.49908 8.06866 4.90905 8.06866L7.82406 8.06867Z" })));
};

var Icon$Z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("circle", { cx: "13", cy: "10.1364", r: "3.63636" }),
        React__default["default"].createElement("path", { d: "M5.72726 20.0758C5.72726 17.398 7.898 15.2273 10.5757 15.2273H15.4242C18.102 15.2273 20.2727 17.398 20.2727 20.0758C20.2727 21.4147 19.1873 22.5 17.8485 22.5H8.15151C6.81264 22.5 5.72726 21.4147 5.72726 20.0758Z" }),
        React__default["default"].createElement("g", { opacity: "0.48" },
            React__default["default"].createElement("circle", { cx: "19.0002", cy: "4.25047", r: "2.72727" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.1995 13.5233C17.0983 12.6739 17.6592 11.4706 17.6592 10.1364C17.6592 9.39376 17.4854 8.69174 17.1764 8.06873C17.1777 8.06873 17.179 8.06873 17.1803 8.06873H20.0894C22.4994 8.06873 24.453 10.0224 24.453 12.4324C24.453 13.0349 23.9646 13.5233 23.3621 13.5233H16.1995Z" })),
        React__default["default"].createElement("g", { opacity: "0.48" },
            React__default["default"].createElement("circle", { cx: "7.00022", cy: "4.25047", r: "2.72727" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.82406 8.06873C8.82209 8.06873 8.82011 8.06873 8.81814 8.06873H5.90905C3.49908 8.06873 1.54541 10.0224 1.54541 12.4324C1.54541 13.0349 2.03383 13.5233 2.63632 13.5233H9.80098C8.90216 12.6739 8.34131 11.4706 8.34131 10.1364C8.34131 9.39376 8.51504 8.69174 8.82406 8.06873Z" }))));
};

var Icon$Y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 8C20 12.4183 16.4183 16 12 16C7.58172 16 4 12.4183 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8ZM19 8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8Z" }),
        React__default["default"].createElement("path", { d: "M0 15L4 14L5 15L2.39738 15.9989L12 20L21.6026 15.9989L19 15L20 14L24 15L22 19L12 24L2 19L0 15Z" })));
};

var Icon$X = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 14C15.3137 14 18 11.3137 18 8C18 4.68629 15.3137 2 12 2C8.68629 2 6 4.68629 6 8C6 11.3137 8.68629 14 12 14Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 8C20 12.4183 16.4183 16 12 16C7.58172 16 4 12.4183 4 8C4 3.58172 7.58172 0 12 0C16.4183 0 20 3.58172 20 8ZM19 8C19 11.866 15.866 15 12 15C8.13401 15 5 11.866 5 8C5 4.13401 8.13401 1 12 1C15.866 1 19 4.13401 19 8Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M4 14L0 15L2.39453 16L5 15L4 14Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M20 14L24 15L21.6055 16L19 15L20 14Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M2 19L0 15L12 20V24L2 19Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M22 19L24 15L12 20V24L22 19Z" })));
};

var Icon$W = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.15842 1C4.07093 1 4 1.07093 4 1.15842V4H1C0.447715 4 0 4.44772 0 5V7C0 10.7277 2.54955 13.8599 6 14.748C6.18636 14.7959 6.37535 14.8374 6.56671 14.872C7.10157 15.3671 7.7042 15.7901 8.35913 16.1254C9.0557 16.6344 10 17.6535 10 19C10 19.899 9.19184 20.1918 8.30203 20.5143C7.21225 20.9092 6 21.3485 6 23H18C18 21.3485 16.7878 20.9092 15.698 20.5143C14.8082 20.1918 14 19.899 14 19C14 17.6535 14.9443 16.6344 15.6409 16.1254C16.2958 15.7901 16.8985 15.3671 17.4333 14.8719C17.6246 14.8373 17.8135 14.7959 17.9998 14.748C21.4503 13.8599 23.9998 10.7277 23.9998 7V5C23.9998 4.44772 23.5521 4 22.9998 4H20V1.15842C20 1.07093 19.9291 1 19.8416 1H4.15842ZM20 6V9C20 10.0248 19.8073 11.0045 19.4562 11.905C20.9949 10.8188 21.9998 9.02673 21.9998 7V6H20ZM4.54385 11.9052C4.1927 11.0046 4 10.0248 4 9V6H2V7C2 9.02684 3.005 10.819 4.54385 11.9052ZM11.7983 4.12189C11.8777 3.95937 12.1223 3.95937 12.2017 4.1219L13.5149 6.80976C13.5472 6.876 13.6137 6.92161 13.6904 6.9302L16.8037 7.27872C16.992 7.29979 17.0676 7.51948 16.9284 7.641L14.6267 9.65071C14.5699 9.70023 14.5445 9.77403 14.5596 9.84558L15.1706 12.7488C15.2075 12.9244 15.0096 13.0602 14.8442 12.9727L12.1085 11.5269C12.0411 11.4913 11.9589 11.4913 11.8915 11.5269L9.1558 12.9727C8.99039 13.0602 8.79246 12.9244 8.8294 12.7488L9.4404 9.84558C9.45546 9.77403 9.43006 9.70023 9.37334 9.65071L7.07159 7.641C6.93241 7.51948 7.00802 7.29979 7.19627 7.27872L10.3096 6.9302C10.3863 6.92161 10.4528 6.876 10.4851 6.80976L11.7983 4.12189Z" })));
};

var Icon$V = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M4 4H1C0.447715 4 0 4.44771 0 5V7C0 10.7277 2.54955 13.8599 6 14.748C6.18636 14.7959 6.37535 14.8374 6.56671 14.872C5.68525 14.056 4.98788 13.044 4.54385 11.9052C3.005 10.819 2 9.02684 2 7V6H4V4Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M17.4333 14.872C17.6246 14.8374 17.8136 14.7959 18 14.748C21.4505 13.8599 24 10.7277 24 7V5C24 4.44771 23.5523 4 23 4H20V6H22V7C22 9.02684 20.995 10.819 19.4561 11.9052C19.0121 13.044 18.3147 14.056 17.4333 14.872Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 1.15842C4 1.07093 4.07093 1 4.15842 1H19.8416C19.9291 1 20 1.07093 20 1.15842V9C20 12.1071 18.2287 14.8004 15.6409 16.1254C14.9443 16.6344 14 17.6535 14 19C14 19.899 14.8082 20.1918 15.698 20.5143C16.7878 20.9092 18 21.3485 18 23H6C6 21.3485 7.21225 20.9092 8.30203 20.5143C9.19184 20.1918 10 19.899 10 19C10 17.6535 9.0557 16.6344 8.35913 16.1254C5.77127 14.8004 4 12.1071 4 9V1.15842ZM12.2017 4.1219C12.1223 3.95937 11.8777 3.95937 11.7983 4.12189L10.4851 6.80976C10.4528 6.876 10.3863 6.92161 10.3096 6.9302L7.19627 7.27872C7.00802 7.29979 6.93241 7.51948 7.07159 7.641L9.37334 9.65071C9.43006 9.70023 9.45546 9.77403 9.4404 9.84558L8.8294 12.7488C8.79246 12.9244 8.99039 13.0602 9.1558 12.9727L11.8915 11.5269C11.9589 11.4913 12.0411 11.4913 12.1085 11.5269L14.8442 12.9727C15.0096 13.0602 15.2075 12.9244 15.1706 12.7488L14.5596 9.84558C14.5445 9.77403 14.5699 9.70023 14.6267 9.65071L16.9284 7.641C17.0676 7.51948 16.992 7.29979 16.8037 7.27872L13.6904 6.9302C13.6137 6.92161 13.5472 6.876 13.5149 6.80976L12.2017 4.1219Z" })));
};

var Icon$U = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.4459 18.8459C16.7144 18.864 16 19.2487 16 20H2C0.89543 20 0 19.1046 0 18V6C0 4.89543 0.895431 4 2 4H16C16 4.75134 16.7144 5.13605 17.4459 5.15411C18.2134 5.173 19 4.7883 19 4H22C23.1046 4 24 4.89543 24 6V18C24 19.1046 23.1046 20 22 20H19C19 19.2117 18.2134 18.827 17.4459 18.8459ZM7.34433 8.35528L7.33915 8.38081C7.32592 8.50816 7.31218 8.63416 7.29795 8.75749C7.28773 9.05111 7.3261 9.39892 7.49697 9.61974C7.75759 9.95654 8.49111 10.2523 8.83823 10.3626C8.74507 9.00897 8.3818 6.57837 7.52896 6C7.49689 6.56411 7.43123 7.48874 7.34177 8.35551L7.34433 8.35528ZM15.0201 7.31894C14.5294 7.42067 13.8044 7.63272 13.3179 7.7835C12.6954 8.0182 12.3265 8.47321 12.1354 8.85208C11.9522 9.28688 11.8639 9.76308 11.8394 10.0201C11.8426 10.3209 11.8596 10.9997 11.9017 11.3085C11.9544 11.6944 12.0323 12.9197 11.5354 13.8596C11.3633 14.2273 10.5538 15.176 8.6922 16.029C6.83063 16.882 5.12314 17.6681 4.5021 17.9546L7.4118 13.4195L7.41298 13.4199C7.87374 13.5439 8.95966 13.5347 9.70596 12.5453C9.21404 13.0578 8.40645 13.3136 7.13806 12.7997C5.48768 12.131 4.62526 11.3343 3.74965 10.5253C3.00613 9.83842 2.25309 9.14271 1 8.50917C1.515 8.36392 3.1564 8.31657 5.60199 9.28916C6.53373 9.65971 7.24716 9.97473 7.81739 10.2265C8.30401 10.4414 8.68636 10.6102 9.01108 10.7282C9.17423 10.3362 9.34415 9.85294 9.45527 9.34965C9.71944 8.15312 10.0233 7.6088 10.9162 7.42129C11.0901 7.40271 11.5205 7.38207 11.8513 7.44808C12.0913 7.49601 12.2889 7.52819 12.4914 7.52051C12.6396 7.49954 13.039 7.42984 13.4977 7.31155C14.0782 7.16186 15.0899 6.95214 15.7498 7.07961C16.2776 7.18158 16.5585 7.31324 16.6329 7.36632C16.3527 7.29717 15.6378 7.1909 15.0201 7.31894ZM18.5 8C18.5 8.55229 18.0523 9 17.5 9C16.9477 9 16.5 8.55229 16.5 8C16.5 7.44772 16.9477 7 17.5 7C18.0523 7 18.5 7.44772 18.5 8ZM18.5 12C18.5 12.5523 18.0523 13 17.5 13C16.9477 13 16.5 12.5523 16.5 12C16.5 11.4477 16.9477 11 17.5 11C18.0523 11 18.5 11.4477 18.5 12ZM18.5 16C18.5 16.5523 18.0523 17 17.5 17C16.9477 17 16.5 16.5523 16.5 16C16.5 15.4477 16.9477 15 17.5 15C18.0523 15 18.5 15.4477 18.5 16Z" })));
};

var Icon$T = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M17.4461 18.8459C18.2136 18.827 19 19.2117 19 20H22C23.1046 20 24 19.1046 24 18V6C24 4.89543 23.1046 4 22 4H19C19 4.7883 18.2136 5.17301 17.4461 5.15412V18.8459Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.4459 18.8459C16.7144 18.864 16 19.2487 16 20H2C0.89543 20 0 19.1046 0 18V6C0 4.89543 0.895431 4 2 4H16C16 4.75134 16.7144 5.13605 17.4459 5.15411V18.8459ZM7.34433 8.35528L7.33915 8.38081C7.32592 8.50816 7.31218 8.63416 7.29795 8.75749C7.28773 9.05111 7.3261 9.39892 7.49697 9.61974C7.75759 9.95654 8.49111 10.2523 8.83823 10.3626C8.74507 9.00897 8.3818 6.57837 7.52896 6C7.49689 6.56411 7.43123 7.48874 7.34177 8.35551L7.34433 8.35528ZM15.0201 7.31894C14.5294 7.42067 13.8044 7.63272 13.3179 7.7835C12.6954 8.0182 12.3265 8.47321 12.1354 8.85208C11.9522 9.28688 11.8639 9.76308 11.8394 10.0201C11.8426 10.3209 11.8596 10.9997 11.9017 11.3085C11.9544 11.6944 12.0323 12.9197 11.5354 13.8596C11.3633 14.2273 10.5538 15.176 8.6922 16.029C6.83063 16.882 5.12314 17.6681 4.5021 17.9546L7.4118 13.4195L7.41298 13.4199C7.87374 13.5439 8.95966 13.5347 9.70596 12.5453C9.21404 13.0578 8.40645 13.3136 7.13806 12.7997C5.48768 12.131 4.62526 11.3343 3.74965 10.5253L3.74965 10.5253C3.00612 9.83842 2.25309 9.14271 1 8.50917C1.515 8.36392 3.1564 8.31657 5.60199 9.28916C6.53373 9.65971 7.24716 9.97473 7.81739 10.2265C8.30401 10.4414 8.68636 10.6102 9.01108 10.7282C9.17423 10.3362 9.34415 9.85294 9.45527 9.34965C9.71944 8.15312 10.0233 7.6088 10.9162 7.42129C11.0901 7.40271 11.5205 7.38207 11.8513 7.44809C12.0913 7.49601 12.2889 7.52819 12.4914 7.52051C12.6396 7.49954 13.039 7.42984 13.4977 7.31155C14.0782 7.16186 15.0899 6.95214 15.7498 7.07961C16.2776 7.18158 16.5585 7.31324 16.6329 7.36632C16.3527 7.29717 15.6378 7.1909 15.0201 7.31894Z" })));
};

var Icon$S = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 8.99998C12.7363 8.99998 13.333 8.403 13.333 7.66661C13.333 6.93028 12.7363 6.3333 12 6.3333C11.2637 6.3333 10.6665 6.93028 10.6665 7.66661C10.6665 8.403 11.2637 8.99998 12 8.99998Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 1C1.89543 1 1 1.89543 1 3V21C1 22.1046 1.89543 23 3 23C9 23 10.1667 18.6667 10 16.5H14C13.8333 18.6667 15 23 21 23C22.1046 23 23 22.1046 23 21V3C23 1.89543 22.1046 1 21 1H3ZM11.4834 3.4304C9.27637 5.26982 8 7.99461 8 10.8678V11.6667L6.87305 12.2301C5.9292 12.702 5.3335 13.6664 5.3335 14.7214C5.3335 14.8753 5.45801 15 5.61182 15H18.3882C18.542 15 18.6665 14.8753 18.6665 14.7214C18.6665 13.6664 18.0708 12.702 17.127 12.2301L16 11.6667V10.8678C16 7.99461 14.7236 5.26982 12.5166 3.4304C12.2173 3.18108 11.7827 3.18108 11.4834 3.4304ZM5.20703 3.01337L5 2L4.79297 3.01337C4.75244 3.21173 4.65381 3.38818 4.51562 3.5246C4.38086 3.65808 4.20752 3.75317 4.01318 3.79285L3 4L4.01318 4.20715C4.14453 4.23401 4.26611 4.28625 4.37305 4.35864C4.44824 4.40924 4.51562 4.46973 4.57422 4.53821C4.68164 4.66425 4.7583 4.8175 4.79297 4.98663L5 6L5.20703 4.98663C5.2876 4.59412 5.59424 4.28735 5.98682 4.20715L7 4L5.98682 3.79285C5.59424 3.71265 5.2876 3.40588 5.20703 3.01337ZM19 5L19.377 6.84369C19.457 7.23621 19.7637 7.54297 20.1562 7.62317L22 8L20.1562 8.37683C19.7637 8.45703 19.457 8.76379 19.377 9.15631L19 11L18.623 9.15631C18.543 8.76379 18.2363 8.45703 17.8438 8.37683L16 8L17.8438 7.62317C18.2363 7.54297 18.543 7.23621 18.623 6.84369L19 5Z" })));
};

var Icon$R = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M3 1C1.89543 1 1 1.89543 1 3V21C1 22.1046 1.89543 23 3 23C9 23 10.1667 18.6667 10 16.5H14C13.8333 18.6667 15 23 21 23C22.1046 23 23 22.1046 23 21V3C23 1.89543 22.1046 1 21 1H3Z" }),
        React__default["default"].createElement("path", { d: "M5 2L5.20703 3.01337C5.2876 3.40588 5.59424 3.71265 5.98682 3.79285L7 4L5.98682 4.20715C5.59424 4.28735 5.2876 4.59412 5.20703 4.98663L5 6L4.79297 4.98663C4.7583 4.8175 4.68164 4.66425 4.57422 4.53821C4.51562 4.46973 4.44824 4.40924 4.37305 4.35864C4.26611 4.28625 4.14453 4.23401 4.01318 4.20715L3 4L4.01318 3.79285C4.20752 3.75317 4.38086 3.65808 4.51562 3.5246C4.65381 3.38818 4.75244 3.21173 4.79297 3.01337L5 2Z" }),
        React__default["default"].createElement("path", { d: "M19.377 6.84369L19 5L18.623 6.84369C18.543 7.23621 18.2363 7.54297 17.8438 7.62317L16 8L17.8438 8.37683C18.2363 8.45703 18.543 8.76379 18.623 9.15631L19 11L19.377 9.15631C19.457 8.76379 19.7637 8.45703 20.1562 8.37683L22 8L20.1562 7.62317C19.7637 7.54297 19.457 7.23621 19.377 6.84369Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.4834 3.4304C9.27637 5.26982 8 7.99461 8 10.8678V11.6667L6.87305 12.2301C5.9292 12.702 5.3335 13.6664 5.3335 14.7214C5.3335 14.8753 5.45801 15 5.61182 15H18.3882C18.542 15 18.6665 14.8753 18.6665 14.7214C18.6665 13.6664 18.0708 12.702 17.127 12.2301L16 11.6667V10.8678C16 7.99461 14.7236 5.26982 12.5166 3.4304C12.2173 3.18108 11.7827 3.18108 11.4834 3.4304ZM12 8.99998C12.7363 8.99998 13.333 8.403 13.333 7.66661C13.333 6.93028 12.7363 6.3333 12 6.3333C11.2637 6.3333 10.6665 6.93028 10.6665 7.66661C10.6665 8.403 11.2637 8.99998 12 8.99998Z" })));
};

var Icon$Q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.6586 1.11454C15.3904 0.96182 15.0627 0.96182 14.7945 1.11454L7.90112 5.0397C7.62435 5.19729 7.45312 5.49338 7.45312 5.81439V13.6277C7.45312 13.9487 7.62435 14.2448 7.90112 14.4024L14.7945 18.3276C15.0627 18.4803 15.3904 18.4803 15.6586 18.3276L22.552 14.4024C22.8287 14.2448 23 13.9487 23 13.6277V5.81439C23 5.49338 22.8287 5.19729 22.552 5.0397L15.6586 1.11454ZM10.0528 11.7792V9.06991H10.0559L12.1185 11.7792H12.9879V7.4187H11.982V10.1248L9.92583 7.4187H9.04688V11.7792H10.0528ZM15.3308 11.7792V10.1728H17.0792V9.3232H15.3308V8.32286H17.3679V7.4187H14.3249V11.7792H15.3308ZM20.3328 8.32286V11.7792H19.3332V8.32286H18.1243V7.4187H21.5385V8.32286H20.3328Z" }),
        React__default["default"].createElement("path", { d: "M1 14.2414C1 12.5178 3.18493 11.0732 6.12855 10.6826V14.3549C6.12855 14.6873 6.30482 14.9942 6.59046 15.1591L10.696 17.5297C9.80072 17.7696 8.79322 17.9044 7.72788 17.9044C4.01303 17.9044 1 16.2653 1 14.2414Z" }),
        React__default["default"].createElement("path", { d: "M7.72788 18.9923C9.29422 18.9923 10.7352 18.701 11.8784 18.2124L13.1592 18.952C11.9352 19.8617 9.95858 20.4522 7.72788 20.4522C4.01131 20.4522 1 18.8131 1 16.7893V15.3557C1.01722 17.371 4.02251 18.9923 7.72788 18.9923Z" }),
        React__default["default"].createElement("path", { d: "M7.72788 21.5401C10.4701 21.5401 12.8282 20.6473 13.8763 19.366L14.4261 19.6835C14.1057 21.5447 11.2299 23 7.72788 23C4.01131 23 1 21.3609 1 19.3371V17.9035C1.01722 19.9188 4.02251 21.5401 7.72788 21.5401Z" })));
};

var Icon$P = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M14.7945 1.11454C15.0627 0.96182 15.3904 0.96182 15.6586 1.11454L22.552 5.0397C22.8287 5.19729 23 5.49338 23 5.81439V13.6277C23 13.9487 22.8287 14.2448 22.552 14.4024L15.6586 18.3276C15.3904 18.4803 15.0627 18.4803 14.7945 18.3276L7.90112 14.4024C7.62435 14.2448 7.45312 13.9487 7.45312 13.6277V5.81439C7.45312 5.49338 7.62435 5.19729 7.90112 5.0397L14.7945 1.11454Z" }),
        React__default["default"].createElement("path", { d: "M10.0528 11.7792V9.06991H10.0559L12.1185 11.7792H12.9879V7.4187H11.982V10.1248L9.92583 7.4187H9.04688V11.7792H10.0528Z" }),
        React__default["default"].createElement("path", { d: "M15.3308 11.7792V10.1728H17.0792V9.3232H15.3308V8.32286H17.3679V7.4187H14.3249V11.7792H15.3308Z" }),
        React__default["default"].createElement("path", { d: "M20.3328 11.7792V8.32286H21.5385V7.4187H18.1243V8.32286H19.3332V11.7792H20.3328Z" }),
        React__default["default"].createElement("path", { d: "M1 14.2414C1 12.5178 3.18493 11.0732 6.12855 10.6826V14.3549C6.12855 14.6873 6.30482 14.9942 6.59046 15.1591L10.696 17.5297C9.80072 17.7696 8.79322 17.9044 7.72788 17.9044C4.01303 17.9044 1 16.2653 1 14.2414Z" }),
        React__default["default"].createElement("path", { d: "M7.72788 18.9923C9.29422 18.9923 10.7352 18.701 11.8784 18.2124L13.1592 18.952C11.9352 19.8617 9.95858 20.4522 7.72788 20.4522C4.01131 20.4522 1 18.8131 1 16.7893V15.3557C1.01722 17.371 4.02251 18.9923 7.72788 18.9923Z" }),
        React__default["default"].createElement("path", { d: "M7.72788 21.5401C10.4701 21.5401 12.8282 20.6473 13.8763 19.366L14.4261 19.6835C14.1057 21.5447 11.2299 23 7.72788 23C4.01131 23 1 21.3609 1 19.3371V17.9035C1.01722 19.9188 4.02251 21.5401 7.72788 21.5401Z" })));
};

var Icon$O = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M8 12C8 13.1046 8.89539 14 10 14C11.1046 14 12 13.1046 12 12C12 10.8954 11.1046 10 10 10C8.89539 10 8 10.8954 8 12Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21L3 22C3 22.5523 3.44772 23 4 23H6C6.55228 23 7 22.5523 7 22V21H17V22C17 22.5523 17.4477 23 18 23H20C20.5523 23 21 22.5523 21 22V21C22.1046 21 23 20.1046 23 19V5C23 3.89543 22.1046 3 21 3H3ZM20 5C19.4477 5 19 5.44772 19 6V18C19 18.5523 19.4477 19 20 19C20.5523 19 21 18.5523 21 18V6C21 5.44772 20.5523 5 20 5ZM9 7C9 6.44775 9.44775 6 10 6C10.5522 6 11 6.44775 11 7V8.12598C12.4056 8.48779 13.5122 9.59436 13.874 11H15C15.5522 11 16 11.4478 16 12C16 12.5522 15.5522 13 15 13H13.874C13.5122 14.4056 12.4056 15.5122 11 15.874V17C11 17.5522 10.5522 18 10 18C9.44775 18 9 17.5522 9 17V15.874C7.59436 15.5122 6.48779 14.4056 6.12598 13H5C4.44775 13 4 12.5522 4 12C4 11.4478 4.44775 11 5 11H6.12598C6.48779 9.59436 7.59436 8.48779 9 8.12598V7Z" })));
};

var Icon$N = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M17 3H21C22.1046 3 23 3.89543 23 5V19C23 20.1046 22.1046 21 21 21H17V3Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M3 21H7V22C7 22.5523 6.55228 23 6 23H4C3.44772 23 3 22.5523 3 22V21Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M17 21H21V22C21 22.5523 20.5523 23 20 23H18C17.4477 23 17 22.5523 17 22V21Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3 3C1.89543 3 1 3.89543 1 5V19C1 20.1046 1.89543 21 3 21H17C18.1046 21 19 20.1046 19 19V5C19 3.89543 18.1046 3 17 3H3ZM10 6C9.44775 6 9 6.44775 9 7V8.12598C7.59436 8.48779 6.48779 9.59436 6.12598 11H5C4.44775 11 4 11.4478 4 12C4 12.5522 4.44775 13 5 13H6.12598C6.48779 14.4056 7.59436 15.5122 9 15.874V17C9 17.5522 9.44775 18 10 18C10.5522 18 11 17.5522 11 17V15.874C12.4056 15.5122 13.5122 14.4056 13.874 13H15C15.5522 13 16 12.5522 16 12C16 11.4478 15.5522 11 15 11H13.874C13.5122 9.59436 12.4056 8.48779 11 8.12598V7C11 6.44775 10.5522 6 10 6ZM10 14C8.89539 14 8 13.1046 8 12C8 10.8954 8.89539 10 10 10C11.1046 10 12 10.8954 12 12C12 13.1046 11.1046 14 10 14Z" })));
};

var Icon$M = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M22.3951 12.8839H14.7704C14.4372 12.8839 14.1655 13.1555 14.1655 13.4887C14.1655 13.6584 14.2376 13.8113 14.3501 13.9215L19.7191 19.2905C19.8293 19.4093 19.9887 19.4837 20.1627 19.4837C20.3727 19.4837 20.5573 19.3776 20.6656 19.2163C21.9856 17.6841 22.8344 15.7381 22.9873 13.5969C22.9958 13.5608 23 13.5248 23 13.4886C23 13.1555 22.7305 12.8839 22.3951 12.8839Z" }),
        React__default["default"].createElement("path", { d: "M12.4678 1.9231C12.1346 1.92513 11.8651 2.19473 11.8651 2.52789V11.0015C11.8651 11.3369 12.1346 11.6085 12.4678 11.6085H20.9436C21.2769 11.6085 21.5484 11.3369 21.5484 11.0015C21.2491 6.12499 17.3465 2.22237 12.4678 1.9231Z" }),
        React__default["default"].createElement("path", { d: "M17.126 18.7961L10.8742 12.5443C10.7681 12.4361 10.7045 12.2854 10.7045 12.122L10.7023 3.29177C10.7023 2.95861 10.4328 2.68909 10.0996 2.68909C5.02134 2.99895 0.999878 7.21768 0.999878 12.3725C0.999878 17.7308 5.34397 22.077 10.7023 22.077C13.147 22.077 15.3794 21.173 17.0856 19.681C17.2172 19.5706 17.3 19.4052 17.3 19.2205C17.3 19.0571 17.2342 18.9064 17.126 18.7961Z" })));
};

var Icon$L = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M22.3951 12.8839H14.7704C14.4372 12.8839 14.1655 13.1555 14.1655 13.4887C14.1655 13.6584 14.2376 13.8113 14.3501 13.9215L19.7191 19.2905C19.8293 19.4093 19.9887 19.4837 20.1627 19.4837C20.3727 19.4837 20.5573 19.3776 20.6656 19.2163C21.9856 17.6841 22.8344 15.7381 22.9873 13.5969C22.9958 13.5608 23 13.5248 23 13.4886C23 13.1555 22.7305 12.8839 22.3951 12.8839Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M12.4678 1.9231C12.1346 1.92513 11.8651 2.19473 11.8651 2.52789V11.0015C11.8651 11.3369 12.1346 11.6085 12.4678 11.6085H20.9436C21.2769 11.6085 21.5484 11.3369 21.5484 11.0015C21.2491 6.12499 17.3465 2.22237 12.4678 1.9231Z" }),
        React__default["default"].createElement("path", { d: "M17.126 18.7961L10.8742 12.5443C10.7681 12.4361 10.7045 12.2854 10.7045 12.122L10.7023 3.29177C10.7023 2.95861 10.4328 2.68909 10.0996 2.68909C5.02134 2.99895 0.999878 7.21768 0.999878 12.3725C0.999878 17.7308 5.34397 22.077 10.7023 22.077C13.147 22.077 15.3794 21.173 17.0856 19.681C17.2172 19.5706 17.3 19.4052 17.3 19.2205C17.3 19.0571 17.2342 18.9064 17.126 18.7961Z" })));
};

var Icon$K = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M22.0267 9.23679L15.6462 2.85567C15.4359 2.64577 15.1862 2.50879 14.923 2.41602V13.8725C14.923 14.9387 14.0556 15.8337 12.9894 15.8337H1.53308C1.62598 16.0969 1.76314 16.3466 1.97321 16.5569L4.45032 19.0061H14.9919L22.0273 11.9716C22.7801 11.2176 22.7801 9.9908 22.0267 9.23679Z" }),
        React__default["default"].createElement("path", { d: "M12.9115 2.85628L1.97265 13.7944C1.76296 14.0045 1.62594 14.2744 1.53308 14.5373H12.9895C13.3451 14.5373 13.6329 14.2281 13.6329 13.8724V2.41663C13.3699 2.50961 13.1215 2.64668 12.9115 2.85628Z" }),
        React__default["default"].createElement("path", { d: "M22.3555 20.295H1.64453C1.28828 20.295 1 20.5833 1 20.9396C1 21.2958 1.28828 21.5841 1.64453 21.5841H22.3555C22.7117 21.5841 23 21.2958 23 20.9396C23 20.5833 22.7117 20.295 22.3555 20.295Z" })));
};

var Icon$J = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M14.2817 2.35144V13.2956C14.2817 13.8241 14.0625 14.314 13.7145 14.662C13.3664 15.0101 12.8765 15.2292 12.3481 15.2292H1.36096C1.36096 14.7007 1.61873 14.1722 1.92806 13.8628C3.91326 11.8776 5.46443 10.3694 7.43674 8.38421C9.42186 6.41199 10.9301 4.90378 12.9153 2.91859C13.2246 2.60925 13.7531 2.35144 14.2817 2.35144Z" }),
        React__default["default"].createElement("path", { d: "M23 21.0043C23 21.3652 22.7164 21.6488 22.3555 21.6488H1.64453C1.28355 21.6488 1 21.3652 1 21.0043C1 20.6433 1.28355 20.3597 1.64453 20.3597H22.3555C22.7164 20.3597 23 20.6433 23 21.0043Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M22.0291 12.0323L16.5505 17.5109L13.7016 20.3597H5.73771C5.27592 19.9032 4.83135 19.4647 4.38679 19.0262L4.38615 19.0256C3.59872 18.2489 2.81127 17.4722 1.92819 16.5956C1.5544 16.2218 1.36108 15.719 1.36108 15.2292L12.3482 15.2292C12.8767 15.2292 13.3665 15.0101 13.7146 14.662C14.0626 14.314 14.2818 13.8241 14.2818 13.2956L14.2818 2.35144C14.7716 2.35144 15.2743 2.54484 15.6482 2.91863L22.0291 9.29949C22.7767 10.0601 22.7767 11.2846 22.0291 12.0323Z" })));
};

var Icon$I = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M18.3248 2.16131C17.7775 1.64617 17.077 1.3988 16.371 1.3988C15.5763 1.3988 14.7738 1.71213 14.1754 2.31129L13.9186 2.56808L13.6618 2.31051C13.0634 1.71213 12.2609 1.3988 11.4662 1.3988C10.7602 1.3988 10.0598 1.64617 9.51242 2.16131C8.3086 3.29446 8.28739 5.19012 9.44803 6.35075L13.9186 10.8213L18.3892 6.35075C19.5498 5.19012 19.5286 3.29446 18.3248 2.16131Z" }),
        React__default["default"].createElement("path", { d: "M22.7129 13.0979C22.0258 12.6322 21.2161 12.7641 20.4992 13.178C19.7822 13.5918 15.6658 17.1114 15.6658 17.1114L11.6138 17.1122C11.4253 17.1122 11.2212 16.9002 11.2212 16.7125C11.2212 16.4918 11.4135 16.3199 11.6138 16.3199H14.0929C14.9606 16.3199 15.932 15.7545 15.932 14.7493C15.932 13.6813 14.9606 13.1788 14.0929 13.1788C12.5875 13.1788 12.2946 13.185 12.2946 13.185C11.6915 13.185 11.0798 13.1489 10.6086 12.8968C9.98042 12.5749 9.25639 12.3927 8.48368 12.3927C7.1864 12.3927 6.02498 12.9102 5.22871 13.7261L1 17.8896L5.71166 22.6013L7.28221 21.0307H15.2347C16.0263 21.0307 16.7903 20.7402 17.3816 20.2148L22.7663 14.1745C23.0953 13.8824 23.0765 13.3452 22.7129 13.0979Z" })));
};

var Icon$H = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M18.3248 2.16131C17.7775 1.64617 17.077 1.3988 16.371 1.3988C15.5763 1.3988 14.7738 1.71213 14.1754 2.31129L13.9186 2.56808L13.6618 2.31051C13.0634 1.71213 12.2609 1.3988 11.4662 1.3988C10.7602 1.3988 10.0598 1.64617 9.51242 2.16131C8.3086 3.29446 8.28739 5.19012 9.44803 6.35075L13.9186 10.8213L18.3892 6.35075C19.5498 5.19012 19.5286 3.29446 18.3248 2.16131Z" }),
        React__default["default"].createElement("path", { d: "M22.7129 13.0979C22.0258 12.6322 21.2161 12.7641 20.4992 13.178C19.7822 13.5918 15.6658 17.1114 15.6658 17.1114L11.6138 17.1122C11.4253 17.1122 11.2212 16.9002 11.2212 16.7125C11.2212 16.4918 11.4135 16.3199 11.6138 16.3199H14.0929C14.9606 16.3199 15.932 15.7545 15.932 14.7493C15.932 13.6813 14.9606 13.1788 14.0929 13.1788C12.5875 13.1788 12.2946 13.185 12.2946 13.185C11.6915 13.185 11.0798 13.1489 10.6086 12.8968C9.98042 12.5749 9.25639 12.3927 8.48368 12.3927C7.1864 12.3927 6.02498 12.9102 5.22871 13.7261L1 17.8896L5.71166 22.6013L7.28221 21.0307H15.2347C16.0263 21.0307 16.7903 20.7402 17.3816 20.2148L22.7663 14.1745C23.0953 13.8824 23.0765 13.3452 22.7129 13.0979Z" })));
};

var Icon$G = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_4035_33679)" },
            React__default["default"].createElement("path", { d: "M21.294 4.51562C20.4618 4.68013 19.6683 4.91238 19.0151 5.05753C17.5248 5.39138 16.1314 6.53326 15.8265 8.62347C15.5556 10.4911 16.1846 11.2943 15.9088 13.4668C15.4249 17.2601 11.7864 18.5665 10.0881 19.36C9.10592 19.8148 6.72057 20.8599 4.88196 21.6582C6.8754 23.1291 9.33333 24 11.9993 24C18.628 24 23.9987 18.6294 23.9987 12.0007C23.9987 9.17505 23.0213 6.5768 21.3859 4.53014C21.3569 4.5253 21.3278 4.52046 21.294 4.51562Z" }),
            React__default["default"].createElement("path", { d: "M10.6494 10.2382C11.5736 8.23988 11.2397 8.23504 11.9413 6.35772C12.8267 3.9772 15.5798 4.65459 16.3394 4.75619C17.5926 4.92554 17.9216 4.4804 20.5634 4.05462C20.694 4.03526 20.8198 4.01591 20.9456 4.0014C18.749 1.5483 15.5556 0 11.9993 0C7.2238 0 3.10144 2.78695 1.1709 6.82705C5.12875 7.80925 9.4011 9.94301 10.6494 10.2382ZM8.02698 2.09021C8.37535 2.14343 10.0688 4.24816 10.3881 9.6527C10.3881 9.6527 8.21084 9.13015 7.74152 8.00763C7.35444 7.08349 7.85764 5.86904 8.02698 2.09021ZM21.3666 4.50459C21.3714 4.51427 21.3811 4.51911 21.3859 4.52879C21.3569 4.52395 21.323 4.52395 21.294 4.51911C21.3182 4.50943 21.3424 4.50943 21.3666 4.50459ZM0 11.9993C0 11.0413 0.111284 10.1124 0.324176 9.22208C0.759636 9.58496 1.22413 9.98656 1.71765 10.4462C4.84329 13.3444 9.92849 15.633 11.7816 13.5041C11.7865 13.5089 11.7913 13.5089 11.7913 13.5138C11.4526 13.9589 10.1607 15.3669 7.69313 14.9314L3.79334 20.7521C1.46121 18.5651 0 15.454 0 11.9993Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_4035_33679" },
                React__default["default"].createElement("rect", { width: "23.9987", height: "24" })))));
};

var Icon$F = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_4035_33675)" },
            React__default["default"].createElement("path", { opacity: "0.48", d: "M21.294 4.51562C20.4618 4.68013 19.6683 4.91238 19.0151 5.05753C17.5248 5.39138 16.1314 6.53326 15.8265 8.62347C15.5556 10.4911 16.1846 11.2943 15.9088 13.4668C15.4249 17.2601 11.7864 18.5665 10.0881 19.36C9.10592 19.8148 6.72057 20.8599 4.88196 21.6582C6.8754 23.1291 9.33333 24 11.9993 24C18.628 24 23.9987 18.6294 23.9987 12.0007C23.9987 9.17505 23.0213 6.5768 21.3859 4.53014C21.3569 4.5253 21.3278 4.52046 21.294 4.51562Z" }),
            React__default["default"].createElement("path", { opacity: "0.48", d: "M10.6494 10.2382C11.5736 8.23988 11.2397 8.23504 11.9413 6.35772C12.8267 3.9772 15.5798 4.65459 16.3394 4.75619C17.5926 4.92554 17.9216 4.4804 20.5634 4.05462C20.694 4.03526 20.8198 4.01591 20.9456 4.0014C18.749 1.5483 15.5556 0 11.9993 0C7.2238 0 3.10144 2.78695 1.1709 6.82705C5.12875 7.80925 9.4011 9.94301 10.6494 10.2382ZM8.02698 2.09021C8.37535 2.14343 10.0688 4.24816 10.3881 9.6527C10.3881 9.6527 8.21084 9.13015 7.74152 8.00763C7.35444 7.08349 7.85764 5.86904 8.02698 2.09021ZM21.3666 4.50459C21.3714 4.51427 21.3811 4.51911 21.3859 4.52879C21.3569 4.52395 21.323 4.52395 21.294 4.51911C21.3182 4.50943 21.3424 4.50943 21.3666 4.50459ZM0 11.9993C0 11.0413 0.111284 10.1124 0.324176 9.22208C0.759636 9.58496 1.22413 9.98656 1.71765 10.4462C4.84329 13.3444 9.92849 15.633 11.7816 13.5041C11.7865 13.5089 11.7913 13.5089 11.7913 13.5138C11.4526 13.9589 10.1607 15.3669 7.69313 14.9314L3.79334 20.7521C1.46121 18.5651 0 15.454 0 11.9993Z" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.9979 12.1405C23.9984 12.0935 23.9987 12.0465 23.9987 11.9993C23.9987 8.92692 22.844 6.1242 20.9448 4.00149C20.8356 4.01411 20.7263 4.03038 20.6139 4.04711L20.5634 4.05462C19.452 4.23374 18.75 4.41628 18.2162 4.55506C17.4812 4.74618 17.0654 4.8543 16.3394 4.75619C16.2755 4.74764 16.1975 4.73502 16.1076 4.72048L16.1076 4.72047C15.1297 4.56223 12.7522 4.17754 11.9413 6.35772C11.6402 7.16349 11.5298 7.6243 11.4288 8.04584C11.2945 8.60643 11.1769 9.09756 10.6494 10.2382C10.1905 10.1296 9.32273 9.77259 8.21215 9.31562L8.21214 9.31562C6.30205 8.52967 3.6736 7.44813 1.1709 6.82705C1.72903 5.65905 2.47034 4.59579 3.35767 3.67433C5.54034 1.40916 8.60528 0 11.9993 0C14.9347 0 17.6227 1.05482 19.7072 2.80259C17.6223 1.05336 14.9338 0 11.9993 0C8.60442 0 5.5396 1.40846 3.35767 3.67433C1.70024 5.39439 0.551551 7.60805 0.153787 10.0731C0.200337 9.78581 0.257231 9.50203 0.324176 9.22208C0.759636 9.58496 1.22413 9.98656 1.71765 10.4462C4.84329 13.3444 9.92849 15.633 11.7816 13.5041C11.7835 13.506 11.7853 13.5071 11.7869 13.5081C11.7894 13.5097 11.7913 13.5108 11.7913 13.5138C11.4526 13.9589 10.1607 15.3669 7.69313 14.9314L3.79334 20.7521C1.46121 18.5651 0 15.454 0 11.9993C0 17.369 3.52702 21.9148 8.39073 23.4466C7.11679 23.0444 5.93461 22.435 4.88196 21.6582C6.72057 20.8599 9.10592 19.8148 10.0881 19.36C10.2312 19.2931 10.388 19.2227 10.5555 19.1474C12.3769 18.3288 15.4657 16.9406 15.9088 13.4668C16.0495 12.3583 15.9547 11.6063 15.864 10.8874C15.777 10.1975 15.6938 9.53815 15.8265 8.62347C16.1313 6.53326 17.5248 5.39138 19.0151 5.05753C19.2757 4.99961 19.5587 4.92782 19.8576 4.852C20.3077 4.73782 20.7938 4.61449 21.294 4.51562C21.2963 4.51596 21.2986 4.51629 21.3009 4.51662C21.3147 4.51205 21.3285 4.5102 21.3424 4.50836C21.3505 4.50728 21.3585 4.50621 21.3666 4.50459C21.369 4.50943 21.3726 4.51306 21.3763 4.51669C21.3799 4.52032 21.3835 4.52395 21.3859 4.52879C21.3765 4.52722 21.3667 4.52616 21.3566 4.52528C21.3665 4.5269 21.3762 4.52852 21.3859 4.53014C23.0213 6.5768 23.9987 9.17505 23.9987 12.0007C23.9987 12.0474 23.9984 12.0939 23.9979 12.1405ZM8.02698 2.09021C8.37535 2.14343 10.0688 4.24816 10.3881 9.6527C10.3881 9.6527 8.21084 9.13015 7.74152 8.00763C7.51844 7.47504 7.59105 6.84603 7.72504 5.68532C7.82355 4.83199 7.95523 3.69127 8.02698 2.09021Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_4035_33675" },
                React__default["default"].createElement("rect", { width: "23.9987", height: "24" })))));
};

var Icon$E = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M20.823 12.7443H19.1216C19.295 13.2191 19.3898 13.7315 19.3898 14.2655V20.6958C19.3898 20.9185 19.351 21.1322 19.2805 21.331H22.0933C23.144 21.331 23.9988 20.4762 23.9988 19.4255V15.92C23.9988 14.1689 22.5741 12.7443 20.823 12.7443Z" }),
        React__default["default"].createElement("path", { d: "M6.60783 14.2655C6.60783 13.7314 6.70258 13.2191 6.876 12.7443H5.17461C3.42345 12.7443 1.99878 14.1689 1.99878 15.9201V19.4255C1.99878 20.4762 2.85356 21.331 3.90428 21.331H6.7171C6.64659 21.1322 6.60783 20.9185 6.60783 20.6958V14.2655Z" }),
        React__default["default"].createElement("path", { d: "M14.9436 11.0897H11.054C9.30285 11.0897 7.87817 12.5144 7.87817 14.2655V20.6958C7.87817 21.0466 8.16254 21.331 8.51334 21.331H17.4843C17.8351 21.331 18.1195 21.0466 18.1195 20.6958V14.2655C18.1195 12.5144 16.6948 11.0897 14.9436 11.0897Z" }),
        React__default["default"].createElement("path", { d: "M12.9988 2.66895C10.8928 2.66895 9.17944 4.38228 9.17944 6.48832C9.17944 7.91681 9.96788 9.16442 11.1322 9.81943C11.6845 10.1301 12.3212 10.3076 12.9988 10.3076C13.6763 10.3076 14.313 10.1301 14.8653 9.81943C16.0297 9.16442 16.8181 7.91677 16.8181 6.48832C16.8181 4.38233 15.1048 2.66895 12.9988 2.66895Z" }),
        React__default["default"].createElement("path", { d: "M6.29214 6.22888C4.71712 6.22888 3.43579 7.51021 3.43579 9.08524C3.43579 10.6603 4.71712 11.9416 6.29214 11.9416C6.69167 11.9416 7.07211 11.8588 7.41771 11.7101C8.01524 11.4528 8.50792 10.9974 8.81278 10.427C9.02677 10.0267 9.1485 9.56997 9.1485 9.08524C9.1485 7.51026 7.86717 6.22888 6.29214 6.22888Z" }),
        React__default["default"].createElement("path", { d: "M19.7055 6.22888C18.1305 6.22888 16.8491 7.51021 16.8491 9.08524C16.8491 9.57001 16.9709 10.0267 17.1848 10.427C17.4897 10.9975 17.9824 11.4529 18.5799 11.7101C18.9255 11.8588 19.306 11.9416 19.7055 11.9416C21.2805 11.9416 22.5618 10.6603 22.5618 9.08524C22.5618 7.51021 21.2805 6.22888 19.7055 6.22888Z" })));
};

var Icon$D = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M20.8273 12.7374H18.5941C16.8444 12.7374 15.4115 14.1642 15.4115 15.9138V19.4162C15.4115 20.466 16.275 21.3259 17.3249 21.3259H22.0965C23.1463 21.3259 24 20.466 24 19.4162V15.9138C24 14.1641 22.5769 12.7374 20.8273 12.7374Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M19.7107 6.23083C18.137 6.23083 16.8568 7.51109 16.8568 9.0847C16.8568 10.6583 18.137 11.9386 19.7107 11.9386C21.2843 11.9386 22.5645 10.6583 22.5645 9.0847C22.5645 7.51114 21.2843 6.23083 19.7107 6.23083Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M7.41571 12.7374H5.18257C3.43293 12.7374 2 14.1641 2 15.9138V19.4162C2 20.4659 2.86355 21.3259 3.91336 21.3259H8.68496C9.73478 21.3259 10.5885 20.4659 10.5885 19.4162V15.9138C10.5885 14.1641 9.1654 12.7374 7.41571 12.7374Z" }),
        React__default["default"].createElement("path", { d: "M14.9431 11.0875H11.0569C9.30722 11.0875 7.88379 12.511 7.88379 14.2606V20.6853C7.88379 21.0358 8.16794 21.32 8.5184 21.32H17.4816C17.8321 21.32 18.1162 21.0358 18.1162 20.6853V14.2606C18.1162 12.511 16.6928 11.0875 14.9431 11.0875Z" }),
        React__default["default"].createElement("path", { d: "M13 2.67407C10.8958 2.67407 9.18396 4.38595 9.18396 6.49014C9.18396 8.59432 10.8958 10.3062 13 10.3062C15.1043 10.3062 16.8161 8.59432 16.8161 6.49014C16.8161 4.38595 15.1042 2.67407 13 2.67407Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M6.29905 6.23083C4.7254 6.23083 3.44519 7.51109 3.44519 9.0847C3.44519 10.6583 4.7254 11.9386 6.29905 11.9386C7.8727 11.9386 9.15292 10.6583 9.15292 9.0847C9.15292 7.51114 7.8727 6.23083 6.29905 6.23083Z" })));
};

var Icon$C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M16.9089 8.82031C12.9996 8.82031 9.81909 12.0008 9.81909 15.9102C9.81909 19.8195 12.9996 23 16.9089 23C20.8183 23 23.9988 19.8195 23.9988 15.9102C23.9988 12.0008 20.8183 8.82031 16.9089 8.82031ZM16.9089 15.2656C17.9752 15.2656 18.8425 16.133 18.8425 17.1992C18.8425 18.0384 18.3021 18.7471 17.5535 19.0141V20.4219H16.2644V19.0141C15.5158 18.7471 14.9753 18.0384 14.9753 17.1992H16.2644C16.2644 17.5548 16.5533 17.8438 16.9089 17.8438C17.2645 17.8438 17.5535 17.5548 17.5535 17.1992C17.5535 16.8436 17.2645 16.5547 16.9089 16.5547C15.8427 16.5547 14.9753 15.6873 14.9753 14.6211C14.9753 13.7819 15.5158 13.0732 16.2644 12.8062V11.3984H17.5535V12.8062C18.3021 13.0732 18.8425 13.7819 18.8425 14.6211H17.5535C17.5535 14.2655 17.2645 13.9766 16.9089 13.9766C16.5533 13.9766 16.2644 14.2655 16.2644 14.6211C16.2644 14.9767 16.5533 15.2656 16.9089 15.2656Z" }),
        React__default["default"].createElement("path", { d: "M9.17456 8.82031C13.15 8.82031 16.2644 7.1215 16.2644 4.95312C16.2644 2.78475 13.15 1 9.17456 1C5.19909 1 1.99878 2.78475 1.99878 4.95312C1.99878 7.1215 5.19909 8.82031 9.17456 8.82031Z" }),
        React__default["default"].createElement("path", { d: "M1.99878 15.5045V16.5547C1.99878 18.7231 5.19909 20.4219 9.17456 20.4219C9.40006 20.4219 9.61856 20.4012 9.84058 20.3903C9.34618 19.6129 8.97746 18.7504 8.76034 17.8283C5.88552 17.7489 3.38933 16.8655 1.99878 15.5045Z" }),
        React__default["default"].createElement("path", { d: "M8.56101 16.5219C8.54623 16.3192 8.53003 16.1166 8.53003 15.9102C8.53003 15.2383 8.61807 14.588 8.76821 13.9614C5.88981 13.8834 3.39058 12.9996 1.99878 11.6373V12.6875C1.99878 14.7409 4.88894 16.3546 8.56101 16.5219Z" }),
        React__default["default"].createElement("path", { d: "M9.17456 12.6875C9.17525 12.6875 9.17581 12.6874 9.17654 12.6874C9.60163 11.6715 10.2196 10.7557 10.9869 9.98832C10.4048 10.0619 9.80328 10.1094 9.17456 10.1094C6.11445 10.1094 3.45654 9.19688 1.99878 7.77014V8.82034C1.99878 10.9887 5.19909 12.6875 9.17456 12.6875Z" })));
};

var Icon$B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M9.08862 1C5.11827 1 1.99878 2.70156 1.99878 4.86719C1.99878 7.03281 5.11827 8.73438 9.08862 8.73438C13.059 8.73438 16.1785 7.03281 16.1785 4.86719C16.1785 2.70156 13.059 1 9.08862 1Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M16.9089 8.82031C16.3933 8.82031 15.9163 8.87183 15.491 8.96211C13.9828 9.25855 12.5777 10.0836 11.5336 11.2824C10.4378 12.5586 9.83203 14.1699 9.81909 15.9102C9.81909 17.3411 10.2445 18.7204 11.0566 19.9062C12.3843 21.8398 14.5757 23 16.9089 23C20.8148 23 23.9988 19.816 23.9988 15.9102C23.9988 12.0043 20.8148 8.82031 16.9089 8.82031Z" }),
        React__default["default"].createElement("path", { d: "M16.1797 7.74976C15.8587 7.77728 15.5548 7.8226 15.2708 7.88288C13.5283 8.22537 11.905 9.17856 10.6987 10.5636C9.43275 12.038 8.73284 13.8996 8.7179 15.9102C8.7179 17.3409 9.08606 18.727 9.79335 19.9622H11.0955C11.0825 19.9436 11.0695 19.9249 11.0566 19.9062C10.2445 18.7203 9.81909 17.341 9.81909 15.9101C9.83203 14.1699 10.4378 12.5585 11.5336 11.2824C12.5777 10.0835 13.9828 9.25849 15.491 8.96205C15.7077 8.91605 15.9379 8.88011 16.1797 8.85593V7.74976Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.99878 8.73438V4.86719C1.99878 7.03281 5.11827 8.73438 9.08862 8.73438C13.059 8.73438 16.1785 7.03281 16.1785 4.86719V8.85611C15.9371 8.88029 15.7074 8.91619 15.491 8.96211C13.9828 9.25855 12.5777 10.0836 11.5336 11.2824C11.2065 11.6634 10.923 12.0743 10.6859 12.5096C10.1717 12.5709 9.63869 12.6016 9.08862 12.6016C5.11827 12.6016 1.99878 10.9 1.99878 8.73438Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M1.99878 8.73438C1.99878 10.9 5.11827 12.6016 9.08862 12.6016C9.63869 12.6016 10.1717 12.5709 10.6859 12.5096C10.129 13.5322 9.82816 14.6895 9.81909 15.9102C9.81909 16.0903 9.82583 16.2695 9.83923 16.4477C9.59289 16.461 9.34268 16.4688 9.08862 16.4688C5.11827 16.4688 1.99878 14.7672 1.99878 12.6016V8.73438Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.83923 16.4477C9.93229 17.6852 10.3467 18.8696 11.0566 19.9062C11.117 19.9941 11.1791 20.0804 11.2429 20.1651C10.5662 20.2815 9.84556 20.3359 9.08862 20.3359C5.11827 20.3359 1.99878 18.6344 1.99878 16.4688V12.6016C1.99878 14.7672 5.11827 16.4688 9.08862 16.4688C9.34268 16.4688 9.59289 16.461 9.83923 16.4477Z" }),
        React__default["default"].createElement("path", { d: "M18.8425 17.1992C18.8425 18.0371 18.3012 18.7461 17.5535 19.0168V20.4219H16.2644V19.0168C15.5167 18.7461 14.9753 18.0371 14.9753 17.1992H16.2644C16.2644 17.5601 16.548 17.8438 16.9089 17.8438C17.2699 17.8438 17.5535 17.5601 17.5535 17.1992C17.5535 16.8382 17.2699 16.5547 16.9089 16.5547C15.839 16.5547 14.9753 15.691 14.9753 14.6211C14.9753 13.7832 15.5167 13.0742 16.2644 12.8035V11.3984H17.5535V12.8035C18.3012 13.0742 18.8425 13.7832 18.8425 14.6211H17.5535C17.5535 14.2601 17.2699 13.9766 16.9089 13.9766C16.548 13.9766 16.2644 14.2601 16.2644 14.6211C16.2644 14.982 16.548 15.2656 16.9089 15.2656C17.9789 15.2656 18.8425 16.1293 18.8425 17.1992Z" })));
};

var Icon$A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.8946 15.9726C17.1013 14.7659 18.8803 12.8609 20.4847 10.769C20.5133 11.0582 20.5277 11.3497 20.5277 11.6428C20.5277 13.9991 19.5917 16.259 17.9255 17.9252C16.2593 19.5913 13.9995 20.5274 11.6431 20.5274C11.3488 20.5274 11.056 20.5128 10.7657 20.484C13.1296 18.6112 14.6961 17.1711 15.8946 15.9726Z" }),
        React__default["default"].createElement("path", { d: "M17.0913 4.62608C17.3632 4.83762 17.5549 5.13546 17.6348 5.47052C17.7148 5.80558 17.6782 6.15788 17.5311 6.46938C16.6782 8.28304 14.9996 10.5707 12.7853 12.7851C10.5619 15.0085 8.27969 16.6871 6.46776 17.5351C6.15712 17.6813 5.80605 17.7176 5.47206 17.6381C5.13808 17.5586 4.841 17.3681 4.62949 17.0977C3.30009 15.3889 2.6404 13.2535 2.77436 11.0927C2.90832 8.93181 3.82671 6.89425 5.35699 5.36277C6.88727 3.83128 8.92412 2.9113 11.0849 2.77565C13.2456 2.63999 15.3815 3.29801 17.0913 4.62608Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.79699 16.0551C-2.33146 24.4693 4.04521 26.4141 15.2297 15.2296C26.4236 4.03575 24.4654 -2.32469 16.0553 2.7984C16.6342 3.08732 17.187 3.43422 17.7047 3.83633L17.0913 4.62608L17.7054 3.83686C18.1567 4.18797 18.4748 4.68231 18.6075 5.23843C18.7402 5.79431 18.6796 6.37877 18.4358 6.89562C17.5183 8.8462 15.7583 11.2264 13.4924 13.4922C11.2184 15.7662 8.8428 17.5276 6.89167 18.4408C6.37643 18.6827 5.79434 18.7427 5.24056 18.611C4.68611 18.479 4.19293 18.1627 3.84181 17.7137L3.84022 17.7117C3.43584 17.1919 3.08716 16.6367 2.79699 16.0551Z" })));
};

var Icon$z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.40393 20.2407C11.1402 19.0167 13.0976 17.3617 15.2297 15.2296C17.362 13.0974 19.0171 11.1405 20.2412 9.40491C20.4298 10.1296 20.5276 10.8812 20.5276 11.6429C20.5276 13.9992 19.5916 16.259 17.9254 17.9252C16.2592 19.5914 13.9994 20.5275 11.643 20.5275C10.881 20.5275 10.129 20.4296 9.40393 20.2407Z" }),
        React__default["default"].createElement("path", { d: "M17.0913 4.62608C17.3632 4.83762 17.5549 5.13546 17.6348 5.47052C17.7148 5.80558 17.6782 6.15788 17.5311 6.46938C16.6782 8.28304 14.9996 10.5707 12.7853 12.7851C10.5619 15.0085 8.27969 16.6871 6.46776 17.5351C6.15712 17.6813 5.80605 17.7176 5.47206 17.6381C5.13808 17.5586 4.841 17.3681 4.62949 17.0977C3.30009 15.3889 2.6404 13.2535 2.77436 11.0927C2.90832 8.93181 3.82671 6.89425 5.35699 5.36277C6.88727 3.83128 8.92412 2.9113 11.0849 2.77565C13.2456 2.63999 15.3815 3.29801 17.0913 4.62608Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M3.43958 15.0567C-2.81446 24.3005 3.61541 26.8439 15.2297 15.2296C26.8541 3.60522 24.2953 -2.8068 15.0567 3.44086C15.779 3.74164 16.4638 4.13876 17.0913 4.6261C17.3631 4.83764 17.5548 5.13547 17.6348 5.47054C17.7147 5.8056 17.6782 6.1579 17.5311 6.4694C16.6782 8.28306 14.9996 10.5708 12.7852 12.7852C10.5619 15.0085 8.27965 16.6871 6.46772 17.5351C6.15708 17.6813 5.806 17.7176 5.47202 17.6381C5.13804 17.5587 4.84095 17.3681 4.62945 17.0977C4.13997 16.4685 3.74129 15.7815 3.43958 15.0567Z" })));
};

var Icon$y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M15.9457 23C16.5407 22.9189 17.0037 22.834 17.4971 22.654C20.4599 21.576 22.3246 19.5152 22.9199 16.3918C23.077 15.3846 22.9649 14.0702 22.4206 13.0443C22.3806 12.9663 22.3306 12.8936 22.2519 12.7656C22.5479 15.5417 21.6566 17.8371 19.7532 19.7432C17.8498 21.6493 15.553 22.5433 12.7696 22.2526C13.2788 22.5725 13.8887 22.8032 14.4866 22.9189C14.7141 22.9629 15.0001 23 14.9957 23C14.9957 23 15.2601 23 15.4456 23C15.6311 23 15.9457 23 15.9457 23Z" }),
        React__default["default"].createElement("path", { d: "M21.434 13.8484C21.448 11.3969 19.8219 9.45355 17.4032 9.0722C15.9904 8.84952 14.6391 9.1542 13.3944 9.81689C10.9749 11.1056 9.47154 13.0897 9.06086 15.8331C8.65484 18.5405 10.3209 20.886 13.0057 21.3753C14.3204 21.6153 15.5898 21.3433 16.7678 20.7753C19.4672 19.4686 21.0653 17.3325 21.4347 14.3251C21.4439 14.1663 21.4437 14.0071 21.434 13.8484ZM20.5946 13.9024C20.5366 14.3131 20.5013 14.7291 20.4153 15.1338C19.9446 17.3545 17.7772 20.2099 14.3097 20.534C12.901 20.6673 11.681 20.2559 10.7663 19.1486C9.91956 18.1219 9.74355 16.9065 9.97756 15.6344C10.5196 12.685 12.9937 10.3062 15.9725 9.93089C18.6879 9.58955 20.5766 11.4269 20.5946 13.9024Z" }),
        React__default["default"].createElement("g", { opacity: "0.48" },
            React__default["default"].createElement("path", { d: "M10.7455 16.5038C10.7381 18.5105 12.2695 19.8939 14.2683 19.6706C16.8597 19.3806 19.1791 17.2038 19.6291 14.6297C19.732 14.0792 19.7115 13.5127 19.5691 12.971C19.1878 11.5543 17.8404 10.6629 16.3744 10.7709C13.3189 10.9923 11.2775 13.5757 10.8742 15.5918C10.8122 15.8918 10.7882 16.1998 10.7455 16.5038ZM14.6123 12.3996L14.5696 12.3523C14.681 12.2336 14.7743 12.0856 14.9083 12.0036C15.0736 11.9036 15.2503 11.9696 15.3803 12.111C15.4327 12.1754 15.476 12.2468 15.509 12.323C16.0597 13.4223 16.6144 14.5231 17.1537 15.6264C17.2204 15.7638 17.2611 15.9598 17.2137 16.0931C17.1711 16.2105 17.0004 16.3178 16.865 16.3598C16.6824 16.4151 16.5217 16.3091 16.4357 16.1371C15.841 14.9571 15.2497 13.7755 14.6616 12.5923C14.6384 12.53 14.6218 12.4654 14.6123 12.3996ZM14.9736 17.6978C14.9216 17.6645 14.767 17.6205 14.7143 17.5218C14.381 16.8991 14.0636 16.2691 13.7623 15.6311C13.6629 15.4204 13.7903 15.1877 13.9996 15.0937C14.0462 15.0692 14.0971 15.0542 14.1495 15.0494C14.2019 15.0446 14.2547 15.0502 14.3049 15.0659C14.3552 15.0816 14.4018 15.107 14.4422 15.1407C14.4826 15.1744 14.5159 15.2158 14.5403 15.2624C14.8596 15.8731 15.1716 16.4878 15.4637 17.1125C15.5917 17.3938 15.355 17.7032 14.971 17.6998L14.9736 17.6978Z" }),
            React__default["default"].createElement("path", { d: "M18.1458 15.5331L17.0791 12.333L15.479 11.7996H14.4123L13.3456 14.9997V17.1332L13.8789 18.7332H15.479L17.6124 17.6665L18.1458 15.5331Z" })),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M1.41212 6.78149C1.03104 7.33979 0.955089 7.92207 1.02171 8.53166C1.13164 9.54099 1.5367 10.4397 2.10366 11.2632C3.15696 12.7955 4.52205 13.9334 6.31619 14.5024C6.96843 14.7089 7.63665 14.7842 8.30688 14.585C8.50087 14.5198 8.68579 14.4303 8.85718 14.3185C6.83052 14.1806 5.23291 13.2046 3.8445 11.8281C2.45609 10.4517 1.55536 8.8288 1.41212 6.78149Z" }),
        React__default["default"].createElement("path", { d: "M10.9997 11.1611C11.0077 10.6328 10.8664 10.0858 10.6419 9.56214C9.62792 7.18239 7.90573 5.57346 5.41272 4.83195C4.90158 4.66909 4.35615 4.64609 3.83311 4.76533C2.81312 5.01183 2.2295 5.89791 2.32077 7.03715C2.40738 8.1211 2.82644 9.08646 3.43271 9.96387C4.50333 11.5122 5.89773 12.6548 7.72518 13.2084C8.27215 13.3743 8.83312 13.4389 9.40141 13.3316C10.4254 13.1384 11.007 12.3616 10.9997 11.1611ZM8.42406 9.03849C8.35743 9.02117 8.27216 9.00052 8.18555 8.97187L5.91172 8.21304C5.46202 8.06314 5.01032 7.9199 4.56462 7.76001C4.30746 7.6674 4.20285 7.43689 4.28413 7.20304C4.36541 6.9692 4.58794 6.86127 4.84776 6.93255C4.89573 6.94588 4.94237 6.96253 4.98967 6.97852C6.09383 7.34628 7.19776 7.71448 8.30147 8.08313C8.42193 8.11489 8.53906 8.15817 8.65124 8.21237C8.73905 8.25438 8.80886 8.3265 8.84799 8.41564C8.88711 8.50477 8.89295 8.60498 8.86443 8.69805C8.8138 8.90858 8.6619 9.01118 8.42406 9.03849ZM8.12092 11.209C8.07599 11.2079 8.03131 11.2018 7.98768 11.1911C7.35809 10.9812 6.72651 10.7767 6.1016 10.5548C6.04803 10.5365 5.99872 10.5075 5.95662 10.4697C5.91453 10.4318 5.88052 10.3858 5.85662 10.3345C5.83273 10.2832 5.81945 10.2275 5.81759 10.1709C5.81572 10.1144 5.82531 10.058 5.84577 10.0052C5.91239 9.80532 6.13491 9.65808 6.33811 9.7227C7.00433 9.93256 7.66456 10.1504 8.32013 10.3889C8.52999 10.4649 8.60727 10.6607 8.55064 10.8833C8.49867 11.0916 8.35543 11.2002 8.12092 11.209Z" }),
        React__default["default"].createElement("path", { d: "M9.04298 8.44689L8.51 7.91391L6.97119 7.40097L4.24617 6.31497L3.71319 6.84795V8.44689L4.77915 10.0458L6.37809 11.6448L7.97702 12.1777L9.04298 11.6448V8.44689Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M16.2534 6.74635C16.588 6.97474 16.937 7.02026 17.3023 6.98033C17.9073 6.91445 18.4459 6.67168 18.9394 6.33189C19.8578 5.70061 20.5398 4.88247 20.8808 3.80719C21.0046 3.41629 21.0497 3.0158 20.9303 2.61411C20.8912 2.49785 20.8376 2.38702 20.7706 2.2843C20.6879 3.49894 20.103 4.45643 19.278 5.28855C18.4531 6.12067 17.4804 6.6605 16.2534 6.74635Z" }),
        React__default["default"].createElement("path", { d: "M18.8782 1.00019C18.5616 0.995402 18.2338 1.08005 17.9199 1.21461C16.4937 1.82233 15.5294 2.85449 15.085 4.34862C14.9874 4.65497 14.9736 4.98186 15.045 5.29534C15.1928 5.90665 15.7238 6.25643 16.4066 6.20172C17.0563 6.14982 17.6348 5.89866 18.1607 5.53531C19.0886 4.89365 19.7734 4.05794 20.1052 2.9627C20.2046 2.63488 20.2434 2.29868 20.1791 1.95809C20.0633 1.34438 19.5977 0.995801 18.8782 1.00019ZM17.6061 2.54384C17.5957 2.58377 17.5833 2.63488 17.5661 2.68679L17.1114 4.04956C17.0215 4.31908 16.9357 4.58979 16.8398 4.85692C16.7843 5.01104 16.6462 5.07373 16.506 5.02502C16.3659 4.97631 16.3012 4.84294 16.3439 4.68722C16.3519 4.65847 16.3619 4.63052 16.3715 4.60217C16.5919 3.94042 16.8126 3.2788 17.0335 2.61731C17.0525 2.54511 17.0785 2.47491 17.111 2.40768C17.1361 2.35506 17.1794 2.31321 17.2328 2.28976C17.2862 2.26632 17.3463 2.26282 17.402 2.27991C17.5282 2.31026 17.5897 2.40129 17.6061 2.54384ZM18.907 2.72552C18.9062 2.75245 18.9026 2.77922 18.8962 2.80538C18.7704 3.1827 18.6478 3.56123 18.5149 3.93576C18.5039 3.96787 18.4865 3.99742 18.4638 4.02265C18.4411 4.04788 18.4136 4.06826 18.3828 4.08258C18.352 4.0969 18.3187 4.10486 18.2848 4.10598C18.2509 4.10709 18.2171 4.10135 18.1854 4.08909C18.0657 4.04916 17.9774 3.9158 18.0161 3.79401C18.1419 3.39472 18.2725 2.99903 18.4154 2.60613C18.4609 2.48035 18.5783 2.43404 18.7117 2.46798C18.8365 2.49912 18.9016 2.58497 18.907 2.72552Z" }),
        React__default["default"].createElement("path", { d: "M17.2515 2.1729L16.9321 2.49233L16.6247 3.41459L15.9738 5.04778L16.2932 5.36721L17.2515 5.36721L18.2098 4.72835L19.1681 3.77005L19.4875 2.81176L19.1681 2.1729L17.2515 2.1729Z" })));
};

var Icon$x = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M15.9457 23C16.5407 22.9189 17.0037 22.834 17.4971 22.654C20.4599 21.576 22.3246 19.5152 22.9199 16.3918C23.077 15.3846 22.9649 14.0702 22.4206 13.0443C22.3806 12.9663 22.3306 12.8936 22.2519 12.7656C22.5479 15.5417 21.6566 17.8371 19.7532 19.7432C17.8498 21.6493 15.553 22.5433 12.7696 22.2526C13.2788 22.5725 13.8887 22.8032 14.4866 22.9189C14.7141 22.9629 15.0001 23 14.9957 23C14.9957 23 15.2601 23 15.4456 23C15.6311 23 15.9457 23 15.9457 23Z" }),
        React__default["default"].createElement("path", { d: "M21.434 13.8484C21.448 11.3969 19.8219 9.45355 17.4032 9.0722C15.9904 8.84952 14.6391 9.1542 13.3944 9.81689C10.9749 11.1056 9.47154 13.0897 9.06086 15.8331C8.65484 18.5405 10.3209 20.886 13.0057 21.3753C14.3204 21.6153 15.5898 21.3433 16.7678 20.7753C19.4672 19.4686 21.0653 17.3325 21.4347 14.3251C21.4439 14.1663 21.4437 14.0071 21.434 13.8484ZM20.5946 13.9024C20.5366 14.3131 20.5013 14.7291 20.4153 15.1338C19.9446 17.3545 17.7772 20.2099 14.3097 20.534C12.901 20.6673 11.681 20.2559 10.7663 19.1486C9.91956 18.1219 9.74355 16.9065 9.97756 15.6344C10.5196 12.685 12.9937 10.3062 15.9725 9.93089C18.6879 9.58955 20.5766 11.4269 20.5946 13.9024Z" }),
        React__default["default"].createElement("path", { d: "M10.7455 16.5038C10.7381 18.5105 12.2695 19.8939 14.2683 19.6706C16.8597 19.3806 19.1791 17.2038 19.6291 14.6297C19.732 14.0792 19.7115 13.5127 19.5691 12.971C19.1878 11.5543 17.8404 10.6629 16.3744 10.7709C13.3189 10.9923 11.2775 13.5757 10.8742 15.5918C10.8122 15.8918 10.7882 16.1998 10.7455 16.5038ZM14.6123 12.3996L14.5696 12.3523C14.681 12.2336 14.7743 12.0856 14.9083 12.0036C15.0736 11.9036 15.2503 11.9696 15.3803 12.111C15.4327 12.1754 15.476 12.2468 15.509 12.323C16.0597 13.4223 16.6144 14.5231 17.1537 15.6264C17.2204 15.7638 17.2611 15.9598 17.2137 16.0931C17.1711 16.2105 17.0004 16.3178 16.865 16.3598C16.6824 16.4151 16.5217 16.3091 16.4357 16.1371C15.841 14.9571 15.2497 13.7755 14.6616 12.5923C14.6384 12.53 14.6218 12.4654 14.6123 12.3996ZM14.9736 17.6978C14.9216 17.6645 14.767 17.6205 14.7143 17.5218C14.381 16.8991 14.0636 16.2691 13.7623 15.6311C13.6629 15.4204 13.7903 15.1877 13.9996 15.0937C14.0462 15.0692 14.0971 15.0542 14.1495 15.0494C14.2019 15.0446 14.2547 15.0502 14.3049 15.0659C14.3552 15.0816 14.4018 15.107 14.4422 15.1407C14.4826 15.1744 14.5159 15.2158 14.5403 15.2624C14.8596 15.8731 15.1716 16.4878 15.4637 17.1125C15.5917 17.3938 15.355 17.7032 14.971 17.6998L14.9736 17.6978Z" }),
        React__default["default"].createElement("path", { d: "M18.1458 15.5331L17.0791 12.333L15.479 11.7996H14.4123L13.3456 14.9997V17.1332L13.8789 18.7332H15.479L17.6124 17.6665L18.1458 15.5331Z" }),
        React__default["default"].createElement("path", { d: "M1.41212 6.78149C1.03104 7.33979 0.955089 7.92207 1.02171 8.53166C1.13164 9.54099 1.5367 10.4397 2.10366 11.2632C3.15696 12.7955 4.52205 13.9334 6.31619 14.5024C6.96843 14.7089 7.63665 14.7842 8.30688 14.585C8.50087 14.5198 8.68579 14.4303 8.85718 14.3185C6.83052 14.1806 5.23291 13.2046 3.8445 11.8281C2.45609 10.4517 1.55536 8.8288 1.41212 6.78149Z" }),
        React__default["default"].createElement("path", { d: "M10.9997 11.1611C11.0077 10.6328 10.8664 10.0858 10.6419 9.56214C9.62792 7.18239 7.90573 5.57346 5.41272 4.83195C4.90158 4.66909 4.35615 4.64609 3.83311 4.76533C2.81312 5.01183 2.2295 5.89791 2.32077 7.03715C2.40738 8.1211 2.82644 9.08646 3.43271 9.96387C4.50333 11.5122 5.89773 12.6548 7.72518 13.2084C8.27215 13.3743 8.83312 13.4389 9.40141 13.3316C10.4254 13.1384 11.007 12.3616 10.9997 11.1611ZM8.42406 9.03849C8.35743 9.02117 8.27216 9.00052 8.18555 8.97187L5.91172 8.21304C5.46202 8.06314 5.01032 7.9199 4.56462 7.76001C4.30746 7.6674 4.20285 7.43689 4.28413 7.20304C4.36541 6.9692 4.58794 6.86127 4.84776 6.93255C4.89573 6.94588 4.94237 6.96253 4.98967 6.97852C6.09383 7.34628 7.19776 7.71448 8.30147 8.08313C8.42193 8.11489 8.53906 8.15817 8.65124 8.21237C8.73905 8.25438 8.80886 8.3265 8.84799 8.41564C8.88711 8.50477 8.89295 8.60498 8.86443 8.69805C8.8138 8.90858 8.6619 9.01118 8.42406 9.03849ZM8.12092 11.209C8.07599 11.2079 8.03131 11.2018 7.98768 11.1911C7.35809 10.9812 6.72651 10.7767 6.1016 10.5548C6.04803 10.5365 5.99872 10.5075 5.95662 10.4697C5.91453 10.4318 5.88052 10.3858 5.85662 10.3345C5.83273 10.2832 5.81945 10.2275 5.81759 10.1709C5.81572 10.1144 5.82531 10.058 5.84577 10.0052C5.91239 9.80532 6.13491 9.65808 6.33811 9.7227C7.00433 9.93256 7.66456 10.1504 8.32013 10.3889C8.52999 10.4649 8.60727 10.6607 8.55064 10.8833C8.49867 11.0916 8.35543 11.2002 8.12092 11.209Z" }),
        React__default["default"].createElement("path", { d: "M9.04298 8.44689L8.51 7.91391L6.97119 7.40097L4.24617 6.31497L3.71319 6.84795V8.44689L4.77915 10.0458L6.37809 11.6448L7.97702 12.1777L9.04298 11.6448V8.44689Z" }),
        React__default["default"].createElement("path", { d: "M16.2534 6.74635C16.588 6.97474 16.937 7.02026 17.3023 6.98033C17.9073 6.91445 18.4459 6.67168 18.9394 6.33189C19.8578 5.70061 20.5398 4.88247 20.8808 3.80719C21.0046 3.41629 21.0497 3.0158 20.9303 2.61411C20.8912 2.49785 20.8376 2.38702 20.7706 2.2843C20.6879 3.49894 20.103 4.45643 19.278 5.28855C18.4531 6.12067 17.4804 6.6605 16.2534 6.74635Z" }),
        React__default["default"].createElement("path", { d: "M18.8782 1.00019C18.5616 0.995402 18.2338 1.08005 17.9199 1.21461C16.4937 1.82233 15.5294 2.85449 15.085 4.34862C14.9874 4.65497 14.9736 4.98186 15.045 5.29534C15.1928 5.90665 15.7238 6.25643 16.4066 6.20172C17.0563 6.14982 17.6348 5.89866 18.1607 5.53531C19.0886 4.89365 19.7734 4.05794 20.1052 2.9627C20.2046 2.63488 20.2434 2.29868 20.1791 1.95809C20.0633 1.34438 19.5977 0.995801 18.8782 1.00019ZM17.6061 2.54384C17.5957 2.58377 17.5833 2.63488 17.5661 2.68679L17.1114 4.04956C17.0215 4.31908 16.9357 4.58979 16.8398 4.85692C16.7843 5.01104 16.6462 5.07373 16.506 5.02502C16.3659 4.97631 16.3012 4.84294 16.3439 4.68722C16.3519 4.65847 16.3619 4.63052 16.3715 4.60217C16.5919 3.94042 16.8126 3.2788 17.0335 2.61731C17.0525 2.54511 17.0785 2.47491 17.111 2.40768C17.1361 2.35506 17.1794 2.31321 17.2328 2.28976C17.2862 2.26632 17.3463 2.26282 17.402 2.27991C17.5282 2.31026 17.5897 2.40129 17.6061 2.54384ZM18.907 2.72552C18.9062 2.75245 18.9026 2.77922 18.8962 2.80538C18.7704 3.1827 18.6478 3.56123 18.5149 3.93576C18.5039 3.96787 18.4865 3.99742 18.4638 4.02265C18.4411 4.04788 18.4136 4.06826 18.3828 4.08258C18.352 4.0969 18.3187 4.10486 18.2848 4.10598C18.2509 4.10709 18.2171 4.10135 18.1854 4.08909C18.0657 4.04916 17.9774 3.9158 18.0161 3.79401C18.1419 3.39472 18.2725 2.99903 18.4154 2.60613C18.4609 2.48035 18.5783 2.43404 18.7117 2.46798C18.8365 2.49912 18.9016 2.58497 18.907 2.72552Z" }),
        React__default["default"].createElement("path", { d: "M17.2515 2.1729L16.9321 2.49233L16.6247 3.41459L15.9738 5.04778L16.2932 5.36721L17.2515 5.36721L18.2098 4.72835L19.1681 3.77005L19.4875 2.81176L19.1681 2.1729L17.2515 2.1729Z" })));
};

var Icon$w = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 14.8194V6.4292C11.7621 6.4512 11.527 6.48832 11.2877 6.49932H4.4375C4.058 6.49932 3.75 6.80732 3.75 7.18682V7.87432H1.6875C1.308 7.87432 1 8.18232 1 8.56182V12.6868C1 13.0663 1.308 13.3743 1.6875 13.3743H3.75V14.0618C3.75 14.4413 4.058 14.7493 4.4375 14.7493H4.85412L7.61787 22.1166C7.78699 22.5579 8.16511 22.8783 8.62986 22.9718C8.72199 22.9911 8.81411 23.0007 8.90486 23.0007C9.27199 23.0007 9.62124 22.8549 9.87149 22.5937L11.5229 20.9561C11.945 20.5339 12.0454 19.8753 11.7759 19.3652L9.46861 14.7493H11.2946C11.5311 14.7603 11.7649 14.7974 12 14.8194Z" }),
        React__default["default"].createElement("path", { d: "M22.8872 1.33202C22.8735 1.30864 22.8611 1.28939 22.8432 1.26739C22.7676 1.17114 22.6727 1.09277 22.5559 1.04739C22.5517 1.04602 22.549 1.04052 22.5449 1.03914C22.5311 1.03502 22.5187 1.04189 22.505 1.03777C22.4431 1.01989 22.3812 0.999268 22.3125 0.999268C22.2657 0.999268 22.2245 1.01714 22.1791 1.02677C22.153 1.03227 22.1282 1.03364 22.1021 1.04189C21.9839 1.08039 21.8821 1.14639 21.801 1.23714C21.7955 1.24264 21.7872 1.24402 21.7817 1.24952C19.6381 3.85239 16.6489 5.59314 13.375 6.23113V15.0187C16.6489 15.6567 19.6381 17.3961 21.7817 19.999C21.7872 20.0059 21.7969 20.0086 21.8037 20.0169C21.8519 20.0705 21.911 20.1131 21.9742 20.1489C21.9949 20.1612 22.0114 20.1791 22.032 20.1887C22.1186 20.2259 22.2121 20.2492 22.3125 20.2492C22.3909 20.2492 22.4679 20.2355 22.5449 20.2094C22.549 20.208 22.5517 20.2025 22.5559 20.2011C22.6727 20.1557 22.7676 20.0787 22.8432 19.9811C22.8597 19.9591 22.8721 19.9399 22.8872 19.9165C22.9532 19.8106 23 19.6937 23 19.5617V1.68677C23 1.55477 22.9532 1.43789 22.8872 1.33202Z" })));
};

var Icon$v = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M13.3711 15.0156V6.22656C12.9401 6.31898 12.0674 6.44308 11.2877 6.4993H4.4375C4.058 6.4993 3.75 6.8073 3.75 7.1868V7.87429H1.6875C1.308 7.87429 1 8.18229 1 8.56179V12.6868C1 13.0663 1.308 13.3743 1.6875 13.3743H3.75V14.0618C3.75 14.4413 4.058 14.7493 4.4375 14.7493H4.85412L7.61787 22.1165C7.78699 22.5579 8.16511 22.8783 8.62986 22.9718C8.72199 22.991 8.81411 23.0007 8.90486 23.0007C9.27199 23.0007 9.62124 22.8549 9.87149 22.5937L11.5229 20.956C11.945 20.5339 12.0454 19.8753 11.7759 19.3652L9.46861 14.7493H11.2946C12.1591 14.7999 12.8448 14.9032 13.3711 15.0156Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M22.8872 1.33202C22.8735 1.30864 22.8611 1.28939 22.8432 1.26739C22.7676 1.17114 22.6727 1.09277 22.5559 1.04739C22.5517 1.04602 22.549 1.04052 22.5449 1.03914C22.5311 1.03502 22.5187 1.04189 22.505 1.03777C22.4431 1.01989 22.3812 0.999268 22.3125 0.999268C22.2657 0.999268 22.2245 1.01714 22.1791 1.02677C22.153 1.03227 22.1282 1.03364 22.1021 1.04189C21.9839 1.08039 21.8821 1.14639 21.801 1.23714C21.7955 1.24264 21.7872 1.24402 21.7817 1.24952C19.6381 3.85239 16.6489 5.59314 13.375 6.23113V15.0187C16.6489 15.6567 19.6381 17.3961 21.7817 19.999C21.7872 20.0059 21.7969 20.0086 21.8037 20.0169C21.8519 20.0705 21.911 20.1131 21.9742 20.1489C21.9949 20.1612 22.0114 20.1791 22.032 20.1887C22.1186 20.2259 22.2121 20.2492 22.3125 20.2492C22.3909 20.2492 22.4679 20.2355 22.5449 20.2094C22.549 20.208 22.5517 20.2025 22.5559 20.2011C22.6727 20.1557 22.7676 20.0787 22.8432 19.9811C22.8597 19.9591 22.8721 19.9399 22.8872 19.9165C22.9532 19.8106 23 19.6937 23 19.5617V1.68677C23 1.55477 22.9532 1.43789 22.8872 1.33202Z" })));
};

var Icon$u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M5.55469 23H18.4453C19.5115 23 20.3789 22.1326 20.3789 21.0664V7.44531H15.8672C14.801 7.44531 13.9336 6.57795 13.9336 5.51172V1H5.55469C4.48846 1 3.62109 1.86737 3.62109 2.93359V21.0664C3.62109 22.1326 4.48846 23 5.55469 23ZM8.13281 10.0664H15.8672C16.2234 10.0664 16.5117 10.3547 16.5117 10.7109C16.5117 11.0672 16.2234 11.3555 15.8672 11.3555H8.13281C7.77656 11.3555 7.48828 11.0672 7.48828 10.7109C7.48828 10.3547 7.77656 10.0664 8.13281 10.0664ZM8.13281 12.6445H15.8672C16.2234 12.6445 16.5117 12.9328 16.5117 13.2891C16.5117 13.6453 16.2234 13.9336 15.8672 13.9336H8.13281C7.77656 13.9336 7.48828 13.6453 7.48828 13.2891C7.48828 12.9328 7.77656 12.6445 8.13281 12.6445ZM8.13281 15.2227H15.8672C16.2234 15.2227 16.5117 15.5109 16.5117 15.8672C16.5117 16.2234 16.2234 16.5117 15.8672 16.5117H8.13281C7.77656 16.5117 7.48828 16.2234 7.48828 15.8672C7.48828 15.5109 7.77656 15.2227 8.13281 15.2227ZM8.13281 17.8008H13.2891C13.6453 17.8008 13.9336 18.0891 13.9336 18.4453C13.9336 18.8016 13.6453 19.0898 13.2891 19.0898H8.13281C7.77656 19.0898 7.48828 18.8016 7.48828 18.4453C7.48828 18.0891 7.77656 17.8008 8.13281 17.8008Z" }),
        React__default["default"].createElement("path", { d: "M15.8672 6.15628H20.0013L15.2227 1.37769V5.51175C15.2227 5.86736 15.5116 6.15628 15.8672 6.15628Z" })));
};

var Icon$t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M20.379 6.80084H15.8672C15.1582 6.80084 14.5781 6.22075 14.5781 5.51176V1C14.7457 1 14.9133 1.06445 15.0293 1.1934L20.1856 6.3497C20.3145 6.46568 20.379 6.63326 20.379 6.80084Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M15.8671 11.3555H8.1327C7.77644 11.3555 7.48816 11.0672 7.48816 10.7109C7.48816 10.3547 7.77644 10.0664 8.1327 10.0664H15.8671C16.2234 10.0664 16.5117 10.3547 16.5117 10.7109C16.5117 11.0672 16.2234 11.3555 15.8671 11.3555Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M15.8671 13.9336H8.1327C7.77644 13.9336 7.48816 13.6453 7.48816 13.2891C7.48816 12.9328 7.77644 12.6445 8.1327 12.6445H15.8671C16.2234 12.6445 16.5117 12.9328 16.5117 13.2891C16.5117 13.6453 16.2234 13.9336 15.8671 13.9336Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M15.8671 16.5119H8.1327C7.77644 16.5119 7.48816 16.2236 7.48816 15.8673C7.48816 15.5111 7.77644 15.2228 8.1327 15.2228H15.8671C16.2234 15.2228 16.5117 15.5111 16.5117 15.8673C16.5117 16.2236 16.2234 16.5119 15.8671 16.5119Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M13.289 19.09H8.1327C7.77644 19.09 7.48816 18.8017 7.48816 18.4454C7.48816 18.0892 7.77644 17.8009 8.1327 17.8009H13.289C13.6453 17.8009 13.9335 18.0892 13.9335 18.4454C13.9335 18.8017 13.6453 19.09 13.289 19.09Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.3791 6.80084H15.8673C15.1583 6.80084 14.5782 6.22075 14.5782 5.51176V1H5.55471C4.48679 1 3.62109 1.8657 3.62109 2.93361V21.0666C3.62109 22.1345 4.48679 23.0002 5.55471 23.0002H18.4454C19.5134 23.0002 20.3791 22.1345 20.3791 21.0666V6.80084ZM15.8673 11.3556H8.13285C7.7766 11.3556 7.48832 11.0673 7.48832 10.711C7.48832 10.3548 7.7766 10.0665 8.13285 10.0665H15.8673C16.2236 10.0665 16.5118 10.3548 16.5118 10.711C16.5118 11.0673 16.2236 11.3556 15.8673 11.3556ZM8.13285 13.9337H15.8673C16.2236 13.9337 16.5118 13.6454 16.5118 13.2892C16.5118 12.9329 16.2236 12.6446 15.8673 12.6446H8.13285C7.7766 12.6446 7.48832 12.9329 7.48832 13.2892C7.48832 13.6454 7.7766 13.9337 8.13285 13.9337ZM15.8673 16.5119H8.13285C7.7766 16.5119 7.48832 16.2236 7.48832 15.8673C7.48832 15.5111 7.7766 15.2228 8.13285 15.2228H15.8673C16.2236 15.2228 16.5118 15.5111 16.5118 15.8673C16.5118 16.2236 16.2236 16.5119 15.8673 16.5119ZM8.13285 19.09H13.2892C13.6454 19.09 13.9337 18.8017 13.9337 18.4455C13.9337 18.0892 13.6454 17.8009 13.2892 17.8009H8.13285C7.7766 17.8009 7.48832 18.0892 7.48832 18.4455C7.48832 18.8017 7.7766 19.09 8.13285 19.09Z" })));
};

var Icon$s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 1C11.9012 0.999992 11.8025 1.02267 11.7117 1.06803L2.65068 5.59857C2.4431 5.70234 2.30732 5.90975 2.29529 6.14152C2.28841 6.27344 2.1394 9.41437 3.20936 13.061C3.84246 15.2186 4.77368 17.1031 5.97715 18.6621C7.49373 20.6268 9.44297 22.072 11.7707 22.9579C11.8446 22.9859 11.9222 23 12 23C12 23 12 23 12 23V1Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M21.3492 5.59857C21.5568 5.70234 21.6926 5.90975 21.7046 6.14152C21.7115 6.27344 21.8605 9.41437 20.7905 13.061C20.1574 15.2186 19.2262 17.1031 18.0228 18.6621C16.5062 20.6268 14.5569 22.0721 12.2292 22.9579C12.1553 22.9859 12.0777 23 12 23V1C12.0987 1.00002 12.1975 1.0227 12.2882 1.06803L21.3492 5.59857Z" })));
};

var Icon$r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M6.21948 8.13781C6.30645 9.17821 6.50617 10.6034 6.95807 12.0997C7.91782 15.2775 9.61328 17.5371 12 18.8212C14.3867 17.5371 16.0821 15.2775 17.0418 12.0997C17.4938 10.6035 17.6934 9.1783 17.7805 8.13781L12 5.24756L6.21948 8.13781Z" }),
        React__default["default"].createElement("path", { d: "M21.7046 6.14152C21.6926 5.90975 21.5568 5.70234 21.3492 5.59857L12.2882 1.06803C12.1067 0.977323 11.8932 0.977323 11.7117 1.06803L2.65068 5.59857C2.4431 5.70234 2.30732 5.90975 2.29529 6.14152C2.28841 6.27344 2.1394 9.41436 3.20936 13.061C3.84246 15.2186 4.77368 17.1031 5.97715 18.6621C7.49373 20.6268 9.44297 22.072 11.7707 22.9579C11.8446 22.9859 11.9222 23 11.9999 23C12.0777 23 12.1553 22.9859 12.2292 22.9579C14.5569 22.0721 16.5062 20.6268 18.0227 18.6621C19.2262 17.1031 20.1574 15.2186 20.7905 13.061C21.8605 9.41436 21.7115 6.27344 21.7046 6.14152ZM12.2856 20.1242C12.1956 20.1687 12.0977 20.1909 11.9999 20.1909C11.9022 20.1909 11.8043 20.1687 11.7143 20.1242C8.84433 18.7052 6.82892 16.1307 5.72411 12.4724C5.17153 10.6427 4.97202 8.91855 4.90199 7.7944C4.88587 7.53624 5.02569 7.29351 5.25704 7.17784L11.7118 3.9505C11.8932 3.85984 12.1068 3.8598 12.2882 3.9505L18.743 7.17784C18.9743 7.29347 19.1142 7.53629 19.098 7.79444C19.028 8.91868 18.8285 10.6429 18.2759 12.4724C17.171 16.1307 15.1556 18.7051 12.2856 20.1242Z" })));
};

var Icon$q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M17.0293 5.97522C15.7212 3.04802 12.7874 1 9.37963 1C4.75925 1 1 4.75925 1 9.37963C1 14 4.75925 17.7593 9.37963 17.7593C10.985 17.7593 12.4812 17.2975 13.757 16.5113L14.7216 17.6626C15.5991 16.8412 16.8403 15.6001 17.6623 14.7221L16.5109 13.7577C17.2973 12.4817 17.7593 10.9853 17.7593 9.37959C17.7593 8.67207 17.6615 7.98852 17.4956 7.33183C17 7 17 6.5 17.0293 5.97522ZM9.37963 16.4701C5.47055 16.4701 2.28919 13.2893 2.28919 9.37963C2.28919 5.46995 5.47055 2.28919 9.37963 2.28919C12.4406 2.28919 15.0475 4.24311 16.0381 6.96638C16.5 7 16.5 8 16.3987 8.42873C16.4408 8.74064 16.4701 9.05638 16.4701 9.37963C16.4701 13.2893 13.2887 16.4701 9.37963 16.4701Z" }),
        React__default["default"].createElement("path", { d: "M22.9899 20.1881C22.9294 19.5 22.6033 18.8768 22.0746 18.433L18.6509 15.5499C17.7821 16.4823 16.4813 17.783 15.5497 18.6509L18.4337 22.079C18.5257 22.1885 18.6389 22.3024 18.7523 22.3975C19.2357 22.8023 19.8249 22.9999 20.4116 22.9999C21.1505 22.9999 21.8858 22.6858 22.3957 22.0758C22.8401 21.5465 23.0503 20.8761 22.9899 20.1881Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.37905 1C13.0402 1 16.3401 3.4493 17.3971 6.95558C17.642 7.729 17.7581 8.54113 17.7581 9.37905C17.7581 11.6865 16.8171 13.7877 15.2961 15.2959C13.7747 16.817 11.6995 17.7581 9.37905 17.7581C4.76404 17.7581 1 13.9939 1 9.37905C1 7.07157 1.94097 4.97043 3.46202 3.4621C4.97047 1.94101 7.07152 1 9.37905 1ZM16.4689 9.37915C16.4689 8.67014 16.3656 7.98693 16.1595 7.31656C15.2701 4.36457 12.4855 2.28914 9.37887 2.28922C7.41946 2.28922 5.65343 3.08846 4.36434 4.36466C3.08815 5.65374 2.28891 7.41973 2.28891 9.37919C2.28891 13.2851 5.4729 16.4692 9.37887 16.4692C10.887 16.4692 12.3051 16.0179 13.5039 15.1285C13.8133 14.9093 14.1097 14.6644 14.3806 14.3808C14.6514 14.123 14.9091 13.8136 15.1411 13.4913C16.0048 12.3053 16.4689 10.8873 16.4689 9.37915Z" })));
};

var Icon$p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.1282 13.5042C15.3603 13.1819 15.7856 13.1561 16.0692 13.3881L18.0544 15.051C18.0545 15.051 18.0545 15.051 18.0545 15.051L22.0722 18.437C23.168 19.3394 23.3097 20.9636 22.4075 22.0723H22.3946C22.3429 22.1367 22.2913 22.1884 22.2397 22.2399C21.1054 23.3614 19.2749 23.1938 18.4369 22.0723L15.051 18.0546L15.051 18.0545L15.0509 18.0546L13.388 16.0695C13.1559 15.7858 13.1688 15.3733 13.5039 15.1284C13.8133 14.9093 14.1227 14.6644 14.3935 14.3937C14.6641 14.1229 14.9091 13.8136 15.1282 13.5042Z" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M16.1595 7.31652C16.3657 7.98689 16.4689 8.67011 16.4689 9.37911C16.4689 10.8873 16.0049 12.3053 15.1411 13.4913C14.9092 13.8136 14.6514 14.123 14.3806 14.3808C14.1098 14.6644 13.8133 14.9093 13.5039 15.1284C12.3052 16.0179 10.887 16.4691 9.37891 16.4691C5.47294 16.4691 2.28894 13.285 2.28894 9.37915C2.28894 7.4197 3.08818 5.65371 4.36438 4.36462C5.65346 3.08843 7.4195 2.28918 9.37891 2.28918C12.4855 2.2891 15.2701 4.36454 16.1595 7.31652Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.37905 1C13.0402 1 16.3401 3.4493 17.3971 6.95558C17.642 7.729 17.7581 8.54113 17.7581 9.37905C17.7581 11.6865 16.8171 13.7877 15.2961 15.2959C13.7747 16.817 11.6995 17.7581 9.37905 17.7581C4.76404 17.7581 1 13.9939 1 9.37905C1 7.07157 1.94097 4.97043 3.46202 3.4621C4.97047 1.94101 7.07152 1 9.37905 1ZM16.4689 9.37915C16.4689 8.67014 16.3656 7.98693 16.1595 7.31656C15.2701 4.36457 12.4855 2.28914 9.37887 2.28922C7.41946 2.28922 5.65343 3.08846 4.36434 4.36466C3.08815 5.65374 2.28891 7.41973 2.28891 9.37919C2.28891 13.2851 5.4729 16.4692 9.37887 16.4692C10.887 16.4692 12.3051 16.0179 13.5039 15.1285C13.8133 14.9093 14.1097 14.6644 14.3806 14.3808C14.6514 14.123 14.9091 13.8136 15.1411 13.4913C16.0048 12.3053 16.4689 10.8873 16.4689 9.37915Z" })));
};

var Icon$o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 2.98629C14.9417 2.98629 15.2811 2.99886 16.4503 3.04914C17.5189 3.09943 18.1097 3.27543 18.4869 3.42629C19.0023 3.62743 19.3669 3.86629 19.7566 4.24343C20.1463 4.63314 20.3851 4.99771 20.5737 5.51314C20.7246 5.90286 20.9006 6.48114 20.9509 7.54971C21.0011 8.70628 21.0137 9.05828 21.0137 12C21.0137 14.9417 21.0011 15.2811 20.9509 16.4503C20.9006 17.5189 20.7246 18.1097 20.5737 18.4869C20.3726 19.0023 20.1337 19.3669 19.7566 19.7566C19.3669 20.1463 19.0023 20.3851 18.4869 20.5737C18.0971 20.7246 17.5189 20.9006 16.4503 20.9509C15.2937 21.0011 14.9417 21.0137 12 21.0137C9.05829 21.0137 8.71886 21.0011 7.54972 20.9509C6.48114 20.9006 5.89029 20.7246 5.51314 20.5737C4.99772 20.3726 4.63314 20.1337 4.24343 19.7566C3.85372 19.3669 3.61486 19.0023 3.42629 18.4869C3.27543 18.0971 3.09943 17.5189 3.04914 16.4503C2.99886 15.2937 2.98629 14.9417 2.98629 12C2.98629 9.05828 2.99886 8.71886 3.04914 7.54971C3.09943 6.48114 3.27543 5.89029 3.42629 5.51314C3.62743 4.99771 3.86629 4.63314 4.24343 4.24343C4.63314 3.85371 4.99772 3.61486 5.51314 3.42629C5.90286 3.27543 6.48114 3.09943 7.54972 3.04914C8.71886 2.99886 9.05829 2.98629 12 2.98629ZM12 1C9.008 1 8.64343 1.01257 7.46171 1.06286C6.29257 1.12571 5.488 1.30171 4.79657 1.57829C4.06743 1.85486 3.464 2.232 2.848 2.848C2.232 3.464 1.85486 4.06743 1.57829 4.79657C1.30172 5.488 1.12572 6.29257 1.06286 7.46171C1.01257 8.64343 1 9.008 1 12C1 14.992 1.01257 15.3566 1.06286 16.5383C1.11314 17.7074 1.30172 18.512 1.57829 19.2034C1.85486 19.9326 2.232 20.536 2.848 21.152C3.464 21.768 4.06743 22.1451 4.79657 22.4217C5.50057 22.6983 6.29257 22.8743 7.46171 22.9371C8.63086 22.9874 9.008 23 12 23C14.992 23 15.3566 22.9874 16.5383 22.9371C17.7074 22.8869 18.512 22.6983 19.2034 22.4217C19.9326 22.1451 20.536 21.768 21.152 21.152C21.768 20.536 22.1451 19.9326 22.4217 19.2034C22.6983 18.4994 22.8743 17.7074 22.9371 16.5383C22.9874 15.3691 23 14.992 23 12C23 9.008 22.9874 8.64343 22.9371 7.46171C22.8869 6.29257 22.6983 5.488 22.4217 4.79657C22.1451 4.06743 21.768 3.464 21.152 2.848C20.536 2.232 19.9326 1.85486 19.2034 1.57829C18.4994 1.30171 17.7074 1.12571 16.5383 1.06286C15.3566 1.01257 14.992 1 12 1Z" }),
        React__default["default"].createElement("path", { d: "M12 6.35543C8.88229 6.35543 6.35543 8.88228 6.35543 12C6.35543 15.1177 8.88229 17.6446 12 17.6446C15.1177 17.6446 17.6446 15.1177 17.6446 12C17.6446 8.88228 15.1177 6.35543 12 6.35543ZM12 15.6709C9.976 15.6709 8.32914 14.024 8.32914 12C8.32914 9.976 9.976 8.32914 12 8.32914C14.024 8.32914 15.6709 9.976 15.6709 12C15.6709 14.024 14.024 15.6709 12 15.6709Z" }),
        React__default["default"].createElement("path", { d: "M17.8709 7.44914C18.5999 7.44914 19.1909 6.85816 19.1909 6.12914C19.1909 5.40013 18.5999 4.80914 17.8709 4.80914C17.1418 4.80914 16.5509 5.40013 16.5509 6.12914C16.5509 6.85816 17.1418 7.44914 17.8709 7.44914Z" })));
};

var Icon$n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.60883 6.67218C3.63633 6.39348 3.53275 6.11856 3.33108 5.93151L1.27775 3.38073V3H7.65592L12.5858 14.1431L16.9198 3H23V3.38073L21.2437 5.1162C21.0924 5.23524 21.0173 5.4308 21.0484 5.62447V18.3765C21.0173 18.5692 21.0924 18.7648 21.2437 18.8838L22.9587 20.6193V21H14.3311V20.6193L16.1085 18.8413C16.2827 18.6618 16.2827 18.6089 16.2827 18.334V8.02693L11.3428 20.9584H10.6754L4.92333 8.02693V16.6939C4.87567 17.0576 4.993 17.4251 5.24142 17.6878L7.55233 20.5768V20.9584H1V20.5768L3.31092 17.6878C3.55842 17.4242 3.66842 17.0548 3.60883 16.6939V6.67218Z" })));
};

var Icon$m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.6272 15.1282C21.6272 14.8793 21.6096 14.6305 21.5744 14.3994C22.4016 14.0084 23 13.173 23 12.1599C23 10.8091 21.9264 9.72493 20.5888 9.72493C19.9376 9.72493 19.3568 9.99154 18.9168 10.4181C17.28 9.22727 15.0096 8.44522 12.4752 8.35635L13.5664 3.14863L17.1568 3.93068C17.192 4.85491 17.9488 5.58364 18.864 5.58364C19.8144 5.58364 20.5888 4.81936 20.5888 3.84181C20.5888 2.86425 19.8144 2.09998 18.864 2.09998C18.1952 2.09998 17.6144 2.50877 17.3328 3.07753L13.3376 2.20662C13.2144 2.18884 13.0912 2.20662 13.0032 2.27771C12.9152 2.33103 12.8448 2.43768 12.8448 2.54432C12.8448 2.54432 11.6304 8.3208 11.6304 8.35635C9.0608 8.42744 6.7552 9.19172 5.0832 10.4181C4.6432 9.99154 4.0624 9.7427 3.4112 9.7427C2.0736 9.7427 1 10.8447 1 12.1777C1 13.173 1.5808 14.0262 2.4256 14.3994C2.3904 14.6305 2.3728 14.8793 2.3728 15.1282C2.3728 18.8784 6.6848 21.9 12 21.9C17.3152 21.9 21.6272 18.8784 21.6272 15.1282ZM9.94065 14.0247C9.94065 13.0649 9.16625 12.2829 8.21585 12.2829C7.26545 12.2829 6.49105 13.0649 6.49105 14.0247C6.49105 14.9845 7.26545 15.7665 8.21585 15.7665C9.16625 15.7665 9.94065 14.9845 9.94065 14.0247ZM15.4495 17.9883C14.7102 18.7348 13.1262 19.0014 11.9999 19.0014C10.8735 19.0014 9.28945 18.7348 8.55025 17.9883C8.37425 17.8105 8.09265 17.8105 7.91665 17.9883C7.74065 18.166 7.74065 18.4504 7.91665 18.6281C9.09585 19.8012 11.331 19.8901 11.9999 19.8901C12.6686 19.8901 14.9038 19.8012 16.083 18.6103C16.259 18.4326 16.259 18.1482 16.083 17.9705C15.9071 17.8105 15.6255 17.8105 15.4495 17.9883ZM14.059 14.0425C14.059 13.0827 14.8334 12.3006 15.7838 12.3006C16.7166 12.3006 17.4911 13.0827 17.5086 14.0425C17.5086 15.0023 16.7342 15.7843 15.7838 15.7843C14.8334 15.7843 14.059 15.0023 14.059 14.0425Z" })));
};

var Icon$l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M22.9783 4.35612C22.8479 6.33424 19.3508 21.1133 19.3508 21.1133C19.3508 21.1133 19.1336 21.9773 18.3734 22C18.1127 22 17.7652 21.9773 17.3742 21.5907C16.5705 20.8859 14.746 19.5217 13.03 18.2711C12.9648 18.3394 12.8997 18.4076 12.8128 18.4758C12.4218 18.8396 11.8353 19.3625 11.2054 19.9991C10.9665 20.2265 10.7058 20.4766 10.4452 20.7495L10.4234 20.7722C10.2714 20.9314 10.1411 21.045 10.0325 21.136C9.18534 21.8636 9.09845 21.2497 9.09845 20.9314L9.5546 15.7246V15.6791L9.57632 15.6337C9.59804 15.5654 9.64148 15.5427 9.64148 15.5427C9.64148 15.5427 18.5254 7.26645 18.7644 6.37971C18.7861 6.33424 18.7209 6.28876 18.6123 6.33424C18.0259 6.53887 7.79518 13.3145 6.66568 14.0648C6.60051 14.1103 6.40503 14.0875 6.40503 14.0875L1.43088 12.3823C1.43088 12.3823 0.844405 12.1322 1.0399 11.5637C1.08334 11.4501 1.1485 11.3364 1.38743 11.1772C2.49521 10.3587 21.7619 3.10559 21.7619 3.10559C21.7619 3.10559 22.3049 2.92369 22.6307 3.03738C22.7828 3.10559 22.8697 3.1738 22.9566 3.40117C22.9783 3.49212 23 3.67401 23 3.87865C23 3.99233 22.9783 4.12875 22.9783 4.35612Z" })));
};

var Icon$k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2 4.87219V20.0786H7.23672V22.9306H10.096L12.9507 20.0777H17.2365L22.9514 14.3773V1.06921H3.42737L2 4.87219ZM5.33204 2.96842H21.0468V13.4246L17.7129 16.7511H12.4743L9.61961 19.5995V16.7511H5.33204V2.96842ZM10.5713 6.77342H12.475V12.4756H10.5713V6.77342ZM17.7118 6.77342H15.8071V12.4756H17.7118V6.77342Z" })));
};

var Icon$j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M7.91599 21.5C16.2152 21.5 20.7583 14.1962 20.7583 7.86709C20.7583 7.66456 20.7583 7.46203 20.7463 7.24684C21.6287 6.57595 22.3919 5.72785 23 4.76582C22.1892 5.14557 21.3187 5.39873 20.4005 5.52532C21.3306 4.93038 22.0461 3.99367 22.3919 2.86709C21.5214 3.42405 20.5556 3.81646 19.5182 4.03165C18.6954 3.08228 17.5268 2.5 16.2271 2.5C13.735 2.5 11.7079 4.6519 11.7079 7.29747C11.7079 7.67722 11.7556 8.03165 11.8271 8.38608C8.08293 8.1962 4.7561 6.27215 2.52629 3.37342C2.13279 4.09494 1.91816 4.91772 1.91816 5.79114C1.91816 7.44937 2.71707 8.91772 3.92141 9.77848C3.18211 9.75316 2.49051 9.53797 1.88238 9.18354C1.88238 9.1962 1.88238 9.22152 1.88238 9.24684C1.88238 11.5633 3.44444 13.5127 5.49539 13.943C5.11382 14.057 4.72032 14.1076 4.30298 14.1076C4.0168 14.1076 3.73062 14.0823 3.45637 14.019C4.02873 15.9304 5.6981 17.3101 7.67751 17.3481C6.12737 18.6392 4.18374 19.3987 2.07317 19.3987C1.71545 19.3987 1.3458 19.3861 1 19.3354C2.99133 20.7025 5.36423 21.5 7.91599 21.5Z" })));
};

var Icon$i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6078 4.47666C21.5501 4.73333 22.2931 5.48499 22.5468 6.43832C23.0179 8.17998 22.9998 11.81 22.9998 11.81C22.9998 11.81 22.9998 15.4216 22.5468 17.1633C22.2931 18.1166 21.5501 18.8683 20.6078 19.1249C18.8862 19.5833 11.9999 19.5833 11.9999 19.5833C11.9999 19.5833 5.13176 19.5833 3.39207 19.1066C2.44974 18.8499 1.70675 18.0983 1.45304 17.145C1 15.4216 1 11.7916 1 11.7916C1 11.7916 1 8.17998 1.45304 6.43832C1.70675 5.48499 2.46786 4.715 3.39207 4.45833C5.11364 4 11.9999 4 11.9999 4C11.9999 4 18.8862 4 20.6078 4.47666ZM9.80705 8.455L15.5335 11.7917L9.80705 15.1283V8.455Z" })));
};

var Icon$h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.5583 19.0348C15.8787 18.2949 19.1667 14.5314 19.1667 10C19.1667 4.9374 15.0626 0.833344 9.99999 0.833344C4.93738 0.833344 0.833328 4.9374 0.833328 10C0.833328 14.5634 4.16791 18.348 8.53334 19.05V12.5667H6.24167V10H8.53334V7.98337C8.53334 5.6917 10 4.40837 12.1083 4.40837C12.75 4.40837 13.4833 4.50003 14.125 4.5917V6.9292H12.9333C11.8333 6.9292 11.5583 7.4792 11.5583 8.21253V10H13.9875L13.575 12.5667H11.5583V19.0348Z" })));
};

var Icon$g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M19.1593 5.70502C19.0108 5.62827 18.8663 5.54414 18.7262 5.45294C18.3189 5.18367 17.9454 4.86638 17.6139 4.50791C16.7843 3.55875 16.4745 2.59584 16.3604 1.92166H16.365C16.2697 1.36207 16.3091 1 16.315 1H12.5367V15.61C12.5367 15.8062 12.5367 16 12.5285 16.1916C12.5285 16.2154 12.5262 16.2374 12.5248 16.2631C12.5248 16.2737 12.5248 16.2847 12.5225 16.2957C12.5225 16.2984 12.5225 16.3012 12.5225 16.3039C12.4827 16.8281 12.3147 17.3345 12.0332 17.7785C11.7517 18.2225 11.3654 18.5906 10.9083 18.8503C10.432 19.1213 9.89314 19.2635 9.34505 19.2628C7.58468 19.2628 6.15796 17.8273 6.15796 16.0546C6.15796 14.2818 7.58468 12.8464 9.34505 12.8464C9.67828 12.8461 10.0095 12.8985 10.3263 13.0018L10.3309 9.15472C9.36905 9.03048 8.39191 9.10692 7.46111 9.37922C6.5303 9.65152 5.66603 10.1138 4.92281 10.7368C4.27158 11.3026 3.72409 11.9778 3.30498 12.7318C3.14548 13.0068 2.54372 14.1118 2.47085 15.9052C2.42502 16.9231 2.73071 17.9777 2.87646 18.4135V18.4227C2.96812 18.6793 3.32331 19.5552 3.90215 20.2935C4.36892 20.8858 4.92038 21.406 5.53878 21.8375V21.8284L5.54795 21.8375C7.37706 23.0805 9.40509 22.9989 9.40509 22.9989C9.75615 22.9847 10.9322 22.9989 12.2677 22.366C13.749 21.6643 14.5922 20.6189 14.5922 20.6189C15.131 19.9943 15.5594 19.2824 15.859 18.5139C16.2009 17.6151 16.315 16.5372 16.315 16.1064V8.35542C16.3609 8.38292 16.9713 8.78669 16.9713 8.78669C16.9713 8.78669 17.8508 9.35042 19.223 9.71752C20.2075 9.97876 21.5338 10.0338 21.5338 10.0338V6.28295C21.0691 6.33336 20.1254 6.1867 19.1593 5.70502Z" })));
};

var Icon$f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M20.0075 14.1456C19.8359 14.2638 19.6357 14.3336 19.4278 14.3475C19.2199 14.3615 19.0121 14.3191 18.8263 14.2249C18.3901 13.9785 18.155 13.4007 18.155 12.6132V10.1999C18.155 9.04146 17.6961 8.2172 16.9285 7.99343C15.6313 7.61388 14.6625 9.20291 14.2887 9.80057L11.9943 13.514V8.98198C11.9688 7.93678 11.6289 7.3108 10.986 7.12386C10.5611 6.99923 9.92378 7.05021 9.30346 7.99627L4.17381 16.2303C3.49129 14.9245 3.1374 13.472 3.14278 11.9986C3.14278 7.03605 7.10828 2.99974 11.9943 2.99974C16.8804 2.99974 20.86 7.03605 20.86 11.9986V12.0241C20.86 12.0241 20.86 12.0411 20.86 12.0496C20.9082 13.0098 20.5966 13.7746 20.0103 14.1456H20.0075ZM22.84 12.0014V11.9533C22.8003 5.90588 17.9511 1 11.9943 1C6.03759 1 1.16003 5.93421 1.16003 11.9986C1.16003 18.063 6.0206 23 11.9943 23C14.7341 22.9999 17.3697 21.9497 19.3588 20.0655C19.5519 19.8836 19.6655 19.633 19.6751 19.3679C19.6846 19.1028 19.5893 18.8446 19.4098 18.6493C19.3239 18.5543 19.2201 18.4772 19.1043 18.4225C18.9885 18.3677 18.863 18.3364 18.7351 18.3304C18.6071 18.3243 18.4793 18.3436 18.3588 18.3872C18.2384 18.4307 18.1277 18.4977 18.0332 18.5841C17.1768 19.3965 16.1651 20.0274 15.0589 20.439C13.9526 20.8506 12.7746 21.0344 11.5955 20.9794C10.4164 20.9243 9.26058 20.6316 8.19744 20.1188C7.13431 19.6059 6.18577 18.8835 5.40878 17.995L10.0257 10.5738V13.9983C10.0257 15.644 10.6631 16.1765 11.1984 16.3323C11.7337 16.4881 12.5523 16.3805 13.4106 14.9869L15.9598 10.8599C16.0391 10.7268 16.1156 10.6135 16.1836 10.5144V12.6132C16.1836 14.1513 16.8011 15.3806 17.8831 15.9867C18.3751 16.2523 18.9295 16.3807 19.4882 16.3582C20.0468 16.3358 20.5892 16.1635 21.0583 15.8593C22.248 15.086 22.8966 13.6868 22.8286 12.0014H22.84Z" })));
};

var Icon$e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6751 18.1544C11.9134 16.6544 11.0174 15.1342 9.27246 15.1342C8.92717 15.1303 8.58468 15.1965 8.26575 15.3289L7.67179 14.1409C8.39326 13.5201 9.56105 13.0336 11.0275 13.0336C13.3597 13.0336 14.5577 14.1577 15.5107 15.594C16.0745 14.3691 16.3429 12.7148 16.3429 10.6611C16.3429 5.54027 14.7423 2.94295 11.0006 2.94295C7.30937 2.94295 5.72212 5.57383 5.72212 10.6611C5.72212 15.7483 7.31608 18.3557 11.0006 18.3557C11.5425 18.3629 12.0826 18.2928 12.6047 18.1477L12.6751 18.1544ZM13.5879 19.943C12.7671 20.1635 11.921 20.2763 11.0711 20.2785C6.16172 20.2819 1.353 16.3624 1.353 10.6644C1.353 4.91611 6.16172 1 11.0711 1C16.061 1 20.8161 4.89262 20.8161 10.6644C20.8285 12.1165 20.503 13.5515 19.8652 14.8561C19.2275 16.1607 18.295 17.2991 17.1416 18.1812C17.8127 19.2349 18.5711 19.9362 19.5812 19.9362C20.6819 19.9362 21.1248 19.0839 21.202 18.4161H22.6382C22.7221 19.3054 22.2758 23 18.2657 23C15.8362 23 14.551 21.594 13.5879 19.943Z" })));
};

var Icon$d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0L5.55306 3.6761L7.92329 5.03416L12 2.7161L16.0767 5.03416L18.447 3.6761L12 0ZM16.0767 6.95417L18.447 8.31221V11.0283L14.3702 13.3463L14.3702 17.9825L12 19.3406L9.62982 17.9825L9.62982 13.3463L5.55306 11.0283V8.31221L7.92329 6.95417L12 9.27218L16.0767 6.95417ZM18.447 12.9483V15.6644L16.0767 17.0225V14.3063L18.447 12.9483ZM16.053 18.9424L20.1299 16.6244V11.9883L22.5 10.6303V17.9825L16.053 21.6585V18.9424ZM20.1299 7.3522L17.7596 5.99417L20.1299 4.6361L22.5 5.99417V8.71027L20.1299 10.0683V7.3522ZM9.62982 22.642V19.9259L12 21.2839L14.3702 19.9259V22.642L12 24L9.62982 22.642ZM7.92329 17.0225L5.55306 15.6644V12.9483L7.92329 14.3063V17.0225ZM12 7.3522L9.62982 5.99417L12 4.6361L14.3702 5.99417L12 7.3522ZM6.24042 5.99417L3.8702 7.3522V10.0683L1.5 8.71027L1.5 5.99417L3.8702 4.6361L6.24042 5.99417ZM1.5 10.6303L3.8702 11.9883L3.8702 16.6244L7.94695 18.9424V21.6585L1.5 17.9825L1.5 10.6303Z" })));
};

var Icon$c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M0 12.0057L0 5.8403C0 5.41523 0.227073 5.02171 0.597324 4.80513L5.96072 1.66786C6.34124 1.44527 6.81401 1.44397 7.19579 1.66446L12.6357 4.80618C13.0093 5.02192 13.2389 5.41728 13.2389 5.84475V8.06681L10.8636 9.40682V7.30474C10.8636 6.88322 10.6403 6.49245 10.2749 6.27469L7.19233 4.43725C6.81283 4.21104 6.33888 4.20639 5.9549 4.4251L3.01492 6.09972C2.6378 6.31453 2.40543 6.71187 2.40543 7.14192V10.6338C2.40543 11.0551 2.62852 11.4457 2.99357 11.6636L5.95654 13.4316C6.339 13.6599 6.81728 13.6629 7.20263 13.4394L16.7802 7.88594C17.1586 7.66648 17.6274 7.66517 18.0071 7.88251L23.3927 10.965C23.7686 11.1802 24 11.5768 24 12.006V18.2288C24 18.6589 23.7676 19.0562 23.3905 19.271L18.0046 22.3391C17.6261 22.5547 17.1598 22.5535 16.7825 22.336L11.4676 19.272C11.0936 19.0564 10.8636 18.6608 10.8636 18.233L10.8636 16.0175L13.2389 14.6418V16.8496C13.2389 17.2751 13.4664 17.669 13.8373 17.8854L16.7781 19.6015C17.1576 19.823 17.6286 19.8246 18.0096 19.6057L21.007 17.8841C21.382 17.6687 21.6127 17.2726 21.6127 16.8441V13.3907C21.6127 12.9631 21.3829 12.5677 21.0092 12.3519L18.0043 10.6175C17.6262 10.3992 17.1585 10.3983 16.7796 10.6151L7.18666 16.1036C6.80964 16.3193 6.34468 16.3196 5.96737 16.1044L0.608812 13.0476C0.232073 12.8326 0 12.4355 0 12.0057Z" })));
};

var Icon$b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37259 24 0 18.6274 0 12C0 5.37259 5.37259 0 12 0C18.6274 0 24 5.37259 24 12ZM8.59957 16.7751H6.27071C5.78137 16.7751 5.53962 16.7751 5.39221 16.6808C5.23304 16.5776 5.13574 16.4067 5.12394 16.218C5.11512 16.0441 5.23597 15.8318 5.47771 15.4073L11.228 5.27169C11.4726 4.84129 11.5965 4.6261 11.7527 4.5465C11.9207 4.46103 12.1212 4.46103 12.2892 4.5465C12.4455 4.6261 12.5693 4.84129 12.814 5.27169L13.9961 7.33525L14.0021 7.34578C14.2664 7.80753 14.4004 8.04167 14.4589 8.28742C14.5237 8.55568 14.5237 8.83868 14.4589 9.10694C14.4 9.35458 14.2673 9.59043 13.999 10.0592L10.9786 15.3985L10.9707 15.4122C10.7047 15.8777 10.5699 16.1136 10.3831 16.2917C10.1797 16.4863 9.935 16.6277 9.66673 16.7073C9.42206 16.7751 9.14789 16.7751 8.59957 16.7751ZM14.4807 16.7754H17.8178C18.3101 16.7754 18.5577 16.7754 18.7051 16.6781C18.8643 16.5749 18.9645 16.401 18.9734 16.2124C18.9819 16.0442 18.8637 15.8401 18.6319 15.4403C18.624 15.4267 18.616 15.4128 18.6078 15.3987L16.9364 12.5392L16.9173 12.5071C16.6824 12.1098 16.5638 11.9093 16.4116 11.8317C16.2436 11.7462 16.0461 11.7462 15.8781 11.8317C15.7247 11.9113 15.6009 12.1206 15.3563 12.5422L13.6907 15.4017L13.685 15.4115C13.4411 15.8324 13.3193 16.0427 13.3281 16.2153C13.3399 16.404 13.4371 16.5779 13.5964 16.6811C13.7408 16.7754 13.9884 16.7754 14.4807 16.7754Z" })));
};

var Icon$a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12.0049 5.52096C12.0049 6.17222 12.0109 6.82438 12.0049 7.47564C12.0049 7.66134 12.059 7.74219 12.2412 7.75729C12.9344 7.79992 13.6214 7.91634 14.2915 8.10469C15.7525 8.51908 17.1083 9.25835 18.2641 10.2708C19.6794 11.4907 20.7501 12.9861 21.5622 14.6822C22.2903 16.197 22.759 17.8309 22.9474 19.5112C22.9827 19.8266 22.9938 20.1456 22.9998 20.4636C23.0059 20.7817 22.8443 20.9683 22.5925 20.9967C22.3407 21.0252 22.1422 20.867 22.0864 20.5658C21.9523 19.8506 21.5278 19.305 21.0964 18.7737C19.8568 17.2535 18.3638 15.9752 16.6881 14.9994C15.3708 14.2246 13.9727 13.6729 12.4569 13.4792C12.022 13.4232 12.0049 13.4374 12.0049 13.8826C12.0049 15.0891 12.0049 16.2957 12.0049 17.5023C12.0087 17.5913 12.0055 17.6804 11.9954 17.7688C11.9842 17.8381 11.9579 17.9038 11.9186 17.9611C11.8793 18.0183 11.8279 18.0656 11.7683 18.0994C11.7088 18.1332 11.6426 18.1526 11.5748 18.1561C11.507 18.1596 11.4392 18.1472 11.3767 18.1198C11.1387 18.0114 10.9367 17.8417 10.7245 17.6924C8.90158 16.4094 7.07983 15.1253 5.25922 13.8399C3.93873 12.9129 2.61968 11.9844 1.30206 11.0545C0.901617 10.7728 0.899039 10.3935 1.29604 10.1136C2.96312 8.93721 4.63134 7.76174 6.30071 6.58715L11.1619 3.1629C11.2865 3.07405 11.4102 2.9852 11.5735 3.00208C11.8399 3.03318 12.0031 3.22865 12.0031 3.54673C12.0074 4.2051 12.0031 4.86436 12.0031 5.52273L12.0049 5.52096Z", fill: "#1263F1" })));
};

var Icon$9 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("ellipse", { cx: "12.5826", cy: "11.632", rx: "5.26722", ry: "5.1203", transform: "rotate(-30 12.5826 11.632)", fill: "#93A7C4" }),
        React__default["default"].createElement("path", { d: "M0.454171 12.2413C-0.144154 11.1758 0.41653 10.3447 0.771662 10.0624L4.73524 13.1086L6.56242 15.5822L5.48626 17.6107L6.88662 20.9818C7.53417 21 8.56474 21.1093 7.50657 21.401C6.44839 21.6927 5.75316 21.2862 5.53781 21.0465L4.27366 18.8569C4.13838 18.5499 4.00485 17.8023 4.55296 17.2674C5.2381 16.5988 5.22865 15.4911 5.09223 15.2548C4.95581 15.0186 4.67154 14.4896 3.17603 14.5549C1.68052 14.6202 1.20208 13.5733 0.454171 12.2413Z", fill: "#93A7C4" }),
        React__default["default"].createElement("path", { d: "M11.6339 11.4731C10.5111 9.7654 9.56928 9.39164 9.44722 9.43892C9.72637 9.9757 9.89935 10.3731 10.0288 10.6704C10.2048 11.0747 10.3002 11.2939 10.4724 11.4266C10.8352 11.7065 11.6339 11.4731 11.6339 11.4731Z", fill: "url(#paint0_linear_1088_17348)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.20621 9.69653C0.90172 9.87233 0.679975 10.1626 0.589753 10.5036C0.499531 10.8446 0.548225 11.2082 0.725119 11.5146L1.75935 13.306C1.91307 13.5723 2.15357 13.7776 2.44009 13.8871C2.72657 13.9966 3.04143 14.0036 3.33135 13.9069C3.76635 13.7625 4.23854 13.7734 4.6681 13.9379C5.09785 14.1024 5.45855 14.4104 5.6892 14.8099C5.91985 15.2094 6.00629 15.6758 5.93389 16.1303C5.8615 16.5847 5.63471 16.9993 5.2919 17.3038C5.06345 17.5065 4.91223 17.7825 4.86385 18.0852C4.81543 18.3881 4.87298 18.699 5.02675 18.9653L6.06098 20.7566C6.23788 21.063 6.52848 21.287 6.86887 21.3794C7.20927 21.4717 7.57155 21.4248 7.87604 21.249C7.87604 21.249 12.727 19.9006 16.1587 17.9193C19.5904 15.938 23.1837 12.4112 23.1837 12.4112C23.4882 12.2354 23.7099 11.945 23.8001 11.6041C23.8904 11.2631 23.8417 10.8995 23.6648 10.5931L22.6305 8.80172C22.4768 8.53541 22.2363 8.3301 21.9498 8.22059C21.6635 8.11116 21.3488 8.10411 21.0591 8.20061C20.6239 8.34522 20.1515 8.33435 19.7218 8.16983C19.292 8.00531 18.9313 7.69725 18.7007 7.29776C18.47 6.89826 18.3836 6.43185 18.456 5.97742C18.5284 5.52318 18.755 5.10879 19.0976 4.80428C19.3263 4.60155 19.4776 4.32537 19.526 4.02252C19.5745 3.71963 19.5169 3.4087 19.3631 3.14242L18.3289 1.35108C18.152 1.04469 17.8614 0.820679 17.521 0.728333C17.1806 0.635989 16.8183 0.682873 16.5138 0.858668C16.5138 0.858668 11.796 4.41944 9.22242 5.90529C6.64885 7.39114 1.20621 9.69653 1.20621 9.69653ZM11.6653 10.7546C11.7279 10.9628 11.7828 11.1452 11.8285 11.616C11.6604 11.6657 11.314 11.7101 10.8707 11.7668C10.1081 11.8645 9.05879 11.9988 8.13684 12.2604C7.99497 10.5811 8.79441 8.90464 10.33 8.01809C11.4734 7.3579 12.7925 7.27129 13.9619 7.66552C13.929 7.68998 13.8969 7.71564 13.8638 7.74204L13.849 7.75388C13.5255 8.01876 13.3342 8.20877 13.1888 8.35323C12.9885 8.55216 12.8752 8.66471 12.6233 8.7674C12.6011 8.77645 12.5737 8.78679 12.5422 8.79868C12.1979 8.92849 11.3606 9.24415 11.5114 10.1075C11.5666 10.4268 11.6181 10.598 11.6653 10.7546ZM14.1949 7.75323L14.1922 7.75189C14.1899 7.75392 14.1875 7.75577 14.1851 7.75761C14.1804 7.76131 14.1756 7.76501 14.1716 7.77011C14.1743 7.76911 14.1771 7.76793 14.1798 7.76667C14.054 7.87916 13.9353 7.99442 13.8245 8.10207C13.7413 8.18297 13.6624 8.25963 13.5882 8.32752C13.1648 8.71652 12.9244 9.34966 13.2168 10.0857C13.345 10.4077 13.4957 10.6061 13.6534 10.8137C13.8177 11.0301 13.9896 11.2564 14.1515 11.6428C14.6582 12.8541 13.9111 13.8865 13.4705 14.4952C13.43 14.5512 13.392 14.6037 13.3579 14.6523C13.1228 14.9849 12.5408 15.7734 12.0908 16.3788C13.0167 16.481 13.9816 16.3009 14.851 15.799C17.0129 14.5508 17.7577 11.7957 16.5151 9.64349C15.9854 8.72603 15.1796 8.06645 14.2626 7.70986C14.2522 7.71374 14.2418 7.71767 14.2299 7.72246L14.1949 7.75323ZM8.73668 14.1688C8.55584 13.8556 8.41627 13.5312 8.31667 13.2006C8.52519 13.2384 8.75035 13.2835 8.9958 13.3421C10.5479 13.7095 12.615 13.5137 12.809 12.4736L12.8139 12.475C12.7891 12.6834 12.6394 13.3835 11.7638 13.6993L11.6086 16.3263C10.4459 16.0442 9.38878 15.2983 8.73668 14.1688Z", fill: "url(#paint1_linear_1088_17348)" }),
        React__default["default"].createElement("path", { d: "M15.6997 17.1172C12.4047 19.0196 7.84865 20.2652 5.98251 20.6502C6.53707 21.8068 7.27659 21.5163 7.6608 21.3715C9.42588 20.8398 13.5979 19.4057 16.1652 17.9234C19.3744 16.0706 22.5759 13.0424 23.4408 12.2125C24.1328 11.5486 23.9498 11.0309 23.688 10.7099C22.3982 12.053 18.9948 15.2148 15.6997 17.1172Z", fill: "#93A7C5" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_1088_17348", x1: "20.528", y1: "5.67108", x2: "3.11735", y2: "15.151", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#C8D4E6" }),
                React__default["default"].createElement("stop", { offset: "0.49518", stopColor: "#E6F0FF" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#C8D4E6" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_1088_17348", x1: "20.528", y1: "5.67108", x2: "3.11735", y2: "15.151", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#C8D4E6" }),
                React__default["default"].createElement("stop", { offset: "0.49518", stopColor: "#E6F0FF" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#C8D4E6" })))));
};

var Icon$8 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 164 36", fill: "none" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_183_4932)" },
            React__default["default"].createElement("path", { d: "M141 14.5965C140.654 13.7751 140.076 12.9536 139.382 12.4842C138.573 11.8975 137.649 11.4281 136.377 11.076C134.759 10.6066 132.448 10.4892 129.79 10.6066C129.096 10.6066 128.403 10.7239 127.709 10.7239C127.016 10.8413 126.322 10.8413 125.629 10.9587C125.051 11.076 124.473 11.076 124.011 11.1934V15.6527C124.473 15.5354 125.051 15.418 125.513 15.3007C126.207 15.1833 126.9 15.066 127.594 14.9486C128.287 14.8312 128.981 14.8312 129.674 14.7139C131.639 14.5965 133.257 14.5965 134.182 14.8312C134.875 14.9486 135.453 15.1833 135.8 15.418C136.146 15.6527 136.377 16.0048 136.493 16.4742C136.609 16.8262 136.724 17.1783 136.724 17.6477V17.9997L136.377 17.8824C134.875 17.413 133.026 17.2956 130.945 17.2956C129.212 17.2956 127.825 17.413 126.669 17.6477C125.513 17.8824 124.589 18.2344 123.895 18.7038C123.202 19.1733 122.74 19.6427 122.509 20.2294C122.277 20.8162 122.162 21.4029 122.162 22.107V22.4591C122.162 23.1632 122.277 23.8673 122.624 24.4541C122.855 25.0408 123.318 25.6276 124.011 26.2143C124.704 26.6837 125.629 27.1532 126.785 27.3879C127.941 27.7399 129.443 27.8573 131.177 27.8573C132.679 27.8573 134.066 27.7399 135.222 27.3879C136.377 27.1532 136.609 27.0358 137.649 26.5664C137.996 26.3317 138.92 26.2143 139.498 26.449L140.538 27.0358H141.578V17.1783C141.578 16.5915 141.347 15.5354 141 14.5965ZM136.724 23.75H136.493C134.991 24.2194 133.373 24.4541 131.523 24.4541C130.483 24.4541 129.559 24.4541 128.981 24.3367C128.403 24.2194 127.941 24.2194 127.594 23.9847C127.247 23.8673 127.016 23.6326 126.9 23.3979C126.785 23.1632 126.785 22.9285 126.785 22.6938C126.785 22.4591 126.785 22.3417 126.9 22.107C127.016 21.8723 127.247 21.6376 127.478 21.5203C127.709 21.4029 128.172 21.1682 128.75 21.1682C129.327 21.0509 130.136 21.0509 131.061 21.0509C132.101 21.0509 133.026 21.0509 133.95 21.1682C134.759 21.2856 135.568 21.4029 136.377 21.6376H136.609V23.75H136.724Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M60.2139 12.7189C59.5205 12.0148 58.5959 11.4281 57.4402 10.9587C56.2844 10.4893 54.7819 10.2546 52.9328 10.2546C52.0082 10.2546 51.0836 10.3719 50.2745 10.4893C49.4655 10.6066 48.6565 10.8413 47.8475 11.076L47.5008 11.1934V4.85639L43.6868 2.62671H42.7622V19.76C42.7622 20.9335 42.8778 21.9897 43.2245 22.9285C43.4557 23.8673 44.0335 24.6888 44.727 25.5102C45.4204 26.2143 46.345 26.8011 47.5008 27.2705C48.6565 27.7399 50.159 27.9746 52.0082 27.9746H52.9328C54.7819 27.9746 56.2844 27.7399 57.4402 27.2705C58.5959 26.9185 59.6361 26.3317 60.3295 25.5102C61.023 24.8061 61.4853 23.9847 61.832 22.9285C62.0631 21.8723 62.2943 20.8162 62.2943 19.76V18.4692C62.2943 17.2956 62.1787 16.2395 61.832 15.3007C61.4853 14.2445 60.9074 13.423 60.2139 12.7189ZM57.3246 20.6988C57.3246 21.2856 57.0934 21.755 56.7467 22.2244C56.4 22.5765 55.9377 22.9285 55.2442 23.2806C54.5508 23.5153 53.6262 23.6326 52.4705 23.6326C51.3147 23.6326 50.3901 23.5153 49.6967 23.2806C49.0032 23.0459 48.5409 22.6938 48.1942 22.2244C47.8475 21.755 47.7319 21.2856 47.6163 20.6988C47.6163 20.2294 47.5008 19.6427 47.5008 19.0559V15.418H47.6163C48.3098 15.1833 49.1188 14.9486 49.9278 14.8313C50.7368 14.7139 51.5459 14.5966 52.586 14.5966C53.7418 14.5966 54.6664 14.7139 55.2442 14.9486C55.8221 15.1833 56.4 15.5354 56.6311 15.8874C56.9779 16.3568 57.0934 16.8262 57.209 17.413C57.209 17.8824 57.3246 18.4692 57.3246 19.0559C57.3246 19.6427 57.3246 20.2294 57.3246 20.6988Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M67.9573 2.62671H67.7261C66.686 2.62671 65.9925 2.86141 65.6458 3.21347C65.2991 3.68287 65.0679 4.15228 65.0679 4.85639V5.20844C65.0679 5.7952 65.2991 6.38195 65.6458 6.85136C65.9925 7.32077 66.686 7.43812 67.7261 7.43812H67.9573C68.9975 7.43812 69.6909 7.20341 70.0376 6.85136C70.3844 6.38195 70.4999 5.91255 70.4999 5.20844V4.85639C70.4999 4.26963 70.2688 3.68287 69.9221 3.21347C69.6909 2.86141 68.9975 2.62671 67.9573 2.62671Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M65.4149 10.9587V27.2705H70.269V13.1884L66.4551 10.9587H65.4149Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M89.2231 18.8212C88.7608 18.4692 88.1829 18.1171 87.6051 17.8824C87.0272 17.6477 86.3337 17.5304 85.6403 17.413C85.0624 17.2957 84.369 17.1783 83.7911 17.1783C83.2132 17.1783 82.6353 17.1783 82.2886 17.061C80.9017 17.061 79.9771 16.9436 79.3993 16.8263C78.4747 16.5916 78.3591 16.1222 78.3591 15.6527C78.3591 15.418 78.3591 15.3007 78.4747 15.1833C78.5903 15.066 78.7058 14.8313 79.0525 14.7139C79.2837 14.5966 79.746 14.4792 80.2083 14.4792C80.6706 14.3619 81.364 14.3619 82.2886 14.3619C83.6755 14.3619 85.0624 14.4792 86.3337 14.5966C87.4895 14.7139 88.7608 14.9486 90.0321 15.1833V11.076C88.9919 10.8413 87.9518 10.6066 86.796 10.4893C85.6403 10.3719 84.369 10.2546 83.2132 10.2546H82.0575C80.3239 10.2546 78.937 10.3719 77.7812 10.724C76.7411 10.9587 75.8165 11.4281 75.123 11.8975C74.4296 12.3669 73.9673 12.9537 73.7361 13.5404C73.505 14.1272 73.3894 14.8313 73.3894 15.5354V15.8874C73.3894 16.7089 73.505 17.413 73.8517 17.9998C74.1984 18.5865 74.5451 19.0559 75.0074 19.408C75.4697 19.76 76.0476 20.1121 76.6255 20.3468C77.2034 20.5815 77.8968 20.6989 78.4747 20.8162C79.1681 20.9336 79.746 21.0509 80.3239 21.0509C80.9017 21.0509 81.4796 21.1683 81.9419 21.1683C83.3288 21.1683 84.2534 21.2856 84.8313 21.403C85.7559 21.5203 85.987 22.1071 85.987 22.5765C85.987 22.6938 85.987 22.9285 85.8714 23.0459C85.7559 23.1632 85.6403 23.3979 85.2936 23.5153C85.0624 23.6326 84.6001 23.75 84.1378 23.75C83.6755 23.8673 82.9821 23.8673 82.1731 23.8673C80.7862 23.8673 79.1681 23.75 77.6657 23.6326C76.2788 23.5153 74.7763 23.2806 73.505 22.9285V27.0358C74.7763 27.2705 75.932 27.5052 77.2034 27.6226C78.4747 27.7399 79.9771 27.8573 81.364 27.8573H82.2886C84.0222 27.8573 85.4091 27.7399 86.4493 27.3879C87.6051 27.1532 88.4141 26.6838 89.1075 26.2144C89.801 25.745 90.1477 25.1582 90.4944 24.5715C90.7256 23.9847 90.9567 23.2806 90.9567 22.5765V22.2244C90.9567 21.403 90.8411 20.6989 90.4944 20.1121C90.0321 19.6427 89.6854 19.1733 89.2231 18.8212Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M112.8 21.6377L108.64 10.9587H104.941L100.896 21.6377L96.7354 10.9587H92.4591V12.0148L98.7001 27.2705H102.976L106.79 17.413L110.604 27.2705H114.881L121.237 12.0148V10.9587H116.845L112.8 21.6377Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M163.422 15.5353C163.191 14.5965 162.613 13.775 161.919 12.9536C161.226 12.2495 160.301 11.6627 159.03 11.1933C157.874 10.7239 156.372 10.4892 154.523 10.4892H153.714C151.864 10.4892 150.362 10.7239 149.206 11.1933C148.05 11.5454 147.126 12.1321 146.432 12.9536C145.739 13.6577 145.277 14.4791 144.93 15.5353C144.699 16.5915 144.468 17.6476 144.468 18.7038V35.8371H145.508L149.322 33.6074V27.2705L149.668 27.3878C150.477 27.6225 151.171 27.8572 152.095 27.9746C152.905 28.0919 153.829 28.2093 154.754 28.2093C156.603 28.2093 158.105 27.9746 159.261 27.5052C160.417 27.0358 161.341 26.5663 162.035 25.7449C162.728 25.0408 163.191 24.102 163.537 23.1632C163.768 22.2243 164 21.1682 164 19.9947V18.7038C163.884 17.6476 163.768 16.5915 163.422 15.5353ZM159.03 21.0508C159.03 21.6376 158.799 22.107 158.452 22.5764C158.105 23.0458 157.643 23.2805 157.065 23.5152C156.487 23.7499 155.563 23.8673 154.407 23.8673C153.482 23.8673 152.558 23.7499 151.749 23.6326C150.94 23.5152 150.131 23.2805 149.437 23.0458H149.322V19.4079C149.322 18.8212 149.322 18.3517 149.437 17.765C149.437 17.1782 149.668 16.7088 150.015 16.2394C150.362 15.77 150.824 15.5353 151.518 15.1833C152.211 14.9486 153.136 14.8312 154.291 14.8312C155.447 14.8312 156.372 14.9486 157.065 15.1833C157.759 15.418 158.221 15.77 158.568 16.2394C158.914 16.7088 159.146 17.1782 159.146 17.765C159.146 18.2344 159.261 18.8212 159.261 19.4079C159.03 19.9947 159.03 20.5814 159.03 21.0508Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M18 35.9999C27.9411 35.9999 36 27.9411 36 18C36 8.05886 27.9411 0 18 0C8.05887 0 0 8.05886 0 18C0 27.9411 8.05887 35.9999 18 35.9999Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M31.9429 6.77173C30.6946 7.0185 29.5042 7.36689 28.5244 7.58463C26.2889 8.08544 24.1986 9.79834 23.7413 12.9338C23.3349 15.7354 24.2784 16.9403 23.8647 20.1991C23.1389 25.8894 17.6809 27.8491 15.1333 29.0394C13.6599 29.7217 10.0817 31.2894 7.32361 32.487C10.3139 34.6935 14.001 35.9999 18.0002 35.9999C27.9438 35.9999 36.0002 27.9435 36.0002 17.9999C36.0002 13.7612 34.5341 9.86366 32.0809 6.7935C32.0373 6.78624 31.9938 6.77899 31.9429 6.77173Z", fill: "url(#paint0_linear_183_4932)" }),
            React__default["default"].createElement("path", { d: "M15.975 15.358C17.3613 12.3605 16.8605 12.3532 17.9129 9.53708C19.2411 5.96612 23.371 6.98225 24.5105 7.13467C26.3903 7.3887 26.8839 6.72096 30.8468 6.08225C31.0427 6.05322 31.2314 6.02418 31.4201 6.00241C28.125 2.32258 23.3347 0 18 0C10.8363 0 4.65242 4.18064 1.75645 10.2411C7.69354 11.7145 14.1024 14.9153 15.975 15.358ZM12.0411 3.13548C12.5637 3.21532 15.104 6.37257 15.5831 14.4798C15.5831 14.4798 12.3169 13.6959 11.6129 12.0121C11.0322 10.6258 11.7871 8.80402 12.0411 3.13548ZM32.0516 6.75725C32.0588 6.77176 32.0734 6.77902 32.0806 6.79354C32.0371 6.78628 31.9863 6.78628 31.9427 6.77902C31.979 6.7645 32.0153 6.7645 32.0516 6.75725ZM0 18C0 16.5629 0.166935 15.1693 0.48629 13.8338C1.13952 14.3782 1.83629 14.9806 2.57661 15.6701C7.26532 20.0177 14.8935 23.4508 17.6734 20.2572C17.6806 20.2645 17.6879 20.2645 17.6879 20.2717C17.1798 20.9395 15.2419 23.0516 11.5403 22.3983L5.69032 31.1298C2.19193 27.8491 0 23.1822 0 18Z", fill: "url(#paint1_linear_183_4932)" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_183_4932", x1: "28.8101", y1: "11.4862", x2: "24.5635", y2: "34.8809", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_183_4932", x1: "8.68805", y1: "26.5151", x2: "18.0772", y2: "-6.26208e-06", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })),
            React__default["default"].createElement("clipPath", { id: "clip0_183_4932" },
                React__default["default"].createElement("rect", { width: "164", height: "36", fill: "white" })))));
};

var Icon$7 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 122 34", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M99.0005 12.5965C98.6537 11.7751 98.0759 10.9536 97.3824 10.4842C96.5734 9.89746 95.6488 9.42806 94.3775 9.076C92.7594 8.6066 90.4479 8.48924 87.7897 8.6066C87.0963 8.6066 86.4028 8.72395 85.7094 8.72395C85.0159 8.8413 84.3225 8.8413 83.629 8.95865C83.0512 9.076 82.4733 9.076 82.011 9.19335V13.6527C82.4733 13.5354 83.0512 13.418 83.5135 13.3007C84.2069 13.1833 84.9004 13.066 85.5938 12.9486C86.2873 12.8312 86.9807 12.8312 87.6741 12.7139C89.6389 12.5965 91.257 12.5965 92.1816 12.8312C92.875 12.9486 93.4529 13.1833 93.7996 13.418C94.1463 13.6527 94.3775 14.0048 94.493 14.4742C94.6086 14.8262 94.7242 15.1783 94.7242 15.6477V15.9997L94.3775 15.8824C92.875 15.413 91.0258 15.2956 88.9455 15.2956C87.2119 15.2956 85.825 15.413 84.6692 15.6477C83.5135 15.8824 82.5889 16.2344 81.8954 16.7038C81.202 17.1733 80.7397 17.6427 80.5085 18.2294C80.2774 18.8162 80.1618 19.4029 80.1618 20.107V20.4591C80.1618 21.1632 80.2774 21.8673 80.6241 22.4541C80.8553 23.0408 81.3176 23.6276 82.011 24.2143C82.7045 24.6837 83.629 25.1532 84.7848 25.3879C85.9405 25.7399 87.443 25.8573 89.1766 25.8573C90.6791 25.8573 92.066 25.7399 93.2217 25.3879C94.3775 25.1532 94.6086 25.0358 95.6488 24.5664C95.9955 24.3317 96.9201 24.2143 97.498 24.449L98.5382 25.0358H99.5783V15.1783C99.5783 14.5915 99.3472 13.5354 99.0005 12.5965ZM94.7242 21.75H94.493C92.9906 22.2194 91.3725 22.4541 89.5233 22.4541C88.4832 22.4541 87.5586 22.4541 86.9807 22.3367C86.4028 22.2194 85.9405 22.2194 85.5938 21.9847C85.2471 21.8673 85.0159 21.6326 84.9004 21.3979C84.7848 21.1632 84.7848 20.9285 84.7848 20.6938C84.7848 20.4591 84.7848 20.3417 84.9004 20.107C85.0159 19.8723 85.2471 19.6376 85.4782 19.5203C85.7094 19.4029 86.1717 19.1682 86.7496 19.1682C87.3274 19.0509 88.1365 19.0509 89.061 19.0509C90.1012 19.0509 91.0258 19.0509 91.9504 19.1682C92.7594 19.2856 93.5685 19.4029 94.3775 19.6376H94.6086V21.75H94.7242Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M18.2139 10.7189C17.5205 10.0148 16.5959 9.42807 15.4402 8.95866C14.2844 8.48926 12.7819 8.25455 10.9328 8.25455C10.0082 8.25455 9.08356 8.3719 8.27454 8.48926C7.46552 8.60661 6.6565 8.84131 5.84748 9.07601L5.50076 9.19336V2.85639L1.6868 0.626709H0.762207V17.76C0.762207 18.9335 0.877783 19.9897 1.22451 20.9285C1.45566 21.8673 2.03353 22.6888 2.72697 23.5102C3.42042 24.2143 4.34501 24.8011 5.50076 25.2705C6.6565 25.7399 8.15897 25.9746 10.0082 25.9746H10.9328C12.7819 25.9746 14.2844 25.7399 15.4402 25.2705C16.5959 24.9185 17.6361 24.3317 18.3295 23.5102C19.023 22.8061 19.4853 21.9847 19.832 20.9285C20.0631 19.8723 20.2943 18.8162 20.2943 17.76V16.4692C20.2943 15.2956 20.1787 14.2395 19.832 13.3007C19.4853 12.2445 18.9074 11.423 18.2139 10.7189ZM15.3246 18.6988C15.3246 19.2856 15.0934 19.755 14.7467 20.2244C14.4 20.5765 13.9377 20.9285 13.2442 21.2806C12.5508 21.5153 11.6262 21.6326 10.4705 21.6326C9.31471 21.6326 8.39012 21.5153 7.69667 21.2806C7.00322 21.0459 6.54093 20.6938 6.1942 20.2244C5.84748 19.755 5.73191 19.2856 5.61633 18.6988C5.61633 18.2294 5.50076 17.6427 5.50076 17.0559V13.418H5.61633C6.30978 13.1833 7.1188 12.9486 7.92782 12.8313C8.73684 12.7139 9.54586 12.5966 10.586 12.5966C11.7418 12.5966 12.6664 12.7139 13.2442 12.9486C13.8221 13.1833 14.4 13.5354 14.6311 13.8874C14.9779 14.3568 15.0934 14.8262 15.209 15.413C15.209 15.8824 15.3246 16.4692 15.3246 17.0559C15.3246 17.6427 15.3246 18.2294 15.3246 18.6988Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M25.9573 0.626709H25.7261C24.686 0.626709 23.9925 0.861412 23.6458 1.21347C23.2991 1.68287 23.0679 2.15228 23.0679 2.85639V3.20844C23.0679 3.7952 23.2991 4.38195 23.6458 4.85136C23.9925 5.32077 24.686 5.43812 25.7261 5.43812H25.9573C26.9975 5.43812 27.6909 5.20341 28.0376 4.85136C28.3844 4.38195 28.4999 3.91255 28.4999 3.20844V2.85639C28.4999 2.26963 28.2688 1.68287 27.9221 1.21347C27.6909 0.861412 26.9975 0.626709 25.9573 0.626709Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M23.4149 8.95868V25.2705H28.269V11.1884L24.4551 8.95868H23.4149Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M47.2231 16.8212C46.7608 16.4692 46.1829 16.1171 45.6051 15.8824C45.0272 15.6477 44.3337 15.5304 43.6403 15.413C43.0624 15.2957 42.369 15.1783 41.7911 15.1783C41.2132 15.1783 40.6353 15.1783 40.2886 15.061C38.9017 15.061 37.9771 14.9436 37.3993 14.8263C36.4747 14.5916 36.3591 14.1222 36.3591 13.6527C36.3591 13.418 36.3591 13.3007 36.4747 13.1833C36.5903 13.066 36.7058 12.8313 37.0525 12.7139C37.2837 12.5966 37.746 12.4792 38.2083 12.4792C38.6706 12.3619 39.364 12.3619 40.2886 12.3619C41.6755 12.3619 43.0624 12.4792 44.3337 12.5966C45.4895 12.7139 46.7608 12.9486 48.0321 13.1833V9.07604C46.9919 8.84134 45.9518 8.60663 44.796 8.48928C43.6403 8.37193 42.369 8.25458 41.2132 8.25458H40.0575C38.3239 8.25458 36.937 8.37193 35.7812 8.72398C34.7411 8.95869 33.8165 9.42809 33.123 9.8975C32.4296 10.3669 31.9673 10.9537 31.7361 11.5404C31.505 12.1272 31.3894 12.8313 31.3894 13.5354V13.8874C31.3894 14.7089 31.505 15.413 31.8517 15.9998C32.1984 16.5865 32.5451 17.0559 33.0074 17.408C33.4697 17.76 34.0476 18.1121 34.6255 18.3468C35.2034 18.5815 35.8968 18.6989 36.4747 18.8162C37.1681 18.9336 37.746 19.0509 38.3239 19.0509C38.9017 19.0509 39.4796 19.1683 39.9419 19.1683C41.3288 19.1683 42.2534 19.2856 42.8313 19.403C43.7559 19.5203 43.987 20.1071 43.987 20.5765C43.987 20.6938 43.987 20.9285 43.8714 21.0459C43.7559 21.1632 43.6403 21.3979 43.2936 21.5153C43.0624 21.6326 42.6001 21.75 42.1378 21.75C41.6755 21.8673 40.9821 21.8673 40.1731 21.8673C38.7862 21.8673 37.1681 21.75 35.6657 21.6326C34.2788 21.5153 32.7763 21.2806 31.505 20.9285V25.0358C32.7763 25.2705 33.932 25.5052 35.2034 25.6226C36.4747 25.7399 37.9771 25.8573 39.364 25.8573H40.2886C42.0222 25.8573 43.4091 25.7399 44.4493 25.3879C45.6051 25.1532 46.4141 24.6838 47.1075 24.2144C47.801 23.745 48.1477 23.1582 48.4944 22.5715C48.7256 21.9847 48.9567 21.2806 48.9567 20.5765V20.2244C48.9567 19.403 48.8411 18.6989 48.4944 18.1121C48.0321 17.6427 47.6854 17.1733 47.2231 16.8212Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M70.8002 19.6377L66.6395 8.95868H62.9411L58.896 19.6377L54.7354 8.95868H50.4591V10.0148L56.7001 25.2705H60.9764L64.7903 15.413L68.6043 25.2705H72.8805L79.2371 10.0148V8.95868H74.8453L70.8002 19.6377Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M121.422 13.5353C121.191 12.5965 120.613 11.775 119.919 10.9536C119.226 10.2495 118.301 9.66271 117.03 9.1933C115.874 8.7239 114.372 8.4892 112.523 8.4892H111.714C109.864 8.4892 108.362 8.7239 107.206 9.1933C106.05 9.54536 105.126 10.1321 104.432 10.9536C103.739 11.6577 103.277 12.4791 102.93 13.5353C102.699 14.5915 102.468 15.6476 102.468 16.7038V33.8371H103.508L107.322 31.6074V25.2705L107.668 25.3878C108.477 25.6225 109.171 25.8572 110.095 25.9746C110.905 26.0919 111.829 26.2093 112.754 26.2093C114.603 26.2093 116.105 25.9746 117.261 25.5052C118.417 25.0358 119.341 24.5663 120.035 23.7449C120.728 23.0408 121.191 22.102 121.537 21.1632C121.768 20.2243 122 19.1682 122 17.9947V16.7038C121.884 15.6476 121.768 14.5915 121.422 13.5353ZM117.03 19.0508C117.03 19.6376 116.799 20.107 116.452 20.5764C116.105 21.0458 115.643 21.2805 115.065 21.5152C114.487 21.7499 113.563 21.8673 112.407 21.8673C111.482 21.8673 110.558 21.7499 109.749 21.6326C108.94 21.5152 108.131 21.2805 107.437 21.0458H107.322V17.4079C107.322 16.8212 107.322 16.3517 107.437 15.765C107.437 15.1782 107.668 14.7088 108.015 14.2394C108.362 13.77 108.824 13.5353 109.518 13.1833C110.211 12.9486 111.136 12.8312 112.291 12.8312C113.447 12.8312 114.372 12.9486 115.065 13.1833C115.759 13.418 116.221 13.77 116.568 14.2394C116.914 14.7088 117.146 15.1782 117.146 15.765C117.146 16.2344 117.261 16.8212 117.261 17.4079C117.03 17.9947 117.03 18.5814 117.03 19.0508Z", fill: "white" })));
};

var Icon$6 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M12 23.9999C18.6274 23.9999 24 18.6274 24 12C24 5.37257 18.6274 0 12 0C5.37258 0 0 5.37257 0 12C0 18.6274 5.37258 23.9999 12 23.9999Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M21.2952 4.51456C20.463 4.67907 19.6694 4.91133 19.0162 5.05649C17.5259 5.39036 16.1323 6.53229 15.8275 8.62261C15.5565 10.4903 16.1855 11.2936 15.9097 13.4661C15.4259 17.2597 11.7872 18.5661 10.0888 19.3597C9.10651 19.8145 6.72103 20.8597 4.88232 21.6581C6.87587 23.129 9.33393 24 12.0001 24C18.6291 24 24 18.629 24 12C24 9.17422 23.0226 6.57584 21.3871 4.52907C21.3581 4.52423 21.3291 4.5194 21.2952 4.51456Z", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { d: "M10.65 10.2387C11.5742 8.24031 11.2403 8.23547 11.9419 6.35805C12.8274 3.97741 15.5806 4.65483 16.3403 4.75644C17.5935 4.9258 17.9226 4.48064 20.5645 4.05483C20.6951 4.03548 20.8209 4.01612 20.9468 4.0016C18.75 1.54838 15.5564 0 12 0C7.22419 0 3.10161 2.78709 1.17097 6.82741C5.12903 7.80966 9.4016 9.94353 10.65 10.2387ZM8.02741 2.09032C8.3758 2.14354 10.0693 4.24838 10.3887 9.65321C10.3887 9.65321 8.21128 9.13063 7.74193 8.00805C7.35483 7.08386 7.85806 5.86934 8.02741 2.09032ZM21.3677 4.50483C21.3726 4.51451 21.3822 4.51935 21.3871 4.52902C21.358 4.52418 21.3242 4.52418 21.2951 4.51935C21.3193 4.50967 21.3435 4.50967 21.3677 4.50483ZM0 12C0 11.0419 0.11129 10.1129 0.324193 9.22256C0.759677 9.58546 1.22419 9.98708 1.71774 10.4468C4.84354 13.3451 9.92902 15.6338 11.7822 13.5048C11.7871 13.5096 11.7919 13.5096 11.7919 13.5145C11.4532 13.9596 10.1613 15.3677 7.69354 14.9322L3.79354 20.7532C1.46129 18.5661 0 15.4548 0 12Z", fill: "url(#paint1_linear)" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "19.2066", y1: "7.65751", x2: "16.3756", y2: "23.254", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear", x1: "5.79203", y1: "17.6767", x2: "12.0515", y2: "-4.69319e-06", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$5 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7 6C7 3.23858 9.23858 1 12 1C14.7614 1 17 3.23858 17 6V9H15V6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6V9H7V6Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4 12.4286C4 10.6802 5.30872 9.23743 7 9.02653V11H9V9H15V11H17V9.02653C18.6913 9.23743 20 10.6802 20 12.4286V19.5714C20 21.465 18.465 23 16.5714 23H7.42857C5.53502 23 4 21.465 4 19.5714V12.4286ZM13.1429 16.4206C13.4935 16.1067 13.7142 15.6505 13.7142 15.1429C13.7142 14.1961 12.9467 13.4286 11.9999 13.4286C11.0532 13.4286 10.2856 14.1961 10.2856 15.1429C10.2856 15.6506 10.5064 16.1068 10.8572 16.4207V17.9999C10.8572 18.631 11.3689 19.1427 12 19.1427C12.6312 19.1427 13.1429 18.631 13.1429 17.9999V16.4206Z" })));
};

var Icon$4 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23 5C23 2.79086 21.2091 1 19 1C16.7909 1 15 2.79086 15 5V9H17V5C17 3.89543 17.8954 3 19 3C20.1046 3 21 3.89543 21 5H23Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.42857 9C5.53502 9 4 10.535 4 12.4286V19.5714C4 21.465 5.53502 23 7.42857 23H16.5714C18.465 23 20 21.465 20 19.5714V12.4286C20 10.6802 18.6913 9.23743 17 9.02653V11H15V9H7.42857ZM13.7142 15.1429C13.7142 15.6505 13.4935 16.1067 13.1429 16.4206V17.9999C13.1429 18.631 12.6312 19.1427 12 19.1427C11.3689 19.1427 10.8572 18.631 10.8572 17.9999V16.4207C10.5064 16.1068 10.2856 15.6506 10.2856 15.1429C10.2856 14.1961 11.0532 13.4286 11.9999 13.4286C12.9467 13.4286 13.7142 14.1961 13.7142 15.1429Z" })));
};

var Icon$3 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.89998C6.97421 2.89998 2.90001 6.97418 2.90001 12C2.90001 17.0258 6.97421 21.1 12 21.1C17.0258 21.1 21.1 17.0258 21.1 12C21.1 6.97418 17.0258 2.89998 12 2.89998ZM1.10001 12C1.10001 5.98007 5.9801 1.09998 12 1.09998C18.0199 1.09998 22.9 5.98007 22.9 12C22.9 18.0199 18.0199 22.9 12 22.9C5.9801 22.9 1.10001 18.0199 1.10001 12Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.0072 5.26316C9.33555 6.9423 8.90001 9.32374 8.90001 12C8.90001 14.6762 9.33555 17.0576 10.0072 18.7368C10.344 19.5789 10.7226 20.1999 11.0969 20.5957C11.4695 20.9896 11.7749 21.1 12 21.1C12.2251 21.1 12.5306 20.9896 12.9031 20.5957C13.2774 20.1999 13.656 19.5789 13.9928 18.7368C14.6645 17.0576 15.1 14.6762 15.1 12C15.1 9.32374 14.6645 6.9423 13.9928 5.26316C13.656 4.42109 13.2774 3.80004 12.9031 3.40422C12.5306 3.01031 12.2251 2.89998 12 2.89998C11.7749 2.89998 11.4695 3.01031 11.0969 3.40422C10.7226 3.80004 10.344 4.42109 10.0072 5.26316ZM9.78913 2.16743C10.3737 1.54929 11.1205 1.09998 12 1.09998C12.8795 1.09998 13.6263 1.54929 14.2109 2.16743C14.7937 2.78367 15.277 3.62708 15.6641 4.59466C16.4401 6.5348 16.9 9.15336 16.9 12C16.9 14.8466 16.4401 17.4652 15.6641 19.4053C15.277 20.3729 14.7937 21.2163 14.2109 21.8325C13.6263 22.4507 12.8795 22.9 12 22.9C11.1205 22.9 10.3737 22.4507 9.78913 21.8325C9.20634 21.2163 8.72298 20.3729 8.33595 19.4053C7.55989 17.4652 7.10001 14.8466 7.10001 12C7.10001 9.15336 7.55989 6.5348 8.33595 4.59466C8.72298 3.62708 9.20634 2.78367 9.78913 2.16743Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.79287 7.64605C5.28469 7.35699 4.14781 6.96029 3.47289 6.54351L2.52713 8.07502C3.47293 8.65908 4.85695 9.10777 6.45404 9.41387C8.06933 9.72347 9.97144 9.90002 12 9.90002C14.0286 9.90002 15.9307 9.72347 17.546 9.41387C19.1431 9.10777 20.5271 8.65908 21.4729 8.07502L20.5271 6.54351C19.8522 6.96029 18.7153 7.35699 17.2072 7.64605C15.7172 7.93163 13.9296 8.10002 12 8.10002C10.0704 8.10002 8.28286 7.93163 6.79287 7.64605Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.79287 16.3539C5.28469 16.643 4.14781 17.0397 3.47289 17.4565L2.52713 15.925C3.47293 15.3409 4.85695 14.8922 6.45404 14.5861C8.06933 14.2765 9.97144 14.1 12 14.1C14.0286 14.1 15.9307 14.2765 17.546 14.5861C19.1431 14.8922 20.5271 15.3409 21.4729 15.925L20.5271 17.4565C19.8522 17.0397 18.7153 16.643 17.2072 16.3539C15.7172 16.0684 13.9296 15.9 12 15.9C10.0704 15.9 8.28286 16.0684 6.79287 16.3539Z" })));
};

var Icon$2 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_10326_28479)" },
            React__default["default"].createElement("path", { d: "M20.25 6.75021H16.9718C17.4599 6.15468 17.7004 5.39427 17.6434 4.62638C17.5864 3.85849 17.2363 3.14193 16.6656 2.62501C16.0949 2.10809 15.3473 1.83041 14.5775 1.84944C13.8077 1.86847 13.0747 2.18275 12.5303 2.72724C12.3131 2.95355 12.1341 3.21352 12 3.49706C11.8659 3.21351 11.6868 2.95353 11.4697 2.7272C10.9252 2.18272 10.1922 1.86845 9.42244 1.84943C8.65268 1.83041 7.90507 2.1081 7.33438 2.62503C6.76369 3.14195 6.41362 3.85852 6.35662 4.62641C6.29963 5.39429 6.54008 6.1547 7.0282 6.75021H3.75001C3.35233 6.75066 2.97106 6.90884 2.68985 7.19005C2.40864 7.47125 2.25046 7.85252 2.25001 8.25021V11.2502C2.25046 11.6479 2.40864 12.0292 2.68985 12.3104C2.97106 12.5916 3.35233 12.7498 3.75001 12.7502V18.7502C3.75047 19.1479 3.90865 19.5292 4.18985 19.8104C4.47106 20.0916 4.85233 20.2498 5.25001 20.2502H18.75C19.1477 20.2498 19.529 20.0916 19.8102 19.8104C20.0914 19.5292 20.2496 19.1479 20.25 18.7502V12.7502C20.6477 12.7498 21.029 12.5916 21.3102 12.3104C21.5914 12.0292 21.7496 11.6479 21.75 11.2502V8.25021C21.7496 7.85252 21.5914 7.47125 21.3102 7.19005C21.029 6.90884 20.6477 6.75066 20.25 6.75021ZM13.5909 3.7879C13.7302 3.64856 13.8956 3.53801 14.0776 3.46258C14.2596 3.38715 14.4547 3.34831 14.6517 3.34828C14.8487 3.34826 15.0438 3.38704 15.2258 3.46242C15.4078 3.53781 15.5732 3.64831 15.7125 3.78762C15.8519 3.92693 15.9624 4.09232 16.0377 4.27434C16.1131 4.45636 16.1519 4.65146 16.1519 4.84847C16.1519 5.04549 16.113 5.24057 16.0376 5.42258C15.9622 5.60458 15.8516 5.76995 15.7123 5.90923C15.2491 6.37246 13.9099 6.63259 12.782 6.71824C12.8677 5.59021 13.1278 4.25109 13.5909 3.7879ZM8.28764 3.7879C8.56918 3.50703 8.95063 3.34929 9.34832 3.34928C9.74601 3.34928 10.1275 3.50701 10.409 3.78788C10.8723 4.25112 11.1324 5.59035 11.2181 6.71821C10.09 6.63254 8.7509 6.37242 8.28773 5.90923C8.00686 5.6277 7.84911 5.24626 7.84909 4.84858C7.84908 4.45091 8.00679 4.06946 8.28764 3.7879ZM20.25 11.2502H12.75V18.0002C12.75 18.1991 12.671 18.3899 12.5303 18.5305C12.3897 18.6712 12.1989 18.7502 12 18.7502C11.8011 18.7502 11.6103 18.6712 11.4697 18.5305C11.329 18.3899 11.25 18.1991 11.25 18.0002V11.2502H3.75001V8.25021H11.25V11.2502H12.75V8.25021H20.25L20.2509 11.2502L20.25 11.2502Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_10326_28479" },
                React__default["default"].createElement("rect", { width: "24", height: "24" })))));
};

var Icon$1 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M2 14V3C2 1.89543 2.89543 1 4 1C5.10457 1 6 1.89543 6 3V16H4C2.89543 16 2 15.1046 2 14Z" }),
        React__default["default"].createElement("g", { opacity: "0.48" },
            React__default["default"].createElement("path", { d: "M7.99997 1H5.49997H4C4.95462 1 5.95021 1.73011 5.99997 3H7.99997V1Z" }),
            React__default["default"].createElement("path", { d: "M6 3C6 1.89543 6.89543 1 8 1H20C21.1046 1 22 1.89543 22 3V21C22 22.1046 21.1046 23 20 23H8C6.89543 23 6 22.1046 6 21V3Z" })),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3359 14.2499C12.7502 14.2499 13.0859 14.5857 13.0859 14.9999V19.9999C13.0859 20.4141 12.7502 20.7499 12.3359 20.7499C11.9217 20.7499 11.5859 20.4141 11.5859 19.9999L11.5859 14.9999C11.5859 14.5857 11.9217 14.2499 12.3359 14.2499ZM9 16.3928C9.41421 16.3928 9.75 16.7286 9.75 17.1428V19.9999C9.75 20.4141 9.41421 20.7499 9 20.7499C8.58579 20.7499 8.25 20.4141 8.25 19.9999V17.1428C8.25 16.7286 8.58579 16.3928 9 16.3928ZM15.6641 16.3928C16.0783 16.3928 16.4141 16.7286 16.4141 17.1428V19.9999C16.4141 20.4141 16.0783 20.7499 15.6641 20.7499C15.2499 20.7499 14.9141 20.4141 14.9141 19.9999V17.1428C14.9141 16.7286 15.2499 16.3928 15.6641 16.3928ZM19 17.1072C19.4142 17.1072 19.75 17.4429 19.75 17.8572V20C19.75 20.4142 19.4142 20.75 19 20.75C18.5858 20.75 18.25 20.4142 18.25 20V17.8572C18.25 17.4429 18.5858 17.1072 19 17.1072Z" }),
        React__default["default"].createElement("path", { d: "M14.8105 11.4672V11.915C14.8105 12.1316 14.6349 12.3072 14.4183 12.3072H13.634C13.4174 12.3072 13.2419 12.1316 13.2419 11.915V11.471C11.6147 11.219 11.0229 10.1947 10.9099 9.47041C10.8877 9.32775 11.006 9.21039 11.1504 9.21039H12.2157C12.3522 9.21039 12.4657 9.31965 12.5338 9.43797C12.6673 9.67005 13.032 9.98458 14.0262 9.98458C15.1085 9.98458 15.5948 9.53168 15.5948 9.21039C15.5948 8.95955 15.5948 8.43619 14.0262 8.43619C11.2968 8.43619 10.8889 6.98071 10.8889 6.11361C10.8889 5.11645 11.696 4.11309 13.2419 3.85683V3.41828C13.2419 3.2017 13.4174 3.02612 13.634 3.02612H14.4183C14.6349 3.02612 14.8105 3.2017 14.8105 3.41828V3.8847C16.0272 4.16869 16.5735 5.09279 16.6751 5.85314C16.6942 5.99626 16.5758 6.11361 16.4314 6.11361H15.9085L15.3805 6.12299C15.2382 6.12552 15.1253 6.01059 15.0774 5.87652C14.9837 5.61461 14.7199 5.33942 14.0262 5.33942C13.0073 5.33942 12.4575 5.7389 12.4575 6.11361C12.4575 6.40316 12.4575 6.88781 14.0262 6.88781C16.7556 6.88781 17.1634 8.34329 17.1634 9.21039C17.1634 10.2076 16.3564 11.2109 14.8105 11.4672Z" })));
};

var Icon = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M4.58454 1.04297C4.24606 1.04297 3.91708 1.20002 3.5891 1.53754C3.06832 2.07347 2.98448 2.75939 3.00765 3.03536L3 3.02717V14C3 15.1045 3.89543 16 5 16H6V3.02717C6 1.74007 5.16199 1.04297 4.58454 1.04297Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21 1H5C5.95462 1 6.95021 1.73011 6.99997 3L6.99995 21C6.99995 22.1046 7.89538 23 8.99995 23H21C22.1045 23 23 22.1046 23 21V3C23 1.89543 22.1045 1 21 1ZM13.3359 14.2499C13.7501 14.2499 14.0859 14.5857 14.0859 14.9999V19.9999C14.0859 20.4141 13.7501 20.7499 13.3359 20.7499C12.9217 20.7499 12.5859 20.4141 12.5859 19.9999L12.5859 14.9999C12.5859 14.5857 12.9217 14.2499 13.3359 14.2499ZM9.99994 16.3928C10.4142 16.3928 10.7499 16.7286 10.7499 17.1428V19.9999C10.7499 20.4141 10.4142 20.7499 9.99994 20.7499C9.58573 20.7499 9.24994 20.4141 9.24994 19.9999V17.1428C9.24994 16.7286 9.58573 16.3928 9.99994 16.3928ZM16.664 16.3928C17.0782 16.3928 17.414 16.7286 17.414 17.1428V19.9999C17.414 20.4141 17.0782 20.7499 16.664 20.7499C16.2498 20.7499 15.914 20.4141 15.914 19.9999V17.1428C15.914 16.7286 16.2498 16.3928 16.664 16.3928ZM19.9999 17.1072C20.4142 17.1072 20.7499 17.4429 20.7499 17.8572V20C20.7499 20.4142 20.4142 20.75 19.9999 20.75C19.5857 20.75 19.2499 20.4142 19.2499 20V17.8572C19.2499 17.4429 19.5857 17.1072 19.9999 17.1072ZM15.8104 11.915V11.4672C17.3563 11.2109 18.1634 10.2076 18.1634 9.21039C18.1634 8.34329 17.7555 6.88781 15.0261 6.88781C13.4575 6.88781 13.4575 6.40316 13.4575 6.11361C13.4575 5.7389 14.0073 5.33942 15.0261 5.33942C15.7198 5.33942 15.9836 5.61461 16.0773 5.87652C16.1253 6.01059 16.2381 6.12552 16.3805 6.12299L16.9085 6.11361H17.4313C17.5757 6.11361 17.6941 5.99626 17.675 5.85314C17.5734 5.09279 17.0272 4.16869 15.8104 3.8847V3.41828C15.8104 3.2017 15.6348 3.02612 15.4183 3.02612H14.634C14.4174 3.02612 14.2418 3.2017 14.2418 3.41828V3.85683C12.6959 4.11309 11.8889 5.11645 11.8889 6.11361C11.8889 6.98071 12.2967 8.43619 15.0261 8.43619C16.5947 8.43619 16.5947 8.95955 16.5947 9.21039C16.5947 9.53168 16.1085 9.98458 15.0261 9.98458C14.0319 9.98458 13.6672 9.67005 13.5337 9.43797C13.4656 9.31965 13.3521 9.21039 13.2156 9.21039H12.1503C12.0059 9.21039 11.8876 9.32775 11.9099 9.47041C12.0229 10.1947 12.6146 11.219 14.2418 11.471V11.915C14.2418 12.1316 14.4174 12.3072 14.634 12.3072H15.4183C15.6348 12.3072 15.8104 12.1316 15.8104 11.915Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    DownloadIcon: Icon$3k,
    MouseIcon: Icon$3j,
    HourglassIcon: Icon$3i,
    BscBlackRoundIcon: Icon$3h,
    ChevronDownCircleSolidIcon: Icon$3g,
    ChevronDownCircleOpacityIcon: Icon$3f,
    ChevronDownIcon: Icon$3e,
    ChevronRightCircleSolidIcon: Icon$3d,
    ChevronRightCircleOpacityIcon: Icon$3c,
    ChevronRightIcon: Icon$3b,
    ChevronLeftCircleSolidIcon: Icon$3a,
    ChevronLeftCircleOpacityIcon: Icon$39,
    ChevronLeftIcon: Icon$38,
    ChevronUpIcon: Icon$37,
    ChevronUpCircleSolidIcon: Icon$36,
    ChevronUpCircleOpacityIcon: Icon$35,
    ArrowRightIcon: Icon$34,
    ArrowUpIcon: Icon$33,
    ArrowLeftIcon: Icon$32,
    ArrowDownIcon: Icon$31,
    ArrowUpForwardIcon: Icon$30,
    ArrowSkipRightIcon: Icon$2$,
    ArrowSkipLeftIcon: Icon$2_,
    ChevronUpDoubleIcon: Icon$2Z,
    ChevronUpTripleIcon: Icon$2Y,
    PlusIcon: Icon$2X,
    PlusCircleSolidIcon: Icon$2W,
    PlusCircleOpacityIcon: Icon$2V,
    MinusIcon: Icon$2U,
    MinusCircleSolidIcon: Icon$2T,
    MinusCircleOpacityIcon: Icon$2S,
    WarningOpacityIcon: Icon$2R,
    WarningSolidIcon: Icon$2Q,
    WarningIcon: Icon$2P,
    WarningCycleIcon: Icon$2O,
    CloseIcon: Icon$2N,
    CloseCircleOpacityIcon: Icon$2M,
    CloseCircleSolidIcon: Icon$2L,
    WalletSolidIcon: Icon$2K,
    WalletOpacityIcon: Icon$2J,
    CalculateOpacityIcon: Icon$2I,
    CalculateSolidIcon: Icon$2H,
    CalculateIcon: Icon$2G,
    HelpOpacityIcon: Icon$2F,
    HelpSolidIcon: Icon$2E,
    HelpIcon: Icon$2D,
    FireIcon: Icon$2C,
    FireSolidIcon: Icon$2B,
    FireOpacityIcon: Icon$2A,
    InfoIcon: Icon$2z,
    InfoSolidIcon: Icon$2y,
    InfoOpacityIcon: Icon$2x,
    SwapHorizontalOpacityIcon: Icon$2w,
    SwapHorizontalSolidIcon: Icon$2v,
    SwapVerticalOpacityIcon: Icon$2u,
    SwapVerticalSolidIcon: Icon$2t,
    FavoriteEmptyIcon: Icon$2s,
    FavoriteSolidIcon: Icon$2r,
    ListViewIcon: Icon$2q,
    CardViewIcon: Icon$2p,
    EyeOpenIcon: Icon$2o,
    EyeCloseIcon: Icon$2n,
    CheckIcon: Icon$2m,
    CheckSolidIcon: Icon$2l,
    CheckOpacityIcon: Icon$2k,
    UserSolidIcon: Icon$2j,
    UserOpacityIcon: Icon$2i,
    BellSolidIcon: Icon$2h,
    BellOpacityIcon: Icon$2g,
    SearchSolidIcon: Icon$2f,
    SearchOpacityIcon: Icon$2e,
    StarIcon: Icon$2d,
    StarOpacityIcon: Icon$2c,
    StarSolidIcon: Icon$2b,
    OptionsSolidIcon: Icon$2a,
    OptionsOpacityIcon: Icon$29,
    VerifiedSolidIcon: Icon$28,
    VerifiedOpacityIcon: Icon$27,
    CopyIcon: Icon$26,
    CopySolidIcon: Icon$25,
    CopyOpacityIcon: Icon$24,
    ShareIcon: Icon$23,
    ShareSolidIcon: Icon$22,
    ShareOpacityIcon: Icon$21,
    FilterIcon: Icon$20,
    FilterSolidIcon: Icon$1$,
    FilterOpacityIcon: Icon$1_,
    BookIcon: Icon$1Z,
    BookSolidIcon: Icon$1Y,
    BookOpacityIcon: Icon$1X,
    FileIcon: Icon$1W,
    FileSolidIcon: Icon$1V,
    FileOpacityIcon: Icon$1U,
    AuctionIcon: Icon$1T,
    AuctionSolidIcon: Icon$1S,
    AuctionOpacityIcon: Icon$1R,
    TimerIcon: Icon$1Q,
    TimerSolidIcon: Icon$1P,
    TimerOpacityIcon: Icon$1O,
    TestIcon: Icon$1N,
    TestOpacityIcon: Icon$1M,
    TestSolidIcon: Icon$1L,
    FlagIcon: Icon$1K,
    FlagOpacityIcon: Icon$1J,
    FlagSolidIcon: Icon$1I,
    BlockIcon: Icon$1H,
    BlockOpacityIcon: Icon$1G,
    BlockSolidIcon: Icon$1F,
    MoreVerticalIcon: Icon$1E,
    MoreVerticalSolidIcon: Icon$1D,
    MoreVerticalOpacityIcon: Icon$1C,
    MoreHorizontalIcon: Icon$1B,
    MoreHorizontalSolidIcon: Icon$1A,
    MoreHorizontalOpacityIcon: Icon$1z,
    More2Icon: Icon$1y,
    EditIcon: Icon$1x,
    EditOpacityIcon: Icon$1w,
    EditSolidIcon: Icon$1v,
    MedalIcon: Icon$1u,
    GasIcon: Icon$1t,
    PlayIcon: Icon$1s,
    AutoRenewSolidIcon: Icon$1r,
    AutoRenewOpacityIcon: Icon$1q,
    AutoRenewIcon: Icon$1p,
    AutoRenewSolidAnimateIcon: Icon$1o,
    AutoRenewOpacityAnimateIcon: Icon$1n,
    AutoRenewAnimateIcon: Icon$1m,
    RefreshIcon: Icon$1l,
    RefreshOpacityIcon: Icon$1k,
    RefreshSolidIcon: Icon$1j,
    ListOpacityIcon: Icon$1i,
    ListSolidIcon: Icon$1h,
    HistoryIcon: Icon$1g,
    ProductsSolidIcon: Icon$1f,
    ProductsOpacityIcon: Icon$1e,
    BurgerIcon: Icon$1d,
    BurgerCloseIcon: Icon$1c,
    UsdOpacityIcon: Icon$1b,
    UsdSolidIcon: Icon$1a,
    UsdLineIcon: Icon$19,
    LiquiditySolidIcon: Icon$18,
    LiquidityOpacityIcon: Icon$17,
    ExchangeSolidIcon: Icon$16,
    ExchangeOpacityIcon: Icon$15,
    ExpertModeSolidIcon: Icon$14,
    ExpertModeOpacityIcon: Icon$13,
    PoolsSolidIcon: Icon$12,
    PoolsOpacityIcon: Icon$11,
    FarmsSolidIcon: Icon$10,
    FarmsOpacityIcon: Icon$$,
    ReferralSolidIcon: Icon$_,
    ReferralOpacityIcon: Icon$Z,
    IdoSolidIcon: Icon$Y,
    IdoOpacityIcon: Icon$X,
    GobletSolidIcon: Icon$W,
    GobletOpacityIcon: Icon$V,
    LotterySolidIcon: Icon$U,
    LotteryOpacityIcon: Icon$T,
    LaunchpadSolidIcon: Icon$S,
    LaunchpadOpacityIcon: Icon$R,
    NFTEarnSolidIcon: Icon$Q,
    NFTEarnOpacityIcon: Icon$P,
    FixedStakingSolidIcon: Icon$O,
    FixedStakingOpacityIcon: Icon$N,
    AnalyticsSolidIcon: Icon$M,
    AnalyticsOpacityIcon: Icon$L,
    VotingSolidIcon: Icon$K,
    VotingOpacityIcon: Icon$J,
    CharitySolidIcon: Icon$I,
    CharityOpacityIcon: Icon$H,
    AboutBSWSolidIcon: Icon$G,
    AboutBSWOpacityIcon: Icon$F,
    TeamSolidIcon: Icon$E,
    TeamOpacityIcon: Icon$D,
    Program10mSolidIcon: Icon$C,
    Program10mOpacityIcon: Icon$B,
    SpaceAgentSolidIcon: Icon$A,
    SpaceAgentOpacityIcon: Icon$z,
    MultiPoolOpacityIcon: Icon$y,
    MultiPoolSolidIcon: Icon$x,
    NewsSolidIcon: Icon$w,
    NewsOpacityIcon: Icon$v,
    DocsSolidIcon: Icon$u,
    DocsOpacityIcon: Icon$t,
    AuditProtectionOpacityIcon: Icon$s,
    AuditProtectionSolidIcon: Icon$r,
    AuditSearchSolidIcon: Icon$q,
    AuditSearchOpacityIcon: Icon$p,
    InstagramIcon: Icon$o,
    MediumIcon: Icon$n,
    RedditIcon: Icon$m,
    TelegramIcon: Icon$l,
    TwitchIcon: Icon$k,
    TwitterIcon: Icon$j,
    YoutubeIcon: Icon$i,
    FacebookIcon: Icon$h,
    TikTokIcon: Icon$g,
    CoinMarketCapIcon: Icon$f,
    QuoraIcon: Icon$e,
    BSCIcon: Icon$d,
    PolygonIcon: Icon$c,
    AvalancheIcon: Icon$b,
    ArrowFiguredIcon: Icon$a,
    Ticket2Icon: Icon$9,
    LogoWithTextIcon: Icon$8,
    ProjectNameIcon: Icon$7,
    BswIcon: Icon$6,
    LockIcon: Icon$5,
    UnlockIcon: Icon$4,
    LanguageIcon: Icon$3,
    GiftIcon: Icon$2,
    Svg: Svg,
    PerpetualOpacityIcon: Icon$1,
    PerpetualSolidIcon: Icon
});

var getColor$1 = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors.".concat(color), color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default["default"].div(templateObject_1$1o || (templateObject_1$1o = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  \n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  \n  ", "\n  ", "\n  ", "\n"])), getColor$1, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, function (_a) {
    var noWrap = _a.noWrap;
    return noWrap && "white-space: nowrap;";
}, styledSystem.space, styledSystem.typography, styledSystem.layout);
Text.defaultProps = {
    color: "pastelBlue",
    small: false,
    ellipsis: false,
};
var templateObject_1$1o;

var TooltipText = styled__default["default"](Text)(templateObject_1$1n || (templateObject_1$1n = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted ".concat(theme.colors.pastelBlue);
});
var templateObject_1$1n;

var Box = styled__default["default"].div(templateObject_1$1m || (templateObject_1$1m = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$1m;

var Flex = styled__default["default"](Box)(templateObject_1$1l || (templateObject_1$1l = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$1l;

var variants$8 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var Grid = styled__default["default"](Box)(templateObject_1$1k || (templateObject_1$1k = __makeTemplateObject(["\n  display: grid;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.grid);
var templateObject_1$1k;

var SvgDiag = styled__default["default"].svg(templateObject_1$1j || (templateObject_1$1j = __makeTemplateObject(["\n  position: relative;\n  top: -10px;\n  left: -25%;\n  width: 43px;\n  height: 42px;\n  overflow: visible;\n"], ["\n  position: relative;\n  top: -10px;\n  left: -25%;\n  width: 43px;\n  height: 42px;\n  overflow: visible;\n"])));
var Content = styled__default["default"].g(templateObject_2$I || (templateObject_2$I = __makeTemplateObject(["\n  fill: #000;\n  transform: translate(49%, 25%);\n"], ["\n  fill: #000;\n  transform: translate(49%, 25%);\n"])));
var StyledButton$1 = styled__default["default"].button(templateObject_3$x || (templateObject_3$x = __makeTemplateObject(["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"], ["\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n"])));
var ProgressCircle = function (_a) {
    var _b = _a.filled, filled = _b === void 0 ? 0 : _b, _c = _a.notFilled, notFilled = _c === void 0 ? 100 : _c, onClick = _a.onClick;
    var _d = React.useState("0 100"), percentToDisplay = _d[0], setPercentToDisplay = _d[1];
    React.useEffect(function () {
        setPercentToDisplay("".concat(Number(filled).toFixed(), " ").concat(Number(notFilled).toFixed()));
    }, [filled, notFilled]);
    return (React__default["default"].createElement(StyledButton$1, { onClick: onClick },
        React__default["default"].createElement(SvgDiag, { viewBox: "0 0 42 42" },
            React__default["default"].createElement("circle", { cx: "31", cy: "31", r: "15.91549430918954", fill: "transparent" }),
            React__default["default"].createElement("circle", { cx: "30", cy: "31", r: "15.91549430918954", fill: "transparent", stroke: "url(#diag-color)", strokeWidth: "1", strokeDasharray: "100 0", strokeDashoffset: "0" }),
            React__default["default"].createElement("circle", { className: "diag-circle", cx: "30", cy: "31", r: "15.91549430918954", fill: "transparent", stroke: "#1DC872", strokeWidth: "1", strokeDasharray: percentToDisplay, strokeDashoffset: "25", strokeLinecap: "round" }),
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: "diag-color", x1: "4.653", y1: "13.461", x2: "13.086", y2: "0.7", gradientUnits: "userSpaceOnUse" },
                    React__default["default"].createElement("stop", { stopColor: "rgba(196, 196, 196, 0.3)" }))),
            React__default["default"].createElement(Content, null,
                React__default["default"].createElement(Icon$2N, { width: "20px", color: "currentColor" })))));
};
var templateObject_1$1j, templateObject_2$I, templateObject_3$x;

var getThemeColor = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$8.INFO : _b;
    switch (variant) {
        case variants$8.DANGER:
            return "rgba(249, 59, 93, 0.16)";
        case variants$8.WARNING:
            return "rgba(255, 219, 28, 0.16)";
        case variants$8.SUCCESS:
            return "rgba(29, 200, 114, 0.16)";
        case variants$8.INFO:
        default:
            return "rgba(18, 99, 241, 0.16)";
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$8.INFO; }
    switch (variant) {
        case variants$8.DANGER:
            return Icon$2L;
        case variants$8.WARNING:
            return Icon$2Q;
        case variants$8.SUCCESS:
            return Icon$2l;
        case variants$8.INFO:
        default:
            return Icon$2y;
    }
};
var getIconColor = function (variant) {
    if (variant === void 0) { variant = variants$8.INFO; }
    switch (variant) {
        case variants$8.DANGER:
            return "secondary";
        case variants$8.WARNING:
            return "warning";
        case variants$8.SUCCESS:
            return "success";
        case variants$8.INFO:
        default:
            return "primary";
    }
};
var IconLabel = styled__default["default"].div(templateObject_1$1i || (templateObject_1$1i = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 8px;\n  border: none;\n  padding: 12px;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border-radius: 8px;\n  border: none;\n  padding: 12px;\n"])), getThemeColor);
var Details = styled__default["default"].div(templateObject_2$H || (templateObject_2$H = __makeTemplateObject(["\n  display: flex;\n"], ["\n  display: flex;\n"])));
var StyledAlert = styled__default["default"](Flex)(templateObject_3$w || (templateObject_3$w = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  padding: 12px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var StyledBox = styled__default["default"](Box)(templateObject_4$r || (templateObject_4$r = __makeTemplateObject(["\n  position: absolute;\n  right: 8px;\n\n  // ", " {\n  //   position: static;\n  //   transform: translateX(-50%);\n  //}\n"], ["\n  position: absolute;\n  right: 8px;\n\n  // ", " {\n  //   position: static;\n  //   transform: translateX(-50%);\n  //}\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick, progress = _a.progress;
    var Icon = getIcon(variant);
    var IconColor = getIconColor(variant);
    return (React__default["default"].createElement(StyledAlert, null,
        React__default["default"].createElement("div", null,
            React__default["default"].createElement(IconLabel, { variant: variant, hasDescription: !!children },
                React__default["default"].createElement(Icon, { width: "24px", color: IconColor }))),
        React__default["default"].createElement(Details, { hasHandler: !!onClick },
            React__default["default"].createElement(Box, { ml: "10px" },
                React__default["default"].createElement(Text, { mr: "18%", fontSize: "16px", color: "dark", bold: true }, title),
                typeof children === "string" ? (React__default["default"].createElement(Text, { as: "p" }, children)) : (children)),
            React__default["default"].createElement(StyledBox, null,
                React__default["default"].createElement(ProgressCircle, { onClick: onClick, filled: progress, notFilled: progress ? 100 - progress : 0 })))));
};
var templateObject_1$1i, templateObject_2$H, templateObject_3$w, templateObject_4$r;

var Separator = styled__default["default"].div(templateObject_1$1h || (templateObject_1$1h = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default["default"].ul(templateObject_2$G || (templateObject_2$G = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryHover;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum, true), [item], false);
        }
        return __spreadArray(__spreadArray([], accum, true), [
            React__default["default"].createElement(Separator, { "aria-hidden": true, key: "seperator-".concat(index) }, separator),
            item,
        ], false);
    }, []);
};
var DefaultSeparator = React__default["default"].createElement(Icon$3b, { color: "dark500", width: "20px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
    var items = insertSeparators(validItems, separator);
    return (React__default["default"].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default["default"].createElement("li", { key: "child-".concat(index) }, item)); })));
};
var templateObject_1$1h, templateObject_2$G;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$a = {
    XL: "xl",
    LG: "lg",
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$7 = {
    PRIMARY: "primary",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
    BOOST: "boost",
    LIGHT_OUT: "lightOut",
    LIGHT: "light",
    TERTIARY: "tertiary",
    TERTIARY_OUT: "tertiaryOut",
    TEXT: "text",
    TEXT_DARK: "textDark",
};

var _a$d, _b$7;
var scaleVariants$3 = (_a$d = {},
    _a$d[scales$a.XL] = {
        height: "48px",
        fontSize: "16px",
        padding: "0 24px",
        borderRadius: "10px",
    },
    _a$d[scales$a.LG] = {
        height: "40px",
        padding: "0 16px",
        fontSize: "14px",
        borderRadius: "8px",
    },
    _a$d[scales$a.MD] = {
        height: "32px",
        padding: "0 12px",
        fontSize: "12px",
        borderRadius: "8px",
    },
    _a$d[scales$a.SM] = {
        height: "24px",
        padding: "0 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
    _a$d[scales$a.XS] = {
        height: "20px",
        padding: "0 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
    _a$d);
var styleVariants$3 = (_b$7 = {},
    _b$7[variants$7.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
        ":hover:not(:disabled)": {
            backgroundColor: "primaryHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "primaryPress",
        },
        // ":disabled": {
        //   backgroundColor: "primaryPress",
        //   color: "white"
        // },
    },
    _b$7[variants$7.DANGER] = {
        backgroundColor: "secondary",
        color: "white",
        ":hover:not(:disabled)": {
            backgroundColor: "secondaryHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "secondaryPress",
        },
    },
    _b$7[variants$7.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
        ":hover:not(:disabled)": {
            backgroundColor: "successHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "successPress",
        },
    },
    _b$7[variants$7.WARNING] = {
        backgroundColor: "warning",
        color: "dark800",
        ":hover:not(:disabled)": {
            backgroundColor: "warningHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "warningPress",
        },
    },
    _b$7[variants$7.BOOST] = {
        backgroundColor: "boost",
        color: "white",
        ":hover:not(:disabled)": {
            backgroundColor: "boostHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "boostPress",
        },
    },
    _b$7[variants$7.TERTIARY] = {
        backgroundColor: "btnTertiary",
        color: "primary",
        border: "1px solid transparent",
        ":hover:not(:disabled)": {
            backgroundColor: "transparent",
            borderColor: "btnTertiary",
        },
        ":active:not(:disabled)": {
            backgroundColor: "transparent",
            borderColor: "primary",
        },
    },
    _b$7[variants$7.TERTIARY_OUT] = {
        color: "primary",
        backgroundColor: "transparent",
        border: "1px solid",
        borderColor: "btnTertiaryOut",
        ":hover:not(:disabled)": {
            backgroundColor: "btnTertiaryOut",
            borderColor: "transparent",
        },
        ":active:not(:disabled)": {
            backgroundColor: "btnTertiaryOutPress",
            borderColor: "transparent",
        },
    },
    _b$7[variants$7.LIGHT_OUT] = {
        color: "white",
        border: "1px solid",
        borderColor: "btnLightOutBorder",
        backgroundColor: "transparent",
        ":hover:not(:disabled)": {
            backgroundColor: "btnLightOutBgHover",
            borderColor: "transparent",
        },
        ":active:not(:disabled)": {
            backgroundColor: "btnLightOutBgPress",
            borderColor: "transparent",
        },
    },
    _b$7[variants$7.LIGHT] = {
        backgroundColor: "btnLight",
        color: "white",
        border: "1px solid transparent",
        ":hover:not(:disabled)": {
            backgroundColor: "transparent",
            borderColor: "btnLight",
        },
        ":active:not(:disabled)": {
            backgroundColor: "transparent",
            borderColor: "white",
        },
    },
    _b$7[variants$7.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
        ":hover:not(:disabled)": {
            color: "primaryHover",
        },
        ":active:not(:disabled)": {
            color: "primaryPress",
        },
    },
    _b$7[variants$7.TEXT_DARK] = {
        backgroundColor: "transparent",
        color: "primaryHover",
        boxShadow: "none",
        ":hover:not(:disabled)": {
            color: "primary",
        },
        ":active:not(:disabled)": {
            color: "primaryPress",
        },
    },
    _b$7);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading; _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      opacity: .32;\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var getFlat = function (_a) {
    var _b = _a.flatBottom, flatBottom = _b === void 0 ? false : _b, _c = _a.flatTop, flatTop = _c === void 0 ? false : _c, _d = _a.flat, flat = _d === void 0 ? false : _d;
    if (flatBottom) {
        return "\n      border-bottom-right-radius: 0;\n      border-bottom-left-radius: 0;\n    ";
    }
    if (flatTop) {
        return "\n      border-top-right-radius: 0;\n      border-top-left-radius: 0;\n    ";
    }
    if (flat) {
        return "\n      border-radius: 0;\n    ";
    }
};
var StyledButton = styled__default["default"].button(templateObject_1$1g || (templateObject_1$1g = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out,\n    color 0.3s ease-in-out;\n  white-space: nowrap;\n\n  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.3s ease-in-out, opacity 0.3s ease-in-out,\n    color 0.3s ease-in-out;\n  white-space: nowrap;\n\n  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$3,
}), styledSystem.variant({
    variants: styleVariants$3,
}), styledSystem.layout, styledSystem.space, getFlat);
var templateObject_1$1g;

var Button$2 = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, loadingTitle = props.loadingTitle, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children", "loadingTitle"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    var loadingText = loadingTitle !== null && loadingTitle !== void 0 ? loadingTitle : "Loading...";
    var endIconElement = isLoading ? (React__default["default"].createElement(Icon$1m, { color: "contrast" })) : (endIcon);
    if (isLoading) {
        classNames.push("button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("button--disabled");
    }
    return (React__default["default"].createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default["default"].createElement(React__default["default"].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            isLoading ? loadingText : children,
            React.isValidElement(endIconElement) &&
                React.cloneElement(endIconElement, {
                    // @ts-ignore
                    ml: "0.5rem",
                }))));
};
Button$2.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$7.PRIMARY,
    scale: scales$a.MD,
    disabled: false,
};

var IconButton = styled__default["default"](Button$2)(templateObject_1$1f || (templateObject_1$1f = __makeTemplateObject(["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var templateObject_1$1f;

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default["default"].createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? (React__default["default"].createElement(Icon$37, { color: "invertedContrast" })) : (React__default["default"].createElement(Icon$3e, { color: "invertedContrast" }))));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default["default"].createElement(Button$2, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? (React__default["default"].createElement(Icon$37, { color: "primary" })) : (React__default["default"].createElement(Icon$3e, { color: "primary" })) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

//--------------
var scales$9 = {
    XL: "xl",
    LG: "lg",
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$6 = {
    DARK: "dark",
    LIGHT: "light",
    WARNING_LIGHT: "warningLight",
    WARNING_DARK: "warningDark",
};

var getRgba = function (color, theme, alpha) {
    var hexRegEx = /^#[0-9A-F]{6}$/i;
    var hex = hexRegEx.test(color)
        ? color
        : getThemeValue("colors.".concat(color), color)(theme);
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
        return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ", ").concat(alpha, ")");
    }
    return "rgba(".concat(r, ", ").concat(g, ", ").concat(b, ")");
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
    xll: 1200,
    xxl: 1400,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return "".concat(breakpoint, "px"); });
var breakpointsKeys = Object.keys(breakpointMap);
var mediaQueries$1 = {
    xs: "@media screen and (min-width: ".concat(breakpointMap.xs, "px)"),
    sm: "@media screen and (min-width: ".concat(breakpointMap.sm, "px)"),
    md: "@media screen and (min-width: ".concat(breakpointMap.md, "px)"),
    lg: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
    xl: "@media screen and (min-width: ".concat(breakpointMap.xl, "px)"),
    xll: "@media screen and (min-width: ".concat(breakpointMap.xll, "px)"),
    xxl: "@media screen and (min-width: ".concat(breakpointMap.xxl, "px)"),
    nav: "@media screen and (min-width: ".concat(breakpointMap.lg, "px)"),
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #7645D9, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
    tooltip: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "24px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

var useIsomorphicEffect = typeof window === "undefined" ? React.useEffect : React.useLayoutEffect;

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: ".concat(prevMinWidth, "px)"), _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: ".concat(minWidth, "px) and (max-width: ").concat(breakpoint, "px)"), _b));
    }, {});
})();
var getKey = function (size) {
    return "is".concat(size.charAt(0).toUpperCase()).concat(size.slice(1));
};
var getState = function () {
    return Object.keys(mediaQueries).reduce(function (accum, size) {
        var _a, _b;
        var _c;
        var key = getKey(size);
        if (typeof window === "undefined") {
            return __assign(__assign({}, accum), (_a = {}, _a[key] = false, _a));
        }
        var mql = window.matchMedia(mediaQueries[size]);
        return __assign(__assign({}, accum), (_b = {}, _b[key] = (_c = mql === null || mql === void 0 ? void 0 : mql.matches) !== null && _c !== void 0 ? _c : false, _b));
    }, {});
};
var MatchBreakpointsContext = React.createContext({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
});
var getBreakpointChecks = function (state) {
    return __assign(__assign({}, state), { isMobile: state.isXs || state.isSm, isTablet: state.isMd || state.isLg, isDesktop: state.isXl || state.isXll || state.isXxl });
};
var MatchBreakpointsProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(function () {
        return getBreakpointChecks(getState());
    }), state = _b[0], setState = _b[1];
    useIsomorphicEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql;
            var handler;
            if (typeof (window === null || window === void 0 ? void 0 : window.matchMedia) === "function") {
                mql = window.matchMedia(mediaQueries[size]);
                handler = function (matchMediaQuery) {
                    var key = getKey(size);
                    setState(function (prevState) {
                        var _a;
                        return getBreakpointChecks(__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                    });
                };
                // Safari < 14 fix
                if (mql.addEventListener) {
                    mql.addEventListener("change", handler, { passive: true });
                }
            }
            return function () {
                // Safari < 14 fix
                if (mql === null || mql === void 0 ? void 0 : mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        setState(getBreakpointChecks(getState()));
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, []);
    return (React__default["default"].createElement(MatchBreakpointsContext.Provider, { value: state }, children));
};

var useMatchBreakpoints = function () {
    var matchBreakpointContext = React.useContext(MatchBreakpointsContext);
    if (matchBreakpointContext === undefined) {
        throw new Error("Match Breakpoint context is undefined");
    }
    return matchBreakpointContext;
};

var getColorKey = function (variant) {
    switch (variant) {
        case variants$6.DARK:
            return "pastelBlue";
        case variants$6.LIGHT:
            return "gray900";
        case variants$6.WARNING_LIGHT:
            return "gray900";
        case variants$6.WARNING_DARK:
            return "pastelBlue";
    }
};
var getHoverKey = function (variant) {
    switch (variant) {
        case variants$6.DARK:
            return "white";
        case variants$6.LIGHT:
            return "dark800";
        case variants$6.WARNING_LIGHT:
            return "dark800";
        case variants$6.WARNING_DARK:
            return "white";
    }
};
var getOffset = function (offset, isFlat) {
    return isFlat ? offset : offset + 4;
};

var Wrapper$h = styled__default["default"].div(templateObject_4$q || (templateObject_4$q = __makeTemplateObject(["\n  background-color: ", ";\n  position: relative;\n  display: ", ";\n  width: ", ";\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 4px;\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ", "\n"], ["\n  background-color: ", ";\n  position: relative;\n  display: ", ";\n  width: ", ";\n  border-radius: 10px;\n  overflow: hidden;\n  padding: 4px;\n\n  ", ";\n\n  ", "\n\n  ", "\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme, withoutBackground = _a.withoutBackground, variant = _a.variant;
    return withoutBackground
        ? "transparent"
        : variant === variants$6.DARK
            ? theme.colors.tooltip
            : getRgba(theme.colors.pastelBlue, theme, 0.08);
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var scrollX = _a.scrollX;
    return scrollX && styled.css(templateObject_1$1e || (templateObject_1$1e = __makeTemplateObject(["\n      overflow-x: scroll;\n    "], ["\n      overflow-x: scroll;\n    "])));
}, function (_a) {
    var flatTop = _a.flatTop;
    return flatTop && styled.css(templateObject_2$F || (templateObject_2$F = __makeTemplateObject(["\n      border-radius: 0 0 8px 8px;\n      padding: 0;\n    "], ["\n      border-radius: 0 0 8px 8px;\n      padding: 0;\n    "])));
}, function (_a) {
    var flatBottom = _a.flatBottom;
    return flatBottom && styled.css(templateObject_3$v || (templateObject_3$v = __makeTemplateObject(["\n      border-radius: 8px 8px 0 0;\n      padding: 0;\n    "], ["\n      border-radius: 8px 8px 0 0;\n      padding: 0;\n    "])));
}, styledSystem.space);
var StyledButtonMenu = styled__default["default"].div(templateObject_6$c || (templateObject_6$c = __makeTemplateObject(["\n  position: relative;\n  display: ", ";\n  width: ", ";\n\n  & > button,\n  & > div,\n  & > a {\n    flex-grow: 1;\n\n    ", "\n  }\n\n  & > button,\n  & > div,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n"], ["\n  position: relative;\n  display: ", ";\n  width: ", ";\n\n  & > button,\n  & > div,\n  & > a {\n    flex-grow: 1;\n\n    ", "\n  }\n\n  & > button,\n  & > div,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var equalElementWidth = _a.equalElementWidth;
    return equalElementWidth && styled.css(templateObject_5$j || (templateObject_5$j = __makeTemplateObject(["\n        flex: 1;\n      "], ["\n        flex: 1;\n      "])));
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, variant = _a.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: ".concat(variant === variants$6.DARK
            ? theme.colors.pastelBlue
            : theme.colors.gray900, ";\n        }\n    ");
    }
    return "";
});
var Selection$1 = styled__default["default"].div(templateObject_10$3 || (templateObject_10$3 = __makeTemplateObject(["\n  background-color: ", ";\n  width: ", ";\n  height: calc(100% - 8px);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: ", ";\n  border-radius: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n"], ["\n  background-color: ", ";\n  width: ", ";\n  height: calc(100% - 8px);\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: ", ";\n  border-radius: ", ";\n\n  ", "\n\n  ", "\n\n  ", "\n\n  ", ";\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$6.DARK
        ? "dark500"
        : variant === variants$6.LIGHT
            ? "white"
            : "warning"];
}, function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
}, function (_a) {
    var offset = _a.offset;
    return "".concat(offset, "px");
}, function (_a) {
    var scale = _a.scale;
    return (scale === scales$9.SM ? "6px" : "8px");
}, function (_a) {
    var withoutAnimation = _a.withoutAnimation;
    return !withoutAnimation && styled.css(templateObject_7$8 || (templateObject_7$8 = __makeTemplateObject(["\n      transition: left 0.3s ease, width 0.3s ease;\n    "], ["\n      transition: left 0.3s ease, width 0.3s ease;\n    "])));
}, function (_a) {
    var flatTop = _a.flatTop, scale = _a.scale;
    return flatTop && styled.css(templateObject_8$7 || (templateObject_8$7 = __makeTemplateObject(["\n      border-radius: ", ";\n      height: calc(100% - 4px);\n      top: calc(50% - 2px);\n    "], ["\n      border-radius: ", ";\n      height: calc(100% - 4px);\n      top: calc(50% - 2px);\n    "])), scale === scales$9.SM ? "0 0 6px 6px" : "0 0 8px 8px");
}, function (_a) {
    var flatBottom = _a.flatBottom, scale = _a.scale;
    return flatBottom && styled.css(templateObject_9$3 || (templateObject_9$3 = __makeTemplateObject(["\n      border-radius: ", ";\n      height: calc(100% - 4px);\n      top: calc(50% + 2px);\n    "], ["\n      border-radius: ", ";\n      height: calc(100% - 4px);\n      top: calc(50% + 2px);\n    "])), scale === scales$9.SM ? "6px 6px 0 0" : "8px 8px 0 0");
}, function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return variant === variants$6.DARK &&
        "box-shadow: 0 2px 4px ".concat(getRgba(theme.colors.backgroundDark, theme, 0.08));
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$9.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$6.DARK : _d, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, _f = _a.flatBottom, flatBottom = _f === void 0 ? false : _f, _g = _a.flatTop, flatTop = _g === void 0 ? false : _g, _h = _a.withoutBackground, withoutBackground = _h === void 0 ? false : _h, _j = _a.scrollX, scrollX = _j === void 0 ? false : _j, equalElementWidth = _a.equalElementWidth, _k = _a.withoutAnimation, withoutAnimation = _k === void 0 ? false : _k, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "disabled", "children", "fullWidth", "flatBottom", "flatTop", "withoutBackground", "scrollX", "equalElementWidth", "withoutAnimation"]);
    var _l = React.useState([]), widthsArr = _l[0], setWidthsArr = _l[1];
    var _m = React.useState(0), blockOffset = _m[0], setBlockOffset = _m[1];
    var _o = React.useState(null), activeButtonIndex = _o[0], setActiveButtonIndex = _o[1];
    var _p = useMatchBreakpoints(), isDesktop = _p.isDesktop, isMobile = _p.isMobile, isTablet = _p.isTablet;
    React.useEffect(function () {
        setActiveButtonIndex(activeIndex);
    }, [activeIndex]);
    React.useEffect(function () {
        if (activeButtonIndex !== null) {
            setBlockOffset(widthsArr
                .slice(0, activeButtonIndex)
                .reduce(function (sum, elem) { return sum + elem; }, 0));
        }
    }, [widthsArr, activeButtonIndex, isDesktop, isMobile, isTablet]);
    return (React__default["default"].createElement(Wrapper$h, __assign({ flatBottom: flatBottom, flatTop: flatTop, fullWidth: fullWidth, withoutBackground: withoutBackground, variant: variant, scrollX: scrollX }, props),
        !disabled && (React__default["default"].createElement(Selection$1, { flatTop: flatTop, flatBottom: flatBottom, scale: scale, width: widthsArr[activeIndex], offset: getOffset(blockOffset, flatTop || flatBottom), variant: variant, withoutAnimation: withoutAnimation })),
        React__default["default"].createElement(StyledButtonMenu, __assign({ disabled: disabled, variant: variant, fullWidth: fullWidth, withoutBackground: withoutBackground, equalElementWidth: equalElementWidth }, props), React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                isActive: activeIndex === index,
                onItemClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                setWidth: setWidthsArr,
                itemIndex: index,
                activeButtonIndex: activeButtonIndex,
                blockOffset: blockOffset,
                scale: scale,
                variant: variant,
                disabled: disabled,
                flatBottom: flatBottom,
                flatTop: flatTop,
            });
        }))));
};
var templateObject_1$1e, templateObject_2$F, templateObject_3$v, templateObject_4$q, templateObject_5$j, templateObject_6$c, templateObject_7$8, templateObject_8$7, templateObject_9$3, templateObject_10$3;

var _a$c, _b$6;
var scaleVariants$2 = (_a$c = {},
    _a$c[scales$9.XL] = {
        height: "48px",
        padding: "0 24px",
        borderRadius: "10px",
        fontSize: "16px",
    },
    _a$c[scales$9.LG] = {
        height: "40px",
        padding: "0 16px",
        fontSize: "14px",
        borderRadius: "8px",
    },
    _a$c[scales$9.MD] = {
        height: "32px",
        padding: "0 12px",
        fontSize: "12px",
        borderRadius: "8px",
    },
    _a$c[scales$9.SM] = {
        height: "24px",
        padding: "0 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
    _a$c[scales$9.XS] = {
        height: "20px",
        padding: "0 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
    _a$c);
var styleVariants$2 = (_b$6 = {},
    _b$6[variants$6.DARK] = {
        color: "white",
        backgroundColor: "transparent",
        ":active:not(:disabled)": {
            backgroundColor: "transparent",
        },
    },
    _b$6[variants$6.LIGHT] = {
        backgroundColor: "transparent",
        color: "dark800",
        ":hover(:disabled)": {
            color: "dark800",
        },
        ":active:not(:disabled)": {
            color: "text",
        },
    },
    _b$6[variants$6.WARNING_DARK] = {
        backgroundColor: "transparent",
        color: "dark800",
        ":hover(:disabled)": {
            color: "dark800",
        },
        ":active:not(:disabled)": {
            color: "dark800",
        },
        ":active": {
            backgroundColor: "transparent",
        },
    },
    _b$6[variants$6.WARNING_LIGHT] = {
        backgroundColor: "transparent",
        color: "dark800",
        ":hover(:disabled)": {
            color: "dark800",
        },
        ":active:not(:disabled)": {
            color: "dark800",
        },
    },
    _b$6);

var MenuItemButton = styled__default["default"].button(templateObject_2$E || (templateObject_2$E = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  margin: 0;\n  cursor: pointer;\n  display: flex;\n  font-family: inherit;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.3s, color 0.3s;\n  background-color: transparent;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  margin: 0;\n  cursor: pointer;\n  display: flex;\n  font-family: inherit;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.3s, color 0.3s;\n  background-color: transparent;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n  ", "\n\n  ", "\n"])), styledSystem.variant({
    variants: styleVariants$2,
}), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$2,
}), function (_a) {
    var isActive = _a.isActive, colorKey = _a.colorKey, hoverKey = _a.hoverKey;
    return !isActive && styled.css(templateObject_1$1d || (templateObject_1$1d = __makeTemplateObject(["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:hover:not(:disabled):not(:active) {\n        background-color: transparent;\n      }\n    "], ["\n      color: ", ";\n\n      &:hover {\n        color: ", ";\n      }\n\n      &:hover:not(:disabled):not(:active) {\n        background-color: transparent;\n      }\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.colors[colorKey];
    }, function (_a) {
        var theme = _a.theme;
        return theme.colors[hoverKey];
    });
});
var ButtonMenuItem = function (_a) {
    var _b, _c;
    var _d = _a.isActive, isActive = _d === void 0 ? false : _d, _e = _a.variant, variant = _e === void 0 ? variants$6.DARK : _e, as = _a.as, setWidth = _a.setWidth, _f = _a.itemIndex, itemIndex = _f === void 0 ? 0 : _f, activeButtonIndex = _a.activeButtonIndex, blockOffset = _a.blockOffset, _g = _a.onItemClick, onItemClick = _g === void 0 ? function () { } : _g, _h = _a.onClick, onClick = _h === void 0 ? function () { } : _h, props = __rest(_a, ["isActive", "variant", "as", "setWidth", "itemIndex", "activeButtonIndex", "blockOffset", "onItemClick", "onClick"]);
    var _j = useMatchBreakpoints(), isXs = _j.isXs, isSm = _j.isSm, isMs = _j.isMs, isLg = _j.isLg, isXl = _j.isXl, isXll = _j.isXll, isXxl = _j.isXxl;
    var ref = React.useRef(null);
    var itemWidth = (_c = (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.clientWidth) !== null && _c !== void 0 ? _c : 0;
    React.useEffect(function () {
        if (itemWidth && setWidth) {
            setWidth(function (prev) {
                return prev.length > itemIndex
                    ? prev.map(function (i, index) { return (index === itemIndex ? itemWidth : i); })
                    : __spreadArray(__spreadArray([], prev, true), [itemWidth], false);
            });
        }
    }, [
        blockOffset,
        activeButtonIndex,
        itemWidth,
        isXs,
        isSm,
        isMs,
        isLg,
        isXl,
        isXll,
        isXxl,
    ]);
    var omItemClickHandler = function () {
        onItemClick(itemIndex);
        onClick();
    };
    return (React__default["default"].createElement(MenuItemButton, __assign({ onClick: omItemClickHandler, isActive: isActive, ref: ref, as: as, variant: variant, hoverKey: getHoverKey(variant), colorKey: getColorKey(variant) }, props)));
};
var templateObject_1$1d, templateObject_2$E;

var scales$8 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$8.SM:
            return "16px";
        case scales$8.MD:
        default:
            return "20px";
    }
};
var Wrapper$g = styled__default["default"].label(templateObject_1$1c || (templateObject_1$1c = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: ", ";\n"], ["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: ", ";\n"])), function (_a) {
    var labelOrientation = _a.labelOrientation;
    return labelOrientation === "left" ? "row-reverse" : "row";
});
var CheckboxInput = styled__default["default"].input.attrs({ type: "checkbox" })(templateObject_2$D || (templateObject_2$D = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  border: 2px solid transparent;\n  border-radius: 4px;\n  background-color: ", ";\n  transition: background-color 0.4s ease-in-out, border-color 0.4s ease;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 25%;\n    left: 0;\n    right: 0;\n    width: 65%;\n    height: 37%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  border: 2px solid transparent;\n  border-radius: 4px;\n  background-color: ", ";\n  transition: background-color 0.4s ease-in-out, border-color 0.4s ease;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 25%;\n    left: 0;\n    right: 0;\n    width: 65%;\n    height: 37%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return getRgba(theme.colors.pastelBlue, theme, 0.16);
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var colorVariant = _a.colorVariant;
    return colorVariant;
}, function (_a) {
    var theme = _a.theme, colorVariant = _a.colorVariant;
    return colorVariant === "dark"
        ? theme.colors.white
        : colorVariant === "light"
            ? theme.colors.dark800
            : theme.colors.gray900;
});
var StyledText$2 = styled__default["default"](Text)(templateObject_3$u || (templateObject_3$u = __makeTemplateObject(["\n  transition: color 0.4s ease-in-out;\n"], ["\n  transition: color 0.4s ease-in-out;\n"])));
var Checkbox = function (_a) {
    var labelOrientation = _a.labelOrientation, label = _a.label, scale = _a.scale, colorVariant = _a.colorVariant, id = _a.id, defaultChecked = _a.defaultChecked, onChange = _a.onChange, value = _a.value;
    return (React__default["default"].createElement(Wrapper$g, { labelOrientation: labelOrientation },
        React__default["default"].createElement(CheckboxInput, { checked: value, scale: scale, colorVariant: colorVariant, id: id, defaultChecked: defaultChecked, onChange: onChange }),
        label && labelOrientation && (React__default["default"].createElement(StyledText$2, { as: "span", fontSize: "12px", fontWeight: "600", color: "gray900", mr: labelOrientation === "left" ? "12px" : 0, ml: labelOrientation === "right" ? "12px" : 0 }, label))));
};
Checkbox.defaultProps = {
    scale: scales$8.MD,
    labelOrientation: "left",
    colorVariant: "light",
};
var templateObject_1$1c, templateObject_2$D, templateObject_3$u;

var Icons$2 = IconModule;
var IconComponent$1 = function (_a) {
    var iconName = _a.iconName, props = __rest(_a, ["iconName"]);
    var IconElement = Icons$2["".concat(iconName, "Icon")];
    return IconElement ? React__default["default"].createElement(IconElement, __assign({}, props)) : null;
};

var scales$7 = {
    LG: "lg",
    MD: "md",
    SM: "sm",
};
var variants$5 = {
    DARK: "dark",
    LIGHT: "light",
};

var _a$b, _b$5, _c$3, _d$2, _e;
var scaleVariantsContainer = (_a$b = {},
    _a$b[scales$7.LG] = {
        height: "48px",
    },
    _a$b[scales$7.MD] = {
        height: "40px",
    },
    _a$b[scales$7.SM] = {
        height: "32px",
    },
    _a$b);
var scaleVariantsTop = (_b$5 = {},
    _b$5[scales$7.LG] = {
        padding: "0 12px 0 24px",
        fontSize: "16px",
        borderRadius: "10px",
        svg: {
            width: "24px",
        },
    },
    _b$5[scales$7.MD] = {
        padding: "0 10px 0 16px",
        fontSize: "14px",
        borderRadius: "8px",
        svg: {
            width: "20px",
        },
    },
    _b$5[scales$7.SM] = {
        padding: "0 8px 0 12px",
        fontSize: "12px",
        borderRadius: "8px",
        svg: {
            width: "16px",
        },
    },
    _b$5);
var scaleVariantsContent = (_c$3 = {},
    _c$3[scales$7.LG] = {
        borderRadius: "10px",
    },
    _c$3[scales$7.MD] = {
        borderRadius: "8px",
    },
    _c$3[scales$7.SM] = {
        borderRadius: "8px",
    },
    _c$3);
var scaleVariantItem = (_d$2 = {},
    _d$2[scales$7.LG] = {
        height: "48px",
        fontSize: "16px",
        padding: "0 25px",
        svg: {
            width: "24px",
            marginRight: "12px",
        },
    },
    _d$2[scales$7.MD] = {
        height: "40px",
        fontSize: "14px",
        padding: "0 17px",
        svg: {
            width: "20px",
            marginRight: "8px",
        },
    },
    _d$2[scales$7.SM] = {
        height: "32px",
        fontSize: "12px",
        padding: "0 13px",
        svg: {
            width: "16px",
            marginRight: "8px",
        },
    },
    _d$2);
var styleVariantsTop = (_e = {},
    _e[variants$5.LIGHT] = {
        borderColor: "gray300",
        color: "gray900",
        ".arrow": {
            fill: "gray900",
        },
        ":hover": {
            color: "dark800",
            borderColor: "gray500",
        },
        "&.open": {
            color: "dark800",
            borderColor: "primary",
            ":hover": {
                color: "dark800",
                borderColor: "primary",
            },
            ".arrow": {
                fill: "primary",
            },
        },
    },
    _e[variants$5.DARK] = {
        borderColor: "dark500",
        color: "pastelBlue",
        ".arrow": {
            fill: "pastelBlue",
        },
        ":hover": {
            color: "white",
            borderColor: "dark300",
        },
        "&.open": {
            color: "white",
            borderColor: "primary",
            ":hover": {
                color: "white",
                borderColor: "primary",
            },
            ".arrow": {
                fill: "primary",
            },
        },
    },
    _e);

var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top") {
        return "calc(100% + 8px)";
    }
    return "-8px";
};
var Container$2 = styled__default["default"].div(templateObject_1$1b || (templateObject_1$1b = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  max-width: ", ";\n  min-width: ", ";\n\n  ", "\n\n  ", "\n"], ["\n  position: relative;\n  width: 100%;\n  max-width: ", ";\n  min-width: ", ";\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "none";
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth || "0";
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariantsContainer,
}), styledSystem.space);
var DropdownTop = styled__default["default"].div(templateObject_4$p || (templateObject_4$p = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  font-weight: 600;\n  cursor: ", ";\n  transition: all 0.4s ease-in-out;\n  opacity: ", ";\n\n  ", "\n  ", "\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  border: 1px solid;\n  font-weight: 600;\n  cursor: ", ";\n  transition: all 0.4s ease-in-out;\n  opacity: ", ";\n\n  ", "\n  ", "\n\n  ", "\n  ", "\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? ".56" : "1");
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariantsTop,
}), styledSystem.variant({
    variants: styleVariantsTop,
}), function (props) {
    return props.disabled &&
        props.variant === "light" && styled.css(templateObject_2$C || (templateObject_2$C = __makeTemplateObject(["\n      border-color: ", " !important;\n      color: ", " !important;\n    "], ["\n      border-color: ", " !important;\n      color: ", " !important;\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.gray300;
    }, function (_a) {
        var theme = _a.theme;
        return theme.colors.gray900;
    });
}, function (props) {
    return props.disabled &&
        props.variant === "dark" && styled.css(templateObject_3$t || (templateObject_3$t = __makeTemplateObject(["\n      border-color: ", " !important;\n      color: ", " !important;\n    "], ["\n      border-color: ", " !important;\n      color: ", " !important;\n    "])), function (_a) {
        var theme = _a.theme;
        return theme.colors.dark500;
    }, function (_a) {
        var theme = _a.theme;
        return theme.colors.pastelBlue;
    });
});
var Label$1 = styled__default["default"].span(templateObject_5$i || (templateObject_5$i = __makeTemplateObject(["\n  flex-grow: 1;\n"], ["\n  flex-grow: 1;\n"])));
var StyledArrow = styled__default["default"](Icon$3e)(templateObject_6$b || (templateObject_6$b = __makeTemplateObject(["\n  transition: transform 0.4s ease-in-out;\n  transform: ", ";\n"], ["\n  transition: transform 0.4s ease-in-out;\n  transform: ", ";\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "scale(1,-1)" : "scale(1,1)");
});
var DropdownContent = styled__default["default"].div(templateObject_7$7 || (templateObject_7$7 = __makeTemplateObject(["\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: ", ";\n  z-index: 101;\n  box-shadow: ", ";\n  background: ", ";\n  overflow: hidden;\n  transform: ", ";\n\n  ", "\n"], ["\n  width: 100%;\n  position: absolute;\n  left: 0;\n  bottom: ", ";\n  z-index: 101;\n  box-shadow: ", ";\n  background: ", ";\n  overflow: hidden;\n  transform: ", ";\n\n  ", "\n"])), getBottom, function (_a) {
    var position = _a.position;
    return position === "bottom"
        ? "0px 16px 32px rgba(0, 26, 67, 0.24)"
        : "box-shadow: 0px -16px 32px rgba(0, 26, 67, 0.24);";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var position = _a.position;
    return position === "bottom" ? "translateY(100%)" : "translateY(0)";
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariantsContent,
}));
var DropdownItem = styled__default["default"].div(templateObject_8$6 || (templateObject_8$6 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  font-weight: 600;\n  transition: background-color 0.4s ease-out;\n\n  ", "\n\n  &:hover {\n    background: ", ";\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  color: ", ";\n  cursor: pointer;\n  font-weight: 600;\n  transition: background-color 0.4s ease-out;\n\n  ", "\n\n  &:hover {\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, selected = _a.selected;
    return selected ? theme.colors.primary : theme.colors.dark800;
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariantItem,
}), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray200;
});
var Dropdown = function (_a) {
    var _b = _a.position, position = _b === void 0 ? "bottom" : _b; _a.children; var maxWidth = _a.maxWidth, minWidth = _a.minWidth, scale = _a.scale, variant = _a.variant, disabled = _a.disabled, options = _a.options, onChange = _a.onChange, props = __rest(_a, ["position", "children", "maxWidth", "minWidth", "scale", "variant", "disabled", "options", "onChange"]);
    var _c = React.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var wrapperRef = React.useRef(null);
    var _d = React.useState(options[0]), selectedOption = _d[0], setSelectedOption = _d[1];
    var toggling = function (event) {
        if (!disabled) {
            setIsOpen(!isOpen);
            event.stopPropagation();
        }
        return;
    };
    var onOptionClicked = function (option) { return function () {
        setIsOpen(false);
        setSelectedOption(options[options.indexOf(option)]);
        if (onChange) {
            onChange(option);
        }
    }; };
    React.useEffect(function () {
        function handleClickOutside(event) {
            if (wrapperRef.current &&
                !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside, {
            passive: true,
        });
        return function () {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);
    return (React__default["default"].createElement(Container$2, __assign({ maxWidth: maxWidth, minWidth: minWidth, ref: wrapperRef, scale: scale }, props),
        React__default["default"].createElement(DropdownTop, { scale: scale, variant: variant, onClick: toggling, disabled: disabled, className: isOpen ? "open" : disabled ? "disabled" : "" },
            selectedOption.icon && (React__default["default"].createElement(IconComponent$1, { iconName: selectedOption.icon.name, color: selectedOption.icon.color, mr: scale === "lg" ? "12px" : "8px" })),
            React__default["default"].createElement(Label$1, null, selectedOption.label),
            React__default["default"].createElement(StyledArrow, { className: "arrow", isOpen: isOpen })),
        isOpen && (React__default["default"].createElement(DropdownContent, { position: position, scale: scale }, options.map(function (option) { return (React__default["default"].createElement(DropdownItem, { scale: scale, selected: option.label === selectedOption.label, onClick: onOptionClicked(option), key: option.label },
            option.icon && (React__default["default"].createElement(IconComponent$1, { iconName: option.icon.name, color: option.icon.color })),
            React__default["default"].createElement("span", null, option.label))); })))));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$1b, templateObject_2$C, templateObject_3$t, templateObject_4$p, templateObject_5$i, templateObject_6$b, templateObject_7$7, templateObject_8$6;

var tags$1 = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$6 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$a;
var style = (_a$a = {},
    _a$a[scales$6.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$a[scales$6.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$a[scales$6.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$a[scales$6.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$a);
var Heading = styled__default["default"](Text).attrs({ bold: true })(templateObject_1$1a || (templateObject_1$1a = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$6.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$6.LG].fontSize;
});
Heading.defaultProps = {
    as: tags$1.H2,
};
var templateObject_1$1a;

var scales$5 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};
var variants$4 = {
    LIGHT: "light",
    LIGHT_WARNING: "lightWarning",
    LIGHT_ERROR: "lightError",
    DARK: "dark",
    DARK_WARNING: "darkWarning",
    DARK_ERROR: "darkError",
    TRANSPARENT: "transparent",
};

var _a$9, _b$4, _c$2;
var scaleVariants$1 = (_a$9 = {},
    _a$9[scales$5.LG] = {
        borderRadius: "10px",
        height: "48px",
        fontSize: "16px",
        padding: "0 24px",
        svg: {
            width: "24px",
        },
    },
    _a$9[scales$5.MD] = {
        borderRadius: "8px",
        height: "40px",
        fontSize: "14px",
        padding: "0 16px",
        svg: {
            width: "20px",
        },
    },
    _a$9[scales$5.SM] = {
        borderRadius: "8px",
        height: "32px",
        fontSize: "12px",
        padding: "0 12px",
        svg: {
            width: "16px",
        },
    },
    _a$9);
var styleVariants$1 = (_b$4 = {},
    _b$4[variants$4.LIGHT] = {
        backgroundColor: "gray300",
        color: "dark800",
        "::placeholder": {
            color: "gray900",
        },
        ":hover:not(:disabled)": {
            borderColor: "gray500",
            backgroundColor: "transparent",
            color: "dark800",
        },
        ":focus:not(:disabled)": {
            borderColor: "primary",
            backgroundColor: "transparent",
            color: "dark800",
        },
    },
    _b$4[variants$4.LIGHT_WARNING] = {
        borderColor: "warning",
        backgroundColor: "transparent",
        color: "dark800",
        "::placeholder": {
            color: "dark800",
        },
    },
    _b$4[variants$4.LIGHT_ERROR] = {
        borderColor: "secondary",
        backgroundColor: "transparent",
        color: "dark800",
        "::placeholder": {
            color: "dark800",
        },
    },
    _b$4[variants$4.DARK] = {
        backgroundColor: "dark500",
        color: "white",
        "::placeholder": {
            color: "pastelBlue",
        },
        ":hover:not(:disabled)": {
            borderColor: "dark300",
            backgroundColor: "transparent",
            color: "white",
        },
        ":focus:not(:disabled)": {
            borderColor: "primary",
            backgroundColor: "transparent",
            color: "white",
        },
    },
    _b$4[variants$4.DARK_WARNING] = {
        borderColor: "warning",
        backgroundColor: "transparent",
        color: "white",
        "::placeholder": {
            color: "white",
        },
    },
    _b$4[variants$4.DARK_ERROR] = {
        borderColor: "secondary",
        backgroundColor: "transparent",
        color: "white",
        "::placeholder": {
            color: "white",
        },
    },
    _b$4[variants$4.TRANSPARENT] = {
        backgroundColor: "transparent",
        color: "dark800",
        "::placeholder": {
            color: "gray900",
        },
        ":hover:not(:disabled)": {
            borderColor: "transparent",
            backgroundColor: "transparent",
            color: "dark800",
        },
        ":focus:not(:disabled)": {
            borderColor: "transparent",
            backgroundColor: "transparent",
            color: "dark800",
        },
    },
    _b$4);
var styleTextVariants = (_c$2 = {},
    _c$2[variants$4.LIGHT] = {
        color: "gray700",
    },
    _c$2[variants$4.LIGHT_WARNING] = {
        color: "warning",
    },
    _c$2[variants$4.LIGHT_ERROR] = {
        color: "secondary",
    },
    _c$2[variants$4.DARK] = {
        color: "white",
    },
    _c$2[variants$4.DARK_WARNING] = {
        color: "warning",
    },
    _c$2[variants$4.DARK_ERROR] = {
        color: "secondary",
    },
    _c$2[variants$4.TRANSPARENT] = {
        color: "dark800",
    },
    _c$2);

var Input$1 = styled__default["default"].input(templateObject_1$19 || (templateObject_1$19 = __makeTemplateObject(["\n  display: block;\n  color: ", ";\n  outline: 0;\n  width: 100%;\n  max-width: ", ";\n  min-width: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  opacity: ", ";\n  cursor: ", ";\n  transition: border-color 0.4s ease, background-color 0.4s ease,\n    color 0.4s ease;\n\n  ", "\n  ", "\n"], ["\n  display: block;\n  color: ", ";\n  outline: 0;\n  width: 100%;\n  max-width: ", ";\n  min-width: ", ";\n  border-width: 1px;\n  border-style: solid;\n  border-color: transparent;\n  opacity: ", ";\n  cursor: ", ";\n  transition: border-color 0.4s ease, background-color 0.4s ease,\n    color 0.4s ease;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "none";
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth || "0";
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? ".56" : "1");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "initial");
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    prop: "variant",
    variants: styleVariants$1,
}));
Input$1.defaultProps = {
    scale: scales$5.MD,
    isError: false,
    isWarning: false,
};
var templateObject_1$19;

var getPadding = function (scale, hasIcon) {
    if (!hasIcon) {
        switch (scale) {
            case scales$5.SM:
                return "12px";
            case scales$5.LG:
                return "24px";
            case scales$5.MD:
            default:
                return "16px";
        }
    }
    switch (scale) {
        case scales$5.SM:
            return "36px";
        case scales$5.LG:
            return "60px";
        case scales$5.MD:
        default:
            return "44px";
    }
};
var getIconPosition = function (scale) {
    switch (scale) {
        case scales$5.LG:
            return "24px";
        case scales$5.MD:
            return "16px";
        case scales$5.SM:
        default:
            return "12px";
    }
};
var getImageSize = function (scale) {
    switch (scale) {
        case scales$5.LG:
            return 24;
        case scales$5.MD:
            return 20;
        case scales$5.SM:
        default:
            return 16;
    }
};
var StyledInputWrapper = styled__default["default"](Box)(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["\n  display: block;\n  outline: 0;\n  width: 100%;\n  position: relative;\n  opacity: ", ";\n  cursor: ", ";\n"], ["\n  display: block;\n  outline: 0;\n  width: 100%;\n  position: relative;\n  opacity: ", ";\n  cursor: ", ";\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? ".56" : "1");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "initial");
});
var StyledInputGroup = styled__default["default"](Box)(templateObject_2$B || (templateObject_2$B = __makeTemplateObject(["\n  ", "\n\n  ", " {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n\n    ", "\n\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  ", "\n\n  ", " {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n\n    ", "\n\n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), Input$1, styledSystem.variant({
    prop: "variant",
    variants: styleVariants$1,
}), function (_a) {
    var hasStartIcon = _a.hasStartIcon, scale = _a.scale;
    return getPadding(scale, hasStartIcon);
}, function (_a) {
    var hasEndIcon = _a.hasEndIcon, scale = _a.scale;
    return getPadding(scale, hasEndIcon);
});
var iconCss = styled.css(templateObject_3$s || (templateObject_3$s = __makeTemplateObject(["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n"], ["\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n"])));
var StyledIconComponent = styled__default["default"](IconComponent$1)(templateObject_4$o || (templateObject_4$o = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function () { return iconCss; });
var LeftIconComponent = styled__default["default"](StyledIconComponent)(templateObject_5$h || (templateObject_5$h = __makeTemplateObject(["\n  left: ", ";\n"], ["\n  left: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return getIconPosition(scale);
});
var LeftIconImage = styled__default["default"](Box)(templateObject_6$a || (templateObject_6$a = __makeTemplateObject(["\n  ", "\n  left: ", ";\n"], ["\n  ", "\n  left: ", ";\n"])), function () { return iconCss; }, function (_a) {
    var scale = _a.scale;
    return "".concat(getIconPosition(scale), "px");
});
var RightIconComponent = styled__default["default"](StyledIconComponent)(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n  right: ", ";\n"], ["\n  right: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return getIconPosition(scale);
});
var TextDescription = styled__default["default"](Text)(templateObject_8$5 || (templateObject_8$5 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.variant({
    prop: "variant",
    variants: styleTextVariants,
}));
var InputGroup = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$5.MD : _b, startIcon = _a.startIcon, startImage = _a.startImage, endIcon = _a.endIcon, children = _a.children, variant = _a.variant, isError = _a.isError, isWarning = _a.isWarning, disabled = _a.disabled, description = _a.description, _c = _a.baseAwsUrl, baseAwsUrl = _c === void 0 ? "https://static.biswap.org/bs" : _c, props = __rest(_a, ["scale", "startIcon", "startImage", "endIcon", "children", "variant", "isError", "isWarning", "disabled", "description", "baseAwsUrl"]);
    return (React__default["default"].createElement(StyledInputWrapper, __assign({ width: "100%", position: "relative", disabled: disabled }, props),
        React__default["default"].createElement(StyledInputGroup, { scale: scale, variant: variant, width: "100%", position: "relative", hasStartIcon: !!startIcon || !!startImage, hasEndIcon: !!endIcon },
            startIcon && (React__default["default"].createElement(LeftIconComponent, { color: startIcon.color, iconName: startIcon.iconName, scale: scale })),
            startImage && (React__default["default"].createElement(LeftIconImage, { scale: scale },
                React__default["default"].createElement(Image__default["default"], { width: getImageSize(scale), height: getImageSize(scale), src: "".concat(baseAwsUrl).concat(startImage === null || startImage === void 0 ? void 0 : startImage.imageSrc), alt: "img" }))),
            React.cloneElement(children, { variant: variant, scale: scale, disabled: disabled }),
            !isError && !isWarning && endIcon && (React__default["default"].createElement(RightIconComponent, { color: endIcon.color, iconName: endIcon.iconName, scale: scale })),
            isError && (React__default["default"].createElement(RightIconComponent, { iconName: "CloseCircleSolid", color: "secondary", scale: scale })),
            isWarning && (React__default["default"].createElement(RightIconComponent, { iconName: "WarningSolid", color: "warning", scale: scale }))),
        description && (React__default["default"].createElement(TextDescription, { mt: "4px", fontSize: "12px", variant: variant }, description))));
};
var templateObject_1$18, templateObject_2$B, templateObject_3$s, templateObject_4$o, templateObject_5$h, templateObject_6$a, templateObject_7$6, templateObject_8$5;

var GridLayout$1 = styled__default["default"](Grid)(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$17;

var GridLayout = styled__default["default"](GridLayout$1)(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$16;

// eslint-disable-next-line import/prefer-default-export
var formatSpacingAmount = function (x) {
    if (x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
    }
    return null;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var getPortalRoot = function () {
    var _a;
    return typeof window !== "undefined" &&
        ((_a = document.getElementById("portal-root")) !== null && _a !== void 0 ? _a : document.body);
};

var isTouchDevice = function () {
    return (typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0));
};

var defaultObject = {
    xs: null,
    sm: null,
    md: null,
    lg: null,
    xl: null,
    xll: null,
    xxl: null,
};
var getResponsiveAttrs = function (obj) {
    return Object.values(__assign(__assign({}, defaultObject), obj));
};

var Container$1 = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(Box, __assign({ width: "100%", px: getResponsiveAttrs({ xs: "16px", lg: "24px", xxl: 0 }), mx: "auto", maxWidth: "1120px" }, props), children));
};

var HeroWrapper = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(Box, __assign({ p: getResponsiveAttrs({ xs: "96px 0 0", md: "104px 0 0" }), width: "100%" }, props), children));
};

var ContainerCarousel = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(Box, __assign({ px: getResponsiveAttrs({ xs: 0, sm: 0, md: "16px", lg: "24px", xxl: 0 }), mx: "auto", maxWidth: "1120px" }, props), children));
};

var scales$4 = {
    LG: "lg",
    MD: "md",
    SM: "sm",
};
var variants$3 = {
    LIGHT: "light",
    DARK: "dark",
};

var _a$8, _b$3;
var scaleVariants = (_a$8 = {},
    _a$8[scales$4.LG] = {
        fontSize: "16px",
        svg: {
            width: "16px",
        },
    },
    _a$8[scales$4.MD] = {
        fontSize: "14px",
        svg: {
            width: "14px",
        },
    },
    _a$8[scales$4.SM] = {
        fontSize: "12px",
        svg: {
            width: "12px",
        },
    },
    _a$8);
var styleVariants = (_b$3 = {},
    _b$3[variants$3.LIGHT] = {
        color: "primary",
        svg: {
            fill: "primary",
        },
        ":hover:not(:disabled)": {
            color: "primaryHover",
            svg: {
                fill: "primaryHover",
            },
        },
        ":active:not(:disabled)": {
            color: "primaryPress",
            svg: {
                fill: "primaryPress",
            },
        },
    },
    _b$3[variants$3.DARK] = {
        color: "primaryHover",
        svg: {
            fill: "primaryHover",
        },
        ":hover:not(:disabled)": {
            color: "primary",
            svg: {
                fill: "primary",
            },
        },
        ":active:not(:disabled)": {
            color: "primaryPress",
            svg: {
                fill: "primaryPress",
            },
        },
    },
    _b$3);

var StyledLink = styled__default["default"](Text)(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  font-weight: 400;\n  opacity: ", ";\n  transition: color 0.4s ease-in-out;\n\n  ", "\n  ", "\n  \n  svg {\n    color: inherit;\n    transition: fill 0.4s ease-in-out;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  font-weight: 400;\n  opacity: ", ";\n  transition: color 0.4s ease-in-out;\n\n  ", "\n  ", "\n  \n  svg {\n    color: inherit;\n    transition: fill 0.4s ease-in-out;\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "0.32" : "1");
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default["default"].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
var templateObject_1$15;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(Link, __assign({ external: true }, props),
        children,
        React__default["default"].createElement(Icon$30, { color: props.color ? props.color : "primary", width: "16px", ml: "4px" })));
};

var NotificationDotRoot = styled__default["default"].span(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot$1 = styled__default["default"].span(templateObject_2$A || (templateObject_2$A = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark900;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "secondary" : _c, children = _a.children, props = __rest(_a, ["show", "color", "children"]);
    return (React__default["default"].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) {
            return React.cloneElement(child, props);
        }),
        React__default["default"].createElement(Dot$1, { show: show, color: color })));
};
var templateObject_1$14, templateObject_2$A;

var StyledOverlay = styled__default["default"](Box)(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  z-index: 20;\n  opacity: 0.55;\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: rgb(10, 22, 43);\n  z-index: 20;\n  opacity: 0.55;\n"])));
var BodyLock = function () {
    React.useEffect(function () {
        document.body.style.cssText = "\n      overflow: hidden;\n    ";
        document.body.style.overflow = "hidden";
        return function () {
            document.body.style.cssText = "\n        overflow: visible;\n        overflow: auto;\n      ";
        };
    }, []);
    return null;
};
var Overlay = function (props) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(BodyLock, null),
        React__default["default"].createElement(StyledOverlay, __assign({ role: "presentation" }, props))));
};
var templateObject_1$13;

var scales$3 = {
    SM: "sm",
    MD: "md",
};

var getScale$2 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$3.SM:
            return "16px";
        case scales$3.MD:
        default:
            return "20px";
    }
};
var Wrapper$f = styled__default["default"].label(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: ", ";\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: ", ";\n  cursor: pointer;\n"])), function (_a) {
    var labelOrientation = _a.labelOrientation;
    return labelOrientation === "left" ? "row-reverse" : "row";
});
var InputRadio = styled__default["default"].input.attrs({ type: "radio" })(templateObject_2$z || (templateObject_2$z = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  transition: border-color 0.4s ease-in-out, border-width 0.3s ease-in-out;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  margin: 0;\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    border-color: ", ";\n    border-width: 4px;\n  }\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  transition: border-color 0.4s ease-in-out, border-width 0.3s ease-in-out;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  margin: 0;\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    border-color: ", ";\n    border-width: 4px;\n  }\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$2, getScale$2, function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var colorVariant = _a.colorVariant;
    return colorVariant;
}, function (_a) {
    var theme = _a.theme, colorVariant = _a.colorVariant;
    return colorVariant === "dark"
        ? theme.colors.white
        : colorVariant === "light"
            ? theme.colors.dark800
            : theme.colors.gray900;
}, styledSystem.space);
var StyledText$1 = styled__default["default"](Text)(templateObject_3$r || (templateObject_3$r = __makeTemplateObject(["\n  transition: color 0.4s ease-in-out;\n"], ["\n  transition: color 0.4s ease-in-out;\n"])));
var Radio = function (_a) {
    var labelOrientation = _a.labelOrientation, label = _a.label, scale = _a.scale, radioName = _a.radioName, onChange = _a.onChange, colorVariant = _a.colorVariant, checked = _a.checked;
    return (React__default["default"].createElement(Wrapper$f, { labelOrientation: labelOrientation },
        React__default["default"].createElement(InputRadio, { scale: scale, name: radioName, onChange: onChange, colorVariant: colorVariant, checked: checked }),
        label && labelOrientation && (React__default["default"].createElement(StyledText$1, { as: "span", fontSize: "12px", fontWeight: "400", color: "gray900", mr: labelOrientation === "left" ? "12px" : 0, ml: labelOrientation === "right" ? "12px" : 0 }, label))));
};
Radio.defaultProps = {
    scale: scales$3.MD,
    m: 0,
    labelOrientation: "left",
    colorVariant: "light",
};
var templateObject_1$12, templateObject_2$z, templateObject_3$r;

var SliderIcon = "data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0_4728_34338%29%22%3E%3Cpath%20d%3D%22M0%2010C0%204.47715%204.47715%200%2010%200C15.5228%200%2020%204.47715%2020%2010C20%2015.5228%2015.5228%2020%2010%2020C4.47715%2020%200%2015.5228%200%2010Z%22%20fill%3D%22%231263F1%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d_4728_34338%29%22%3E%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2212%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22white%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d_4728_34338%22%20x%3D%220%22%20y%3D%222%22%20width%3D%2220%22%20height%3D%2220%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%20dy%3D%222%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.027451%200%200%200%200%200.0862745%200%200%200%200%200.176471%200%200%200%200.32%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_4728_34338%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_4728_34338%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3CclipPath%20id%3D%22clip0_4728_34338%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var Wrapper$e = styled__default["default"].div(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n"], ["\n  display: flex;\n  flex-direction: column;\n"])));
var SliderContainer = styled__default["default"](Box)(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["\n  position: relative;\n  top: 0;\n  left: 0;\n  margin-bottom: 24px;\n"], ["\n  position: relative;\n  top: 0;\n  left: 0;\n  margin-bottom: 24px;\n"])));
var BarBackground$1 = styled__default["default"].div(templateObject_3$q || (templateObject_3$q = __makeTemplateObject(["\n  width: 100%;\n  height: 4px;\n  border-radius: 100px;\n  opacity: 0.16;\n  background-color: ", ";\n"], ["\n  width: 100%;\n  height: 4px;\n  border-radius: 100px;\n  opacity: 0.16;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
});
var BarProgress$1 = styled__default["default"].div(templateObject_4$n || (templateObject_4$n = __makeTemplateObject(["\n  width: ", ";\n  height: 4px;\n  transform: translateY(-100%);\n  border-radius: 100px;\n  background: ", ";\n"], ["\n  width: ", ";\n  height: 4px;\n  transform: translateY(-100%);\n  border-radius: 100px;\n  background: ", ";\n"])), function (_a) {
    var progress = _a.progress;
    return "".concat(progress, "%");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var StyledInput$1 = styled__default["default"].input(templateObject_5$g || (templateObject_5$g = __makeTemplateObject(["\n  height: 20px;\n  position: relative;\n  cursor: pointer;\n  transform: translateY(-18px);\n  margin: 2px 0;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 2;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: 0.1s all;\n    border-radius: 50%;\n    background-image: url(", ");\n    position: relative;\n\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: 0.1s all;\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: 0.1s all;\n    border-radius: 50%;\n    background-image: url(", ");\n\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n"], ["\n  height: 20px;\n  position: relative;\n  cursor: pointer;\n  transform: translateY(-18px);\n  margin: 2px 0;\n  -webkit-tap-highlight-color: transparent;\n  z-index: 2;\n\n  ::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: 0.1s all;\n    border-radius: 50%;\n    background-image: url(", ");\n    position: relative;\n\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n  ::-moz-range-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: 0.1s all;\n    // custom moz reset\n    background-color: transparent;\n    border: 0;\n\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n  ::-ms-thumb {\n    -webkit-appearance: none;\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: 0.1s all;\n    border-radius: 50%;\n    background-image: url(", ");\n\n    :hover {\n      transform: scale(1.1);\n    }\n  }\n"])), SliderIcon, SliderIcon);
var BunnySlider = styled__default["default"].div(templateObject_6$9 || (templateObject_6$9 = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n"], ["\n  position: absolute;\n  width: 100%;\n"])));
var BreakPointsWrap = styled__default["default"].div(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  top: -3px;\n  left: 0;\n  z-index: 1;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  position: absolute;\n  width: 100%;\n  top: -3px;\n  left: 0;\n  z-index: 1;\n"])));
var Point = styled__default["default"].span(templateObject_8$4 || (templateObject_8$4 = __makeTemplateObject(["\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: ", ";\n  border: ", ";\n"], ["\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: ", ";\n  border: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme, pointColor = _a.pointColor;
    return "3px solid ".concat(theme.colors[pointColor]);
});
var InfoBlock = styled__default["default"].div(templateObject_9$2 || (templateObject_9$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n"], ["\n  display: flex;\n  justify-content: space-between;\n"])));
var TitleText = styled__default["default"](Text)(templateObject_10$2 || (templateObject_10$2 = __makeTemplateObject(["\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  font-weight: 600;\n"], ["\n  font-size: 14px;\n  line-height: 20px;\n  color: ", ";\n  font-weight: 600;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark800;
});
var PercentageAmount = styled__default["default"](Text)(templateObject_11$1 || (templateObject_11$1 = __makeTemplateObject(["\n  font-size: 16px;\n  margin: 0 4px;\n  font-weight: 600;\n"], ["\n  font-size: 16px;\n  margin: 0 4px;\n  font-weight: 600;\n"])));
var InfoNode = styled__default["default"].div(templateObject_12$1 || (templateObject_12$1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"])));
var RBPrice = styled__default["default"](Text)(templateObject_13$1 || (templateObject_13$1 = __makeTemplateObject(["\n  text-align: right;\n  font-size: 12px;\n  line-height: 16px;\n  color: ", ";\n"], ["\n  text-align: right;\n  font-size: 12px;\n  line-height: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
});
var PercentWrap = styled__default["default"].div(templateObject_14 || (templateObject_14 = __makeTemplateObject(["\n  width: calc(100% - 20px);\n  margin: 0 10px;\n  position: relative;\n  background: transparent;\n"], ["\n  width: calc(100% - 20px);\n  margin: 0 10px;\n  position: relative;\n  background: transparent;\n"])));
var PercentBanner = styled__default["default"](Flex)(templateObject_15 || (templateObject_15 = __makeTemplateObject(["\n  align-items: center;\n  position: absolute;\n  ", ";\n  left: ", ";\n  transform: translateX(-50%) translateY(calc(", "));\n  border-radius: 8px;\n  padding: 8px 4px;\n  background-color: ", ";\n  \n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    ", ";\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    transform: translate(-50%, ", ");\n    ", ";\n"], ["\n  align-items: center;\n  position: absolute;\n  ", ";\n  left: ", ";\n  transform: translateX(-50%) translateY(calc(", "));\n  border-radius: 8px;\n  padding: 8px 4px;\n  background-color: ", ";\n  \n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    ", ";\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    transform: translate(-50%, ", ");\n    ", ";\n"])), function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "top: 0" : "bottom: 0";
}, function (_a) {
    var left = _a.left;
    return "".concat(left, "%");
}, function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "-100% - 20px" : "100% + 20px";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
}, function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "bottom: 0" : "top: 0";
}, function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "100%" : "-100%";
}, function (_a) {
    var bannerPosition = _a.bannerPosition, theme = _a.theme;
    return "border-".concat(bannerPosition === "top" ? "top" : "bottom", ": 6px solid ").concat(theme.colors.tooltip);
});
var Divider$1 = styled__default["default"].span(templateObject_16 || (templateObject_16 = __makeTemplateObject(["\n  width: 2px;\n  height: 10px;\n  margin: 0 4px 0 4px;\n  background-color: ", ";\n"], ["\n  width: 2px;\n  height: 10px;\n  margin: 0 4px 0 4px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
});
var PercentText = styled__default["default"](Text)(templateObject_17 || (templateObject_17 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 600;\n  min-width: 24px;\n\n  &:first-child {\n    text-align: right;\n  }\n"], ["\n  color: ", ";\n  font-size: 12px;\n  line-height: 16px;\n  font-weight: 600;\n  min-width: 24px;\n\n  &:first-child {\n    text-align: right;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var MIN = 0;
var MAX = 100;
var INIT_CHECKPOINTS = [
    { value: 0, RB: "1000" },
    { value: 25, RB: "2500" },
    { value: 50, RB: "5000" },
    { value: 75, RB: "7500" },
    { value: 90, RB: "10000" },
];
var Slider = function (_a) {
    var value = _a.value, onValueChanged = _a.onValueChanged, _b = _a.checkPoints, checkPoints = _b === void 0 ? INIT_CHECKPOINTS : _b, isRobiBoost = _a.isRobiBoost, _c = _a.bannerPosition, bannerPosition = _c === void 0 ? "top" : _c, _d = _a.darkMode, darkMode = _d === void 0 ? false : _d, props = __rest(_a, ["value", "onValueChanged", "checkPoints", "isRobiBoost", "bannerPosition", "darkMode"]);
    var _e = React.useState({ value: 0, RB: "0" }), percent = _e[0], setPercent = _e[1];
    var getRB = function (percentage) {
        var temp = checkPoints.map(function (item) { return Math.abs(item.value - percentage); });
        var minValue = Math.min.apply(Math, temp);
        var res = temp.indexOf(minValue);
        return checkPoints[res].RB;
    };
    React.useEffect(function () {
        if (checkPoints === null || checkPoints === void 0 ? void 0 : checkPoints.length) {
            var RB = getRB(value);
            setPercent({ value: value, RB: RB });
        }
        // eslint-disable-next-line
    }, [value, checkPoints]);
    var onMouseLeaveHandleChange = function () {
        var temp = checkPoints.map(function (item) {
            return Math.abs(item.value - percent.value);
        });
        var minValue = Math.min.apply(Math, temp);
        var res = temp.indexOf(minValue);
        onValueChanged(checkPoints[res].value);
        setPercent(checkPoints[res]);
    };
    var getCirclesColor = function (pointPercent) {
        return percent.value >= pointPercent && pointPercent !== 90
            ? "primary"
            : darkMode
                ? "dark400"
                : "gray300";
    };
    var handleChange = function (_a) {
        var target = _a.target;
        var selectedValue = lodash.parseInt(target.value);
        switch (selectedValue) {
            case checkPoints[0].value: {
                onValueChanged(0);
                break;
            }
            case checkPoints[1].value: {
                onValueChanged(checkPoints[1].value);
                break;
            }
            case checkPoints[2].value: {
                onValueChanged(checkPoints[2].value);
                break;
            }
            case checkPoints[3].value: {
                onValueChanged(checkPoints[3].value);
                break;
            }
            case checkPoints[4].value: {
                onValueChanged(checkPoints[4].value);
                setPercent(function (prev) { return (__assign(__assign({}, prev), { value: checkPoints[4].value })); });
                break;
            }
            default: {
                if (selectedValue <= checkPoints[4].value)
                    setPercent(function (prev) { return (__assign(__assign({}, prev), { value: selectedValue })); });
            }
        }
    };
    var progressPercentage = (percent.value / MAX) * 100;
    // const labelOffset = progressPercentage - progressPercentage / MOVING_SLIDER_LABEL_OFFSET_FACTOR;
    var _f = React.useState(false), infoVisible = _f[0], setInfoVisible = _f[1];
    return (React__default["default"].createElement(Wrapper$e, null,
        React__default["default"].createElement(SliderContainer, __assign({}, props),
            React__default["default"].createElement(BunnySlider, null,
                React__default["default"].createElement(PercentWrap, null, infoVisible && (React__default["default"].createElement(PercentBanner, { className: "percent-info-banner", bannerPosition: bannerPosition, left: percent === null || percent === void 0 ? void 0 : percent.value },
                    React__default["default"].createElement(PercentText, null, value),
                    React__default["default"].createElement(Divider$1, null),
                    React__default["default"].createElement(PercentText, null, 100 - value)))),
                React__default["default"].createElement(BarBackground$1, null),
                React__default["default"].createElement(BarProgress$1, { progress: progressPercentage }),
                React__default["default"].createElement(StyledInput$1, { onMouseDown: function () { return setInfoVisible(true); }, onMouseUp: function () { return setInfoVisible(false); }, onTouchStart: function () { return setInfoVisible(true); }, onTouchEnd: function () { return setInfoVisible(false); }, type: "range", min: MIN, max: MAX, value: percent.value, onChange: handleChange, onClick: function () { return onMouseLeaveHandleChange(); } }),
                React__default["default"].createElement(BreakPointsWrap, null, checkPoints === null || checkPoints === void 0 ? void 0 : checkPoints.map(function (item, index) { return (React__default["default"].createElement(Point, { key: index.toString(), pointColor: getCirclesColor(item.value) })); })))),
        React__default["default"].createElement(InfoBlock, null,
            React__default["default"].createElement(InfoNode, null,
                React__default["default"].createElement(TitleText, null, "Fee return"),
                React__default["default"].createElement(PercentageAmount, { color: "primary" },
                    value,
                    "%")),
            React__default["default"].createElement(InfoNode, null,
                React__default["default"].createElement(PercentageAmount, { color: "success" },
                    100 - value,
                    "%"),
                React__default["default"].createElement(TitleText, null, isRobiBoost ? "Robi Boost" : "Squid Energy"))),
        React__default["default"].createElement(RBPrice, null,
            "price 1 ",
            isRobiBoost ? "RB" : "SE",
            " = $",
            percent.RB,
            " volume")));
};
var templateObject_1$11, templateObject_2$y, templateObject_3$q, templateObject_4$n, templateObject_5$g, templateObject_6$9, templateObject_7$5, templateObject_8$4, templateObject_9$2, templateObject_10$2, templateObject_11$1, templateObject_12$1, templateObject_13$1, templateObject_14, templateObject_15, templateObject_16, templateObject_17;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variants$2 = {
    RECT: "rect",
    CIRCLE: "circle",
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var _a$7;
var variantsSkeleton = (_a$7 = {},
    _a$7[variants$2.CIRCLE] = {
        borderRadius: "50%",
    },
    _a$7[variants$2.SM] = {
        borderRadius: "4px",
    },
    _a$7[variants$2.MD] = {
        borderRadius: "16px",
    },
    _a$7[variants$2.LG] = {
        borderRadius: "24px",
    },
    _a$7);

var waves = styled.keyframes(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n  0% {\n    opacity: 0.1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.1;\n  }\n"], ["\n  0% {\n    opacity: 0.1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n  100% {\n    opacity: 0.1;\n  }\n"])));
var Root = styled__default["default"].div(templateObject_3$p || (templateObject_3$p = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return getRgba(theme.colors.pastelBlue, theme, 0.16);
}, function (_a) {
    var variant = _a.variant, theme = _a.theme;
    return variant === variants$2.CIRCLE ? theme.radii.circle : theme.radii.small;
}, styledSystem.layout, styledSystem.space, styledSystem.variant({
    variants: variantsSkeleton,
}));
var Pulse = styled__default["default"](Root)(templateObject_4$m || (templateObject_4$m = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n  background-color: ", ";\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n  background-color: ", ";\n"])), pulse, function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
});
var Waves = styled__default["default"](Root)(templateObject_5$f || (templateObject_5$f = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    background: linear-gradient(\n      90deg,\n      rgba(116, 155, 216, 0) 0%,\n      rgba(116, 155, 216, 0.16) 50%,\n      rgba(116, 155, 216, 0) 100%\n    );\n\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n\n  &:before {\n    content: \"\";\n    position: absolute;\n    background: linear-gradient(\n      90deg,\n      rgba(116, 155, 216, 0) 0%,\n      rgba(116, 155, 216, 0.16) 50%,\n      rgba(116, 155, 216, 0) 100%\n    );\n\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$2.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default["default"].createElement(Waves, __assign({ variant: variant }, props));
    }
    return React__default["default"].createElement(Pulse, __assign({ variant: variant }, props));
};
var templateObject_1$10, templateObject_2$x, templateObject_3$p, templateObject_4$m, templateObject_5$f;

var InlineMenuContainer = styled__default["default"](Box)(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.tooltip;
});
var SubMenuContainer = styled__default["default"](Flex)(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark900;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme;
    return "1px solid ".concat(theme.colors.dark600);
});
var ClickableElementContainer = styled__default["default"].div(templateObject_3$o || (templateObject_3$o = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-flex;\n"], ["\n  cursor: pointer;\n  display: inline-flex;\n"])));
var SubMenuItem = styled__default["default"].button(templateObject_4$l || (templateObject_4$l = __makeTemplateObject(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark600;
});
var templateObject_1$$, templateObject_2$w, templateObject_3$o, templateObject_4$l;

var BaseMenu = function (_a) {
    var _b, _c, _d;
    var component = _a.component, options = _a.options, children = _a.children, _e = _a.isOpen, isOpen = _e === void 0 ? false : _e;
    var _f = React.useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = React.useState(null), menuElement = _g[0], setMenuElement = _g[1];
    var placement = (_b = options === null || options === void 0 ? void 0 : options.placement) !== null && _b !== void 0 ? _b : "bottom";
    var offset = (_c = options === null || options === void 0 ? void 0 : options.offset) !== null && _c !== void 0 ? _c : [0, 10];
    var padding = (_d = options === null || options === void 0 ? void 0 : options.padding) !== null && _d !== void 0 ? _d : { left: 16, right: 16 };
    var _h = React.useState(isOpen), isMenuOpen = _h[0], setIsMenuOpen = _h[1];
    var toggle = function () {
        setIsMenuOpen(function (prev) { return !prev; });
    };
    var open = function () {
        setIsMenuOpen(true);
    };
    var close = function () {
        setIsMenuOpen(false);
    };
    // Allow for component to be controlled
    React.useEffect(function () {
        setIsMenuOpen(isOpen);
    }, [isOpen, setIsMenuOpen]);
    React.useEffect(function () {
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (menuElement !== null &&
                    targetElement !== null &&
                    !menuElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setIsMenuOpen(false);
                }
            }
        };
        if (menuElement !== null) {
            document.addEventListener("click", handleClickOutside, { passive: true });
        }
        return function () {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menuElement, targetElement]);
    var _j = reactPopper.usePopper(targetElement, menuElement, {
        placement: placement,
        modifiers: [
            { name: "offset", options: { offset: offset } },
            { name: "preventOverflow", options: { padding: padding } },
        ],
    }), styles = _j.styles, attributes = _j.attributes;
    var menu = (React__default["default"].createElement("div", __assign({ ref: setMenuElement, style: styles.popper }, attributes.popper), typeof children === "function"
        ? // @ts-ignore
            children({ toggle: toggle, open: open, close: close })
        : children));
    var portal = getPortalRoot();
    var renderMenu = portal ? reactDom.createPortal(menu, portal) : menu;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(ClickableElementContainer, { ref: setTargetElement, onClick: toggle }, component),
        isMenuOpen && renderMenu));
};

var InlineMenu = function (_a) {
    var children = _a.children, component = _a.component, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "isOpen"]);
    return (React__default["default"].createElement(BaseMenu, { options: { placement: "bottom" }, component: component, isOpen: isOpen },
        React__default["default"].createElement(InlineMenuContainer, __assign({}, props), children)));
};

var SubMenu = function (_a) {
    var children = _a.children, component = _a.component, options = _a.options, _b = _a.isOpen, isOpen = _b === void 0 ? false : _b, props = __rest(_a, ["children", "component", "options", "isOpen"]);
    return (React__default["default"].createElement(BaseMenu, { component: component, options: options, isOpen: isOpen },
        React__default["default"].createElement(SubMenuContainer, __assign({}, props), children)));
};

var MenuContext = React.createContext({
    linkComponent: "a",
});

var StyledMenuItemContainer = styled__default["default"].div(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["\n  position: relative;\n\n  ", ";\n"], ["\n  position: relative;\n\n  ", ";\n"])), function (_a) {
    var $isActive = _a.$isActive, $variant = _a.$variant; _a.theme;
    return $isActive &&
        $variant === "subMenu" &&
        "\n      &:after{\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        height: 4px;\n        width: 100%;\n        border-radius: 2px 2px 0 0;\n      }\n    ";
});
var CommonLinkStyles = function (_a) {
    var $isActive = _a.$isActive, $statusColor = _a.$statusColor, $variant = _a.$variant, $highlightTitle = _a.$highlightTitle;
    return styled.css(templateObject_4$k || (templateObject_4$k = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  color: ", ";\n  font-size: 14px;\n  font-weight: 600;\n  transition: color 0.4s ease;\n\n  ", "\n\n  ", "\n\n  &:hover {\n    div {\n      color: ", ";\n    }\n    svg {\n      fill: ", ";\n    }\n    ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n\n  color: ", ";\n  font-size: 14px;\n  font-weight: 600;\n  transition: color 0.4s ease;\n\n  ", "\n\n  ", "\n\n  &:hover {\n    div {\n      color: ", ";\n    }\n    svg {\n      fill: ", ";\n    }\n    ", ";\n  }\n"])), $isActive
        ? function (_a) {
            var theme = _a.theme;
            return theme.colors.secondary;
        }
        : function (_a) {
            var theme = _a.theme;
            return theme.colors.white;
        }, $statusColor &&
        "\n    &:after {\n      content: \"\";\n      border-radius: 100%;\n      height: 8px;\n      width: 8px;\n      margin-left: 12px;\n    }\n    ", $variant === "default"
        ? styled.css(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n        padding: 0 8px;\n        height: 72px;\n        ", " {\n          padding: 0 12px;\n        }\n      "], ["\n        padding: 0 8px;\n        height: 72px;\n        ", " {\n          padding: 0 12px;\n        }\n      "])), function (_a) {
            var theme = _a.theme;
            return theme.mediaQueries.lg;
        }) : styled.css(templateObject_3$n || (templateObject_3$n = __makeTemplateObject(["\n        padding: 4px 4px 0px 4px;\n        height: 42px;\n      "], ["\n        padding: 4px 4px 0px 4px;\n        height: 42px;\n      "]))), function (_a) {
        var theme = _a.theme;
        return $highlightTitle ? theme.colors.warningHover : theme.colors.pastelBlue;
    }, function (_a) {
        var theme = _a.theme;
        return theme.colors.pastelBlue;
    }, $variant === "default" && "border-radius: 16px;");
};
var StyledMenuItem = styled__default["default"].a(templateObject_5$e || (templateObject_5$e = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), CommonLinkStyles);
var templateObject_1$_, templateObject_2$v, templateObject_3$n, templateObject_4$k, templateObject_5$e;

var MenuItem = function (_a) {
    var children = _a.children, href = _a.href, _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "default" : _c, statusColor = _a.statusColor, highlightTitle = _a.highlightTitle, props = __rest(_a, ["children", "href", "isActive", "variant", "statusColor", "highlightTitle"]);
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var itemLinkProps = href
        ? {
            as: linkComponent,
            href: href,
        }
        : {
            as: "div",
        };
    return (React__default["default"].createElement(StyledMenuItemContainer, { "$isActive": isActive, "$variant": variant },
        React__default["default"].createElement(StyledMenuItem
        // @ts-ignore
        , __assign({}, itemLinkProps, { "$isActive": isActive, "$variant": variant, "$statusColor": statusColor, "$highlightTitle": highlightTitle }, props), children)));
};

var StyledSubMenuItems = styled__default["default"](Flex)(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var $isMobileOnly = _a.$isMobileOnly;
    return ($isMobileOnly ? "display:none" : "");
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.white);
});
var templateObject_1$Z;

var SubMenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, _c = _a.isMobileOnly, isMobileOnly = _c === void 0 ? false : _c, props = __rest(_a, ["items", "activeItem", "isMobileOnly"]);
    return (React__default["default"].createElement(StyledSubMenuItems, __assign({ justifyContent: [isMobileOnly ? "flex-end" : "start", null, "center"] }, props, { pl: ["12px", null, "0px"], "$isMobileOnly": isMobileOnly }), items.map(function (_a) {
        var label = _a.label, href = _a.href, iconName = _a.iconName, itemProps = _a.itemProps;
        return label && (React__default["default"].createElement(Box, { key: label, mr: "20px" },
            React__default["default"].createElement(MenuItem, __assign({ href: href, isActive: href === activeItem, variant: "subMenu" }, itemProps),
                iconName && (React__default["default"].createElement(IconComponent$1, { color: href === activeItem ? "secondary" : "pastelBlue", iconName: iconName, mr: "4px" })),
                label)));
    })));
};

var tabsScales = {
    LG: "lg",
    MD: "md",
    SM: "sm",
};
var tabVariants = {
    DARK: "dark",
    LIGHT: "light",
};

var _a$6, _b$2, _c$1, _d$1;
var barItemScaleVariant = (_a$6 = {},
    _a$6[tabsScales.LG] = {
        height: "40px",
        padding: "0 16px",
        fontSize: "16px",
        lineHeight: "24px",
    },
    _a$6[tabsScales.MD] = {
        height: "32px",
        padding: "0 12px",
        fontSize: "14px",
        lineHeight: "20px",
    },
    _a$6[tabsScales.SM] = {
        height: "24px",
        padding: "0 8px",
        fontSize: "12px",
        lineHeight: "16px",
    },
    _a$6);
var barVariants = (_b$2 = {},
    _b$2[tabVariants.DARK] = {
        color: "pastelBlue",
        ":hover:not(:disabled)": {
            color: "white",
        },
    },
    _b$2[tabVariants.LIGHT] = {
        color: "gray900",
        ":hover:not(:disabled)": {
            color: "dark800",
        },
    },
    _b$2);
var menuIconScaleVariants = (_c$1 = {},
    _c$1[tabsScales.LG] = {
        width: "24px",
        marginRight: "10px",
    },
    _c$1[tabsScales.MD] = {
        width: "20px",
        marginRight: "8px",
    },
    _c$1[tabsScales.SM] = {
        width: "16px",
        marginRight: "6px",
    },
    _c$1);
var sectionScaleVariants = (_d$1 = {},
    _d$1[tabsScales.LG] = {
        padding: "0 16px",
    },
    _d$1[tabsScales.MD] = {
        padding: "0 12px",
    },
    _d$1[tabsScales.SM] = {
        padding: "0 8px",
    },
    _d$1);

var Wrapper$d = styled__default["default"].div(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  background-color: transparent;\n  position: relative;\n  display: ", ";\n  width: ", ";\n  overflow: hidden;\n\n  ", ";\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ", "\n"], ["\n  background-color: transparent;\n  position: relative;\n  display: ", ";\n  width: ", ";\n  overflow: hidden;\n\n  ", ";\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  ", "\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var scrollX = _a.scrollX;
    return scrollX && styled.css(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n      overflow-x: scroll;\n    "], ["\n      overflow-x: scroll;\n    "])));
}, styledSystem.space);
var StyledTabBar = styled__default["default"].div(templateObject_5$d || (templateObject_5$d = __makeTemplateObject(["\n  position: relative;\n  display: ", ";\n  width: ", ";\n\n  & > button,\n  & > div,\n  & > a {\n    flex-grow: 1;\n\n    ", "\n  }\n\n  & > button,\n  & > div,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n"], ["\n  position: relative;\n  display: ", ";\n  width: ", ";\n\n  & > button,\n  & > div,\n  & > a {\n    flex-grow: 1;\n\n    ", "\n  }\n\n  & > button,\n  & > div,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n"])), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var equalElementWidth = _a.equalElementWidth;
    return equalElementWidth && styled.css(templateObject_3$m || (templateObject_3$m = __makeTemplateObject(["\n        flex: 1;\n      "], ["\n        flex: 1;\n      "])));
}, function (_a) {
    var disabled = _a.disabled;
    return disabled && styled.css(templateObject_4$j || (templateObject_4$j = __makeTemplateObject(["\n      opacity: 0.5;\n    "], ["\n      opacity: 0.5;\n    "])));
});
var Selection = styled__default["default"].div(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  width: ", ";\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  left: ", ";\n  z-index: 1;\n\n  ", "\n\n  ", "\n"], ["\n  width: ", ";\n  height: 2px;\n  position: absolute;\n  bottom: 0;\n  left: ", ";\n  z-index: 1;\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
}, function (_a) {
    var offset = _a.offset;
    return "".concat(offset, "px");
}, function (_a) {
    var withoutAnimation = _a.withoutAnimation;
    return !withoutAnimation && styled.css(templateObject_6$8 || (templateObject_6$8 = __makeTemplateObject(["\n      transition: left 0.3s ease, width 0.3s ease;\n    "], ["\n      transition: left 0.3s ease, width 0.3s ease;\n    "])));
}, styledSystem.variant({
    prop: "scale",
    variants: sectionScaleVariants,
}));
var ColorSection = styled__default["default"].div(templateObject_8$3 || (templateObject_8$3 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  background: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  background: ", ";\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === tabVariants.DARK ? "warning" : "primary"];
});
var TabMenu = function (_a) {
    var activeIndex = _a.activeIndex, _b = _a.scale, scale = _b === void 0 ? tabsScales.MD : _b, _c = _a.variant, variant = _c === void 0 ? tabVariants.DARK : _c, onItemClick = _a.onItemClick, _d = _a.disabled, disabled = _d === void 0 ? false : _d, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e; _a.menuIcons; var _g = _a.scrollX, scrollX = _g === void 0 ? false : _g, children = _a.children, equalElementWidth = _a.equalElementWidth, _h = _a.withoutAnimation, withoutAnimation = _h === void 0 ? false : _h, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "disabled", "fullWidth", "menuIcons", "scrollX", "children", "equalElementWidth", "withoutAnimation"]);
    var _j = React.useState([]), widthsArr = _j[0], setWidthsArr = _j[1];
    var _k = React.useState(null), blockOffset = _k[0], setBlockOffset = _k[1];
    var _l = React.useState(null), activeButtonIndex = _l[0], setActiveButtonIndex = _l[1];
    var _m = useMatchBreakpoints(), isDesktop = _m.isDesktop, isMobile = _m.isMobile, isTablet = _m.isTablet;
    React.useEffect(function () {
        setActiveButtonIndex(activeIndex);
    }, [activeIndex]);
    React.useEffect(function () {
        if (activeButtonIndex !== null && widthsArr.length) {
            setBlockOffset(widthsArr
                .slice(0, activeButtonIndex)
                .reduce(function (sum, elem) { return sum + elem; }, 0));
        }
    }, [widthsArr, activeButtonIndex, isDesktop, isMobile, isTablet]);
    var showSelection = !disabled && activeIndex !== null && blockOffset !== null;
    return (React__default["default"].createElement(Wrapper$d, __assign({ fullWidth: fullWidth, variant: variant, scrollX: scrollX }, props),
        showSelection && (React__default["default"].createElement(Selection, { scale: scale, width: widthsArr[activeIndex], offset: blockOffset, variant: variant, withoutAnimation: withoutAnimation },
            React__default["default"].createElement(ColorSection, { variant: variant }))),
        React__default["default"].createElement(StyledTabBar, __assign({ disabled: disabled, variant: variant, fullWidth: fullWidth, equalElementWidth: equalElementWidth }, props), React.Children.map(children, function (child, index) {
            return React.cloneElement(child, {
                isActive: activeIndex === index,
                onItemClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                setWidth: setWidthsArr,
                itemIndex: index,
                activeButtonIndex: activeButtonIndex,
                blockOffset: blockOffset,
                scale: scale,
                variant: variant,
                disabled: disabled,
            });
        }))));
};
var templateObject_1$Y, templateObject_2$u, templateObject_3$m, templateObject_4$j, templateObject_5$d, templateObject_6$8, templateObject_7$4, templateObject_8$3;

var TabItem = styled__default["default"].button(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n  border: 0;\n  margin: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  line-height: 1;\n  outline: 0;\n  transition: background-color 0.3s, opacity 0.3s, color 0.3s;\n  background-color: transparent;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n  ", "\n  \n  ", "\n"], ["\n  border: 0;\n  margin: 0;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  font-family: inherit;\n  font-weight: 600;\n  line-height: 1;\n  outline: 0;\n  transition: background-color 0.3s, opacity 0.3s, color 0.3s;\n  background-color: transparent;\n  white-space: nowrap;\n  -webkit-tap-highlight-color: transparent;\n\n  ", "\n  ", "\n  \n  ", "\n"])), styledSystem.variant({
    variants: barVariants,
}), styledSystem.variant({
    prop: "scale",
    variants: barItemScaleVariant,
}), function (_a) {
    var isActive = _a.isActive, variant = _a.variant, theme = _a.theme;
    return isActive && styled.css(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n      color: ", ";\n    "], ["\n      color: ", ";\n    "])), theme.colors[variant === tabVariants.DARK ? "white" : "dark800"]);
});
var TabBarItem = function (_a) {
    var _b, _c;
    var _d = _a.isActive, isActive = _d === void 0 ? false : _d, variant = _a.variant, setWidth = _a.setWidth, _e = _a.itemIndex, itemIndex = _e === void 0 ? 0 : _e, activeButtonIndex = _a.activeButtonIndex, blockOffset = _a.blockOffset, _f = _a.iconName, iconName = _f === void 0 ? "" : _f, _g = _a.iconColor, iconColor = _g === void 0 ? "" : _g, _h = _a.scale, scale = _h === void 0 ? tabsScales.MD : _h, as = _a.as, _j = _a.onItemClick, onItemClick = _j === void 0 ? function () { } : _j, _k = _a.onClick, onClick = _k === void 0 ? function () { } : _k, children = _a.children, props = __rest(_a, ["isActive", "variant", "setWidth", "itemIndex", "activeButtonIndex", "blockOffset", "iconName", "iconColor", "scale", "as", "onItemClick", "onClick", "children"]);
    var _l = useMatchBreakpoints(), isXs = _l.isXs, isSm = _l.isSm, isMs = _l.isMs, isLg = _l.isLg, isXl = _l.isXl, isXll = _l.isXll, isXxl = _l.isXxl;
    var ref = React.useRef(null);
    var itemWidth = (_c = (_b = ref === null || ref === void 0 ? void 0 : ref.current) === null || _b === void 0 ? void 0 : _b.clientWidth) !== null && _c !== void 0 ? _c : 0;
    React.useEffect(function () {
        if (itemWidth && setWidth) {
            setWidth(function (prev) {
                return prev.length > itemIndex
                    ? prev.map(function (i, index) { return (index === itemIndex ? itemWidth : i); })
                    : __spreadArray(__spreadArray([], prev, true), [itemWidth], false);
            });
        }
    }, [
        blockOffset,
        itemWidth,
        activeButtonIndex,
        isXs,
        isSm,
        isMs,
        isLg,
        isXl,
        isXll,
        isXxl,
    ]);
    var omItemClickHandler = function () {
        onItemClick(itemIndex);
        onClick();
    };
    var iconSizes = menuIconScaleVariants[scale];
    var getTabMenuIcons = function () {
        return (React__default["default"].createElement(IconComponent$1, { width: iconSizes.width, iconName: iconName, color: iconColor !== null && iconColor !== void 0 ? iconColor : "currentColor", mr: iconSizes.marginRight }));
    };
    return (React__default["default"].createElement(TabItem, __assign({ onClick: omItemClickHandler, isActive: isActive, ref: ref, as: as, variant: variant, scale: scale }, props),
        React__default["default"].createElement(Flex, { height: iconSizes.width, alignItems: "center" },
            getTabMenuIcons(),
            children)));
};
var templateObject_1$X, templateObject_2$t;

var scales$2 = {
    // SM: "sm",
    MD: "md",
    // LG: "lg",
};

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
    P: "p",
    SPAN: "span",
    DIV: "div",
};
var scales$1 = {
    SIZE40: "size40",
    SIZE32: "size32",
    SIZE24: "size24",
    SIZE20: "size20",
    SIZE16: "size16",
    SIZE14: "size14",
    SIZE12: "size12",
    SIZE10: "size10",
};

var _a$5;
var headTextScaleMap = (_a$5 = {},
    _a$5[scales$1.SIZE40] = {
        fontSize: "40px",
        lineHeight: "48px",
    },
    _a$5[scales$1.SIZE32] = {
        fontSize: "32px",
        lineHeight: "40px",
    },
    _a$5[scales$1.SIZE24] = {
        fontSize: "24px",
        lineHeight: "32px",
    },
    _a$5[scales$1.SIZE20] = {
        fontSize: "20px",
        lineHeight: "28px",
    },
    _a$5[scales$1.SIZE16] = {
        fontSize: "16px",
        lineHeight: "24px",
    },
    _a$5[scales$1.SIZE14] = {
        fontSize: "14px",
        lineHeight: "20px",
    },
    _a$5[scales$1.SIZE12] = {
        fontSize: "12px",
        lineHeight: "16px",
    },
    _a$5[scales$1.SIZE10] = {
        fontSize: "10px",
        lineHeight: "12px",
    },
    _a$5);
var HeadText = styled__default["default"](Text).attrs({ bold: true })(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: 600;\n  white-space: ", ";\n"], ["\n  font-size: ", ";\n  line-height: ", ";\n  font-weight: 600;\n  white-space: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return headTextScaleMap[scale || scales$1.SIZE32].fontSize;
}, function (_a) {
    var scale = _a.scale;
    return headTextScaleMap[scale || scales$1.SIZE32].lineHeight;
}, function (_a) {
    var nowrap = _a.nowrap;
    return (nowrap ? "nowrap" : "normal");
});
HeadText.defaultProps = {
    as: tags.H2,
};
var templateObject_1$W;

var scales = {
    SIZE40: "size40",
    SIZE32: "size32",
    SIZE24: "size24",
    SIZE20: "size20",
    SIZE16: "size16",
    SIZE14: "size14",
    SIZE12: "size12",
    SIZE10: "size10",
};

var _a$4;
var bodyTextScaleMap = (_a$4 = {},
    _a$4[scales.SIZE40] = {
        fontSize: "40px",
        lineHeight: "48px",
    },
    _a$4[scales.SIZE32] = {
        fontSize: "32px",
        lineHeight: "40px",
    },
    _a$4[scales.SIZE24] = {
        fontSize: "24px",
        lineHeight: "32px",
    },
    _a$4[scales.SIZE20] = {
        fontSize: "20px",
        lineHeight: "28px",
    },
    _a$4[scales.SIZE16] = {
        fontSize: "16px",
        lineHeight: "24px",
    },
    _a$4[scales.SIZE14] = {
        fontSize: "14px",
        lineHeight: "20px",
    },
    _a$4[scales.SIZE12] = {
        fontSize: "12px",
        lineHeight: "16px",
    },
    _a$4[scales.SIZE10] = {
        fontSize: "10px",
        lineHeight: "12px",
    },
    _a$4);
var getScalesAttributes = function (_a) {
    var _b;
    var scale = _a.scale;
    if (typeof scale === "string")
        return bodyTextScaleMap[scale];
    var tempScales = JSON.parse(JSON.stringify(scale));
    if (!tempScales.xs)
        tempScales.xs = (_b = BodyText.defaultProps) === null || _b === void 0 ? void 0 : _b.scale;
    return scale
        ? {
            fontSize: breakpointsKeys.map(function (breakPoint) {
                return tempScales[breakPoint]
                    ? bodyTextScaleMap[tempScales[breakPoint]].fontSize
                    : null;
            }),
            lineHeight: breakpointsKeys.map(function (breakPoint) {
                return tempScales[breakPoint]
                    ? bodyTextScaleMap[tempScales[breakPoint]].lineHeight
                    : null;
            }),
        }
        : { fontSize: [], lineHeight: [] };
};
var BodyText = styled__default["default"](Text).attrs(getScalesAttributes)(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  font-weight: ", ";\n  white-space: ", ";\n"], ["\n  font-weight: ", ";\n  white-space: ", ";\n"])), function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var nowrap = _a.nowrap;
    return (nowrap ? "nowrap" : "normal");
});
BodyText.defaultProps = {
    scale: "size16",
    as: "p",
};
var templateObject_1$V;

var scaleKeyValues = {
    // sm: {},
    // TODO now used only MD scale
    md: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "40px",
    },
    // lg: {},
};
var getScale$1 = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$2.MD : _b;
        return scaleKeyValues[scale][property];
    };
};
var ToggleWrap = styled__default["default"].label(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  width: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  opacity: ", ";\n  grid-area: ", ";\n  \n  ", "\n"], ["\n  display: inline-flex;\n  align-items: center;\n  width: ", ";\n  flex-direction: ", ";\n  justify-content: ", ";\n  opacity: ", ";\n  grid-area: ", ";\n  \n  ", "\n"])), function (_a) {
    var spaceBetween = _a.spaceBetween;
    return (spaceBetween ? "100%" : "auto");
}, function (_a) {
    var labelOrientation = _a.labelOrientation;
    return labelOrientation === "left"
        ? "row-reverse"
        : labelOrientation === "right"
            ? "row"
            : "row";
}, function (_a) {
    var spaceBetween = _a.spaceBetween;
    return spaceBetween ? "space-between" : "start";
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "0.32" : "1");
}, function (_a) {
    var gridArea = _a.gridArea;
    return gridArea || "initial";
}, styledSystem.space);
var Handle = styled__default["default"].div(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n  background-color: ", ";\n  box-shadow: 0 2px 4px rgba(7, 22, 45, 0.16);\n  border-radius: 50%;\n  cursor: ", ";\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  box-shadow: 0 2px 4px rgba(7, 22, 45, 0.16);\n  border-radius: 50%;\n  cursor: ", ";\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, getScale$1("handleHeight"), getScale$1("handleLeft"), getScale$1("handleTop"), getScale$1("handleWidth"));
var Label = styled__default["default"](BodyText)(templateObject_3$l || (templateObject_3$l = __makeTemplateObject(["\n  color: ", ";\n\n  color: ", ";\n\n  margin: ", ";\n  cursor: ", ";\n  transition: color 0.2s ease-in-out;\n"], ["\n  color: ", ";\n\n  color: ", ";\n\n  margin: ", ";\n  cursor: ", ";\n  transition: color 0.2s ease-in-out;\n"])), function (_a) {
    var theme = _a.theme, isChecked = _a.isChecked;
    return isChecked ? theme.colors.dark800 : theme.colors.gray900;
}, function (_a) {
    var theme = _a.theme, variant = _a.variant, isChecked = _a.isChecked;
    return variant === "dark" && isChecked
        ? theme.colors.white
        : variant === "light" && isChecked
            ? theme.colors.dark800
            : theme.colors.gray900;
}, function (_a) {
    var labelOrientation = _a.labelOrientation;
    return labelOrientation === "left" ? "0 8px 0 0" : "0 0 0 8px";
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
});
var Input = styled__default["default"].input(templateObject_4$i || (templateObject_4$i = __makeTemplateObject(["\n  cursor: ", ";\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n  margin: 0;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"], ["\n  cursor: ", ";\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n  margin: 0;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"])), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, Handle, getScale$1("checkedLeft"));
var StyledToggle = styled__default["default"].div(templateObject_5$c || (templateObject_5$c = __makeTemplateObject(["\n  background-color: ", ";\n  align-items: center;\n  border-radius: 26px;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 0.2s ease-in-out;\n  width: ", ";\n  cursor: ", ";\n"], ["\n  background-color: ", ";\n  align-items: center;\n  border-radius: 26px;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 0.2s ease-in-out;\n  width: ", ";\n  cursor: ", ";\n"])), function (_a) {
    var theme = _a.theme, $checked = _a.$checked, $checkedColor = _a.$checkedColor, $defaultColor = _a.$defaultColor;
    return theme.colors[$checked ? $checkedColor : $defaultColor];
}, getScale$1("toggleHeight"), getScale$1("toggleWidth"), function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
});
var templateObject_1$U, templateObject_2$s, templateObject_3$l, templateObject_4$i, templateObject_5$c;

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.defaultColor, defaultColor = _b === void 0 ? "toggleBg" : _b, _c = _a.checkedColor, checkedColor = _c === void 0 ? "success" : _c, _d = _a.scale, scale = _d === void 0 ? scales$2.MD : _d, disabled = _a.disabled, label = _a.label, labelOrientation = _a.labelOrientation, gridArea = _a.gridArea, variant = _a.variant, spaceBetween = _a.spaceBetween, _e = _a.labelSize, labelSize = _e === void 0 ? "size12" : _e, props = __rest(_a, ["checked", "defaultColor", "checkedColor", "scale", "disabled", "label", "labelOrientation", "gridArea", "variant", "spaceBetween", "labelSize"]);
    var isChecked = !!checked;
    return (React__default["default"].createElement(ToggleWrap, __assign({ labelOrientation: labelOrientation, disabled: disabled, gridArea: gridArea, spaceBetween: spaceBetween }, props),
        React__default["default"].createElement(StyledToggle, { "$checked": isChecked, "$checkedColor": checkedColor, "$defaultColor": defaultColor, scale: scale, disabled: disabled },
            React__default["default"].createElement(Input, { checked: checked, scale: scale, type: "checkbox", disabled: disabled }),
            React__default["default"].createElement(Handle, { scale: scale, disabled: disabled })),
        label && (React__default["default"].createElement(Label, { labelOrientation: labelOrientation, isChecked: isChecked, disabled: disabled, variant: variant, scale: labelSize, as: "span" }, label))));
};
Toggle.defaultProps = {
    scale: "md",
    variant: "light",
};

var getBadgeBg = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "active") {
        return getRgba(theme.colors.success, theme, 0.16);
    }
    if (badgeType === "notActive") {
        return getRgba(theme.colors.secondary, theme, 0.16);
    }
    if (badgeType === "success") {
        return theme.colors.success;
    }
    if (badgeType === "error") {
        return theme.colors.secondary;
    }
    if (badgeType === "primary") {
        return theme.colors.primary;
    }
    if (badgeType === "warning") {
        return theme.colors.warning;
    }
    if (badgeType === "boost") {
        return theme.colors.boost;
    }
    if (badgeType === "core") {
        return getRgba(theme.colors.primary, theme, 0.16);
    }
    if (badgeType === "light") {
        return theme.colors.gray200;
    }
    if (badgeType === "warningOpacity") {
        return theme.colors.warningOpacity;
    }
    return theme.colors.primary;
};
var getBadgeColor = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "active") {
        return theme.colors.success;
    }
    if (badgeType === "notActive") {
        return theme.colors.secondary;
    }
    if (badgeType === "warning") {
        return theme.colors.dark800;
    }
    if (badgeType === "core") {
        return theme.colors.primary;
    }
    if (badgeType === "light") {
        return theme.colors.dark800;
    }
    if (badgeType === "warningOpacity") {
        return theme.colors.warning;
    }
    if (badgeType === "new" ||
        badgeType === "primary" ||
        badgeType === "hot" ||
        badgeType === "boost") {
        return theme.colors.white;
    }
    return theme.colors.white;
};
// interface BadgeProps{}
var Wrapper$c = styled__default["default"].div(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n  height: ", ";\n  font-size: ", ";\n  font-weight: 600;\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n  height: ", ";\n  font-size: ", ";\n  font-weight: 600;\n\n  ", "\n"])), function (_a) {
    var isIcon = _a.isIcon, isLarge = _a.isLarge;
    return !isLarge
        ? isIcon === "left"
            ? "4px 8px 4px 4px"
            : isIcon === "right"
                ? "4px 4px 4px 8px"
                : "4px 8px"
        : "8px 24px";
}, getBadgeBg, getBadgeColor, function (_a) {
    var isLarge = _a.isLarge;
    return (isLarge ? "38px" : "20px");
}, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "10px";
}, styledSystem.space);
var Badge$1 = function (_a) {
    var children = _a.children, badgeType = _a.badgeType, fontSize = _a.fontSize, fontWeight = _a.fontWeight, isIcon = _a.isIcon, isLarge = _a.isLarge, props = __rest(_a, ["children", "badgeType", "fontSize", "fontWeight", "isIcon", "isLarge"]);
    return (React__default["default"].createElement(Wrapper$c, __assign({ badgeType: badgeType, isIcon: isIcon, isLarge: isLarge, fontSize: fontSize, fontWeight: fontWeight }, props), children));
};
var templateObject_1$T;

var badgeTypes = {
    SUCCESS: "success",
    ERROR: "error",
    ACTIVE: "active",
    NOT_ACTIVE: "notActive",
    PRIMARY: "primary",
    WARNING: "warning",
    CORE: "core",
    LIGHT: "light",
    BOOST: "boost",
    WARNING_OPACITY: "warningOpacity",
};

var _a$3;
var BadgeTypesContainer = (_a$3 = {},
    _a$3[badgeTypes.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
        border: "0",
        ":hover": {
            backgroundColor: "successHover",
        },
        ":active, &.active": {
            backgroundColor: "successPress",
        },
    },
    _a$3[badgeTypes.ERROR] = {
        backgroundColor: "secondary",
        color: "white",
        border: "0",
        ":hover": {
            backgroundColor: "secondaryHover",
        },
        ":active, &.active": {
            backgroundColor: "secondaryPress",
        },
    },
    _a$3[badgeTypes.WARNING] = {
        backgroundColor: "warning",
        color: "dark800",
        border: "0",
        ":hover": {
            backgroundColor: "warningHover",
        },
        ":active, &.active": {
            backgroundColor: "warningPress",
        },
    },
    _a$3[badgeTypes.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
        border: "0",
        ":hover": {
            backgroundColor: "primaryHover",
        },
        ":active, &.active": {
            backgroundColor: "primaryPress",
        },
    },
    _a$3[badgeTypes.BOOST] = {
        backgroundColor: "boost",
        color: "white",
        border: "0",
        ":hover": {
            backgroundColor: "boostHover",
        },
        ":active, &.active": {
            backgroundColor: "boostPress",
        },
    },
    _a$3[badgeTypes.ACTIVE] = {
        backgroundColor: "successOpacity",
        color: "success",
        border: "1px solid transparent",
        ":hover": {
            backgroundColor: "transparent",
            borderColor: "successOpacity",
        },
        ":active, &.active": {
            backgroundColor: "transparent",
            borderColor: "success",
        },
    },
    _a$3[badgeTypes.NOT_ACTIVE] = {
        backgroundColor: "secondaryOpacity",
        color: "secondary",
        border: "1px solid transparent",
        ":hover": {
            backgroundColor: "transparent",
            borderColor: "secondaryOpacity",
        },
        ":active, &.active": {
            backgroundColor: "transparent",
            borderColor: "secondary",
        },
    },
    _a$3[badgeTypes.CORE] = {
        backgroundColor: "primaryOpacity",
        color: "primary",
        border: "1px solid transparent",
        ":hover": {
            backgroundColor: "transparent",
            borderColor: "primaryOpacity",
        },
        ":active, &.active": {
            backgroundColor: "transparent",
            borderColor: "primary",
        },
    },
    _a$3[badgeTypes.WARNING_OPACITY] = {
        backgroundColor: "warningOpacity",
        color: "warning",
        border: "1px solid transparent",
        ":hover": {
            backgroundColor: "transparent",
            borderColor: "warning",
        },
        ":active, &.active": {
            backgroundColor: "transparent",
            borderColor: "warning",
        },
    },
    _a$3[badgeTypes.LIGHT] = {
        backgroundColor: "gray200",
        color: "dark800",
        border: "0",
        ":hover": {
            backgroundColor: "white",
        },
        ":active, &.active": {
            backgroundColor: "gray400",
        },
    },
    _a$3);

var Wrapper$b = styled__default["default"].button(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: ", ";\n  border-radius: 16px;\n  height: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,\n    border-color 0.1s ease-in-out;\n\n  ", "\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  padding: ", ";\n  border-radius: 16px;\n  height: 20px;\n  font-size: 10px;\n  font-weight: 600;\n  outline: none;\n  cursor: pointer;\n  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,\n    border-color 0.1s ease-in-out;\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var isIcon = _a.isIcon;
    return isIcon === "left"
        ? "4px 8px 4px 4px"
        : isIcon === "right"
            ? "4px 4px 4px 8px"
            : "4px 8px";
}, styledSystem.space, styledSystem.variant({
    prop: "badgeType",
    variants: BadgeTypesContainer,
}));
var Badge = function (_a) {
    var children = _a.children, badgeType = _a.badgeType, fontSize = _a.fontSize, fontWeight = _a.fontWeight, isIcon = _a.isIcon, isActive = _a.isActive, props = __rest(_a, ["children", "badgeType", "fontSize", "fontWeight", "isIcon", "isActive"]);
    return (React__default["default"].createElement(Wrapper$b, __assign({ badgeType: badgeType, isIcon: isIcon, fontSize: fontSize, fontWeight: fontWeight, className: isActive ? "active" : "" }, props), children));
};
var templateObject_1$S;

var circle = "data:image/svg+xml,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20clip-path%3D%22url%28%23clip0_4728_34338%29%22%3E%3Cpath%20d%3D%22M0%2010C0%204.47715%204.47715%200%2010%200C15.5228%200%2020%204.47715%2020%2010C20%2015.5228%2015.5228%2020%2010%2020C4.47715%2020%200%2015.5228%200%2010Z%22%20fill%3D%22%231263F1%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d_4728_34338%29%22%3E%3Crect%20x%3D%224%22%20y%3D%224%22%20width%3D%2212%22%20height%3D%2212%22%20rx%3D%226%22%20fill%3D%22white%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d_4728_34338%22%20x%3D%220%22%20y%3D%222%22%20width%3D%2220%22%20height%3D%2220%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%20result%3D%22hardAlpha%22%2F%3E%3CfeOffset%20dy%3D%222%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%222%22%2F%3E%3CfeComposite%20in2%3D%22hardAlpha%22%20operator%3D%22out%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200.027451%200%200%200%200%200.0862745%200%200%200%200%200.176471%200%200%200%200.32%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow_4728_34338%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow_4728_34338%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3CclipPath%20id%3D%22clip0_4728_34338%22%3E%3Crect%20width%3D%2220%22%20height%3D%2220%22%20fill%3D%22white%22%2F%3E%3C%2FclipPath%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var getBaseThumbStyles = function () { return "\n  -webkit-appearance: none;\n  background-image: url(".concat(circle, ");\n  background-color: transparent;\n  box-shadow: none;\n  border: 0;\n  width: 20px;\n  height: 20px;\n  transition: 200ms transform;\n  transform: translateY(2px);\n\n  &:hover {\n    transform: scale(1.1) translateY(2px);\n  }\n"); };
var StyledInput = styled__default["default"].input(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  border: none;\n  background-color: transparent;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  position: relative;\n  z-index: 1;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  border: none;\n  background-color: transparent;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled__default["default"].div(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n  background-color: ", ";\n  height: 4px;\n  position: absolute;\n  top: 10px;\n  width: calc(100% - 8px);\n  border-radius: 20px;\n"], ["\n  background-color: ", ";\n  height: 4px;\n  position: absolute;\n  top: 10px;\n  width: calc(100% - 8px);\n  border-radius: 20px;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, darkMode = _a.darkMode;
    return theme.colors[disabled ? "gray900" : darkMode ? "dark400" : "gray300"];
});
var BarProgress = styled__default["default"].div(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n  background-color: ", ";\n  height: 4px;\n  margin-left: 2px;\n  position: absolute;\n  top: 10px;\n"], ["\n  background-color: ", ";\n  height: 4px;\n  margin-left: 2px;\n  position: absolute;\n  top: 10px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var PointsContainer = styled__default["default"](Flex)(templateObject_4$h || (templateObject_4$h = __makeTemplateObject(["\n  position: relative;\n  top: -16px;\n"], ["\n  position: relative;\n  top: -16px;\n"])));
var PercentSliderLabel = styled__default["default"](Flex)(templateObject_5$b || (templateObject_5$b = __makeTemplateObject(["\n  align-items: center;\n  position: absolute;\n  ", ";\n  left: ", ";\n  transform: translateX(-50%) translateY(calc(", "));\n  border-radius: 8px;\n  padding: 8px 12px;\n  background-color: ", ";\n  z-index: ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    ", ";\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    z-index: ", ";\n    transform: translate(-50%, ", ");\n    ", ";\n"], ["\n  align-items: center;\n  position: absolute;\n  ", ";\n  left: ", ";\n  transform: translateX(-50%) translateY(calc(", "));\n  border-radius: 8px;\n  padding: 8px 12px;\n  background-color: ", ";\n  z-index: ", ";\n\n  &:after {\n    content: '';\n    display: block;\n    position: absolute;\n    left: 50%;\n    ", ";\n    width: 0;\n    height: 0;\n    border-left: 6px solid transparent;\n    border-right: 6px solid transparent;\n    z-index: ", ";\n    transform: translate(-50%, ", ");\n    ", ";\n"])), function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "top: 0" : "bottom: 0";
}, function (_a) {
    var left = _a.left;
    return "".concat(left, "%");
}, function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "-100% - 10px" : "100%";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "bottom: 0" : "top: 0";
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var bannerPosition = _a.bannerPosition;
    return bannerPosition === "top" ? "100%" : "-100%";
}, function (_a) {
    var bannerPosition = _a.bannerPosition, theme = _a.theme;
    return "border-".concat(bannerPosition === "top" ? "top" : "bottom", ": 6px solid ").concat(theme.colors.tooltip);
});
var templateObject_1$R, templateObject_2$r, templateObject_3$k, templateObject_4$h, templateObject_5$b;

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors.".concat(color), color)(theme);
};
var CircleIcon = function (props) {
    var theme = styled.useTheme();
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 10 10" }, props),
        React__default["default"].createElement("rect", { x: "1.5", y: "1.5", width: "7", height: "7", rx: "3.5", fill: props.darkMode ? theme.colors.dark700 : "white", stroke: getColor({ color: props.color, theme: theme }), strokeWidth: "3" })));
};

var PercentSlider = function (_a) {
    var _b = _a.name, name = _b === void 0 ? "slider" : _b, _c = _a.min, min = _c === void 0 ? 0 : _c, _d = _a.max, max = _d === void 0 ? 100 : _d, value = _a.value, onValueChanged = _a.onValueChanged, _e = _a.disabled, disabled = _e === void 0 ? false : _e, enableShortcuts = _a.enableShortcuts, _f = _a.shortcutCheckpoints, shortcutCheckpoints = _f === void 0 ? [0, 25, 50, 75, 100] : _f, withTooltip = _a.withTooltip, _g = _a.bannerPosition, bannerPosition = _g === void 0 ? "bottom" : _g, _h = _a.darkMode, darkMode = _h === void 0 ? false : _h, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "disabled", "enableShortcuts", "shortcutCheckpoints", "withTooltip", "bannerPosition", "darkMode"]);
    var _j = React.useState(value.toString()), displayPercent = _j[0], setDisplayPercent = _j[1];
    React.useEffect(function () {
        if (value !== parseInt(displayPercent)) {
            setDisplayPercent(value.toString());
        }
    }, [value]);
    var handleChange = React.useCallback(function (_a) {
        var target = _a.target;
        setDisplayPercent(parseInt(target.value).toFixed(2));
        onValueChanged(Number(parseInt(target.value).toFixed(2)));
    }, []);
    var setMax = React.useCallback(function () {
        setDisplayPercent(max.toString());
        onValueChanged(max);
    }, [max]);
    var _k = React.useState(false), infoVisible = _k[0], setInfoVisible = _k[1];
    var getCirclesColor = function (pointPercent) {
        return value >= pointPercent
            ? "primary"
            : disabled
                ? "textDisabled"
                : darkMode
                    ? "dark400"
                    : "gray300";
    };
    return (React__default["default"].createElement(Flex, __assign({ position: "relative", flexDirection: "column" }, props),
        React__default["default"].createElement("div", null,
            React__default["default"].createElement(Flex, { justifyContent: "center" },
                React__default["default"].createElement(BarBackground, { darkMode: darkMode, disabled: disabled })),
            React__default["default"].createElement(BarProgress, { style: { width: "calc(".concat(displayPercent, "% - 5px)") } }),
            React__default["default"].createElement(StyledInput, { name: name, onMouseDown: function () { return setInfoVisible(true); }, onMouseUp: function () { return setInfoVisible(false); }, onTouchStart: function () { return setInfoVisible(true); }, onTouchEnd: function () { return setInfoVisible(false); }, type: "range", min: min, max: max, value: displayPercent, step: "any", onChange: handleChange, disabled: disabled }),
            withTooltip && infoVisible && (React__default["default"].createElement(PercentSliderLabel, { className: "percent-info-banner", bannerPosition: bannerPosition, left: Number(displayPercent) },
                React__default["default"].createElement(Text, { color: "white" },
                    value,
                    "%"))),
            shortcutCheckpoints && (React__default["default"].createElement(PointsContainer, { justifyContent: "space-between" }, shortcutCheckpoints.map(function (pointPercent, index) { return (React__default["default"].createElement(CircleIcon, { darkMode: darkMode, key: index.toString(), width: "10px", color: getCirclesColor(pointPercent) })); })))),
        enableShortcuts && shortcutCheckpoints && (React__default["default"].createElement(Flex, { justifyContent: "space-between", py: "16px" },
            shortcutCheckpoints.map(function (percent, index) { return (React__default["default"].createElement(Button$2, { key: index.toString(), scale: "sm", variant: "primary", onClick: function () {
                    setDisplayPercent(percent.toString());
                } },
                percent,
                "%")); }),
            React__default["default"].createElement(Button$2, { scale: "sm", variant: "primary", onClick: setMax }, "Max")))));
};

var variants$1 = {
    LIGHT: "light",
    DARK: "dark",
};

var _a$2, _b$1;
var Variants = (_a$2 = {},
    _a$2[variants$1.LIGHT] = {
        color: "primary",
    },
    _a$2[variants$1.DARK] = {
        color: "white",
    },
    _a$2);
var VariantsArrows = (_b$1 = {},
    _b$1[variants$1.LIGHT] = {
        border: "1px solid rgba(18, 99, 241, 0.16)",
        color: "primary",
        ":hover": {
            backgroundColor: "rgba(18, 99, 241, 0.16)",
            borderColor: "transparent",
        },
    },
    _b$1[variants$1.DARK] = {
        border: "1px solid rgba(255, 255, 255, 0.24)",
        color: "white",
        ":hover": {
            backgroundColor: "rgba(255, 255, 255, 0.24)",
            borderColor: "transparent",
        },
    },
    _b$1);

var PaginationWrap = styled__default["default"].div(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n\n  .paginate-wrapper {\n    display: flex;\n    justify-content: center;\n  }\n\n  .pagination {\n    display: flex;\n\n    li {\n      border-radius: 8px;\n      font-size: 14px;\n      list-style-type: none;\n      width: 40px;\n      height: 40px;\n      border: 0;\n      outline: 0;\n      line-height: 20px;\n      font-weight: 600;\n      transition: opacity 0.4s ease-in-out, color 0.4s ease-in-out;\n\n      ", "\n\n      &:hover {\n        &:not(:first-child, :last-child, .active) {\n          opacity: 0.56;\n        }\n      }\n\n      &.active {\n        color: ", ";\n        background: ", ";\n\n        &:hover {\n          background: lighten(", ", 5%);\n        }\n      }\n\n      &:first-child,\n      :last-child {\n        background-color: ", ";\n\n        &:hover {\n          background-color: #46465f;\n        }\n      }\n\n      &.previous,\n      &.next {\n        background-color: transparent;\n        transition: all 0.4s ease-in-out;\n\n        ", "\n      }\n\n      &.previous {\n        margin-right: 12px;\n        \n        ", " {\n          margin-right: 24px;\n        }\n      }\n      &.next {\n        margin-left: 12px;\n\n        ", " {\n          margin-left: 24px;\n        }\n      }\n\n      &.disabled {\n        cursor: not-allowed;\n        pointer-events: none;\n        opacity: 0.32;\n      }\n      &.break-me {\n        width: 20px;\n        \n        a {\n          width: 20px;\n        }\n      }\n    }\n\n    a {\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 600;\n\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n\n  .paginate-wrapper {\n    display: flex;\n    justify-content: center;\n  }\n\n  .pagination {\n    display: flex;\n\n    li {\n      border-radius: 8px;\n      font-size: 14px;\n      list-style-type: none;\n      width: 40px;\n      height: 40px;\n      border: 0;\n      outline: 0;\n      line-height: 20px;\n      font-weight: 600;\n      transition: opacity 0.4s ease-in-out, color 0.4s ease-in-out;\n\n      ", "\n\n      &:hover {\n        &:not(:first-child, :last-child, .active) {\n          opacity: 0.56;\n        }\n      }\n\n      &.active {\n        color: ", ";\n        background: ", ";\n\n        &:hover {\n          background: lighten(", ", 5%);\n        }\n      }\n\n      &:first-child,\n      :last-child {\n        background-color: ", ";\n\n        &:hover {\n          background-color: #46465f;\n        }\n      }\n\n      &.previous,\n      &.next {\n        background-color: transparent;\n        transition: all 0.4s ease-in-out;\n\n        ", "\n      }\n\n      &.previous {\n        margin-right: 12px;\n        \n        ", " {\n          margin-right: 24px;\n        }\n      }\n      &.next {\n        margin-left: 12px;\n\n        ", " {\n          margin-left: 24px;\n        }\n      }\n\n      &.disabled {\n        cursor: not-allowed;\n        pointer-events: none;\n        opacity: 0.32;\n      }\n      &.break-me {\n        width: 20px;\n        \n        a {\n          width: 20px;\n        }\n      }\n    }\n\n    a {\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      font-weight: 600;\n\n      &:focus {\n        outline: none;\n      }\n    }\n  }\n"])), styledSystem.variant({
    variants: Variants,
}), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark800;
}, styledSystem.variant({
    variants: VariantsArrows,
}), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Pagination = function (_a) {
    var variant = _a.variant, isLight = _a.isLight, pageCount = _a.pageCount, handlePageClick = _a.handlePageClick, _b = _a.marginPagesDisplayed, marginPagesDisplayed = _b === void 0 ? 1 : _b, _c = _a.pageRangeDisplayed, pageRangeDisplayed = _c === void 0 ? 2 : _c;
    var paginationClass = classNames__default["default"]("paginate-wrapper", {
        paginate__light: isLight,
        paginate__dark: !isLight,
    });
    return (React__default["default"].createElement(PaginationWrap, { className: paginationClass, variant: variant },
        React__default["default"].createElement(ReactPaginate__default["default"], { previousLabel: React__default["default"].createElement(Icon$38, { color: variant === "light" ? "primary" : "white" }), nextLabel: React__default["default"].createElement(Icon$3b, { color: variant === "light" ? "primary" : "white" }), breakLabel: "...", breakClassName: "break-me", pageCount: pageCount, marginPagesDisplayed: marginPagesDisplayed, pageRangeDisplayed: pageRangeDisplayed, onPageChange: handlePageClick, containerClassName: "pagination", activeClassName: "active" })));
};
var templateObject_1$Q;

var socials$1 = {
    TWITTER: "twitter",
    TELEGRAM: "telegram",
};
var SocialsList;
(function (SocialsList) {
    SocialsList[SocialsList["twitter"] = 0] = "twitter";
    SocialsList[SocialsList["telegram"] = 1] = "telegram";
})(SocialsList || (SocialsList = {}));

var socialLinks = {
    twitter: function (_a) {
        var _b = _a.message, message = _b === void 0 ? "" : _b, _c = _a.link, link = _c === void 0 ? "" : _c;
        return "https://twitter.com/intent/tweet/?text=".concat(encodeURIComponent(message), "&url=").concat(encodeURIComponent(link));
    },
    telegram: function (_a) {
        var _b = _a.message, message = _b === void 0 ? "" : _b, _c = _a.link, link = _c === void 0 ? "" : _c;
        return "https://telegram.me/share/url?text=".concat(encodeURIComponent(message), "&url=").concat(encodeURIComponent(link));
    },
};
var socialStyles = function (_a) {
    var theme = _a.theme, _b = _a.size, size = _b === void 0 ? "20px" : _b, _c = _a.color, color = _c === void 0 ? "white" : _c, _d = _a.disabled, disabled = _d === void 0 ? false : _d;
    return ({
        twitter: {
            icon: React__default["default"].createElement(Icon$j, { width: size, color: color }),
            backgroundColor: disabled ? theme.colors.dark500 : theme.colors.twitter,
        },
        telegram: {
            icon: React__default["default"].createElement(Icon$l, { width: size, color: color }),
            backgroundColor: disabled ? theme.colors.dark500 : theme.colors.telegram,
        },
    });
};

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var StyledWrapper = styled__default["default"].div(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"], ["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"])), function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $width = _a.$width, $height = _a.$height;
    return ($height / $width) * 100;
}, styledSystem.space);
var Wrapper$a = React.forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
    return (React__default["default"].createElement(StyledWrapper, __assign({ ref: ref, "$width": width, "$height": height }, props)));
});
var templateObject_1$P;

var Placeholder = styled__default["default"].div(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var templateObject_1$O;

var StyledImage = styled__default["default"].img(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, width = _a.width, height = _a.height, props = __rest(_a, ["src", "alt", "width", "height"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var observer;
        if (imgRef.current) {
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        setIsLoaded(true);
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(imgRef.current);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src]);
    return (React__default["default"].createElement(Wrapper$a, __assign({ ref: imgRef, height: height, width: width }, props), isLoaded ? React__default["default"].createElement(StyledImage, { src: src, alt: alt }) : React__default["default"].createElement(Placeholder, null)));
};
var templateObject_1$N;

var gift = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAABk7SURBVHgB5VwJcB3Vlb2v+2/6WqwNW5L3BS8IL2AbG+x4A8PM4IkxCVkmK4RKpUglg6sgs1SRBJIapqbGk5mYJBVmCMyQsJhAXHEqdhJwcMA2hph4X+RFsuVFkmXJ2v7e/eac193fX7ZgSGoke2peVav79+/f3e/0veeee99riQxdU/LHtdDatWvrtNaLsFTJ/6MWra6uLv0gBy5ZsiT02GOPzUwmk4sBUlwGrymc/499gIPfamtr47Nnzx6DzZC/K0zwysrKKkeNGlU5YsSI4uuuuy6yZs2aWzs7O5egE0UyOE1985vftAiSv1j8/H4/CMkQtrNnzybGjRt3btmyZTMARHNPT0+0qKioory8vCidTruJRKLv7rvvnrV48eIk9v1CKZWTQWgAxqzEp4OXXnpJ4ZoGNDRnoN9cEbNbsGBBaV1d3V2ZTCYZiUSkoqKi3HVdBxZXO2nSJPtptNdff/0sDnXkf6cpH5x++/iHIF1zzTWqtLRUHT9+XNXX1wusOgvA+v1gSC0qaPv27QvBgg4vX77841VVVRW4yQwsq3wY2oYNG56CtQ2DG3a2trb2Ffws/1AH6PQHao8++qgCCOqee+4hQII1QZLhw4db2C+4vDp37py1fft2G9dIFYJ1JYCywuFwDK4VT6VSJ+GKM3CTk7DP3rJlyyZ8PywejxfjcxTbCfFcJA8Obt50mNvf+MY3dLBNAA4cOKCxzxyH/RJsBy0ACdZq1jjeQuDgOgK3L8PDKYOlx3O5XBifXVzz9wFYVwIoFYvFLJ8P+OQ6AVo5+KoP2yECBne0HcchwRKEwJICwPIuE5wQgChaCIHgmq6EbXM8QSEYWHO/7Ny5k1ajAEQV3LwKkbUYDyuLz704vAsPr629vd3FPViPrB9eg32kgCsClAsQ0r29vcmurq5u27ar9+zZ8w7crRc3WYXF7e7uTkSj0ZwPgvkRALBgBXkCJhgEASScB4GNoBAMcg4+aq5hMQRHFi1aFAYfTpg+fbqAHx0A0oIlGQqFFACz+XsChO/stVuKql/dUf5y+ef1igvPqKYrARQ7mwAY5yENqk+dOvUullaA5+KmO7CuKi4ujtXU1CR9kAwg/B3WVmAdbD4YAn7LWxdAEUgQ2bhxo/kNeQdLeOXKlRNgwWFYbhuu10Fw8JAMQHgoFgBSBAiL/PpwrPTlzRPW2cWh+mybPIjzPGjLFWiwptzSpUtHz507t+7nP//5b/G0z3d0dJxFB06dOXNmV2VlZRSdovn3Mgo1NTXRVQQAqvPnz6tbbrnFrBmlstmsBTI2nYb8sPr6+hSPhwsrBIzI+PHjr8V3I3D+5l27drWSpPGdBXBsHMu1heNs0gDAs5563Rr+/V/Wv6JKwtOzLW62OtG1afUXit68IvIA/FHy9a9//dZDhw69sW7dugjcLULSBBBpWFLf/fffn/rxj39cjY7Ixz72sQ5aCFuh5dACaBXB52AbkdKAOGfOnEocPxognMa+Dlir+C5mgRLpejaErvBzp5THd7eOuq21I1fy/eeiD6hia7LVJvLtr+imO5a6Da+8Y//7lQDKfvzxx2esXr26G6R+jIoYVmQ3NDToBx54QAdRiQc+//zzEXQo8vDDDycIDPcxECAqaYCRV9K0Hq5hNcaSwEH1cOEEjmmyLEvBzY3FwZLNmgsAtI5mZ9Qf6Sj6/PEOa1Eio8adahRpOCaSaxH54WMi8eEij70ocuKkPDPkQN17773XIEWpBak24GO64CsViD8/ZBsg2trazBouYu6VgPX0FFlne8tjHeGyEbm0slsS0cq47j7nWqHS228I1eieM3t/czzTd0+9ZHp7LQDTpwgYrEc5cLnNzTM/05awPrv7rDW5pVPAW7DWmMjoMpH9v4ElfU3k5V0i77wLxdsNonNl11ADZbe0tIyFXsGtSTt3UAeRtAOQuI8kTTeDnjIgvdOUCG05MXaelujshGsvBabjEBEmZXImBNqOKyqHHQnAnsqK250FDeZ0NJfV7WlHEM7c846rknDOC0geuxzX/twFKLQM7iIGtXbz9SIfXwIBhy+f+C9cb6dIdxcu7OIBIY130vrCkEY96iSQL56bNBbuL7QkhnZEKYt8AnJWv2iace3xnvh3E1m1uCst2smJ6s2AkxCGbKBUVQJXQYfK0eFRw+AucYHtSFkmpyTjqpF9AC8atia1d5t+Sxqf92wXAf1J7RSRT91GaxXZfRwR8zBA2itCCwtHyIk47gLuu0jKh9SiANR48ERvSUkJrcm4WiEnMX1glKO70dV+3TJ39h/OhF7YfVJG2i48IOPmok72wLCIez6i3T1hy+lL9arO+vES+u2riXYdCRWlukO1ytGZWJFGpLMqKqqld2Rt+PopU+Pzc8gcM1h+93tc6zyABgeFAEgOIDoAx00CoNEeN/UcQgpRjJuMQM5oJAQyRA0g4ZZkMpb9TEP8lCTPS8y3uIMgQTGrV4/mos9uH7v+99ucuVYu+fK4iuSzN0zZe+zLK8q7ScQkZLhwEaxv2smTJ/fwtyB+WqI5D763draUDZ88YfgdZ/qKVrf3qPJt+2DKR0Te3QpwzuGgsHdvFizKrsbHGtHhalF0s5JOLemEllnXKhk5fGiVeT4dCEDinyBzD0CiJSF6WT/9w+Tpu7eqeTNqTyz84ep0I8O4ZVUaUYjwzvQnivUscN4ByIgQ+Ezxt+e6U+HnDtSvbO6N33Hygizo26hiPa0AphML3QiupywPGNYmbAh6uwILrCdUDMuBS4Pz5MEvKvnMApU3paEEKozOdRRakg+U0UeMZsi5hBqI/LTjzdDdTpnEnJqaa9LphpO+gKSCtsBztKZxAPYQNFiG+SHKNNZ/7B5z49aGYV891WYvyICDHGRvLtaayRCWENiR5kLQQiwu25572aih2jHvJrWfJL34tsgn5iPKEiE9REABHDwz6SgsjzBvY0pCayJIEOXGIkjkSDOs9Hk1WdWKnDwXWQU3epcuxUSZ7jUSDedykStmYGb20Y5I7JH/vO5r5xLhzzqsYGHRWRPWxQIYoYqE5Lqi2GdLvhQQMxYkKsxyRgFIfqnw0Cm4aKPoeZNEuTyPDE0rx2JqS36ZxGzyD9MQrgkSAUNybCwqHM2edXHT3efDn/vI96be7/OSBSBZQ49DpJ5p6CotfujlKbc99My0f2i5EP5sDm6lERFdLEUlWmrH9sq10/skA2SsSlusYSxdaPnECi0WGNNGVOOad0JQ+TsHhJ6DJeYgD559Q5AikfuGoMKJJ8/nNRIANfklEkWgWBKZMGGCFeglKm26F7ZtBEZr1bcnruwrKX0mSfeB5omE3d2lw5ztNRW6DAHwHNxrejodmppJSp3pBTpqwyKqa7Iysz4nC6Yq2dkUkU27LBPNXIA49zqR73wJZAl+uvVvQZiUu9oDie6pHW87qKtG8XifXy0yrWZoXI8jL53coDUhZTEgDXQgXY78Q8v64Rf3bnz4Z3M2tkjkzxO4+WzGmnm+DQuImdxCkiXstkXtpOXaiWkIRy133RyWY21F8q2XERwQ2RzYcQW46b5VIn99N6MhrAVAjAVHnT7uXdeA5PogBQvOm02JbIG2mjJiaICCJOwX7fJlWIhLCXI4WJYFfcXKgklUa2pK5NPz937lFwenrTnoRO9MWXbIhRtY6IAFkwLHqOJSRxbVp/XiekvdcVNU0o6S72zA+X8HMFgbBSB33CzyT19A0BjmgyKeG01CyH9jnxcBDUC64EuSPJAJg8d6cJ7kYLue73Y1sKTmgn2GF0nk1E4EikIT3GOzNhQUzpD42kiAQwz9P3u7amKrrn4kK2VLXJjSmGpXaqtD8qF6kfEjLLilyCbkZQ89hfyk3XOzIoSPB/5S5MsrPAXvas+SQMw6nRL1o1/CDdeRszywjAywvKhIXRUCf03DwNpX70QHigbfokiVfQPsNw9o//79/XQUwNIAySSwjHIUS8XlIyv/6q66z3elQotDuNtS3PSIyhDSEq9zrVDY//wSuGSDR8bsbA06+N2viEwfh4v3erqIkYupDsBSyAdlMr4LEThoX0Q+xehHci9CJBwJDpsKd5uJY8oQOpLO4ANFdZIo3OEX/Y2R++lK/jsCxFIIrY66KF4z6ZZotOx7jqOqy4q9nIyuh3xPmO+x8196RGTbDv8EvutMnYFKADioo8cHCbspG2hVWcdb4oiKKqpJcioM66vGMgq/mV6HNUToCLhqcdx7oj3pwZcHMRhFMvgw0PA1RSYbZQHrRiymoYAnEbgiQFqTyqhqukwW4CRwpi7kZZ3+0oYQ3tWB8yb8Jekte5DQdCa9DiYy+aqCWZjrpXMeX9460+OiqWNFPjJX5C7UB2dPwj2Bv4aViI6GPHCLooMP1GUDcIE1vdcPWMo1daOsFetNShE72pfxOt2VFN2d8rZpUUl0fAo6Jp7I1GYNENpOQywe8ayIFuVoP5hp38L8u7ppliM5AH0DEuEpI+GysKgSWFHY8zMjNHkOuvigAeUTeebS/aogDyeR+9XKy4CLqUyiL+MeYMfoKjnPZVTOvQgAg+iyZehY1Dt1/scAcNsfLkZ68QMuAdL+wtsYMRyitETrs10eOJb430sBp/knGEyL4nNJXbqTY3WUB2xIQVyqcNTJOayuWREoPNbNZF7xeul1MuhoYRs/Cppo0iUXwTGv/UpLT9JDD7/p/yCU9yeMy9VPdFXDQc89HQ8knSt4EH4AGHSg+k2y4ACC73pm/C0YLIDI1OQo5HIcYOBijk8n2qCIdKoQgIKVdxH04CMfvuzauq9Fya92aBloxoElnkXxucyc7UoTROUx1MkzWS8q6kJXdTwdNZhA8dy5y28znxAbeYChJUElQNOiLj1BidPaqdzsBmUNcBKRfAlk7o1Q31WXHIKzvfW6yrtZcHywQHuwZiWTR2mJF2vZfcQLGK4fOFKwsE5EzUZkAs9tHlygOGY44GwUSgSITI1cT48aNUpziKnwew5TsUFwip1rX0+HVF5HL4Lpb7HTJODFSy6/zn4MEOw+fPE4S3nik2kPF34OQ5x9aFbWDCScaveU+AkoljdQEl7zHEQpRGyyeXB1lL506owUzEkqbLSoo0ePclBBQyIgd4tr5H0aQLnXxKXtTDq3Q1mheYZrVMFZtOksRYf6KPK49etN5OtH6tuhsWZNDe7HMy7bzxM1kcI5/mKxJb/e6sqLv7MExoUhKy3jUeJZVq/kL1GTqqsYujJLvxbwFHO9I0eOCCMfRoc5/K3BW9CaLkHSXFuWm82kO78D5jDWmXc7ybuUAa8Sie/1sy5/CK9u8rRX4e/EtyozQAHUhpXY8tE7Ufpt0FJVnJEHPpmWr33alRW3QHTGPJIfTKDc9/uSgwqTJ0/WUOIGNBI6ZIL5DtFQoz7lcs4ACD4TT53YBbtptPr19mJjJ9jxT3ySG/35m3NUdu31fhWAa6mLawYDJEv6zgW2fOtvXPnkrVrq6yxt+RczVYpBBmrA2V6BO4KnzJppzMGDB802XI8zXQxI/MyJGyBcSghXZ/t+oFT/M6t+50VuhqGLYaMvgRFnemW9R9CFx1oFnAWwFK0rjI0oMmzbDinLUhc11ZUA6tIGFW6OQzJs1gSKC9yRE7nYCJaTbj/6GjrYHUStwgv4+zBaJfqey6WCNIDQm5ovvyHDVz6x07KoqyL4QMBoZTxvDn7XlXAGlczfy/VUUMBj5GtoaFALFy7UJHDOPxg7dqzLFAau6KI+ZUAiWjVVscSZ3s6/t+2Sz3F0HDCOTGb0RP+J62zOMbFxxjRHIhgFzSTURWTAbv/6fS1TIE4nze6WGVMUAHABjIW8zzFSwWH9xViQMrLcZfUF+2OxIkTV6ODVozg/HIAk3uPrYPKpevLJJ20AZaqa4CabBTzWpDBkFYYrRpAkj0CFoRPEHjp9+nQx9JaZqJHQ0dKmzMQXYHy17B6+V17q4cqhppC8tcOSxoaQdDRH8+Ve9r6o1JXH/6ULQ+mooStLu9pV3jijXDbKiXELVCwiUhILDarrvd9DCHiKqQstiHUoXVVVxW2XpM7ol0gkspy/RKuChTnNzc1FsDyOvDgldravOuo+WxxHzd2ru0sxxsBLoOxvnBaS+z/lytJVfX6NhU/GFOh0KmHJocPFzDMlFA7xAXE2jFnAhf7a+2wIHQgONpk77/VWQLA/mHZIzUSwKBP4maQO4MzCqEdS37t3bznnT5HYCRSXuN3623hUpTCshyonOxniWkXQySIUr26bFZNR4/1emrzFkxIbNkSMu4WgzENwPzu/2KyJGYCwaG4zCRp0oD7AMZwPpZH36dmzZ/ezKuR+8uabb0b27dtXtHXr1mhjY2Md5EQnwHRoYehErsLqbY2q9E/D6BjIF6RssQ5nACBoRbGw/NmKyxO1VozZNbfYBhjbgGWb3xrQ/PMoo06954wnPuiCc0CLokTwF86oU/Pnzy/GOkar4rTlbdu2hZ5++umqAwcOjIMoHX348OE5SGvKkBtGaV1sBIwtrrt/CYMyIhv9NAV5k8dhRxgxfxaKc8zlPIXqubwD7F7c4N2d5YNCi1LKumhRyjJkzu+geweVzJnrEQz3fY7JS8hVq1aVYXh8BNU50hgHbjYaqc3YMWPG1MHdJsGiXgNfnZwxY0bbrFmzsqx3wQLDsAj7XHTm97KOvdAMpOiLNSUHHWQ0e/oFV177WbhfAqXLHHlyrZayYrtf6Ub7nMQGojeHAzx9xZQ5W0EuqNH57vvuu+8ojCVbXV29BEJ0+cSJE2/EMgfjgOMxYjMGo8XVACwGqyOfGZ6iG0Z1308pGAPlHSyBG82Zq73R0cJr99iycYuHaKE2owXRooIKg+9+atCAGiAhfq/jzNp/q4CudwHVhH1ww25Yzw0LFixYyDewYGlVeNoEKUIxSoC4ELDiZPM2S7nHCkEyluCBpadPtGXq7FxgTTr4u2mzp5+M4hoAsEKeGvKa+UDHEFSCRLnQ0tLCSEdC7zhz5swRaKgOWFIWYXw8XLCSwPCtK2wbyUAxGonkEpHshR9QYRdaFRs3aVW33GYFQOXpJnUqJAeOXF4BvVjvyoN1YVCB+oBWFbz+FUiDNORCF6zqNHRTJyLeazt27Njc3t7+Bgj9PERp3ebNm6suXLjAGcBUizmCJ51HtyDz6GaK5ldR+rng/Gki5bWX3A7i8qZf+RZjKclr+YuWGXxuuiJllkta8I4L0xoXUiEDK2qDZTWj+nnmrbfeem3Pnj1v45Bj4K9dixcvfqeurq57165dcUTFMMGiVVVURJOWm/yRDxTH/wKwTEQsjVmycoV72ZUP77OkN+Fzle9oKn9X3g7E5yGfFfw/NXM/69ats5544okxfOkRLtiDCOjOmzdPL1++vBeknuJLRYh4nDjL19minA7EKNgtleNToVHrIVvDjOhB9OKsYUbA062u/N1DtqSTBVeEqXzqC658+A5fClwyemECpXbvvSKveLxPMzkgIp7+yU9+wjdDjwKgnttvv70XQ++9c+bMKYZESHG2MEdvkPMxeebrH2bqkMp09aTsqlGu2NO8s+XrdCaCIdNRZ9u0nGwssA/tlWAWfchkweY4ffGn5vsey7r3anC9wmaIHUCFIQPOg+AduFoOtfUc9jlwsyQnbTDVgXLX4CmXhO7ngjkKUaen+amILS7zOuW7Ibd5ckgIPe9moRUFc1dMO7RfyW4W94K8LgibYjTqM/feMMhk/qc2JMXh48eP9wTpDffx/TuUZRKQCmGmOACM4Lgs8lEuUFsRtGui3SdEO9sRGgypAxTXbPu6aNYMca+9Lu9fHmCgrrffMWmzLoiW4DaFtMp6lJ+vNtczjSDoggmfrFlxWIuuBn5ibT0C93P9l4BMBYATPDhOCNDw8IuOO3b8w4afXQkUow5cqhuktW9n3kbM961tHMnB0FVMSZ7QRf7tnrnqRW5clRYlnI3j54Joxqq4MBeEVZlhegxGmEEJcBfdj6+sGf0FMHOl6vR+ZeUOkptZk+OakhKddZkPLrkJxbJKHbifmUaW7BWXQ1auV7ujZTWuukGtDm7oagXKtAKj0hyGZzmGHwBQAuOBYdasAIwD0BwU+HKBUqdFhjNda1nJZb2SU8cJGO2Ln4eV2u7Ny3PB1ASTFhLITZuUk8ka+dnoJuXWwnu5qoEqFKwBXwV1K/BYCkkzX0kzw1uoiBqlzgVywomljr1lq9x+AgSycjityuLaMsC5C+coJxwLynrG4tzTTeIeOqaOq5zcvepm1VR4L1c1UAUtT760KtatCAxBoqYCeKy4aGgqJ0htsD9j57rXwNVSACgnypscRCvDWJ4zZYzlzJzj+rPS/cWVxn98TJavnK32XHoD/1eAyjcOSKCgZ4biAUoGAxCUB9RSeRdkUY9RMJ46tlPSnQ+GVGZL2NL7Q5ZuQe0KtRnJRkJWbtlSDKraPoBa1pZomZc6qE4MdN0r8g8i/sSWryaxzs65ntxG7SrDd4c5D5SkzolofuLMz1ImR7cXR4p3cPIsX4PrsyqrMnxVJDxswk3Xh6pqx5SqtsbQC6lGdTLzPhe/2lKY92yF9Xe+2h9M5g9eNOKsYo7ecGYxhGiI2xy54aRZviuD/SHObWAFFcdzgCJx6NChblRWP9C/NflvpDksv9EFP0sAAAAASUVORK5CYII=";

var Wrapper$9 = styled__default["default"](Box)(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  cursor: ", ";\n  transition: opacity .3s ease-in-out;\n\n  opacity: ", ";\n  \n  &:hover {\n    opacity: ", ";\n  },\n"], ["\n  position: relative;\n  width: ", ";\n  cursor: ", ";\n  transition: opacity .3s ease-in-out;\n\n  opacity: ", ";\n  \n  &:hover {\n    opacity: ", ";\n  },\n"])), function (_a) {
    var width = _a.width;
    return width !== null && width !== void 0 ? width : "auto";
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0.3 : 1);
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? 0.3 : 0.84);
});
var GiftWrap = styled__default["default"](Flex)(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  width: 37px;\n  height: 32px;\n  bottom: 0;\n  right: 0;\n"], ["\n  display: ", ";\n  position: absolute;\n  width: 37px;\n  height: 32px;\n  bottom: 0;\n  right: 0;\n"])), function (_a) {
    var withGift = _a.withGift;
    return (withGift ? "block" : "none");
});
var SocialShareButton = function (_a) {
    var _b = _a.social, social = _b === void 0 ? socials$1.TELEGRAM : _b, link = _a.link, name = _a.name, message = _a.message, _c = _a.scale, scale = _c === void 0 ? "lg" : _c, _d = _a.target, target = _d === void 0 ? "_blank" : _d, _e = _a.width, width = _e === void 0 ? "auto" : _e, withGift = _a.withGift, disabled = _a.disabled, props = __rest(_a, ["social", "link", "name", "message", "scale", "target", "width", "withGift", "disabled"]);
    var theme = styled.useTheme();
    var defaultName = social.charAt(0).toUpperCase() + social.slice(1);
    var _f = socialStyles({ theme: theme, disabled: disabled })[social], icon = _f.icon, backgroundColor = _f.backgroundColor;
    return (React__default["default"].createElement(Wrapper$9, __assign({ disabled: disabled, width: width }, props),
        React__default["default"].createElement(Button$2, __assign({ as: "a", href: socialLinks[social]({ link: link, message: message }), scale: scale, startIcon: icon, style: { backgroundColor: backgroundColor, pointerEvents: disabled ? "none" : "auto" }, target: target, width: "100%", external: true, pr: withGift ? "20px" : "16px" }, props), name || defaultName),
        React__default["default"].createElement(GiftWrap, { withGift: withGift },
            React__default["default"].createElement(Image, { width: 37, height: 32, src: gift }))));
};
var templateObject_1$M, templateObject_2$q;

var Icons$1 = IconModule;
var IconComponent = function (_a) {
    var iconName = _a.iconName, props = __rest(_a, ["iconName"]);
    var IconElement = Icons$1["".concat(iconName, "Icon")];
    return IconElement ? React__default["default"].createElement(IconElement, __assign({}, props)) : null;
};

var SocialShareButtonCircle = function (_a) {
    var social = _a.social, label = _a.label, link = _a.link, message = _a.message, _b = _a.color, color = _b === void 0 ? "white" : _b, _c = _a.width, width = _c === void 0 ? "24px" : _c, props = __rest(_a, ["social", "label", "link", "message", "color", "width"]);
    return (React__default["default"].createElement(Flex, __assign({ as: "a", href: socialLinks[social]({ link: link, message: message }), target: "_blank", alignItems: "center", justifyContent: "center" }, props),
        React__default["default"].createElement(IconComponent, { iconName: label, width: width, color: color })));
};

var PromotedGradient = styled.keyframes(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"], ["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"])));
/**
 * Priority: Warning --> Success --> Active
 */
var getBorderColor = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, borderBackground = _a.borderBackground, theme = _a.theme;
    if (borderBackground) {
        return borderBackground;
    }
    if (isWarning) {
        return theme.colors.warning;
    }
    if (isSuccess) {
        return theme.colors.success;
    }
    if (isActive) {
        return "linear-gradient(180deg, ".concat(theme.colors.telegram, ", ").concat(theme.colors.secondary, ")");
    }
    return theme.colors.white;
};
var StyledCard = styled__default["default"].div(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"])), getBorderColor, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "gray900" : "gray900"];
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && styled.css(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "], ["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "])), PromotedGradient);
}, styledSystem.space);
var StyledCardInner = styled__default["default"](Box)(templateObject_4$g || (templateObject_4$g = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"])), function (_a) {
    var hasCustomBorder = _a.hasCustomBorder;
    return hasCustomBorder ? "initial" : "inherit";
}, function (_a) {
    var theme = _a.theme, background = _a.background;
    return background !== null && background !== void 0 ? background : theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
});
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$L, templateObject_2$p, templateObject_3$j, templateObject_4$g;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, background = _a.background, props = __rest(_a, ["ribbon", "children", "background"]);
    return (React__default["default"].createElement(StyledCard, __assign({}, props),
        React__default["default"].createElement(StyledCardInner, { background: background, hasCustomBorder: !!props.borderBackground },
            ribbon,
            children)));
};

var CardBody = styled__default["default"].div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$K;

var CardHeader = styled__default["default"].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.radii.card, " ").concat(theme.radii.card, " 0 0");
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$J;

var CardFooter = styled__default["default"].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$I;

var baseColors = {
    // failure: "#F93B5D",
    // primaryBright: "#53DEE9",
    // primaryDark: "#0098A1",
    // dark: "#102648",
    //BS
    primary: "#1263F1",
    secondary: "#F93B5D",
    success: "#1DC872",
    warning: "#FFDB1C",
    boost: "#7412F1",
    backgroundDark: "#07162D",
    backgroundLight: "#F9FAFD",
    white: "#FFFFFF",
    pastelBlue: "#749BD8",
    tooltip: "#040C1A",
};
var brandColors = {
    binance: "#F0B90B",
    polygon: "#8247E5",
    telegram: "#239FDB",
    twitter: "#16CDFD",
};
var additionalColors = {
    // overlay: "#452a7a",
    // gold: "#FFC700",
    // silver: "#B2B2B2",
    // bronze: "#E7974D",
    //BS
    primaryHover: "#2E7AFF",
    primaryPress: "#004ACC",
    secondaryHover: "#FF506F",
    secondaryPress: "#E12446",
    successHover: "#38DC89",
    successPress: "#08B66D",
    warningHover: "#FEE560",
    warningPress: "#FFCD1C",
    boostHover: "#8E35FF",
    boostPress: "#6205D9",
    //---button additional colors
    btnTertiary: "rgba(18, 99, 241, 0.16)",
    btnTertiaryOut: "rgba(18, 99, 241, 0.16)",
    btnTertiaryOutPress: "rgba(18, 99, 241, 0.24)",
    btnLightOutBorder: "rgba(255, 255, 255, 0.24)",
    btnLightOutBgHover: "rgba(255, 255, 255, 0.24)",
    btnLightOutBgPress: "rgba(255, 255, 255, 0.32)",
    btnLight: "rgba(255, 255, 255, 0.24)",
    toggleBg: "rgba(116, 155, 216, 0.16);",
    //---Dark palette
    dark900: "#021127",
    dark800: "#07162D",
    dark700: "#071C3C",
    dark600: "#102648",
    dark500: "#1C3254",
    dark400: "#2A436A",
    dark300: "#3F5880",
    dark200: "#546F99",
    dark100: "#637FA9",
    //---LightPalette
    gray900: "#708DB7",
    gray800: "#83A0C9",
    gray700: "#9AB2D3",
    gray600: "#B5C6DE",
    gray500: "#C8D4E6",
    gray400: "#DFE7F2",
    gray300: "#E7EEF6",
    gray200: "#F2F6FC",
    gray100: "#F9FAFD",
};
var badgeSpecialColors = {
    successOpacity: "rgba(29, 200, 114, 0.16)",
    secondaryOpacity: "rgba(249, 59, 93, 0.16)",
    primaryOpacity: "rgba(18, 99, 241, 0.16)",
    warningOpacity: "rgba(255, 205, 28, 0.16)",
};
var lightColors = __assign(__assign(__assign(__assign({}, baseColors), additionalColors), brandColors), badgeSpecialColors);
var darkColors = __assign(__assign(__assign(__assign({}, baseColors), additionalColors), brandColors), badgeSpecialColors);

var light$6 = {
    background: lightColors.white,
};
var dark$6 = {
    background: darkColors.white,
};

var light$5 = {
    background: lightColors.white,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        blue: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        violet: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$5 = {
    background: darkColors.white,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        blue: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        violet: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$4 = {
    handleBackground: lightColors.white,
};
var dark$4 = {
    handleBackground: darkColors.white,
};

var light$3 = {
    handleBackground: lightColors.white,
};
var dark$3 = {
    handleBackground: darkColors.white,
};

var light$2 = {
    background: baseColors.backgroundDark,
};
var dark$2 = {
    background: baseColors.backgroundDark,
};

var light$1 = {
    background: lightColors.white,
};
var dark$1 = {
    background: darkColors.white,
};

var light = {
    background: darkColors.white,
    text: darkColors.gray900,
    boxShadow: shadows.tooltip,
};
var dark = {
    background: lightColors.white,
    text: lightColors.gray900,
    boxShadow: shadows.tooltip,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$6, colors: darkColors, card: dark$5, toggle: dark$3, nav: dark$2, modal: dark$1, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$6, colors: lightColors, card: light$5, toggle: light$3, nav: light$2, modal: light$1, radio: light$4, tooltip: light });

var Arrow = styled__default["default"].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
});
var StyledTooltip = styled__default["default"].div(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 16px;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 8px 12px;\n  font-size: 12px;\n  line-height: 16px;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$H, templateObject_2$o;

var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var useTooltip = function (content, options) {
    var _a = useMatchBreakpoints(), isMobile = _a.isMobile, isTablet = _a.isTablet;
    var _b = options.placement, placement = _b === void 0 ? "auto" : _b, _c = options.trigger, trigger = _c === void 0 ? isMobile || isTablet ? "click" : "hover" : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = React.useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = React.useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = React.useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = React.useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = React.useRef(false);
    var hideTimeout = React.useRef();
    var hideTooltip = React.useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = React.useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    React.useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    React.useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    React.useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    React.useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    React.useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = reactPopper.usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React__default["default"].createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React__default["default"].createElement(styled.ThemeProvider, { theme: invertTheme }, content),
        React__default["default"].createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var portal = getPortalRoot();
    var tooltipInPortal = portal ? reactDom.createPortal(tooltip, portal) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

exports.CarouselButtonsTypes = void 0;
(function (CarouselButtonsTypes) {
    CarouselButtonsTypes["PRIMARY"] = "primary";
    CarouselButtonsTypes["WHITE"] = "white";
    CarouselButtonsTypes["GRAY_OPACITY"] = "grayOpacity";
})(exports.CarouselButtonsTypes || (exports.CarouselButtonsTypes = {}));

var NavButton = styled__default["default"](IconButton)(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  width: 32px;\n  height: 32px;\n"], ["\n  width: 32px;\n  height: 32px;\n"])));
var CarouselHeader = function (_a) {
    var handleNav = _a.handleNav, title = _a.title, showNavButtons = _a.showNavButtons;
    var isMobile = useMatchBreakpoints().isMobile;
    return (React__default["default"].createElement(Container$1, null,
        React__default["default"].createElement(Flex, { position: "relative", justifyContent: title ? "space-between" : "flex-end", mb: isMobile ? "24px" : "32px", alignItems: isMobile ? "flex-end" : "flex-start" },
            title && (React__default["default"].createElement(BodyText, { scale: isMobile ? "size24" : "size32", color: "white" }, title)),
            showNavButtons && (React__default["default"].createElement(Flex, { ml: "8px" },
                React__default["default"].createElement(NavButton, { scale: "xs", variant: "primary", onClick: function () {
                        handleNav("prev");
                    } },
                    React__default["default"].createElement(Icon$38, { color: "white" })),
                React__default["default"].createElement(NavButton, { scale: "xs", variant: "primary", ml: "8px", onClick: function () {
                        handleNav("next");
                    } },
                    React__default["default"].createElement(Icon$3b, { color: "white" })))))));
};
var templateObject_1$G;

var commonStyling = styled.css(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  ", " {\n    margin-bottom: 32px;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  ", " {\n    margin-bottom: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Numbers = styled__default["default"].div(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -2px;\n  right: -2px;\n  z-index: 2;\n  ", ";\n  margin-bottom: 0;\n  ", " {\n    margin-bottom: 0;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: -2px;\n  right: -2px;\n  z-index: 2;\n  ", ";\n  margin-bottom: 0;\n  ", " {\n    margin-bottom: 0;\n  }\n"])), commonStyling, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var NumberItem = styled__default["default"].button(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n  display: flex;\n  width: 40px;\n  height: 40px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    cursor: pointer;\n    border: initial;\n    background: linear-gradient(\n      235deg,\n      #336ff5 4.05%,\n      rgba(17, 81, 225, 0.32) 103.52%\n    );\n  }\n"], ["\n  display: flex;\n  width: 40px;\n  height: 40px;\n  border: 1px solid ", ";\n  box-sizing: border-box;\n  border-radius: 50%;\n  background: ", ";\n  color: ", ";\n\n  &:hover {\n    cursor: pointer;\n    border: initial;\n    background: linear-gradient(\n      235deg,\n      #336ff5 4.05%,\n      rgba(17, 81, 225, 0.32) 103.52%\n    );\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark500;
}, function (_a) {
    var isActive = _a.isActive;
    return isActive
        ? "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)"
        : "transparent";
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? theme.colors.white : "none");
});
// for background (fake elements placed under real Numbers block with glide navigation)
var NumbersBackground = styled__default["default"].div(templateObject_4$f || (templateObject_4$f = __makeTemplateObject(["\n  ", ";\n  height: 40px;\n  position: relative;\n  background: transparent;\n"], ["\n  ", ";\n  height: 40px;\n  position: relative;\n  background: transparent;\n"])), commonStyling);
var DummyBlock = styled__default["default"].div(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n"], ["\n  width: 40px;\n  height: 40px;\n  background-color: transparent;\n"])));
var Line = styled__default["default"].div(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n  height: 0;\n  border-top: 2px dotted ", ";\n  flex: 1;\n  margin: 0 8px;\n  ", " {\n    margin: 0 16px;\n  }\n  &:last-of-type {\n    display: none;\n  }\n"], ["\n  height: 0;\n  border-top: 2px dotted ", ";\n  flex: 1;\n  margin: 0 8px;\n  ", " {\n    margin: 0 16px;\n  }\n  &:last-of-type {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark500;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var CarouselNumbersBlock = function (_a) {
    var dataLength = _a.dataLength, scrollToHandle = _a.scrollToHandle, selectedIndex = _a.selectedIndex;
    var indexes = dataLength
        ? Array.from({ length: dataLength }, function (v, i) { return i; })
        : [];
    return (React__default["default"].createElement(NumbersBackground, null,
        React__default["default"].createElement(Numbers, null, indexes.map(function (item, index) { return (React__default["default"].createElement(NumberItem, { key: item.toString(), isActive: index === selectedIndex, type: "button", onClick: function () { return scrollToHandle(index); } },
            React__default["default"].createElement(BodyText, { m: "auto", color: "pastelBlue" }, index + 1))); })),
        indexes.map(function (item) { return (React__default["default"].createElement(React.Fragment, { key: item.toString() },
            React__default["default"].createElement(DummyBlock, { key: item.toString() }),
            React__default["default"].createElement(Line, null))); })));
};
var templateObject_1$F, templateObject_2$n, templateObject_3$i, templateObject_4$f, templateObject_5$a, templateObject_6$7;

var ArrowButton = styled__default["default"].button(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  background: rgba(255, 255, 255, 0.2);\n  height: 32px;\n  border: 0;\n  box-shadow: none;\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 0 6px;\n"], ["\n  background: rgba(255, 255, 255, 0.2);\n  height: 32px;\n  border: 0;\n  box-shadow: none;\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  border-radius: 8px;\n  padding: 0 6px;\n"])));
var Wrap = styled__default["default"](ArrowButton)(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  left: 4px;\n  transform: translate(0, -50%);\n\n  ", "\n"], ["\n  left: 4px;\n  transform: translate(0, -50%);\n\n  ", "\n"])), function (_a) {
    var isNextButton = _a.isNextButton;
    return isNextButton && styled.css(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n      right: 4px;\n      left: unset;\n    "], ["\n      right: 4px;\n      left: unset;\n    "])));
});
var DirectionButton = function (_a) {
    var enabled = _a.enabled, onClick = _a.onClick, iconName = _a.iconName, isNextButton = _a.isNextButton;
    return (React__default["default"].createElement(Wrap, { onClick: onClick, disabled: !enabled, isNextButton: isNextButton },
        React__default["default"].createElement(IconComponent$1, { iconName: iconName, color: "white", height: "32px" })));
};
var templateObject_1$E, templateObject_2$m, templateObject_3$h;

var Button$1 = styled__default["default"].button(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: ", ";\n  border: 0;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.3s ease;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: ", ";\n  border: 0;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.3s ease;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var ArrowSquarePrimary = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return React__default["default"].createElement(Button$1, { onClick: onClick }, children);
};
var templateObject_1$D;

var Button = styled__default["default"].button(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: ", ";\n  border: 0;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.3s ease;\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  background: ", ";\n  border: 0;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  transition: opacity 0.3s ease;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ArrowSquareWhite = function (_a) {
    var onClick = _a.onClick, children = _a.children;
    return React__default["default"].createElement(Button, { onClick: onClick }, children);
};
var templateObject_1$C;

var DotButton = styled__default["default"].button(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  width: 4px;\n  height: 4px;\n  background: ", ";\n  border: 0;\n  box-shadow: none;\n  border-radius: 50%;\n  padding: 0;\n  margin-right: 8px;\n  cursor: pointer;\n  opacity: ", ";\n  transition: opacity 0.4s ease-in-out;\n"], ["\n  width: 4px;\n  height: 4px;\n  background: ", ";\n  border: 0;\n  box-shadow: none;\n  border-radius: 50%;\n  padding: 0;\n  margin-right: 8px;\n  cursor: pointer;\n  opacity: ", ";\n  transition: opacity 0.4s ease-in-out;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
}, function (_a) {
    var selected = _a.selected;
    return (selected ? "1" : ".32");
});
var Dot = function (_a) {
    var selected = _a.selected, onClick = _a.onClick;
    return React__default["default"].createElement(DotButton, { selected: selected, type: "button", onClick: onClick });
};
var templateObject_1$B;

var NavWrapper = styled__default["default"](Flex)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: absolute;\n  width: 100%;\n  justify-content: space-between;\n  left: 0;\n  top: 50%;\n  padding: ", ";\n  opacity: 0;\n  transition: opacity 0.4s ease-in-out;\n\n  > * {\n    transform: translate(0, -50%);\n  }\n"], ["\n  position: absolute;\n  width: 100%;\n  justify-content: space-between;\n  left: 0;\n  top: 50%;\n  padding: ", ";\n  opacity: 0;\n  transition: opacity 0.4s ease-in-out;\n\n  > * {\n    transform: translate(0, -50%);\n  }\n"])), function (_a) {
    var navPadding = _a.navPadding;
    return (navPadding ? "0 ".concat(navPadding, "px") : "0");
});
var Embla = styled__default["default"].div(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n  &:hover ", " {\n    opacity: 1;\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  margin: 0;\n  padding: 0;\n\n  &:hover ", " {\n    opacity: 1;\n  }\n"])), NavWrapper);
var Viewport = styled__default["default"].div(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  overflow: hidden;\n  width: 100%;\n"], ["\n  overflow: hidden;\n  width: 100%;\n"])));
var Container = styled__default["default"](Flex)(templateObject_4$e || (templateObject_4$e = __makeTemplateObject(["\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  align-items: ", ";\n  margin: ", ";\n"], ["\n  user-select: none;\n  -webkit-touch-callout: none;\n  -webkit-tap-highlight-color: transparent;\n  align-items: ", ";\n  margin: ", ";\n"])), function (_a) {
    var alignItem = _a.alignItem;
    return alignItem;
}, function (_a) {
    var gap = _a.gap;
    return (gap === 0 ? "0" : gap > 0 ? "0 -".concat(gap / 2, "px") : "0");
});
var useCarousel = function (_a) {
    var data = _a.data, Slide = _a.Slide, title = _a.title, _b = _a.slidesToScroll, slidesToScroll = _b === void 0 ? 1 : _b, _c = _a.isDraggable, isDraggable = _c === void 0 ? false : _c, _d = _a.withDots, withDots = _d === void 0 ? false : _d, _e = _a.withNavButtons, withNavButtons = _e === void 0 ? false : _e, _f = _a.navButtonsType, navButtonsType = _f === void 0 ? exports.CarouselButtonsTypes.GRAY_OPACITY : _f, _g = _a.navPadding, navPadding = _g === void 0 ? 0 : _g, _h = _a.withNavButtonsHeader, withNavButtonsHeader = _h === void 0 ? false : _h, _j = _a.showNumberBlock, showNumberBlock = _j === void 0 ? false : _j, _k = _a.position, position = _k === void 0 ? "center" : _k, _l = _a.isAutoplay, isAutoplay = _l === void 0 ? false : _l, _m = _a.alignItem, alignItem = _m === void 0 ? "normal" : _m, _o = _a.breakpoints, breakpoints = _o === void 0 ? {} : _o, _p = _a.slideProps, slideProps = _p === void 0 ? {} : _p, _q = _a.loop, loop = _q === void 0 ? true : _q, _r = _a.marginDots, marginDots = _r === void 0 ? "24px" : _r, _s = _a.slideGap, slideGap = _s === void 0 ? 32 : _s, _t = _a.speed, speed = _t === void 0 ? 10 : _t, _u = _a.delay, delay = _u === void 0 ? 8000 : _u;
    var autoplay = isAutoplay ? [Autoplay__default["default"]({ delay: delay })] : [];
    var isMobile = useMatchBreakpoints().isMobile;
    var _v = useEmblaCarousel__default["default"]({
        loop: loop,
        draggable: isDraggable,
        speed: speed,
        slidesToScroll: slidesToScroll,
        skipSnaps: false,
        align: position,
        breakpoints: breakpoints,
    }, autoplay), viewportRef = _v[0], embla = _v[1];
    var _w = React.useState(false), prevBtnEnabled = _w[0], setPrevBtnEnabled = _w[1];
    var _x = React.useState(false), nextBtnEnabled = _x[0], setNextBtnEnabled = _x[1];
    var _y = React.useState(0), selectedIndex = _y[0], setSelectedIndex = _y[1];
    var _z = React.useState([]), scrollSnaps = _z[0], setScrollSnaps = _z[1];
    var reInit = React.useCallback(function () { return embla && embla.reInit(); }, [embla]);
    var scrollPrev = React.useCallback(function () { return embla && embla.scrollPrev(); }, [embla]);
    var scrollNext = React.useCallback(function () { return embla && embla.scrollNext(); }, [embla]);
    var scrollTo = React.useCallback(function (index) { return embla && embla.scrollTo(index); }, [embla]);
    var PRIMARY = exports.CarouselButtonsTypes.PRIMARY, WHITE = exports.CarouselButtonsTypes.WHITE;
    var onSelect = React.useCallback(function () {
        if (!embla)
            return;
        setSelectedIndex(embla.selectedScrollSnap());
        setPrevBtnEnabled(embla.canScrollPrev());
        setNextBtnEnabled(embla.canScrollNext());
        isMobile &&
            (slideProps === null || slideProps === void 0 ? void 0 : slideProps.selectHandle) &&
            (slideProps === null || slideProps === void 0 ? void 0 : slideProps.selectHandle(embla.selectedScrollSnap()));
    }, [embla, setSelectedIndex, isMobile, slideProps]);
    React.useEffect(function () {
        if (!embla)
            return;
        setScrollSnaps(embla.scrollSnapList());
    }, [embla]);
    React.useEffect(function () {
        if (!embla)
            return;
        onSelect();
        embla.on("select", onSelect);
    }, [embla, setScrollSnaps, onSelect]);
    var renderSlides = function () {
        return data === null || data === void 0 ? void 0 : data.map(function (item, index) { return (React__default["default"].createElement(Slide, __assign({ key: "key-".concat(index), index: index, selectedIndex: selectedIndex }, item, slideProps, { reInit: reInit }))); });
    };
    var handleDirectionClick = function (direction) {
        if (embla)
            direction === "next" ? embla.scrollNext() : embla.scrollPrev();
    };
    var scrollToHandle = function (index) {
        if (embla) {
            embla.scrollTo(index);
            setSelectedIndex(index);
        }
    };
    var renderNav = function (navType) {
        switch (navType) {
            case PRIMARY:
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(ArrowSquarePrimary, { onClick: scrollPrev },
                        React__default["default"].createElement(Icon$38, { width: "16px", color: "white" })),
                    React__default["default"].createElement(ArrowSquarePrimary, { onClick: scrollNext },
                        React__default["default"].createElement(Icon$3b, { width: "16px", color: "white" }))));
            case WHITE:
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(ArrowSquareWhite, { onClick: scrollPrev },
                        React__default["default"].createElement(Icon$38, { width: "16px", color: "dark900" })),
                    React__default["default"].createElement(ArrowSquareWhite, { onClick: scrollNext },
                        React__default["default"].createElement(Icon$3b, { width: "16px", color: "dark900" }))));
            default:
                return (React__default["default"].createElement(React__default["default"].Fragment, null,
                    React__default["default"].createElement(DirectionButton, { iconName: "ChevronLeft", onClick: scrollPrev, enabled: prevBtnEnabled }),
                    React__default["default"].createElement(DirectionButton, { iconName: "ChevronRight", onClick: scrollNext, enabled: nextBtnEnabled, isNextButton: true })));
        }
    };
    var showHeader = title || withNavButtonsHeader;
    var carouselComponent = function () { return (React__default["default"].createElement(Box, null,
        showHeader && (React__default["default"].createElement(CarouselHeader, { title: title, handleNav: handleDirectionClick, showNavButtons: withNavButtonsHeader })),
        showNumberBlock && (React__default["default"].createElement(CarouselNumbersBlock, { dataLength: data === null || data === void 0 ? void 0 : data.length, selectedIndex: selectedIndex, scrollToHandle: scrollToHandle })),
        (data === null || data === void 0 ? void 0 : data.length) && (React__default["default"].createElement(Embla, null,
            React__default["default"].createElement(Viewport, { ref: viewportRef },
                React__default["default"].createElement(Container, { gap: slideGap, alignItem: alignItem }, renderSlides())),
            withNavButtons && (React__default["default"].createElement(NavWrapper, { navPadding: navPadding }, renderNav(navButtonsType))))),
        withDots && (React__default["default"].createElement(Flex, { alignItems: "center", justifyContent: "center", marginTop: marginDots }, scrollSnaps.map(function (_, index) { return (React__default["default"].createElement(Dot, { key: index.toString(), selected: index === selectedIndex, onClick: function () { return scrollTo(index); } })); }))))); };
    return [carouselComponent, scrollNext, scrollPrev];
};
var templateObject_1$A, templateObject_2$l, templateObject_3$g, templateObject_4$e;

var useOnClickOutside = function (ref, handler) {
    React.useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener, { passive: true });
        document.addEventListener("touchstart", listener, { passive: true });
        return function () {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, 
    // It's worth noting that because passed in handler is a new ...
    // ... function on every render that will cause this effect ...
    // ... callback/cleanup to run every render. It's not a big deal ...
    // ... but to optimize you can wrap handler in useCallback before ...
    // ... passing it into this hook.
    [ref, handler]);
};

var QuestionWrapper = styled__default["default"](Flex)(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  align-items: center;\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n\n  ", "\n"], ["\n  align-items: center;\n  cursor: pointer;\n  transition: opacity 0.3s ease-in-out;\n\n  ", "\n"])), function (_a) {
    var showTooltip = _a.showTooltip;
    return showTooltip && styled.css(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n      :hover,\n      :focus {\n        opacity: 0.7;\n      }\n    "], ["\n      :hover,\n      :focus {\n        opacity: 0.7;\n      }\n    "])));
});
var TooltipHelper = function (_a) {
    var text = _a.text, _b = _a.placement, placement = _b === void 0 ? "auto" : _b, _c = _a.size, size = _c === void 0 ? "16px" : _c, _d = _a.color, color = _d === void 0 ? "pastelBlue" : _d, trigger = _a.trigger, _e = _a.Icon, Icon = _e === void 0 ? Icon$2D : _e, _f = _a.ml, ml = _f === void 0 ? "4px" : _f, children = _a.children, _g = _a.showTooltip, showTooltip = _g === void 0 ? true : _g, props = __rest(_a, ["text", "placement", "size", "color", "trigger", "Icon", "ml", "children", "showTooltip"]);
    var _h = useTooltip(text, {
        placement: placement,
        trigger: trigger,
    }), targetRef = _h.targetRef, tooltip = _h.tooltip, tooltipVisible = _h.tooltipVisible;
    return (React__default["default"].createElement(Box, __assign({ ml: ml }, props),
        tooltipVisible && tooltip,
        React__default["default"].createElement(QuestionWrapper, { ref: targetRef, showTooltip: showTooltip }, children !== null && children !== void 0 ? children : React__default["default"].createElement(Icon, { color: color, width: size }))));
};
var templateObject_1$z, templateObject_2$k;

var ViewMode = {
    TABLE: "table",
    CARD: "card",
};

var TableCardSkeleton = function (_a) {
    var _b = _a.viewMode, viewMode = _b === void 0 ? ViewMode.CARD : _b, _c = _a.number, number = _c === void 0 ? 6 : _c, _d = _a.tableHeight, tableHeight = _d === void 0 ? "72px" : _d, _e = _a.cardHeight, cardHeight = _e === void 0 ? "352px" : _e;
    if (viewMode === ViewMode.CARD) {
        return (React__default["default"].createElement(React__default["default"].Fragment, null, Array.from({ length: number }, function (v, i) { return i; }).map(function (item) { return (React__default["default"].createElement(Box, { key: item.toString(), overflow: "hidden", borderRadius: "16px" },
            React__default["default"].createElement(Skeleton, { animation: "waves", height: cardHeight, width: "100%" }))); })));
    }
    return (React__default["default"].createElement(Box, { overflow: "hidden", borderRadius: "16px" }, Array.from({ length: number }, function (v, i) { return i; }).map(function (item) { return (React__default["default"].createElement(Skeleton, { key: item.toString(), animation: "waves", height: tableHeight, width: "100%", my: "2px" })); })));
};

var variantRotate = {
    ROTATE_V1: "transformV1",
    ROTATE_V2: "transformV2",
};

var getScale = function (_a) {
    var rotateType = _a.rotateType, isOpen = _a.isOpen;
    switch (rotateType) {
        case variantRotate.ROTATE_V1:
            return "scale(1, ".concat(isOpen ? -1 : 1, ")");
        case variantRotate.ROTATE_V2:
        default:
            return "scale(".concat(isOpen ? -1 : 1, ")");
    }
};
var StyledChevronWrapper = styled__default["default"](Flex)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  svg {\n    transition: transform 0.3s ease;\n    transform: ", ";\n"], ["\n  svg {\n    transition: transform 0.3s ease;\n    transform: ", ";\n"])), getScale);
var ExpandableIcon = function (_a) {
    var isOpen = _a.isOpen, _b = _a.color, color = _b === void 0 ? "primary" : _b, _c = _a.width, width = _c === void 0 ? "24px" : _c, iconName = _a.iconName, _d = _a.rotateType, rotateType = _d === void 0 ? variantRotate.ROTATE_V2 : _d, props = __rest(_a, ["isOpen", "color", "width", "iconName", "rotateType"]);
    return (React__default["default"].createElement(StyledChevronWrapper, __assign({ isOpen: isOpen, rotateType: rotateType }, props),
        React__default["default"].createElement(IconComponent$1, { iconName: iconName, width: width, color: color })));
};
var templateObject_1$y;

var variants = {
    LIGHT: "light",
    DARK: "dark",
};

var _a$1, _b, _c, _d;
var titleVariants = (_a$1 = {},
    _a$1[variants.LIGHT] = {
        color: "dark800",
    },
    _a$1[variants.DARK] = {
        color: "white",
    },
    _a$1);
var wrapperVariants = (_b = {},
    _b[variants.LIGHT] = {
        backgroundColor: "gray300",
    },
    _b[variants.DARK] = {
        backgroundColor: "dark600",
    },
    _b);
var questionVariants = (_c = {},
    _c[variants.LIGHT] = {
        color: "dark800",
    },
    _c[variants.DARK] = {
        color: "white",
    },
    _c);
var descriptionVariants = (_d = {},
    _d[variants.LIGHT] = {
        color: "gray900",
    },
    _d[variants.DARK] = {
        color: "gray700",
    },
    _d);

var Wrapper$8 = styled__default["default"](Box)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  width: 100%;\n  margin-top: 8px;\n  ", "\n  background: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n\n  &:hover {\n    border-color: ", ";\n    background: transparent;\n  }\n"], ["\n  width: 100%;\n  margin-top: 8px;\n  ", "\n  background: ", ";\n  border: 1px solid\n    ", ";\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.3s ease;\n\n  &:hover {\n    border-color: ", ";\n    background: transparent;\n  }\n"])), styledSystem.variant({
    variants: wrapperVariants,
}), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen && "transparent";
}, function (_a) {
    var theme = _a.theme, isOpen = _a.isOpen;
    return isOpen ? getRgba(theme.colors.primary, theme, 0.16) : "transparent";
}, function (_a) {
    var theme = _a.theme;
    return getRgba(theme.colors.primary, theme, 0.16);
});
var Question = styled__default["default"](Flex)(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-radius: 8px;\n\n  ", " {\n    justify-content: space-between;\n  }\n"], ["\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px;\n  border-radius: 8px;\n\n  ", " {\n    justify-content: space-between;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledText = styled__default["default"](HeadText)(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.variant({
    variants: questionVariants,
}));
var StyledChevronIcon = styled__default["default"](function (_a) {
    var props = __rest(_a, []);
    return (React__default["default"].createElement(Icon$3e, __assign({}, props)));
})(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n  transform: scale(", ");\n  transition: transform 0.3s ease;\n"], ["\n  transform: scale(", ");\n  transition: transform 0.3s ease;\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "1, -1" : "1, 1");
});
var Answer = styled__default["default"](Box)(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n  overflow: hidden;\n  transition: height ease 0.3s;\n"], ["\n  overflow: hidden;\n  transition: height ease 0.3s;\n"])));
var FaqAccordion = function (_a) {
    var _b;
    var _c = _a.name, name = _c === void 0 ? "" : _c, isOpened = _a.isOpened, handleToggle = _a.handleToggle, _d = _a.variant, variant = _d === void 0 ? "dark" : _d, children = _a.children;
    var contentEl = React.useRef(null);
    return (React__default["default"].createElement(Wrapper$8, { isOpen: isOpened, onClick: function () { return handleToggle(name); }, variant: variant },
        React__default["default"].createElement(Question, { isOpen: isOpened },
            React__default["default"].createElement(StyledText, { scale: "size14", variant: variant }, name),
            React__default["default"].createElement(StyledChevronIcon, { isOpen: isOpened, color: "primary", width: "24px" })),
        React__default["default"].createElement(Answer, { ref: contentEl, height: isOpened ? (_b = contentEl === null || contentEl === void 0 ? void 0 : contentEl.current) === null || _b === void 0 ? void 0 : _b.scrollHeight : "0" }, children)));
};
var templateObject_1$x, templateObject_2$j, templateObject_3$f, templateObject_4$d, templateObject_5$9;

var Title$2 = styled__default["default"](BodyText)(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.variant({
    variants: titleVariants,
}));
var ContentWrapper = styled__default["default"](Grid)(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: 1fr;\n\n  ", " {\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme, blogFAQ = _a.blogFAQ;
    return blogFAQ ? theme.mediaQueries.xl : theme.mediaQueries.md;
});
var Description = styled__default["default"](BodyText)(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.variant({
    variants: descriptionVariants,
}));
var Faqs = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "FAQs" : _b, leftData = _a.leftData, rightData = _a.rightData, _c = _a.variant, variant = _c === void 0 ? "dark" : _c, _d = _a.blogFAQ, blogFAQ = _d === void 0 ? false : _d, props = __rest(_a, ["title", "leftData", "rightData", "variant", "blogFAQ"]);
    var _e = React.useState(""), activeQuestion = _e[0], setActiveQuestion = _e[1];
    var handleToggle = function (name) {
        setActiveQuestion(activeQuestion !== name ? name : "");
    };
    var isDarkMobile = variant === "dark" ? "size24" : "size20";
    // markup for question
    var renderQuestionList = function (list) {
        return (list || []).map(function (item, index) { return (React__default["default"].createElement(FaqAccordion, { key: index.toString(), name: item.name, isOpened: activeQuestion === item.name, handleToggle: handleToggle, variant: variant },
            React__default["default"].createElement(Description, { scale: "size14", p: "0 16px 16px", variant: variant }, item.description))); });
    };
    return (React__default["default"].createElement(Box, __assign({}, props),
        title && (React__default["default"].createElement(Title$2, { scale: { xs: isDarkMobile, md: "size24" }, mb: "16px", bold: true, variant: variant }, title)),
        React__default["default"].createElement(ContentWrapper, { blogFAQ: blogFAQ },
            React__default["default"].createElement(Flex, { flexDirection: "column" }, renderQuestionList(leftData)),
            React__default["default"].createElement(Flex, { flexDirection: "column" }, renderQuestionList(rightData)))));
};
var templateObject_1$w, templateObject_2$i, templateObject_3$e;

var TermsHead = styled__default["default"](Flex)(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n\n  ", " {\n    width: max-content;\n  }\n"], ["\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n\n  ", " {\n    width: max-content;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var TermsWrapper = styled__default["default"](Box)(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  overflow: hidden;\n  transition: height ease 0.5s;\n"], ["\n  overflow: hidden;\n  transition: height ease 0.5s;\n"])));
var PlusAnimatedIcon = styled__default["default"].div(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  margin-left: 8px;\n\n  &:before,\n  &:after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 46%;\n    height: 2px;\n    border-radius: 16px;\n    background: ", ";\n    transform: translate(-50%, -50%);\n    transition: transform 0.3s;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"], ["\n  position: relative;\n  width: ", ";\n  height: ", ";\n  margin-left: 8px;\n\n  &:before,\n  &:after {\n    content: \"\";\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    display: block;\n    width: 46%;\n    height: 2px;\n    border-radius: 16px;\n    background: ", ";\n    transform: translate(-50%, -50%);\n    transition: transform 0.3s;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var imageSize = _a.imageSize;
    return imageSize;
}, function (_a) {
    var imageSize = _a.imageSize;
    return imageSize;
}, function (_a) {
    var imageColor = _a.imageColor;
    return imageColor;
}, function (_a) {
    var isOpen = _a.isOpen;
    return "translate(-50%, -50%) ".concat(isOpen ? "rotate(0deg)" : "rotate(90deg)");
}, function (_a) {
    var isOpen = _a.isOpen;
    return "translate(-50%, -50%) ".concat(isOpen ? "rotate(0deg)" : "rotate(180deg)");
});
var TermsAccordion = function (_a) {
    var _b;
    var _c = _a.name, name = _c === void 0 ? "" : _c, imageSize = _a.imageSize, imageColor = _a.imageColor, children = _a.children;
    var _d = React.useState(true), isOpened = _d[0], setOpened = _d[1];
    var contentEl = React.useRef(null);
    var theme = styled.useTheme();
    return (React__default["default"].createElement(Box, null,
        React__default["default"].createElement(TermsHead, { onClick: function () { return setOpened(function (prev) { return !prev; }); } },
            React__default["default"].createElement(HeadText, { color: "white", scale: "size24" }, name),
            React__default["default"].createElement(PlusAnimatedIcon, { imageSize: imageSize, isOpen: isOpened, imageColor: getThemeValue("colors.".concat(imageColor), imageColor)(theme) })),
        React__default["default"].createElement(TermsWrapper, { ref: contentEl, height: isOpened ? (_b = contentEl === null || contentEl === void 0 ? void 0 : contentEl.current) === null || _b === void 0 ? void 0 : _b.scrollHeight : "0" }, children)));
};
var templateObject_1$v, templateObject_2$h, templateObject_3$d;

var StyledList = styled__default["default"](Box)(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  list-style-type: disc;\n"], ["\n  list-style-type: disc;\n"])));
var StyledListItem = styled__default["default"](Flex)(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  &::before {\n    content: \"\\2022\";\n    padding: 2px 8px 0 0;\n    color: ", ";\n  }\n"], ["\n  &::before {\n    content: \"\\\\2022\";\n    padding: 2px 8px 0 0;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
});
var Terms = function (_a) {
    var _b = _a.title, title = _b === void 0 ? "Terms of use" : _b, _c = _a.scrollClass, scrollClass = _c === void 0 ? "" : _c, termsList = _a.termsList, description = _a.description, revised = _a.revised, _d = _a.imageSize, imageSize = _d === void 0 ? "32px" : _d, _e = _a.imageColor, imageColor = _e === void 0 ? "primary" : _e, rest = __rest(_a, ["title", "scrollClass", "termsList", "description", "revised", "imageSize", "imageColor"]);
    var renderTermsList = function () {
        return termsList.map(function (item, index) { return (React__default["default"].createElement(StyledListItem, { key: index.toString(), py: "8px" },
            React__default["default"].createElement(BodyText, { color: "pastelBlue", scale: "size16" }, item))); });
    };
    return (React__default["default"].createElement(Box, __assign({ className: scrollClass }, rest),
        React__default["default"].createElement(TermsAccordion, { name: title, imageSize: imageSize, imageColor: imageColor },
            React__default["default"].createElement(Box, null,
                React__default["default"].createElement(BodyText, { mt: "24px", color: "warning", scale: "size16", bold: true }, revised),
                React__default["default"].createElement(BodyText, { mt: "16px", color: "white", scale: "size16" }, description),
                React__default["default"].createElement(StyledList, { mt: "8px", pl: "8px" }, renderTermsList())))));
};
var templateObject_1$u, templateObject_2$g;

var ModalHeader = styled__default["default"].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  display: flex;\n  //align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n"], ["\n  display: flex;\n  //align-items: flex-start;\n  justify-content: space-between;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalTitle = styled__default["default"](Flex)(templateObject_2$f || (templateObject_2$f = __makeTemplateObject([""], [""])));
var ModalBody$1 = styled__default["default"](Flex)(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  flex-direction: column;\n  overflow-y: auto;\n"], ["\n  flex-direction: column;\n  overflow-y: auto;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss, closeBtnColor = _a.closeBtnColor;
    return (React__default["default"].createElement(IconButton, { variant: "text", onClick: onDismiss, scale: "sm", "aria-label": "Close the dialog" },
        React__default["default"].createElement(Icon$2N, { color: closeBtnColor || "dark600", width: "24px" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack, closeBtnColor = _a.closeBtnColor;
    return (React__default["default"].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React__default["default"].createElement(Icon$32, { color: closeBtnColor || "primary" })));
};
var ModalContainer = styled__default["default"](Box)(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  width: ", ";\n  z-index: ", ";\n  ", "\n\n  ", " {\n    width: ", ";\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  width: ", ";\n  z-index: ", ";\n  ", "\n\n  ", " {\n    width: ", ";\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var background = _a.background;
    return background || "white";
}, function (_a) {
    var width = _a.width;
    return width !== null && width !== void 0 ? width : "100%";
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var walletModal = _a.walletModal;
    return !walletModal &&
        "\n    max-height: 100vh;\n    overflow-y: auto;\n  ";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var maxWidth = _a.maxWidth;
    return maxWidth || "100%";
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$t, templateObject_2$f, templateObject_3$c, templateObject_4$c;

var Modal = function (_a) {
    var _b;
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, hideOnBack = _a.hideOnBack, children = _a.children, _c = _a.hideCloseButton, hideCloseButton = _c === void 0 ? false : _c, bodyPadding = _a.bodyPadding, _d = _a.minWidth, minWidth = _d === void 0 ? "320px" : _d, _e = _a.modalBackground, modalBackground = _e === void 0 ? "white" : _e, closeBtnColor = _a.closeBtnColor, _f = _a.maxWidth, maxWidth = _f === void 0 ? "420px" : _f, _g = _a.titleSize, titleSize = _g === void 0 ? "lg" : _g, walletModal = _a.walletModal, modalBodyProps = _a.modalBodyProps, hideHeader = _a.hideHeader, _h = _a.titleColor, titleColor = _h === void 0 ? "backgroundDark" : _h, props = __rest(_a, ["title", "onDismiss", "onBack", "hideOnBack", "children", "hideCloseButton", "bodyPadding", "minWidth", "modalBackground", "closeBtnColor", "maxWidth", "titleSize", "walletModal", "modalBodyProps", "hideHeader", "titleColor"]);
    var theme = styled.useTheme();
    var isMobile = useMatchBreakpoints().isMobile;
    var defaultBodyPadding = isMobile ? "0 16px 24px" : "0 32px 32px";
    return (React__default["default"].createElement(ModalContainer, __assign({ minWidth: minWidth }, props, { background: getThemeValue("colors.".concat(modalBackground), modalBackground)(theme), maxWidth: maxWidth, walletModal: walletModal, width: props.width, borderRadius: (_b = props.borderRadius) !== null && _b !== void 0 ? _b : "16px" }),
        !hideHeader && (React__default["default"].createElement(ModalHeader, null,
            !hideOnBack && onBack && (React__default["default"].createElement(ModalBackButton, { onBack: onBack, closeBtnColor: closeBtnColor })),
            React__default["default"].createElement(ModalTitle, null, title && (React__default["default"].createElement(Heading, { scale: titleSize, color: titleColor }, title))),
            !hideCloseButton && (React__default["default"].createElement(ModalCloseButton, { closeBtnColor: closeBtnColor, onDismiss: onDismiss })))),
        React__default["default"].createElement(ModalBody$1, __assign({ p: bodyPadding !== null && bodyPadding !== void 0 ? bodyPadding : defaultBodyPadding }, modalBodyProps), children)));
};

var StyledModal = styled__default["default"].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme, backgroundTransparent = _a.backgroundTransparent;
    return backgroundTransparent ? "transparent" : theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledIconButton = styled__default["default"](IconButton)(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  z-index: 2;\n\n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  z-index: 2;\n\n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalBody = styled__default["default"].div(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n"], ["\n  padding: ", ";\n\n  ", " {\n    padding: ", ";\n  }\n"])), function (_a) {
    var padding = _a.padding;
    return padding || "0 16px 24px";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var padding = _a.padding;
    return padding || "0 32px 32px";
});
var Background = styled__default["default"].img(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var ModalWithBackground = function (_a) {
    var onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, backBtnColor = _a.backBtnColor, background = _a.background, backgroundTransparent = _a.backgroundTransparent, p = _a.p;
    return (React__default["default"].createElement(StyledModal, { backgroundTransparent: backgroundTransparent },
        !hideCloseButton && (React__default["default"].createElement(StyledIconButton, { variant: "text", className: "closeModal", scale: "sm", onClick: onDismiss, "aria-label": "Close the dialog" },
            React__default["default"].createElement(Icon$2N, { width: "24px", color: backBtnColor !== null && backBtnColor !== void 0 ? backBtnColor : "card" }))),
        background && React__default["default"].createElement(Background, { src: background, alt: "image" }),
        React__default["default"].createElement(ModalBody, { padding: p }, children)));
};
var templateObject_1$s, templateObject_2$e, templateObject_3$b, templateObject_4$b;

var ModalWrapper = styled__default["default"].div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    isOpen: false,
    nodeId: "",
    modalNode: null,
    setModalNode: function () { return null; },
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(""), nodeId = _d[0], setNodeId = _d[1];
    var _e = React.useState(true), closeOnOverlayClick = _e[0], setCloseOnOverlayClick = _e[1];
    // console.log('closeOnOverlayClick', closeOnOverlayClick, nodeId)
    var handlePresent = function (node, newNodeId, closeOverlayClick) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
        setCloseOnOverlayClick(closeOverlayClick);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
        setCloseOnOverlayClick(true);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default["default"].createElement(Context.Provider, { value: {
            isOpen: isOpen,
            nodeId: nodeId,
            modalNode: modalNode,
            setModalNode: setModalNode,
            onPresent: handlePresent,
            onDismiss: handleDismiss,
        } },
        isOpen && (React__default["default"].createElement(ModalWrapper, null,
            React__default["default"].createElement(Overlay, { onClick: handleOverlayDismiss }),
            React__default["default"].isValidElement(modalNode) &&
                React__default["default"].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$r;

var useModal = function (modal, closeOnOverlayClick, updateOnPropsChange, modalId) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    if (updateOnPropsChange === void 0) { updateOnPropsChange = false; }
    if (modalId === void 0) { modalId = "defaultNodeId"; }
    var _a = React.useContext(Context), isOpen = _a.isOpen, nodeId = _a.nodeId, modalNode = _a.modalNode, setModalNode = _a.setModalNode, onPresent = _a.onPresent, onDismiss = _a.onDismiss;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal, modalId, closeOnOverlayClick);
    }, [modal, modalId, onPresent, closeOnOverlayClick]);
    // Updates the "modal" component if props are changed
    // Use carefully since it might result in unnecessary rerenders
    // Typically if modal is static there is no need for updates, use when you expect props to change
    React.useEffect(function () {
        // NodeId is needed in case there are 2 useModal hooks on the same page and one has updateOnPropsChange
        if (updateOnPropsChange && isOpen && nodeId === modalId) {
            var modalProps = get__default["default"](modal, "props");
            var oldModalProps = get__default["default"](modalNode, "props");
            // Note: I tried to use lodash isEqual to compare props but it is giving false-negatives too easily
            // For example ConfirmSwapModal in exchange has ~500 lines prop object that stringifies to same string
            // and online diff checker says both objects are identical but lodash isEqual thinks they are different
            // Do not try to replace JSON.stringify with isEqual, high risk of infinite rerenders
            // TODO: Find a good way to handle modal updates, this whole flow is just backwards-compatible workaround,
            // would be great to simplify the logic here
            if (modalProps &&
                oldModalProps &&
                JSON.stringify(modalProps) !== JSON.stringify(oldModalProps)) {
                setModalNode(modal);
            }
        }
    }, [
        updateOnPropsChange,
        nodeId,
        modalId,
        isOpen,
        modal,
        modalNode,
        setModalNode,
    ]);
    return [onPresentCallback, onDismiss];
};

// import { formatSpacingAmount } from "../../../util/formatSpacingAmount";
var Wrapper$7 = styled__default["default"].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  grid-template-areas:\n    \"logo bsw-title\"\n    \"logo bsw-value\";\n  grid-column-gap: 8px;\n  position: relative;\n  width: 140px;\n\n  ", " {\n    width: 120px;\n  }\n\n  ", " {\n    grid-column-gap: 16px;\n  }\n\n  .logo {\n    width: 38px;\n    grid-area: logo;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  grid-template-areas:\n    \"logo bsw-title\"\n    \"logo bsw-value\";\n  grid-column-gap: 8px;\n  position: relative;\n  width: 140px;\n\n  ", " {\n    width: 120px;\n  }\n\n  ", " {\n    grid-column-gap: 16px;\n  }\n\n  .logo {\n    width: 38px;\n    grid-area: logo;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var BSWPrice = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue;
    return (React__default["default"].createElement(Wrapper$7, null,
        React__default["default"].createElement(Icon$6, { width: "38px", className: "logo" }),
        React__default["default"].createElement(Text, { color: "gray900", fontSize: "12px", lineHeight: "18px", bold: true }, BSWPriceLabel),
        React__default["default"].createElement(Text, { color: "contrast", fontSize: "16px", lineHeight: "19px", bold: true }, BSWPriceValue)));
};
var templateObject_1$q;

var AddToMetamaskBtn = styled__default["default"].button(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: none;\n  border: 0;\n  cursor: pointer;\n  transition: opacity 0.3s ease;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: none;\n  border: 0;\n  cursor: pointer;\n  transition: opacity 0.3s ease;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark500;
});
var ConnectMetamask = function (_a) {
    var onClick = _a.onClick, baseAwsUrl = _a.baseAwsUrl;
    return (React__default["default"].createElement(AddToMetamaskBtn, { type: "button", onClick: function () { return onClick(); }, as: "button" },
        React__default["default"].createElement(Image__default["default"], { width: 22, height: 22, src: "".concat(baseAwsUrl, "/icons/metamask-transparent.svg"), alt: "" })));
};
var templateObject_1$p;

var BuyBSW = function (_a) {
    var buyBswHandler = _a.buyBswHandler, buyBswLabel = _a.buyBswLabel;
    return (React__default["default"].createElement(Button$2, { onClick: buyBswHandler, variant: "danger", scale: "md" }, buyBswLabel));
};

var Wrapper$6 = styled__default["default"].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 16px;\n  padding: 24px;\n  background: ", ";\n  margin-bottom: 24px;\n  grid-area: footer-info;\n\n  ", " {\n    margin-bottom: 0;\n  }\n\n  ", " {\n    flex-direction: row;\n    justify-content: initial;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 16px;\n  padding: 24px;\n  background: ", ";\n  margin-bottom: 24px;\n  grid-area: footer-info;\n\n  ", " {\n    margin-bottom: 0;\n  }\n\n  ", " {\n    flex-direction: row;\n    justify-content: initial;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark600;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var LeftInfo = styled__default["default"].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  ", " {\n    flex-direction: column;\n    justify-content: space-between;\n    width: 142px;\n    min-width: 142px;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  ", " {\n    flex-direction: column;\n    justify-content: space-between;\n    width: 142px;\n    min-width: 142px;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var FlexWrap = styled__default["default"].div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"])));
var InfoList = styled__default["default"].div(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  flex-grow: initial;\n\n  ", " {\n    flex-grow: 1;\n  }\n"], ["\n  flex-grow: initial;\n\n  ", " {\n    flex-grow: 1;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var InfoListItem = styled__default["default"].div(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  line-height: 18px;\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n\n  ", " {\n    justify-content: space-between;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  line-height: 18px;\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n\n  ", " {\n    justify-content: space-between;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var InfoListLabel = styled__default["default"].span(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n  font-size: 12px;\n  width: 140px;\n  min-width: 140px;\n  color: ", ";\n  font-weight: bold;\n\n  ", " {\n    width: 120px;\n    min-width: 120px;\n  }\n"], ["\n  font-size: 12px;\n  width: 140px;\n  min-width: 140px;\n  color: ", ";\n  font-weight: bold;\n\n  ", " {\n    width: 120px;\n    min-width: 120px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var InfoListValue = styled__default["default"].span(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  font-size: 12px;\n  color: ", ";\n  padding-left: 4px;\n  font-weight: bold;\n  width: 126px;\n"], ["\n  font-size: 12px;\n  color: ", ";\n  padding-left: 4px;\n  font-weight: bold;\n  width: 126px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var FooterInfo = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, registerToken = _a.registerToken, footerStatistic = _a.footerStatistic, buyBswHandler = _a.buyBswHandler, baseAwsUrl = _a.baseAwsUrl, buyBswLabel = _a.buyBswLabel;
    return (React__default["default"].createElement(Wrapper$6, null,
        React__default["default"].createElement(LeftInfo, null,
            React__default["default"].createElement(BSWPrice, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue }),
            React__default["default"].createElement(FlexWrap, null,
                React__default["default"].createElement(ConnectMetamask, { onClick: registerToken, baseAwsUrl: baseAwsUrl }),
                React__default["default"].createElement(BuyBSW, { buyBswHandler: buyBswHandler, buyBswLabel: buyBswLabel }))),
        React__default["default"].createElement(InfoList, null, footerStatistic.map(function (item, index) { return (React__default["default"].createElement(InfoListItem, { key: index.toString() },
            React__default["default"].createElement(InfoListLabel, null, item.label),
            React__default["default"].createElement(InfoListValue, null, formatSpacingAmount(item.value)))); }))));
};
var templateObject_1$o, templateObject_2$d, templateObject_3$a, templateObject_4$a, templateObject_5$8, templateObject_6$6, templateObject_7$3;

exports.DropdownMenuItemType = void 0;
(function (DropdownMenuItemType) {
    DropdownMenuItemType[DropdownMenuItemType["INTERNAL_LINK"] = 0] = "INTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["EXTERNAL_LINK"] = 1] = "EXTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["BUTTON"] = 2] = "BUTTON";
    DropdownMenuItemType[DropdownMenuItemType["DIVIDER"] = 3] = "DIVIDER";
    DropdownMenuItemType[DropdownMenuItemType["BANNER"] = 4] = "BANNER";
    DropdownMenuItemType[DropdownMenuItemType["CONTAINER"] = 5] = "CONTAINER";
})(exports.DropdownMenuItemType || (exports.DropdownMenuItemType = {}));

var TopAction = styled__default["default"].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"])));
var Title$1 = styled__default["default"].h4(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ActionIcon = styled__default["default"].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"], ["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen
        ? "translate(-50%, -50%) rotate(180deg)"
        : "translate(-50%, -50%) rotate(90deg)";
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen
        ? "translate(-50%, -50%) rotate(180deg)"
        : "translate(-50%, -50%) rotate(0deg)";
});
var NavList = styled__default["default"].div(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform 0.3s ease, opacity 0.3s ease, height 0.3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"], ["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform 0.3s ease, opacity 0.3s ease, height 0.3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "scaleY(1)" : "scaleY(0)");
}, function (_a) {
    var isOpen = _a.isOpen, innerHeight = _a.innerHeight;
    return isOpen ? "".concat(innerHeight * 26 + 16, "px") : "0";
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "1" : "0");
}, function (_a) {
    var isOpen = _a.isOpen;
    return (isOpen ? "16px" : "0");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var NavItem = styled__default["default"].div(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
});
var CustomLink = styled__default["default"].div(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n  transition: opacity 0.3s ease;\n  color: ", ";\n  font-weight: 600;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  transition: opacity 0.3s ease;\n  color: ", ";\n  font-weight: 600;\n\n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
});
var CommonFooterLinksComponent = function (_a) {
    var _b;
    var footerLinks = _a.footerLinks;
    var _c = React.useState(false), isOpen = _c[0], setIsOpen = _c[1];
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var title = footerLinks.title, links = footerLinks.links;
    var arrLength = (_b = links === null || links === void 0 ? void 0 : links.length) !== null && _b !== void 0 ? _b : 0;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(TopAction, { onClick: function () { return setIsOpen(!isOpen); } },
            React__default["default"].createElement(Title$1, null, title),
            React__default["default"].createElement(ActionIcon, { isOpen: isOpen })),
        React__default["default"].createElement(NavList, { isOpen: isOpen, innerHeight: arrLength }, links === null || links === void 0 ? void 0 : links.map(function (_a, index) {
            var href = _a.href, _b = _a.target, target = _b === void 0 ? null : _b, label = _a.label, _c = _a.type, type = _c === void 0 ? exports.DropdownMenuItemType.INTERNAL_LINK : _c;
            return (React__default["default"].createElement(NavItem, { key: index.toString() },
                type === exports.DropdownMenuItemType.INTERNAL_LINK && (React__default["default"].createElement(CustomLink, { as: linkComponent, to: href }, label)),
                type === exports.DropdownMenuItemType.EXTERNAL_LINK && (React__default["default"].createElement(CustomLink, { as: "a", href: href, target: target ? target : "_self" }, label))));
        }))));
};
var templateObject_1$n, templateObject_2$c, templateObject_3$9, templateObject_4$9, templateObject_5$7, templateObject_6$5;

var Wrapper$5 = styled__default["default"].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  grid-area: about;\n"], ["\n  grid-area: about;\n"])));
var About = function (_a) {
    var footerLinks = _a.footerLinks;
    return (React__default["default"].createElement(Wrapper$5, null,
        React__default["default"].createElement(CommonFooterLinksComponent, { footerLinks: footerLinks })));
};
var templateObject_1$m;

var Wrapper$4 = styled__default["default"].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  grid-area: product;\n"], ["\n  grid-area: product;\n"])));
var Product = function (_a) {
    var footerLinks = _a.footerLinks;
    return (React__default["default"].createElement(Wrapper$4, null,
        React__default["default"].createElement(CommonFooterLinksComponent, { footerLinks: footerLinks })));
};
var templateObject_1$l;

var Wrapper$3 = styled__default["default"].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  grid-area: service;\n"], ["\n  grid-area: service;\n"])));
var Service = function (_a) {
    var footerLinks = _a.footerLinks;
    return (React__default["default"].createElement(Wrapper$3, null,
        React__default["default"].createElement(CommonFooterLinksComponent, { footerLinks: footerLinks })));
};
var templateObject_1$k;

var ItemTypes = {
    DIVIDER: "DIVIDER",
};

var status = {
    LIVE: {
        text: "LIVE",
        color: "secondary",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        href: "/",
        hidden: true,
    },
    {
        label: "Trade",
        showNavBadge: true,
        colorNavBadge: "warning",
        items: [
            {
                label: "Swap",
                href: "/swap",
                leftIcon: "ExchangeOpacity",
                description: "Item description",
                badgeType: "success",
                badgeTitle: "New",
            },
            {
                label: "Expert Trade",
                leftIcon: "ExpertModeOpacity",
                // rightIcon: "ArrowUpForward",
                rightIconFill: "primary",
                description: "Item description",
                href: "/liquidity",
            },
            {
                label: "Liquidity",
                href: "/pool",
                leftIcon: "LiquidityOpacity",
                description: "Item description",
            },
        ],
    },
    {
        label: "Earn",
        showNavBadge: true,
        colorNavBadge: "primary",
        items: [
            {
                label: "Farms",
                href: "/pool",
                leftIcon: "FarmsOpacity",
                description: "Item description",
            },
            {
                badgeType: "success",
                badgeTitle: "New",
                label: "LaunchPools",
                href: "/pool",
                leftIcon: "PoolsOpacity",
                description: "Item description description very long long long",
                type: exports.DropdownMenuItemType.CONTAINER,
                links: [
                    {
                        label: "Stake BSW",
                        href: "https://google.com",
                        linkType: exports.DropdownMenuItemType.EXTERNAL_LINK,
                    },
                    {
                        label: "Stake tokens",
                        href: "/polar",
                        linkType: exports.DropdownMenuItemType.INTERNAL_LINK,
                    },
                ],
            },
            {
                label: "Referral Program",
                href: "/pool",
                leftIcon: "ReferralOpacity",
                description: "Item description",
            },
            {
                label: "IDO",
                href: "/pool",
                leftIcon: "IdoOpacity",
                description: "Item description",
            },
        ],
    },
    {
        label: "Win",
        highlightTitle: true,
        showNavBadge: true,
        colorNavBadge: "secondary",
        items: [
            {
                label: "Lottery",
                href: "/pool",
                leftIcon: "LotteryOpacity",
                description: "Item description",
                target: "_blank",
                mobileTarget: "_self",
            },
            {
                label: "Competitions",
                href: "/pool",
                leftIcon: "GobletOpacity",
                description: "Item description",
                type: exports.DropdownMenuItemType.CONTAINER,
                links: [
                    {
                        label: "NFT Staking",
                        href: "/nft",
                    },
                    {
                        label: "NFT Boost",
                        href: "/nft/boost",
                    },
                ],
            },
            {
                label: "NFT Launchpad",
                href: "/launchpad",
                leftIcon: "LaunchpadOpacity",
                description: "Buy new unique NFTs",
            },
        ],
    },
    {
        label: "NFT",
        showNavBadge: true,
        items: [
            {
                label: "NFT Launchpad",
                href: "/launchpad",
                leftIcon: "LaunchpadOpacity",
                description: "Buy new unique NFTs",
            },
            {
                label: "NFT Earn",
                leftIcon: "NFTEarnOpacity",
                description: "Stake NFT & Get multiple tokens",
                type: exports.DropdownMenuItemType.CONTAINER,
                links: [
                    {
                        label: "NFT Staking",
                        href: "/nft",
                    },
                    {
                        label: "NFT Boost",
                        href: "/nft/boost",
                    },
                    {
                        label: "Upgrade Level",
                        href: "/nft/upgrade",
                    },
                    {
                        label: "NFT Launchpad",
                        href: "/pool",
                        target: "_blank",
                        mobileTarget: "_self",
                    },
                ],
            },
            {
                href: "/",
                target: "_blank",
                mobileTarget: "_self",
                type: exports.DropdownMenuItemType.BANNER,
            },
        ],
    },
    {
        label: "Info",
        isExtended: true,
        items: [
            {
                label: "Analytics",
                leftIcon: "AnalyticsOpacity",
                href: "https://google.com",
                description: "Item description",
            },
            {
                label: "Voting",
                leftIcon: "VotingOpacity",
                href: "/pool",
                description: "Item description",
            },
            {
                label: "About BSW",
                leftIcon: "AboutBSWOpacity",
                href: "/pool",
                description: "Item description",
            },
            {
                label: "Team",
                leftIcon: "TeamOpacity",
                href: "/pool",
                description: "Item description",
            },
            {
                label: "$10M Program",
                leftIcon: "Program10mOpacity",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "News",
                leftIcon: "NewsOpacity",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "Docs",
                leftIcon: "DocsOpacity",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "Audit",
                leftIcon: "AuditProtectionOpacity",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
        ],
    },
    {
        type: ItemTypes.DIVIDER,
        showItemsOnMobile: true,
        href: "",
    },
    {
        label: "Buy crypto",
        href: "/",
        isMobileNav: true,
        showItemsOnMobile: true,
    },
    // {
    //   type: ItemTypes.DIVIDER,
    //   showItemsOnMobile: true,
    // },
    // {
    //   label: "Biswap Products", // if changed label, also should be changed in Accordion component condition
    //   icon: "ProductsOpacity",
    //   isMobileNav: true,
    //   showItemsOnMobile: true,
    //   items: [
    //     {
    //       label: "Marketplace",
    //       href: "/pool",
    //       leftIcon: "Market",
    //       description: "Item description",
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //     {
    //       label: "GameFi",
    //       href: "/pool",
    //       leftIcon: "GameFi",
    //       description: "Item description",
    //       type: DropdownMenuItemType.EXTERNAL_LINK,
    //     },
    //   ],
    // },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: {
            channel: {
                icon: "LogoIcon",
                label: "Channel",
                href: "https://t.me/biswap_news",
            },
            chats: [
                {
                    icon: "USAIcon",
                    label: "English",
                    href: "https://t.me/biswap",
                },
                {
                    icon: "IDIcon",
                    label: "Bahasa",
                    href: "https://t.me/biswap_idn",
                },
                {
                    icon: "RUIcon",
                    label: "Русский",
                    href: "https://t.me/biswap_rus",
                },
                {
                    icon: "VNIcon",
                    label: "Tiếng Việt",
                    href: "https://t.me/biswap_vnm",
                },
                // {
                //   icon: 'BDIcon',
                //   label: "Bangladesh",
                //   href: "https://t.me/biswap_bgd",
                // },
                {
                    icon: "FRIcon",
                    label: "La France",
                    href: "https://t.me/biswap_france",
                },
                {
                    icon: "PTIcon",
                    label: "Portugal",
                    href: "https://t.me/biswap_prt",
                },
                {
                    icon: "DEIcon",
                    label: "Germany",
                    href: "https://t.me/biswap_germany",
                },
                {
                    icon: "CNIcon",
                    label: "Сhina",
                    href: "https://t.me/biswap_china",
                },
                {
                    icon: "TRIcon",
                    label: "Turkey",
                    href: "https://t.me/biswap_turkey",
                },
                {
                    icon: "ESIcon",
                    label: "Espanol",
                    href: "https://t.me/biswap_espanol",
                },
                {
                    icon: "INIcon",
                    label: "India",
                    href: "https://t.me/biswap_india",
                },
            ],
        },
    },
    {
        label: "Instagram",
        icon: "InstagramIcon",
        href: "https://www.instagram.com/_biswap_dex",
    },
    {
        label: "Facebook",
        icon: "FacebookIcon",
        href: "https://www.facebook.com/profile.php?id=100082146264626",
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/Biswap_DEX",
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://biswap-dex.medium.com/",
    },
    {
        label: "Youtube",
        icon: "YoutubeIcon",
        href: "https://www.youtube.com/channel/UCHartwkRUURf2Q7MlKOV84w",
    },
    {
        label: "TikTok",
        icon: "TikTokIcon",
        href: "https://www.tiktok.com/@biswap_dex?_t=8ZvBURxahPR&_r=1",
    },
    {
        label: "CoinMarketCap",
        icon: "CoinMarketCapIcon",
        href: "https://coinmarketcap.com/community/profile/Biswap_DEX/",
    },
    {
        label: "Quora",
        icon: "QuoraIcon",
        href: "https://www.quora.com/profile/Biswap-2",
    },
];
[
    {
        label: "Wallet",
        onClick: lodash.noop,
        type: exports.DropdownMenuItemType.BUTTON,
    },
    {
        label: "Transactions",
        type: exports.DropdownMenuItemType.BUTTON,
    },
    {
        type: exports.DropdownMenuItemType.DIVIDER,
    },
    {
        type: exports.DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Dashboard",
    },
    {
        type: exports.DropdownMenuItemType.BUTTON,
        disabled: true,
        label: "Portfolio",
    },
    {
        label: "Profile",
        href: "/profile",
    },
    {
        type: exports.DropdownMenuItemType.EXTERNAL_LINK,
        href: "https://pancakeswap.finance",
        label: "Link",
    },
    {
        type: exports.DropdownMenuItemType.DIVIDER,
    },
    {
        type: exports.DropdownMenuItemType.BUTTON,
        onClick: lodash.noop,
        label: "Disconnect",
    },
];
var MENU_HEIGHT = 72;
// export const MENU_ENTRY_HEIGHT = 48;
// export const MOBILE_MENU_HEIGHT = 44;
// export const SIDEBAR_WIDTH_FULL = 240;
// export const SIDEBAR_WIDTH_REDUCED = 56;
var TOP_BANNER_HEIGHT = 70;
var TOP_BANNER_HEIGHT_MOBILE = 84;
var MOBILE_EVENT_BUTTON_HEIGHT = 40;
// export const FISHING_BANNER_HEIGHT = 40;
// export const FISHING_MOBILE_BANNER_HEIGHT = 60;

var Icons = IconModule;
var Wrapper$2 = styled__default["default"].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  grid-area: community;\n  ", "\n"], ["\n  grid-area: community;\n  ", "\n"])), function (_a) {
    var menuVariant = _a.menuVariant;
    return !menuVariant && "max-width: 136px;";
});
var Title = styled__default["default"].h4(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 16px;\n"], ["\n  font-size: 16px;\n  color: ", ";\n  margin-bottom: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var SocialWrap = styled__default["default"].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: flex-start;\n\n  ", ";\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  justify-content: flex-start;\n\n  ", ";\n"])), function (_a) {
    var menuVariant = _a.menuVariant;
    if (menuVariant) {
        return "\n      width:274px;\n        row-gap: 25px;\n        column-gap: 26px;\n        justify-content: center;\n        margin: 0 auto;\n        \n      ";
    }
});
var SocialItem = styled__default["default"].div(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  transition: opacity 0.3s ease;\n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  transition: opacity 0.3s ease;\n  &:hover {\n    opacity: 0.65;\n  }\n"])));
var DropDownWrap = styled__default["default"].div(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  position: relative;\n\n  &:hover {\n    .drop-down-inner {\n      display: block;\n    }\n  }\n"], ["\n  position: relative;\n\n  &:hover {\n    .drop-down-inner {\n      display: block;\n    }\n  }\n"])));
var DropDownInnerWrap = styled__default["default"].div(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  display: none;\n  position: absolute;\n  padding-top: 0;\n  padding-bottom: 8px;\n  bottom: -5px;\n  left: -24px;\n  transform: translateX(-50%);\n  z-index: 50;\n  min-width: 96px;\n\n  &:hover {\n    display: block;\n  }\n"], ["\n  display: none;\n  position: absolute;\n  padding-top: 0;\n  padding-bottom: 8px;\n  bottom: -5px;\n  left: -24px;\n  transform: translateX(-50%);\n  z-index: 50;\n  min-width: 96px;\n\n  &:hover {\n    display: block;\n  }\n"])));
var DropDown = styled__default["default"].div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  position: relative;\n  border-radius: 8px;\n  padding: 8px;\n  background-color: ", ";\n  bottom: 32px;\n  left: 100%;\n  transform: translateX(-40%);\n\n  &:before {\n    display: block;\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    bottom: -4px;\n    left: 28px;\n    transform: translateX(-50%) rotate(45deg);\n    background-color: ", ";\n  }\n"], ["\n  position: relative;\n  border-radius: 8px;\n  padding: 8px;\n  background-color: ", ";\n  bottom: 32px;\n  left: 100%;\n  transform: translateX(-40%);\n\n  &:before {\n    display: block;\n    content: \"\";\n    width: 8px;\n    height: 8px;\n    position: absolute;\n    bottom: -4px;\n    left: 28px;\n    transform: translateX(-50%) rotate(45deg);\n    background-color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
});
var DropDownLink = styled__default["default"].a(templateObject_8$2 || (templateObject_8$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  user-select: none;\n  transition: all 0.4s ease;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  user-select: none;\n  transition: all 0.4s ease;\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var DropDownLabel = styled__default["default"].span(templateObject_9$1 || (templateObject_9$1 = __makeTemplateObject(["\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  margin-bottom: 8px;\n"], ["\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: ", ";\n  margin-bottom: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
});
var FlagWrap = styled__default["default"].div(templateObject_10$1 || (templateObject_10$1 = __makeTemplateObject(["\n  border-radius: 50%;\n  margin-right: 8px;\n  overflow: hidden;\n  width: 14px;\n  height: 14px;\n"], ["\n  border-radius: 50%;\n  margin-right: 8px;\n  overflow: hidden;\n  width: 14px;\n  height: 14px;\n"])));
var Community = function (_a) {
    var _b = _a.iconSize, iconSize = _b === void 0 ? "20px" : _b; _a.title; var menuVariant = _a.menuVariant, _c = _a.isFooter, isFooter = _c === void 0 ? false : _c, socialLinks = _a.socialLinks, baseAwsUrl = _a.baseAwsUrl;
    return (React__default["default"].createElement(Wrapper$2, { menuVariant: menuVariant || isFooter },
        (socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.title) && React__default["default"].createElement(Title, null, socialLinks === null || socialLinks === void 0 ? void 0 : socialLinks.title),
        React__default["default"].createElement(SocialWrap, { menuVariant: menuVariant }, socials.map(function (social) {
            var Icon = Icons[social.icon];
            var iconProps = {
                width: iconSize,
                color: isFooter ? "pastelBlue" : "gray600",
                style: { cursor: "pointer" },
            };
            if (social.items) {
                return (React__default["default"].createElement(DropDownWrap, { key: social.label },
                    React__default["default"].createElement(SocialItem, { className: "hovered-item" },
                        React__default["default"].createElement(Icon, __assign({}, iconProps))),
                    React__default["default"].createElement(DropDownInnerWrap, { className: "drop-down-inner" },
                        React__default["default"].createElement(DropDown, null,
                            React__default["default"].createElement(DropDownLink, { key: social.items.channel.label, href: social.items.channel.href, target: "_blank", "aria-label": social.label },
                                React__default["default"].createElement(FlagWrap, null,
                                    React__default["default"].createElement(Box, { width: "14px", height: "14px" },
                                        React__default["default"].createElement("img", { src: "".concat(baseAwsUrl, "/coins/bsw.svg"), alt: "" }))),
                                social.items.channel.label),
                            React__default["default"].createElement(DropDownLabel, null, "Chats:"),
                            social.items.chats.map(function (item) { return (React__default["default"].createElement(DropDownLink, { key: item.label, href: item.href, target: "_blank", "aria-label": social.label },
                                React__default["default"].createElement(FlagWrap, null,
                                    React__default["default"].createElement(Image__default["default"], { src: "".concat(baseAwsUrl, "/icons/Flags/").concat(item.icon, ".svg"), width: 14, height: 14, alt: "" })),
                                item.label)); })))));
            }
            return (React__default["default"].createElement(SocialItem, { key: social.label },
                React__default["default"].createElement(Link, { external: true, href: social.href, "aria-label": social.label },
                    React__default["default"].createElement(Icon, __assign({}, iconProps)))));
        }))));
};
var templateObject_1$j, templateObject_2$b, templateObject_3$8, templateObject_4$8, templateObject_5$6, templateObject_6$4, templateObject_7$2, templateObject_8$2, templateObject_9$1, templateObject_10$1;

var MARKETPLACE_URL = "https://marketplace.biswap.org";
var CERTIK_URL = "https://www.certik.org/projects/biswap";
var AuditedWrap = styled__default["default"](Flex)(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  grid-area: audit;\n  margin-top: 24px;\n  flex-direction: row;\n  justify-content: space-between;\n\n  ", " {\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    margin-top: 0;\n  }\n  ", " {\n    margin-left: -44px;\n  }\n\n  ", " {\n    margin-top: 16px;\n    margin-left: 0;\n  }\n"], ["\n  grid-area: audit;\n  margin-top: 24px;\n  flex-direction: row;\n  justify-content: space-between;\n\n  ", " {\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: flex-start;\n    margin-top: 0;\n  }\n  ", " {\n    margin-left: -44px;\n  }\n\n  ", " {\n    margin-top: 16px;\n    margin-left: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var LinkWrap = styled__default["default"].a(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  height: fit-content;\n  transition: opacity 0.3s ease;\n  border-radius: 8px;\n  background-color: ", ";\n  padding: 8px 16px;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"], ["\n  height: fit-content;\n  transition: opacity 0.3s ease;\n  border-radius: 8px;\n  background-color: ", ";\n  padding: 8px 16px;\n\n  &:hover {\n    opacity: 0.7;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark600;
});
var MarketPlaceButton = styled__default["default"](Button$2)(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  padding: 8px;\n  width: 156px;\n  background: ", ";\n  border-radius: 8px;\n  margin-bottom: 0;\n  transition: opacity 0.3s ease;\n  ", " {\n    margin-bottom: 8px;\n  }\n  &:hover {\n    opacity: 0.7;\n  }\n"], ["\n  padding: 8px;\n  width: 156px;\n  background: ", ";\n  border-radius: 8px;\n  margin-bottom: 0;\n  transition: opacity 0.3s ease;\n  ", " {\n    margin-bottom: 8px;\n  }\n  &:hover {\n    opacity: 0.7;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark600;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var IconWrapper = styled__default["default"].div(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  background: linear-gradient(136.03deg, #1263f1 -7.36%, #f63d5e 131.43%);\n  border-radius: 6px;\n  padding: 8px;\n  margin-right: 8px;\n"], ["\n  background: linear-gradient(136.03deg, #1263f1 -7.36%, #f63d5e 131.43%);\n  border-radius: 6px;\n  padding: 8px;\n  margin-right: 8px;\n"])));
var Audit = function (_a) {
    var marketplaceLink = _a.marketplaceLink, baseAwsUrl = _a.baseAwsUrl;
    var isMobile = useMatchBreakpoints().isMobile;
    return (React__default["default"].createElement(AuditedWrap, null,
        React__default["default"].createElement(MarketPlaceButton, { as: "a", href: marketplaceLink !== null && marketplaceLink !== void 0 ? marketplaceLink : MARKETPLACE_URL, target: isMobile ? "_self" : "_blank" },
            React__default["default"].createElement(Flex, { alignItems: "center" },
                React__default["default"].createElement(IconWrapper, null,
                    React__default["default"].createElement(Image__default["default"], { width: 19, height: 19, src: "".concat(baseAwsUrl, "/icons/Market.svg"), alt: "" })),
                React__default["default"].createElement(BodyText, { scale: "size14", color: "white", bold: true }, "Marketplace"))),
        React__default["default"].createElement(LinkWrap, { href: CERTIK_URL, target: "_blank" },
            React__default["default"].createElement(Image__default["default"], { width: 124, height: 35, src: "".concat(baseAwsUrl, "/icons/CertikAudited.svg"), alt: "Certik" }))));
};
var templateObject_1$i, templateObject_2$a, templateObject_3$7, templateObject_4$7;

var Wrapper$1 = styled__default["default"].footer(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  color: ", ";\n  background: ", ";\n  padding: 56px 16px 24px;\n  transition: padding-left 0.2s;\n  z-index: 10;\n\n  ", " {\n    padding: 56px 24px 24px;\n  }\n\n  ", " {\n    padding: 56px 24px;\n  }\n"], ["\n  color: ", ";\n  background: ", ";\n  padding: 56px 16px 24px;\n  transition: padding-left 0.2s;\n  z-index: 10;\n\n  ", " {\n    padding: 56px 24px 24px;\n  }\n\n  ", " {\n    padding: 56px 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark700;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var InnerRow = styled__default["default"].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: grid;\n  max-width: 1120px;\n  margin: 0 auto;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    \"footer-info\"\n    \"about\"\n    \"product\"\n    \"service\"\n    \"community\"\n    \"audit\";\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas:\n      \"footer-info footer-info footer-info\"\n      \"about product service\"\n      \"community . audit\";\n  }\n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(2, minmax(110px, 1fr)) 110px;\n    grid-template-areas:\n      \"footer-info . about product service \"\n      \"footer-info . community . audit\";\n  }\n\n  ", " {\n    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 174px;\n    grid-template-areas:\n      \"footer-info . about product service community\"\n      \"footer-info . about product service audit\";\n  }\n"], ["\n  display: grid;\n  max-width: 1120px;\n  margin: 0 auto;\n  grid-template-columns: 1fr;\n  grid-template-areas:\n    \"footer-info\"\n    \"about\"\n    \"product\"\n    \"service\"\n    \"community\"\n    \"audit\";\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas:\n      \"footer-info footer-info footer-info\"\n      \"about product service\"\n      \"community . audit\";\n  }\n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(2, minmax(110px, 1fr)) 110px;\n    grid-template-areas:\n      \"footer-info . about product service \"\n      \"footer-info . community . audit\";\n  }\n\n  ", " {\n    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 174px;\n    grid-template-areas:\n      \"footer-info . about product service community\"\n      \"footer-info . about product service audit\";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var Footer = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, registerToken = _a.registerToken, footerStatistic = _a.footerStatistic, aboutLinks = _a.aboutLinks, productLinks = _a.productLinks, serviceLinks = _a.serviceLinks, buyBswHandler = _a.buyBswHandler, socialLinks = _a.socialLinks, marketplaceLink = _a.marketplaceLink, baseAwsUrl = _a.baseAwsUrl, buyBswLabel = _a.buyBswLabel;
    return (React__default["default"].createElement(Wrapper$1, null,
        React__default["default"].createElement(InnerRow, null,
            React__default["default"].createElement(FooterInfo, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue, registerToken: registerToken, footerStatistic: footerStatistic, buyBswHandler: buyBswHandler, baseAwsUrl: baseAwsUrl, buyBswLabel: buyBswLabel }),
            React__default["default"].createElement(About, { footerLinks: aboutLinks }),
            React__default["default"].createElement(Product, { footerLinks: productLinks }),
            React__default["default"].createElement(Service, { footerLinks: serviceLinks }),
            React__default["default"].createElement(Community, { isFooter: true, socialLinks: socialLinks, baseAwsUrl: baseAwsUrl }),
            React__default["default"].createElement(Audit, { marketplaceLink: marketplaceLink, baseAwsUrl: baseAwsUrl }))));
};
var templateObject_1$h, templateObject_2$9;

var getTextColor = function (_a) {
    var $isActive = _a.$isActive, disabled = _a.disabled, theme = _a.theme;
    if (disabled)
        return theme.colors.gray900;
    if ($isActive)
        return theme.colors.primary;
    return theme.colors.backgroundDark;
};
var InnerLinksBlockContainer = styled__default["default"].div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  padding-top: 16px;\n  padding-left: ", ";\n"], ["\n  padding-top: 16px;\n  padding-left: ", ";\n"])), function (_a) {
    var padded = _a.padded;
    return padded && "58px";
});
var CommonDropdownMenuInnerLinkItem = function () { return styled.css(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    .inner-chevron {\n      margin-right: 4px;\n      transition: margin-right 150ms linear;\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    .inner-chevron {\n      margin-right: 4px;\n      transition: margin-right 150ms linear;\n    }\n  }\n"]))); };
var DropdownMenuInnerLinkItem = styled__default["default"].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), CommonDropdownMenuInnerLinkItem);
var DropdownMenuInnerOuterLinkItem = styled__default["default"].a(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), CommonDropdownMenuInnerLinkItem);
var CommonLinkStyle = function (_a) {
    var disabled = _a.disabled, $isActive = _a.$isActive, $hasIcon = _a.$hasIcon, label = _a.label;
    var isMobile = useMatchBreakpoints().isMobile;
    return styled.css(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n    align-items: center;\n    border: 0;\n    //background: transparent;\n    color: ", ";\n    cursor: ", ";\n    font-weight: 600;\n    line-height: 20px;\n    display: inline-flex;\n    font-size: 14px;\n    min-height: 40px;\n    justify-content: space-between;\n    outline: 0;\n    //padding-left: 16px;\n    width: 100%;\n\n    .arrow-icon {\n      ", "\n    }\n\n    &:hover:not(:disabled) {\n      color: ", ";\n\n      svg {\n        opacity: 0.85;\n      }\n\n      .arrow-icon {\n        visibility: visible;\n        transition: visibility 250ms linear, opacity 150ms linear;\n        opacity: 1;\n      }\n    }\n\n    &:active:not(:disabled) {\n      opacity: 0.85;\n      transform: translateY(1px);\n    }\n  "], ["\n    align-items: center;\n    border: 0;\n    //background: transparent;\n    color: ", ";\n    cursor: ", ";\n    font-weight: 600;\n    line-height: 20px;\n    display: inline-flex;\n    font-size: 14px;\n    min-height: 40px;\n    justify-content: space-between;\n    outline: 0;\n    //padding-left: 16px;\n    width: 100%;\n\n    .arrow-icon {\n      ", "\n    }\n\n    &:hover:not(:disabled) {\n      color: ", ";\n\n      svg {\n        opacity: 0.85;\n      }\n\n      .arrow-icon {\n        visibility: visible;\n        transition: visibility 250ms linear, opacity 150ms linear;\n        opacity: 1;\n      }\n    }\n\n    &:active:not(:disabled) {\n      opacity: 0.85;\n      transform: translateY(1px);\n    }\n  "])), function (_a) {
        var theme = _a.theme;
        return getTextColor({ theme: theme, disabled: disabled, $isActive: $isActive });
    }, disabled ? "not-allowed" : "pointer", !(isMobile && (label === "Marketplace" || label === "GameFi")) &&
        "\n        visibility: hidden;\n        opacity: 0;\n      ", function (_a) {
        var theme = _a.theme;
        return !$hasIcon && theme.colors.primary;
    });
};
var DropdownMenuItem = styled__default["default"].button(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), CommonLinkStyle);
var DropdownInternalMenuItem = styled__default["default"](reactRouterDom.Link)(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), CommonLinkStyle);
var StyledDropdownMenuItemContainer = styled__default["default"].div(templateObject_8$1 || (templateObject_8$1 = __makeTemplateObject(["\n  position: relative;\n  margin-bottom: 24px;\n\n  &:last-child {\n    margin-bottom: ", ";\n    ", " {\n      margin-bottom: 24px;\n    }\n  }\n\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"], ["\n  position: relative;\n  margin-bottom: 24px;\n\n  &:last-child {\n    margin-bottom: ", ";\n    ", " {\n      margin-bottom: 24px;\n    }\n  }\n\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n"])), function (_a) {
    var isOpenMenuItem = _a.isOpenMenuItem;
    return isOpenMenuItem ? "16px" : "32px";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, DropdownMenuItem, DropdownMenuItem);
var DropdownMenuDivider = styled__default["default"].hr(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 0;\n  ", "\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 0;\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray200;
}, function (_a) {
    var color = _a.color;
    return "\n    color: ".concat(color, ";\n    background-color: ").concat(color, ";\n    border-color: ").concat(color, ";\n");
});
var StyledDropdownMenu = styled__default["default"](Grid)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  grid-template-columns: 1fr;\n\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n\n  padding: 24px 24px 0;\n  pointer-events: auto;\n  width: 352px;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n  z-index: 1001;\n  box-shadow: 0 20px 36px -8px rgba(0, 26, 67, 0.24),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n\n  ", "\n\n  ", "\n"], ["\n  grid-template-columns: 1fr;\n\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n\n  padding: 24px 24px 0;\n  pointer-events: auto;\n  width: 352px;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n  z-index: 1001;\n  box-shadow: 0 20px 36px -8px rgba(0, 26, 67, 0.24),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return !$isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n    opacity: 0;\n  ";
}, function (_a) {
    var $isExtended = _a.$isExtended;
    return $isExtended &&
        "\n    grid-template-columns: repeat(2, 1fr);\n    grid-column-gap: 24px;\n    width: 680px;\n  ";
});
styled__default["default"](Text)(templateObject_11 || (templateObject_11 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var BannerPlacementItem = styled__default["default"].div(templateObject_12 || (templateObject_12 = __makeTemplateObject(["\n  margin: 0 -16px -16px;\n"], ["\n  margin: 0 -16px -16px;\n"])));
var BorderMobileMenuItem = styled__default["default"](Box)(templateObject_13 || (templateObject_13 = __makeTemplateObject(["\n  padding: 0 12px;\n  border-left: ", ";\n  ", " {\n    border-left: none;\n  }\n"], ["\n  padding: 0 12px;\n  border-left: ", ";\n  ", " {\n    border-left: none;\n  }\n"])), function (_a) {
    var theme = _a.theme, isHighlighted = _a.isHighlighted;
    return "4px solid ".concat(isHighlighted ? theme.colors.warningPress : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$g, templateObject_2$8, templateObject_3$6, templateObject_4$6, templateObject_5$5, templateObject_6$3, templateObject_7$1, templateObject_8$1, templateObject_9, templateObject_10, templateObject_11, templateObject_12, templateObject_13;

var LabelText = styled__default["default"](Text)(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 80px;\n"], ["\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  width: 80px;\n"])));
var InnerLinksBlock = function (_a) {
    var links = _a.links, leftIcon = _a.leftIcon, setIsOpen = _a.setIsOpen, linkComponent = _a.linkComponent, lastItem = _a.lastItem;
    var _b = useMatchBreakpoints(), isMobile = _b.isMobile, isTablet = _b.isTablet; _b.isDesktop;
    var renderLinks = function () {
        return links.map(function (_a, index) {
            var _b = _a.label, label = _b === void 0 ? "" : _b, _c = _a.href, href = _c === void 0 ? "/" : _c, _d = _a.icon, icon = _d === void 0 ? "ChevronRight" : _d, _e = _a.linkType, linkType = _e === void 0 ? exports.DropdownMenuItemType.INTERNAL_LINK : _e, mobileTarget = _a.mobileTarget, target = _a.target, _f = _a.fill, fill = _f === void 0 ? "primary" : _f;
            var getLinkContent = function () { return (React__default["default"].createElement(React__default["default"].Fragment, null,
                icon && (React__default["default"].createElement(IconComponent$1, { className: "inner-chevron", width: 16, iconName: icon, color: fill })),
                React__default["default"].createElement(LabelText, { bold: true, fontSize: "12px", color: fill }, label))); };
            return (React__default["default"].createElement(React.Fragment, { key: "".concat(index, "#").concat(label) },
                linkType === exports.DropdownMenuItemType.INTERNAL_LINK && (React__default["default"].createElement(DropdownMenuInnerLinkItem, { key: index + label, as: linkComponent, to: href, onClick: function () {
                        setIsOpen(false);
                    } }, getLinkContent())),
                linkType === exports.DropdownMenuItemType.EXTERNAL_LINK && (React__default["default"].createElement(DropdownMenuInnerOuterLinkItem, { key: index + label, href: href, target: isMobile ? mobileTarget || "_self" : target || "_blank", onClick: function () {
                        setIsOpen(false);
                    } }, getLinkContent()))));
        });
    };
    return (React__default["default"].createElement(InnerLinksBlockContainer, { padded: !!leftIcon && !isTablet },
        React__default["default"].createElement(Grid, { gridTemplateColumns: "1fr 1fr", gridGap: 16, paddingBottom: !lastItem ? 16 : 0 }, renderLinks()),
        !lastItem && React__default["default"].createElement(DropdownMenuDivider, null)));
};
var templateObject_1$f;

var DropdownMenuItemContainer = function (_a) {
    var _b;
    var _c = _a.isActive, isActive = _c === void 0 ? false : _c, leftIcon = _a.leftIcon, getMenuItemContent = _a.getMenuItemContent, _d = _a.links, links = _d === void 0 ? [] : _d, setIsOpen = _a.setIsOpen, linkComponent = _a.linkComponent, _e = _a.href, href = _e === void 0 ? "/" : _e, bannerRenderer = _a.bannerRenderer, type = _a.type, target = _a.target, mobileTarget = _a.mobileTarget; _a.badgeTitle; _a.badgeType; var isOpenItem = _a.isOpenItem, lastItem = _a.lastItem, itemProps = __rest(_a, ["isActive", "leftIcon", "getMenuItemContent", "links", "setIsOpen", "linkComponent", "href", "bannerRenderer", "type", "target", "mobileTarget", "badgeTitle", "badgeType", "isOpenItem", "lastItem"]);
    var _f = useMatchBreakpoints(), isMobile = _f.isMobile, isDesktop = _f.isDesktop;
    var hasInnerLinks = links.length > 0;
    // @ts-ignore
    return (React__default["default"].createElement(StyledDropdownMenuItemContainer, { isOpenMenuItem: isOpenItem },
        type === exports.DropdownMenuItemType.BUTTON && (React__default["default"].createElement(DropdownMenuItem, __assign({ "$isActive": isActive, "$hasIcon": !!leftIcon, type: "button" }, itemProps), getMenuItemContent(""))),
        type === exports.DropdownMenuItemType.CONTAINER && (React__default["default"].createElement(React__default["default"].Fragment, null,
            hasInnerLinks ? (React__default["default"].createElement(DropdownMenuItem, __assign({ "$isActive": isActive, "$hasIcon": true, as: linkComponent, href: (_b = links[0]) === null || _b === void 0 ? void 0 : _b.href, onClick: function () {
                    setIsOpen(false);
                } }, itemProps), getMenuItemContent(""))) : (React__default["default"].createElement(DropdownMenuItem, __assign({ "$isActive": isActive, "$hasIcon": true, as: "div" }, itemProps), getMenuItemContent(""))),
            hasInnerLinks && (React__default["default"].createElement(InnerLinksBlock, { links: links, leftIcon: leftIcon, setIsOpen: setIsOpen, linkComponent: linkComponent, lastItem: lastItem })))),
        type === exports.DropdownMenuItemType.INTERNAL_LINK && (React__default["default"].createElement(DropdownInternalMenuItem, __assign({ label: itemProps.label, "$isActive": isActive, "$hasIcon": !!leftIcon, as: linkComponent, to: href, onClick: function () {
                setIsOpen(false);
            } }, itemProps), getMenuItemContent("ArrowRight"))),
        type === exports.DropdownMenuItemType.EXTERNAL_LINK && (React__default["default"].createElement(DropdownMenuItem, __assign({ label: itemProps.label, "$isActive": isActive, "$hasIcon": !!leftIcon, as: "a", href: href, target: isMobile ? mobileTarget || "_self" : target || "_blank", onClick: function () {
                setIsOpen(false);
            } }, itemProps), getMenuItemContent("ArrowUpForward"))),
        type === exports.DropdownMenuItemType.DIVIDER && React__default["default"].createElement(DropdownMenuDivider, null),
        type === exports.DropdownMenuItemType.BANNER && isDesktop && bannerRenderer && (React__default["default"].createElement(BannerPlacementItem, null, bannerRenderer(href, target)))));
};

var getBG = function (_a) {
    var theme = _a.theme, leftIcon = _a.leftIcon;
    switch (leftIcon) {
        case "Market":
            return "linear-gradient(136.03deg, #1263F1 -7.36%, #F63D5E 131.43%)";
        case "GameFi":
            return "radial-gradient(170.13% 152.5% at 50% -32.5%, #FF1C5E 4.9%, #00000D 58.29%, #1EBB95 100%)";
        default:
            return theme.colors.primary;
    }
};
var IconComponentWrap = styled__default["default"].div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  align-self: flex-start;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: ", ";\n  width: 40px;\n  height: 40px;\n  border-radius: 8px;\n  align-self: flex-start;\n"])), getBG);
var MenuItemContent = function (_a) {
    var leftIcon = _a.leftIcon, label = _a.label, description = _a.description, rightIcon = _a.rightIcon, _b = _a.fill, fill = _b === void 0 ? "primary" : _b, badgeTitle = _a.badgeTitle, badgeType = _a.badgeType;
    var isMobile = useMatchBreakpoints().isMobile;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        leftIcon && (React__default["default"].createElement(IconComponentWrap, { leftIcon: leftIcon },
            React__default["default"].createElement(IconComponent$1, { width: 24, iconName: leftIcon, color: "white" }))),
        React__default["default"].createElement(Flex, { alignSelf: isMobile ? "stretch" : "", flexDirection: "column", flex: 1, paddingLeft: leftIcon && "16px" },
            React__default["default"].createElement(Flex, { alignItems: "center" },
                label,
                badgeTitle && (React__default["default"].createElement(Badge$1, { ml: "4px", badgeType: badgeType !== null && badgeType !== void 0 ? badgeType : "success" }, badgeTitle))),
            description && (React__default["default"].createElement(Text, { fontSize: "12px", color: "gray900", lineHeight: "16px" }, description))),
        rightIcon && (React__default["default"].createElement(IconComponent$1, { className: "arrow-icon", iconName: rightIcon, color: fill }))));
};
var templateObject_1$e;

var DropdownMenu = function (_a) {
    var children = _a.children; _a.isMobileNav; _a.showItemsOnMobile; var _d = _a.activeItem, activeItem = _d === void 0 ? "" : _d, _e = _a.items, items = _e === void 0 ? [] : _e; _a.mobileItems; _a.index; var _g = _a.isExtended, isExtended = _g === void 0 ? false : _g; _a.setMenuOpenByIndex; _a.mobileMenuCallback; var props = __rest(_a, ["children", "isMobileNav", "showItemsOnMobile", "activeItem", "items", "mobileItems", "index", "isExtended", "setMenuOpenByIndex", "mobileMenuCallback"]);
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var _h = React.useState(false), isOpen = _h[0], setIsOpen = _h[1];
    var _j = React.useState(null), targetRef = _j[0], setTargetRef = _j[1];
    var _k = React.useState(null), tooltipRef = _k[0], setTooltipRef = _k[1];
    var hasItems = items.length > 0;
    var hasMoreThanItems = items.length > 1;
    var _l = reactPopper.usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "bottom-start",
        modifiers: [{ name: "offset", options: { offset: [0, -14] } }],
    }), styles = _l.styles, attributes = _l.attributes, update = _l.update;
    React.useEffect(function () {
        var showDropdownMenu = function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = update;
                        if (!_a) return [3 /*break*/, 2];
                        return [4 /*yield*/, update()];
                    case 1:
                        _a = (_b.sent());
                        _b.label = 2;
                    case 2:
                        setIsOpen(true);
                        return [2 /*return*/];
                }
            });
        }); };
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            return target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu, {
            passive: true,
        });
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu, {
            passive: true,
        });
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen, update]);
    // useEffect(() => {
    //   if (setMenuOpenByIndex && index !== undefined) {
    //     setMenuOpenByIndex((prevValue) => ({
    //       ...prevValue,
    //       [index]: isOpen,
    //     }));
    //   }
    // }, [isOpen, setMenuOpenByIndex, index]);
    // useEffect(() => {
    //   mobileMenuCallback && mobileMenuCallback(isOpen);
    // }, [isOpen]);
    // useOnClickOutside(
    //   {
    //     current: targetRef,
    //   },
    //   () => {
    //     setIsOpen(false);
    //   }
    // );
    return (React__default["default"].createElement(Box, __assign({ ref: setTargetRef }, props),
        React__default["default"].createElement(Box
        // onPointerDown={() => {
        //   setIsOpen((s) => !s);
        //   update && update();
        // }}
        , null, children),
        hasItems && (React__default["default"].createElement(StyledDropdownMenu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { "$isOpen": isOpen, "$isExtended": isExtended && hasMoreThanItems }), items.map(function (_a, itemIndex) {
            var _b;
            var _c = _a.type, type = _c === void 0 ? exports.DropdownMenuItemType.INTERNAL_LINK : _c, label = _a.label, rightIconFill = _a.rightIconFill, description = _a.description, _d = _a.href, href = _d === void 0 ? "/" : _d, status = _a.status, _e = _a.leftIcon, leftIcon = _e === void 0 ? "" : _e, _f = _a.rightIcon, rightIcon = _f === void 0 ? "" : _f, _g = _a.links, links = _g === void 0 ? [] : _g, bannerRenderer = _a.bannerRenderer, target = _a.target, mobileTarget = _a.mobileTarget, badgeType = _a.badgeType, badgeTitle = _a.badgeTitle, itemProps = __rest(_a, ["type", "label", "rightIconFill", "description", "href", "status", "leftIcon", "rightIcon", "links", "bannerRenderer", "target", "mobileTarget", "badgeType", "badgeTitle"]);
            var getMenuItemContent = function (icon) {
                if (icon === void 0) { icon = rightIcon; }
                return (React__default["default"].createElement(MenuItemContent, { label: label, fill: rightIconFill, leftIcon: leftIcon, rightIcon: icon, description: description, status: status, badgeType: badgeType, badgeTitle: badgeTitle }));
            };
            var isActive = href === activeItem;
            var lastItem = itemIndex === (items === null || items === void 0 ? void 0 : items.length) - 1 ||
                ((_b = items[itemIndex + 1]) === null || _b === void 0 ? void 0 : _b.type) === exports.DropdownMenuItemType.BANNER;
            return (React__default["default"].createElement(DropdownMenuItemContainer, __assign({ key: itemIndex, isActive: isActive, leftIcon: leftIcon, getMenuItemContent: getMenuItemContent, links: links, setIsOpen: setIsOpen, linkComponent: linkComponent, href: href, bannerRenderer: bannerRenderer, type: type, target: target, mobileTarget: mobileTarget, lastItem: lastItem }, itemProps)));
        })))));
};

var AccordionBody = styled__default["default"].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.45s;\n\n  ", "\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  max-height: 0;\n  transition: max-height 0.45s;\n\n  ", "\n"])), function (_a) {
    var opened = _a.opened;
    return opened && styled.css(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n      max-height: 900px;\n    "], ["\n      max-height: 900px;\n    "])));
});
var AccordionTitle = styled__default["default"](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n"], ["\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n"])));
var AccordionComponent = styled__default["default"].div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Accordion = function (_a) {
    var label = _a.label, _b = _a.clickable, clickable = _b === void 0 ? true : _b, heading = _a.heading, children = _a.children, index = _a.index, href = _a.href, linkComponent = _a.linkComponent, setIsOpenMenu = _a.setIsOpenMenu, isOpenItem = _a.isOpenItem, currentOpen = _a.currentOpen, setCurrentOpen = _a.setCurrentOpen;
    var _c = React.useState(false), isOpened = _c[0], setIsOpened = _c[1];
    var isMobile = useMatchBreakpoints().isMobile;
    React.useEffect(function () {
        if (!clickable || isOpenItem) {
            setCurrentOpen(label);
        }
    }, [label, clickable]);
    React.useEffect(function () {
        setIsOpened(clickable ? currentOpen === label : true);
    }, [currentOpen, clickable]);
    var onTitleClick = function () {
        if (!href && clickable) {
            setCurrentOpen(!isOpened ? label : undefined);
        }
        else {
            setIsOpenMenu(false);
        }
    };
    return (React__default["default"].createElement(AccordionComponent, { key: "acc-key-".concat(label) },
        isMobile && index !== 1 && React__default["default"].createElement(DropdownMenuDivider, { color: "btnTertiary" }),
        React__default["default"].createElement(AccordionTitle, { as: href ? linkComponent : "div", href: href, onClick: onTitleClick }, heading(isOpened)),
        React__default["default"].createElement(AccordionBody, { opened: isOpened }, children),
        isMobile && !index && (React__default["default"].createElement(Box, { m: "0 -24px 0" },
            React__default["default"].createElement(DropdownMenuDivider, { color: "rgba(18, 99, 241, 0.16)" })))));
};
var templateObject_1$d, templateObject_2$7, templateObject_3$5, templateObject_4$5;

var PULSE_SUCCESS = styled.keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(29, 200, 124, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0);\n  }\n"], ["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(29, 200, 124, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(29, 200, 124, 0);\n  }\n"])));
var PULSE_WARNING = styled.keyframes(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(255, 219, 28, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0);\n  }\n"], ["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(255, 219, 28, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(255, 219, 28, 0);\n  }\n"])));
var PULSE_PRIMARY = styled.keyframes(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(18, 99, 241, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0);\n  }\n"], ["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(18, 99, 241, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(18, 99, 241, 0);\n  }\n"])));
var PULSE_SECONDARY = styled.keyframes(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(249, 59, 93, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0);\n  }\n"], ["\n  0% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0.7);\n  }\n\n  70% {\n    transform: scale(1);\n    box-shadow: 0 0 0 4px rgba(249, 59, 93, 0);\n  }\n\n  100% {\n    transform: scale(0.95);\n    box-shadow: 0 0 0 0 rgba(249, 59, 93, 0);\n  }\n"])));
var PULSES = {
    PRIMARY: PULSE_PRIMARY,
    SECONDARY: PULSE_SECONDARY,
    WARNING: PULSE_WARNING,
    SUCCESS: PULSE_SUCCESS,
};
var Marker = styled__default["default"](Box)(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: -4px;\n  width: 6px;\n  height: 6px;\n  transform: translateX(100%);\n  border-radius: 50%;\n  background-color: ", ";\n\n  &:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    top: -2px;\n    left: -2px;\n    z-index: 1;\n    animation: ", "\n      2s infinite;\n  }\n"], ["\n  position: absolute;\n  top: 0;\n  right: -4px;\n  width: 6px;\n  height: 6px;\n  transform: translateX(100%);\n  border-radius: 50%;\n  background-color: ", ";\n\n  &:before {\n    display: block;\n    content: \"\";\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    top: -2px;\n    left: -2px;\n    z-index: 1;\n    animation: ", "\n      2s infinite;\n  }\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return !color ? theme.colors.success : theme.colors[color];
}, function (_a) {
    var color = _a.color;
    return color ? PULSES[color.toUpperCase()] : PULSE_SUCCESS;
});
var templateObject_1$c, templateObject_2$6, templateObject_3$4, templateObject_4$4, templateObject_5$4;

var MobileCommunityWrapper = styled__default["default"].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-top: 32px;\n"], ["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin-top: 32px;\n"])));
var StyledMobileMenu = styled__default["default"].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  background-color: ", ";\n  width: 100vw;\n  height: calc(100vh - 72px);\n  overflow: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: stretch;\n  transform: translate3d(0px, 72px, 0px) !important;\n\n  ", "\n\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar-track {\n    -webkit-box-shadow: none;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  &::-webkit-slider-thumb {\n    display: none;\n  }\n"], ["\n  background-color: ", ";\n  width: 100vw;\n  height: calc(100vh - 72px);\n  overflow: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-content: stretch;\n  transform: translate3d(0px, 72px, 0px) !important;\n\n  ", "\n\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar-track {\n    -webkit-box-shadow: none;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  &::-webkit-slider-thumb {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return !$isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n    opacity: 0;\n  ";
});
var MobileMenu = function (_a) {
    var items = _a.items, mobileMenuCallback = _a.mobileMenuCallback, children = _a.children, activeItem = _a.activeItem, baseAwsUrl = _a.baseAwsUrl, props = __rest(_a, ["items", "mobileMenuCallback", "children", "activeItem", "baseAwsUrl"]);
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(null), targetRef = _c[0], setTargetRef = _c[1];
    var _d = React.useState(null), tooltipRef = _d[0], setTooltipRef = _d[1];
    var _e = React.useState(), currentOpen = _e[0], setCurrentOpen = _e[1];
    var _f = useMatchBreakpoints(), isMobile = _f.isMobile, isTablet = _f.isTablet;
    var hasItems = items.length > 0;
    var _g = reactPopper.usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "bottom",
    }), styles = _g.styles, attributes = _g.attributes, update = _g.update;
    React.useEffect(function () {
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu, {
            passive: true,
        });
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen, update]);
    React.useEffect(function () {
        document.body.style.overflow = isOpen ? "hidden" : "auto";
        mobileMenuCallback && mobileMenuCallback(isOpen);
    }, [isOpen]);
    var onPointerDownHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    setIsOpen(function (s) { return !s; });
                    _a = update;
                    if (!_a) return [3 /*break*/, 2];
                    return [4 /*yield*/, update()];
                case 1:
                    _a = (_b.sent());
                    _b.label = 2;
                case 2:
                    return [2 /*return*/];
            }
        });
    }); };
    return (React__default["default"].createElement(Box, __assign({ ref: setTargetRef }, props),
        React__default["default"].createElement(Box, { onPointerDown: onPointerDownHandler }, children),
        hasItems && (React__default["default"].createElement(StyledMobileMenu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { "$isOpen": isOpen }),
            React__default["default"].createElement(Box, null,
                items
                    .filter(function (item, categoryNum) { return item.label && !item.type; })
                    .map(function (_a, index) {
                    var label = _a.label, _b = _a.items, innerItems = _b === void 0 ? [] : _b, showItemsOnMobile = _a.showItemsOnMobile, hidden = _a.hidden; _a.showNavBadge; var href = _a.href; _a.highlightTitle;
                    var isMarker = items[index].showNavBadge;
                    var isMarkerColor = items[index].colorNavBadge;
                    var isOpenAccordion = label === "Biswap Products";
                    var firstAccordionItemMobile = index === 1 && isMobile;
                    if (hidden)
                        return null;
                    var isHighlighted = items[index].highlightTitle;
                    var visualize = !showItemsOnMobile ||
                        (showItemsOnMobile && isMobile && !hidden);
                    return (React__default["default"].createElement(BorderMobileMenuItem, { key: "".concat(label, "#").concat(index), isHighlighted: isHighlighted },
                        React__default["default"].createElement(Accordion, { index: index, label: label, href: href, linkComponent: linkComponent, setIsOpenMenu: setIsOpen, currentOpen: currentOpen, setCurrentOpen: setCurrentOpen, clickable: !isTablet && innerItems.length > 0, isOpenItem: isOpenAccordion, heading: function (opened) {
                                return (((!showItemsOnMobile && !hidden) ||
                                    (href && !isTablet)) && (React__default["default"].createElement(React__default["default"].Fragment, null,
                                    React__default["default"].createElement(Box, { m: firstAccordionItemMobile
                                            ? "4px 0 16px"
                                            : "16px 0", position: "relative" },
                                        isMarker && React__default["default"].createElement(Marker, { color: isMarkerColor }),
                                        React__default["default"].createElement(HeadText, { scale: isTablet ? "size20" : "size16", color: isMobile && opened && !href
                                                ? "primary"
                                                : isHighlighted && isTablet
                                                    ? "warningPress"
                                                    : "backgroundDark" }, label)),
                                    !isTablet && (React__default["default"].createElement(IconComponent$1, { width: !href ? "24px" : "20px", iconName: href
                                            ? "ArrowRight"
                                            : opened
                                                ? "ChevronUp"
                                                : "ChevronDown", color: opened ? "primary" : "dark800" })))));
                            } }, innerItems.length > 0 && (React__default["default"].createElement(Grid, { gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gridColumnGap: 16, mt: isOpenAccordion ? 16 : 0 }, innerItems
                            .filter(function (element) {
                            return element.type !== exports.DropdownMenuItemType.BANNER;
                        })
                            .map(function (_a, itemIndex, arr) {
                            var _b = _a.type, type = _b === void 0 ? exports.DropdownMenuItemType.INTERNAL_LINK : _b, label = _a.label, rightIconFill = _a.rightIconFill, description = _a.description, _c = _a.href, href = _c === void 0 ? "/" : _c, status = _a.status, _d = _a.leftIcon, leftIcon = _d === void 0 ? "" : _d, _e = _a.rightIcon, rightIcon = _e === void 0 ? "" : _e, _f = _a.links, links = _f === void 0 ? [] : _f, badgeTitle = _a.badgeTitle, badgeType = _a.badgeType, bannerRenderer = _a.bannerRenderer, itemProps = __rest(_a, ["type", "label", "rightIconFill", "description", "href", "status", "leftIcon", "rightIcon", "links", "badgeTitle", "badgeType", "bannerRenderer"]);
                            var getMenuItemContent = function (icon) {
                                if (icon === void 0) { icon = rightIcon; }
                                return (React__default["default"].createElement(MenuItemContent, { label: label, fill: rightIconFill, leftIcon: leftIcon, rightIcon: icon, description: description, status: status, badgeTitle: badgeTitle, badgeType: badgeType }));
                            };
                            var isActive = href === activeItem;
                            var lastItem = itemIndex === (arr === null || arr === void 0 ? void 0 : arr.length) - 1;
                            return (visualize && (React__default["default"].createElement(DropdownMenuItemContainer, __assign({ label: label, key: itemIndex, isActive: isActive, leftIcon: leftIcon, getMenuItemContent: getMenuItemContent, links: links, setIsOpen: setIsOpen, linkComponent: linkComponent, href: href, bannerRenderer: bannerRenderer, type: type, badgeTitle: badgeTitle, badgeType: badgeType, isOpenItem: isOpenAccordion, lastItem: lastItem }, itemProps))));
                        })))),
                        isTablet && !showItemsOnMobile && (React__default["default"].createElement(DropdownMenuDivider, null))));
                }),
                !isTablet && isMobile && (React__default["default"].createElement(Box, { m: "0 16px" },
                    React__default["default"].createElement(DropdownMenuDivider, { color: "btnTertiary" })))),
            isMobile && (React__default["default"].createElement(MobileCommunityWrapper, null,
                React__default["default"].createElement(Community, { menuVariant: true, iconSize: "24px", baseAwsUrl: baseAwsUrl })))))));
};
var templateObject_1$b, templateObject_2$5;

var translateY = "6px";
var menuAnimationConfig = {
    boxAnimationBackwards: styled.keyframes(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(0deg);\n    }\n    50% {\n      transform: rotate(-180deg);\n    }\n    75% {\n      transform: rotate(-180deg);\n    }\n    100% {\n      transform: rotate(-180deg);\n    }\n  "], ["\n    0% {\n      transform: rotate(0deg);\n    }\n    25% {\n      transform: rotate(0deg);\n    }\n    50% {\n      transform: rotate(-180deg);\n    }\n    75% {\n      transform: rotate(-180deg);\n    }\n    100% {\n      transform: rotate(-180deg);\n    }\n  "]))),
    boxAnimationForward: styled.keyframes(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n    0% {\n      transform: rotate(-180deg);\n    }\n    25% {\n      transform: rotate(-180deg);\n    }\n    50% {\n      transform: rotate(0deg);\n    }\n    75% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  "], ["\n    0% {\n      transform: rotate(-180deg);\n    }\n    25% {\n      transform: rotate(-180deg);\n    }\n    50% {\n      transform: rotate(0deg);\n    }\n    75% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  "]))),
    firstLineAnimationForward: styled.keyframes(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n    0% {\n      transform: translateY(0px);\n    }\n    25% {\n      transform: translateY(", ");\n    }\n    50% {\n      transform: translateY(", ");\n    }\n    75% {\n      transform: translateY(", ") rotate(45deg);\n    }\n    100% {\n      transform: translateY(", ") rotate(45deg);\n    }\n  "], ["\n    0% {\n      transform: translateY(0px);\n    }\n    25% {\n      transform: translateY(", ");\n    }\n    50% {\n      transform: translateY(", ");\n    }\n    75% {\n      transform: translateY(", ") rotate(45deg);\n    }\n    100% {\n      transform: translateY(", ") rotate(45deg);\n    }\n  "])), translateY, translateY, translateY, translateY),
    firstLineAnimationBackwards: styled.keyframes(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n    0% {\n      transform: translateY(", ") rotate(45deg);\n    }\n    25% {\n      transform: translateY(", ") rotate(45deg);\n    }\n    50% {\n      transform: translateY(", ");\n    }\n    75% {\n      transform: translateY(", ");\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  "], ["\n    0% {\n      transform: translateY(", ") rotate(45deg);\n    }\n    25% {\n      transform: translateY(", ") rotate(45deg);\n    }\n    50% {\n      transform: translateY(", ");\n    }\n    75% {\n      transform: translateY(", ");\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  "])), translateY, translateY, translateY, translateY),
    secondLineAnimationForward: styled.keyframes(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n    0% {\n      opacity: 1;\n    }\n    25% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0;\n    }\n  "], ["\n    0% {\n      opacity: 1;\n    }\n    25% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 0;\n    }\n  "]))),
    secondLineAnimationBackwards: styled.keyframes(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n    0% {\n      opacity: 0;\n    }\n    25% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n    }\n  "], ["\n    0% {\n      opacity: 0;\n    }\n    25% {\n      opacity: 0;\n    }\n    50% {\n      opacity: 0;\n    }\n    75% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 1;\n    }\n  "]))),
    thirdLineAnimationForward: styled.keyframes(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n    0% {\n      transform: translateY(0px);\n    }\n    25% {\n      transform: translateY(-", ");\n    }\n    50% {\n      transform: translateY(-", ");\n    }\n    75% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n    100% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n  "], ["\n    0% {\n      transform: translateY(0px);\n    }\n    25% {\n      transform: translateY(-", ");\n    }\n    50% {\n      transform: translateY(-", ");\n    }\n    75% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n    100% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n  "])), translateY, translateY, translateY, translateY),
    thirdLineAnimationBackwards: styled.keyframes(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n    0% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n    25% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n    50% {\n      transform: translateY(-", ");\n    }\n    75% {\n      transform: translateY(-", ");\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  "], ["\n    0% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n    25% {\n      transform: translateY(-", ") rotate(-45deg);\n    }\n    50% {\n      transform: translateY(-", ");\n    }\n    75% {\n      transform: translateY(-", ");\n    }\n    100% {\n      transform: translateY(0px);\n    }\n  "])), translateY, translateY, translateY, translateY),
};
var templateObject_1$a, templateObject_2$4, templateObject_3$3, templateObject_4$3, templateObject_5$3, templateObject_6$2, templateObject_7, templateObject_8;

var StyledBurger = styled__default["default"].button(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: 22px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  z-index: 10;\n  transition: all 0.2s linear;\n  gap: 4px;\n  ", "\n\n  span {\n    width: 22px;\n    height: 2px;\n    background: ", ";\n    border-radius: 10px;\n    transition: all 0.5s linear;\n    position: relative;\n    transform-origin: center;\n\n    ", "\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: 22px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  margin: 0;\n  z-index: 10;\n  transition: all 0.2s linear;\n  gap: 4px;\n  ", "\n\n  span {\n    width: 22px;\n    height: 2px;\n    background: ", ";\n    border-radius: 10px;\n    transition: all 0.5s linear;\n    position: relative;\n    transform-origin: center;\n\n    ", "\n  }\n"])), function (_a) {
    var open = _a.open, isLoaded = _a.isLoaded;
    if (open) {
        return styled.css(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n        animation: ", " 0.5s ease-in 0s\n          normal;\n        animation-fill-mode: forwards;\n      "], ["\n        animation: ", " 0.5s ease-in 0s\n          normal;\n        animation-fill-mode: forwards;\n      "])), menuAnimationConfig.boxAnimationForward);
    }
    else if (isLoaded) {
        return styled.css(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n        animation: ", " 0.5s ease-out 0s\n          normal;\n      "], ["\n        animation: ", " 0.5s ease-out 0s\n          normal;\n      "])), menuAnimationConfig.boxAnimationBackwards);
    }
}, function (_a) {
    var open = _a.open, isTablet = _a.isTablet, theme = _a.theme;
    if (open) {
        return isTablet ? theme.colors.white : theme.colors.dark800;
    }
    else {
        return theme.colors.white;
    }
}, function (_a) {
    var open = _a.open, isLoaded = _a.isLoaded;
    if (open) {
        return styled.css(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n          :first-child {\n            animation: ", " 0.3s\n              ease-in-out 0s normal;\n            animation-fill-mode: forwards;\n          }\n\n          :nth-child(2) {\n            animation: ", " 0.3s\n              linear 0s normal;\n            animation-fill-mode: forwards;\n          }\n\n          :nth-child(3) {\n            animation: ", " 0.3s\n              ease-in-out 0s normal;\n            animation-fill-mode: forwards;\n          }\n        "], ["\n          :first-child {\n            animation: ", " 0.3s\n              ease-in-out 0s normal;\n            animation-fill-mode: forwards;\n          }\n\n          :nth-child(2) {\n            animation: ", " 0.3s\n              linear 0s normal;\n            animation-fill-mode: forwards;\n          }\n\n          :nth-child(3) {\n            animation: ", " 0.3s\n              ease-in-out 0s normal;\n            animation-fill-mode: forwards;\n          }\n        "])), menuAnimationConfig.firstLineAnimationForward, menuAnimationConfig.secondLineAnimationForward, menuAnimationConfig.thirdLineAnimationForward);
    }
    else if (isLoaded) {
        return styled.css(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n          :first-child {\n            animation: ", " 0.3s ease-in-out 0s normal;\n            animation-fill-mode: forwards;\n          }\n          \n          :nth-child(2) {\n            animation: ", " 0.3s linear 0s normal;\n            animation-fill-mode: forwards;\n          }\n      \n          :nth-child(3) {\n            animation: ", " 0.3s ease-in-out 0s normal; \n            animation-fill-mode: forwards;\n          "], ["\n          :first-child {\n            animation: ", " 0.3s ease-in-out 0s normal;\n            animation-fill-mode: forwards;\n          }\n          \n          :nth-child(2) {\n            animation: ", " 0.3s linear 0s normal;\n            animation-fill-mode: forwards;\n          }\n      \n          :nth-child(3) {\n            animation: ", " 0.3s ease-in-out 0s normal; \n            animation-fill-mode: forwards;\n          "])), menuAnimationConfig.firstLineAnimationBackwards, menuAnimationConfig.secondLineAnimationBackwards, menuAnimationConfig.thirdLineAnimationBackwards);
    }
});
var templateObject_1$9, templateObject_2$3, templateObject_3$2, templateObject_4$2, templateObject_5$2;

var Burger = function (_a) {
    var open = _a.open;
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var isTablet = useMatchBreakpoints().isTablet;
    React.useEffect(function () {
        open && setIsLoaded(true);
    }, [open]);
    return (React__default["default"].createElement(StyledBurger, { "aria-label": "Toggle menu", isLoaded: isLoaded, "aria-expanded": open, open: open, isTablet: isTablet },
        React__default["default"].createElement("span", null),
        React__default["default"].createElement("span", null),
        React__default["default"].createElement("span", null)));
};

var MobileDropdownMenu = function (_a) {
    var items = _a.items, activeItem = _a.activeItem, _b = _a.isMobileMenuOpened, isMobileMenuOpened = _b === void 0 ? false : _b, mobileMenuCallback = _a.mobileMenuCallback, baseAwsUrl = _a.baseAwsUrl;
    var isMobile = useMatchBreakpoints().isMobile;
    var _c = React.useState(items), configItems = _c[0], setConfigItems = _c[1];
    React.useEffect(function () {
        if (isMobile) {
            setConfigItems(items.map(function (item) {
                if (item.isExtended) {
                    item.items =
                        item.items &&
                            item.items
                                .filter(function (extendItem, index) { return index % 2 === 0; })
                                .concat(item.items.filter(function (extendItem, index) { return index % 2 === 1; }));
                }
                return item;
            }));
        }
        else {
            setConfigItems(items);
        }
    }, [isMobile, items]);
    return (React__default["default"].createElement(MobileMenu, { items: configItems, mobileMenuCallback: mobileMenuCallback, isMobileNav: true, activeItem: activeItem, baseAwsUrl: baseAwsUrl },
        React__default["default"].createElement(MenuItem, null,
            React__default["default"].createElement(Burger, { open: isMobileMenuOpened }))));
};

var Divider = styled__default["default"](Box)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  opacity: 0.16;\n  border: 1px solid ", ";\n"], ["\n  opacity: 0.16;\n  border: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var MenuItemDivider = function () { return React__default["default"].createElement(Divider, { width: 0, height: 20 }); };
var templateObject_1$8;

var MenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, _c = _a.isMobileMenuOpened, isMobileMenuOpened = _c === void 0 ? false : _c, mobileMenuCallback = _a.mobileMenuCallback, baseAwsUrl = _a.baseAwsUrl; _a.children; var props = __rest(_a, ["items", "activeItem", "activeSubItem", "isMobileMenuOpened", "mobileMenuCallback", "baseAwsUrl", "children"]);
    var _d = useMatchBreakpoints(), isDesktop = _d.isDesktop, isTablet = _d.isTablet;
    return (React__default["default"].createElement(Flex, __assign({}, props, { alignItems: "center" }),
        !isDesktop && (React__default["default"].createElement(MobileDropdownMenu, { items: items, activeItem: activeItem, isMobileMenuOpened: isMobileMenuOpened, mobileMenuCallback: mobileMenuCallback, baseAwsUrl: baseAwsUrl })),
        items.map(function (_a, index) {
            var _b, _c, _d, _e;
            var label = _a.label, _f = _a.items, menuItems = _f === void 0 ? [] : _f, href = _a.href, _g = _a.icon, icon = _g === void 0 ? "" : _g, isExtended = _a.isExtended, showItemsOnMobile = _a.showItemsOnMobile, type = _a.type, hidden = _a.hidden; _a.showNavBadge; var highlightTitle = _a.highlightTitle;
            var isMarker = (_b = items[index]) === null || _b === void 0 ? void 0 : _b.showNavBadge;
            var isMarkerColor = (_c = items[index]) === null || _c === void 0 ? void 0 : _c.colorNavBadge;
            var isHighlighted = items[index].highlightTitle;
            var statusColor = (_e = (_d = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _d === void 0 ? void 0 : _d.status) === null || _e === void 0 ? void 0 : _e.color;
            var isActive = activeItem === href;
            var linkProps = isTouchDevice() && menuItems && menuItems.length > 0
                ? {}
                : { href: href };
            var visualize = (isDesktop || (isTablet && showItemsOnMobile)) && !hidden;
            return (visualize && (React__default["default"].createElement(React.Fragment, { key: "".concat(label, "#").concat(href) },
                React__default["default"].createElement(DropdownMenu, { key: "".concat(label, "#").concat(href, "#").concat(icon), items: menuItems, py: 1, activeItem: activeSubItem, isExtended: isExtended },
                    React__default["default"].createElement(MenuItem, __assign({}, linkProps, { isActive: isActive, statusColor: statusColor, highlightTitle: highlightTitle }),
                        type === ItemTypes.DIVIDER && React__default["default"].createElement(MenuItemDivider, null),
                        icon && (React__default["default"].createElement(IconComponent$1, { mr: "8px", iconName: icon, color: "white" })),
                        label && (React__default["default"].createElement(Box, { ml: !href ? "8px" : 0, position: "relative" },
                            isMarker && React__default["default"].createElement(Marker, { color: isMarkerColor }),
                            React__default["default"].createElement(Text, { color: isHighlighted ? "warningPress" : "white", fontSize: "14px", lineHeight: "20px", fontWeight: "600" }, label))))))));
        })));
};

// styled
var StyledInnerButton = styled__default["default"](Button$2)(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  height: auto;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n"], ["\n  display: flex;\n  align-items: center;\n  height: auto;\n  padding: 0;\n  border: none;\n  background-color: transparent;\n"])));
var LogoSwitcher = function (_a) {
    var logoSubtitle = _a.logoSubtitle;
    var _b = useMatchBreakpoints(), isMobile = _b.isMobile, isMd = _b.isMd;
    if (isMobile || isMd) {
        return React__default["default"].createElement(Icon$6, { width: "32px" });
    }
    else if (logoSubtitle) {
        return (React__default["default"].createElement(Flex, null,
            React__default["default"].createElement(Icon$6, { width: "32px" }),
            React__default["default"].createElement(Box, { ml: "8px" },
                React__default["default"].createElement(Icon$7, { width: "78px" }),
                React__default["default"].createElement(BodyText, { mt: "-6px", textAlign: "left", scale: "size12" }, logoSubtitle))));
    }
    return React__default["default"].createElement(Icon$8, { width: "145px" });
};
var Logo = function (_a) {
    var href = _a.href, logoSubtitle = _a.logoSubtitle;
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var isAbsoluteUrl = href.startsWith("http");
    return (React__default["default"].createElement(Flex, null, isAbsoluteUrl ? (React__default["default"].createElement(StyledInnerButton, { variant: "light", onClick: function () { return window.open(href, "_self"); }, "aria-label": "Biswap home page" },
        React__default["default"].createElement(LogoSwitcher, { logoSubtitle: logoSubtitle }))) : (React__default["default"].createElement(StyledInnerButton, { variant: "light", as: linkComponent, href: href, "aria-label": "Biswap home page" },
        React__default["default"].createElement(LogoSwitcher, { logoSubtitle: logoSubtitle })))));
};
var templateObject_1$7;

var Wrapper = styled__default["default"].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var getBackground = function (_a) {
    var theme = _a.theme, menuBg = _a.menuBg, isMobileMenuOpened = _a.isMobileMenuOpened;
    if (isMobileMenuOpened)
        return theme.card.background;
    if (menuBg && !isMobileMenuOpened)
        return theme.nav.background;
    return "transparent";
};
// const FishingWarn = styled.div<{ showFishingWarn: boolean }>`
//   display: flex;
//   align-items: center;
//   background: ${({ theme }) => theme.colors.warning};
//   height: ${({ showFishingWarn }) =>
//     !showFishingWarn ? "0px" : `${FISHING_MOBILE_BANNER_HEIGHT}px`};
//   padding: 10px 20px 10px 70px;
//   transition: height 0.3s ease;
//   position: relative;
//   overflow: hidden;
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     padding: 10px 40px 10px 100px;
//     height: ${({ showFishingWarn }) =>
//       !showFishingWarn ? "0px" : `${FISHING_BANNER_HEIGHT}px`};
//   }
// `;
// const Label = styled.span`
//   font-size: 14px;
//   color: ${({ theme }) => theme.colors.background};
//   flex-grow: 1;
//   font-weight: 600;
// `;
// const StyledImgWarnIcon = styled(WarningSolidIcon)`
//   width: 44px;
//   height: auto;
//   position: absolute;
//   top: 50%;
//   left: 14px;
//   transform: translateY(-50%);
//
//   ${({ theme }) => theme.mediaQueries.sm} {
//     left: 28px;
//     width: 64px;
//   }
// `;
var StyledNav = styled__default["default"].nav(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  transform: translate3d(0, 0, 0);\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    background-color: ", ";\n  } ;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  transform: translate3d(0, 0, 0);\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    background-color: ", ";\n  } ;\n"])), MENU_HEIGHT, getBackground, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme, menuBg = _a.menuBg;
    return menuBg ? theme.nav.background : "transparent";
});
var FixedContainer = styled__default["default"].div.attrs({
    id: "menu-container",
})(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"])), function (_a) {
    var showMenu = _a.showMenu, height = _a.height;
    return (showMenu ? 0 : "-".concat(height, "px"));
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
});
var TopBannerContainer = styled__default["default"].div(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  height: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  width: 100%;\n"], ["\n  height: ", ";\n  min-height: ", ";\n  max-height: ", ";\n  width: 100%;\n"])), function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
}, function (_a) {
    var height = _a.height;
    return "".concat(height, "px");
});
var BodyWrapper = styled__default["default"](Box)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default["default"].div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"], ["\n  flex-grow: 1;\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n"])));
var Menu = function (_a) {
    var _b;
    var _c = _a.linkComponent, linkComponent = _c === void 0 ? "a" : _c, banner = _a.banner, links = _a.links, rightSide = _a.rightSide; _a.subLinks; var activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, children = _a.children, BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, footerStatistic = _a.footerStatistic, registerToken = _a.registerToken, buyBswHandler = _a.buyBswHandler, aboutLinks = _a.aboutLinks, productLinks = _a.productLinks, serviceLinks = _a.serviceLinks, socialLinks = _a.socialLinks, withEvent = _a.withEvent; _a.eventCallback; 
    var //eventButtonLogo,
    customLogoSubtitle = _a.customLogoSubtitle, marketplaceLink = _a.marketplaceLink, _d = _a.baseAwsUrl, baseAwsUrl = _d === void 0 ? "https://static.biswap.org/bs" : _d, _e = _a.buyBswLabel, buyBswLabel = _e === void 0 ? "Buy BSW" : _e;
    var isMobile = useMatchBreakpoints().isMobile;
    var _f = React.useState(true), showMenu = _f[0], setShowMenu = _f[1];
    var _g = React.useState(false), menuBg = _g[0], setMenuBg = _g[1];
    var _h = React.useState(false), isMobileMenuOpened = _h[0], setIsMobileMenuOpened = _h[1];
    // const [showFishingWarn, setShowFishingWarn] = useState(true);
    var refPrevOffset = React.useRef(typeof window === "undefined" ? 0 : window.pageYOffset);
    // const fishingBannerHeight = isMobile
    //   ? FISHING_MOBILE_BANNER_HEIGHT
    //   : FISHING_BANNER_HEIGHT
    var topBannerHeight = isMobile
        ? TOP_BANNER_HEIGHT_MOBILE
        : TOP_BANNER_HEIGHT;
    var TopMenuWithBannerHeight = banner
        ? MENU_HEIGHT + topBannerHeight
        : MENU_HEIGHT;
    // const TopMenuWithAllBannersHeight = showFishingWarn
    //   ? TopMenuWithBannerHeight + fishingBannerHeight
    //   : TopMenuWithBannerHeight;
    var totalTopMenuHeight = withEvent && isMobile
        ? TopMenuWithBannerHeight + MOBILE_EVENT_BUTTON_HEIGHT
        : TopMenuWithBannerHeight;
    var RightSide = rightSide !== null && rightSide !== void 0 ? rightSide : React.Fragment;
    // const closeWarn = () => {
    //   localStorage.setItem("showFishingWarn", JSON.stringify(false));
    //   setShowFishingWarn(false);
    // };
    //
    // useEffect(() => {
    //   if (!localStorage.getItem("showFishingWarn")) {
    //     localStorage.setItem("showFishingWarn", JSON.stringify(true));
    //   }
    //   if (localStorage.getItem("showFishingWarn") === JSON.stringify(true)) {
    //     setShowFishingWarn(true);
    //   }
    // }, [showFishingWarn]);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight ===
                currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
                setMenuBg(false);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current ||
                    currentOffset <= totalTopMenuHeight) {
                    // Has scroll up
                    setShowMenu(true);
                    setMenuBg(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                    setMenuBg(true);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default["default"](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll, { passive: true });
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [totalTopMenuHeight]);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    // exclude Home link from displayed in menu
    // const filteredLinks = links.filter((link) => link.label !== "Home");
    return (React__default["default"].createElement(MenuContext.Provider, { value: { linkComponent: linkComponent } },
        React__default["default"].createElement(Wrapper, null,
            React__default["default"].createElement(FixedContainer, { showMenu: showMenu, height: isMobileMenuOpened ? 0 : totalTopMenuHeight },
                banner && (React__default["default"].createElement(TopBannerContainer, { height: topBannerHeight }, banner)),
                React__default["default"].createElement(StyledNav, { menuBg: menuBg, isMobileMenuOpened: isMobileMenuOpened },
                    React__default["default"].createElement(Flex, { alignItems: "center", justifyContent: "center" },
                        React__default["default"].createElement(Logo, { logoSubtitle: customLogoSubtitle, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
                        React__default["default"].createElement(MenuItems, { items: links, activeItem: activeItem, activeSubItem: activeSubItem, isMobileMenuOpened: isMobileMenuOpened, mobileMenuCallback: setIsMobileMenuOpened, baseAwsUrl: baseAwsUrl, ml: isMobile ? "12px" : "26px" })),
                    React__default["default"].createElement(Flex, { alignItems: "center", height: "100%" },
                        React__default["default"].createElement(RightSide, { isMobileMenuOpen: isMobileMenuOpened })))),
            React__default["default"].createElement(BodyWrapper, null,
                React__default["default"].createElement(Inner, { isPushed: false, showMenu: showMenu },
                    React__default["default"].createElement(React__default["default"].Fragment, null,
                        children,
                        React__default["default"].createElement(Footer, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue, footerStatistic: footerStatistic, registerToken: registerToken, buyBswHandler: buyBswHandler, aboutLinks: aboutLinks, productLinks: productLinks, serviceLinks: serviceLinks, socialLinks: socialLinks, marketplaceLink: marketplaceLink, baseAwsUrl: baseAwsUrl, buyBswLabel: buyBswLabel })))))));
};
var templateObject_1$6, templateObject_2$2, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1;

var ActionsContainer = styled__default["default"].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n"])));
styled__default["default"].img(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  margin-left: 8px;\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"], ["\n  margin-left: 8px;\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"])));
var ToastAction = function (_a) {
    _a.title; _a.telegramDescription; var tweeterDescription = _a.tweeterDescription, url = _a.url; _a.thx; var withGift = _a.withGift;
    return (React__default["default"].createElement(ActionsContainer, null,
        React__default["default"].createElement(SocialShareButton, { social: "twitter", message: tweeterDescription, link: url, mr: "8px", height: "32px", withGift: withGift })));
};
var templateObject_1$5, templateObject_2$1;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$8.INFO,
    _a[types.SUCCESS] = variants$8.SUCCESS,
    _a[types.DANGER] = variants$8.DANGER,
    _a[types.WARNING] = variants$8.WARNING,
    _a);
var ClearAllButton = styled__default["default"](Button$2)(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  top: ", ";\n  transform: translateY(50%);\n  padding: 0;\n  margin: 0;\n"], ["\n  position: absolute;\n  right: 0;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  top: ", ";\n  transform: translateY(50%);\n  padding: 0;\n  margin: 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var theme = _a.theme;
    return "1px solid ".concat(theme.colors.dark800);
}, function (_a) {
    var top = _a.top;
    return "".concat(-top, "px");
});
var StyledToast$1 = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1),\n    0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 352px;\n  }\n"], ["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1),\n    0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 352px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var LinkWrapper = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n"], ["\n  display: flex;\n  align-items: center;\n  margin: 6px 0;\n"])));
var LinkStyles = styled__default["default"].a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  color: ", ";\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n"], ["\n  color: ", ";\n  font-size: 12px;\n  font-weight: 500;\n  line-height: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
styled__default["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var ActionContainer = styled__default["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Toast = function (_a) {
    var _b = _a.removeButtonPosition, removeButtonPosition = _b === void 0 ? 60 : _b, clearAll = _a.clearAll, toast = _a.toast, style = _a.style, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleRemove = _a.handleRemove, progress = _a.progress, clearAllLabel = _a.clearAllLabel, viewBscScanLabel = _a.viewBscScanLabel, props = __rest(_a, ["removeButtonPosition", "clearAll", "toast", "style", "handleMouseEnter", "handleMouseLeave", "handleRemove", "progress", "clearAllLabel", "viewBscScanLabel"]);
    var description = toast.description, type = toast.type, title = toast.title, telegramDescription = toast.telegramDescription, tweeterDescription = toast.tweeterDescription, hash = toast.hash, url = toast.url, withGift = toast.withGift;
    return (React__default["default"].createElement(reactTransitionGroup.CSSTransition, __assign({ timeout: 250, style: style }, props),
        React__default["default"].createElement(StyledToast$1, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            clearAll && (React__default["default"].createElement(ClearAllButton, { scale: "sm", variant: "text", top: removeButtonPosition, onClick: function () { return clearAll(); } },
                React__default["default"].createElement(Text, { p: "0 8px", fontSize: "12px", color: "dark" }, clearAllLabel))),
            React__default["default"].createElement(Alert, { progress: progress, title: title, variant: alertTypeMap[type], onClick: handleRemove },
                React__default["default"].createElement("div", null,
                    hash && (React__default["default"].createElement(LinkWrapper, null,
                        React__default["default"].createElement(LinkStyles, { target: "_blank", href: "https://bscscan.com/tx/".concat(hash) }, viewBscScanLabel),
                        React__default["default"].createElement(Icon$30, { ml: "6px", width: "18px", height: "18px", color: "primary" }))),
                    description ? (React__default["default"].createElement(Text, { color: "#6B7D98", fontSize: "12px", as: "p", mb: "8px" }, description)) : (React__default["default"].createElement(React__default["default"].Fragment, null)),
                    telegramDescription && tweeterDescription && (React__default["default"].createElement(ActionContainer, null,
                        React__default["default"].createElement(ToastAction, { withGift: withGift, telegramDescription: telegramDescription, tweeterDescription: tweeterDescription, title: title, url: url, thx: "https://bscscan.com/tx/".concat(hash) }))))))));
};
var templateObject_1$4, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;

var ZINDEX = 1000;
var BOTTOM_POSITION = 120; // Initial position from the bottom
var StyledToastContainer$1 = styled__default["default"].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 0.25s ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 0.25s ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 0.25s ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 0.25s ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var clearAll = _a.clearAll, toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 10000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 8 : _c, _d = _a.clearAllLabel, clearAllLabel = _d === void 0 ? "Clear all" : _d, _e = _a.viewBscScanLabel, viewBscScanLabel = _e === void 0 ? "View on bscscan" : _e;
    var _f = React.useState(100), progress = _f[0], setProgress = _f[1];
    var _g = React.useState(true), progressRun = _g[0], setProgressRun = _g[1];
    var _h = React.useState(ttl), currentTime = _h[0], setCurrentTime = _h[1];
    // for update timer for new toast
    var updateTimerRef = React.useRef(1);
    var timer = React.useRef();
    var intervalRef = React.useRef();
    var removeHandler = React.useRef(onRemove);
    var resetAll = function () {
        setProgress(100);
        setCurrentTime(ttl);
        // clearTimeout(intervalRef.current)
        // clearTimeout(timer.current);
    };
    React.useEffect(function () {
        if (toasts.length !== updateTimerRef.current) {
            resetAll();
            updateTimerRef.current = toasts.length;
            intervalRef.current = window.setTimeout(function () {
                var timeToRemove = ttl;
                var percent = ttl / 100;
                setCurrentTime(timeToRemove > 0 ? timeToRemove : 0);
                if (progressRun && timeToRemove - percent >= 0) {
                    setProgress((timeToRemove - percent) / percent);
                }
            }, 100);
        }
        if (toasts.length && progressRun) {
            intervalRef.current = window.setTimeout(function () {
                var timeToRemove = (ttl * progress) / 100;
                var percent = ttl / 100;
                setCurrentTime(timeToRemove > 0 ? timeToRemove : 0);
                if (progressRun && timeToRemove - percent >= 0) {
                    setProgress((timeToRemove - percent) / percent);
                }
            }, 100);
        }
        return function () {
            return clearTimeout(intervalRef.current);
        };
        // eslint-disable-next-line
    }, [progress, currentTime, progressRun, toasts, updateTimerRef.current]);
    var handleRemove = React.useCallback(function () {
        var _a;
        removeHandler.current((_a = toasts[0]) === null || _a === void 0 ? void 0 : _a.id);
        setProgress(100);
        setCurrentTime(ttl);
        setProgressRun(true);
        clearTimeout(intervalRef.current);
        clearTimeout(timer.current);
        // eslint-disable-next-line
    }, [toasts, progress, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
        setProgressRun(false);
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }
    };
    var handleMouseLeave = function () {
        setProgressRun(true);
        if (timer.current) {
            clearTimeout(timer.current);
        }
        if (intervalRef.current) {
            clearTimeout(intervalRef.current);
        }
        timer.current = window.setTimeout(function () { }, currentTime);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, currentTime);
        return function () {
            clearTimeout(timer.current);
        };
    }, [handleRemove, currentTime]);
    var clearAllHandler = function () {
        if (clearAll) {
            clearAll();
            setProgressRun(true);
        }
    };
    return (React__default["default"].createElement(StyledToastContainer$1, null,
        React__default["default"].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var bottom = BOTTOM_POSITION + index * stackSpacing;
            var removeButtonPosition = stackSpacing * toasts.length + 40;
            if (index === 0)
                return (React__default["default"].createElement(Toast, { handleRemove: handleRemove, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave, progress: progress, key: toast.id, toast: toast, zIndex: zIndex, ttl: ttl, removeButtonPosition: removeButtonPosition, clearAll: toasts.length > 1 ? clearAllHandler : undefined, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex }, clearAllLabel: clearAllLabel, viewBscScanLabel: viewBscScanLabel }));
            return (React__default["default"].createElement(Toast, { key: toast.id, toast: toast, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex }, clearAllLabel: clearAllLabel, viewBscScanLabel: viewBscScanLabel }));
        }))));
};
var templateObject_1$3;

var StyledToast = styled__default["default"](Box)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: fixed;\n  right: auto;\n  left: 16px;\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1),\n    0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n  background: ", ";\n  padding: 16px 20px;\n\n  ", " {\n    transform: translate(-50%, 0);\n    left: 50%;\n  }\n"], ["\n  position: fixed;\n  right: auto;\n  left: 16px;\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1),\n    0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n  background: ", ";\n  padding: 16px 20px;\n\n  ", " {\n    transform: translate(-50%, 0);\n    left: 50%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ColoredToastItem = function (_a) {
    var toast = _a.toast, style = _a.style, props = __rest(_a, ["toast", "style"]);
    return (React__default["default"].createElement(reactTransitionGroup.CSSTransition, __assign({ timeout: 250, style: style }, props),
        React__default["default"].createElement(StyledToast, { left: "50%" },
            React__default["default"].createElement(Flex, { alignItems: "center" },
                React__default["default"].createElement(IconComponent, { iconName: "Check", color: "white", width: "26px" }),
                React__default["default"].createElement(BodyText, { bold: true, color: "white", ml: "12px" }, toast.title)))));
};
var templateObject_1$2;

var StyledToastContainer = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 0.25s ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 0.25s ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 0.25s ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 0.25s ease-out;\n  }\n"])));
var ColoredToasts = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 5000 : _b;
    var handleRemove = React.useCallback(function () {
        var _a;
        onRemove((_a = toasts[0]) === null || _a === void 0 ? void 0 : _a.id);
    }, [toasts, onRemove]);
    React.useEffect(function () {
        var timer = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer);
        };
    }, [handleRemove]);
    return (React__default["default"].createElement(StyledToastContainer, null,
        React__default["default"].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast) { return (React__default["default"].createElement(ColoredToastItem, { key: toast.id, toast: toast, ttl: ttl, style: { bottom: "50px" } })); }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'CodecPro', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.dark900;
});
var templateObject_1;

exports.AboutBSWOpacityIcon = Icon$F;
exports.AboutBSWSolidIcon = Icon$G;
exports.Alert = Alert;
exports.AnalyticsOpacityIcon = Icon$L;
exports.AnalyticsSolidIcon = Icon$M;
exports.ArrowDownIcon = Icon$31;
exports.ArrowFiguredIcon = Icon$a;
exports.ArrowLeftIcon = Icon$32;
exports.ArrowRightIcon = Icon$34;
exports.ArrowSkipLeftIcon = Icon$2_;
exports.ArrowSkipRightIcon = Icon$2$;
exports.ArrowSquarePrimary = ArrowSquarePrimary;
exports.ArrowSquareWhite = ArrowSquareWhite;
exports.ArrowUpForwardIcon = Icon$30;
exports.ArrowUpIcon = Icon$33;
exports.AuctionIcon = Icon$1T;
exports.AuctionOpacityIcon = Icon$1R;
exports.AuctionSolidIcon = Icon$1S;
exports.AuditProtectionOpacityIcon = Icon$s;
exports.AuditProtectionSolidIcon = Icon$r;
exports.AuditSearchOpacityIcon = Icon$p;
exports.AuditSearchSolidIcon = Icon$q;
exports.AutoRenewAnimateIcon = Icon$1m;
exports.AutoRenewIcon = Icon$1p;
exports.AutoRenewOpacityAnimateIcon = Icon$1n;
exports.AutoRenewOpacityIcon = Icon$1q;
exports.AutoRenewSolidAnimateIcon = Icon$1o;
exports.AutoRenewSolidIcon = Icon$1r;
exports.AvalancheIcon = Icon$b;
exports.BSCIcon = Icon$d;
exports.Badge = Badge$1;
exports.BadgeButton = Badge;
exports.BaseLayout = GridLayout$1;
exports.BaseMenu = BaseMenu;
exports.BellOpacityIcon = Icon$2g;
exports.BellSolidIcon = Icon$2h;
exports.BlockIcon = Icon$1H;
exports.BlockOpacityIcon = Icon$1G;
exports.BlockSolidIcon = Icon$1F;
exports.BodyText = BodyText;
exports.BookIcon = Icon$1Z;
exports.BookOpacityIcon = Icon$1X;
exports.BookSolidIcon = Icon$1Y;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BscBlackRoundIcon = Icon$3h;
exports.BswIcon = Icon$6;
exports.BurgerCloseIcon = Icon$1c;
exports.BurgerIcon = Icon$1d;
exports.Button = Button$2;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$2G;
exports.CalculateOpacityIcon = Icon$2I;
exports.CalculateSolidIcon = Icon$2H;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardViewIcon = Icon$2p;
exports.CardsLayout = GridLayout;
exports.CarouselHeader = CarouselHeader;
exports.CarouselNumbersBlock = CarouselNumbersBlock;
exports.CharityOpacityIcon = Icon$H;
exports.CharitySolidIcon = Icon$I;
exports.CheckIcon = Icon$2m;
exports.CheckOpacityIcon = Icon$2k;
exports.CheckSolidIcon = Icon$2l;
exports.Checkbox = Checkbox;
exports.ChevronDownCircleOpacityIcon = Icon$3f;
exports.ChevronDownCircleSolidIcon = Icon$3g;
exports.ChevronDownIcon = Icon$3e;
exports.ChevronLeftCircleOpacityIcon = Icon$39;
exports.ChevronLeftCircleSolidIcon = Icon$3a;
exports.ChevronLeftIcon = Icon$38;
exports.ChevronRightCircleOpacityIcon = Icon$3c;
exports.ChevronRightCircleSolidIcon = Icon$3d;
exports.ChevronRightIcon = Icon$3b;
exports.ChevronUpCircleOpacityIcon = Icon$35;
exports.ChevronUpCircleSolidIcon = Icon$36;
exports.ChevronUpDoubleIcon = Icon$2Z;
exports.ChevronUpIcon = Icon$37;
exports.ChevronUpTripleIcon = Icon$2Y;
exports.ClickableElementContainer = ClickableElementContainer;
exports.CloseCircleOpacityIcon = Icon$2M;
exports.CloseCircleSolidIcon = Icon$2L;
exports.CloseIcon = Icon$2N;
exports.CoinMarketCapIcon = Icon$f;
exports.ColoredToasts = ColoredToasts;
exports.Container = Container$1;
exports.ContainerCarousel = ContainerCarousel;
exports.CopyIcon = Icon$26;
exports.CopyOpacityIcon = Icon$24;
exports.CopySolidIcon = Icon$25;
exports.DirectionButton = DirectionButton;
exports.DocsOpacityIcon = Icon$t;
exports.DocsSolidIcon = Icon$u;
exports.Dot = Dot;
exports.DownloadIcon = Icon$3k;
exports.Dropdown = Dropdown;
exports.EditIcon = Icon$1x;
exports.EditOpacityIcon = Icon$1w;
exports.EditSolidIcon = Icon$1v;
exports.ExchangeOpacityIcon = Icon$15;
exports.ExchangeSolidIcon = Icon$16;
exports.ExpandableButton = ExpandableButton;
exports.ExpandableIcon = ExpandableIcon;
exports.ExpandableLabel = ExpandableLabel;
exports.ExpertModeOpacityIcon = Icon$13;
exports.ExpertModeSolidIcon = Icon$14;
exports.EyeCloseIcon = Icon$2n;
exports.EyeOpenIcon = Icon$2o;
exports.FacebookIcon = Icon$h;
exports.Faqs = Faqs;
exports.FarmsOpacityIcon = Icon$$;
exports.FarmsSolidIcon = Icon$10;
exports.FavoriteEmptyIcon = Icon$2s;
exports.FavoriteSolidIcon = Icon$2r;
exports.FileIcon = Icon$1W;
exports.FileOpacityIcon = Icon$1U;
exports.FileSolidIcon = Icon$1V;
exports.FilterIcon = Icon$20;
exports.FilterOpacityIcon = Icon$1_;
exports.FilterSolidIcon = Icon$1$;
exports.FireIcon = Icon$2C;
exports.FireOpacityIcon = Icon$2A;
exports.FireSolidIcon = Icon$2B;
exports.FixedStakingOpacityIcon = Icon$N;
exports.FixedStakingSolidIcon = Icon$O;
exports.FlagIcon = Icon$1K;
exports.FlagOpacityIcon = Icon$1J;
exports.FlagSolidIcon = Icon$1I;
exports.Flex = Flex;
exports.GasIcon = Icon$1t;
exports.GiftIcon = Icon$2;
exports.GobletOpacityIcon = Icon$V;
exports.GobletSolidIcon = Icon$W;
exports.Grid = Grid;
exports.HeadText = HeadText;
exports.Heading = Heading;
exports.HelpIcon = Icon$2D;
exports.HelpOpacityIcon = Icon$2F;
exports.HelpSolidIcon = Icon$2E;
exports.HeroWrapper = HeroWrapper;
exports.HistoryIcon = Icon$1g;
exports.HourglassIcon = Icon$3i;
exports.IconButton = IconButton;
exports.IconComponent = IconComponent;
exports.IdoOpacityIcon = Icon$X;
exports.IdoSolidIcon = Icon$Y;
exports.Image = Image;
exports.InfoIcon = Icon$2z;
exports.InfoOpacityIcon = Icon$2x;
exports.InfoSolidIcon = Icon$2y;
exports.InlineMenu = InlineMenu;
exports.InlineMenuContainer = InlineMenuContainer;
exports.Input = Input$1;
exports.InputGroup = InputGroup;
exports.InstagramIcon = Icon$o;
exports.ItemTypes = ItemTypes;
exports.LanguageIcon = Icon$3;
exports.LaunchpadOpacityIcon = Icon$R;
exports.LaunchpadSolidIcon = Icon$S;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.LiquidityOpacityIcon = Icon$17;
exports.LiquiditySolidIcon = Icon$18;
exports.ListOpacityIcon = Icon$1i;
exports.ListSolidIcon = Icon$1h;
exports.ListViewIcon = Icon$2q;
exports.LockIcon = Icon$5;
exports.LogoWithTextIcon = Icon$8;
exports.LotteryOpacityIcon = Icon$T;
exports.LotterySolidIcon = Icon$U;
exports.MatchBreakpointsProvider = MatchBreakpointsProvider;
exports.MedalIcon = Icon$1u;
exports.MediumIcon = Icon$n;
exports.Menu = Menu;
exports.MinusCircleOpacityIcon = Icon$2S;
exports.MinusCircleSolidIcon = Icon$2T;
exports.MinusIcon = Icon$2U;
exports.Modal = Modal;
exports.ModalBackButton = ModalBackButton;
exports.ModalBody = ModalBody$1;
exports.ModalCloseButton = ModalCloseButton;
exports.ModalContainer = ModalContainer;
exports.ModalHeader = ModalHeader;
exports.ModalProvider = ModalProvider;
exports.ModalTitle = ModalTitle;
exports.ModalWithBackground = ModalWithBackground;
exports.More2Icon = Icon$1y;
exports.MoreHorizontalIcon = Icon$1B;
exports.MoreHorizontalOpacityIcon = Icon$1z;
exports.MoreHorizontalSolidIcon = Icon$1A;
exports.MoreVerticalIcon = Icon$1E;
exports.MoreVerticalOpacityIcon = Icon$1C;
exports.MoreVerticalSolidIcon = Icon$1D;
exports.MouseIcon = Icon$3j;
exports.MultiPoolOpacityIcon = Icon$y;
exports.MultiPoolSolidIcon = Icon$x;
exports.NFTEarnOpacityIcon = Icon$P;
exports.NFTEarnSolidIcon = Icon$Q;
exports.NewsOpacityIcon = Icon$v;
exports.NewsSolidIcon = Icon$w;
exports.NotificationDot = NotificationDot;
exports.OptionsOpacityIcon = Icon$29;
exports.OptionsSolidIcon = Icon$2a;
exports.Overlay = Overlay;
exports.Pagination = Pagination;
exports.PercentSlider = PercentSlider;
exports.PerpetualOpacityIcon = Icon$1;
exports.PerpetualSolidIcon = Icon;
exports.PlayIcon = Icon$1s;
exports.PlusCircleOpacityIcon = Icon$2V;
exports.PlusCircleSolidIcon = Icon$2W;
exports.PlusIcon = Icon$2X;
exports.PolygonIcon = Icon$c;
exports.PoolsOpacityIcon = Icon$11;
exports.PoolsSolidIcon = Icon$12;
exports.ProductsOpacityIcon = Icon$1e;
exports.ProductsSolidIcon = Icon$1f;
exports.Program10mOpacityIcon = Icon$B;
exports.Program10mSolidIcon = Icon$C;
exports.ProjectNameIcon = Icon$7;
exports.QuoraIcon = Icon$e;
exports.Radio = Radio;
exports.RedditIcon = Icon$m;
exports.ReferralOpacityIcon = Icon$Z;
exports.ReferralSolidIcon = Icon$_;
exports.RefreshIcon = Icon$1l;
exports.RefreshOpacityIcon = Icon$1k;
exports.RefreshSolidIcon = Icon$1j;
exports.ResetCSS = ResetCSS;
exports.SearchOpacityIcon = Icon$2e;
exports.SearchSolidIcon = Icon$2f;
exports.ShareIcon = Icon$23;
exports.ShareOpacityIcon = Icon$21;
exports.ShareSolidIcon = Icon$22;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.SocialShareButton = SocialShareButton;
exports.SocialShareButtonCircle = SocialShareButtonCircle;
exports.SpaceAgentOpacityIcon = Icon$z;
exports.SpaceAgentSolidIcon = Icon$A;
exports.StarIcon = Icon$2d;
exports.StarOpacityIcon = Icon$2c;
exports.StarSolidIcon = Icon$2b;
exports.SubMenu = SubMenu;
exports.SubMenuContainer = SubMenuContainer;
exports.SubMenuItem = SubMenuItem;
exports.SubMenuItems = SubMenuItems;
exports.Svg = Svg;
exports.SwapHorizontalOpacityIcon = Icon$2w;
exports.SwapHorizontalSolidIcon = Icon$2v;
exports.SwapVerticalOpacityIcon = Icon$2u;
exports.SwapVerticalSolidIcon = Icon$2t;
exports.TabMenu = TabMenu;
exports.TabMenuItem = TabBarItem;
exports.TableCardSkeleton = TableCardSkeleton;
exports.TeamOpacityIcon = Icon$D;
exports.TeamSolidIcon = Icon$E;
exports.TelegramIcon = Icon$l;
exports.Terms = Terms;
exports.TestIcon = Icon$1N;
exports.TestOpacityIcon = Icon$1M;
exports.TestSolidIcon = Icon$1L;
exports.Text = Text;
exports.Ticket2Icon = Icon$9;
exports.TikTokIcon = Icon$g;
exports.TimerIcon = Icon$1Q;
exports.TimerOpacityIcon = Icon$1O;
exports.TimerSolidIcon = Icon$1P;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TooltipHelper = TooltipHelper;
exports.TooltipText = TooltipText;
exports.TwitchIcon = Icon$k;
exports.TwitterIcon = Icon$j;
exports.UnlockIcon = Icon$4;
exports.UsdLineIcon = Icon$19;
exports.UsdOpacityIcon = Icon$1b;
exports.UsdSolidIcon = Icon$1a;
exports.UserOpacityIcon = Icon$2i;
exports.UserSolidIcon = Icon$2j;
exports.VerifiedOpacityIcon = Icon$27;
exports.VerifiedSolidIcon = Icon$28;
exports.ViewMode = ViewMode;
exports.VotingOpacityIcon = Icon$J;
exports.VotingSolidIcon = Icon$K;
exports.WalletOpacityIcon = Icon$2J;
exports.WalletSolidIcon = Icon$2K;
exports.WarningCycleIcon = Icon$2O;
exports.WarningIcon = Icon$2P;
exports.WarningOpacityIcon = Icon$2R;
exports.WarningSolidIcon = Icon$2Q;
exports.YoutubeIcon = Icon$i;
exports.alertVariants = variants$8;
exports.bodyTextScaleMap = bodyTextScaleMap;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.formatSpacingAmount = formatSpacingAmount;
exports.getExternalLinkProps = getExternalLinkProps;
exports.getPortalRoot = getPortalRoot;
exports.getResponsiveAttrs = getResponsiveAttrs;
exports.getRgba = getRgba;
exports.getThemeValue = getThemeValue;
exports.headTextScaleMap = headTextScaleMap;
exports.isTouchDevice = isTouchDevice;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.menuConfig = links;
exports.menuStatus = status;
exports.toastTypes = types;
exports.useCarousel = useCarousel;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useOnClickOutside = useOnClickOutside;
exports.useTooltip = useTooltip;
