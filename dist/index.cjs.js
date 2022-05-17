'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var reactDom = require('react-dom');
var reactPopper = require('react-popper');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var lodash = require('lodash');
var reactTransitionGroup = require('react-transition-group');
var reactShare = require('react-share');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
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
        while (_) try {
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

var rotate$3 = styled.keyframes(templateObject_1$1i || (templateObject_1$1i = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2$J || (templateObject_2$J = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$3);
var Svg = styled__default["default"].svg(templateObject_3$p || (templateObject_3$p = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors.".concat(color), color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$1i, templateObject_2$J, templateObject_3$p;

var Icon$20 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1$ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1_ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1Z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors.".concat(color), color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default["default"].div(templateObject_1$1h || (templateObject_1$1h = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, styledSystem.space, styledSystem.typography, styledSystem.layout);
Text.defaultProps = {
    color: "text",
    small: false,
    ellipsis: false,
};
var templateObject_1$1h;

var TooltipText = styled__default["default"](Text)(templateObject_1$1g || (templateObject_1$1g = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted ".concat(theme.colors.textSubtle);
});
var templateObject_1$1g;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$8 = {
    XL: "xl",
    LG: "lg",
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$5 = {
    PRIMARY: "primary",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
    BOOST: "boost",
    SELECT: "select",
    SELECT_LIGHT: "selectLight",
    LIGHT_OUT: "LightOut",
    LIGHT: "light",
    TERTIARY: "tertiary",
    TERTIARY_OUT: "tertiaryOut",
    TEXT: "text",
};

var _a$7, _b$5;
var scaleVariants$2 = (_a$7 = {},
    _a$7[scales$8.XL] = {
        height: "48px",
        padding: "0 24px",
        borderRadius: "10px",
    },
    _a$7[scales$8.LG] = {
        height: "40px",
        padding: "0 16px",
        fontSize: "14px",
        borderRadius: "8px",
    },
    _a$7[scales$8.MD] = {
        height: "32px",
        padding: "0 12px",
        fontSize: "12px",
        borderRadius: "8px",
    },
    _a$7[scales$8.SM] = {
        height: "24px",
        padding: "0 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
    _a$7[scales$8.XS] = {
        height: "20px",
        padding: "0 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
    _a$7);
var styleVariants$3 = (_b$5 = {},
    _b$5[variants$5.PRIMARY] = {
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
    _b$5[variants$5.DANGER] = {
        backgroundColor: "secondary",
        color: "white",
        ":hover:not(:disabled)": {
            backgroundColor: "secondaryHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "secondaryPress",
        },
    },
    _b$5[variants$5.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
        ":hover:not(:disabled)": {
            backgroundColor: "successHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "successPress",
        },
    },
    _b$5[variants$5.WARNING] = {
        backgroundColor: "warning",
        color: "dark800",
        ":hover:not(:disabled)": {
            backgroundColor: "warningHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "warningPress",
        },
    },
    _b$5[variants$5.BOOST] = {
        backgroundColor: "boost",
        color: "white",
        ":hover:not(:disabled)": {
            backgroundColor: "boostHover",
        },
        ":active:not(:disabled)": {
            backgroundColor: "boostPress",
        },
    },
    _b$5[variants$5.TERTIARY] = {
        backgroundColor: 'btnTertiary',
        color: "primary",
        border: "1px solid transparent",
        ":hover:not(:disabled)": {
            backgroundColor: 'transparent',
            borderColor: 'btnTertiary'
        },
        ":active:not(:disabled)": {
            backgroundColor: 'transparent',
            borderColor: "primary",
        },
    },
    _b$5[variants$5.TERTIARY_OUT] = {
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
        }
    },
    _b$5[variants$5.LIGHT_OUT] = {
        color: "white",
        border: "1px solid",
        borderColor: "btnLightOutBorder",
        backgroundColor: 'transparent',
        ":hover:not(:disabled)": {
            backgroundColor: "btnLightOutBgHover",
            borderColor: "transparent"
        },
        ":active:not(:disabled)": {
            backgroundColor: "btnLightOutBgPress",
            borderColor: "transparent"
        }
    },
    _b$5[variants$5.LIGHT] = {
        backgroundColor: "btnLight",
        color: "white",
        border: "1px solid transparent",
        ":hover:not(:disabled)": {
            backgroundColor: "transparent",
            borderColor: "btnLight"
        },
        ":active:not(:disabled)": {
            backgroundColor: "transparent",
            borderColor: "white"
        },
    },
    _b$5[variants$5.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$5[variants$5.SELECT] = {
        backgroundColor: "inputBorder",
        color: "white",
        ":hover:not(:disabled)": {
            color: "white",
        },
        ":active:not(:disabled)": {
            color: "pastelBlue",
        },
    },
    _b$5[variants$5.SELECT_LIGHT] = {
        backgroundColor: "white",
        color: "backgroundDark",
        ":hover:not(:disabled)": {
            color: "backgroundDark",
        },
        ":active:not(:disabled)": {
            color: "text",
        },
    },
    _b$5);

var getDisabledStyles$1 = function (_a) {
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
var getOpacity$1 = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var getFlat$1 = function (_a) {
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
var StyledButton$1 = styled__default["default"].button(templateObject_1$1f || (templateObject_1$1f = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity$1, getDisabledStyles$1, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$2,
}), styledSystem.variant({
    variants: styleVariants$3,
}), styledSystem.layout, styledSystem.space, getFlat$1);
var templateObject_1$1f;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("button--disabled");
    }
    return (React__default["default"].createElement(StyledButton$1, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React__default["default"].createElement(React__default["default"].Fragment, null,
            React.isValidElement(startIcon) &&
                React.cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            React.isValidElement(endIcon) &&
                React.cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$5.PRIMARY,
    scale: scales$8.MD,
    disabled: false,
};

var IconButton = styled__default["default"](Button)(templateObject_1$1e || (templateObject_1$1e = __makeTemplateObject(["\n  padding: 0;\n"], ["\n  padding: 0;\n"])));
var templateObject_1$1e;

var Icon$1Y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1X = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1W = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1V = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1U = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1T = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1S = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1R = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ width: "10", viewBox: "0 0 10 10" }, props),
        React__default["default"].createElement("path", { d: "M2.98827 0.875215C2.98827 0.414978 3.36137 0.0418821 3.82161 0.0418823L9.12491 0.0418825C9.58514 0.041882 9.95824 0.414978 9.95824 0.875216V6.17852C9.95824 6.63875 9.58514 7.01185 9.12491 7.01185C8.66467 7.01185 8.29157 6.63875 8.29157 6.17852L8.29157 2.88706L1.42775 9.75088C1.12266 10.056 0.611509 10.0395 0.286072 9.71405C-0.0393648 9.38861 -0.0558536 8.87747 0.249243 8.57237L7.11306 1.70855L3.82161 1.70855C3.36137 1.70855 2.98827 1.33545 2.98827 0.875215Z" })));
};

var Icon$1Q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1P = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1O = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default["default"].createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React__default["default"].createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React__default["default"].createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React__default["default"].createElement("g", { mask: "url(#mask0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React__default["default"].createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React__default["default"].createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1N = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1M = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React__default["default"].createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React__default["default"].createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React__default["default"].createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React__default["default"].createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React__default["default"].createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1L = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default["default"].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$1K = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1J = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1I = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1H = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M17.0024 7C17.0024 6.44772 16.5547 6 16.0024 6C15.4502 6 15.0024 6.44772 15.0024 7L15.0024 17C15.0024 17.5523 15.4502 18 16.0024 18C16.5547 18 17.0024 17.5523 17.0024 17L17.0024 7Z" }),
        React__default["default"].createElement("path", { d: "M11.1725 12L7.2925 15.88C6.9025 16.27 6.9125 16.91 7.2925 17.3C7.6825 17.69 8.3125 17.69 8.7025 17.3L13.2925 12.71C13.6825 12.32 13.6825 11.69 13.2925 11.3L8.7025 6.70998C8.3125 6.31998 7.6825 6.31998 7.2925 6.70998C6.9025 7.09998 6.9025 7.72998 7.2925 8.11998L11.1725 12Z" })));
};

var Icon$1G = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1F = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18.2987 5.70997C17.9087 5.31997 17.2787 5.31997 16.8887 5.70997L11.9988 10.59L7.10875 5.69997C6.71875 5.30997 6.08875 5.30997 5.69875 5.69997C5.30875 6.08997 5.30875 6.71997 5.69875 7.10997L10.5888 12L5.69875 16.89C5.30875 17.28 5.30875 17.91 5.69875 18.3C6.08875 18.69 6.71875 18.69 7.10875 18.3L11.9988 13.41L16.8887 18.3C17.2787 18.69 17.9087 18.69 18.2987 18.3C18.6887 17.91 18.6887 17.28 18.2987 16.89L13.4087 12L18.2987 7.10997C18.6787 6.72997 18.6787 6.08997 18.2987 5.70997Z" })));
};

var Icon$1E = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1D = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M3 4C3 3.44772 3.44772 3 4 3H6C6.55228 3 7 3.44772 7 4V6C7 6.55228 6.55228 7 6 7H4C3.44772 7 3 6.55228 3 6V4Z" }),
        React__default["default"].createElement("path", { d: "M3 11C3 10.4477 3.44772 10 4 10H6C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14H4C3.44772 14 3 13.5523 3 13V11Z" }),
        React__default["default"].createElement("path", { d: "M6 17C6.55228 17 7 17.4477 7 18V20C7 20.5523 6.55228 21 6 21H4C3.44772 21 3 20.5523 3 20V18C3 17.4477 3.44772 17 4 17H6Z" }),
        React__default["default"].createElement("path", { d: "M11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H11Z" }),
        React__default["default"].createElement("path", { d: "M10 5C10 4.44772 10.4477 4 11 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H11C10.4477 6 10 5.55228 10 5Z" }),
        React__default["default"].createElement("path", { d: "M11 18C10.4477 18 10 18.4477 10 19C10 19.5523 10.4477 20 11 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H11Z" })));
};

var Icon$1z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M3 4C3 3.44772 3.44772 3 4 3H6C6.55228 3 7 3.44772 7 4V6C7 6.55228 6.55228 7 6 7H4C3.44772 7 3 6.55228 3 6V4Z" }),
        React__default["default"].createElement("path", { d: "M10 4C10 3.44772 10.4477 3 11 3H13C13.5523 3 14 3.44772 14 4V6C14 6.55228 13.5523 7 13 7H11C10.4477 7 10 6.55228 10 6V4Z" }),
        React__default["default"].createElement("path", { d: "M21 4C21 3.44772 20.5523 3 20 3H18C17.4477 3 17 3.44772 17 4V6C17 6.55228 17.4477 7 18 7H20C20.5523 7 21 6.55228 21 6V4Z" }),
        React__default["default"].createElement("path", { d: "M3 11C3 10.4477 3.44772 10 4 10H6C6.55228 10 7 10.4477 7 11V13C7 13.5523 6.55228 14 6 14H4C3.44772 14 3 13.5523 3 13V11Z" }),
        React__default["default"].createElement("path", { d: "M7 18C7 17.4477 6.55228 17 6 17H4C3.44772 17 3 17.4477 3 18V20C3 20.5523 3.44772 21 4 21H6C6.55228 21 7 20.5523 7 20V18Z" }),
        React__default["default"].createElement("path", { d: "M10 11C10 10.4477 10.4477 10 11 10H13C13.5523 10 14 10.4477 14 11V13C14 13.5523 13.5523 14 13 14H11C10.4477 14 10 13.5523 10 13V11Z" }),
        React__default["default"].createElement("path", { d: "M14 18C14 17.4477 13.5523 17 13 17H11C10.4477 17 10 17.4477 10 18V20C10 20.5523 10.4477 21 11 21H13C13.5523 21 14 20.5523 14 20V18Z" }),
        React__default["default"].createElement("path", { d: "M17 11C17 10.4477 17.4477 10 18 10H20C20.5523 10 21 10.4477 21 11V13C21 13.5523 20.5523 14 20 14H18C17.4477 14 17 13.5523 17 13V11Z" }),
        React__default["default"].createElement("path", { d: "M21 18C21 17.4477 20.5523 17 20 17H18C17.4477 17 17 17.4477 17 18V20C17 20.5523 17.4477 21 18 21H20C20.5523 21 21 20.5523 21 20V18Z" })));
};

var Icon$1y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M20 40c11.046 0 20-8.954 20-20S31.046 0 20 0 0 8.954 0 20s8.954 20 20 20z", fill: "#fff" }),
        React__default["default"].createElement("path", { d: "M35.492 7.524c-1.387.274-2.71.662-3.798.903-2.484.557-4.807 2.46-5.315 5.944-.452 3.113.597 4.452.137 8.073-.806 6.322-6.87 8.5-9.701 9.822-1.638.758-5.613 2.5-8.678 3.83A19.9 19.9 0 0020 40c11.049 0 20-8.952 20-20 0-4.71-1.629-9.04-4.355-12.452a6.31 6.31 0 00-.153-.024z", fill: "url(#logo-color-1)" }),
        React__default["default"].createElement("path", { d: "M17.75 17.064c1.54-3.33.984-3.338 2.153-6.467 1.476-3.968 6.065-2.839 7.33-2.67 2.09.283 2.638-.46 7.041-1.169.218-.032.428-.064.637-.089C31.25 2.581 25.927 0 20 0 12.04 0 5.17 4.645 1.952 11.379c6.596 1.637 13.717 5.194 15.798 5.685zm-4.371-13.58c.58.089 3.403 3.597 3.935 12.605 0 0-3.629-.871-4.41-2.742-.646-1.54.193-3.565.475-9.863zm22.234 4.024c.008.016.024.024.032.04-.048-.008-.105-.008-.153-.016.04-.016.08-.016.12-.024zM0 20c0-1.597.185-3.145.54-4.63.726.606 1.5 1.275 2.323 2.041 5.21 4.83 13.685 8.645 16.774 5.097.008.008.016.008.016.016-.564.742-2.717 3.089-6.83 2.363l-6.5 9.702A19.943 19.943 0 010 20z", fill: "url(#logo-color-2)" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "logo-color-1", x1: "32.011", y1: "12.762", x2: "27.293", y2: "38.757", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "logo-color-2", x1: "9.653", y1: "29.461", x2: "20.086", y2: "0", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: ".002", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$1x = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 512 512" }, props),
        React__default["default"].createElement("circle", { cx: "256", cy: "256", r: "256", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M149.813 139.861C144.738 112.406 165.591 87.0417 193.238 87.0417C217.636 87.0417 237.414 107.022 237.414 131.669V186.687C243.517 186.252 249.718 186.028 255.998 186.028C262.032 186.028 267.992 186.234 273.862 186.636V131.669C273.862 107.022 293.641 87.0417 318.039 87.0417C345.686 87.0417 366.539 112.406 361.464 139.861L349.509 204.532C390.538 222.627 421.562 254.056 421.562 293.548V317.442C421.562 349.919 400.293 377.11 370.56 395.466C340.595 413.965 300.058 424.962 255.998 424.962C211.939 424.962 171.401 413.965 141.436 395.466C111.703 377.11 90.4342 349.919 90.4342 317.442V293.548C90.4342 254.265 121.139 222.957 161.822 204.825L149.813 139.861ZM334.189 213.028L348.178 137.354C351.701 118.299 337.227 100.695 318.039 100.695C301.105 100.695 287.378 114.562 287.378 131.669V201.683C282.941 201.108 278.433 200.653 273.862 200.323C268.003 199.899 262.042 199.682 255.998 199.682C249.707 199.682 243.505 199.918 237.414 200.376C232.844 200.72 228.335 201.189 223.899 201.777V131.669C223.899 114.562 210.172 100.695 193.238 100.695C174.05 100.695 159.576 118.299 163.099 137.354L177.134 213.279C133.257 229.744 103.95 259.533 103.95 293.548V317.442C103.95 369.283 172.024 411.308 255.998 411.308C339.972 411.308 408.047 369.283 408.047 317.442V293.548C408.047 259.36 378.439 229.44 334.189 213.028Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M408.047 317.442C408.047 369.283 339.972 411.308 255.998 411.308C172.024 411.308 103.95 369.283 103.95 317.442V293.548H408.047V317.442Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M163.099 137.354C159.576 118.299 174.05 100.695 193.238 100.695C210.172 100.695 223.899 114.562 223.899 131.669V201.777C234.247 200.404 244.986 199.682 255.998 199.682C266.755 199.682 277.252 200.371 287.378 201.683V131.669C287.378 114.562 301.105 100.695 318.039 100.695C337.227 100.695 351.701 118.299 348.178 137.354L334.189 213.028C378.439 229.44 408.047 259.36 408.047 293.548C408.047 345.389 339.972 387.415 255.998 387.415C172.024 387.415 103.95 345.389 103.95 293.548C103.95 259.533 133.257 229.744 177.134 213.279L163.099 137.354Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { d: "M213.762 286.722C213.762 300.86 206.199 312.322 196.868 312.322C187.538 312.322 179.974 300.86 179.974 286.722C179.974 272.583 187.538 261.122 196.868 261.122C206.199 261.122 213.762 272.583 213.762 286.722Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M330.333 286.722C330.333 300.86 322.769 312.322 313.439 312.322C304.108 312.322 296.544 300.86 296.544 286.722C296.544 272.583 304.108 261.122 313.439 261.122C322.769 261.122 330.333 272.583 330.333 286.722Z", fill: "#633001" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "256", y1: "0", x2: "256", y2: "512", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#54DADE" }),
                React__default["default"].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var rotate$2 = styled.keyframes(templateObject_1$1d || (templateObject_1$1d = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var Loader$1 = styled__default["default"](Svg)(templateObject_2$I || (templateObject_2$I = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$2);
var Icon$1w = function (props) {
    return (React__default["default"].createElement(Loader$1, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};
var templateObject_1$1d, templateObject_2$I;

var Icon$1v = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React__default["default"].createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React__default["default"].createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React__default["default"].createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React__default["default"].createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React__default["default"].createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React__default["default"].createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React__default["default"].createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React__default["default"].createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React__default["default"].createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React__default["default"].createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default["default"].createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React__default["default"].createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default["default"].createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React__default["default"].createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React__default["default"].createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React__default["default"].createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React__default["default"].createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React__default["default"].createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default["default"].createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React__default["default"].createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React__default["default"].createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$1u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1s = function (props) {
    var theme = styled.useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default["default"].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React__default["default"].createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React__default["default"].createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React__default["default"].createElement("g", { mask: "url(#A)" },
            React__default["default"].createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React__default["default"].createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React__default["default"].createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React__default["default"].createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$1r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$1q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.43832 38.1153C2.43048 38.3002 2.42654 38.4857 2.42654 38.6718C2.42654 39.3754 2.48287 40.0702 2.59273 40.7545H2.42654V41.8317C2.42654 42.3575 2.45801 42.8784 2.51976 43.3937C3.7248 53.4491 16.4632 61.3609 32 61.3609C47.5368 61.3609 60.2752 53.4491 61.4802 43.3937C61.542 42.8784 61.5735 42.3575 61.5735 41.8317V40.7545H61.4073C61.5171 40.0702 61.5735 39.3754 61.5735 38.6718C61.5735 38.4857 61.5695 38.3002 61.5617 38.1153C61.1156 27.587 48.0511 19.1426 32 19.1426C15.9489 19.1426 2.88444 27.587 2.43832 38.1153ZM0.00951064 38.1153C0.229456 31.6916 4.24297 26.2955 9.82907 22.6067C15.6197 18.7827 23.4643 16.5034 32 16.5034C40.5358 16.5034 48.3803 18.7827 54.1709 22.6067C59.757 26.2955 63.7705 31.6916 63.9905 38.1153H64V41.8317C64 48.5003 59.9176 54.102 54.1709 57.8969C48.3803 61.7208 40.5358 64.0001 32 64.0001C23.4643 64.0001 15.6197 61.7208 9.82907 57.8969C4.08238 54.102 0 48.5003 0 41.8317V38.1153H0.00951064Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M61.5734 41.832C61.5734 52.6177 48.3329 61.3612 32 61.3612C15.667 61.3612 2.42651 52.6177 2.42651 41.832V38.7405H61.5734V41.832Z", fill: "#BEBEBE" }),
        React__default["default"].createElement("path", { d: "M61.5734 38.6718C61.5734 49.4575 48.3329 58.201 32 58.201C15.667 58.201 2.42651 49.4575 2.42651 38.6718C2.42651 27.8861 15.667 19.1426 32 19.1426C48.3329 19.1426 61.5734 27.8861 61.5734 38.6718Z", fill: "#FAF9FA" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 33.1548C6.97663 33.167 6.97661 33.1792 6.97661 33.1915C6.97661 34.0795 7.09495 34.9492 7.32173 35.794H6.97634V36.9377C6.97634 37.4425 7.01459 37.9414 7.08925 38.4332C8.21673 45.8588 17.6492 51.6547 29.1184 51.6547C40.5876 51.6547 50.0201 45.8588 51.1475 38.4332C51.2222 37.9414 51.2604 37.4425 51.2604 36.9377V35.794H50.9156C51.1362 34.9723 51.2542 34.127 51.2604 33.2641C51.2606 33.2399 51.2607 33.2157 51.2607 33.1915C51.2607 33.1792 51.2607 33.167 51.2606 33.1548C51.2309 25.0436 41.329 18.4744 29.1187 18.4744C16.9083 18.4744 7.00645 25.0436 6.97668 33.1548ZM4.55012 33.1548H4.5498V36.9377C4.5498 42.269 7.79116 46.6683 12.1963 49.5962C16.643 52.5518 22.632 54.2939 29.1184 54.2939C35.6048 54.2939 41.5937 52.5518 46.0405 49.5962C50.4456 46.6683 53.687 42.269 53.687 36.9377V33.2739C53.6872 33.2464 53.6872 33.2189 53.6872 33.1915C53.6872 27.8601 50.4459 23.4609 46.0408 20.533C41.594 17.5773 35.6051 15.8352 29.1187 15.8352C22.6322 15.8352 16.6433 17.5773 12.1965 20.533C7.80153 23.4542 4.56495 27.84 4.55012 33.1548Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M51.2604 36.9379C51.2604 45.0659 41.3471 51.6549 29.1184 51.6549C16.8897 51.6549 6.97632 45.0659 6.97632 36.9379V33.4849H51.2604V36.9379Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M51.2604 33.1914C51.2604 41.3195 41.3471 47.9085 29.1184 47.9085C16.8897 47.9085 6.97632 41.3195 6.97632 33.1914C6.97632 25.0634 16.8897 18.4744 29.1184 18.4744C41.3471 18.4744 51.2604 25.0634 51.2604 33.1914Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.6497 25.2371C13.6496 25.2493 13.6496 25.2615 13.6496 25.2737C13.6496 26.1618 13.7679 27.0315 13.9947 27.8762H13.6493V29.0199C13.6493 29.5248 13.6876 30.0237 13.7622 30.5154C14.8897 37.941 24.3222 43.737 35.7914 43.737C47.2605 43.737 56.693 37.941 57.8205 30.5154C57.8952 30.0237 57.9334 29.5248 57.9334 29.0199V27.8762H57.5886C57.8092 27.0545 57.9271 26.2092 57.9334 25.3464C57.9336 25.3222 57.9337 25.298 57.9337 25.2737C57.9337 25.2615 57.9337 25.2493 57.9336 25.2371C57.9038 17.1259 48.0019 10.5567 35.7916 10.5567C23.5813 10.5567 13.6794 17.1259 13.6497 25.2371ZM11.2231 25.2371H11.2228V29.0199C11.2228 34.3513 14.4641 38.7505 18.8693 41.6785C23.316 44.6341 29.3049 46.3762 35.7914 46.3762C42.2778 46.3762 48.2667 44.6341 52.7135 41.6785C57.1186 38.7505 60.36 34.3513 60.36 29.0199V25.3561C60.3601 25.3287 60.3602 25.3012 60.3602 25.2737C60.3602 19.9424 57.1189 15.5432 52.7137 12.6152C48.267 9.65961 42.2781 7.91748 35.7916 7.91748C29.3052 7.91748 23.3163 9.65961 18.8695 12.6152C14.4745 15.5364 11.2379 19.9222 11.2231 25.2371Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M57.9334 29.0201C57.9334 37.1481 48.0201 43.7372 35.7913 43.7372C23.5626 43.7372 13.6493 37.1481 13.6493 29.0201V25.5671H57.9334V29.0201Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M57.9334 25.274C57.9334 33.402 48.0201 39.991 35.7913 39.991C23.5626 39.991 13.6493 33.402 13.6493 25.274C13.6493 17.1459 23.5626 10.5569 35.7913 10.5569C48.0201 10.5569 57.9334 17.1459 57.9334 25.274Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.97668 17.3196C6.97663 17.3318 6.97661 17.344 6.97661 17.3563C6.97661 18.2443 7.09495 19.114 7.32173 19.9588H6.97634V21.1025C6.97634 21.6073 7.01459 22.1062 7.08925 22.598C8.21673 30.0236 17.6492 35.8195 29.1184 35.8195C40.5876 35.8195 50.0201 30.0236 51.1475 22.598C51.2222 22.1062 51.2604 21.6073 51.2604 21.1025V19.9588H50.9156C51.1362 19.1371 51.2542 18.2917 51.2604 17.4289C51.2606 17.4047 51.2607 17.3805 51.2607 17.3563C51.2607 17.344 51.2607 17.3318 51.2606 17.3196C51.2309 9.20843 41.329 2.63919 29.1187 2.63919C16.9083 2.63919 7.00645 9.20843 6.97668 17.3196ZM4.55012 17.3196H4.5498V21.1025C4.5498 26.4338 7.79116 30.833 12.1963 33.761C16.643 36.7166 22.632 38.4587 29.1184 38.4587C35.6048 38.4587 41.5937 36.7166 46.0405 33.761C50.4456 30.833 53.687 26.4338 53.687 21.1025V17.4387C53.6872 17.4112 53.6872 17.3837 53.6872 17.3563C53.6872 12.0249 50.4459 7.62568 46.0408 4.69775C41.594 1.74213 35.6051 0 29.1187 0C22.6322 0 16.6433 1.74213 12.1965 4.69775C7.80153 7.61896 4.56495 12.0047 4.55012 17.3196Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M51.2604 21.1027C51.2604 29.2307 41.3471 35.8197 29.1184 35.8197C16.8897 35.8197 6.97632 29.2307 6.97632 21.1027V17.6497H51.2604V21.1027Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M51.2604 17.3562C51.2604 25.4842 41.3471 32.0733 29.1184 32.0733C16.8897 32.0733 6.97632 25.4842 6.97632 17.3562C6.97632 9.22822 16.8897 2.63916 29.1184 2.63916C41.3471 2.63916 51.2604 9.22822 51.2604 17.3562Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.214 18.272C12.214 20.9856 14.0269 23.4161 16.8871 25.0513L14.9054 28.7844L14.9059 28.7847H14.9054V38.2326C14.9054 39.4819 15.8366 40.4947 16.9853 40.4947C18.134 40.4947 19.0652 39.4819 19.0652 38.2326V30.7188L21.1972 26.7024C22.5605 27.0169 24.0238 27.1876 25.5468 27.1876C32.9103 27.1876 38.8796 23.196 38.8796 18.272C38.8796 13.3481 32.9103 9.35645 25.5468 9.35645C18.1833 9.35645 12.214 13.3481 12.214 18.272Z", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8871 25.0513C16.5702 24.8701 16.2663 24.6792 15.9762 24.4793C13.6475 22.8741 12.2139 20.685 12.2139 18.272C12.2139 13.3481 18.1832 9.35641 25.5468 9.35641C32.9103 9.35641 38.8796 13.3481 38.8796 18.272C38.8796 23.1959 32.9103 27.1876 25.5468 27.1876C24.0238 27.1876 22.5604 27.0168 21.1972 26.7024L19.0652 30.7187V38.2325C19.0652 39.4819 18.134 40.4947 16.9853 40.4947C15.8366 40.4947 14.9054 39.4819 14.9054 38.2325V28.7847L16.8871 25.0513ZM12.7822 28.8244V38.2325C12.7822 40.7573 14.664 42.804 16.9853 42.804C19.3066 42.804 21.1884 40.7573 21.1884 38.2325V31.3375L22.2942 29.2544C23.3445 29.4135 24.433 29.4969 25.5468 29.4969C29.5564 29.4969 33.2881 28.4148 36.0865 26.5435C38.8503 24.6954 41.0028 21.836 41.0028 18.272C41.0028 14.708 38.8503 11.8486 36.0865 10.0005C33.2881 8.12923 29.5564 7.04712 25.5468 7.04712C21.5371 7.04712 17.8054 8.12923 15.007 10.0005C12.2432 11.8486 10.0907 14.708 10.0907 18.272C10.0907 21.4 11.738 23.9758 14.0266 25.8213L13.0813 27.6021C12.9912 27.7662 12.9192 27.9435 12.8685 28.1307C12.8064 28.3589 12.7783 28.5928 12.7822 28.8244Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M16.3791 14.5156C16.3791 17.0663 19.3667 19.1341 23.0521 19.1341C26.7375 19.1341 29.7251 17.0663 29.7251 14.5156C29.7251 11.9648 26.7375 9.89697 23.0521 9.89697C19.3667 9.89697 16.3791 11.9648 16.3791 14.5156Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M16.3792 12.5361H29.7251V14.5155H16.3792V12.5361Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M16.3791 12.5361C16.3791 15.0868 19.3667 17.1546 23.0521 17.1546C26.7375 17.1546 29.7251 15.0868 29.7251 12.5361C29.7251 9.98529 26.7375 7.91748 23.0521 7.91748C19.3667 7.91748 16.3791 9.98529 16.3791 12.5361Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.52 11.9795L22.4008 10.6777C22.7983 10.4027 23.3062 10.4027 23.7036 10.6777L25.5845 11.9795C25.959 12.2388 25.959 12.8336 25.5845 13.0928L23.7036 14.3946C23.3062 14.6697 22.7983 14.6697 22.4008 14.3946L20.52 13.0928C20.1454 12.8336 20.1454 12.2388 20.52 11.9795Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1938 7.32218C18.7911 6.21664 20.8681 5.6084 23.0522 5.6084C25.2363 5.6084 27.3133 6.21664 28.9106 7.32218C30.4827 8.41029 31.8484 10.1975 31.8484 12.5363V14.5157C31.8484 16.8545 30.4827 18.6417 28.9106 19.7298C27.3133 20.8353 25.2363 21.4435 23.0522 21.4435C20.8681 21.4435 18.7911 20.8353 17.1938 19.7298C15.6217 18.6417 14.256 16.8545 14.256 14.5157V12.5363C14.256 10.1975 15.6217 8.41029 17.1938 7.32218ZM23.0522 7.91769C19.3668 7.91769 16.3792 9.9855 16.3792 12.5363V14.5157C16.3792 17.0664 19.3668 19.1343 23.0522 19.1343C26.7376 19.1343 29.7252 17.0664 29.7252 14.5157V12.5363C29.7252 9.9855 26.7376 7.91769 23.0522 7.91769Z", fill: "#633001" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "25.691", y1: "9.6549", x2: "25.691", y2: "40.2608", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#9F4A08" }),
                React__default["default"].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$1p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 90 90" }, props),
        React__default["default"].createElement("circle", { cx: "45", cy: "45", r: "45", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.7703 49.9442C15.7626 50.1122 15.7587 50.2809 15.7587 50.4501C15.7587 51.0897 15.8144 51.7214 15.923 52.3435H15.7587V53.3228C15.7587 53.8008 15.7898 54.2744 15.8508 54.7428C17.0423 63.8844 29.6377 71.0772 45 71.0772C60.3623 71.0772 72.9577 63.8844 74.1492 54.7428C74.2102 54.2744 74.2413 53.8008 74.2413 53.3228V52.3435H74.077C74.1856 51.7214 74.2413 51.0897 74.2413 50.4501C74.2413 50.2809 74.2374 50.1122 74.2297 49.9442C73.7886 40.3727 60.8709 32.6957 45 32.6957C29.1291 32.6957 16.2114 40.3727 15.7703 49.9442ZM13.3688 49.9442C13.5863 44.1042 17.5547 39.1986 23.0781 35.845C28.8037 32.3686 36.5601 30.2964 45 30.2964C53.4399 30.2964 61.1964 32.3686 66.9219 35.845C72.4453 39.1986 76.4137 44.1042 76.6312 49.9442H76.6406V53.3228C76.6406 59.3853 72.6041 64.4779 66.9219 67.9279C61.1964 71.4043 53.4399 73.4765 45 73.4765C36.5601 73.4765 28.8037 71.4043 23.0781 67.9279C17.3959 64.4779 13.3594 59.3853 13.3594 53.3228V49.9442H13.3688Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M74.2412 53.3233C74.2412 63.1287 61.1494 71.0776 44.9999 71.0776C28.8503 71.0776 15.7585 63.1287 15.7585 53.3233V50.5127H74.2412V53.3233Z", fill: "#BEBEBE" }),
        React__default["default"].createElement("path", { d: "M74.2412 50.4502C74.2412 60.2557 61.1494 68.2046 44.9999 68.2046C28.8503 68.2046 15.7585 60.2557 15.7585 50.4502C15.7585 40.6447 28.8503 32.6958 44.9999 32.6958C61.1494 32.6958 74.2412 40.6447 74.2412 50.4502Z", fill: "#FAF9FA" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 45.4345C20.2577 45.4456 20.2577 45.4567 20.2577 45.4679C20.2577 46.2752 20.3747 47.0659 20.5989 47.8338H20.2574V48.8736C20.2574 49.3326 20.2953 49.7861 20.3691 50.2332C21.4839 56.9839 30.8104 62.2532 42.1508 62.2532C53.4912 62.2532 62.8178 56.9839 63.9326 50.2332C64.0064 49.7861 64.0442 49.3326 64.0442 48.8736V47.8338H63.7032C63.9213 47.0868 64.038 46.3183 64.0442 45.5339C64.0444 45.5119 64.0445 45.4899 64.0445 45.4679C64.0445 45.4567 64.0444 45.4456 64.0444 45.4345C64.015 38.0605 54.2243 32.0883 42.1511 32.0883C30.0779 32.0883 20.2872 38.0605 20.2578 45.4345ZM17.8585 45.4345H17.8582V48.8736C17.8582 53.7204 21.0631 57.7199 25.4188 60.3817C29.8156 63.0687 35.7372 64.6525 42.1508 64.6525C48.5644 64.6525 54.4861 63.0687 58.8829 60.3817C63.2385 57.7199 66.4435 53.7204 66.4435 48.8736V45.5428C66.4437 45.5178 66.4438 45.4928 66.4438 45.4679C66.4438 40.621 63.2388 36.6216 58.8832 33.9598C54.4863 31.2728 48.5647 29.689 42.1511 29.689C35.7375 29.689 29.8158 31.2728 25.419 33.9598C21.0734 36.6155 17.8731 40.6027 17.8585 45.4345Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M64.0441 48.8738C64.0441 56.2631 54.2421 62.2534 42.1507 62.2534C30.0593 62.2534 20.2573 56.2631 20.2573 48.8738V45.7346H64.0441V48.8738Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M64.0441 45.4679C64.0441 52.8573 54.2421 58.8475 42.1507 58.8475C30.0593 58.8475 20.2573 52.8573 20.2573 45.4679C20.2573 38.0786 30.0593 32.0884 42.1507 32.0884C54.2421 32.0884 64.0441 38.0786 64.0441 45.4679Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.8557 38.2365C26.8556 38.2476 26.8556 38.2587 26.8556 38.2699C26.8556 39.0772 26.9726 39.8679 27.1968 40.6359H26.8553V41.6756C26.8553 42.1346 26.8932 42.5881 26.967 43.0352C28.0818 49.7859 37.4083 55.0552 48.7487 55.0552C60.0891 55.0552 69.4157 49.7859 70.5305 43.0352C70.6043 42.5881 70.6421 42.1346 70.6421 41.6756V40.6359H70.3011C70.5192 39.8888 70.6359 39.1203 70.6421 38.3359C70.6423 38.3139 70.6424 38.2919 70.6424 38.2699C70.6424 38.2587 70.6423 38.2476 70.6423 38.2365C70.6129 30.8625 60.8222 24.8903 48.749 24.8903C36.6758 24.8903 26.8851 30.8625 26.8557 38.2365ZM24.4564 38.2365H24.4561V41.6756C24.4561 46.5224 27.661 50.5219 32.0167 53.1837C36.4135 55.8707 42.3351 57.4545 48.7487 57.4545C55.1623 57.4545 61.084 55.8707 65.4808 53.1837C69.8364 50.5219 73.0414 46.5224 73.0414 41.6756V38.3448C73.0416 38.3198 73.0417 38.2948 73.0417 38.2699C73.0417 33.4231 69.8367 29.4236 65.4811 26.7618C61.0842 24.0748 55.1626 22.491 48.749 22.491C42.3354 22.491 36.4137 24.0748 32.0169 26.7618C27.6713 29.4175 24.471 33.4047 24.4564 38.2365Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M70.6422 41.6758C70.6422 49.0651 60.8402 55.0554 48.7488 55.0554C36.6575 55.0554 26.8555 49.0651 26.8555 41.6758V38.5366H70.6422V41.6758Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M70.6422 38.2699C70.6422 45.6593 60.8402 51.6495 48.7488 51.6495C36.6575 51.6495 26.8555 45.6593 26.8555 38.2699C26.8555 30.8806 36.6575 24.8904 48.7488 24.8904C60.8402 24.8904 70.6422 30.8806 70.6422 38.2699Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.2578 31.0385C20.2577 31.0496 20.2577 31.0607 20.2577 31.0719C20.2577 31.8792 20.3747 32.6699 20.5989 33.4379H20.2574V34.4776C20.2574 34.9366 20.2953 35.3901 20.3691 35.8372C21.4839 42.5879 30.8104 47.8572 42.1508 47.8572C53.4912 47.8572 62.8178 42.5879 63.9326 35.8372C64.0064 35.3901 64.0442 34.9366 64.0442 34.4776V33.4379H63.7032C63.9213 32.6908 64.038 31.9223 64.0442 31.1379C64.0444 31.1159 64.0445 31.0939 64.0445 31.0719C64.0445 31.0607 64.0444 31.0496 64.0444 31.0385C64.015 23.6645 54.2243 17.6923 42.1511 17.6923C30.0779 17.6923 20.2872 23.6645 20.2578 31.0385ZM17.8585 31.0385H17.8582V34.4776C17.8582 39.3244 21.0631 43.3239 25.4188 45.9857C29.8156 48.6727 35.7372 50.2565 42.1508 50.2565C48.5644 50.2565 54.4861 48.6727 58.8829 45.9857C63.2385 43.3239 66.4435 39.3244 66.4435 34.4776V31.1468C66.4437 31.1218 66.4438 31.0968 66.4438 31.0719C66.4438 26.2251 63.2388 22.2256 58.8832 19.5638C54.4863 16.8768 48.5647 15.293 42.1511 15.293C35.7375 15.293 29.8158 16.8768 25.419 19.5638C21.0734 22.2195 17.8731 26.2067 17.8585 31.0385Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M64.0441 34.4778C64.0441 41.8671 54.2421 47.8574 42.1507 47.8574C30.0593 47.8574 20.2573 41.8671 20.2573 34.4778V31.3386H64.0441V34.4778Z", fill: "#FEDC90" }),
        React__default["default"].createElement("path", { d: "M64.0441 31.0719C64.0441 38.4613 54.2421 44.4515 42.1507 44.4515C30.0593 44.4515 20.2573 38.4613 20.2573 31.0719C20.2573 23.6826 30.0593 17.6924 42.1507 17.6924C54.2421 17.6924 64.0441 23.6826 64.0441 31.0719Z", fill: "#D1884F" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4361 31.9044C25.4361 34.3714 27.2287 36.5809 30.0567 38.0676L28.0973 41.4614L28.0977 41.4617H28.0973V50.0509C28.0973 51.1867 29.018 52.1075 30.1538 52.1075C31.2896 52.1075 32.2104 51.1867 32.2104 50.0509V43.22L34.3184 39.5686C35.6663 39.8545 37.1133 40.0097 38.6192 40.0097C45.9 40.0097 51.8022 36.3808 51.8022 31.9044C51.8022 27.428 45.9 23.7991 38.6192 23.7991C31.3383 23.7991 25.4361 27.428 25.4361 31.9044Z", fill: "url(#paint1_linear)" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0569 38.0676C29.7437 37.9029 29.4431 37.7294 29.1563 37.5476C26.8538 36.0883 25.4363 34.0982 25.4363 31.9045C25.4363 27.428 31.3386 23.7991 38.6194 23.7991C45.9002 23.7991 51.8025 27.428 51.8025 31.9045C51.8025 36.3809 45.9002 40.0098 38.6194 40.0098C37.1135 40.0098 35.6666 39.8545 34.3187 39.5687L32.2106 43.22V50.0509C32.2106 51.1868 31.2899 52.1075 30.1541 52.1075C29.0183 52.1075 28.0975 51.1868 28.0975 50.0509V41.4617L30.0569 38.0676ZM25.9981 41.4978V50.0509C25.9981 52.3462 27.8588 54.2069 30.1541 54.2069C32.4493 54.2069 34.31 52.3462 34.31 50.0509V43.7826L35.4034 41.8887C36.4418 42.0334 37.5181 42.1092 38.6194 42.1092C42.584 42.1092 46.2738 41.1254 49.0408 39.4242C51.7735 37.7441 53.9019 35.1446 53.9019 31.9045C53.9019 28.6643 51.7735 26.0648 49.0408 24.3847C46.2738 22.6835 42.584 21.6997 38.6194 21.6997C34.6548 21.6997 30.965 22.6835 28.198 24.3847C25.4652 26.0648 23.3369 28.6643 23.3369 31.9045C23.3369 34.7481 24.9657 37.0898 27.2286 38.7677L26.2939 40.3867C26.2048 40.5358 26.1337 40.697 26.0835 40.8672C26.0221 41.0746 25.9943 41.2873 25.9981 41.4978Z", fill: "#633001" }),
        React__default["default"].createElement("path", { d: "M29.5544 28.4894C29.5544 30.8083 32.5084 32.6882 36.1524 32.6882C39.7964 32.6882 42.7505 30.8083 42.7505 28.4894C42.7505 26.1704 39.7964 24.2905 36.1524 24.2905C32.5084 24.2905 29.5544 26.1704 29.5544 28.4894Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M29.5547 26.6899H42.7508V28.4894H29.5547V26.6899Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { d: "M29.5544 26.6898C29.5544 29.0088 32.5084 30.8887 36.1524 30.8887C39.7964 30.8887 42.7505 29.0088 42.7505 26.6898C42.7505 24.3709 39.7964 22.491 36.1524 22.491C32.5084 22.491 29.5544 24.3709 29.5544 26.6898Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M33.6489 26.1838L35.5086 25.0003C35.9016 24.7502 36.4038 24.7502 36.7968 25.0003L38.6565 26.1838C39.0269 26.4195 39.0269 26.9602 38.6565 27.1959L36.7968 28.3794C36.4038 28.6295 35.9016 28.6295 35.5086 28.3794L33.6489 27.1959C33.2785 26.9602 33.2785 26.4195 33.6489 26.1838Z", fill: "#9E7200" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.3599 21.9496C31.9392 20.9446 33.9929 20.3916 36.1525 20.3916C38.3121 20.3916 40.3658 20.9446 41.9451 21.9496C43.4996 22.9389 44.8499 24.5636 44.8499 26.6899V28.4894C44.8499 30.6156 43.4996 32.2404 41.9451 33.2296C40.3658 34.2347 38.3121 34.7876 36.1525 34.7876C33.9929 34.7876 31.9392 34.2347 30.3599 33.2296C28.8054 32.2404 27.4551 30.6156 27.4551 28.4894V26.6899C27.4551 24.5636 28.8054 22.9389 30.3599 21.9496ZM36.1525 22.491C32.5085 22.491 29.5545 24.3709 29.5545 26.6899V28.4894C29.5545 30.8083 32.5085 32.6882 36.1525 32.6882C39.7965 32.6882 42.7505 30.8083 42.7505 28.4894V26.6899C42.7505 24.3709 39.7965 22.491 36.1525 22.491Z", fill: "#633001" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "45", y1: "0", x2: "45", y2: "90", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#54DADE" }),
                React__default["default"].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear", x1: "38.7618", y1: "24.0704", x2: "38.7618", y2: "51.8948", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#9F4A08" }),
                React__default["default"].createElement("stop", { offset: "0.370494", stopColor: "#7D3900" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#8D4104" })))));
};

var Icon$1o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default["default"].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$1m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default["default"].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$1l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$1k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React__default["default"].createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default["default"].createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React__default["default"].createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React__default["default"].createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React__default["default"].createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$1j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$1i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#53DEE9" }),
            React__default["default"].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#0098A1" }),
            React__default["default"].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#7645D9" }),
            React__default["default"].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#7645D9" }),
            React__default["default"].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#7645D9" })),
            React__default["default"].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#0098A1" }),
            React__default["default"].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#7645D9" }),
            React__default["default"].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#7645D9" }))),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#53DEE9" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#53DEE9" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$1h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default["default"].createElement("path", { d: "M76.2856 28.6526C77.0883 29.4553 77.1989 30.7184 76.548 31.6485C64.6385 48.6643 49.9116 63.5221 33.0019 75.5817L31.6665 76.5341C30.6872 77.2325 29.3467 77.121 28.4962 76.2705L22.4847 70.259C26.0334 66.5844 25.9945 60.7286 22.3678 57.1019C18.7411 53.4752 12.8853 53.4362 9.21067 56.985L3.68116 51.4555C2.62962 50.4039 2.77462 48.6597 3.98536 47.7962L5.32156 46.8433C21.8225 35.0751 36.1934 20.5765 47.815 3.97204C48.6291 2.80897 50.296 2.66297 51.2998 3.66682L56.9276 9.29459C53.3922 12.97 53.4356 18.8158 57.0578 22.438C60.6799 26.0601 66.5257 26.1035 70.2011 22.5681L76.2856 28.6526Z", fill: "#DBCDF9" }),
        React__default["default"].createElement("path", { d: "M78.9507 30.3151L57.459 57.5291L29.6615 78.5708L24.3156 73.1863L22.3868 70.8482L24.3156 68.0575L24.9915 65.2668L24.6194 62.29L23.5031 59.4993L21.6426 57.2668L19.4101 55.7784L16.9915 55.0342H14.0147L10.8519 56.1505L8.99148 57.8249L4.52637 52.4296L11.7898 51.3463C34.3187 47.9863 55.6053 38.8899 73.6048 24.9307L78.9507 30.3151Z", fill: "#A28BD4" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.7724 70.5193C19.7732 69.7287 20.0885 68.971 20.6487 68.4131L20.6586 68.4032C23.1622 65.8996 23.1622 61.8405 20.6586 59.3369C18.155 56.8333 14.0958 56.8333 11.5922 59.3369L11.5823 59.3468C11.0245 59.907 10.2667 60.2223 9.47617 60.2231C8.68561 60.2239 7.92718 59.9103 7.36817 59.3512L1.57656 53.5596C-0.776282 51.2068 -0.451848 47.304 2.25722 45.372L3.59342 44.419L5.32184 46.8426L3.98564 47.7955C2.7749 48.659 2.6299 50.4032 3.68144 51.4548L9.47304 57.2464L9.48735 57.232C9.49192 57.2275 9.49649 57.2229 9.50106 57.2183C13.1682 53.5659 19.1019 53.5705 22.7635 57.232C26.4247 60.8933 26.4295 66.8263 22.778 70.4936C22.7731 70.4984 22.7683 70.5033 22.7635 70.5081L22.7491 70.5224L28.4965 76.2698C29.347 77.1203 30.6875 77.2318 31.6668 76.5334L33.0022 75.581C49.9119 63.5214 64.6388 48.6636 76.5483 31.6478C77.1992 30.7178 77.0886 29.4546 76.2859 28.6519L70.2487 22.6148C70.2268 22.6371 70.2047 22.6594 70.1825 22.6816C70.1603 22.7038 70.138 22.7259 70.1156 22.7479C66.4445 26.3475 60.5503 26.3254 56.9064 22.6816C53.2625 19.0376 53.2405 13.1434 56.8404 9.47221C56.8623 9.44989 56.8843 9.42764 56.9064 9.40548C56.9286 9.38329 56.9509 9.36124 56.9733 9.33932L51.3001 3.66613C50.2962 2.66229 48.6293 2.80829 47.8153 3.97136C36.1937 20.5758 21.8228 35.0744 5.32184 46.8426L3.59342 44.419C19.8185 32.8476 33.9492 18.5913 45.3766 2.26445C47.252 -0.415092 51.0922 -0.751452 53.4049 1.56125L59.0781 7.23444C59.64 7.79626 59.9539 8.55937 59.95 9.35389C59.9461 10.1484 59.6247 10.9084 59.0574 11.4647C59.042 11.4798 59.0267 11.495 59.0113 11.5104C56.5077 14.014 56.5077 18.0731 59.0113 20.5767C61.5149 23.0803 65.5741 23.0803 68.0777 20.5767C68.0929 20.5615 68.1081 20.5461 68.1233 20.5306C68.6796 19.9633 69.4396 19.6419 70.2341 19.6381C71.0287 19.6342 71.7918 19.9481 72.3536 20.5099L78.3907 26.547C80.2148 28.3711 80.4662 31.2413 78.987 33.3547C66.8832 50.648 51.9161 65.7482 34.7306 78.0046L33.3952 78.9569C31.2319 80.4997 28.2705 80.2536 26.3916 78.3747L20.6442 72.6273C20.0852 72.0683 19.7715 71.3099 19.7724 70.5193Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9888 14.0672L41.3044 15.3827C41.8856 15.964 41.8856 16.9064 41.3044 17.4876C40.7231 18.0688 39.7808 18.0688 39.1995 17.4876L37.884 16.1721C37.3027 15.5908 37.3027 14.6484 37.884 14.0672C38.4652 13.4859 39.4076 13.4859 39.9888 14.0672Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M45.5142 19.5926L46.8298 20.9081C47.411 21.4894 47.411 22.4317 46.8298 23.013C46.2485 23.5942 45.3062 23.5942 44.7249 23.013L43.4094 21.6974C42.8281 21.1162 42.8281 20.1738 43.4094 19.5926C43.9906 19.0113 44.933 19.0113 45.5142 19.5926Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M52.3542 28.5384C51.773 29.1196 50.8306 29.1196 50.2493 28.5384L48.6707 26.9597C48.0894 26.3785 48.0894 25.4361 48.6707 24.8549C49.2519 24.2736 50.1943 24.2736 50.7755 24.8549L52.3542 26.4335C52.9354 27.0148 52.9354 27.9571 52.3542 28.5384Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.8796 34.0638C57.2983 34.645 56.356 34.645 55.7747 34.0638L54.1961 32.4851C53.6148 31.9039 53.6148 30.9615 54.1961 30.3802C54.7773 29.799 55.7197 29.799 56.3009 30.3802L57.8796 31.9589C58.4608 32.5401 58.4608 33.4825 57.8796 34.0638Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M61.8267 35.9051L63.1423 37.2206C63.7235 37.8019 63.7235 38.7442 63.1423 39.3255C62.561 39.9067 61.6187 39.9067 61.0374 39.3255L59.7219 38.0099C59.1406 37.4287 59.1406 36.4863 59.7219 35.9051C60.3031 35.3238 61.2455 35.3238 61.8267 35.9051Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M67.3521 41.4305L68.6677 42.746C69.2489 43.3273 69.2489 44.2696 68.6677 44.8509C68.0864 45.4321 67.144 45.4321 66.5628 44.8509L65.2472 43.5353C64.666 42.9541 64.666 42.0117 65.2472 41.4305C65.8285 40.8492 66.7709 40.8492 67.3521 41.4305Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M32.2915 37.1288C30.6927 35.53 30.6927 32.9378 32.2915 31.3389C34.1033 29.5272 37.1152 29.806 38.5636 31.9196L42.2107 37.2416C45.3939 36.2204 48.7719 36.3559 51.0104 38.5945C53.0227 40.6067 53.3281 43.5721 52.6459 46.3981C51.9561 49.256 50.2117 52.2664 47.6467 54.8314C45.0817 57.3964 42.0713 59.1408 39.2134 59.8306C36.3874 60.5128 33.422 60.2073 31.4098 58.1951C29.1842 55.9696 29.0377 52.6168 30.0388 49.4519L24.694 45.7892C22.5804 44.3408 22.3016 41.3289 24.1134 39.5171C25.7122 37.9183 28.3044 37.9183 29.9032 39.5171L33.6067 43.2206C33.9734 42.7908 34.3625 42.3691 34.7735 41.9582C35.1704 41.5613 35.5772 41.1847 35.9918 40.8291L32.2915 37.1288Z", fill: "#633001" }),
        React__default["default"].createElement("ellipse", { cx: "36.9019", cy: "50.5685", rx: "1.79015", ry: "2.60385", transform: "rotate(-45 36.9019 50.5685)", fill: "#DBCDF9" }),
        React__default["default"].createElement("ellipse", { rx: "1.79015", ry: "2.60385", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 43.5768 43.8947)", fill: "#DBCDF9" })));
};

var Icon$1g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default["default"].createElement("circle", { cx: "24", cy: "24", r: "24", fill: "url(#paint0_linear)" }),
        React__default["default"].createElement("path", { d: "M39.0623 18.9777C39.3983 19.3138 39.4447 19.8426 39.1721 20.232C34.1862 27.3557 28.0207 33.576 20.9413 38.6248L20.3823 39.0235C19.9723 39.3159 19.4111 39.2692 19.055 38.9132L16.5383 36.3964C18.024 34.858 18.0077 32.4065 16.4893 30.8881C14.971 29.3698 12.5194 29.3535 10.981 30.8392L8.66608 28.5242C8.22585 28.084 8.28655 27.3538 8.79343 26.9923L9.35284 26.5933C16.261 21.6665 22.2775 15.5966 27.1429 8.64507C27.4837 8.15815 28.1816 8.09702 28.6019 8.51729L30.958 10.8734C29.4778 12.4121 29.496 14.8595 31.0125 16.3759C32.5289 17.8924 34.9762 17.9105 36.515 16.4304L39.0623 18.9777Z", fill: "#DBCDF9" }),
        React__default["default"].createElement("path", { d: "M40.1776 19.6742L31.18 31.0674L19.5425 39.8766L17.3044 37.6224L16.4969 36.6435L17.3044 35.4752L17.5873 34.3068L17.4316 33.0606L16.9642 31.8923L16.1853 30.9576L15.2507 30.3345L14.2381 30.0229H12.9919L11.6678 30.4903L10.8889 31.1913L9.01953 28.9325L12.0604 28.4789C21.4923 27.0723 30.404 23.264 37.9396 17.4199L40.1776 19.6742Z", fill: "#A28BD4" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.4028 36.5059C15.4031 36.1749 15.5351 35.8577 15.7697 35.6241L15.7738 35.62C16.822 34.5718 16.822 32.8725 15.7738 31.8243C14.7257 30.7762 13.0263 30.7762 11.9781 31.8243L11.974 31.8285C11.7405 32.063 11.4232 32.195 11.0922 32.1953C10.7613 32.1957 10.4438 32.0643 10.2097 31.8303L7.78504 29.4056C6.80001 28.4206 6.93583 26.7867 8.07 25.9778L8.6294 25.5789L9.35301 26.5935L8.79361 26.9925C8.28673 27.354 8.22602 28.0842 8.66625 28.5244L11.0909 30.9491L11.0969 30.9431C11.0988 30.9412 11.1008 30.9393 11.1027 30.9374C12.638 29.4083 15.1221 29.4102 16.655 30.9431C18.1878 32.4759 18.1899 34.9598 16.6611 36.4951C16.6591 36.4971 16.6571 36.4992 16.655 36.5012L16.649 36.5072L19.0552 38.9134C19.4113 39.2694 19.9725 39.3161 20.3824 39.0237L20.9415 38.625C28.0208 33.5762 34.1863 27.3559 39.1723 20.2321C39.4448 19.8428 39.3985 19.314 39.0625 18.9779L36.535 16.4504C36.5258 16.4598 36.5166 16.4691 36.5073 16.4784C36.498 16.4877 36.4886 16.4969 36.4792 16.5061C34.9423 18.0132 32.4747 18.0039 30.9492 16.4784C29.4236 14.9528 29.4144 12.4852 30.9215 10.9482C30.9307 10.9389 30.9399 10.9296 30.9492 10.9203C30.9585 10.911 30.9678 10.9018 30.9771 10.8926L28.602 8.51747C28.1818 8.0972 27.4839 8.15833 27.1431 8.64525C22.2777 15.5968 16.2612 21.6667 9.35301 26.5935L8.6294 25.5789C15.4221 20.7344 21.338 14.766 26.1221 7.93065C26.9073 6.80885 28.515 6.66803 29.4832 7.63625L31.8584 10.0114C32.0936 10.2466 32.225 10.566 32.2234 10.8987C32.2217 11.2313 32.0872 11.5495 31.8497 11.7824C31.8432 11.7887 31.8368 11.7951 31.8304 11.8015C30.7822 12.8496 30.7822 14.549 31.8304 15.5972C32.8785 16.6453 34.5779 16.6453 35.626 15.5972C35.6324 15.5908 35.6388 15.5844 35.6452 15.5779C35.8781 15.3404 36.1962 15.2058 36.5289 15.2042C36.8615 15.2026 37.181 15.334 37.4162 15.5692L39.9437 18.0967C40.7073 18.8603 40.8126 20.062 40.1933 20.9467C35.126 28.1867 28.8599 34.5084 21.6651 39.6396L21.1061 40.0383C20.2004 40.6842 18.9606 40.5812 18.174 39.7946L15.7678 37.3884C15.5338 37.1544 15.4025 36.8369 15.4028 36.5059Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.8664 12.8716L24.4172 13.4223C24.6605 13.6657 24.6605 14.0602 24.4172 14.3035C24.1738 14.5469 23.7793 14.5469 23.536 14.3035L22.9852 13.7528C22.7419 13.5094 22.7419 13.1149 22.9852 12.8716C23.2285 12.6282 23.6231 12.6282 23.8664 12.8716Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.1799 15.1841L26.7306 15.7348C26.974 15.9782 26.974 16.3727 26.7306 16.616C26.4873 16.8594 26.0928 16.8594 25.8494 16.616L25.2987 16.0653C25.0553 15.8219 25.0553 15.4274 25.2987 15.1841C25.542 14.9407 25.9365 14.9407 26.1799 15.1841Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.0441 18.9295C28.8008 19.1729 28.4062 19.1728 28.1629 18.9295L27.502 18.2686C27.2587 18.0253 27.2587 17.6307 27.502 17.3874C27.7453 17.144 28.1399 17.144 28.3832 17.3874L29.0441 18.0483C29.2875 18.2916 29.2875 18.6862 29.0441 18.9295Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.3576 21.243C31.1143 21.4863 30.7197 21.4863 30.4764 21.243L29.8155 20.5821C29.5721 20.3387 29.5721 19.9442 29.8155 19.7009C30.0588 19.4575 30.4533 19.4575 30.6967 19.7009L31.3576 20.3618C31.6009 20.6051 31.6009 20.9996 31.3576 21.243Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.009 22.0141L33.5597 22.5649C33.8031 22.8082 33.8031 23.2028 33.5597 23.4461C33.3164 23.6895 32.9219 23.6895 32.6785 23.4461L32.1278 22.8953C31.8844 22.652 31.8844 22.2575 32.1278 22.0141C32.3711 21.7708 32.7656 21.7708 33.009 22.0141Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M35.3225 24.3266L35.8732 24.8774C36.1166 25.1207 36.1166 25.5153 35.8732 25.7586C35.6299 26.002 35.2354 26.002 34.992 25.7586L34.4412 25.2078C34.1979 24.9645 34.1979 24.57 34.4412 24.3266C34.6846 24.0833 35.0791 24.0833 35.3225 24.3266Z", fill: "#633001" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.6437 22.5266C19.9743 21.8573 19.9743 20.772 20.6437 20.1027C21.4022 19.3442 22.6632 19.4609 23.2695 20.3458L24.7964 22.5738C26.1291 22.1463 27.5433 22.2031 28.4805 23.1402C29.3229 23.9827 29.4507 25.2241 29.1652 26.4073C28.8764 27.6037 28.1461 28.8641 27.0722 29.9379C25.9984 31.0117 24.7381 31.742 23.5416 32.0308C22.3584 32.3164 21.117 32.1886 20.2745 31.3461C19.3428 30.4144 19.2815 29.0108 19.7006 27.6858L17.4629 26.1524C16.5781 25.546 16.4614 24.285 17.2199 23.5265C17.8892 22.8572 18.9745 22.8572 19.6438 23.5265L21.1943 25.077C21.3478 24.897 21.5107 24.7205 21.6828 24.5485C21.8489 24.3823 22.0193 24.2247 22.1928 24.0758L20.6437 22.5266Z", fill: "#633001" }),
        React__default["default"].createElement("ellipse", { rx: "0.749452", ry: "1.09011", transform: "matrix(0.707107 -0.707106 0.707107 0.707106 22.5742 28.153)", fill: "#DBCDF9" }),
        React__default["default"].createElement("ellipse", { cx: "25.3682", cy: "25.359", rx: "0.749453", ry: "1.09011", transform: "rotate(-45 25.3682 25.359)", fill: "#DBCDF9" }),
        React__default["default"].createElement("path", { d: "M40.2095 34.2904C40.0804 34.7825 39.3818 34.7825 39.2527 34.2904L38.5576 31.6422C38.5123 31.4695 38.3775 31.3346 38.2048 31.2893L35.5566 30.5943C35.0645 30.4651 35.0645 29.7666 35.5566 29.6374L38.2048 28.9424C38.3775 28.8971 38.5123 28.7622 38.5576 28.5895L39.2527 25.9413C39.3818 25.4492 40.0804 25.4492 40.2095 25.9413L40.9045 28.5895C40.9499 28.7622 41.0847 28.8971 41.2574 28.9424L43.9056 29.6374C44.3977 29.7666 44.3977 30.4651 43.9056 30.5943L41.2574 31.2893C41.0847 31.3346 40.9499 31.4695 40.9045 31.6422L40.2095 34.2904Z", fill: "#53DEE9" }),
        React__default["default"].createElement("path", { d: "M16.4183 7.94926C16.5088 7.60415 16.9988 7.60415 17.0893 7.94926L17.5767 9.80644C17.6085 9.92754 17.7031 10.0221 17.8242 10.0539L19.6814 10.5413C20.0265 10.6319 20.0265 11.1218 19.6814 11.2124L17.8242 11.6998C17.7031 11.7316 17.6085 11.8261 17.5767 11.9473L17.0893 13.8044C16.9988 14.1495 16.5088 14.1495 16.4183 13.8044L15.9309 11.9473C15.8991 11.8261 15.8045 11.7316 15.6834 11.6998L13.8262 11.2124C13.4811 11.1218 13.4811 10.6319 13.8262 10.5413L15.6834 10.0539C15.8045 10.0221 15.8991 9.92754 15.9309 9.80644L16.4183 7.94926Z", fill: "#53DEE9" }),
        React__default["default"].createElement("path", { d: "M10.3511 38.7118C10.2924 38.9355 9.97486 38.9355 9.91616 38.7118L9.60024 37.5081C9.57964 37.4296 9.51834 37.3683 9.43985 37.3477L8.23612 37.0318C8.01244 36.9731 8.01244 36.6555 8.23612 36.5968L9.43985 36.2809C9.51834 36.2603 9.57964 36.199 9.60024 36.1205L9.91616 34.9168C9.97486 34.6931 10.2924 34.6931 10.3511 34.9168L10.667 36.1205C10.6876 36.199 10.7489 36.2603 10.8274 36.2809L12.0311 36.5968C12.2548 36.6555 12.2548 36.9731 12.0311 37.0318L10.8274 37.3477C10.7489 37.3683 10.6876 37.4296 10.667 37.5081L10.3511 38.7118Z", fill: "#53DEE9" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "24", y1: "0", x2: "24", y2: "48", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#54DADE" }),
                React__default["default"].createElement("stop", { offset: "0.762157", stopColor: "#24C7D6" })))));
};

var Icon$1f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$1e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$1d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$1c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$1b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$1a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M16.59 9H15V4C15 3.45 14.55 3 14 3H10C9.45 3 9 3.45 9 4V9H7.41C6.52 9 6.07 10.08 6.7 10.71L11.29 15.3C11.68 15.69 12.31 15.69 12.7 15.3L17.29 10.71C17.92 10.08 17.48 9 16.59 9ZM5 19C5 19.55 5.45 20 6 20H18C18.55 20 19 19.55 19 19C19 18.45 18.55 18 18 18H6C5.45 18 5 18.45 5 19Z" })));
};

var Icon$19 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$18 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.4158 8.3528C11.8828 8.88474 10.3235 10.444 10.3235 10.444C10.3235 10.444 10.6654 12.1511 9.80615 13.4062C9.65016 13.6341 9.32911 13.6324 9.13385 13.4372L3.14805 7.45132C2.95278 7.25606 2.95113 6.93494 3.17934 6.77945C4.43557 5.9235 6.14832 6.28183 6.14832 6.28183C6.14832 6.28183 6.98173 5.42057 8.23238 4.16991C9.9052 2.49653 13.2519 3.33322 13.2519 3.33322C13.2519 3.33322 14.0886 6.67997 12.4158 8.3528ZM6.05548 12.1512C4.9632 13.2435 3.32479 13.2435 3.32479 13.2435C3.32479 13.2435 3.32479 11.0589 4.41707 10.5128L6.05548 12.1512ZM10.1112 6.47413C10.5017 6.86465 11.1348 6.86465 11.5254 6.47413C11.9159 6.08361 11.9159 5.45044 11.5254 5.05992C11.1348 4.66939 10.5017 4.66939 10.1112 5.05992C9.72063 5.45044 9.72063 6.08361 10.1112 6.47413Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "16", height: "16" })))));
};

var Icon$17 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("path", { d: "M12.7697 3.74169C12.7005 3.70807 12.623 3.69384 12.5459 3.70058C12.4689 3.70732 12.3952 3.73477 12.3333 3.77985C10.8594 4.85278 9.61031 4.33322 8.16413 3.73167C6.69309 3.1198 5.02586 2.42653 3.16668 3.77985C3.16421 3.78164 3.16207 3.78367 3.15968 3.7855C3.15391 3.78989 3.14834 3.79443 3.14282 3.79911C3.13766 3.80349 3.13255 3.80791 3.12767 3.81249C3.12311 3.81675 3.11874 3.82115 3.11439 3.82561C3.10918 3.83094 3.10404 3.83629 3.09918 3.84185C3.0955 3.84607 3.09201 3.85042 3.0885 3.85478C3.08367 3.86078 3.07889 3.8668 3.07446 3.87302C3.07116 3.87761 3.06813 3.88235 3.06503 3.88708C3.06101 3.89326 3.05699 3.89943 3.05333 3.9058C3.0502 3.9112 3.04735 3.91677 3.04448 3.92234C3.04145 3.92823 3.03838 3.93411 3.03566 3.94012C3.03276 3.94649 3.03019 3.95302 3.02762 3.95954C3.02546 3.96506 3.02327 3.97056 3.02136 3.97616C3.019 3.98308 3.01699 3.99014 3.01501 3.99723C3.01343 4.00284 3.01185 4.00841 3.01053 4.01408C3.00895 4.02092 3.00766 4.02786 3.00644 4.03484C3.00532 4.04117 3.00425 4.04749 3.00343 4.05387C3.00265 4.06015 3.00209 4.06647 3.00158 4.07284C3.00102 4.0802 3.00061 4.08757 3.00043 4.09496C3.00038 4.0978 3 4.10054 3 4.10338V12.5956C3 12.7029 3.0439 12.8057 3.12204 12.8816C3.20018 12.9574 3.30616 13 3.41667 13C3.52717 13 3.63315 12.9574 3.71129 12.8816C3.78943 12.8057 3.83333 12.7029 3.83333 12.5956V10.3782C5.23559 9.46014 6.4446 9.96224 7.83587 10.541C8.68293 10.8933 9.595 11.2727 10.5714 11.2726C11.2906 11.2726 12.0447 11.0668 12.8333 10.4928C12.8851 10.4551 12.9271 10.4063 12.956 10.3501C12.9849 10.294 13 10.232 13 10.1693V4.10338C13 4.02828 12.9785 3.95467 12.9378 3.89079C12.8971 3.8269 12.8389 3.77528 12.7697 3.74169Z" })));
};

var Icon$16 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("g", { opacity: "0.56" },
            React__default["default"].createElement("path", { d: "M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z" }))));
};

var Icon$15 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$14 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M9.38031 13.532L4.01253 11.58C3.71703 11.4726 3.46156 11.2772 3.28053 11.0201C3.09949 10.763 3.00159 10.4566 3.00002 10.1422C2.99844 9.82779 3.09327 9.52044 3.27172 9.26156C3.45016 9.00268 3.70367 8.80471 3.99807 8.69431L18.9218 3.09796C19.1983 2.99424 19.4988 2.97234 19.7875 3.03486C20.0761 3.09738 20.3407 3.24168 20.5495 3.45052C20.7584 3.65936 20.9027 3.92392 20.9652 4.21257C21.0277 4.50122 21.0057 4.80176 20.902 5.07829V5.07824L15.3056 20.0019C15.1974 20.2961 15.0011 20.5498 14.7435 20.7284C14.4858 20.907 14.1794 21.0019 13.8659 21H13.8578C13.5429 21.0003 13.2356 20.9032 12.9782 20.7219C12.7207 20.5406 12.5257 20.2841 12.4199 19.9875L10.468 14.6197L4.40017 20.6874C4.25593 20.8317 4.0603 20.9127 3.85631 20.9127C3.65233 20.9127 3.4567 20.8317 3.31246 20.6874C3.16822 20.5432 3.08718 20.3476 3.08718 20.1436C3.08718 19.9396 3.16822 19.744 3.31246 19.5997L9.38031 13.532Z" })));
};

var Icon$13 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M6.90909 9.06666C6.90909 11.9017 9.18837 14.2 12 14.2C14.8116 14.2 17.0909 11.9017 17.0909 9.06666C17.0909 6.2316 14.8116 3.93333 12 3.93333C9.18837 3.93333 6.90909 6.2316 6.90909 9.06666Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.6021 2.46693C15.2546 1.51168 13.6473 0.999364 12 1C10.3528 0.999362 8.74568 1.51161 7.39813 2.46673C6.05059 3.42185 5.02842 4.77325 4.4713 6.33624C3.91419 7.89924 3.84932 9.59757 4.28556 11.1991C4.7218 12.8007 5.63786 14.2274 6.90856 15.2842V22.2666C6.90856 22.3916 6.94024 22.5146 7.00061 22.6237C7.06097 22.7329 7.14801 22.8247 7.25346 22.8904C7.3589 22.9562 7.47926 22.9936 7.6031 22.9992C7.72694 23.0049 7.85015 22.9785 7.96103 22.9226L12.0001 20.8865L16.0378 22.9225C16.1487 22.9785 16.2719 23.0049 16.3958 22.9993C16.5196 22.9937 16.64 22.9562 16.7455 22.8905C16.8509 22.8248 16.938 22.733 16.9983 22.6238C17.0587 22.5146 17.0904 22.3916 17.0904 22.2666V15.2851C18.3613 14.2284 19.2777 12.8018 19.7142 11.2002C20.1506 9.59852 20.0859 7.90006 19.5289 6.3369C18.9719 4.77375 17.9497 3.42218 16.6021 2.46693ZM15.6365 14.5543C14.5601 15.2796 13.2946 15.6666 12 15.6666C10.2646 15.6647 8.60091 14.9687 7.37383 13.7314C6.14674 12.4941 5.4565 10.8165 5.45455 9.06666C5.45455 7.7613 5.83843 6.48526 6.55765 5.3999C7.27688 4.31453 8.29914 3.4686 9.49516 2.96906C10.6912 2.46952 12.0073 2.33882 13.277 2.59348C14.5466 2.84814 15.7129 3.47673 16.6283 4.39976C17.5437 5.32278 18.1671 6.49879 18.4197 7.77906C18.6722 9.05933 18.5426 10.3864 18.0472 11.5924C17.5518 12.7984 16.7129 13.8291 15.6365 14.5543Z" })));
};

var Icon$12 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M3.33263 6.25H5.33157V5.5C5.33198 5.10231 5.47251 4.72105 5.72234 4.43984C5.97216 4.15864 6.31089 4.00045 6.6642 4H17.3252C17.6785 4.00045 18.0173 4.15864 18.2671 4.43984C18.5169 4.72105 18.6575 5.10231 18.6579 5.5V6.25H20.6674C21.0207 6.25045 21.3594 6.40864 21.6092 6.68984C21.8591 6.97105 21.9996 7.35231 22 7.75V9.25C21.999 10.2442 21.6477 11.1974 21.0231 11.9004C20.3985 12.6034 19.5517 12.9989 18.6684 13H18.3316C17.5285 15.8066 15.3213 17.9075 12.661 18.2109V20.5H14.66C14.8367 20.5 15.0062 20.579 15.1311 20.7197C15.2561 20.8603 15.3263 21.0511 15.3263 21.25C15.3263 21.4489 15.2561 21.6397 15.1311 21.7803C15.0062 21.921 14.8367 22 14.66 22H9.32946C9.15274 22 8.98326 21.921 8.8583 21.7803C8.73334 21.6397 8.66314 21.4489 8.66314 21.25C8.66314 21.0511 8.73334 20.8603 8.8583 20.7197C8.98326 20.579 9.15274 20.5 9.32946 20.5H11.3284V18.2131C10.0308 18.0654 8.80008 17.4929 7.78839 16.5664C6.77671 15.6399 6.0284 14.4 5.63598 13H5.33157C4.44829 12.9989 3.60148 12.6034 2.97691 11.9004C2.35234 11.1974 2.00101 10.2442 2 9.25V7.75C2.0004 7.35231 2.14094 6.97105 2.39076 6.68984C2.64059 6.40864 2.97932 6.25045 3.33263 6.25ZM18.6684 11.5C19.1984 11.4993 19.7065 11.262 20.0812 10.8402C20.456 10.4184 20.6668 9.84653 20.6674 9.25V7.75H18.6579V10.6652C18.6575 10.9441 18.6436 11.2228 18.6163 11.5H18.6684ZM3.33263 9.25C3.33323 9.84653 3.54403 10.4184 3.91878 10.8402C4.29352 11.262 4.80161 11.4993 5.33157 11.5H5.36423C5.34255 11.2524 5.33167 11.0024 5.33157 10.75V7.75H3.33263V9.25Z" })));
};

var Icon$11 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM12 8.31935V6.75448C9.10375 6.75448 6.75 9.10616 6.75 11.9999C6.75 12.6905 6.88125 13.3637 7.135 13.9669C7.26625 14.2816 7.17 14.64 6.93375 14.8761C6.4875 15.3219 5.735 15.1646 5.49875 14.5788C5.175 13.7833 5 12.9091 5 11.9999C5 8.13576 8.1325 5.00602 12 5.00602V3.44115C12 3.04775 12.4725 2.85542 12.7438 3.12643L15.185 5.56553C15.36 5.74037 15.36 6.01139 15.185 6.18623L12.7438 8.62533C12.4725 8.90508 12 8.71275 12 8.31935ZM16.865 10.0328C16.7337 9.72686 16.83 9.35968 17.0662 9.12364C17.5125 8.67778 18.265 8.83514 18.5013 9.42088C18.825 10.2164 19 11.0907 19 11.9999C19 15.8639 15.8675 18.9937 12 18.9937V20.5673C12 20.952 11.5275 21.1443 11.2562 20.8733L8.815 18.4342C8.64 18.2593 8.64 17.9883 8.815 17.8135L11.2562 15.3744C11.5275 15.0946 12 15.287 12 15.6804V17.2452C14.8962 17.2452 17.25 14.8936 17.25 11.9999C17.25 11.3092 17.11 10.6448 16.865 10.0328Z" })));
};

var Icon$10 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M7.39371 2.09677C8.40066 0.322581 10.0885 0.0537634 10.8373 0C9.83028 1.77419 10.2176 3.54839 11.8442 5.8871C13.4708 8.22581 15.2523 10.9677 14.1679 15.3226C13.3004 18.8065 9.98524 19.8925 8.4361 20C11 18 10.8134 15.3226 7.11932 13.7903C2.5 16 4.5 19 6.11237 20C0.148152 18.5484 -0.00676221 13.4677 0.922727 10.0806C1.66632 7.37097 3.34971 5.94086 4.09846 5.56452C3.55626 7.33871 4.33084 9.43548 5.64761 9.19355C6.96439 8.95161 6.88692 7.58064 6.80946 6.77419L6.80705 6.74911C6.72741 5.92107 6.50943 3.65483 7.39371 2.09677Z", fill: "#F93B5D" })));
};

var Icon$$ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default["default"].createElement("path", { d: "M11.4545 4.90909C11.4545 4.90909 10.6364 8.18182 9 8.18182C7.36364 8.18182 6.54545 4.90909 6.54545 4.90909L11.4545 4.90909Z" }),
        React__default["default"].createElement("path", { d: "M9 9.81818C10.6364 9.81818 11.4545 13.0909 11.4545 13.0909H6.54545C6.54545 13.0909 7.36364 9.81818 9 9.81818Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18 0V0.818182C18 1.72193 17.2674 2.45455 16.3636 2.45455H15.4292C15.1634 4.44627 14.4814 6.05746 13.7994 7.23802C13.3629 7.9933 12.9252 8.57483 12.5928 8.97116L12.5685 9L12.5928 9.02889C12.9252 9.42522 13.3629 10.0067 13.7994 10.7621C14.4814 11.9426 15.1634 13.5538 15.4292 15.5455L16.3636 15.5455C17.2674 15.5455 18 16.2781 18 17.1818V18H0L0 17.1818C0 16.2781 0.732613 15.5455 1.63636 15.5455H2.5708C2.83662 13.5538 3.51857 11.9426 4.20065 10.7621C4.63705 10.0068 5.07481 9.42525 5.4072 9.02891L5.43149 9.00005L5.40722 8.97119C5.07481 8.57488 4.63705 7.99335 4.20065 7.23807C3.51857 6.05751 2.8366 4.44629 2.5708 2.45455H1.63636C0.732613 2.45455 0 1.72193 0 0.818182L0 0L18 0ZM13.7762 2.45455L4.22384 2.45455C4.47523 4.0977 5.04644 5.43099 5.61753 6.41941C5.99931 7.08019 6.37974 7.58431 6.66096 7.91964C6.80144 8.08711 6.91664 8.21188 6.99417 8.29238L7.02486 8.32397C7.04865 8.34826 7.06738 8.36681 7.08044 8.37957L7.09932 8.39777L7.10089 8.39927L7.10209 8.4004C7.26883 8.55518 7.36364 8.77243 7.36364 9.00002C7.36364 9.22764 7.26883 9.44492 7.10209 9.5997L7.10136 9.60038L7.09932 9.6023L7.08046 9.6205L7.06396 9.63676L7.0483 9.65241C7.03317 9.66759 7.01507 9.68605 6.9942 9.70769C6.97824 9.72427 6.96069 9.74273 6.94164 9.76303C6.92533 9.7804 6.90795 9.79913 6.88955 9.81923C6.85452 9.85746 6.81579 9.9006 6.77385 9.94859C6.73844 9.98909 6.70071 10.0331 6.66099 10.0805C6.37974 10.4158 5.99931 10.9199 5.61753 11.5807C5.04644 12.5691 4.47526 13.9024 4.22387 15.5455H13.7761C13.5247 13.9024 12.9536 12.5691 12.3825 11.5807C12.0007 10.9199 11.6203 10.4157 11.339 10.0804C11.1986 9.91294 11.0833 9.78817 11.0058 9.70764C10.9893 9.69057 10.9746 9.67548 10.9617 9.66243L10.9347 9.63541L10.9195 9.62048L10.9007 9.60225L10.8991 9.60075L10.8979 9.59968C10.7312 9.4449 10.6364 9.22759 10.6364 9C10.6364 8.77238 10.7312 8.55508 10.898 8.4003L10.8987 8.39957L10.9007 8.39772L10.9196 8.37952C10.9378 8.36169 10.9671 8.33258 11.0058 8.29233C11.0834 8.21183 11.1986 8.08706 11.339 7.91959C11.6203 7.58429 12.0007 7.08014 12.3825 6.41936C12.9536 5.43094 13.5248 4.09768 13.7762 2.45455Z" })));
};

var Icon$_ = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 18 18" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.97828 0H11.2146C11.6079 0.00188312 11.9846 0.145139 12.2627 0.398653C12.5408 0.652167 12.6979 0.995464 12.7 1.35398V6.18372C13.2346 6.20899 13.7383 6.42011 14.1073 6.77362C14.4762 7.12713 14.6825 7.59614 14.6835 8.08407V12.5267C14.6835 12.8034 14.8041 13.0688 15.0188 13.2645C15.2335 13.4602 15.5246 13.5701 15.8282 13.5701C16.1317 13.5701 16.4229 13.4602 16.6376 13.2645C16.8523 13.0688 16.9728 12.8034 16.9728 12.5267V6.05151C15.1999 4.44345 14.8565 4.40443 15.338 2.63628L13.995 0.884071L14.5306 0.458761L17.92 3.51717V12.5323C17.9088 13.0303 17.6839 13.5045 17.2936 13.8531C16.9033 14.2017 16.3786 14.3969 15.8321 14.3969C15.2856 14.3969 14.7609 14.2017 14.3706 13.8531C13.9803 13.5045 13.7554 13.0303 13.7442 12.5323V8.08805C13.742 7.82869 13.6344 7.57927 13.4422 7.38802C13.25 7.19677 12.9868 7.07728 12.7035 7.05266V15.8623H13.7154C13.8417 15.8625 13.9627 15.9083 14.0521 15.9897C14.1416 16.071 14.192 16.1812 14.1924 16.2964V17.5054C14.192 17.6206 14.1416 17.731 14.0522 17.8124C13.9628 17.8939 13.8418 17.9399 13.7154 17.9403H0.480121C0.353812 17.9399 0.23282 17.8938 0.143587 17.8124C0.0543547 17.7309 0.00413632 17.6206 0.00390625 17.5054V16.2964C0.00413723 16.1813 0.0543833 16.0711 0.14364 15.9897C0.232898 15.9083 0.353892 15.8625 0.480121 15.8623H1.49284V1.35717C1.4949 0.99865 1.65207 0.655353 1.9302 0.401839C2.20832 0.148325 2.58495 0.00506903 2.97828 0.00318591V0ZM3.64148 2.16239H10.5505C10.6402 2.1626 10.726 2.19514 10.7894 2.2529C10.8527 2.31066 10.8884 2.38893 10.8887 2.47062V6.39319C10.8882 6.47473 10.8524 6.5528 10.789 6.61039C10.7257 6.66798 10.64 6.70041 10.5505 6.70062H3.64148C3.55217 6.7002 3.46665 6.66768 3.40349 6.61011C3.34034 6.55255 3.30466 6.47459 3.3042 6.39319V2.47062C3.30443 2.38907 3.34001 2.31091 3.40319 2.25318C3.46637 2.19544 3.55202 2.16281 3.64148 2.16239Z" })));
};

var Icon$Z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M7 6H19V9H7V6Z" }),
        React__default["default"].createElement("path", { d: "M3.17317 7.51079C3.07444 7.39497 3.07808 7.22356 3.18164 7.11203L7 3L7 12L3.17317 7.51079Z" }),
        React__default["default"].createElement("path", { d: "M18 16H5V19H18V16Z" }),
        React__default["default"].createElement("path", { d: "M20.8221 17.7336C20.9235 17.6203 20.9242 17.449 20.8236 17.335L17 13L17 22L20.8221 17.7336Z" })));
};

var Icon$Y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 22 22" }, props),
        React__default["default"].createElement("path", { d: "M11 1.93936L13.8747 6.71605C14.1539 7.18008 14.6094 7.51101 15.137 7.63321L20.5682 8.89109L16.9137 13.1011C16.5586 13.5101 16.3846 14.0456 16.4315 14.5851L16.9135 20.1392L11.7802 17.9645C11.2815 17.7532 10.7185 17.7532 10.2198 17.9645L5.0865 20.1392L5.56853 14.5851C5.61535 14.0456 5.44137 13.5101 5.08635 13.1011L1.43176 8.89109L6.86298 7.63321C7.39059 7.51101 7.84609 7.18007 8.12534 6.71605L11 1.93936Z", strokeWidth: "2" })));
};

var Icon$X = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8 0L12.6872 3.93837C13.0466 4.24034 13.1049 4.79112 12.8174 5.16858C12.5299 5.54604 12.0054 5.60724 11.6461 5.30527L8 2.24171L4.35394 5.30527C3.99455 5.60724 3.47015 5.54604 3.18264 5.16858C2.89513 4.79112 2.9534 4.24034 3.31278 3.93837L8 0Z" }),
        React__default["default"].createElement("path", { opacity: "0.56", fillRule: "evenodd", clipRule: "evenodd", d: "M8 5.25145L12.6872 9.18983C13.0466 9.49179 13.1049 10.0426 12.8174 10.42C12.5299 10.7975 12.0054 10.8587 11.6461 10.5567L8 7.49316L4.35394 10.5567C3.99455 10.8587 3.47015 10.7975 3.18264 10.42C2.89513 10.0426 2.9534 9.49179 3.31278 9.18983L8 5.25145Z" }),
        React__default["default"].createElement("path", { opacity: "0.32", fillRule: "evenodd", clipRule: "evenodd", d: "M8 10.5029L12.6872 14.4413C13.0466 14.7432 13.1049 15.294 12.8174 15.6715C12.5299 16.0489 12.0054 16.1101 11.6461 15.8082L8 12.7446L4.35394 15.8082C3.99455 16.1101 3.47015 16.0489 3.18264 15.6715C2.89513 15.294 2.9534 14.7432 3.31278 14.4413L8 10.5029Z" })));
};

var Icon$W = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("circle", { cx: "12", cy: "12", r: "10", fill: "#1263F1" }),
        React__default["default"].createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#F93B5D" }),
        React__default["default"].createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$V = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 22" }, props),
        React__default["default"].createElement("path", { d: "M19.3117 6.94062C19.1727 6.8006 19.0073 6.68956 18.825 6.61392C18.6428 6.53829 18.4473 6.49957 18.25 6.5H15.25V5.75C15.25 4.35761 14.6969 3.02226 13.7123 2.03769C12.7277 1.05312 11.3924 0.5 10 0.5C8.60761 0.5 7.27226 1.05312 6.28769 2.03769C5.30312 3.02226 4.75 4.35761 4.75 5.75V6.5L1.75 6.5C1.35218 6.5 0.970644 6.65804 0.68934 6.93934C0.408035 7.22064 0.25 7.60218 0.25 8L0.25 18.125C0.25 19.9531 1.79687 21.5 3.625 21.5L16.375 21.5C17.2593 21.5003 18.1086 21.1545 18.7413 20.5367C19.0596 20.233 19.3132 19.8679 19.4865 19.4634C19.6599 19.059 19.7495 18.6236 19.75 18.1836L19.75 8C19.7506 7.80321 19.7122 7.60826 19.637 7.42642C19.5617 7.24458 19.4512 7.07946 19.3117 6.94062ZM6.25 5.75C6.25 4.75544 6.64509 3.80161 7.34835 3.09835C8.05161 2.39509 9.00544 2 10 2C10.9946 2 11.9484 2.39509 12.6517 3.09835C13.3549 3.80161 13.75 4.75544 13.75 5.75V6.5L6.25 6.5V5.75ZM15.25 10.25C15.25 11.6424 14.6969 12.9777 13.7123 13.9623C12.7277 14.9469 11.3924 15.5 10 15.5C8.60761 15.5 7.27226 14.9469 6.28769 13.9623C5.30312 12.9777 4.75 11.6424 4.75 10.25V9.5C4.75 9.30109 4.82902 9.11032 4.96967 8.96967C5.11032 8.82902 5.30109 8.75 5.5 8.75C5.69891 8.75 5.88968 8.82902 6.03033 8.96967C6.17098 9.11032 6.25 9.30109 6.25 9.5V10.25C6.25 11.2446 6.64509 12.1984 7.34835 12.9017C8.05161 13.6049 9.00544 14 10 14C10.9946 14 11.9484 13.6049 12.6517 12.9017C13.3549 12.1984 13.75 11.2446 13.75 10.25V9.5C13.75 9.30109 13.829 9.11032 13.9697 8.96967C14.1103 8.82902 14.3011 8.75 14.5 8.75C14.6989 8.75 14.8897 8.82902 15.0303 8.96967C15.171 9.11032 15.25 9.30109 15.25 9.5V10.25Z" })));
};

var Icon$U = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 20C11.7221 19.9997 11.4507 19.9188 11.2212 19.7679C7.82085 17.545 6.34847 16.0208 5.53635 15.0679C3.80568 13.0367 2.97712 10.9513 3.00048 8.69292C3.02774 6.105 5.18373 4 7.80657 4C9.71378 4 11.0347 5.03458 11.804 5.89625C11.8284 5.92327 11.8585 5.94494 11.8923 5.95979C11.9261 5.97463 11.9628 5.98232 12 5.98232C12.0372 5.98232 12.0739 5.97463 12.1077 5.95979C12.1415 5.94494 12.1716 5.92327 12.196 5.89625C12.9653 5.03375 14.2862 4 16.1934 4C18.8163 4 20.9723 6.105 20.9995 8.69333C21.0229 10.9521 20.1935 13.0375 18.4636 15.0683C17.6515 16.0213 16.1792 17.5454 12.7788 19.7683C12.5492 19.9191 12.2779 19.9998 12 20Z" })));
};

var Icon$T = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.196 5.89625C12.1716 5.92327 12.1415 5.94494 12.1077 5.95979C12.0739 5.97463 12.0372 5.98232 12 5.98232C11.9628 5.98232 11.9261 5.97463 11.8923 5.95979C11.8585 5.94494 11.8284 5.92327 11.804 5.89625C11.0347 5.03458 9.71378 4 7.80657 4C5.18373 4 3.02774 6.105 3.00048 8.69292C2.97712 10.9513 3.80568 13.0367 5.53635 15.0679C6.34847 16.0208 7.82085 17.545 11.2212 19.7679C11.4507 19.9188 11.7221 19.9997 12 20C12.2779 19.9998 12.5492 19.9191 12.7788 19.7683C16.1792 17.5454 17.6515 16.0213 18.4636 15.0683C20.1935 13.0375 21.0229 10.9521 20.9995 8.69333C20.9723 6.105 18.8163 4 16.1934 4C14.2862 4 12.9653 5.03375 12.196 5.89625ZM19.3996 8.70988C19.3816 7.01856 17.9591 5.6 16.1934 5.6C14.9169 5.6 13.9955 6.28248 13.3901 6.96126L13.3842 6.96783C13.2058 7.16565 12.9891 7.32023 12.751 7.42476C12.5131 7.52923 12.2572 7.58232 12 7.58232C11.7428 7.58232 11.4869 7.52923 11.249 7.42476C11.0109 7.32023 10.7942 7.16563 10.6158 6.96782L10.6104 6.96184C10.0043 6.28289 9.08276 5.6 7.80657 5.6C6.04085 5.6 4.61837 7.01865 4.60039 8.70947M19.3996 8.70988C19.4183 10.5151 18.7728 12.2378 17.2456 14.0308C16.548 14.8494 15.2135 16.2544 12.0003 18.3655C8.7864 16.254 7.45186 14.8488 6.75424 14.0302C5.22657 12.2373 4.58179 10.5144 4.60039 8.70947" })));
};

var Icon$S = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", stroke: "currentColor", fill: "none" }, props),
        React__default["default"].createElement("path", { d: "M8.6959 12.5179C8.6959 13.9182 7.56074 15.0533 6.16045 15.0533C4.76016 15.0533 3.625 13.9182 3.625 12.5179C3.625 11.1176 4.76016 9.98242 6.16045 9.98242C7.56074 9.98242 8.6959 11.1176 8.6959 12.5179Z", fill: "none", strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { d: "M19.7779 6.16045C19.7779 7.56074 18.6428 8.6959 17.2425 8.6959C15.8422 8.6959 14.707 7.56074 14.707 6.16045C14.707 4.76016 15.8422 3.625 17.2425 3.625C18.6428 3.625 19.7779 4.76016 19.7779 6.16045Z", fill: "none", strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { d: "M19.7779 18.8401C19.7779 20.2404 18.6428 21.3756 17.2425 21.3756C15.8422 21.3756 14.707 20.2404 14.707 18.8401C14.707 17.4398 15.8422 16.3047 17.2425 16.3047C18.6428 16.3047 19.7779 17.4398 19.7779 18.8401Z", fill: "none", strokeWidth: "1.25" }),
        React__default["default"].createElement("line", { x1: "8.31641", y1: "10.8513", x2: "14.7188", y2: "7.15491", strokeWidth: "1.25" }),
        React__default["default"].createElement("line", { y1: "-0.625", x2: "7.39281", y2: "-0.625", transform: "matrix(0.866025 0.5 0.5 -0.866025 8.62891 13.6348)", strokeWidth: "1.25" })));
};

var Icon$R = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24", stroke: "currentColor", fill: "currentColor" }, props),
        React__default["default"].createElement("path", { d: "M12 5.70173C7.35887 5.76011 2.80536 10.251 1.19995 12.0388C2.82968 13.8875 7.41725 18.3308 12 18.3016C16.5827 18.2724 21.0486 13.8631 22.8 12.0388C21.0729 10.2023 16.641 5.64335 12 5.70173Z", fill: "none", strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { d: "M16.5913 12.0757C16.5913 14.6524 14.5025 16.7412 11.9258 16.7412C9.34909 16.7412 7.26025 14.6524 7.26025 12.0757C7.26025 9.49899 9.34909 7.41016 11.9258 7.41016C14.5025 7.41016 16.5913 9.49899 16.5913 12.0757Z", fill: "none", strokeWidth: "1.25" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.686 11.8942C11.351 11.8942 11.89 11.3551 11.89 10.6901C11.89 10.2819 11.6868 9.92107 11.3761 9.70333C11.5645 9.656 11.7617 9.63086 11.9647 9.63086C13.2947 9.63086 14.3729 10.709 14.3729 12.039C14.3729 13.3689 13.2947 14.4471 11.9647 14.4471C10.6348 14.4471 9.55664 13.3689 9.55664 12.039C9.55664 11.791 9.59412 11.5518 9.66373 11.3266C9.87638 11.6674 10.2547 11.8942 10.686 11.8942Z" })));
};

var Icon$Q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default["default"].createElement("path", { d: "M1.66602 4.16659C1.66602 3.70635 2.03911 3.33325 2.49935 3.33325H12.4993V4.99992H2.49935C2.03911 4.99992 1.66602 4.62682 1.66602 4.16659Z", fill: "#749BD8" }),
        React__default["default"].createElement("path", { d: "M7.5 9.16675H17.5C17.9602 9.16675 18.3333 9.53984 18.3333 10.0001C18.3333 10.4603 17.9602 10.8334 17.5 10.8334H7.5V9.16675Z", fill: "#749BD8" }),
        React__default["default"].createElement("path", { d: "M1.66602 15.8333C1.66602 15.3731 2.03911 15 2.49935 15H12.4993V16.6667H2.49935C2.03911 16.6667 1.66602 16.2936 1.66602 15.8333Z", fill: "#749BD8" }),
        React__default["default"].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M4.16602 12.5C5.54673 12.5 6.66602 11.3807 6.66602 10C6.66602 8.61929 5.54673 7.5 4.16602 7.5C2.7853 7.5 1.66602 8.61929 1.66602 10C1.66602 11.3807 2.7853 12.5 4.16602 12.5ZM4.16602 10.8333C4.62625 10.8333 4.99935 10.4602 4.99935 10C4.99935 9.53976 4.62625 9.16667 4.16602 9.16667C3.70578 9.16667 3.33268 9.53976 3.33268 10C3.33268 10.4602 3.70578 10.8333 4.16602 10.8333Z", fill: "#749BD8" }),
        React__default["default"].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.834 18.3333C17.2147 18.3333 18.334 17.214 18.334 15.8333C18.334 14.4525 17.2147 13.3333 15.834 13.3333C14.4533 13.3333 13.334 14.4525 13.334 15.8333C13.334 17.214 14.4533 18.3333 15.834 18.3333ZM15.834 16.6666C16.2942 16.6666 16.6673 16.2935 16.6673 15.8333C16.6673 15.373 16.2942 14.9999 15.834 14.9999C15.3737 14.9999 15.0007 15.373 15.0007 15.8333C15.0007 16.2935 15.3737 16.6666 15.834 16.6666Z", fill: "#749BD8" }),
        React__default["default"].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M15.834 6.66675C17.2147 6.66675 18.334 5.54746 18.334 4.16675C18.334 2.78604 17.2147 1.66675 15.834 1.66675C14.4533 1.66675 13.334 2.78604 13.334 4.16675C13.334 5.54746 14.4533 6.66675 15.834 6.66675ZM15.834 5.00008C16.2942 5.00008 16.6673 4.62699 16.6673 4.16675C16.6673 3.70651 16.2942 3.33341 15.834 3.33341C15.3737 3.33341 15.0007 3.70651 15.0007 4.16675C15.0007 4.62699 15.3737 5.00008 15.834 5.00008Z", fill: "#749BD8" })));
};

var Icon$P = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M20.5954 8.13393C20.4671 8.00057 20.3144 7.89482 20.1462 7.82278C19.9779 7.75075 19.7975 7.71387 19.6154 7.71429H16.8461V7C16.8461 5.67392 16.3356 4.40215 15.4267 3.46447C14.5179 2.52678 13.2853 2 12 2C10.7147 2 9.48208 2.52678 8.57325 3.46447C7.66442 4.40215 7.15384 5.67392 7.15384 7V7.71429L4.38461 7.71429C4.01739 7.71429 3.66521 7.8648 3.40554 8.13271C3.14588 8.40061 3 8.76398 3 9.14286L3 18.7857C3 20.5268 4.42788 22 6.11538 22H17.8846C18.7009 22.0003 19.4848 21.671 20.0688 21.0826C20.3627 20.7933 20.5968 20.4456 20.7568 20.0604C20.9168 19.6752 20.9996 19.2606 21 18.8415L21 9.14286C21.0006 8.95544 20.9651 8.76977 20.8956 8.59659C20.8262 8.42341 20.7242 8.26615 20.5954 8.13393ZM8.53846 7C8.53846 6.0528 8.90316 5.14439 9.55232 4.47462C10.2015 3.80485 11.0819 3.42857 12 3.42857C12.9181 3.42857 13.7985 3.80485 14.4477 4.47462C15.0968 5.14439 15.4615 6.0528 15.4615 7V7.71429L8.53846 7.71429V7Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M12 20C14.7614 20 17 17.7614 17 15C17 12.2386 14.7614 10 12 10C9.23857 10 7 12.2386 7 15C7 17.7614 9.23857 20 12 20Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M15.8729 11.8809C15.5261 11.9494 15.1955 12.0462 14.9233 12.1067C14.3023 12.2458 13.7217 12.7216 13.5947 13.5925C13.4818 14.3708 13.7439 14.7054 13.6289 15.6107C13.4273 17.1913 11.9112 17.7357 11.2035 18.0663C10.7943 18.2558 9.80031 18.6913 9.03418 19.024C9.86482 19.6369 10.889 19.9998 11.9999 19.9998C14.762 19.9998 16.9999 17.7619 16.9999 14.9998C16.9999 13.8224 16.5926 12.7397 15.9112 11.8869C15.8991 11.8849 15.887 11.8829 15.8729 11.8809Z", fill: "url(#paint0_linear_1393_6292)" }),
        React__default["default"].createElement("path", { d: "M11.4375 14.2661C11.8226 13.4335 11.6835 13.4314 11.9758 12.6492C12.3448 11.6573 13.4919 11.9395 13.8085 11.9819C14.3306 12.0524 14.4677 11.8669 15.5685 11.6895C15.623 11.6814 15.6754 11.6734 15.7278 11.6673C14.8125 10.6452 13.4818 10 12 10C10.0101 10 8.29234 11.1613 7.4879 12.8448C9.13709 13.254 10.9173 14.1431 11.4375 14.2661ZM10.3448 10.871C10.4899 10.8931 11.1956 11.7702 11.3286 14.0222C11.3286 14.0222 10.4214 13.8044 10.2258 13.3367C10.0645 12.9516 10.2742 12.4456 10.3448 10.871ZM15.9032 11.877C15.9052 11.881 15.9093 11.8831 15.9113 11.8871C15.8992 11.8851 15.8851 11.8851 15.873 11.8831C15.8831 11.879 15.8931 11.879 15.9032 11.877ZM7 15C7 14.6008 7.04637 14.2137 7.13508 13.8427C7.31653 13.9939 7.51008 14.1613 7.71573 14.3528C9.01814 15.5605 11.1371 16.5141 11.9093 15.627C11.9113 15.629 11.9133 15.629 11.9133 15.631C11.7722 15.8165 11.2339 16.4032 10.2056 16.2218L8.58064 18.6472C7.60887 17.7359 7 16.4395 7 15Z", fill: "url(#paint1_linear_1393_6292)" }),
        React__default["default"].createElement("rect", { x: "7.14941", y: "7.71094", width: "1.39342", height: "1.38694", fill: "black" }),
        React__default["default"].createElement("rect", { x: "15.4531", y: "7.71094", width: "1.39342", height: "1.38694", fill: "black" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_1393_6292", x1: "15.0026", y1: "13.1904", x2: "13.823", y2: "19.689", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_1393_6292", x1: "9.41335", y1: "17.3653", x2: "12.0214", y2: "10", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$O = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 13.3833C14.5466 13.3833 16.6109 11.3189 16.6109 8.77234C16.6109 6.22579 14.5466 4.16141 12 4.16141C9.45346 4.16141 7.38907 6.22579 7.38907 8.77234C7.38907 11.3189 9.45346 13.3833 12 13.3833Z" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 1.39485C9.96351 1.39485 8.22481 2.11531 6.78389 3.55623C5.34297 4.99714 4.62252 6.73585 4.62252 8.77234C4.62252 10.8088 5.34297 12.5475 6.78389 13.9885C8.22481 15.4294 9.96351 16.1498 12 16.1498C14.0365 16.1498 15.7752 15.4294 17.2161 13.9885C18.657 12.5475 19.3775 10.8088 19.3775 8.77234C19.3775 6.73585 18.657 4.99714 17.2161 3.55623C15.7752 2.11531 14.0365 1.39485 12 1.39485ZM12 14.3055C15.0559 14.3055 17.5331 11.8282 17.5331 8.77234C17.5331 5.71649 15.0559 3.23922 12 3.23922C8.94415 3.23922 6.46689 5.71649 6.46689 8.77234C6.46689 11.8282 8.94415 14.3055 12 14.3055Z" }),
        React__default["default"].createElement("path", { d: "M1.85596 13.8855L2.77814 17.072L12 22.6051L21.2219 17.072L22.1441 13.8855L22.1093 13.9043L22.1441 13.884L19.3811 12.9222C19.3811 12.9222 19.237 13.1563 19.0137 13.4373C18.7903 13.7183 18.4872 14.0432 18.4872 14.0432L20.5092 14.7711L12 19.3805L3.49227 14.7718L5.51641 14.0432C5.51641 14.0432 5.21329 13.7183 4.98995 13.4373C4.76661 13.1563 4.62252 12.9222 4.62252 12.9222L1.85956 13.884L1.94026 13.9311L1.85596 13.8855Z" })));
};

var Icon$N = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#1EBB95" }),
        React__default["default"].createElement("mask", { id: "mask0_110_1519", style: { maskType: "alpha" }, maskUnits: "userSpaceOnUse", x: "9", y: "2", width: "15", height: "22" },
            React__default["default"].createElement("path", { d: "M9.5 22L14.5 2H18L22 5L24 11.5L22 18.5L17 23.5L9.5 22Z", fill: "#C4C4C4" })),
        React__default["default"].createElement("g", { mask: "url(#mask0_110_1519)" },
            React__default["default"].createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#FF1C5E" })),
        React__default["default"].createElement("path", { d: "M6.08946 14.1993L14.535 2.27255L13.3031 10.4212L18.5614 10.1963L9.57151 21.7126L11.3478 13.9744L6.08946 14.1993Z", fill: "white" })));
};

var Icon$M = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#1EBB95" }),
        React__default["default"].createElement("path", { d: "M9.75195 21.7462L12.7508 11.25V8.25004L14.7104 2.37146C18.9167 3.55273 22.0008 7.41622 22.0008 12C22.0008 17.5229 17.5237 22 12.0008 22C11.2276 22 10.4748 21.9123 9.75195 21.7462Z", fill: "#FF1C5E" }),
        React__default["default"].createElement("path", { d: "M6 14.3143L15.7714 0L13.2 10.2H18.3429L8.57143 24L11.1429 14.3143H6Z", fill: "white" })));
};

var Icon$L = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 21" }, props),
        React__default["default"].createElement("circle", { cx: "10", cy: "10.5", r: "9", fill: "url(#paint0_linear_1522_20929)" }),
        React__default["default"].createElement("path", { d: "M10 10.4375C10.9508 10.4375 11.7908 10.665 12.4733 10.9625C13.1033 11.2425 13.5 11.8725 13.5 12.555V12.9167C13.5 13.2375 13.2375 13.5 12.9167 13.5H7.08333C6.7625 13.5 6.5 13.2375 6.5 12.9167V12.5608C6.5 11.8725 6.89667 11.2425 7.52667 10.9683C8.20917 10.665 9.04917 10.4375 10 10.4375ZM5.33333 10.5833C5.975 10.5833 6.5 10.0583 6.5 9.41667C6.5 8.775 5.975 8.25 5.33333 8.25C4.69167 8.25 4.16667 8.775 4.16667 9.41667C4.16667 10.0583 4.69167 10.5833 5.33333 10.5833ZM5.9925 11.225C5.77667 11.19 5.56083 11.1667 5.33333 11.1667C4.75583 11.1667 4.2075 11.2892 3.71167 11.505C3.28 11.6917 3 12.1117 3 12.5842V12.9167C3 13.2375 3.2625 13.5 3.58333 13.5H5.625V12.5608C5.625 12.0767 5.75917 11.6217 5.9925 11.225ZM14.6667 10.5833C15.3083 10.5833 15.8333 10.0583 15.8333 9.41667C15.8333 8.775 15.3083 8.25 14.6667 8.25C14.025 8.25 13.5 8.775 13.5 9.41667C13.5 10.0583 14.025 10.5833 14.6667 10.5833ZM17 12.5842C17 12.1117 16.72 11.6917 16.2883 11.505C15.7925 11.2892 15.2442 11.1667 14.6667 11.1667C14.4392 11.1667 14.2233 11.19 14.0075 11.225C14.2408 11.6217 14.375 12.0767 14.375 12.5608V13.5H16.4167C16.7375 13.5 17 13.2375 17 12.9167V12.5842ZM10 6.5C10.9683 6.5 11.75 7.28167 11.75 8.25C11.75 9.21833 10.9683 10 10 10C9.03167 10 8.25 9.21833 8.25 8.25C8.25 7.28167 9.03167 6.5 10 6.5Z", fill: "white" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_1522_20929", x1: "18.3926", y1: "2.40334", x2: "-2.03277", y2: "16.707", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#2BE1B5" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#007659" })))));
};

var Icon$K = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#1EBB95" }),
        React__default["default"].createElement("mask", { id: "mask0_110_1525", maskUnits: "userSpaceOnUse", x: "9", y: "2", width: "15", height: "22" },
            React__default["default"].createElement("path", { d: "M9.5 22L14.5 2H18L22 5L24 11.5L22 18.5L17 23.5L9.5 22Z", fill: "#C4C4C4" })),
        React__default["default"].createElement("g", { mask: "url(#mask0_110_1525)" },
            React__default["default"].createElement("circle", { cx: "11.999", cy: "12.0001", r: "10", fill: "#FF1C5E" })),
        React__default["default"].createElement("path", { d: "M6.08946 14.1993L14.535 2.27255L13.3031 10.4212L18.5614 10.1963L9.57151 21.7126L11.3478 13.9744L6.08946 14.1993Z", fill: "white" })));
};

var Icon$J = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 17" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_6265_5331)" },
            React__default["default"].createElement("path", { d: "M4.13651 5.90336C3.94125 5.7081 3.94125 5.39151 4.13651 5.19625L4.82115 4.51161C5.01641 4.31635 5.33299 4.31635 5.52826 4.51161L13.8675 12.8508C14.0627 13.0461 14.0627 13.3627 13.8675 13.5579L13.1828 14.2426C12.9876 14.4378 12.671 14.4378 12.4757 14.2426L4.13651 5.90336Z" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.44021 6.60161C3.24495 6.40635 2.92836 6.40635 2.7331 6.60161L1.35331 7.98141C1.15805 8.17667 1.15805 8.49325 1.35331 8.68851L4.12556 11.4608C4.32082 11.656 4.63741 11.656 4.83267 11.4608L6.21246 10.081C6.40772 9.88571 6.40772 9.56913 6.21246 9.37386L3.44021 6.60161ZM8.99595 6.59038C9.19121 6.78564 9.50779 6.78564 9.70305 6.59038L11.0843 5.20916C11.2795 5.01389 11.2795 4.69731 11.0843 4.50205L8.31202 1.7298C8.11676 1.53454 7.80018 1.53454 7.60492 1.7298L6.2237 3.11102C6.02843 3.30628 6.02843 3.62287 6.2237 3.81813L8.99595 6.59038Z" }),
            React__default["default"].createElement("path", { d: "M1 13.5197C1 13.354 1.13431 13.2197 1.3 13.2197H6.7C6.86569 13.2197 7 13.354 7 13.5197V14.4197C7 14.5854 6.86569 14.7197 6.7 14.7197H1.3C1.13431 14.7197 1 14.5854 1 14.4197V13.5197Z" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0_6265_5331" },
                React__default["default"].createElement("rect", { width: "16", height: "16", transform: "translate(0 0.719727)" })))));
};

var Icon$I = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("g", { opacity: "0.32" },
            React__default["default"].createElement("path", { d: "M2 11.64V13.6666C2 13.8533 2.14667 14 2.33333 14H4.36C4.44667 14 4.53333 13.9666 4.59333 13.9L11.8733 6.62662L9.37333 4.12662L2.1 11.4C2.03333 11.4666 2 11.5466 2 11.64ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329V4.69329Z" }))));
};

var Icon$H = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default["default"].createElement("path", { d: "M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" }),
        React__default["default"].createElement("path", { d: "M8 5L8 8M8 8L5 8M8 8L8 11M8 8L11 8", stroke: "#1263F1", strokeWidth: "1.4", strokeLinecap: "round" })));
};

var Icon$G = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 23.9999C18.6274 23.9999 24 18.6274 24 12C24 5.37257 18.6274 0 12 0C5.37258 0 0 5.37257 0 12C0 18.6274 5.37258 23.9999 12 23.9999Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M21.2952 4.51455C20.463 4.67907 19.6694 4.91132 19.0162 5.05648C17.5259 5.39035 16.1323 6.53229 15.8275 8.6226C15.5565 10.4903 16.1855 11.2936 15.9097 13.4661C15.4259 17.2597 11.7872 18.5661 10.0888 19.3597C9.10651 19.8145 6.72103 20.8597 4.88232 21.6581C6.87587 23.129 9.33393 24 12.0001 24C18.6291 24 24 18.629 24 12C24 9.17422 23.0226 6.57583 21.3871 4.52907C21.3581 4.52423 21.3291 4.51939 21.2952 4.51455Z" }),
        React__default["default"].createElement("path", { d: "M10.65 10.2387C11.5742 8.24031 11.2403 8.23547 11.9419 6.35805C12.8274 3.97741 15.5806 4.65483 16.3403 4.75644C17.5935 4.9258 17.9226 4.48064 20.5645 4.05483C20.6951 4.03548 20.8209 4.01612 20.9468 4.0016C18.75 1.54838 15.5564 0 12 0C7.22419 0 3.10161 2.78709 1.17097 6.82741C5.12903 7.80966 9.4016 9.94353 10.65 10.2387ZM8.02741 2.09032C8.3758 2.14354 10.0693 4.24838 10.3887 9.65321C10.3887 9.65321 8.21128 9.13063 7.74193 8.00805C7.35483 7.08386 7.85806 5.86934 8.02741 2.09032ZM21.3677 4.50483C21.3726 4.51451 21.3822 4.51935 21.3871 4.52902C21.358 4.52418 21.3242 4.52418 21.2951 4.51935C21.3193 4.50967 21.3435 4.50967 21.3677 4.50483ZM0 12C0 11.0419 0.11129 10.1129 0.324193 9.22256C0.759677 9.58546 1.22419 9.98708 1.71774 10.4468C4.84354 13.3451 9.92902 15.6338 11.7822 13.5048C11.7871 13.5096 11.7919 13.5096 11.7919 13.5145C11.4532 13.9596 10.1613 15.3677 7.69354 14.9322L3.79354 20.7532C1.46129 18.5661 0 15.4548 0 12Z" })));
};

var Icon$F = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "url(#paint0_linear_425_18017)" }),
        React__default["default"].createElement("path", { d: "M37.1865 28.2572L30.6206 24.4412L48.4798 14L66.3917 24.4412L59.8257 28.2572L48.4798 21.6851L37.1865 28.2572ZM71.0666 34.8293V42.5145L77.6325 38.6984V31.0133L71.0666 27.1442L64.5007 30.9603L71.0666 34.8293ZM41.9139 31.0133L48.4798 34.8293L55.0457 31.0133L48.4798 27.1442L41.9139 31.0133ZM66.3917 37.5854L59.8257 33.7693L48.4798 40.3414L37.1865 33.7693L30.6206 37.5854V45.2705L41.9139 51.8426V64.9868L48.4798 68.8029L55.0457 64.9868V51.8426L66.3917 45.2705V37.5854ZM71.0666 61.1708L59.7732 67.7429V75.428L77.685 64.9868V44.1575L71.0666 48.0266V61.1708ZM59.7732 62.2838L66.3391 58.4677V50.7296L59.7732 54.5457V62.2838ZM41.9139 70.4989V78.1841L48.4798 82.0001L55.0457 78.1841V70.4989L48.4798 74.315L41.9139 70.4989ZM19.2747 38.6984L25.8406 42.5145V34.8293L32.4065 31.0133L25.8931 27.1442L19.3272 30.9603V38.6984H19.2747ZM25.8931 48.0266L19.3272 44.2105V65.0398L37.239 75.481V67.7959L25.8931 61.1708V48.0266ZM37.1865 54.5987L30.6206 50.7826V58.4677L37.1865 62.2838V54.5987Z", fill: "#14151A" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_425_18017", x1: "48", y1: "0", x2: "48", y2: "96", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#F0B90B" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#FFD349" })))));
};

var Icon$E = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 146 32", fill: "none" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0_183_4959)" },
            React__default["default"].createElement("path", { d: "M125.334 12.9747C125.026 12.2445 124.512 11.5144 123.895 11.0971C123.176 10.5755 122.354 10.1583 121.224 9.84536C119.786 9.42811 117.732 9.3238 115.369 9.42811C114.752 9.42811 114.136 9.53242 113.519 9.53242C112.903 9.63674 112.287 9.63674 111.67 9.74105C111.157 9.84536 110.643 9.84536 110.232 9.94967V13.9135C110.643 13.8092 111.157 13.7049 111.568 13.6006C112.184 13.4963 112.8 13.392 113.417 13.2877C114.033 13.1834 114.65 13.1834 115.266 13.079C117.012 12.9747 118.451 12.9747 119.273 13.1834C119.889 13.2877 120.403 13.4963 120.711 13.7049C121.019 13.9135 121.224 14.2265 121.327 14.6437C121.43 14.9567 121.533 15.2696 121.533 15.6869V15.9998L121.224 15.8955C119.889 15.4782 118.245 15.3739 116.396 15.3739C114.855 15.3739 113.622 15.4782 112.595 15.6869C111.568 15.8955 110.746 16.2084 110.129 16.6257C109.513 17.0429 109.102 17.4602 108.896 17.9817C108.691 18.5033 108.588 19.0249 108.588 19.6507V19.9637C108.588 20.5895 108.691 21.2154 108.999 21.737C109.205 22.2585 109.616 22.7801 110.232 23.3017C110.848 23.7189 111.67 24.1362 112.698 24.3448C113.725 24.6577 115.06 24.762 116.601 24.762C117.937 24.762 119.17 24.6577 120.197 24.3448C121.224 24.1362 121.43 24.0318 122.354 23.6146C122.663 23.406 123.485 23.3017 123.998 23.5103L124.923 24.0318H125.847V15.2696C125.847 14.748 125.642 13.8092 125.334 12.9747ZM121.533 21.1111H121.327C119.992 21.5284 118.553 21.737 116.91 21.737C115.985 21.737 115.163 21.737 114.65 21.6327C114.136 21.5284 113.725 21.5284 113.417 21.3197C113.109 21.2154 112.903 21.0068 112.8 20.7982C112.698 20.5895 112.698 20.3809 112.698 20.1723C112.698 19.9637 112.698 19.8594 112.8 19.6507C112.903 19.4421 113.109 19.2335 113.314 19.1292C113.519 19.0249 113.93 18.8162 114.444 18.8162C114.958 18.7119 115.677 18.7119 116.499 18.7119C117.423 18.7119 118.245 18.7119 119.067 18.8162C119.786 18.9205 120.505 19.0249 121.224 19.2335H121.43V21.1111H121.533Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M53.5235 11.3057C52.9071 10.6798 52.0853 10.1583 51.0579 9.74103C50.0306 9.32378 48.6951 9.11516 47.0513 9.11516C46.2295 9.11516 45.4076 9.21947 44.6885 9.32378C43.9694 9.4281 43.2502 9.63672 42.5311 9.84535L42.2229 9.94966V4.31679L38.8327 2.33485H38.0109V17.5645C38.0109 18.6076 38.1136 19.5464 38.4218 20.3809C38.6273 21.2154 39.1409 21.9456 39.7573 22.6758C40.3737 23.3016 41.1956 23.8232 42.2229 24.2405C43.2502 24.6577 44.5858 24.8663 46.2295 24.8663H47.0513C48.6951 24.8663 50.0306 24.6577 51.0579 24.2405C52.0853 23.9275 53.0099 23.406 53.6262 22.6758C54.2426 22.0499 54.6536 21.3197 54.9618 20.3809C55.1672 19.4421 55.3727 18.5033 55.3727 17.5645V16.417C55.3727 15.3739 55.27 14.4351 54.9618 13.6006C54.6536 12.6618 54.1399 11.9316 53.5235 11.3057ZM50.9552 18.399C50.9552 18.9205 50.7497 19.3378 50.4415 19.755C50.1333 20.068 49.7224 20.3809 49.106 20.6938C48.4896 20.9025 47.6677 21.0068 46.6404 21.0068C45.6131 21.0068 44.7912 20.9025 44.1748 20.6938C43.5584 20.4852 43.1475 20.1723 42.8393 19.755C42.5311 19.3378 42.4284 18.9205 42.3256 18.399C42.3256 17.9817 42.2229 17.4602 42.2229 16.9386V13.7049H42.3256C42.942 13.4963 43.6612 13.2877 44.3803 13.1833C45.0994 13.079 45.8186 12.9747 46.7432 12.9747C47.7705 12.9747 48.5923 13.079 49.106 13.2877C49.6197 13.4963 50.1333 13.8092 50.3388 14.1222C50.647 14.5394 50.7497 14.9567 50.8525 15.4782C50.8525 15.8955 50.9552 16.417 50.9552 16.9386C50.9552 17.4602 50.9552 17.9817 50.9552 18.399Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M60.4065 2.33485H60.201C59.2764 2.33485 58.66 2.54348 58.3518 2.85642C58.0436 3.27367 57.8382 3.69092 57.8382 4.31679V4.62973C57.8382 5.15129 58.0436 5.67285 58.3518 6.0901C58.66 6.50735 59.2764 6.61166 60.201 6.61166H60.4065C61.3311 6.61166 61.9475 6.40304 62.2557 6.0901C62.5639 5.67285 62.6666 5.2556 62.6666 4.62973V4.31679C62.6666 3.79523 62.4611 3.27367 62.1529 2.85642C61.9475 2.54348 61.3311 2.33485 60.4065 2.33485Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M58.1466 9.74106V24.2405H62.4614V11.723L59.0712 9.74106H58.1466Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M79.3094 16.73C78.8985 16.417 78.3848 16.1041 77.8712 15.8955C77.3575 15.6868 76.7411 15.5825 76.1247 15.4782C75.611 15.3739 74.9946 15.2696 74.481 15.2696C73.9673 15.2696 73.4536 15.2696 73.1454 15.1653C71.9126 15.1653 71.0908 15.061 70.5771 14.9567C69.7553 14.748 69.6525 14.3308 69.6525 13.9135C69.6525 13.7049 69.6525 13.6006 69.7553 13.4963C69.858 13.392 69.9607 13.1833 70.2689 13.079C70.4744 12.9747 70.8853 12.8704 71.2963 12.8704C71.7072 12.7661 72.3236 12.7661 73.1454 12.7661C74.3782 12.7661 75.611 12.8704 76.7411 12.9747C77.7684 13.079 78.8985 13.2877 80.0285 13.4963V9.84535C79.1039 9.63672 78.1793 9.4281 77.152 9.32378C76.1247 9.21947 74.9946 9.11516 73.9673 9.11516H72.94C71.399 9.11516 70.1662 9.21947 69.1389 9.53241C68.2143 9.74103 67.3924 10.1583 66.776 10.5755C66.1596 10.9928 65.7487 11.5143 65.5432 12.0359C65.3378 12.5575 65.235 13.1833 65.235 13.8092V14.1222C65.235 14.8523 65.3378 15.4782 65.6459 15.9998C65.9541 16.5213 66.2623 16.9386 66.6733 17.2515C67.0842 17.5645 67.5979 17.8774 68.1115 18.086C68.6252 18.2946 69.2416 18.399 69.7553 18.5033C70.3717 18.6076 70.8853 18.7119 71.399 18.7119C71.9126 18.7119 72.4263 18.8162 72.8372 18.8162C74.07 18.8162 74.8919 18.9205 75.4056 19.0248C76.2274 19.1291 76.4329 19.6507 76.4329 20.068C76.4329 20.1723 76.4329 20.3809 76.3302 20.4852C76.2274 20.5895 76.1247 20.7981 75.8165 20.9025C75.611 21.0068 75.2001 21.1111 74.7892 21.1111C74.3782 21.2154 73.7618 21.2154 73.0427 21.2154C71.8099 21.2154 70.3717 21.1111 69.0361 21.0068C67.8033 20.9025 66.4678 20.6938 65.3377 20.3809V24.0318C66.4678 24.2405 67.4951 24.4491 68.6252 24.5534C69.7553 24.6577 71.0908 24.762 72.3236 24.762H73.1454C74.6864 24.762 75.9192 24.6577 76.8438 24.3448C77.8712 24.1361 78.5903 23.7189 79.2067 23.3016C79.8231 22.8844 80.1313 22.3628 80.4395 21.8413C80.6449 21.3197 80.8504 20.6938 80.8504 20.068V19.755C80.8504 19.0248 80.7477 18.399 80.4395 17.8774C80.0285 17.4601 79.7203 17.0429 79.3094 16.73Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M100.267 19.2335L96.5685 9.74106H93.281L89.6854 19.2335L85.987 9.74106H82.1859V10.6799L87.7335 24.2405H91.5346L94.9247 15.4782L98.3149 24.2405H102.116L107.766 10.6799V9.74106H103.862L100.267 19.2335Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M145.264 13.8092C145.058 12.9747 144.545 12.2445 143.928 11.5143C143.312 10.8884 142.49 10.3669 141.36 9.94963C140.333 9.53238 138.997 9.32376 137.353 9.32376H136.634C134.991 9.32376 133.655 9.53238 132.628 9.94963C131.6 10.2626 130.778 10.7841 130.162 11.5143C129.546 12.1402 129.135 12.8704 128.827 13.8092C128.621 14.748 128.416 15.6868 128.416 16.6256V31.8552H129.34L132.73 29.8733V24.2404L133.039 24.3447C133.758 24.5534 134.374 24.762 135.196 24.8663C135.915 24.9706 136.737 25.0749 137.559 25.0749C139.203 25.0749 140.538 24.8663 141.565 24.4491C142.593 24.0318 143.415 23.6146 144.031 22.8844C144.647 22.2585 145.058 21.424 145.367 20.5895C145.572 19.755 145.777 18.8162 145.777 17.7731V16.6256C145.675 15.6868 145.572 14.748 145.264 13.8092ZM141.36 18.7119C141.36 19.2334 141.154 19.6507 140.846 20.0679C140.538 20.4852 140.127 20.6938 139.613 20.9024C139.1 21.1111 138.278 21.2154 137.251 21.2154C136.429 21.2154 135.607 21.1111 134.888 21.0067C134.169 20.9024 133.45 20.6938 132.833 20.4852H132.73V17.2515C132.73 16.7299 132.73 16.3127 132.833 15.7911C132.833 15.2696 133.039 14.8523 133.347 14.4351C133.655 14.0178 134.066 13.8092 134.682 13.4963C135.299 13.2876 136.121 13.1833 137.148 13.1833C138.175 13.1833 138.997 13.2876 139.613 13.4963C140.23 13.7049 140.641 14.0178 140.949 14.4351C141.257 14.8523 141.463 15.2696 141.463 15.7911C141.463 16.2084 141.565 16.7299 141.565 17.2515C141.36 17.7731 141.36 18.2946 141.36 18.7119Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M16 31.9999C24.8365 31.9999 32 24.8365 32 16C32 7.16343 24.8365 0 16 0C7.16344 0 0 7.16343 0 16C0 24.8365 7.16344 31.9999 16 31.9999Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M28.3937 6.01933C27.284 6.23868 26.226 6.54836 25.355 6.7419C23.3679 7.18706 21.5098 8.70964 21.1034 11.4967C20.7421 13.9871 21.5808 15.058 21.2131 17.9548C20.5679 23.0128 15.7163 24.7548 13.4518 25.8128C12.1421 26.4193 8.96147 27.8128 6.50986 28.8773C9.16792 30.8386 12.4453 31.9999 16.0002 31.9999C24.8389 31.9999 32.0002 24.8386 32.0002 16C32.0002 12.2322 30.6969 8.76771 28.5163 6.03868C28.4776 6.03223 28.4389 6.02578 28.3937 6.01933Z", fill: "url(#paint0_linear_183_4959)" }),
            React__default["default"].createElement("path", { d: "M14.2 13.6516C15.4322 10.9871 14.9871 10.9806 15.9226 8.4774C17.1032 5.30322 20.7742 6.20644 21.7871 6.34192C23.458 6.56773 23.8968 5.97418 27.4193 5.40644C27.5935 5.38064 27.7613 5.35483 27.929 5.33547C25 2.06451 20.7419 0 16 0C9.63225 0 4.13548 3.71612 1.56129 9.10321C6.8387 10.4129 12.5355 13.258 14.2 13.6516ZM10.7032 2.78709C11.1677 2.85806 13.4258 5.66451 13.8516 12.8709C13.8516 12.8709 10.9484 12.1742 10.3226 10.6774C9.80644 9.44514 10.4774 7.82579 10.7032 2.78709ZM28.4903 6.00644C28.4968 6.01934 28.5097 6.0258 28.5161 6.0387C28.4774 6.03225 28.4322 6.03225 28.3935 6.0258C28.4258 6.01289 28.458 6.01289 28.4903 6.00644ZM0 16C0 14.7226 0.148387 13.4838 0.432258 12.2968C1.0129 12.7806 1.63226 13.3161 2.29032 13.929C6.45806 17.7935 13.2387 20.8451 15.7097 18.0064C15.7161 18.0129 15.7226 18.0129 15.7226 18.0193C15.271 18.6129 13.5484 20.4903 10.2581 19.9096L5.05806 27.6709C1.94839 24.7548 0 20.6064 0 16Z", fill: "url(#paint1_linear_183_4959)" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_183_4959", x1: "25.6089", y1: "10.2099", x2: "21.8342", y2: "31.0052", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_183_4959", x1: "7.72271", y1: "23.5689", x2: "16.0686", y2: "-5.61129e-06", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })),
            React__default["default"].createElement("clipPath", { id: "clip0_183_4959" },
                React__default["default"].createElement("rect", { width: "145.778", height: "32", fill: "white" })))));
};

var Icon$D = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React__default["default"].createElement("g", { filter: "url(#filter0_ii_348_13510)" },
            React__default["default"].createElement("path", { d: "M25.1205 7.75065C28.2204 2.52973 35.7783 2.52973 38.8782 7.75065L62.8243 48.0809C65.9906 53.4137 62.1474 60.1652 55.9455 60.1652H8.05326C1.85136 60.1652 -1.99189 53.4137 1.17442 48.0809L25.1205 7.75065Z", fill: "#FFAD22" })),
        React__default["default"].createElement("g", { filter: "url(#filter1_ii_348_13510)" },
            React__default["default"].createElement("path", { d: "M26.837 11.8758C29.1609 7.95418 34.8366 7.95417 37.1605 11.8758L58.6306 48.1065C61.0007 52.1061 58.118 57.1653 53.4688 57.1653H10.5287C5.87956 57.1653 2.99681 52.1061 5.36695 48.1065L26.837 11.8758Z", fill: "#F1F0F0" })),
        React__default["default"].createElement("g", { filter: "url(#filter2_d_348_13510)" },
            React__default["default"].createElement("circle", { cx: "33", cy: "47.165", r: "4", fill: "#F33C3D" }),
            React__default["default"].createElement("circle", { cx: "33", cy: "47.165", r: "4", fill: "url(#paint0_radial_348_13510)" })),
        React__default["default"].createElement("g", { filter: "url(#filter3_d_348_13510)" },
            React__default["default"].createElement("path", { d: "M28.4527 24.1445C28.2096 21.4705 30.315 19.165 33 19.165C35.685 19.165 37.7904 21.4705 37.5474 24.1445L36.2716 38.1774C36.1178 39.8694 34.6991 41.165 33 41.165C31.301 41.165 29.8823 39.8694 29.7284 38.1774L28.4527 24.1445Z", fill: "#F43D42" }),
            React__default["default"].createElement("path", { d: "M28.4527 24.1445C28.2096 21.4705 30.315 19.165 33 19.165C35.685 19.165 37.7904 21.4705 37.5474 24.1445L36.2716 38.1774C36.1178 39.8694 34.6991 41.165 33 41.165C31.301 41.165 29.8823 39.8694 29.7284 38.1774L28.4527 24.1445Z", fill: "url(#paint1_linear_348_13510)" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("filter", { id: "filter0_ii_348_13510", x: "-0.958984", y: "2.83496", width: "65.917", height: "58.3303", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dx: "1", dy: "-1" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "1" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.403922 0 0 0 0 0 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_348_13510" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dx: "-1", dy: "1" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "1" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.858824 0 0 0 0 0.541176 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "effect1_innerShadow_348_13510", result: "effect2_innerShadow_348_13510" })),
            React__default["default"].createElement("filter", { id: "filter1_ii_348_13510", x: "3.51953", y: "7.93457", width: "56.958", height: "50.2307", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dx: "1", dy: "-1" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "1" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.823529 0 0 0 0 0.8 0 0 0 0 0.776471 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_348_13510" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dx: "-1", dy: "1" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "1" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "effect1_innerShadow_348_13510", result: "effect2_innerShadow_348_13510" })),
            React__default["default"].createElement("filter", { id: "filter2_d_348_13510", x: "23", y: "40.165", width: "16", height: "16", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dx: "-2", dy: "1" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.1375 0 0 0 0 0.0509896 0 0 0 0 0.0509896 0 0 0 0.24 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_348_13510" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_348_13510", result: "shape" })),
            React__default["default"].createElement("filter", { id: "filter3_d_348_13510", x: "22.4336", y: "16.165", width: "17.1328", height: "30", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dx: "-2", dy: "1" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "2" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.1375 0 0 0 0 0.0509896 0 0 0 0 0.0509896 0 0 0 0.24 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_348_13510" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_348_13510", result: "shape" })),
            React__default["default"].createElement("radialGradient", { id: "paint0_radial_348_13510", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(35.5 47.165) rotate(122.005) scale(4.71699)" },
                React__default["default"].createElement("stop", { stopColor: "white" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#F43D3E", stopOpacity: "0.46" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_348_13510", x1: "38", y1: "30.165", x2: "33", y2: "30.165", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "white" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#F53E43", stopOpacity: "0.61" })))));
};

var Icon$C = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.8254 5.34997C20.682 5.58331 21.3575 6.26664 21.5881 7.13331C22.0165 8.71665 22 12.0167 22 12.0167C22 12.0167 22 15.3 21.5881 16.8834C21.3575 17.75 20.682 18.4334 19.8254 18.6667C18.2603 19.0834 12 19.0834 12 19.0834C12 19.0834 5.75618 19.0834 4.17463 18.65C3.31796 18.4167 2.6425 17.7334 2.41186 16.8667C2 15.3 2 12 2 12C2 12 2 8.71665 2.41186 7.13331C2.6425 6.26664 3.33443 5.56664 4.17463 5.33331C5.7397 4.91664 12 4.91664 12 4.91664C12 4.91664 18.2603 4.91664 19.8254 5.34997ZM10.0065 8.96666L15.2124 12L10.0065 15.0334V8.96666Z" })));
};

var Icon$B = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M12 4.62514C14.4069 4.62514 14.6846 4.63543 15.6411 4.67657C16.5154 4.71771 16.9989 4.86171 17.3074 4.98514C17.7291 5.14971 18.0274 5.34514 18.3463 5.65371C18.6651 5.97257 18.8606 6.27086 19.0149 6.69257C19.1383 7.01143 19.2823 7.48457 19.3234 8.35886C19.3646 9.30514 19.3749 9.59314 19.3749 12C19.3749 14.4069 19.3646 14.6846 19.3234 15.6411C19.2823 16.5154 19.1383 16.9989 19.0149 17.3074C18.8503 17.7291 18.6549 18.0274 18.3463 18.3463C18.0274 18.6651 17.7291 18.8606 17.3074 19.0149C16.9886 19.1383 16.5154 19.2823 15.6411 19.3234C14.6949 19.3646 14.4069 19.3749 12 19.3749C9.59314 19.3749 9.31543 19.3646 8.35886 19.3234C7.48457 19.2823 7.00114 19.1383 6.69257 19.0149C6.27086 18.8503 5.97257 18.6549 5.65371 18.3463C5.33486 18.0274 5.13943 17.7291 4.98514 17.3074C4.86171 16.9886 4.71771 16.5154 4.67657 15.6411C4.63543 14.6949 4.62514 14.4069 4.62514 12C4.62514 9.59314 4.63543 9.31543 4.67657 8.35886C4.71771 7.48457 4.86171 7.00114 4.98514 6.69257C5.14971 6.27086 5.34514 5.97257 5.65371 5.65371C5.97257 5.33486 6.27086 5.13943 6.69257 4.98514C7.01143 4.86171 7.48457 4.71771 8.35886 4.67657C9.31543 4.63543 9.59314 4.62514 12 4.62514ZM12 3C9.552 3 9.25371 3.01029 8.28686 3.05143C7.33029 3.10286 6.672 3.24686 6.10629 3.47314C5.50971 3.69943 5.016 4.008 4.512 4.512C4.008 5.016 3.69943 5.50971 3.47314 6.10629C3.24686 6.672 3.10286 7.33029 3.05143 8.28686C3.01029 9.25371 3 9.552 3 12C3 14.448 3.01029 14.7463 3.05143 15.7131C3.09257 16.6697 3.24686 17.328 3.47314 17.8937C3.69943 18.4903 4.008 18.984 4.512 19.488C5.016 19.992 5.50971 20.3006 6.10629 20.5269C6.68229 20.7531 7.33029 20.8971 8.28686 20.9486C9.24343 20.9897 9.552 21 12 21C14.448 21 14.7463 20.9897 15.7131 20.9486C16.6697 20.9074 17.328 20.7531 17.8937 20.5269C18.4903 20.3006 18.984 19.992 19.488 19.488C19.992 18.984 20.3006 18.4903 20.5269 17.8937C20.7531 17.3177 20.8971 16.6697 20.9486 15.7131C20.9897 14.7566 21 14.448 21 12C21 9.552 20.9897 9.25371 20.9486 8.28686C20.9074 7.33029 20.7531 6.672 20.5269 6.10629C20.3006 5.50971 19.992 5.016 19.488 4.512C18.984 4.008 18.4903 3.69943 17.8937 3.47314C17.3177 3.24686 16.6697 3.10286 15.7131 3.05143C14.7463 3.01029 14.448 3 12 3Z" }),
        React__default["default"].createElement("path", { d: "M12 7.38171C9.44914 7.38171 7.38171 9.44914 7.38171 12C7.38171 14.5509 9.44914 16.6183 12 16.6183C14.5509 16.6183 16.6183 14.5509 16.6183 12C16.6183 9.44914 14.5509 7.38171 12 7.38171ZM12 15.0034C10.344 15.0034 8.99657 13.656 8.99657 12C8.99657 10.344 10.344 8.99657 12 8.99657C13.656 8.99657 15.0034 10.344 15.0034 12C15.0034 13.656 13.656 15.0034 12 15.0034Z" }),
        React__default["default"].createElement("path", { d: "M16.8034 8.27657C17.3999 8.27657 17.8834 7.79304 17.8834 7.19657C17.8834 6.6001 17.3999 6.11657 16.8034 6.11657C16.207 6.11657 15.7234 6.6001 15.7234 7.19657C15.7234 7.79304 16.207 8.27657 16.8034 8.27657Z" })));
};

var Icon$A = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.00732 5.65294V14.9274H7.20121V16.6668H8.9451L10.6862 14.9268H13.3001L16.7857 11.4502V3.3335H4.87788L4.00732 5.65294ZM6.03955 4.49183H15.624V10.869L13.5907 12.8979H10.3957L8.65455 14.6352V12.8979H6.03955V4.49183ZM9.23496 6.81239H10.3961V10.2902H9.23496V6.81239ZM13.59 6.81239H12.4283V10.2902H13.59V6.81239Z" })));
};

var Icon$z = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M20.9822 5.07062C20.8756 6.63229 18.0143 18.2999 18.0143 18.2999C18.0143 18.2999 17.8366 18.982 17.2146 19C17.0013 19 16.717 18.982 16.3971 18.6769C15.7395 18.1204 14.2467 17.0434 12.8427 16.0562C12.7894 16.11 12.7361 16.1639 12.665 16.2177C12.3451 16.5049 11.8653 16.9178 11.3499 17.4204C11.1544 17.5999 10.9411 17.7973 10.7279 18.0127L10.7101 18.0307C10.5857 18.1563 10.4791 18.2461 10.3902 18.3179C9.69709 18.8923 9.62601 18.4076 9.62601 18.1563L9.99922 14.0457V14.0098L10.017 13.9739C10.0348 13.9201 10.0703 13.9021 10.0703 13.9021C10.0703 13.9021 17.339 7.36825 17.5345 6.66819C17.5523 6.63229 17.4989 6.59639 17.4101 6.63229C16.9302 6.79385 8.55969 12.143 7.63555 12.7354C7.58224 12.7713 7.42229 12.7533 7.42229 12.7533L3.35254 11.4071C3.35254 11.4071 2.8727 11.2096 3.03264 10.7608C3.06819 10.6711 3.1215 10.5813 3.31699 10.4557C4.22336 9.80948 19.987 4.08336 19.987 4.08336C19.987 4.08336 20.4313 3.93976 20.6979 4.02951C20.8223 4.08336 20.8934 4.13721 20.9645 4.31671C20.9822 4.38851 21 4.53212 21 4.69367C21 4.78342 20.9822 4.89112 20.9822 5.07062Z" })));
};

var Icon$y = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var Icon$x = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M5.1345 7.85614C5.157 7.63937 5.07225 7.42555 4.90725 7.28006L3.22725 5.29612V5H8.44575L12.4792 13.6669L16.0253 5H21V5.29612L19.563 6.64593C19.4392 6.73852 19.3778 6.89062 19.4032 7.04125V16.9595C19.3778 17.1094 19.4392 17.2615 19.563 17.3541L20.9662 18.7039V19H13.9073V18.7039L15.3615 17.321C15.504 17.1814 15.504 17.1402 15.504 16.9264V8.90983L11.4622 18.9677H10.9163L6.21 8.90983V15.6508C6.171 15.9337 6.267 16.2195 6.47025 16.4238L8.361 18.6708V18.9677H3V18.6708L4.89075 16.4238C5.09325 16.2188 5.18325 15.9315 5.1345 15.6508V7.85614Z" })));
};

var Icon$w = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("circle", { opacity: "0.48", cx: "20", cy: "20", r: "12", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M22.8928 16.1071L17.75 12.25L17.75 14.1783C14.5357 14.1784 11.9643 16.107 11.9643 21.2499C13.25 19.3214 14.5357 18.0354 17.75 18.0354L17.75 19.9643L22.8928 16.1071Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.1072 24.3929L22.25 28.25L22.25 26.3217C25.4643 26.3216 28.0357 24.393 28.0357 19.2501C26.75 21.1786 25.4643 22.4646 22.25 22.4646L22.25 20.5357L17.1072 24.3929Z", fill: "white" })));
};

var Icon$v = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "9", y: "9", width: "22", height: "4", rx: "1", fill: "white" }),
        React__default["default"].createElement("rect", { x: "9", y: "15", width: "14", height: "16", rx: "1", fill: "white" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "25", y: "15", width: "6", height: "16", rx: "1", fill: "white" })));
};

var Icon$u = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M21 30C27.0751 30 32 25.0751 32 19C32 12.9249 27.0751 8 21 8C14.9249 8 10 12.9249 10 19C10 20.2643 10.2133 21.4788 10.6059 22.6094C11.3169 22.2209 12.1326 22 13 22C15.7614 22 18 24.2386 18 27C18 27.8674 17.7791 28.6831 17.3906 29.3941C18.5212 29.7867 19.7357 30 21 30Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M21.875 23.7774V24.8334H20.125V23.7823C18.0784 23.4251 17.5 21.834 17.5 20.9406H19.25C19.2596 21.0797 19.3891 21.9138 21 21.9138C22.2075 21.9138 22.75 21.3444 22.75 20.9406C22.75 20.6253 22.75 19.9674 21 19.9674C17.955 19.9674 17.5 18.1378 17.5 17.0478C17.5 15.7943 18.4004 14.5331 20.125 14.2109V13.1667H21.875V14.246C23.3922 14.645 23.975 16.0493 23.975 17.0478H23.1L22.225 17.0653C22.2127 16.6955 22.0369 16.0746 21 16.0746C19.8634 16.0746 19.25 16.5768 19.25 17.0478C19.25 17.4118 19.25 18.021 21 18.021C24.045 18.021 24.5 19.8506 24.5 20.9406C24.5 22.194 23.5996 23.4553 21.875 23.7774Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13 32C15.7614 32 18 29.7614 18 27C18 24.2386 15.7614 22 13 22C10.2386 22 8 24.2386 8 27C8 29.7614 10.2386 32 13 32ZM12.25 24.75C12.25 24.3358 12.5858 24 13 24C13.4142 24 13.75 24.3358 13.75 24.75V26.25H15.25C15.6642 26.25 16 26.5858 16 27C16 27.4142 15.6642 27.75 15.25 27.75H13.75V29.25C13.75 29.6642 13.4142 30 13 30C12.5858 30 12.25 29.6642 12.25 29.25V27.75H10.75C10.3358 27.75 10 27.4142 10 27C10 26.5858 10.3358 26.25 10.75 26.25H12.25V24.75Z", fill: "white" })));
};

var Icon$t = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 11C11 10.4477 11.4477 10 12 10H21C21.5523 10 22 10.4477 22 11V12H21L23 18H11L12 12H11V11ZM14 12L13.2275 17H20.6578L19 12H14Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10 19C10 18.4477 10.4477 18 11 18H23L28.2827 18.7547C29.268 18.8954 29.9999 19.7393 29.9999 20.7346V23.256C29.5308 23.0902 29.0259 23 28.5 23C26.1837 23 24.2762 24.75 24.0275 27H19.8261C19.9398 26.5185 20 26.0163 20 25.5C20 21.9101 17.0899 19 13.5 19C12.2114 19 11.0103 19.375 10 20.0218V19Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M13.5 31C16.5376 31 19 28.5376 19 25.5C19 22.4624 16.5376 20 13.5 20C10.4624 20 8 22.4624 8 25.5C8 28.5376 10.4624 31 13.5 31Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M28.5 31C30.433 31 32 29.433 32 27.5C32 25.567 30.433 24 28.5 24C26.567 24 25 25.567 25 27.5C25 29.433 26.567 31 28.5 31Z", fill: "white" })));
};

var Icon$s = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3178 9.40189C15.5819 11.6818 14 15.0592 14 18.6205V26H26V18.6205C26 15.0592 24.4181 11.6818 21.6822 9.4019L20.6402 8.53354C20.2693 8.2245 19.7307 8.2245 19.3598 8.53354L18.3178 9.40189ZM20 17C21.1046 17 22 16.1046 22 15C22 13.8954 21.1046 13 20 13C18.8954 13 18 13.8954 18 15C18 16.1046 18.8954 17 20 17Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M10 25.5822C10 23.9997 10.8941 22.5529 12.3096 21.8452L14 21V26H10.4178C10.1871 26 10 25.8129 10 25.5822Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M30 25.5822C30 23.9997 29.1059 22.5529 27.6904 21.8452L26 21V26H29.5822C29.8129 26 30 25.8129 30 25.5822Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M17 28H23C23 29.2495 22.3755 30.4163 21.3359 31.1094L20 32L18.6641 31.1094C17.6245 30.4163 17 29.2495 17 28Z", fill: "white" })));
};

var Icon$r = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("circle", { cx: "19.9999", cy: "18.1364", r: "3.63636", fill: "white" }),
        React__default["default"].createElement("path", { d: "M12.7273 28.0758C12.7273 25.398 14.898 23.2273 17.5758 23.2273H22.4243C25.102 23.2273 27.2727 25.398 27.2727 28.0758C27.2727 29.4147 26.1874 30.5 24.8485 30.5H15.1515C13.8127 30.5 12.7273 29.4147 12.7273 28.0758Z", fill: "white" }),
        React__default["default"].createElement("g", { opacity: "0.48" },
            React__default["default"].createElement("circle", { cx: "26.0002", cy: "12.2505", r: "2.72727", fill: "white" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M23.1995 21.5233C24.0983 20.6739 24.6591 19.4706 24.6591 18.1364C24.6591 17.3938 24.4854 16.6917 24.1764 16.0687C24.1777 16.0687 24.179 16.0687 24.1803 16.0687H27.0894C29.4993 16.0687 31.453 18.0224 31.453 20.4324C31.453 21.0349 30.9646 21.5233 30.3621 21.5233H23.1995Z", fill: "white" })),
        React__default["default"].createElement("g", { opacity: "0.48" },
            React__default["default"].createElement("circle", { cx: "14.0002", cy: "12.2505", r: "2.72727", fill: "white" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M15.8241 16.0687C15.8221 16.0687 15.8201 16.0687 15.8181 16.0687H12.909C10.4991 16.0687 8.54541 18.0224 8.54541 20.4324C8.54541 21.0349 9.03383 21.5233 9.63632 21.5233H16.801C15.9022 20.6739 15.3413 19.4706 15.3413 18.1364C15.3413 17.3938 15.515 16.6917 15.8241 16.0687Z", fill: "white" }))));
};

var Icon$q = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20 22C23.3137 22 26 19.3137 26 16C26 12.6863 23.3137 10 20 10C16.6863 10 14 12.6863 14 16C14 19.3137 16.6863 22 20 22Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28 16C28 20.4183 24.4183 24 20 24C15.5817 24 12 20.4183 12 16C12 11.5817 15.5817 8 20 8C24.4183 8 28 11.5817 28 16ZM27 16C27 19.866 23.866 23 20 23C16.134 23 13 19.866 13 16C13 12.134 16.134 9 20 9C23.866 9 27 12.134 27 16Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M12 22L8 23L10.3945 24L13 23L12 22Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M28 22L32 23L29.6055 24L27 23L28 22Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M10 27L8 23L20 28V32L10 27Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M30 27L32 23L20 28V32L30 27Z", fill: "white" })));
};

var Icon$p = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M25.446 26.8459C26.2136 26.827 26.9999 27.2117 26.9999 28H29.9999C31.1045 28 31.9999 27.1046 31.9999 26V14C31.9999 12.8954 31.1045 12 29.9999 12H26.9999C26.9999 12.7883 26.2136 13.173 25.446 13.1541V26.8459Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M25.4459 26.8459C24.7144 26.864 24 27.2487 24 28H10C8.89543 28 8 27.1046 8 26V14C8 12.8954 8.89543 12 10 12H24C24 12.7513 24.7144 13.136 25.4459 13.1541V26.8459ZM15.3443 16.3553L15.3391 16.3808C15.3259 16.5082 15.3122 16.6342 15.298 16.7575C15.2877 17.0511 15.3261 17.3989 15.497 17.6197C15.7576 17.9565 16.4911 18.2523 16.8382 18.3626C16.7451 17.009 16.3818 14.5784 15.529 14C15.4969 14.5641 15.4312 15.4887 15.3418 16.3555L15.3443 16.3553ZM23.0201 15.3189C22.5294 15.4207 21.8044 15.6327 21.3179 15.7835C20.6954 16.0182 20.3265 16.4732 20.1354 16.8521C19.9522 17.2869 19.8639 17.7631 19.8394 18.0201C19.8426 18.3209 19.8596 18.9997 19.9017 19.3085C19.9544 19.6944 20.0323 20.9197 19.5354 21.8596C19.3633 22.2273 18.5538 23.176 16.6922 24.029C14.8306 24.882 13.1231 25.6681 12.5021 25.9546L15.4118 21.4195L15.413 21.4199C15.8737 21.5439 16.9597 21.5347 17.706 20.5453C17.214 21.0578 16.4065 21.3136 15.1381 20.7997C13.4877 20.131 12.6253 19.3343 11.7497 18.5253L11.7496 18.5253C11.0061 17.8384 10.2531 17.1427 9 16.5092C9.515 16.3639 11.1564 16.3166 13.602 17.2892C14.5337 17.6597 15.2472 17.9747 15.8174 18.2265C16.304 18.4414 16.6864 18.6102 17.0111 18.7282C17.1742 18.3362 17.3442 17.8529 17.4553 17.3496C17.7194 16.1531 18.0233 15.6088 18.9162 15.4213C19.0901 15.4027 19.5205 15.3821 19.8513 15.4481C20.0913 15.496 20.2889 15.5282 20.4914 15.5205C20.6396 15.4995 21.039 15.4298 21.4977 15.3115C22.0782 15.1619 23.0899 14.9521 23.7498 15.0796C24.2776 15.1816 24.5585 15.3132 24.6329 15.3663C24.3527 15.2972 23.6378 15.1909 23.0201 15.3189Z", fill: "white" })));
};

var Icon$o = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M12 12H9C8.44772 12 8 12.4477 8 13V15C8 18.7277 10.5495 21.8599 14 22.748C14.1864 22.7959 14.3754 22.8374 14.5667 22.872C13.6853 22.056 12.9879 21.044 12.5438 19.9052C11.005 18.819 10 17.0268 10 15V14H12V12Z", fill: "white" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M25.4333 22.872C25.6247 22.8374 25.8137 22.7959 26.0001 22.748C29.4505 21.8599 32.0001 18.7277 32.0001 15V13C32.0001 12.4477 31.5523 12 31.0001 12H28.0001V14H30.0001V15C30.0001 17.0268 28.9951 18.819 27.4562 19.9052C27.0122 21.044 26.3148 22.056 25.4333 22.872Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 9.15842C12 9.07093 12.0709 9 12.1584 9H27.8416C27.9291 9 28 9.07093 28 9.15842V17C28 20.1071 26.2287 22.8004 23.6409 24.1254C22.9443 24.6344 22 25.6535 22 27C22 27.899 22.8082 28.1918 23.698 28.5143C24.7878 28.9092 26 29.3485 26 31H14C14 29.3485 15.2122 28.9092 16.302 28.5143C17.1918 28.1918 18 27.899 18 27C18 25.6535 17.0557 24.6344 16.3591 24.1254C13.7713 22.8004 12 20.1071 12 17V9.15842ZM20.2017 12.1219C20.1223 11.9594 19.8777 11.9594 19.7983 12.1219L18.4851 14.8098C18.4528 14.876 18.3863 14.9216 18.3096 14.9302L15.1963 15.2787C15.008 15.2998 14.9324 15.5195 15.0716 15.641L17.3733 17.6507C17.4301 17.7002 17.4555 17.774 17.4404 17.8456L16.8294 20.7488C16.7925 20.9244 16.9904 21.0602 17.1558 20.9727L19.8915 19.5269C19.9589 19.4913 20.0411 19.4913 20.1085 19.5269L22.8442 20.9727C23.0096 21.0602 23.2075 20.9244 23.1706 20.7488L22.5596 17.8456C22.5445 17.774 22.5699 17.7002 22.6267 17.6507L24.9284 15.641C25.0676 15.5195 24.992 15.2998 24.8037 15.2787L21.6904 14.9302C21.6137 14.9216 21.5472 14.876 21.5149 14.8098L20.2017 12.1219Z", fill: "white" })));
};

var Icon$n = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { opacity: "0.48", d: "M11 9C9.89543 9 9 9.89543 9 11V29C9 30.1046 9.89543 31 11 31C17 31 18.1667 26.6667 18 24.5H22C21.8333 26.6667 23 31 29 31C30.1046 31 31 30.1046 31 29V11C31 9.89543 30.1046 9 29 9H11Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M13 10L13.207 11.0134C13.2876 11.4059 13.5942 11.7126 13.9868 11.7928L15 12L13.9868 12.2072C13.5942 12.2874 13.2876 12.5941 13.207 12.9866L13 14L12.793 12.9866C12.7583 12.8175 12.6816 12.6642 12.5742 12.5382C12.5156 12.4697 12.4482 12.4092 12.373 12.3586C12.2661 12.2863 12.1445 12.234 12.0132 12.2072L11 12L12.0132 11.7928C12.2075 11.7532 12.3809 11.6581 12.5156 11.5246C12.6538 11.3882 12.7524 11.2117 12.793 11.0134L13 10Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M27.377 14.8437L27 13L26.623 14.8437C26.543 15.2362 26.2363 15.543 25.8438 15.6232L24 16L25.8438 16.3768C26.2363 16.457 26.543 16.7638 26.623 17.1563L27 19L27.377 17.1563C27.457 16.7638 27.7637 16.457 28.1562 16.3768L30 16L28.1562 15.6232C27.7637 15.543 27.457 15.2362 27.377 14.8437Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.4834 11.4304C17.2764 13.2698 16 15.9946 16 18.8678V19.6667L14.873 20.2301C13.9292 20.702 13.3335 21.6664 13.3335 22.7214C13.3335 22.8753 13.458 23 13.6118 23H26.3882C26.542 23 26.6665 22.8753 26.6665 22.7214C26.6665 21.6664 26.0708 20.702 25.127 20.2301L24 19.6667V18.8678C24 15.9946 22.7236 13.2698 20.5166 11.4304C20.2173 11.1811 19.7827 11.1811 19.4834 11.4304ZM20 17C20.7363 17 21.333 16.403 21.333 15.6666C21.333 14.9303 20.7363 14.3333 20 14.3333C19.2637 14.3333 18.6665 14.9303 18.6665 15.6666C18.6665 16.403 19.2637 17 20 17Z", fill: "white" })));
};

var Icon$m = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "#1263F1" }),
        React__default["default"].createElement("path", { opacity: "0.48", fillRule: "evenodd", clipRule: "evenodd", d: "M22.7945 9.11454C23.0627 8.96182 23.3904 8.96182 23.6586 9.11454L30.552 13.0397C30.8287 13.1973 31 13.4934 31 13.8144V21.6277C31 21.9487 30.8287 22.2448 30.552 22.4024L23.6586 26.3276C23.3904 26.4803 23.0627 26.4803 22.7945 26.3276L15.9011 22.4024C15.6243 22.2448 15.4531 21.9487 15.4531 21.6277V13.8144C15.4531 13.4934 15.6244 13.1973 15.9011 13.0397L22.7945 9.11454Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M18.0528 19.7791V17.0698H18.0559L20.1185 19.7791H20.9879V15.4186H19.982V18.1247L17.9258 15.4186H17.0469V19.7791H18.0528Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M23.3308 19.7791V18.1728H25.0792V17.3231H23.3308V16.3228H25.3679V15.4186H22.3249V19.7791H23.3308Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M28.3328 19.7791V16.3228H29.5385V15.4186H26.1243V16.3228H27.3332V19.7791H28.3328Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M9 22.2414C9 20.5178 11.1849 19.0732 14.1285 18.6826V22.3549C14.1285 22.6873 14.3048 22.9942 14.5905 23.1591L18.696 25.5297C17.8007 25.7696 16.7932 25.9044 15.7279 25.9044C12.013 25.9044 9 24.2653 9 22.2414Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M15.7279 26.9923C17.2942 26.9923 18.7352 26.701 19.8784 26.2124L21.1592 26.952C19.9352 27.8617 17.9586 28.4522 15.7279 28.4522C12.0113 28.4522 9 26.8131 9 24.7893V23.3557C9.01722 25.371 12.0225 26.9923 15.7279 26.9923Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M15.7279 29.5401C18.4701 29.5401 20.8282 28.6473 21.8763 27.366L22.4261 27.6835C22.1057 29.5447 19.2299 31 15.7279 31C12.0113 31 9 29.3609 9 27.3371V25.9035C9.01722 27.9188 12.0225 29.5401 15.7279 29.5401Z", fill: "white" })));
};

var Icon$l = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "url(#paint0_linear_685_3383)" }),
        React__default["default"].createElement("path", { d: "M29.0513 15.4051C29.2382 15.4843 29.4079 15.6006 29.5505 15.7473C29.6935 15.8928 29.8069 16.0657 29.8841 16.2562C29.9612 16.4467 30.0006 16.651 30 16.8571L30 27.5257C29.9995 27.9867 29.9076 28.4428 29.7298 28.8665C29.552 29.2902 29.2919 29.6726 28.9654 29.9909C28.3165 30.6381 27.4454 31.0003 26.5385 31L13.4615 31C11.5865 31 10 29.3795 10 27.4643L10 16.8571C10 16.4404 10.1621 16.0407 10.4506 15.746C10.7391 15.4513 11.1304 15.2857 11.5385 15.2857H14.6105V16.8077H16.1587V15.2857L23.8368 15.2857V16.8077H25.3851V15.2857H28.4615C28.6639 15.2853 28.8644 15.3258 29.0513 15.4051Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M25.3846 15.282V14.5C25.3846 13.0413 24.8173 11.6424 23.8075 10.6109C22.7977 9.57946 21.4281 9 20 9C18.5719 9 17.2023 9.57946 16.1925 10.6109C15.1827 11.6424 14.6154 13.0413 14.6154 14.5V15.2821H16.1538V14.5C16.1538 13.4581 16.5591 12.4588 17.2804 11.7221C18.0017 10.9853 18.9799 10.5714 20 10.5714C21.0201 10.5714 21.9983 10.9853 22.7196 11.7221C23.4409 12.4588 23.8462 13.4581 23.8462 14.5V15.282H25.3846Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M20 29C23.3137 29 26 26.3137 26 23C26 19.6863 23.3137 17 20 17C16.6863 17 14 19.6863 14 23C14 26.3137 16.6863 29 20 29Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M24.6478 19.2573C24.2317 19.3395 23.8349 19.4556 23.5083 19.5282C22.7632 19.6952 22.0664 20.2661 21.914 21.3113C21.7785 22.2452 22.093 22.6468 21.9551 23.7331C21.7132 25.6298 19.8938 26.2831 19.0446 26.6798C18.5535 26.9072 17.3608 27.4298 16.4414 27.829C17.4382 28.5645 18.6672 29 20.0003 29C23.3148 29 26.0003 26.3145 26.0003 23C26.0003 21.5871 25.5116 20.2879 24.6938 19.2645C24.6793 19.2621 24.6648 19.2597 24.6478 19.2573Z", fill: "url(#paint1_linear_685_3383)" }),
        React__default["default"].createElement("path", { d: "M19.325 22.1193C19.7871 21.1202 19.6202 21.1177 19.971 20.179C20.4137 18.9887 21.7903 19.3274 22.1702 19.3782C22.7968 19.4629 22.9613 19.2403 24.2822 19.0274C24.3476 19.0177 24.4105 19.0081 24.4734 19.0008C23.375 17.7742 21.7782 17 20 17C17.6121 17 15.5508 18.3935 14.5855 20.4137C16.5645 20.9048 18.7008 21.9718 19.325 22.1193ZM18.0137 18.0452C18.1879 18.0718 19.0347 19.1242 19.1943 21.8266C19.1943 21.8266 18.1056 21.5653 17.871 21.004C17.6774 20.5419 17.929 19.9347 18.0137 18.0452ZM24.6839 19.2524C24.6863 19.2573 24.6911 19.2597 24.6935 19.2645C24.679 19.2621 24.6621 19.2621 24.6476 19.2597C24.6597 19.2548 24.6718 19.2548 24.6839 19.2524ZM14 23C14 22.521 14.0556 22.0564 14.1621 21.6113C14.3798 21.7927 14.6121 21.9935 14.8589 22.2234C16.4218 23.6726 18.9645 24.8169 19.8911 23.7524C19.8935 23.7548 19.896 23.7548 19.896 23.7572C19.7266 23.9798 19.0806 24.6839 17.8468 24.4661L15.8968 27.3766C14.7306 26.283 14 24.7274 14 23Z", fill: "url(#paint2_linear_685_3383)" }),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_685_3383", x1: "-6", y1: "-4.54113e-07", x2: "48.5", y2: "56.5", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#1263F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#F63D5E" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_685_3383", x1: "23.6036", y1: "20.8287", x2: "22.188", y2: "28.627", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
            React__default["default"].createElement("linearGradient", { id: "paint2_linear_685_3383", x1: "16.896", y1: "25.8383", x2: "20.0257", y2: "17", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })))));
};

var Icon$k = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40", fill: "none" }, props),
        React__default["default"].createElement("rect", { width: "40", height: "40", rx: "8", fill: "url(#paint0_radial_685_2787)" }),
        React__default["default"].createElement("g", { filter: "url(#filter0_i_685_2787)" },
            React__default["default"].createElement("path", { d: "M31.3561 19.486C30.2956 14.8556 28.6995 12.3842 26.3318 11.7091C25.8341 11.5682 25.3179 11.4977 24.7992 11.5001C24.1137 11.5001 23.5167 11.6613 22.8851 11.8323C22.1241 12.0385 21.2595 12.2727 19.999 12.2727C18.7384 12.2727 17.8733 12.039 17.1108 11.8328C16.4788 11.6613 15.8822 11.5001 15.1987 11.5001C14.6624 11.4983 14.1284 11.5685 13.6121 11.7087C11.257 12.3808 9.66188 14.8513 8.58581 19.4831C7.42875 24.4674 7.99828 27.6144 10.1829 28.3445C10.4824 28.4464 10.7974 28.499 11.115 28.5C12.6115 28.5 13.8116 27.2962 14.6317 26.3106C15.5582 25.1951 16.6428 24.6292 19.999 24.6292C22.9966 24.6292 24.2372 25.0218 25.3088 26.3106C25.9823 27.1209 26.6189 27.6878 27.2539 28.0446C28.0984 28.5188 28.9425 28.6241 29.762 28.3522C31.0531 27.9268 31.7931 26.8022 31.9622 25.0087C32.0907 23.6335 31.8927 21.827 31.3561 19.486Z", fill: "url(#paint1_linear_685_2787)" })),
        React__default["default"].createElement("g", { filter: "url(#filter1_di_685_2787)" },
            React__default["default"].createElement("path", { d: "M23.4432 21.3812C23.6077 21.4874 23.8012 21.5441 23.9991 21.5441C24.2639 21.5441 24.5179 21.4427 24.7053 21.2621C24.8928 21.0815 24.9985 20.8365 24.9991 20.5807C24.9996 20.3896 24.9414 20.2027 24.8318 20.0435C24.7222 19.8844 24.5662 19.7602 24.3835 19.6868C24.2008 19.6133 23.9997 19.5938 23.8055 19.6308C23.6114 19.6678 23.4329 19.7596 23.2928 19.8946C23.1527 20.0295 23.0572 20.2016 23.0184 20.389C22.9796 20.5764 22.9993 20.7707 23.0749 20.9473C23.1505 21.124 23.2787 21.2749 23.4432 21.3812Z", fill: "#38BC7A" })),
        React__default["default"].createElement("g", { filter: "url(#filter2_di_685_2787)" },
            React__default["default"].createElement("path", { d: "M25.6437 19.2566C25.8081 19.3628 26.0015 19.4194 26.1993 19.4194C26.4645 19.4194 26.7189 19.3176 26.9064 19.1365C27.094 18.9554 27.1993 18.7098 27.1993 18.4536C27.1993 18.2626 27.1407 18.0759 27.0308 17.9171C26.9209 17.7583 26.7647 17.6345 26.582 17.5614C26.3992 17.4883 26.1982 17.4691 26.0042 17.5064C25.8102 17.5437 25.632 17.6357 25.4921 17.7707C25.3523 17.9058 25.257 18.0779 25.2184 18.2652C25.1798 18.4526 25.1997 18.6467 25.2753 18.8232C25.351 18.9997 25.4792 19.1505 25.6437 19.2566Z", fill: "#E89924" })),
        React__default["default"].createElement("g", { filter: "url(#filter3_di_685_2787)" },
            React__default["default"].createElement("path", { d: "M23.4435 17.1319C23.6079 17.2381 23.8013 17.2947 23.9991 17.2947C24.2643 17.2947 24.5187 17.1929 24.7062 17.0118C24.8938 16.8307 24.9991 16.5851 24.9991 16.3289C24.9991 16.1379 24.9405 15.9512 24.8306 15.7924C24.7207 15.6336 24.5645 15.5098 24.3818 15.4367C24.199 15.3636 23.998 15.3445 23.804 15.3817C23.61 15.419 23.4318 15.511 23.2919 15.646C23.1521 15.7811 23.0568 15.9532 23.0182 16.1405C22.9797 16.3279 22.9995 16.522 23.0751 16.6985C23.1508 16.875 23.279 17.0258 23.4435 17.1319Z", fill: "#F93B5D" })),
        React__default["default"].createElement("g", { filter: "url(#filter4_di_685_2787)" },
            React__default["default"].createElement("path", { d: "M21.2433 19.2566C21.4077 19.3628 21.6011 19.4194 21.7989 19.4194C22.0641 19.4194 22.3185 19.3176 22.506 19.1365C22.6936 18.9554 22.7989 18.7098 22.7989 18.4536C22.7989 18.2626 22.7403 18.0759 22.6304 17.9171C22.5205 17.7583 22.3643 17.6345 22.1816 17.5614C21.9989 17.4883 21.7978 17.4691 21.6038 17.5064C21.4098 17.5437 21.2316 17.6357 21.0917 17.7707C20.9519 17.9058 20.8566 18.0779 20.818 18.2652C20.7795 18.4526 20.7993 18.6467 20.875 18.8232C20.9506 18.9997 21.0788 19.1505 21.2433 19.2566Z", fill: "#1263F1" })),
        React__default["default"].createElement("g", { filter: "url(#filter5_di_685_2787)" },
            React__default["default"].createElement("path", { d: "M15.9983 19.2262H17.5984C17.8106 19.2262 18.014 19.1448 18.1641 18.9999C18.3141 18.855 18.3984 18.6585 18.3984 18.4536C18.3984 18.2487 18.3141 18.0522 18.1641 17.9073C18.014 17.7624 17.8106 17.681 17.5984 17.681H15.9983V16.1358C15.9983 15.9309 15.914 15.7343 15.7639 15.5895C15.6139 15.4446 15.4104 15.3632 15.1982 15.3632C14.986 15.3632 14.7826 15.4446 14.6325 15.5895C14.4825 15.7343 14.3982 15.9309 14.3982 16.1358V17.681H12.7981C12.5859 17.681 12.3824 17.7624 12.2324 17.9073C12.0823 18.0522 11.998 18.2487 11.998 18.4536C11.998 18.6585 12.0823 18.855 12.2324 18.9999C12.3824 19.1448 12.5859 19.2262 12.7981 19.2262H14.3982V20.7715C14.3982 20.9764 14.4825 21.1729 14.6325 21.3178C14.7826 21.4627 14.986 21.5441 15.1982 21.5441C15.4104 21.5441 15.6139 21.4627 15.7639 21.3178C15.914 21.1729 15.9983 20.9764 15.9983 20.7715V19.2262Z", fill: "#00000D" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("filter", { id: "filter0_i_685_2787", x: "8", y: "11.5", width: "24", height: "17", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "BackgroundImageFix", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "-1.4" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.627344 0 0 0 0 0.742503 0 0 0 0 0.9125 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect1_innerShadow_685_2787" })),
            React__default["default"].createElement("filter", { id: "filter1_di_685_2787", x: "21.999", y: "19.2125", width: "4", height: "3.93152", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.6" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "0.5" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.41125 0 0 0 0 0.783333 0 0 0 0 0.596204 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_685_2787" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_685_2787", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.4" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.285278 0 0 0 0 0.866667 0 0 0 0 0.574272 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_685_2787" })),
            React__default["default"].createElement("filter", { id: "filter2_di_685_2787", x: "24.1992", y: "17.0879", width: "4", height: "3.93152", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.6" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "0.5" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.8875 0 0 0 0 0.717396 0 0 0 0 0.517708 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_685_2787" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_685_2787", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.4" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.808667 0 0 0 0 0.316667 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_685_2787" })),
            React__default["default"].createElement("filter", { id: "filter3_di_685_2787", x: "21.999", y: "14.9632", width: "4", height: "3.93152", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.6" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "0.5" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.925 0 0 0 0 0.593542 0 0 0 0 0.652855 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_685_2787" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_685_2787", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.4" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 1 0 0 0 0 0.55 0 0 0 0 0.630526 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_685_2787" })),
            React__default["default"].createElement("filter", { id: "filter4_di_685_2787", x: "19.7988", y: "17.0879", width: "4", height: "3.93152", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.6" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "0.5" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.486528 0 0 0 0 0.651847 0 0 0 0 0.941667 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_685_2787" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_685_2787", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.4" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.329167 0 0 0 0 0.572833 0 0 0 0 1 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_685_2787" })),
            React__default["default"].createElement("filter", { id: "filter5_di_685_2787", x: "10.998", y: "14.9632", width: "8.40039", height: "8.18091", filterUnits: "userSpaceOnUse", colorInterpolationFilters: "sRGB" },
                React__default["default"].createElement("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.6" }),
                React__default["default"].createElement("feGaussianBlur", { stdDeviation: "0.5" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "out" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.615625 0 0 0 0 0.697708 0 0 0 0 0.820833 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "BackgroundImageFix", result: "effect1_dropShadow_685_2787" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in: "SourceGraphic", in2: "effect1_dropShadow_685_2787", result: "shape" }),
                React__default["default"].createElement("feColorMatrix", { in: "SourceAlpha", type: "matrix", values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0", result: "hardAlpha" }),
                React__default["default"].createElement("feOffset", { dy: "0.4" }),
                React__default["default"].createElement("feComposite", { in2: "hardAlpha", operator: "arithmetic", k2: "-1", k3: "1" }),
                React__default["default"].createElement("feColorMatrix", { type: "matrix", values: "0 0 0 0 0.427309 0 0 0 0 0.427309 0 0 0 0 0.679167 0 0 0 1 0" }),
                React__default["default"].createElement("feBlend", { mode: "normal", in2: "shape", result: "effect2_innerShadow_685_2787" })),
            React__default["default"].createElement("radialGradient", { id: "paint0_radial_685_2787", cx: "0", cy: "0", r: "1", gradientUnits: "userSpaceOnUse", gradientTransform: "translate(20 -13) rotate(90) scale(61 68.0535)" },
                React__default["default"].createElement("stop", { offset: "0.048962", stopColor: "#FF1C5E" }),
                React__default["default"].createElement("stop", { offset: "0.582877", stopColor: "#00000D" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#1EBB95" })),
            React__default["default"].createElement("linearGradient", { id: "paint1_linear_685_2787", x1: "20", y1: "11.5", x2: "20", y2: "25", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { offset: "0.0967989", stopColor: "white" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "#CBDFFF" })))));
};

var Icon$j = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 21 20", fill: "none" }, props),
        React__default["default"].createElement("rect", { x: "1.61121", y: "0.833328", width: "6.66667", height: "6.66667", rx: "3.33333" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "1.61121", y: "12.5", width: "6.66667", height: "6.66667", rx: "1" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "13.2778", y: "0.833328", width: "6.66667", height: "6.66667", rx: "1" }),
        React__default["default"].createElement("rect", { opacity: "0.48", x: "13.2778", y: "12.5", width: "6.66667", height: "6.66667", rx: "1" }),
        " "));
};

var Icon$i = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M2 20H22C22.55 20 23 19.55 23 19C23 18.45 22.55 18 22 18H2C1.45 18 1 18.45 1 19C1 19.55 1.45 20 2 20ZM2 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM1 5C1 5.55 1.45 6 2 6H22C22.55 6 23 5.55 23 5C23 4.45 22.55 4 22 4H2C1.45 4 1 4.45 1 5Z" })));
};

var Icon$h = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M2 20H12C12.55 20 13 19.55 13 19C13 18.45 12.55 18 12 18H2C1.45 18 1 18.45 1 19C1 19.55 1.45 20 2 20ZM2 13H22C22.55 13 23 12.55 23 12C23 11.45 22.55 11 22 11H2C1.45 11 1 11.45 1 12C1 12.55 1.45 13 2 13ZM5 5C5 5.55 5.45 6 6 6H22C22.55 6 23 5.55 23 5C23 4.45 22.55 4 22 4H6C5.45 4 5 4.45 5 5Z" })));
};

var Icon$g = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 94 28" }, props),
        React__default["default"].createElement("path", { d: "M18.7131 3.9968L11.3953 1.75L4.08604 3.9968C3.96765 4.03737 3.86999 4.12401 3.81453 4.23787C3.75895 4.3516 3.75012 4.48318 3.78999 4.60366C3.82975 4.72413 3.91501 4.82351 4.02678 4.88006C4.13868 4.93649 4.26799 4.94548 4.38638 4.90503L11.4164 2.75286L18.4677 4.90503C18.5813 4.92425 18.6977 4.89991 18.7948 4.83686C18.8917 4.77382 18.9622 4.67632 18.9928 4.56346C19.0232 4.45048 19.0116 4.33013 18.9599 4.22538C18.9083 4.12077 18.8203 4.03937 18.7131 3.9968Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M21.8142 5.05685C21.8857 5.12876 21.933 5.22177 21.9496 5.32264C22.3443 8.04996 22.2107 10.8297 21.5562 13.5048C20.5156 17.71 17.8804 22.5953 11.6328 25.6986L11.4256 25.7976L11.2226 25.6986C4.96656 22.5953 2.33974 17.71 1.29919 13.5006C0.636278 10.8286 0.492597 8.05058 0.876195 5.32264C0.893948 5.21752 0.94484 5.12127 1.02115 5.04824C1.09746 4.9752 1.19506 4.92951 1.29919 4.91803C1.39404 4.91078 1.48891 4.93163 1.57227 4.97832C1.65562 5.02489 1.72387 5.09518 1.7687 5.18057L5.99862 13.5952H16.8229L21.0528 5.18057C21.0987 5.08956 21.1716 5.01565 21.2612 4.96921C21.3507 4.92277 21.4523 4.90629 21.5516 4.92202C21.6509 4.93775 21.7428 4.98494 21.8142 5.05685ZM1.61642 6.98405C1.49029 9.09677 1.67853 11.2168 2.17478 13.2724C2.71474 15.5599 3.71588 17.7082 5.11465 19.5812C6.51342 21.4542 8.27927 23.0113 10.3004 24.1534L5.30494 14.3011L1.61642 6.98405ZM6.48078 14.5636L11.3959 24.2438L16.3534 14.5636H6.48078ZM17.6793 19.5747C19.0784 17.7034 20.0816 15.5576 20.6256 13.2724C21.1301 11.2124 21.3214 9.08578 21.1925 6.96682L17.5081 14.2839L12.4957 24.1448C14.5152 23.0019 16.28 21.4458 17.6793 19.5747Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M29.3197 23.1327C29.4426 23.2609 29.5898 23.3622 29.7523 23.4305C29.9147 23.4987 30.0891 23.5325 30.2647 23.5296H36.9062V22.6101H30.2647C30.2075 22.6122 30.1504 22.6022 30.0971 22.5809C30.0438 22.5595 29.9954 22.527 29.9549 22.4856C29.9144 22.4442 29.8827 22.3947 29.8617 22.3402C29.8408 22.2858 29.8311 22.2275 29.8332 22.1689V16.7172C29.8323 16.6603 29.8426 16.6037 29.8638 16.551C29.885 16.4983 29.9164 16.4505 29.9562 16.4106C29.9965 16.368 30.0447 16.3342 30.0981 16.3111C30.1515 16.288 30.209 16.2761 30.2669 16.2761H36.9062V15.3543H30.2647C30.0895 15.3534 29.9159 15.388 29.754 15.456C29.5919 15.5241 29.4447 15.6242 29.3207 15.7507C29.1967 15.8772 29.0985 16.0276 29.0317 16.1931C28.9648 16.3586 28.9307 16.536 28.9313 16.715V22.1689C28.9288 22.3481 28.9619 22.5259 29.0287 22.6915C29.0954 22.8572 29.1945 23.0073 29.3197 23.1327ZM42.0503 15.3565V23.5296H49.3499V22.6101H42.9522V19.9084H48.0919V18.9777H42.9522V16.2761H49.3499V15.3543L42.0503 15.3565ZM54.4853 23.5296V15.3697H61.1505C61.5033 15.3726 61.8408 15.5171 62.0903 15.7721C62.3397 16.0271 62.4811 16.3721 62.4839 16.7327V19.1255C62.4856 19.3049 62.4521 19.4827 62.3854 19.6487C62.3187 19.8145 62.2202 19.9651 62.0956 20.0915C61.9726 20.2197 61.8254 20.321 61.663 20.3893C61.5005 20.4575 61.3261 20.4913 61.1505 20.4884H59.9292L62.4386 23.5142H61.2498L58.7533 20.4884L55.3872 20.4752V23.5296H54.4853ZM55.8187 19.56H61.1505C61.2062 19.5606 61.2614 19.5497 61.3129 19.5282C61.3644 19.5065 61.4112 19.4746 61.4504 19.4343C61.4903 19.3945 61.5218 19.3468 61.543 19.294C61.5641 19.2413 61.5745 19.1847 61.5734 19.1277V16.7304C61.5745 16.6735 61.5641 16.6169 61.543 16.5642C61.5218 16.5114 61.4903 16.4637 61.4504 16.4239C61.4131 16.3803 61.3669 16.3455 61.3151 16.3219C61.2634 16.2983 61.2072 16.2865 61.1505 16.2872H55.8187C55.7606 16.2874 55.7031 16.2996 55.6497 16.3231C55.5963 16.3466 55.5482 16.3809 55.508 16.4239C55.4688 16.4641 55.4379 16.512 55.4172 16.5646C55.3964 16.6173 55.3862 16.6737 55.3872 16.7304V19.1255C55.3862 19.1823 55.3964 19.2386 55.4172 19.2913C55.4379 19.344 55.4688 19.3919 55.508 19.432C55.5925 19.5123 55.7034 19.5572 55.8187 19.5578V19.56ZM70.7801 16.2761V23.5296H71.6826V16.2761H75.2274V15.3543H67.2291V16.274L70.7801 16.2761ZM79.9745 15.3543H80.8851V23.5275H79.9745V15.3543ZM86.3701 15.3543V23.5275H87.2807V19.9084H89.8567L92.8345 23.5296H93.9998L90.649 19.4431L93.9998 15.3675H92.8451L89.8679 18.9888H87.2825V15.3543H86.3701Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M33.4977 9.83024L31.5293 5.13482H30.9474L28.9756 9.83024H29.6192L30.0607 8.76686H32.4125L32.8541 9.83024H33.4977ZM31.2144 5.99449L31.2349 5.91508H31.2418L31.2589 5.99449L32.1968 8.24898H30.2764L31.2144 5.99449Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M37.077 9.92691C38.2032 9.92691 39.0043 9.14318 39.0043 8.01076V5.13136H38.3984V7.97278C38.3984 8.73924 37.9054 9.36069 37.077 9.36069C36.228 9.36069 35.7522 8.72888 35.7522 7.96588V5.13136H35.1497V8.01076C35.1497 9.17426 35.9918 9.92691 37.077 9.92691Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M43.2956 9.83024C44.7642 9.83024 45.7398 8.89115 45.7398 7.47907C45.7398 6.0739 44.7573 5.13482 43.2853 5.13482H41.584V9.83024H43.2956ZM42.1796 5.68031H43.2682C44.4253 5.68031 45.127 6.40189 45.127 7.49288C45.127 8.58043 44.4219 9.27783 43.2819 9.27783H42.1796V5.68031Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M48.6653 9.83024V5.13482H48.0594V9.83024H48.6653Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M52.9498 9.83024V5.68377H54.4252V5.13482H50.8719V5.68377H52.3439V9.83024H52.9498Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M59.7606 9.83024V9.27783H57.2411V7.70349H59.4046V7.1787H57.2411V5.69067H59.7298V5.13482H56.6352V9.83024H59.7606Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M63.7542 9.83024C65.2227 9.83024 66.1983 8.89115 66.1983 7.47907C66.1983 6.0739 65.2159 5.13482 63.7439 5.13482H62.0426V9.83024H63.7542ZM62.6382 5.68031H63.7268C64.8838 5.68031 65.5856 6.40189 65.5856 7.49288C65.5856 8.58043 64.8804 9.27783 63.7405 9.27783H62.6382V5.68031Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M73.8362 9.83024C74.562 9.83024 75.2398 9.35379 75.2398 8.50447C75.2398 7.95552 74.8461 7.49288 74.3532 7.34788C74.6989 7.19597 74.9693 6.80238 74.9693 6.37082C74.9693 5.63543 74.4148 5.13482 73.6411 5.13482H71.6522V9.83024H73.8362ZM72.265 5.6665H73.6172C74.0279 5.6665 74.3566 5.99794 74.3566 6.4157C74.3566 6.84036 74.0279 7.1718 73.6137 7.1718H72.265V5.6665ZM72.265 7.64479H73.7952C74.2573 7.64479 74.6167 8.01076 74.6167 8.45959C74.6167 8.93603 74.2539 9.29164 73.7883 9.29164H72.265V7.64479Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M79.2846 9.83024L79.2812 8.02802L81.164 5.13482H80.4451L78.9834 7.48253H78.98L77.5114 5.13482H76.796L78.6787 8.03148V9.83024H79.2846Z", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M86.5637 4.41668C87.9827 3.97476 89.5106 3.38553 90.0563 2.75948C90.6021 3.38553 92.1301 3.97476 93.5491 4.41668C93.6582 6.03706 93.1124 9.60926 90.0563 10.935C87.0003 9.60926 86.4546 6.03706 86.5637 4.41668ZM89.3928 7.46318L91.5398 5.29776C91.6822 5.15414 91.9159 5.15414 92.0583 5.29776C92.2007 5.44139 92.2007 5.6734 92.0583 5.81702L89.652 8.24391C89.5096 8.38753 89.2796 8.38753 89.1372 8.24391L88.1914 7.29009C88.049 7.14647 88.049 6.91446 88.1914 6.77084C88.3338 6.62721 88.5639 6.62721 88.7063 6.77084L89.3928 7.46318Z", fill: "#1DC872" })));
};

var Icon$f = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 0L5.55306 3.6761L7.92329 5.03416L12 2.7161L16.0767 5.03416L18.447 3.6761L12 0ZM16.0767 6.95417L18.447 8.31221V11.0283L14.3702 13.3463L14.3702 17.9825L12 19.3406L9.62982 17.9825L9.62982 13.3463L5.55306 11.0283V8.31221L7.92329 6.95417L12 9.27218L16.0767 6.95417ZM18.447 12.9483V15.6644L16.0767 17.0225V14.3063L18.447 12.9483ZM16.053 18.9424L20.1299 16.6244V11.9883L22.5 10.6303V17.9825L16.053 21.6585V18.9424ZM20.1299 7.3522L17.7596 5.99417L20.1299 4.6361L22.5 5.99417V8.71027L20.1299 10.0683V7.3522ZM9.62982 22.642V19.9259L12 21.2839L14.3702 19.9259V22.642L12 24L9.62982 22.642ZM7.92329 17.0225L5.55306 15.6644V12.9483L7.92329 14.3063V17.0225ZM12 7.3522L9.62982 5.99417L12 4.6361L14.3702 5.99417L12 7.3522ZM6.24042 5.99417L3.8702 7.3522V10.0683L1.5 8.71027L1.5 5.99417L3.8702 4.6361L6.24042 5.99417ZM1.5 10.6303L3.8702 11.9883L3.8702 16.6244L7.94695 18.9424V21.6585L1.5 17.9825L1.5 10.6303Z" })));
};

var Icon$e = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { d: "M0 12.0057L0 5.8403C0 5.41523 0.227073 5.02171 0.597324 4.80513L5.96072 1.66786C6.34124 1.44527 6.81401 1.44397 7.19579 1.66446L12.6357 4.80618C13.0093 5.02192 13.2389 5.41728 13.2389 5.84475V8.06681L10.8636 9.40682V7.30474C10.8636 6.88322 10.6403 6.49245 10.2749 6.27469L7.19233 4.43725C6.81283 4.21104 6.33888 4.20639 5.9549 4.4251L3.01492 6.09972C2.6378 6.31453 2.40543 6.71187 2.40543 7.14192V10.6338C2.40543 11.0551 2.62852 11.4457 2.99357 11.6636L5.95654 13.4316C6.339 13.6599 6.81728 13.6629 7.20263 13.4394L16.7802 7.88594C17.1586 7.66648 17.6274 7.66517 18.0071 7.88251L23.3927 10.965C23.7686 11.1802 24 11.5768 24 12.006V18.2288C24 18.6589 23.7676 19.0562 23.3905 19.271L18.0046 22.3391C17.6261 22.5547 17.1598 22.5535 16.7825 22.336L11.4676 19.272C11.0936 19.0564 10.8636 18.6608 10.8636 18.233L10.8636 16.0175L13.2389 14.6418V16.8496C13.2389 17.2751 13.4664 17.669 13.8373 17.8854L16.7781 19.6015C17.1576 19.823 17.6286 19.8246 18.0096 19.6057L21.007 17.8841C21.382 17.6687 21.6127 17.2726 21.6127 16.8441V13.3907C21.6127 12.9631 21.3829 12.5677 21.0092 12.3519L18.0043 10.6175C17.6262 10.3992 17.1585 10.3983 16.7796 10.6151L7.18666 16.1036C6.80964 16.3193 6.34468 16.3196 5.96737 16.1044L0.608812 13.0476C0.232073 12.8326 0 12.4355 0 12.0057Z" })));
};

var Icon$d = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 12C24 18.6274 18.6274 24 12 24C5.37259 24 0 18.6274 0 12C0 5.37259 5.37259 0 12 0C18.6274 0 24 5.37259 24 12ZM8.59957 16.7751H6.27071C5.78137 16.7751 5.53962 16.7751 5.39221 16.6808C5.23304 16.5776 5.13574 16.4067 5.12394 16.218C5.11512 16.0441 5.23597 15.8318 5.47771 15.4073L11.228 5.27169C11.4726 4.84129 11.5965 4.6261 11.7527 4.5465C11.9207 4.46103 12.1212 4.46103 12.2892 4.5465C12.4455 4.6261 12.5693 4.84129 12.814 5.27169L13.9961 7.33525L14.0021 7.34578C14.2664 7.80753 14.4004 8.04167 14.4589 8.28742C14.5237 8.55568 14.5237 8.83868 14.4589 9.10694C14.4 9.35458 14.2673 9.59043 13.999 10.0592L10.9786 15.3985L10.9707 15.4122C10.7047 15.8777 10.5699 16.1136 10.3831 16.2917C10.1797 16.4863 9.935 16.6277 9.66673 16.7073C9.42206 16.7751 9.14789 16.7751 8.59957 16.7751ZM14.4807 16.7754H17.8178C18.3101 16.7754 18.5577 16.7754 18.7051 16.6781C18.8643 16.5749 18.9645 16.401 18.9734 16.2124C18.9819 16.0442 18.8637 15.8401 18.6319 15.4403C18.624 15.4267 18.616 15.4128 18.6078 15.3987L16.9364 12.5392L16.9173 12.5071C16.6824 12.1098 16.5638 11.9093 16.4116 11.8317C16.2436 11.7462 16.0461 11.7462 15.8781 11.8317C15.7247 11.9113 15.6009 12.1206 15.3563 12.5422L13.6907 15.4017L13.685 15.4115C13.4411 15.8324 13.3193 16.0427 13.3281 16.2153C13.3399 16.404 13.4371 16.5779 13.5964 16.6811C13.7408 16.7754 13.9884 16.7754 14.4807 16.7754Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    AddIcon: Icon$1Y,
    ArrowBackIcon: Icon$1X,
    ArrowDownIcon: Icon$1W,
    ArrowDropDownIcon: Icon$1V,
    ArrowDropUpIcon: Icon$1U,
    ArrowForwardIcon: Icon$1T,
    ArrowUpIcon: Icon$1S,
    ArrowUpForwardIcon: Icon$1R,
    AutoRenewIcon: Icon$1Q,
    BinanceIcon: Icon$1P,
    BlockIcon: Icon$1_,
    BunnyPlaceholderIcon: Icon$1O,
    CardViewIcon: Icon$1N,
    CalculateIcon: Icon$1M,
    CheckmarkIcon: Icon$1L,
    CheckmarkCircleIcon: Icon$20,
    ChevronDownIcon: Icon$1K,
    ChevronLeftIcon: Icon$1J,
    ChevronRightIcon: Icon$1I,
    ChevronRightEndIcon: Icon$1H,
    ChevronUpIcon: Icon$1G,
    CloseIcon: Icon$1F,
    CogIcon: Icon$1E,
    CommunityIcon: Icon$1D,
    CopyIcon: Icon$1C,
    ErrorIcon: Icon$1$,
    HelpIcon: Icon$1B,
    InfoIcon: Icon$1Z,
    ListViewIcon: Icon$1A,
    TileViewIcon: Icon$1z,
    LogoIcon: Icon$1y,
    LogoRoundIcon: Icon$1x,
    LoaderIcon: Icon$1w,
    MetamaskIcon: Icon$1v,
    MinusIcon: Icon$1u,
    PlusIcon: Icon$1t,
    NoProfileAvatarIcon: Icon$1s,
    OpenNewIcon: Icon$1r,
    PancakesIcon: Icon$1q,
    PancakeRoundIcon: Icon$1p,
    PlayCircleOutlineIcon: Icon$1o,
    PrizeIcon: Icon$1n,
    RemoveIcon: Icon$1m,
    VerifiedIcon: Icon$1l,
    ProgressBunny: Icon$1k,
    WaitIcon: Icon$1j,
    Won: Icon$1i,
    Ticket: Icon$1h,
    TicketRound: Icon$1g,
    TimerIcon: Icon$1f,
    SearchIcon: Icon$1e,
    SwapVertIcon: Icon$1d,
    SyncAltIcon: Icon$1c,
    WarningIcon: Icon$1b,
    DownloadIcon: Icon$1a,
    LinkIcon: Icon$19,
    RocketIcon: Icon$18,
    FlagIcon: Icon$17,
    WalletIcon: Icon$16,
    WaitReloadIcon: Icon$15,
    MouseIcon: Icon$14,
    RatingIcon: Icon$13,
    CupIcon: Icon$12,
    AutoCompaundIcon: Icon$11,
    FireIcon: Icon$10,
    HourglassIcon: Icon$$,
    GasIcon: Icon$_,
    TradeIcon: Icon$Z,
    StarIcon: Icon$Y,
    LevelIcon: Icon$X,
    RobiBoostIcon: Icon$W,
    MarketplaceIcon: Icon$V,
    FavoriteFullIcon: Icon$U,
    FavoriteEmptyIcon: Icon$T,
    ShareIcon: Icon$S,
    ViewIcon: Icon$R,
    SettingsIcon: Icon$Q,
    MarketBagIcon: Icon$P,
    IdoIcon: Icon$O,
    SquidIcon: Icon$N,
    SquidV2Icon: Icon$M,
    PlayersIcon: Icon$L,
    SquidEnergyIcon: Icon$K,
    VoteIcon: Icon$J,
    EditIcon: Icon$I,
    AddFilledIcon: Icon$H,
    HolderAutoIcon: Icon$G,
    BscNewIcon: Icon$F,
    LogoWithTextIcon: Icon$E,
    ImgWarnIcon: Icon$D,
    YoutubeIcon: Icon$C,
    InstagramIcon: Icon$B,
    TwitchIcon: Icon$A,
    TelegramIcon: Icon$z,
    TwitterIcon: Icon$y,
    MediumIcon: Icon$x,
    SwapIcon: Icon$w,
    ExpertTradeIcon: Icon$v,
    LiquidityIcon: Icon$u,
    FarmsIcon: Icon$t,
    LaunchIcon: Icon$s,
    ReferralIcon: Icon$r,
    IdoMenuIcon: Icon$q,
    LotteryIcon: Icon$p,
    CompetitionsIcon: Icon$o,
    NftLaunchIcon: Icon$n,
    NftEarnIcon: Icon$m,
    MarketMenuIcon: Icon$l,
    GameFiIcon: Icon$k,
    ProductsIcon: Icon$j,
    ButtonMenuIcon: Icon$i,
    ButtonMenuOpenedIcon: Icon$h,
    CerticAuditedIcon: Icon$g,
    BSCIcon: Icon$f,
    PolygonIcon: Icon$e,
    AvalancheIcon: Icon$d,
    Svg: Svg
});

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default["default"].createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? (React__default["default"].createElement(Icon$1G, { color: "invertedContrast" })) : (React__default["default"].createElement(Icon$1K, { color: "invertedContrast" }))));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React__default["default"].createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? (React__default["default"].createElement(Icon$1G, { color: "primary" })) : (React__default["default"].createElement(Icon$1K, { color: "primary" })) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled__default["default"].div(templateObject_1$1c || (templateObject_1$1c = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), styledSystem.background, styledSystem.border, styledSystem.layout, styledSystem.position, styledSystem.space);
var templateObject_1$1c;

var Flex = styled__default["default"](Box)(templateObject_1$1b || (templateObject_1$1b = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), styledSystem.flexbox);
var templateObject_1$1b;

var variants$4 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$4.INFO : _b;
    switch (variant) {
        case variants$4.DANGER:
            return theme.colors.failure;
        case variants$4.WARNING:
            return theme.colors.warning;
        case variants$4.SUCCESS:
            return theme.colors.success;
        case variants$4.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$4.INFO; }
    switch (variant) {
        case variants$4.DANGER:
            return Icon$1_;
        case variants$4.WARNING:
            return Icon$1$;
        case variants$4.SUCCESS:
            return Icon$20;
        case variants$4.INFO:
        default:
            return Icon$1Z;
    }
};
var IconLabel = styled__default["default"].div(templateObject_1$1a || (templateObject_1$1a = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default["default"].div(templateObject_2$H || (templateObject_2$H = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return hasHandler ? "".concat(withHandlerSpacing, "px") : "12px";
});
var CloseHandler = styled__default["default"].div(templateObject_3$o || (templateObject_3$o = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default["default"](Flex)(templateObject_4$i || (templateObject_4$i = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default["default"].createElement(StyledAlert, null,
        React__default["default"].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default["default"].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default["default"].createElement(Details, { hasHandler: !!onClick },
            React__default["default"].createElement(Text, { bold: true }, title),
            typeof children === "string" ? (React__default["default"].createElement(Text, { as: "p" }, children)) : (children)),
        onClick && (React__default["default"].createElement(CloseHandler, null,
            React__default["default"].createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React__default["default"].createElement(Icon$1F, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$1a, templateObject_2$H, templateObject_3$o, templateObject_4$i;

var Grid = styled__default["default"](Box)(templateObject_1$19 || (templateObject_1$19 = __makeTemplateObject(["\n  display: grid;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.grid);
var templateObject_1$19;

var scales$7 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};
var variants$3 = {
    LIGHT: "light",
    DARK: "dark",
};

var _a$6, _b$4;
var scaleVariants$1 = (_a$6 = {},
    _a$6[scales$7.LG] = {
        borderRadius: "10px",
        height: "48px",
        fontSize: "16px",
        padding: "0 24px",
    },
    _a$6[scales$7.MD] = {
        borderRadius: "8px",
        height: "40px",
        fontSize: "14px",
        padding: "0 16px",
    },
    _a$6[scales$7.SM] = {
        borderRadius: "8px",
        height: "32px",
        fontSize: "12px",
        padding: "0 12px",
    },
    _a$6);
var styleVariants$2 = (_b$4 = {},
    _b$4[variants$3.LIGHT] = {
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
        ":disabled": {
            backgroundColor: "gray200",
            color: "gray600",
            cursor: "not-allowed",
        }
    },
    _b$4[variants$3.DARK] = {
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
        ":disabled": {
            backgroundColor: "dark600",
            color: "dark200",
            cursor: "not-allowed",
        }
    },
    _b$4);

// interface StyledInputProps extends InputProps {
//   tabindex?: string
// }
// const getHeight = ({ scale = scales.MD }: StyledInputProps) => {
//   switch (scale) {
//     case scales.LG:
//       return "48px";
//     case scales.SM:
//       return "32px";
//     case scales.MD:
//     default:
//       return "40px";
//   }
// };
var Input$1 = styled__default["default"].input(templateObject_1$18 || (templateObject_1$18 = __makeTemplateObject(["\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  outline: 0;\n  width: 100%;\n  border: 1px solid transparent;\n  transition: border-color .4s ease, background-color .4s ease, color .4s ease;\n  \n  ", "\n  ", "\n"], ["\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  outline: 0;\n  width: 100%;\n  border: 1px solid transparent;\n  transition: border-color .4s ease, background-color .4s ease, color .4s ease;\n  \n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), styledSystem.variant({
    prop: "variant",
    variants: styleVariants$2,
}));
Input$1.defaultProps = {
    scale: scales$7.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$18;

var SwitchUnitsButton = styled__default["default"](IconButton)(templateObject_1$17 || (templateObject_1$17 = __makeTemplateObject(["\n  width: 16px;\n"], ["\n  width: 16px;\n"])));
var UnitContainer = styled__default["default"](Text)(templateObject_2$G || (templateObject_2$G = __makeTemplateObject(["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"], ["\n  margin-left: 4px;\n  text-align: right;\n  color: ", ";\n  white-space: nowrap;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var StyledBalanceInput = styled__default["default"](Box)(templateObject_3$n || (templateObject_3$n = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled__default["default"](Input$1)(templateObject_4$h || (templateObject_4$h = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: ", ";\n  border: none;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var _b = _a.textAlign, textAlign = _b === void 0 ? "right" : _b;
    return textAlign;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$17, templateObject_2$G, templateObject_3$n, templateObject_4$h;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, innerRef = _a.innerRef, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, unit = _a.unit, switchEditingUnits = _a.switchEditingUnits, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "innerRef", "isWarning", "decimals", "unit", "switchEditingUnits"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React__default["default"].createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React__default["default"].createElement(Flex, { justifyContent: "flex-end" },
            React__default["default"].createElement(Box, null,
                React__default["default"].createElement(Flex, { alignItems: "center" },
                    React__default["default"].createElement(StyledInput$1, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0,".concat(decimals, "}$"), inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder, ref: innerRef }, inputProps)),
                    unit && React__default["default"].createElement(UnitContainer, null, unit)),
                currencyValue && (React__default["default"].createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))),
            switchEditingUnits && (React__default["default"].createElement(Flex, { alignItems: "center", pl: "12px" },
                React__default["default"].createElement(SwitchUnitsButton, { scale: "sm", variant: "text", onClick: switchEditingUnits },
                    React__default["default"].createElement(Icon$1d, { color: "textSubtle" })))))));
};

var Textfield = function (_a) {
    var label = _a.label, value = _a.value, placeholder = _a.placeholder, onUserInput = _a.onUserInput, inputProps = _a.inputProps, _b = _a.isWarning, isWarning = _b === void 0 ? false : _b;
    var handleOnChange = function (e) {
        onUserInput(e.target.value);
    };
    return (React__default["default"].createElement(StyledBalanceInput, { isWarning: isWarning },
        React__default["default"].createElement(Text, { fontSize: "14px" }, label),
        React__default["default"].createElement(StyledInput$1, __assign({ value: value, onChange: handleOnChange, placeholder: placeholder, textAlign: "left" }, inputProps))));
};

var Separator = styled__default["default"].div(templateObject_1$16 || (templateObject_1$16 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default["default"].ul(templateObject_2$F || (templateObject_2$F = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  a {\n    color: ", ";\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.primaryBright;
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
var DefaultSeparator = React__default["default"].createElement(Icon$1I, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
    var items = insertSeparators(validItems, separator);
    return (React__default["default"].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default["default"].createElement("li", { key: "child-".concat(index) }, item)); })));
};
var templateObject_1$16, templateObject_2$F;

var getRgba = function (hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16);
    var g = parseInt(hex.slice(3, 5), 16);
    var b = parseInt(hex.slice(5, 7), 16);
    if (alpha) {
        // return `rgba(${r}, ${g}, ${b}, ${alpha}`;
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    }
    else {
        // return `rgb(${r}, ${g}, ${b}`;
        return "rgba(" + r + ", " + g + ", " + b + ")";
    }
};

var getBackgroundColor$1 = function (_a) {
    var theme = _a.theme, variant = _a.variant, withoutBackground = _a.withoutBackground;
    if (withoutBackground)
        return "transparent";
    return variant === variants$5.SELECT ? theme.colors.tooltip : getRgba(theme.colors.pastelBlue, 0.08);
};
var getFlat = function (_a) {
    var flatBottom = _a.flatBottom, flatTop = _a.flatTop;
    if (flatBottom)
        return "8px 8px 0 0";
    if (flatTop)
        return "0 0 8px 8px";
};
var StyledButtonMenu = styled__default["default"].div(templateObject_1$15 || (templateObject_1$15 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  display: ", ";\n  width: ", ";\n  padding: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  display: ", ";\n  width: ", ";\n  padding: ", ";\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n\n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"])), getBackgroundColor$1, getFlat || "8px", function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var flatBottom = _a.flatBottom, flatTop = _a.flatTop;
    return (flatBottom || flatTop ? "0" : "4px");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, variant = _a.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: ".concat(variant === variants$5.SELECT
            ? theme.colors.pastelBlue
            : theme.colors.text, ";\n        }\n    ");
    }
    return "";
}, styledSystem.space);
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$8.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$5.SELECT : _d, onItemClick = _a.onItemClick, disabled = _a.disabled, children = _a.children, _e = _a.fullWidth, fullWidth = _e === void 0 ? false : _e, _f = _a.flatBottom, flatBottom = _f === void 0 ? false : _f, _g = _a.flatTop, flatTop = _g === void 0 ? false : _g, _h = _a.withoutBackground, withoutBackground = _h === void 0 ? false : _h, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "disabled", "children", "fullWidth", "flatBottom", "flatTop", "withoutBackground"]);
    return (React__default["default"].createElement(StyledButtonMenu, __assign({ disabled: disabled, variant: variant, fullWidth: fullWidth, flatBottom: flatBottom, flatTop: flatTop, withoutBackground: withoutBackground }, props), React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
            disabled: disabled,
            flatBottom: flatBottom,
            flatTop: flatTop,
        });
    })));
};
var templateObject_1$15;

var InactiveButton$1 = styled__default["default"](Button)(templateObject_1$14 || (templateObject_1$14 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  transition: color .3s ease;\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  transition: color .3s ease;\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$5.SELECT : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return (React__default["default"].createElement(InactiveButton$1, __assign({ forwardedAs: as, variant: variant, colorKey: variant === variants$5.SELECT ? "pastelBlue" : "text" }, props)));
    }
    return React__default["default"].createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$14;

var useOnClickOutside = function (ref, handler) {
    React.useEffect(function () {
        var listener = function (event) {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
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

/**
 * Use this hook when you want to animate something when it appears on the screen (e.g. when some prop set to true)
 * but when its not on the screen you want it to be fully unmounted and not just hidden or height 0.
 * This is especially useful when you have a table of 100s rows and each row has expandable element that appears on click.
 * If you just set the expanding animation while keeping inactive elements mounted all those 100 elements will load the DOM,
 * and if they all receive updates via props you're looking at 100 DOM updates for hidden elements.
 * This hook "shows" element immediately when the isMounted is true
 * but keeps element mounted for delayTime to let unmounting animation happen, after which you unmount element completely.
 * delayTime should be the same as animation time in most cases.
 */
var useDelayedUnmount = function (isMounted, delayTime) {
    var _a = React.useState(false), shouldRender = _a[0], setShouldRender = _a[1];
    React.useEffect(function () {
        var timeoutId;
        if (isMounted && !shouldRender) {
            setShouldRender(true);
        }
        else if (!isMounted && shouldRender) {
            timeoutId = setTimeout(function () { return setShouldRender(false); }, delayTime);
        }
        return function () { return clearTimeout(timeoutId); };
    }, [isMounted, delayTime, shouldRender]);
    return shouldRender;
};

var MountAnimation = styled.keyframes(templateObject_1$13 || (templateObject_1$13 = __makeTemplateObject(["\n    0% {\n      bottom: -80vh;\n    }\n    100% {\n      bottom: 0vh;\n    }\n  "], ["\n    0% {\n      bottom: -80vh;\n    }\n    100% {\n      bottom: 0vh;\n    }\n  "])));
var UnmountAnimation = styled.keyframes(templateObject_2$E || (templateObject_2$E = __makeTemplateObject(["\n    0% {\n      bottom: 0vh;\n    }\n    100% {\n      bottom: -80vh;\n    }\n  "], ["\n    0% {\n      bottom: 0vh;\n    }\n    100% {\n      bottom: -80vh;\n    }\n  "])));
var DrawerContainer = styled__default["default"].div(templateObject_4$g || (templateObject_4$g = __makeTemplateObject(["\n  width: 100%;\n  height: 80vh;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: fixed;\n  animation: ", " 350ms ease forwards;\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  z-index: 21;\n  ", "\n"], ["\n  width: 100%;\n  height: 80vh;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-top-right-radius: 32px;\n  position: fixed;\n  animation: ", " 350ms ease forwards;\n  padding-bottom: env(safe-area-inset-bottom);\n  html[data-useragent*=\"TokenPocket_iOS\"] & {\n    padding-bottom: 45px;\n  }\n  z-index: 21;\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, MountAnimation, function (_a) {
    var isUnmounting = _a.isUnmounting;
    return isUnmounting && styled.css(templateObject_3$m || (templateObject_3$m = __makeTemplateObject(["\n      animation: ", " 350ms ease forwards;\n    "], ["\n      animation: ", " 350ms ease forwards;\n    "])), UnmountAnimation);
});
var templateObject_1$13, templateObject_2$E, templateObject_3$m, templateObject_4$g;

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
    var s = Object.keys(mediaQueries).reduce(function (accum, size) {
        var _a, _b;
        var _c;
        var key = getKey(size);
        if (typeof window === "undefined") {
            return __assign(__assign({}, accum), (_a = {}, _a[key] = false, _a));
        }
        var mql = window.matchMedia(mediaQueries[size]);
        return __assign(__assign({}, accum), (_b = {}, _b[key] = (_c = mql === null || mql === void 0 ? void 0 : mql.matches) !== null && _c !== void 0 ? _c : false, _b));
    }, {});
    return s;
};
var useMatchBreakpoints = function () {
    var _a = React.useState(function () { return getState(); }), state = _a[0], setState = _a[1];
    useIsomorphicEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        setState(getState());
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, []);
    return __assign(__assign({}, state), { isMobile: state.isXs || state.isSm, isTablet: state.isMd || state.isLg, isDesktop: state.isXl || state.isXxl });
};

var StyledOverlay = styled__default["default"](Box)(templateObject_1$12 || (templateObject_1$12 = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  z-index: 20;\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  z-index: 20;\n"])), function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.text, "99");
});
var BodyLock = function () {
    React.useEffect(function () {
        document.body.style.cssText = "\n      overflow: hidden;\n    ";
        document.body.style.overflow = "hidden";
        return function () {
            document.body.style.cssText = "\n        overflow: visible;\n        overflow: overlay;\n      ";
        };
    }, []);
    return null;
};
var Overlay = function (props) {
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(BodyLock, null),
        React__default["default"].createElement(StyledOverlay, __assign({ role: "presentation" }, props))));
};
var templateObject_1$12;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var getPortalRoot = function () {
    var _a;
    return typeof window !== "undefined" &&
        ((_a = document.getElementById("portal-root")) !== null && _a !== void 0 ? _a : document.body);
};

var BottomDrawer = function (_a) {
    var content = _a.content, isOpen = _a.isOpen, setIsOpen = _a.setIsOpen;
    var ref = React.useRef(null);
    var shouldRender = useDelayedUnmount(isOpen, 350);
    var isMobile = useMatchBreakpoints().isMobile;
    useOnClickOutside(ref, function () { return setIsOpen(false); });
    if (!shouldRender || !isMobile) {
        return null;
    }
    var portal = getPortalRoot();
    return (React__default["default"].createElement(React__default["default"].Fragment, null, portal
        ? reactDom.createPortal(React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(Overlay, null),
            React__default["default"].createElement(DrawerContainer, { ref: ref, isUnmounting: !isOpen },
                React__default["default"].createElement(Box, { position: "absolute", right: "16px", top: "0" },
                    React__default["default"].createElement(IconButton, { variant: "text", onClick: function () { return setIsOpen(false); } },
                        React__default["default"].createElement(Icon$1F, null))),
                content)), portal)
        : null));
};

var PromotedGradient = styled.keyframes(templateObject_1$11 || (templateObject_1$11 = __makeTemplateObject(["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"], ["\n  0% {\n    background-position: 50% 0%;\n  }\n  50% {\n    background-position: 50% 100%;\n  }\n  100% {\n    background-position: 50% 0%;\n  }\n"])));
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
        return "linear-gradient(180deg, ".concat(theme.colors.primaryBright, ", ").concat(theme.colors.secondary, ")");
    }
    return theme.colors.cardBorder;
};
var StyledCard = styled__default["default"].div(templateObject_3$l || (templateObject_3$l = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n\n  padding: 1px 1px 3px 1px;\n\n  ", "\n"])), getBorderColor, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, function (_a) {
    var isActive = _a.isActive;
    return isActive && styled.css(templateObject_2$D || (templateObject_2$D = __makeTemplateObject(["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "], ["\n      animation: ", " 3s ease infinite;\n      background-size: 400% 400%;\n    "])), PromotedGradient);
}, styledSystem.space);
var StyledCardInner = styled__default["default"](Box)(templateObject_4$f || (templateObject_4$f = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"], ["\n  width: 100%;\n  height: 100%;\n  overflow: ", ";\n  background: ", ";\n  border-radius: ", ";\n"])), function (_a) {
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
var templateObject_1$11, templateObject_2$D, templateObject_3$l, templateObject_4$f;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, background = _a.background, props = __rest(_a, ["ribbon", "children", "background"]);
    return (React__default["default"].createElement(StyledCard, __assign({}, props),
        React__default["default"].createElement(StyledCardInner, { background: background, hasCustomBorder: !!props.borderBackground },
            ribbon,
            children)));
};

var CardBody = styled__default["default"].div(templateObject_1$10 || (templateObject_1$10 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$10;

var CardHeader = styled__default["default"].div(templateObject_1$$ || (templateObject_1$$ = __makeTemplateObject(["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"], ["\n  background: ", ";\n  border-radius: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.radii.card, " ").concat(theme.radii.card, " 0 0");
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$$;

var CardFooter = styled__default["default"].div(templateObject_1$_ || (templateObject_1$_ = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$_;

var StyledCardRibbon = styled__default["default"].div(templateObject_1$Z || (templateObject_1$Z = __makeTemplateObject(["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  z-index: 10;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition, props = __rest(_a, ["variantColor", "text", "ribbonPosition"]);
    return (React__default["default"].createElement(StyledCardRibbon, __assign({ variantColor: variantColor, ribbonPosition: ribbonPosition }, props),
        React__default["default"].createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$Z;

var scales$6 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$6.SM:
            return "16px";
        case scales$6.MD:
        default:
            return "20px";
    }
};
var Wrapper$d = styled__default["default"].label(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: ", ";\n"], ["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: ", ";\n"])), function (_a) {
    var labelOrientation = _a.labelOrientation;
    return labelOrientation === 'left' ? 'row-reverse' : 'row';
});
var CheckboxInput = styled__default["default"].input.attrs({ type: "checkbox" })(templateObject_2$C || (templateObject_2$C = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  border: 2px solid transparent;\n  border-radius: 4px;\n  background-color: ", ";\n  transition: background-color 0.4s ease-in-out, border-color 0.4s ease;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 25%;\n    left: 0;\n    right: 0;\n    width: 65%;\n    height: 37%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    \n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  border: 2px solid transparent;\n  border-radius: 4px;\n  background-color: ", ";\n  transition: background-color 0.4s ease-in-out, border-color 0.4s ease;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 25%;\n    left: 0;\n    right: 0;\n    width: 65%;\n    height: 37%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    \n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return getRgba(theme.colors.pastelBlue, 0.16);
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
    return colorVariant === 'dark' ? theme.colors.white :
        colorVariant === 'light' ? theme.colors.dark800 :
            theme.colors.gray900;
});
var StyledText$2 = styled__default["default"](Text)(templateObject_3$k || (templateObject_3$k = __makeTemplateObject(["\n  transition: color .4s ease-in-out;\n"], ["\n  transition: color .4s ease-in-out;\n"])));
var Checkbox = function (_a) {
    var labelOrientation = _a.labelOrientation, label = _a.label, scale = _a.scale, colorVariant = _a.colorVariant, id = _a.id, defaultChecked = _a.defaultChecked, onChange = _a.onChange;
    return (React__default["default"].createElement(Wrapper$d, { labelOrientation: labelOrientation },
        React__default["default"].createElement(CheckboxInput, { scale: scale, colorVariant: colorVariant, id: id, defaultChecked: defaultChecked, onChange: onChange }),
        label && labelOrientation &&
            React__default["default"].createElement(StyledText$2, { as: "span", fontSize: "12px", fontWeight: "400", color: "gray900", mr: labelOrientation === "left" ? '12px' : 0, ml: labelOrientation === "right" ? '12px' : 0 }, label)));
};
Checkbox.defaultProps = {
    scale: scales$6.MD,
    labelOrientation: "left",
    colorVariant: "light",
};
var templateObject_1$Y, templateObject_2$C, templateObject_3$k;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default["default"].div(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 400px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$1 = styled__default["default"].div(templateObject_2$B || (templateObject_2$B = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default["default"].createElement(Container$1, null,
        target,
        React__default["default"].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$X, templateObject_2$B;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$5 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$5;
var style = (_a$5 = {},
    _a$5[scales$5.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$5[scales$5.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$5[scales$5.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$5[scales$5.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$5);
var Heading = styled__default["default"](Text).attrs({ bold: true })(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$W;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var StyledWrapper = styled__default["default"].div(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"], ["\n  max-height: ", "px;\n  max-width: ", "px;\n  position: relative;\n  width: 100%;\n\n  &:after {\n    content: \"\";\n    display: block;\n    padding-top: ", "%;\n  }\n\n  ", "\n"])), function (_a) {
    var $height = _a.$height;
    return $height;
}, function (_a) {
    var $width = _a.$width;
    return $width;
}, function (_a) {
    var $width = _a.$width, $height = _a.$height;
    return ($height / $width) * 100;
}, styledSystem.space);
var Wrapper$c = React.forwardRef(function (_a, ref) {
    var width = _a.width, height = _a.height, props = __rest(_a, ["width", "height"]);
    return (React__default["default"].createElement(StyledWrapper, __assign({ ref: ref, "$width": width, "$height": height }, props)));
});
var templateObject_1$V;

var Placeholder = styled__default["default"].div(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
var templateObject_1$U;

var StyledBackgroundImage = styled__default["default"](Wrapper$c)(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  background-repeat: no-repeat;\n  background-size: contain;\n"], ["\n  background-repeat: no-repeat;\n  background-size: contain;\n"])));
var BackgroundImage = function (_a) {
    var loadingPlaceholder = _a.loadingPlaceholder, src = _a.src, width = _a.width, height = _a.height, props = __rest(_a, ["loadingPlaceholder", "src", "width", "height"]);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    var ref = React.useRef(null);
    var placeholder = loadingPlaceholder || React__default["default"].createElement(Placeholder, null);
    React.useEffect(function () {
        var observer;
        if (ref.current) {
            var div_1 = ref.current;
            observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    var isIntersecting = entry.isIntersecting;
                    if (isIntersecting) {
                        if (src) {
                            // Load the image via an image element so we can show a placeholder until the image is downloaded
                            var img = document.createElement("img");
                            img.onload = function () {
                                div_1.style.backgroundImage = "url(\"".concat(src, "\")");
                                setIsLoaded(true);
                            };
                            img.src = src;
                        }
                        observer.disconnect();
                    }
                });
            }, observerOptions);
            observer.observe(div_1);
        }
        return function () {
            if (observer) {
                observer.disconnect();
            }
        };
    }, [src, setIsLoaded]);
    return (React__default["default"].createElement(StyledBackgroundImage, __assign({ ref: ref, width: width, height: height }, props), !isLoaded && placeholder));
};
var templateObject_1$T;

var StyledImage = styled__default["default"].img(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"], ["\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n"])));
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
    return (React__default["default"].createElement(Wrapper$c, __assign({ ref: imgRef, height: height, width: width }, props), isLoaded ? React__default["default"].createElement(StyledImage, { src: src, alt: alt }) : React__default["default"].createElement(Placeholder, null)));
};
var templateObject_1$S;

var TokenImage = styled__default["default"](Image)(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"], ["\n  &:before {\n    border-radius: 50%;\n    border: 1px solid rgba(0, 0, 0, 0.25);\n    content: \"\";\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 7;\n  }\n"])));
var templateObject_1$R;

var variants$2 = {
    DEFAULT: "default",
    INVERTED: "inverted",
};

var _a$4, _b$3;
var StyledPrimaryImage = styled__default["default"](TokenImage)(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  position: absolute;\n  width: ", "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ", "\n"], ["\n  position: absolute;\n  width: ", "; // 92, 82 are arbitrary numbers to fit the variant\n\n  ", "\n"])), function (_a) {
    var variant = _a.variant;
    return variant === variants$2.DEFAULT
        ? "92%"
        : "82%";
}, styledSystem.variant({
    variants: (_a$4 = {},
        _a$4[variants$2.DEFAULT] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _a$4[variants$2.INVERTED] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _a$4),
}));
var StyledSecondaryImage = styled__default["default"](TokenImage)(templateObject_2$A || (templateObject_2$A = __makeTemplateObject(["\n  position: absolute;\n  width: 50%;\n\n  ", "\n"], ["\n  position: absolute;\n  width: 50%;\n\n  ", "\n"])), styledSystem.variant({
    variants: (_b$3 = {},
        _b$3[variants$2.DEFAULT] = {
            bottom: 0,
            left: "auto",
            right: 0,
            top: "auto",
            zIndex: 6,
        },
        _b$3[variants$2.INVERTED] = {
            bottom: "auto",
            left: 0,
            right: "auto",
            top: 0,
            zIndex: 5,
        },
        _b$3),
}));
var templateObject_1$Q, templateObject_2$A;

var TokenPairImage = function (_a) {
    var primarySrc = _a.primarySrc, secondarySrc = _a.secondarySrc, width = _a.width, height = _a.height, _b = _a.variant, variant = _b === void 0 ? variants$2.DEFAULT : _b, _c = _a.primaryImageProps, primaryImageProps = _c === void 0 ? {} : _c, _d = _a.secondaryImageProps, secondaryImageProps = _d === void 0 ? {} : _d, props = __rest(_a, ["primarySrc", "secondarySrc", "width", "height", "variant", "primaryImageProps", "secondaryImageProps"]);
    var secondaryImageSize = Math.floor(width / 2);
    return (React__default["default"].createElement(Wrapper$c, __assign({ position: "relative", width: width, height: height }, props),
        React__default["default"].createElement(StyledPrimaryImage, __assign({ variant: variant, src: primarySrc, width: width, height: height }, primaryImageProps)),
        React__default["default"].createElement(StyledSecondaryImage, __assign({ variant: variant, src: secondarySrc, width: secondaryImageSize, height: secondaryImageSize }, secondaryImageProps))));
};

var StyledProfileAvatar = styled__default["default"](BackgroundImage)(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  border-radius: 50%;\n"], ["\n  border-radius: 50%;\n"])));
var StyledBunnyPlaceholder = styled__default["default"](Icon$1O)(templateObject_2$z || (templateObject_2$z = __makeTemplateObject(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"])));
var ProfileAvatar = function (props) { return (React__default["default"].createElement(StyledProfileAvatar, __assign({ loadingPlaceholder: React__default["default"].createElement(StyledBunnyPlaceholder, null) }, props))); };
var templateObject_1$P, templateObject_2$z;

var getPadding = function (scale, hasIcon) {
    if (!hasIcon) {
        switch (scale) {
            case scales$7.SM:
                return "12px";
            case scales$7.LG:
                return "24px";
            case scales$7.MD:
            default:
                return "16px";
        }
    }
    switch (scale) {
        case scales$7.SM:
            return "36px";
        case scales$7.LG:
            return "60px";
        case scales$7.MD:
        default:
            return "44px";
    }
};
var StyledInputGroup = styled__default["default"](Box)(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  display: block;\n  outline: 0;\n  width: 100%;\n  position: relative;\n\n  ", "\n  \n  ", " {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    \n    ", "\n    \n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"], ["\n  display: block;\n  outline: 0;\n  width: 100%;\n  position: relative;\n\n  ", "\n  \n  ", " {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 1;\n    \n    ", "\n    \n    padding-left: ", ";\n    padding-right: ", ";\n  }\n"])), styledSystem.variant({
    prop: "scale",
    variants: scaleVariants$1,
}), Input$1, styledSystem.variant({
    prop: "variant",
    variants: styleVariants$2,
}), function (_a) {
    var hasStartIcon = _a.hasStartIcon, scale = _a.scale;
    return getPadding(scale, hasStartIcon);
}, function (_a) {
    var hasEndIcon = _a.hasEndIcon, scale = _a.scale;
    return getPadding(scale, hasEndIcon);
});
var InputIcon = styled__default["default"].div(templateObject_2$y || (templateObject_2$y = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 2;\n\n  ", "\n"])), function (_a) {
    var isEndIcon = _a.isEndIcon, scale = _a.scale;
    return isEndIcon
        ? "\n    right: ".concat(scale === scales$7.SM ? "12px" : scale === scales$7.MD ? "16px" : "24px", ";\n  ")
        : "\n    left: ".concat(scale === scales$7.SM ? "12px" : scale === scales$7.MD ? "16px" : "24px", ";\n  ");
});
var InputGroup = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b, startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, variant = _a.variant, props = __rest(_a, ["scale", "startIcon", "endIcon", "children", "variant"]);
    return (React__default["default"].createElement(StyledInputGroup, __assign({ scale: scale, variant: variant, width: "100%", position: "relative", hasStartIcon: !!startIcon, hasEndIcon: !!endIcon }, props),
        startIcon &&
            React__default["default"].createElement(InputIcon, { scale: scale }, startIcon),
        React.cloneElement(children, { scale: scale }),
        endIcon &&
            React__default["default"].createElement(InputIcon, { scale: scale, isEndIcon: true }, endIcon)));
};
var templateObject_1$O, templateObject_2$y;

var GridLayout$1 = styled__default["default"](Grid)(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$N;

var GridLayout = styled__default["default"](GridLayout$1)(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$M;

var StyledLink$1 = styled__default["default"](Text)(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default["default"].createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$L;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default["default"].createElement(Link, __assign({ external: true }, props),
        children,
        React__default["default"].createElement(Icon$1r, { color: props.color ? props.color : "primary", ml: "4px" })));
};

var NotificationDotRoot = styled__default["default"].span(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled__default["default"].span(templateObject_2$x || (templateObject_2$x = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, _c = _a.color, color = _c === void 0 ? "failure" : _c, children = _a.children, props = __rest(_a, ["show", "color", "children"]);
    return (React__default["default"].createElement(NotificationDotRoot, null,
        React.Children.map(children, function (child) {
            return React.cloneElement(child, props);
        }),
        React__default["default"].createElement(Dot, { show: show, color: color })));
};
var templateObject_1$K, templateObject_2$x;

var scales$4 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "14px",
        travelDistance: "14px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "24px",
        travelDistance: "24px",
        toggleHeight: "32px",
        toggleWidth: "56px",
        pancakeThickness: "1.5px",
        pancakeTwoOffset: "-1px",
        pancakeThreeOffset: "-6px",
        butterTop: "5px",
        butterLeft: "13px",
        butterWidth: "10px",
        butterHeight: "8px",
        butterThickness: "0.75px",
        butterRadius: "3px",
        butterSmearOneTop: "15px",
        butterSmearOneLeft: "3.75px",
        butterSmearTwoTop: "16px",
        butterSmearTwoRight: "3.75px",
    },
    lg: {
        pancakeSize: "31px",
        travelDistance: "31px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b;
        return scaleKeyValues$1[scale][property];
    };
};
var PancakeStack = styled__default["default"].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0\n      ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0\n      ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0\n      ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    position: absolute;\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0\n      ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0\n      ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0\n      ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled__default["default"].input(templateObject_2$w || (templateObject_2$w = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0\n      ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0\n      ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled__default["default"].label(templateObject_3$j || (templateObject_3$j = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$J, templateObject_2$w, templateObject_3$j;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$4.LG : _b, props = __rest(_a, ["checked", "scale"]);
    return (React__default["default"].createElement(PancakeStack, { scale: scale },
        React__default["default"].createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React__default["default"].createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React__default["default"].createElement("div", { className: "pancakes" },
                React__default["default"].createElement("div", { className: "pancake" }),
                React__default["default"].createElement("div", { className: "pancake" }),
                React__default["default"].createElement("div", { className: "pancake" }),
                React__default["default"].createElement("div", { className: "butter" })))));
};

var baseColors = {
    failure: "#F93B5D",
    primaryBright: "#53DEE9",
    primaryDark: "#0098A1",
    dark: "#102648",
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
    twitter: "#1DA1F2",
};
var additionalColors = {
    overlay: "#452a7a",
    gold: "#FFC700",
    silver: "#B2B2B2",
    bronze: "#E7974D",
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
var lightColors = __assign(__assign(__assign(__assign({}, baseColors), additionalColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#E9EAEB", header: "#071C3C", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#eeeaf4", inputBorder: "#E5EAF2", inputSecondary: "#d7caec", tertiary: "#E4EFFF", text: "#452A7A", disabled: "#E9EAEB", textDisabled: "#BDC2C4", textSubtle: "#8f80ba", borderColor: "#E9EAEB", card: "#FFFFFF", dropDown: "#F6F6F6", footer: "#FFFFFF", cardBorder: "#ffffff", dropdown: "#ffffff", dropdownDeep: "#ffffff", backgroundAlt: "#ffffff", backgroundAlt2: "#ffffff", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });
var darkColors = __assign(__assign(__assign(__assign({}, baseColors), additionalColors), brandColors), { header: "#071C3C", background: "#07162D", backgroundDisabled: "#C8D4E6", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#021127", inputBorder: "#1C3254", inputSecondary: "#0E3382", primaryDark: "#0098A1", tertiary: "#E4EFFF", text: "#708DB7", disabled: "#F2F6FC", textDisabled: "#708DB7", textSubtle: "#749BD8", borderColor: "#524B63", card: "#102648", dropDown: "#1C3254", footer: "#0C1F3C", cardBorder: "#ffffff", dropdown: "#ffffff", dropdownDeep: "#ffffff", backgroundAlt: "#ffffff", backgroundAlt2: "#ffffff", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
        cardHeader: "linear-gradient(180deg, #071C3C 0%, #002B6F 100%)",
        cardBlue: "linear-gradient(235deg, #336FF5 4.05%, rgba(17, 81, 225, 0.32) 103.52%)",
    } });

var light$7 = {
    background: lightColors.backgroundAlt,
};
var dark$7 = {
    background: darkColors.backgroundAlt,
};

var light$6 = {
    background: lightColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.cardHeader,
        bubblegum: lightColors.gradients.bubblegum,
        violet: lightColors.gradients.cardHeader,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.cardHeader,
        bubblegum: lightColors.gradients.bubblegum,
        violet: darkColors.gradients.cardHeader,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.backgroundAlt,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.backgroundAlt,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.backgroundAlt,
};
var dark$2 = {
    background: darkColors.backgroundAlt,
};

var light$1 = {
    background: lightColors.backgroundAlt,
};
var dark$1 = {
    background: darkColors.backgroundAlt,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: shadows.tooltip,
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: shadows.tooltip,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};
var scales$3 = {
    MD: "md",
    SM: "sm",
};

var _a$3, _b$2;
var styleVariants$1 = (_a$3 = {},
    _a$3[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$3[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$3);
var styleScales = (_b$2 = {},
    _b$2[scales$3.MD] = {
        height: "16px",
    },
    _b$2[scales$3.SM] = {
        height: "8px",
    },
    _b$2);

var Bar = styled__default["default"].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark, primary = _a.primary, $background = _a.$background;
    if ($background)
        return $background;
    if ($useDark)
        return primary ? theme.colors.secondary : "".concat(theme.colors.secondary, "80");
    return primary ? lightColors.secondary : "".concat(lightColors.secondary, "80");
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default["default"].div(templateObject_2$v || (templateObject_2$v = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark;
    return $useDark ? theme.colors.input : lightColors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return variant === variants$1.FLAT ? "0" : "32px";
}, function (_a) {
    var variant = _a.variant;
    return variant === variants$1.FLAT ? "0" : "32px";
}, styledSystem.variant({
    variants: styleVariants$1,
}), styledSystem.variant({
    prop: "scale",
    variants: styleScales,
}), styledSystem.space);
var templateObject_1$I, templateObject_2$v;

var ProgressBunnyWrapper = styled__default["default"].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$H;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales$3.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f, _g = _a.useDark, useDark = _g === void 0 ? true : _g, children = _a.children;
    return (React__default["default"].createElement(StyledProgress, { "$useDark": useDark, variant: variant, scale: scale }, children || (React__default["default"].createElement(React__default["default"].Fragment, null,
        showProgressBunny && (React__default["default"].createElement(ProgressBunnyWrapper, { style: { left: "".concat(stepGuard(primaryStep), "%") } },
            React__default["default"].createElement(Icon$1k, null))),
        React__default["default"].createElement(Bar, { "$useDark": useDark, primary: true, style: { width: "".concat(stepGuard(primaryStep), "%") } }),
        secondaryStep ? (React__default["default"].createElement(Bar, { "$useDark": useDark, style: { width: "".concat(stepGuard(secondaryStep), "%") } })) : null))));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "16px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Wrapper$b = styled__default["default"].label(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  flex-direction: ", ";\n  cursor: pointer;\n"], ["\n  display: flex;\n  align-items: center;\n  flex-direction: ", ";\n  cursor: pointer;\n"])), function (_a) {
    var labelOrientation = _a.labelOrientation;
    return labelOrientation === 'left' ? 'row-reverse' : 'row';
});
var InputRadio = styled__default["default"].input.attrs({ type: "radio" })(templateObject_2$u || (templateObject_2$u = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  transition: border-color 0.4s ease-in-out, border-width 0.3s ease-in-out;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  margin: 0;\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    border-color: ", ";\n    border-width: 4px;\n  }\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  transition: border-color 0.4s ease-in-out, border-width 0.3s ease-in-out;\n  border-radius: 50%;\n  border: 2px solid ", ";\n  margin: 0;\n\n  &:hover:not(:disabled):not(:checked) {\n    border-color: ", ";\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:checked {\n    border-color: ", ";\n    border-width: 4px;\n  }\n  &:checked + span {\n    background: ", ";\n    color: ", ";\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
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
    return colorVariant === 'dark' ? theme.colors.white :
        colorVariant === 'light' ? theme.colors.dark800 :
            theme.colors.gray900;
}, styledSystem.space);
var StyledText$1 = styled__default["default"](Text)(templateObject_3$i || (templateObject_3$i = __makeTemplateObject(["\n  transition: color .4s ease-in-out;\n"], ["\n  transition: color .4s ease-in-out;\n"])));
var Radio = function (_a) {
    var labelOrientation = _a.labelOrientation, label = _a.label, scale = _a.scale, radioName = _a.radioName, onChange = _a.onChange, colorVariant = _a.colorVariant, checked = _a.checked;
    return (React__default["default"].createElement(Wrapper$b, { labelOrientation: labelOrientation },
        React__default["default"].createElement(InputRadio, { scale: scale, name: radioName, onChange: onChange, colorVariant: colorVariant, checked: checked }),
        label && labelOrientation &&
            React__default["default"].createElement(StyledText$1, { as: "span", fontSize: "12px", fontWeight: "400", color: "gray900", mr: labelOrientation === "left" ? '12px' : 0, ml: labelOrientation === "right" ? '12px' : 0 }, label)));
};
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
    labelOrientation: "left",
    colorVariant: 'light',
};
var templateObject_1$G, templateObject_2$u, templateObject_3$i;

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stopColor%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stopColor%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stopColor%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stopColor%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(".concat(isMax ? bunnyHeadMax : bunnyHeadMain, ");\n  background-color: transparent;\n  box-shadow: none;\n  border: 0;\n  cursor: ").concat(getCursorStyle, ";\n  width: 24px;\n  height: 32px;\n  filter: ").concat(disabled ? "grayscale(100%)" : "none", ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: ").concat(disabled
        ? "scale(1) translate(-2px, -2px)"
        : "scale(1.1) translate(-3px, -3px)", ";\n  }\n");
};
var SliderLabelContainer = styled__default["default"].div(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled__default["default"](Text)(templateObject_2$t || (templateObject_2$t = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled__default["default"].div(templateObject_3$h || (templateObject_3$h = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled__default["default"].div(templateObject_4$e || (templateObject_4$e = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled__default["default"].input(templateObject_5$a || (templateObject_5$a = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled__default["default"].div(templateObject_6$7 || (templateObject_6$7 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled__default["default"].div(templateObject_7$6 || (templateObject_7$6 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$F, templateObject_2$t, templateObject_3$h, templateObject_4$e, templateObject_5$a, templateObject_6$7, templateObject_7$6;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = "".concat(progressPercentage + 0.5, "%");
    }
    else if (progressPercentage >= 90) {
        progressWidth = "".concat(progressPercentage - 4, "%");
    }
    else if (progressPercentage >= 60) {
        progressWidth = "".concat(progressPercentage - 2.5, "%");
    }
    else {
        progressWidth = "".concat(progressPercentage, "%");
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : "".concat(progressPercentage, "%");
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React__default["default"].createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React__default["default"].createElement(BunnyButt, { disabled: disabled }),
        React__default["default"].createElement(BunnySlider, null,
            React__default["default"].createElement(BarBackground, { disabled: disabled }),
            React__default["default"].createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React__default["default"].createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React__default["default"].createElement(SliderLabelContainer, null,
            React__default["default"].createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$s || (templateObject_2$s = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default["default"].div(templateObject_3$g || (templateObject_3$g = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small;
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default["default"](Root)(templateObject_4$d || (templateObject_4$d = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default["default"](Root)(templateObject_5$9 || (templateObject_5$9 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default["default"].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default["default"].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$E, templateObject_2$s, templateObject_3$g, templateObject_4$d, templateObject_5$9;

var Icon$c = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React__default["default"].createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React__default["default"].createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React__default["default"].createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React__default["default"].createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$b = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default["default"].createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default["default"].createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React__default["default"].createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var rotate$1 = styled.keyframes(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$r || (templateObject_2$r = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container = styled__default["default"].div(templateObject_3$f || (templateObject_3$f = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var RotatingPancakeIcon = styled__default["default"](Icon$b)(templateObject_4$c || (templateObject_4$c = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate$1);
var FloatingPanIcon = styled__default["default"](Icon$c)(templateObject_5$8 || (templateObject_5$8 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React__default["default"].createElement(Container, null,
        React__default["default"].createElement(RotatingPancakeIcon, { width: "".concat(size * 0.5, "px") }),
        React__default["default"].createElement(FloatingPanIcon, { width: "".concat(size, "px") })));
};
var templateObject_1$D, templateObject_2$r, templateObject_3$f, templateObject_4$c, templateObject_5$8;

var InlineMenuContainer = styled__default["default"](Box)(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"], ["\n  background-color: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundAlt;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.tooltip;
});
var SubMenuContainer = styled__default["default"](Flex)(templateObject_2$q || (templateObject_2$q = __makeTemplateObject(["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"], ["\n  flex-direction: column;\n  overflow: hidden;\n  min-width: 136px;\n  background: ", ";\n  border-radius: ", ";\n  border: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme;
    return "1px solid ".concat(theme.colors.inputSecondary);
});
var ClickableElementContainer = styled__default["default"].div(templateObject_3$e || (templateObject_3$e = __makeTemplateObject(["\n  cursor: pointer;\n  display: inline-flex;\n"], ["\n  cursor: pointer;\n  display: inline-flex;\n"])));
var SubMenuItem = styled__default["default"].button(templateObject_4$b || (templateObject_4$b = __makeTemplateObject(["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"], ["\n  border: 0;\n  outline: 0;\n  cursor: pointer;\n  background: transparent;\n  padding: 8px 16px;\n  color: ", ";\n  width: 100%;\n  font-size: 16px;\n  text-align: left;\n\n  &:hover {\n    background-color: ", ";\n    text-decoration: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
});
var templateObject_1$C, templateObject_2$q, templateObject_3$e, templateObject_4$b;

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
            document.addEventListener("click", handleClickOutside);
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
        ? children({ toggle: toggle, open: open, close: close })
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

var StyledMenuItemContainer = styled__default["default"].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  position: relative;\n\n  ", ";\n"], ["\n  position: relative;\n\n  ", ";\n"])), function (_a) {
    var $isActive = _a.$isActive, $variant = _a.$variant; _a.theme;
    return $isActive &&
        $variant === "subMenu" &&
        "\n      &:after{\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        height: 4px;\n        width: 100%;\n        border-radius: 2px 2px 0 0;\n      }\n    ";
});
var StyledMenuItem = styled__default["default"].a(templateObject_4$a || (templateObject_4$a = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 14px;\n  font-weight: 400;\n  transition: color 0.4s ease;\n\n  ", "\n\n  ", "\n\n  &:hover {\n    div {\n      color: ", ";\n    }\n    svg {\n      fill: ", ";\n    }\n    ", ";\n  }\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n\n  color: ", ";\n  font-size: 14px;\n  font-weight: 400;\n  transition: color 0.4s ease;\n\n  ", "\n\n  ", "\n\n  &:hover {\n    div {\n      color: ", ";\n    }\n    svg {\n      fill: ", ";\n    }\n    ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme, $isActive = _a.$isActive;
    return $isActive ? theme.colors.secondary : theme.colors.white;
}, function (_a) {
    var $statusColor = _a.$statusColor; _a.theme;
    return $statusColor &&
        "\n    &:after {\n      content: \"\";\n      border-radius: 100%;\n      height: 8px;\n      width: 8px;\n      margin-left: 12px;\n    }\n    ";
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default"
        ? styled.css(templateObject_2$p || (templateObject_2$p = __makeTemplateObject(["\n          padding: 0 8px;\n          height: 48px;\n          ", " {\n            padding: 0 12px;\n          }\n        "], ["\n          padding: 0 8px;\n          height: 48px;\n          ", " {\n            padding: 0 12px;\n          }\n        "])), function (_a) {
            var theme = _a.theme;
            return theme.mediaQueries.lg;
        }) : styled.css(templateObject_3$d || (templateObject_3$d = __makeTemplateObject(["\n          padding: 4px 4px 0px 4px;\n          height: 42px;\n        "], ["\n          padding: 4px 4px 0px 4px;\n          height: 42px;\n        "])));
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
}, function (_a) {
    var $variant = _a.$variant;
    return $variant === "default" && "border-radius: 16px;";
});
var templateObject_1$B, templateObject_2$p, templateObject_3$d, templateObject_4$a;

var MenuItem = function (_a) {
    var children = _a.children, href = _a.href, _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? "default" : _c, statusColor = _a.statusColor, props = __rest(_a, ["children", "href", "isActive", "variant", "statusColor"]);
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
        React__default["default"].createElement(StyledMenuItem, __assign({}, itemLinkProps, { "$isActive": isActive, "$variant": variant, "$statusColor": statusColor }, props), children)));
};

var Icons = IconModule;
var IconComponent = function (_a) {
    var iconName = _a.iconName, props = __rest(_a, ["iconName"]);
    var IconElement = Icons["".concat(iconName, "Icon")];
    return IconElement ? React__default["default"].createElement(IconElement, __assign({}, props)) : null;
};

var StyledSubMenuItems = styled__default["default"](Flex)(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"], ["\n  ", " {\n    ", ";\n  }\n  flex-grow: 1;\n  background-color: ", ";\n  box-shadow: inset 0px -2px 0px -8px rgba(133, 133, 133, 0.1);\n  overflow-x: scroll;\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var $isMobileOnly = _a.$isMobileOnly;
    return ($isMobileOnly ? "display:none" : "");
}, function (_a) {
    var theme = _a.theme;
    return "".concat(theme.colors.backgroundAlt2);
});
var templateObject_1$A;

var SubMenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, _c = _a.isMobileOnly, isMobileOnly = _c === void 0 ? false : _c, props = __rest(_a, ["items", "activeItem", "isMobileOnly"]);
    return (React__default["default"].createElement(StyledSubMenuItems, __assign({ justifyContent: [isMobileOnly ? "flex-end" : "start", null, "center"] }, props, { pl: ["12px", null, "0px"], "$isMobileOnly": isMobileOnly }), items.map(function (_a) {
        var label = _a.label, href = _a.href, iconName = _a.iconName, itemProps = _a.itemProps;
        return label && (React__default["default"].createElement(Box, { key: label, mr: "20px" },
            React__default["default"].createElement(MenuItem, __assign({ href: href, isActive: href === activeItem, variant: "subMenu" }, itemProps),
                iconName && (React__default["default"].createElement(IconComponent, { color: href === activeItem ? "secondary" : "textSubtle", iconName: iconName, mr: "4px" })),
                label)));
    })));
};

var tabsScales = {
    LG: "lg",
    MD: "md",
    SM: "sm",
};
var tabVariants = {
    TAB: "select",
    TAB_LIGHT: "selectLight",
};

var _a$2, _b$1;
var menuScaleVariants = (_a$2 = {},
    _a$2[tabsScales.LG] = {
        height: "40px",
        padding: "0 16px",
        fontSize: "14px",
        borderRadius: "8px",
    },
    _a$2[tabsScales.MD] = {
        height: "32px",
        padding: "0 12px",
        fontSize: "12px",
        borderRadius: "8px",
    },
    _a$2[tabsScales.SM] = {
        height: "24px",
        padding: "2px 8px",
        fontSize: "12px",
        borderRadius: "6px",
    },
    _a$2);
var menuStyleVariants = (_b$1 = {},
    _b$1[tabVariants.TAB] = {
        color: "white",
        ":hover:not(:disabled)": {
            color: "white",
        },
    },
    _b$1[tabVariants.TAB_LIGHT] = {
        color: "backgroundDark",
        ":hover:not(:disabled)": {
            color: "backgroundDark",
        },
    },
    _b$1);

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
var StyledTabItem = styled__default["default"].button(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  background-color: transparent;\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  z-index: 2;\n  transition: color .3s ease;\n\n  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  background-color: transparent;\n  align-items: center;\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  z-index: 2;\n  transition: color .3s ease;\n\n  &:active:not(:disabled):not(.button--disabled):not(.button--disabled) {\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, styledSystem.variant({
    prop: "scale",
    variants: menuScaleVariants,
}), styledSystem.variant({
    variants: menuStyleVariants,
}), styledSystem.layout, styledSystem.space);
var templateObject_1$z;

var TabItem = function (props) {
    props.startIcon; props.endIcon; var external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isDisabled && !isLoading) {
        classNames.push("button--disabled");
    }
    return (React__default["default"].createElement(StyledTabItem, __assign({ className: classNames.join(" "), disabled: isDisabled }, internalProps, rest), children));
};
TabItem.defaultProps = {
    isLoading: false,
    external: false,
    variant: tabVariants.TAB,
    scale: tabsScales.MD,
    disabled: false,
};

var InactiveButton = styled__default["default"](TabItem)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.pastelBlue;
});
var TabBarItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? tabVariants.TAB : _c, as = _a.as, setWidth = _a.setWidth, itemIndex = _a.itemIndex, onAction = _a.onAction, customClass = _a.customClass, props = __rest(_a, ["isActive", "variant", "as", "setWidth", "itemIndex", "onAction", "customClass"]);
    var className = 'tab-bar-item-' + itemIndex + customClass;
    var element = document.getElementsByClassName(className);
    React.useEffect(function () {
        setWidth(function (prev) { var _a, _b; return __spreadArray(__spreadArray([], prev, true), [(_b = (_a = element.item(0)) === null || _a === void 0 ? void 0 : _a.clientWidth) !== null && _b !== void 0 ? _b : 0], false); });
    }, [element]);
    var handleClick = function () {
        onAction(itemIndex);
    };
    if (!isActive) {
        return React__default["default"].createElement(InactiveButton, __assign({ onClick: handleClick, className: className, forwardedAs: as, variant: variant }, props));
    }
    return React__default["default"].createElement(TabItem, __assign({ onClick: handleClick, className: className, as: as, variant: variant }, props));
};
var templateObject_1$y;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return theme.colors[isLight ? 'backgroundLight' : 'backgroundDark'];
};
var getBorderRadius = function (_a) {
    var scale = _a.scale;
    return scale === tabsScales.SM ? '8px' : '10px';
};
var StyledTabBar = styled__default["default"].div(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: ", ";\n  display: ", ";\n  width: ", ";\n  padding: 4px;\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n  \n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: ", ";\n  display: ", ";\n  width: ", ";\n  padding: 4px;\n\n  & > button,\n  & > a {\n    flex: ", ";\n  }\n  \n  & > button,\n  & a {\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n"])), getBackgroundColor, getBorderRadius, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "flex" : "inline-flex");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "auto");
}, function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? 1 : "auto");
}, function (_a) {
    var disabled = _a.disabled, theme = _a.theme, variant = _a.variant;
    if (disabled) {
        return "\n        opacity: 0.5;\n\n        & > button:disabled {\n          background-color: transparent;\n          color: ".concat(variant === tabVariants.TAB
            ? theme.colors.primary
            : theme.colors.textSubtle, ";\n        }\n    ");
    }
    return "";
}, styledSystem.space);
var Selection = styled__default["default"].span(templateObject_2$o || (templateObject_2$o = __makeTemplateObject(["\n  width: ", ";\n  height: calc(100% - 8px);\n  position: absolute;\n  top: 4px;\n  left: ", ";\n  transition: left .3s ease;\n  border-bottom: 2px solid ", ";  \n  //color: ", ";\n  z-index: 1;\n"], ["\n  width: ", ";\n  height: calc(100% - 8px);\n  position: absolute;\n  top: 4px;\n  left: ", ";\n  transition: left .3s ease;\n  border-bottom: 2px solid ", ";  \n  //color: ", ";\n  z-index: 1;\n"])), function (_a) {
    var width = _a.width;
    return "".concat(width, "px");
}, function (_a) {
    var offset = _a.offset;
    return "".concat(offset, "px");
}, function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return theme.colors[isLight ? 'primary' : 'warning'];
}, function (_a) {
    var theme = _a.theme, isLight = _a.isLight;
    return theme.colors[isLight ? 'primary' : 'warning'];
});
var DEFAULT_OFFSET = 4;
var TabMenu = function (_a) {
    var _b = _a.customClass, customClass = _b === void 0 ? '' : _b, _c = _a.activeIndex, activeIndex = _c === void 0 ? 0 : _c, _d = _a.scale, scale = _d === void 0 ? tabsScales.SM : _d, _e = _a.variant, variant = _e === void 0 ? tabVariants.TAB : _e, onItemClick = _a.onItemClick, disabled = _a.disabled, _f = _a.fullWidth, fullWidth = _f === void 0 ? false : _f, _g = _a.menuTitles, menuTitles = _g === void 0 ? [''] : _g, props = __rest(_a, ["customClass", "activeIndex", "scale", "variant", "onItemClick", "disabled", "fullWidth", "menuTitles"]);
    var _h = React.useState([]), widthsArr = _h[0], setWidthsArr = _h[1];
    var _j = React.useState(DEFAULT_OFFSET), blockOffset = _j[0], setBlockOffset = _j[1];
    React.useEffect(function () {
        setBlockOffset(widthsArr.slice(0, activeIndex)
            .reduce(function (sum, elem) { return sum + elem; }, 0));
    }, [widthsArr, activeIndex]);
    var isLight = variant === tabVariants.TAB_LIGHT;
    return (React__default["default"].createElement(StyledTabBar, __assign({ disabled: disabled, isLight: isLight, fullWidth: fullWidth }, props),
        !disabled && React__default["default"].createElement(Selection, { scale: scale, width: widthsArr[activeIndex], offset: blockOffset + DEFAULT_OFFSET, isLight: isLight }),
        menuTitles.map(function (title, index) {
            return React__default["default"].createElement(TabBarItem, { key: index.toString(), disabled: disabled, customClass: customClass, isActive: activeIndex === index, onAction: onItemClick, itemIndex: index, setWidth: setWidthsArr, variant: variant, scale: scale }, title);
        })));
};
var templateObject_1$x, templateObject_2$o;

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b[variants.WARNING] = {
        backgroundColor: "warning",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey]
            .backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: ".concat(color, ";\n      background: ").concat(theme.colors.background, ";\n      border: 2px solid ").concat(color, ";\n    ");
    }
    return "";
};
var StyledTag = styled__default["default"].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n\n  ", "\n  ", "\n  ", "\n  ", "\n\n  ", "\n"])), function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: ".concat(textTransform, ";");
}, styledSystem.variant({
    prop: "scale",
    variants: scaleVariants,
}), styledSystem.variant({
    variants: styleVariants,
}), styledSystem.space, styledSystem.typography, getOutlineStyles);
var templateObject_1$w;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default["default"].createElement(StyledTag, __assign({}, props),
        React__default["default"].isValidElement(startIcon) &&
            React__default["default"].cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React__default["default"].isValidElement(endIcon) &&
            React__default["default"].cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var isTouchDevice = function () {
    return (typeof window !== "undefined" &&
        ("ontouchstart" in window ||
            navigator.maxTouchPoints > 0));
};

var Arrow = styled__default["default"].div(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
});
var StyledTooltip = styled__default["default"].div(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  padding: 12px 8px;\n  font-size: 12px;\n  line-height: 16px;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 12px 8px;\n  font-size: 12px;\n  line-height: 16px;\n  border-radius: 8px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.tooltip;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$v, templateObject_2$n;

var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
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
                options: { element: arrowElement, padding: arrowPadding },
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

var InfoTooltip = function (_a) {
    var text = _a.text, _b = _a.iconColor, iconColor = _b === void 0 ? "textSubtle" : _b, props = __rest(_a, ["text", "iconColor"]);
    var _c = useTooltip(text, {}), targetRef = _c.targetRef, tooltip = _c.tooltip, tooltipVisible = _c.tooltipVisible;
    return (React__default["default"].createElement(Flex, __assign({}, props, { alignItems: "center" }),
        tooltipVisible && tooltip,
        React__default["default"].createElement(Flex, { ref: targetRef, alignItems: "center" },
            React__default["default"].createElement(IconComponent, { iconName: "Info", color: iconColor }))));
};

var TimelineContainer = styled__default["default"].ul(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"], ["\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n"])));
var TimelineEvent = styled__default["default"].li(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  display: flex;\n  position: relative;\n  margin-bottom: 14px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: 9px;\n    top: 26px;\n    width: 2px;\n    height: 10px;\n    background-color: ", ";\n  }\n\n  &:last-child:after {\n    display: none;\n  }\n"], ["\n  display: flex;\n  position: relative;\n  margin-bottom: 14px;\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    left: 9px;\n    top: 26px;\n    width: 2px;\n    height: 10px;\n    background-color: ", ";\n  }\n\n  &:last-child:after {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme, $useDark = _a.$useDark;
    return $useDark ? theme.colors.textSubtle : lightColors.textSubtle;
});
var templateObject_1$u, templateObject_2$m;

var getTextColor$1 = function (_a) {
    var eventStatus = _a.eventStatus, useDark = _a.useDark;
    if (eventStatus === "upcoming")
        return useDark
            ? "textDisabled"
            : lightColors.textDisabled;
    if (eventStatus === "live")
        return "success";
    return useDark ? "textSubtle" : lightColors.textSubtle;
};
var Timeline = function (_a) {
    var events = _a.events, _b = _a.useDark, useDark = _b === void 0 ? true : _b;
    return (React__default["default"].createElement(TimelineContainer, null, events.map(function (_a) {
        var text = _a.text, status = _a.status, altText = _a.altText, infoText = _a.infoText;
        var isUpcoming = status === "upcoming";
        var isLive = status === "live";
        var isPast = status === "past";
        return (React__default["default"].createElement(TimelineEvent, { key: text, "$useDark": useDark },
            React__default["default"].createElement(Flex, { mr: "10px", alignItems: "center" },
                isUpcoming && (React__default["default"].createElement(IconComponent, { iconName: "CircleOutline", color: useDark ? "textDisabled" : lightColors.textDisabled })),
                isLive && React__default["default"].createElement(IconComponent, { iconName: "Logo" }),
                isPast && (React__default["default"].createElement(IconComponent, { iconName: "CheckmarkCircleFill", color: useDark ? "textSubtle" : lightColors.textSubtle }))),
            React__default["default"].createElement(Text, { color: getTextColor$1({ eventStatus: status, useDark: useDark }), bold: true }, text),
            altText && (React__default["default"].createElement(Text, { color: "warning", ml: "2px", bold: true }, altText)),
            infoText && (React__default["default"].createElement(InfoTooltip, { text: infoText, ml: "10px", iconColor: useDark ? "textSubtle" : lightColors.textSubtle }))));
    })));
};

var scales = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
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
    lg: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales.LG : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled__default["default"].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  box-shadow: 0 2px 4px rgba(7, 22, 45, 0.16);\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  box-shadow: 0 2px 4px rgba(7, 22, 45, 0.16);\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled__default["default"].input(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n  margin: 0;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n  margin: 0;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n"])), Handle, getScale("checkedLeft"));
var StyledToggle = styled__default["default"].div(templateObject_3$c || (templateObject_3$c = __makeTemplateObject(["\n  background-color: ", ";\n  align-items: center;\n  border-radius: 26px;\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  background-color: ", ";\n  align-items: center;\n  border-radius: 26px;\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, $checked = _a.$checked, $checkedColor = _a.$checkedColor, $defaultColor = _a.$defaultColor;
    return theme.colors[$checked ? $checkedColor : $defaultColor];
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$t, templateObject_2$l, templateObject_3$c;

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.defaultColor, defaultColor = _b === void 0 ? "toggleBg" : _b, _c = _a.checkedColor, checkedColor = _c === void 0 ? "success" : _c, _d = _a.scale, scale = _d === void 0 ? scales.LG : _d, props = __rest(_a, ["checked", "defaultColor", "checkedColor", "scale"]);
    var isChecked = !!checked;
    return (React__default["default"].createElement(StyledToggle, { "$checked": isChecked, "$checkedColor": checkedColor, "$defaultColor": defaultColor, scale: scale },
        React__default["default"].createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React__default["default"].createElement(Handle, { scale: scale })));
};

var getBadgeBg = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "light" : _b, theme = _a.theme;
    if (badgeType === "active") {
        return getRgba(theme.colors.success, 0.16);
    }
    if (badgeType === "notActive") {
        return getRgba(theme.colors.secondary, 0.16);
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
        return getRgba(theme.colors.primary, 0.16);
    }
    return theme.colors.inputSecondary;
};
var getBadgeColor = function (_a) {
    var _b = _a.badgeType, badgeType = _b === void 0 ? "active" : _b, theme = _a.theme;
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
    if (badgeType === "new" || badgeType === "primary" || badgeType === "hot" || badgeType === "boost") {
        return theme.colors.white;
    }
    return theme.colors.white;
};
// interface BadgeProps{}
var Wrapper$a = styled__default["default"].div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  align-content: center;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n  height: 20px;\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1;\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  align-content: center;\n  padding: ", ";\n  background: ", ";\n  color: ", ";\n  border-radius: 16px;\n  height: 20px;\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1;\n"])), function (_a) {
    var isIcon = _a.isIcon;
    return isIcon === 'left' ? '4px 12px 4px 4px' : isIcon === 'right' ? '4px 4px 4px 12px' : '4px 12px';
}, getBadgeBg, getBadgeColor, function (_a) {
    var fontSize = _a.fontSize;
    return fontSize || "10px";
}, function (_a) {
    var fontWeight = _a.fontWeight;
    return fontWeight || "400";
});
var Badge = function (_a) {
    var children = _a.children, badgeType = _a.badgeType; _a.fontSize; _a.fontWeight; var isIcon = _a.isIcon;
    return (React__default["default"].createElement(Wrapper$a, { badgeType: badgeType, isIcon: isIcon }, children));
};
var templateObject_1$s;

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data, true);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArray([], action.data, true);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            columnCopy = state.columns.map(function (column) {
                if (state.sortColumn === column.name) {
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: column.sorted.asc,
                        } });
                }
                return column;
            });
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, ".concat(action.columnName, " not found"));
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, ".concat(column.name, " not found"));
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default["default"],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default["default"],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }), true);
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(".concat(imgSrc, ")");
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = "".concat(width, "px");
    particle.style.height = "".concat(height, "px");
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(".concat(x, "px, ").concat(y, "px) rotate(0deg)"),
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(".concat(x + destinationX, "px, ").concat(y + destinationY, "px) rotate(").concat(rotation, "deg)"),
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default["default"](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    React.useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var ModalHeader = styled__default["default"].div(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  padding: 24px 16px;\n\n  ", " {\n    padding: 32px 32px 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalTitle = styled__default["default"](Flex)(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody$1 = styled__default["default"](Flex)(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  flex-direction: column;\n  //max-height: 90vh;\n  overflow-y: auto;\n  padding: 0 16px 24px;\n\n  ", " {\n    padding: 0 32px 32px;\n  }\n"], ["\n  flex-direction: column;\n  //max-height: 90vh;\n  overflow-y: auto;\n  padding: 0 16px 24px;\n\n  ", " {\n    padding: 0 32px 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss, closeBtnColor = _a.closeBtnColor;
    return (React__default["default"].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React__default["default"].createElement(Icon$1F, { color: closeBtnColor || "dark600", width: "24px" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack; _a.closeBtnColor;
    return (React__default["default"].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React__default["default"].createElement(Icon$1X, { color: "primary" })));
};
var ModalContainer = styled__default["default"](Box)(templateObject_4$9 || (templateObject_4$9 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  border-radius: 16px 16px 0 0;\n  width: 100% ;\n  max-height: 100vh;\n  z-index: ", ";\n  overflow-y: auto;\n\n  ", " {\n    width: ", ";\n    min-width: ", ";\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  border-radius: 16px 16px 0 0;\n  width: 100% ;\n  max-height: 100vh;\n  z-index: ", ";\n  overflow-y: auto;\n\n  ", " {\n    width: ", ";\n    min-width: ", ";\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var background = _a.background;
    return background || "white";
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
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
var templateObject_1$r, templateObject_2$k, templateObject_3$b, templateObject_4$9;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.minWidth, minWidth = _d === void 0 ? "320px" : _d, _e = _a.modalBackground, modalBackground = _e === void 0 ? "white" : _e, closeBtnColor = _a.closeBtnColor, maxWidth = _a.maxWidth, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "minWidth", "modalBackground", "closeBtnColor", "maxWidth"]);
    var theme = styled.useTheme();
    return (React__default["default"].createElement(ModalContainer, __assign({ minWidth: minWidth }, props, { background: getThemeValue("colors.".concat(modalBackground), modalBackground)(theme), maxWidth: maxWidth }),
        React__default["default"].createElement(ModalHeader, null,
            React__default["default"].createElement(ModalTitle, null,
                onBack && React__default["default"].createElement(ModalBackButton, { onBack: onBack, closeBtnColor: closeBtnColor }),
                title &&
                    React__default["default"].createElement(Heading, null, title)),
            !hideCloseButton && React__default["default"].createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React__default["default"].createElement(ModalBody$1, { p: bodyPadding }, children)));
};

var StyledModal = styled__default["default"].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  background-color: ", ";\n  border-radius: 16px 16px 0 0;  \n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  left: 0;\n  ", " {\n    width: auto;\n    min-width: 416px;\n    max-width: 100%;\n    border-radius: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledIconButton = styled__default["default"](IconButton)(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"], ["\n  width: 24px;\n  height: 24px;\n  position: absolute;\n  top: 24px;\n  left: calc(100% - 40px);\n  \n  ", " {\n    top: 32px;\n    left: calc(100% - 56px);\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ModalBody = styled__default["default"].div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  padding: ", ";\n  \n  ", " {\n    padding: ", ";\n  }\n"], ["\n  padding: ", ";\n  \n  ", " {\n    padding: ", ";\n  }\n"])), function (_a) {
    var padding = _a.padding;
    return padding || '0 16px 24px';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var padding = _a.padding;
    return padding || '0 32px 32px';
});
var Background = styled__default["default"].img(templateObject_4$8 || (templateObject_4$8 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var ModalWithBackground = function (_a) {
    var onDismiss = _a.onDismiss, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, backBtnColor = _a.backBtnColor, background = _a.background, p = _a.p;
    return (React__default["default"].createElement(StyledModal, null,
        !hideCloseButton && (React__default["default"].createElement(StyledIconButton, { variant: "text", className: "closeModal", scale: "sm", onClick: onDismiss, "aria-label": "Close the dialog" },
            React__default["default"].createElement(Icon$1F, { width: "24px", color: backBtnColor !== null && backBtnColor !== void 0 ? backBtnColor : "card" }))),
        background && React__default["default"].createElement(Background, { src: background, alt: 'image' }),
        React__default["default"].createElement(ModalBody, { padding: p }, children)));
};
var templateObject_1$q, templateObject_2$j, templateObject_3$a, templateObject_4$8;

var ModalWrapper = styled__default["default"].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
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
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(""), nodeId = _d[0], setNodeId = _d[1];
    var _e = React.useState(true), closeOnOverlayClick = _e[0], setCloseOnOverlayClick = _e[1];
    var handlePresent = function (node, newNodeId) {
        setModalNode(node);
        setIsOpen(true);
        setNodeId(newNodeId);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
        setNodeId("");
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
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default["default"].createElement(ModalWrapper, null,
            React__default["default"].createElement(Overlay, { onClick: handleOverlayDismiss }),
            React__default["default"].isValidElement(modalNode) &&
                React__default["default"].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$p;

var useModal = function (modal, closeOnOverlayClick, updateOnPropsChange, modalId) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    if (updateOnPropsChange === void 0) { updateOnPropsChange = false; }
    if (modalId === void 0) { modalId = "defaultNodeId"; }
    var _a = React.useContext(Context), isOpen = _a.isOpen, nodeId = _a.nodeId, modalNode = _a.modalNode, setModalNode = _a.setModalNode, onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal, modalId);
    }, [modal, modalId, onPresent]);
    // Updates the "modal" component if props are changed
    // Use carefully since it might result in unnecessary rerenders
    // Typically if modal is staic there is no need for updates, use when you expect props to change
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
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

// import { formatSpacingAmount } from "../../../util/formatSpacingAmount";
var Wrapper$9 = styled__default["default"].div(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  grid-template-areas:\n    \"logo bsw-title\"\n    \"logo bsw-value\";\n  grid-column-gap: 8px;\n  position: relative;\n\n  ", " {\n    grid-column-gap: 16px;\n  }\n\n  .logo {\n    width: 38px;\n    grid-area: logo;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: 38px 1fr;\n  grid-template-areas:\n    \"logo bsw-title\"\n    \"logo bsw-value\";\n  grid-column-gap: 8px;\n  position: relative;\n\n  ", " {\n    grid-column-gap: 16px;\n  }\n\n  .logo {\n    width: 38px;\n    grid-area: logo;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var BSWPrice = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue;
    return (React__default["default"].createElement(Wrapper$9, null,
        React__default["default"].createElement("svg", { className: "logo", viewBox: "0 0 55 55", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React__default["default"].createElement("path", { d: "M27.0769 54.1537C42.031 54.1537 54.1538 42.031 54.1538 27.0769C54.1538 12.1227 42.031 0 27.0769 0C12.1227 0 0 12.1227 0 27.0769C0 42.031 12.1227 54.1537 27.0769 54.1537Z", fill: "white" }),
            React__default["default"].createElement("path", { d: "M48.0498 10.187C46.1719 10.5582 44.3814 11.0823 42.9074 11.4098C39.5446 12.1632 36.4002 14.7399 35.7124 19.4565C35.101 23.6709 36.5203 25.4833 35.898 30.3855C34.8062 38.9453 26.5958 41.8931 22.7635 43.6837C20.5471 44.71 15.1645 47.0683 11.0156 48.8698C15.5139 52.1889 21.0603 54.1542 27.0762 54.1542C42.034 54.1542 54.1531 42.0351 54.1531 27.0773C54.1531 20.7011 51.9476 14.8381 48.2573 10.2198C48.1918 10.2088 48.1263 10.1979 48.0498 10.187Z", fill: "url(#paint0_linear)" }),
            React__default["default"].createElement("path", { d: "M24.0307 23.1027C26.1161 18.5935 25.3628 18.5826 26.9459 14.3464C28.9439 8.97467 35.1563 10.5032 36.8704 10.7325C39.6982 11.1146 40.4407 10.1102 46.4019 9.14936C46.6967 9.10569 46.9806 9.06202 47.2645 9.02926C42.3076 3.49379 35.1017 0 27.0769 0C16.3007 0 6.9985 6.28882 2.64218 15.4054C11.5732 17.6218 21.2139 22.4367 24.0307 23.1027ZM18.1131 4.71662C18.8992 4.83671 22.7206 9.58608 23.4412 21.7816C23.4412 21.7816 18.528 20.6024 17.469 18.0694C16.5955 15.9841 17.731 13.2436 18.1131 4.71662ZM48.2143 10.1647C48.2253 10.1866 48.2471 10.1975 48.258 10.2193C48.1925 10.2084 48.1161 10.2084 48.0506 10.1975C48.1052 10.1757 48.1598 10.1757 48.2143 10.1647ZM0 27.0769C0 24.9151 0.251116 22.8188 0.731513 20.8099C1.71414 21.6287 2.76228 22.5349 3.87593 23.5722C10.929 30.1121 22.4039 35.2764 26.5856 30.4724C26.5965 30.4833 26.6074 30.4833 26.6074 30.4942C25.8431 31.4987 22.928 34.6759 17.3598 33.6932L8.55979 46.8277C3.29727 41.8927 0 34.8724 0 27.0769Z", fill: "url(#paint1_linear)" }),
            React__default["default"].createElement("defs", null,
                React__default["default"].createElement("linearGradient", { id: "paint0_linear", x1: "43.3371", y1: "17.2788", x2: "36.9491", y2: "52.4708", gradientUnits: "userSpaceOnUse" },
                    React__default["default"].createElement("stop", { stopColor: "#FF496A" }),
                    React__default["default"].createElement("stop", { offset: "1", stopColor: "#E42648" })),
                React__default["default"].createElement("linearGradient", { id: "paint1_linear", x1: "13.0692", y1: "39.8859", x2: "27.193", y2: "-1.0612e-05", gradientUnits: "userSpaceOnUse" },
                    React__default["default"].createElement("stop", { offset: "0.00181229", stopColor: "#1158F1" }),
                    React__default["default"].createElement("stop", { offset: "1", stopColor: "#119BED" })))),
        React__default["default"].createElement(Text, { color: "gray900", fontSize: "12px", lineHeight: "18px" }, BSWPriceLabel),
        React__default["default"].createElement(Text, { color: "contrast", fontSize: "16px", lineHeight: "19px", bold: true }, BSWPriceValue)));
};
var templateObject_1$o;

styled__default["default"].span(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  font-size: 14px;\n  color: ", ";\n  margin-right: 4px;\n  font-weight: 400;\n"], ["\n  font-size: 14px;\n  color: ", ";\n  margin-right: 4px;\n  font-weight: 400;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var AddToMetamaskBtn = styled__default["default"].button(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: none;\n  border: 0;\n  cursor: pointer;\n  transition: opacity .3s ease;\n  \n  &:hover {\n    opacity: 0.65;\n  }\n"], ["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 40px;\n  height: 40px;\n  background: ", ";\n  border-radius: 50%;\n  box-shadow: none;\n  border: 0;\n  cursor: pointer;\n  transition: opacity .3s ease;\n  \n  &:hover {\n    opacity: 0.65;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark700;
});
var ConnectMetamask = function (props) {
    var onClick = props.onClick;
    return (React__default["default"].createElement(AddToMetamaskBtn, { type: "button", onClick: function () { return onClick(); }, as: "button" },
        React__default["default"].createElement(Icon$1v, { width: "22px" })));
};
var templateObject_1$n, templateObject_2$i;

var BuyBSW = function (_a) {
    var buyBswLink = _a.buyBswLink;
    return (React__default["default"].createElement(Button, { as: "a", href: buyBswLink, variant: 'danger', scale: 'xs' }, "Buy BSW"));
};

var Wrapper$8 = styled__default["default"].div(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 16px;\n  padding: 24px;\n  background: ", ";\n  margin-bottom: 24px;\n  grid-area: footer-info;\n\n  ", " {\n    margin-bottom: 0;\n  }\n  \n  ", " {\n    flex-direction: row;\n    justify-content: initial;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  border-radius: 16px;\n  padding: 24px;\n  background: ", ";\n  margin-bottom: 24px;\n  grid-area: footer-info;\n\n  ", " {\n    margin-bottom: 0;\n  }\n  \n  ", " {\n    flex-direction: row;\n    justify-content: initial;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark600;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var LeftInfo = styled__default["default"].div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  ", " {\n    flex-direction: column;\n    justify-content: space-between;\n    width: 142px;\n    min-width: 142px;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n\n  ", " {\n    flex-direction: column;\n    justify-content: space-between;\n    width: 142px;\n    min-width: 142px;\n    margin-right: 24px;\n    margin-bottom: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var FlexWrap = styled__default["default"].div(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  gap: 8px;\n"])));
var InfoList = styled__default["default"].div(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  flex-grow: initial;\n\n  ", " {\n    flex-grow: 1;\n  }\n"], ["\n  flex-grow: initial;\n\n  ", " {\n    flex-grow: 1;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var InfoListItem = styled__default["default"].div(templateObject_5$7 || (templateObject_5$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  line-height: 18px;\n  \n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  line-height: 18px;\n  \n  &:not(:last-child) {\n    margin-bottom: 8px;\n  }\n"])));
var InfoListLabel = styled__default["default"].span(templateObject_6$6 || (templateObject_6$6 = __makeTemplateObject(["\n  font-size: 12px;\n  width: 140px;\n  min-width: 140px;\n  color: ", ";\n  font-weight: bold;\n  \n  ", " {\n    width: 120px;\n    min-width: 120px;\n  }\n"], ["\n  font-size: 12px;\n  width: 140px;\n  min-width: 140px;\n  color: ", ";\n  font-weight: bold;\n  \n  ", " {\n    width: 120px;\n    min-width: 120px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var InfoListValue = styled__default["default"].span(templateObject_7$5 || (templateObject_7$5 = __makeTemplateObject(["\n  font-size: 12px;\n  color: ", ";\n  padding-left: 4px;\n  font-weight: bold;\n"], ["\n  font-size: 12px;\n  color: ", ";\n  padding-left: 4px;\n  font-weight: bold;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var FooterInfo = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, onClick = _a.onClick, footerStatistic = _a.footerStatistic, buyBswLink = _a.buyBswLink;
    return (React__default["default"].createElement(Wrapper$8, null,
        React__default["default"].createElement(LeftInfo, null,
            React__default["default"].createElement(BSWPrice, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue }),
            React__default["default"].createElement(FlexWrap, null,
                React__default["default"].createElement(ConnectMetamask, { onClick: onClick }),
                React__default["default"].createElement(BuyBSW, { buyBswLink: buyBswLink }))),
        React__default["default"].createElement(InfoList, null, footerStatistic.map(function (item, index) { return (React__default["default"].createElement(InfoListItem, { key: index.toString() },
            React__default["default"].createElement(InfoListLabel, null, item.label),
            React__default["default"].createElement(InfoListValue, null, item.value))); }))));
};
var templateObject_1$m, templateObject_2$h, templateObject_3$9, templateObject_4$7, templateObject_5$7, templateObject_6$6, templateObject_7$5;

// import MenuLink from "../MenuLink";
var Wrapper$7 = styled__default["default"].div(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  grid-area: about;\n"], ["\n  grid-area: about;\n"])));
var TopAction$2 = styled__default["default"].div(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"])));
var Title$2 = styled__default["default"].h4(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ActionIcon$2 = styled__default["default"].div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n  \n  ", " {\n    display: none;\n  }\n  \n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n  \n  &:before {\n    transform: ", ";\n  }\n  \n  &:after {\n    transform: ", ";\n  }\n"], ["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n  \n  ", " {\n    display: none;\n  }\n  \n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n  \n  &:before {\n    transform: ", ";\n  }\n  \n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(90deg)';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)';
});
var NavList$2 = styled__default["default"].div(templateObject_5$6 || (templateObject_5$6 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"], ["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'scaleY(1)' : 'scaleY(0)';
}, function (_a) {
    var isOpen = _a.isOpen, innerHeight = _a.innerHeight;
    return isOpen ? "".concat(innerHeight * 26 + 16, "px") : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '1' : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '16px' : '0';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var NavItem$2 = styled__default["default"].div(templateObject_6$5 || (templateObject_6$5 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
});
var CustomLink$2 = styled__default["default"].a(templateObject_7$4 || (templateObject_7$4 = __makeTemplateObject(["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"], ["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"])));
var About = function (_a) {
    var aboutLinks = _a.aboutLinks;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var arrLength = aboutLinks.length;
    return (React__default["default"].createElement(Wrapper$7, null,
        React__default["default"].createElement(TopAction$2, { onClick: function () { return setIsOpen(!isOpen); } },
            React__default["default"].createElement(Title$2, null, "About"),
            React__default["default"].createElement(ActionIcon$2, { isOpen: isOpen })),
        React__default["default"].createElement(NavList$2, { isOpen: isOpen, innerHeight: arrLength }, aboutLinks.map(function (item, index) { return (React__default["default"].createElement(NavItem$2, { key: index.toString() },
            React__default["default"].createElement(CustomLink$2, { href: item.href, target: item.target ? item.target : '_self' }, item.label))); }))));
};
var templateObject_1$l, templateObject_2$g, templateObject_3$8, templateObject_4$6, templateObject_5$6, templateObject_6$5, templateObject_7$4;

// import MenuLink from "../MenuLink";
var Wrapper$6 = styled__default["default"].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  grid-area: product;\n"], ["\n  grid-area: product;\n"])));
var TopAction$1 = styled__default["default"].div(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"])));
var Title$1 = styled__default["default"].h4(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ActionIcon$1 = styled__default["default"].div(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"], ["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(90deg)';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)';
});
var NavList$1 = styled__default["default"].div(templateObject_5$5 || (templateObject_5$5 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"], ["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'scaleY(1)' : 'scaleY(0)';
}, function (_a) {
    var isOpen = _a.isOpen, innerHeight = _a.innerHeight;
    return isOpen ? "".concat(innerHeight * 26 + 16, "px") : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '1' : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '16px' : '0';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var NavItem$1 = styled__default["default"].div(templateObject_6$4 || (templateObject_6$4 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
});
var CustomLink$1 = styled__default["default"].a(templateObject_7$3 || (templateObject_7$3 = __makeTemplateObject(["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"], ["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"])));
var Product = function (_a) {
    var productLinks = _a.productLinks;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var arrLength = productLinks.length;
    return (React__default["default"].createElement(Wrapper$6, null,
        React__default["default"].createElement(TopAction$1, { onClick: function () { return setIsOpen(!isOpen); } },
            React__default["default"].createElement(Title$1, null, "Products"),
            React__default["default"].createElement(ActionIcon$1, { isOpen: isOpen })),
        React__default["default"].createElement(NavList$1, { isOpen: isOpen, innerHeight: arrLength }, productLinks.map(function (item, index) { return (React__default["default"].createElement(NavItem$1, { key: index.toString() },
            React__default["default"].createElement(CustomLink$1, { href: item.href, target: item.target ? item.target : '_self' }, item.label))); }))));
};
var templateObject_1$k, templateObject_2$f, templateObject_3$7, templateObject_4$5, templateObject_5$5, templateObject_6$4, templateObject_7$3;

// import MenuLink from "../MenuLink";
var Wrapper$5 = styled__default["default"].div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  grid-area: service;\n"], ["\n  grid-area: service;\n"])));
var TopAction = styled__default["default"].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n"])));
var Title = styled__default["default"].h4(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  font-size: 16px;\n  color: ", ";\n"], ["\n  font-size: 16px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var ActionIcon = styled__default["default"].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"], ["\n  width: 14px;\n  height: 14px;\n  position: relative;\n  display: block;\n\n  ", " {\n    display: none;\n  }\n\n  &:before,\n  &:after {\n    display: block;\n    content: \"\";\n    width: 14px;\n    height: 2px;\n    background-color: ", ";\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    transition: transform 0.3s ease;\n  }\n\n  &:before {\n    transform: ", ";\n  }\n\n  &:after {\n    transform: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(90deg)';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'translate(-50%, -50%) rotate(180deg)' : 'translate(-50%, -50%) rotate(0deg)';
});
var NavList = styled__default["default"].div(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"], ["\n  overflow: hidden;\n  transform: ", ";\n  transform-origin: top;\n  height: ", ";\n  opacity: ", ";\n  transition: transform .3s ease, opacity .3s ease, height .3s ease;\n  padding-bottom: ", ";\n\n  ", " {\n    padding-bottom: 0;\n    height: auto;\n    opacity: 1;\n    transform: scaleY(1);\n  }\n"])), function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? 'scaleY(1)' : 'scaleY(0)';
}, function (_a) {
    var isOpen = _a.isOpen, innerHeight = _a.innerHeight;
    return isOpen ? "".concat(innerHeight * 26 + 16, "px") : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '1' : '0';
}, function (_a) {
    var isOpen = _a.isOpen;
    return isOpen ? '16px' : '0';
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var NavItem = styled__default["default"].div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"], ["\n  display: block;\n  margin-bottom: 8px;\n  font-size: 12px;\n  color: ", ";\n  line-height: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray900;
});
var CustomLink = styled__default["default"].a(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"], ["\n  transition: opacity .3s ease;\n\n  &:hover {\n    opacity: .65;\n  }\n"])));
var Service = function (_a) {
    var serviceLinks = _a.serviceLinks;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var arrLength = serviceLinks.length;
    return (React__default["default"].createElement(Wrapper$5, null,
        React__default["default"].createElement(TopAction, { onClick: function () { return setIsOpen(!isOpen); } },
            React__default["default"].createElement(Title, null, "Service"),
            React__default["default"].createElement(ActionIcon, { isOpen: isOpen })),
        React__default["default"].createElement(NavList, { isOpen: isOpen, innerHeight: arrLength }, serviceLinks.map(function (item, index) { return (React__default["default"].createElement(NavItem, { key: index.toString() },
            React__default["default"].createElement(CustomLink, { href: item.href, target: item.target ? item.target : '_self' }, item.label))); }))));
};
var templateObject_1$j, templateObject_2$e, templateObject_3$6, templateObject_4$4, templateObject_5$4, templateObject_6$3, templateObject_7$2;

var Wrapper$4 = styled__default["default"].footer(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  color: #fff;\n  background: ", ";\n  padding: 32px 16px;\n  transition: padding-left 0.2s;\n  z-index: 10;\n"], ["\n  color: #fff;\n  background: ", ";\n  padding: 32px 16px;\n  transition: padding-left 0.2s;\n  z-index: 10;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.dark700;
});
var InnerRow = styled__default["default"].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: grid;\n  max-width: 1120px;\n  margin: 0 auto;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: \"footer-info footer-info\"\n                        \"about about\"\n                        \"product product\"\n                        \"service service\"\n                        \"community .\";\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community . .\";\n  }\n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community . .\";\n  }\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community . .\";\n  }\n  \n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community . .\";\n  }\n\n  ", " {\n    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 132px;\n    grid-template-areas: \"footer-info . about product service community\"\n                          \"footer-info . about product service .\";\n  }\n"], ["\n  display: grid;\n  max-width: 1120px;\n  margin: 0 auto;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-areas: \"footer-info footer-info\"\n                        \"about about\"\n                        \"product product\"\n                        \"service service\"\n                        \"community .\";\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community . .\";\n  }\n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community . .\";\n  }\n\n  ", " {\n    grid-template-columns: repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info footer-info footer-info\"\n                          \"about product service\"\n                          \"community . .\";\n  }\n  \n  ", " {\n    grid-template-columns: 338px minmax(0, 64px) repeat(3, minmax(110px, 1fr));\n    grid-template-areas: \"footer-info . about product service \"\n                          \"footer-info . community . .\";\n  }\n\n  ", " {\n    grid-template-columns: 424px minmax(0, 64px) repeat(3, minmax(110px, 1fr)) 132px;\n    grid-template-areas: \"footer-info . about product service community\"\n                          \"footer-info . about product service .\";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xl;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xll;
});
var Footer = function (_a) {
    var BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, onClick = _a.onClick, footerStatistic = _a.footerStatistic, aboutLinks = _a.aboutLinks, productLinks = _a.productLinks, serviceLinks = _a.serviceLinks, buyBswLink = _a.buyBswLink;
    return (React__default["default"].createElement(Wrapper$4, null,
        React__default["default"].createElement(InnerRow, null,
            React__default["default"].createElement(FooterInfo, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue, onClick: onClick, footerStatistic: footerStatistic, buyBswLink: buyBswLink }),
            React__default["default"].createElement(About, { aboutLinks: aboutLinks }),
            React__default["default"].createElement(Product, { productLinks: productLinks }),
            React__default["default"].createElement(Service, { serviceLinks: serviceLinks }))));
};
var templateObject_1$i, templateObject_2$d;

exports.DropdownMenuItemType = void 0;
(function (DropdownMenuItemType) {
    DropdownMenuItemType[DropdownMenuItemType["INTERNAL_LINK"] = 0] = "INTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["EXTERNAL_LINK"] = 1] = "EXTERNAL_LINK";
    DropdownMenuItemType[DropdownMenuItemType["BUTTON"] = 2] = "BUTTON";
    DropdownMenuItemType[DropdownMenuItemType["DIVIDER"] = 3] = "DIVIDER";
    DropdownMenuItemType[DropdownMenuItemType["BANNER"] = 4] = "BANNER";
    DropdownMenuItemType[DropdownMenuItemType["CONTAINER"] = 5] = "CONTAINER";
})(exports.DropdownMenuItemType || (exports.DropdownMenuItemType = {}));

var getTextColor = function (_a) {
    var $isActive = _a.$isActive, disabled = _a.disabled, theme = _a.theme;
    if (disabled)
        return theme.colors.textDisabled;
    if ($isActive)
        return theme.colors.primary;
    return theme.colors.text;
};
var InnerLinksBlockContainer = styled__default["default"].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  padding-top: 16px;\n  padding-left: ", ";\n"], ["\n  padding-top: 16px;\n  padding-left: ", ";\n"])), function (_a) {
    var padded = _a.padded;
    return padded && "62px";
});
var DropdownMenuInnerLinkItem = styled__default["default"].div(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    .inner-chevron {\n      margin-right: 4px;\n      transition: margin-right 150ms linear;\n    }\n  }\n"], ["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n\n  &:hover {\n    .inner-chevron {\n      margin-right: 4px;\n      transition: margin-right 150ms linear;\n    }\n  }\n"])));
var DropdownMenuItem = styled__default["default"].button(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  //background: transparent;\n  color: ", ";\n  cursor: ", ";\n  font-weight: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  height: 40px;\n  justify-content: space-between;\n  outline: 0;\n  //padding-left: 16px;\n  width: 100%;\n\n  .arrow-icon {\n    visibility: hidden;\n    opacity: 0;\n  }\n\n  &:hover:not(:disabled) {\n    color: ", ";\n\n    svg {\n      opacity: 0.85;\n    }\n\n    .arrow-icon {\n      visibility: visible;\n      transition: visibility 250ms linear, opacity 150ms linear;\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  //background: transparent;\n  color: ", ";\n  cursor: ", ";\n  font-weight: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  height: 40px;\n  justify-content: space-between;\n  outline: 0;\n  //padding-left: 16px;\n  width: 100%;\n\n  .arrow-icon {\n    visibility: hidden;\n    opacity: 0;\n  }\n\n  &:hover:not(:disabled) {\n    color: ", ";\n\n    svg {\n      opacity: 0.85;\n    }\n\n    .arrow-icon {\n      visibility: visible;\n      transition: visibility 250ms linear, opacity 150ms linear;\n      opacity: 1;\n    }\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled, $isActive = _a.$isActive;
    return getTextColor({ theme: theme, disabled: disabled, $isActive: $isActive });
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var _b = _a.$isActive, $isActive = _b === void 0 ? false : _b;
    return ($isActive ? "600" : "400");
}, function (_a) {
    var theme = _a.theme, $hasIcon = _a.$hasIcon;
    return !$hasIcon && theme.colors.primary;
});
var StyledDropdownMenuItemContainer = styled__default["default"].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  margin-bottom: 16px;\n\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  ", " {\n    margin-bottom: 24px;\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n"], ["\n  margin-bottom: 16px;\n\n  &:first-child > ", " {\n    border-top-left-radius: 8px;\n    border-top-right-radius: 8px;\n  }\n\n  &:last-child > ", " {\n    border-bottom-left-radius: 8px;\n    border-bottom-right-radius: 8px;\n  }\n\n  ", " {\n    margin-bottom: 24px;\n\n    &:last-of-type {\n      margin-bottom: 0;\n    }\n  }\n"])), DropdownMenuItem, DropdownMenuItem, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var DropdownMenuDivider = styled__default["default"].hr(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.gray200;
});
var StyledDropdownMenu = styled__default["default"].div(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n\n  padding: 24px;\n  pointer-events: auto;\n  width: 352px;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n  z-index: 1001;\n\n  ", "\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n\n  padding: 24px;\n  pointer-events: auto;\n  width: 352px;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n  z-index: 1001;\n\n  ", "\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return !$isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n    opacity: 0;\n  ";
}, function (_a) {
    var $isExtended = _a.$isExtended;
    return $isExtended &&
        "\n      -webkit-column-count: 2;\n      -moz-column-count: 2;\n      column-count: 2;\n      -webkit-perspective:1;\n      width: 680px;\n  ";
});
styled__default["default"](Text)(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var templateObject_1$h, templateObject_2$c, templateObject_3$5, templateObject_4$3, templateObject_5$3, templateObject_6$2, templateObject_7$1;

var InnerLinksBlock = function (_a) {
    var links = _a.links, leftIcon = _a.leftIcon, setIsOpen = _a.setIsOpen, linkComponent = _a.linkComponent;
    var isTablet = useMatchBreakpoints().isTablet;
    var renderLinks = function () {
        return links.map(function (_a, index) {
            var _b = _a.label, label = _b === void 0 ? "" : _b, _c = _a.href, href = _c === void 0 ? "/" : _c, _d = _a.icon, icon = _d === void 0 ? "ChevronRight" : _d, _e = _a.linkType; _e === void 0 ? exports.DropdownMenuItemType.INTERNAL_LINK : _e; var _f = _a.fill, fill = _f === void 0 ? "primary" : _f;
            return (React__default["default"].createElement(DropdownMenuInnerLinkItem, { key: index + label, as: linkComponent, href: href, onClick: function () {
                    setIsOpen(false);
                } },
                icon && (React__default["default"].createElement(IconComponent, { className: "inner-chevron", width: 10, iconName: icon, color: fill })),
                React__default["default"].createElement(Text, { fontSize: "12px", color: fill }, label)));
        });
    };
    return (React__default["default"].createElement(InnerLinksBlockContainer, { padded: !!leftIcon && !isTablet },
        React__default["default"].createElement(Grid, { gridTemplateColumns: "1fr 1fr", gridGap: 16, paddingBottom: 16 }, renderLinks()),
        !isTablet && React__default["default"].createElement(DropdownMenuDivider, null)));
};

var DropdownMenuItemContainer = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, leftIcon = _a.leftIcon, getMenuItemContent = _a.getMenuItemContent, _c = _a.links, links = _c === void 0 ? [] : _c, setIsOpen = _a.setIsOpen, linkComponent = _a.linkComponent, href = _a.href, bannerRenderer = _a.bannerRenderer, type = _a.type, itemProps = __rest(_a, ["isActive", "leftIcon", "getMenuItemContent", "links", "setIsOpen", "linkComponent", "href", "bannerRenderer", "type"]);
    var isDesktop = useMatchBreakpoints().isDesktop;
    var hasInnerLinks = links.length > 0;
    return (React__default["default"].createElement(StyledDropdownMenuItemContainer, null,
        type === exports.DropdownMenuItemType.BUTTON && (React__default["default"].createElement(DropdownMenuItem, __assign({ "$isActive": isActive, "$hasIcon": !!leftIcon, type: "button" }, itemProps), getMenuItemContent(""))),
        type === exports.DropdownMenuItemType.CONTAINER && (React__default["default"].createElement(React__default["default"].Fragment, null,
            React__default["default"].createElement(DropdownMenuItem, __assign({ "$isActive": isActive, "$hasIcon": true, as: "div" }, itemProps), getMenuItemContent("")),
            hasInnerLinks && (React__default["default"].createElement(InnerLinksBlock, { links: links, leftIcon: leftIcon, setIsOpen: setIsOpen, linkComponent: linkComponent })))),
        type === exports.DropdownMenuItemType.INTERNAL_LINK && (React__default["default"].createElement(DropdownMenuItem, __assign({ "$isActive": isActive, "$hasIcon": !!leftIcon, as: linkComponent, href: href, onClick: function () {
                setIsOpen(false);
            } }, itemProps), getMenuItemContent("ArrowForward"))),
        type === exports.DropdownMenuItemType.EXTERNAL_LINK && (React__default["default"].createElement(DropdownMenuItem, __assign({ "$isActive": isActive, "$hasIcon": !!leftIcon, as: "a", href: href, target: "_blank", onClick: function () {
                setIsOpen(false);
            } }, itemProps), getMenuItemContent("ArrowUpForward"))),
        type === exports.DropdownMenuItemType.DIVIDER && React__default["default"].createElement(DropdownMenuDivider, null),
        type === exports.DropdownMenuItemType.BANNER &&
            isDesktop &&
            bannerRenderer &&
            bannerRenderer()));
};

var MenuItemContent = function (_a) {
    var leftIcon = _a.leftIcon, label = _a.label, description = _a.description, rightIcon = _a.rightIcon, _b = _a.fill, fill = _b === void 0 ? "primary" : _b;
    return (React__default["default"].createElement(React__default["default"].Fragment, null,
        leftIcon && React__default["default"].createElement(IconComponent, { width: 40, iconName: leftIcon }),
        React__default["default"].createElement(Flex, { flexDirection: "column", flex: 1, paddingLeft: leftIcon && "16px" },
            label,
            description && (React__default["default"].createElement(Text, { fontSize: "12px", color: "gray900" }, description))),
        rightIcon && (React__default["default"].createElement(IconComponent, { className: "arrow-icon", iconName: rightIcon, color: fill }))));
};

var DropdownMenu = function (_a) {
    var children = _a.children; _a.isMobileNav; _a.showItemsOnMobile; var _d = _a.activeItem, activeItem = _d === void 0 ? "" : _d, _e = _a.items, items = _e === void 0 ? [] : _e; _a.mobileItems; var index = _a.index, _g = _a.isExtended, isExtended = _g === void 0 ? false : _g, setMenuOpenByIndex = _a.setMenuOpenByIndex, mobileMenuCallback = _a.mobileMenuCallback, props = __rest(_a, ["children", "isMobileNav", "showItemsOnMobile", "activeItem", "items", "mobileItems", "index", "isExtended", "setMenuOpenByIndex", "mobileMenuCallback"]);
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var _h = React.useState(false), isOpen = _h[0], setIsOpen = _h[1];
    var _j = React.useState(null), targetRef = _j[0], setTargetRef = _j[1];
    var _k = React.useState(null), tooltipRef = _k[0], setTooltipRef = _k[1];
    var hasItems = items.length > 0;
    var hasMoreThanItems = items.length > 1;
    var _l = reactPopper.usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "bottom-start",
        modifiers: [{ name: "offset", options: { offset: [0, 0] } }],
    }), styles = _l.styles, attributes = _l.attributes;
    React.useEffect(function () {
        var showDropdownMenu = function () {
            setIsOpen(true);
        };
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            return target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu);
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu);
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen]);
    React.useEffect(function () {
        if (setMenuOpenByIndex && index !== undefined) {
            setMenuOpenByIndex(function (prevValue) {
                var _a;
                return (__assign(__assign({}, prevValue), (_a = {}, _a[index] = isOpen, _a)));
            });
        }
    }, [isOpen, setMenuOpenByIndex, index]);
    React.useEffect(function () {
        mobileMenuCallback && mobileMenuCallback(isOpen);
    }, [isOpen]);
    useOnClickOutside({
        current: targetRef,
    }, function () {
        setIsOpen(false);
    });
    return (React__default["default"].createElement(Box, __assign({ ref: setTargetRef }, props),
        React__default["default"].createElement(Box, { onPointerDown: function () {
                setIsOpen(function (s) { return !s; });
            } }, children),
        hasItems && (React__default["default"].createElement(StyledDropdownMenu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { "$isOpen": isOpen, "$isExtended": isExtended && hasMoreThanItems }), items.map(function (_a, itemItem) {
            var _b = _a.type, type = _b === void 0 ? exports.DropdownMenuItemType.INTERNAL_LINK : _b, label = _a.label, rightIconFill = _a.rightIconFill, description = _a.description, _c = _a.href, href = _c === void 0 ? "/" : _c, status = _a.status, _d = _a.leftIcon, leftIcon = _d === void 0 ? "" : _d, _e = _a.rightIcon, rightIcon = _e === void 0 ? "" : _e, _f = _a.links, links = _f === void 0 ? [] : _f, bannerRenderer = _a.bannerRenderer, itemProps = __rest(_a, ["type", "label", "rightIconFill", "description", "href", "status", "leftIcon", "rightIcon", "links", "bannerRenderer"]);
            var getMenuItemContent = function (icon) {
                if (icon === void 0) { icon = rightIcon; }
                return (React__default["default"].createElement(MenuItemContent, { label: label, fill: rightIconFill, leftIcon: leftIcon, rightIcon: icon, description: description, status: status }));
            };
            var isActive = href === activeItem;
            return (React__default["default"].createElement(DropdownMenuItemContainer, __assign({ key: itemItem, isActive: isActive, leftIcon: leftIcon, getMenuItemContent: getMenuItemContent, links: links, setIsOpen: setIsOpen, linkComponent: linkComponent, href: href, bannerRenderer: bannerRenderer, type: type }, itemProps)));
        })))));
};

var ItemTypes = {
    DIVIDER: 'DIVIDER',
};

var openBodyAnimation = styled.keyframes(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  0% {\n    opacity: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 1;\n    height: auto;\n  }\n"], ["\n  0% {\n    opacity: 0;\n    height: 0;\n  }\n  100% {\n    opacity: 1;\n    height: auto;\n  }\n"])));
var AccordionBody = styled__default["default"].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  display: ", ";\n  flex-direction: column;\n  overflow: hidden;\n\n  ", "\n"], ["\n  display: ", ";\n  flex-direction: column;\n  overflow: hidden;\n\n  ", "\n"])), function (_a) {
    var opened = _a.opened;
    return (opened ? "flex" : "none");
}, function (_a) {
    var opened = _a.opened;
    return opened && styled.css(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n      animation: ", " 0.6s ease;\n    "], ["\n      animation: ", " 0.6s ease;\n    "])), openBodyAnimation);
});
var AccordionTitle = styled__default["default"](Flex)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  cursor: pointer;\n"], ["\n  cursor: pointer;\n"])));
// const AccordionBodyItem = styled.div``;
var AccordionComponent = styled__default["default"].div(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var Accordion = function (_a) {
    var label = _a.label, _b = _a.clickable, clickable = _b === void 0 ? true : _b, heading = _a.heading, children = _a.children;
    var _c = React.useState(true), isOpened = _c[0], setIsOpened = _c[1];
    var onTitleClick = function () {
        clickable && setIsOpened(function (prev) { return !prev; });
    };
    return (React__default["default"].createElement(AccordionComponent, { key: "acc-key-".concat(label) },
        React__default["default"].createElement(AccordionTitle, { alignItems: "center", justifyContent: "space-between", onClick: onTitleClick }, heading(isOpened)),
        React__default["default"].createElement(AccordionBody, { opened: isOpened }, children)));
};
var templateObject_1$g, templateObject_2$b, templateObject_3$4, templateObject_4$2, templateObject_5$2;

var StyledMobileMenu = styled__default["default"].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  padding: 32px 24px 0 24px;\n  background-color: ", ";\n  width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  overflow: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n\n  ", "\n\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar-track {\n    -webkit-box-shadow: none;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  &::-webkit-slider-thumb {\n    display: none;\n  }\n"], ["\n  padding: 32px 24px 0 24px;\n  background-color: ", ";\n  width: 100vw;\n  height: 100vh;\n  min-height: 100vh;\n  overflow: auto;\n  visibility: visible;\n  opacity: 1;\n  transition: opacity 250ms linear, visibility 350ms linear;\n\n  ", "\n\n  scrollbar-width: none;\n  -ms-overflow-style: none;\n\n  &::-webkit-scrollbar-track {\n    -webkit-box-shadow: none;\n    background-color: transparent;\n  }\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n\n  &::-webkit-slider-thumb {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var $isOpen = _a.$isOpen;
    return !$isOpen &&
        "\n    pointer-events: none;\n    visibility: hidden;\n    opacity: 0;\n  ";
});
var MobileMenu = function (_a) {
    var items = _a.items, mobileMenuCallback = _a.mobileMenuCallback, children = _a.children, activeItem = _a.activeItem, props = __rest(_a, ["items", "mobileMenuCallback", "children", "activeItem"]);
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(null), targetRef = _c[0], setTargetRef = _c[1];
    var _d = React.useState(null), tooltipRef = _d[0], setTooltipRef = _d[1];
    var _e = useMatchBreakpoints(), isMobile = _e.isMobile, isTablet = _e.isTablet;
    var hasItems = items.length > 0;
    var _f = reactPopper.usePopper(targetRef, tooltipRef, {
        strategy: "fixed",
        placement: "auto-start",
    }), styles = _f.styles, attributes = _f.attributes;
    React.useEffect(function () {
        var showDropdownMenu = function () {
            setIsOpen(true);
        };
        var hideDropdownMenu = function (evt) {
            var target = evt.target;
            return target && !(tooltipRef === null || tooltipRef === void 0 ? void 0 : tooltipRef.contains(target)) && setIsOpen(false);
        };
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseenter", showDropdownMenu);
        targetRef === null || targetRef === void 0 ? void 0 : targetRef.addEventListener("mouseleave", hideDropdownMenu);
        return function () {
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseenter", showDropdownMenu);
            targetRef === null || targetRef === void 0 ? void 0 : targetRef.removeEventListener("mouseleave", hideDropdownMenu);
        };
    }, [targetRef, tooltipRef, setIsOpen]);
    React.useEffect(function () {
        mobileMenuCallback && mobileMenuCallback(isOpen);
    }, [isOpen]);
    useOnClickOutside({
        current: targetRef,
    }, function () {
        setIsOpen(false);
    });
    return (React__default["default"].createElement(Box, __assign({ ref: setTargetRef }, props),
        React__default["default"].createElement(Box, { onPointerDown: function () {
                setIsOpen(function (s) { return !s; });
            } }, children),
        hasItems && (React__default["default"].createElement(StyledMobileMenu, __assign({ style: styles.popper, ref: setTooltipRef }, attributes.popper, { "$isOpen": isOpen }), items
            .filter(function (item) { return item.label && !item.type; })
            .map(function (_a, index) {
            var label = _a.label, _b = _a.items, innerItems = _b === void 0 ? [] : _b, showItemsOnMobile = _a.showItemsOnMobile;
            var visualize = !showItemsOnMobile || (showItemsOnMobile && isMobile);
            return (React__default["default"].createElement(Box, { key: "".concat(label, "#").concat(index) },
                showItemsOnMobile && isMobile && (React__default["default"].createElement(Box, { m: "0 -24px 16px" },
                    React__default["default"].createElement(DropdownMenuDivider, null))),
                React__default["default"].createElement(Accordion, { label: label, clickable: !isTablet, heading: function (opened) {
                        return (!showItemsOnMobile && (React__default["default"].createElement(React__default["default"].Fragment, null,
                            React__default["default"].createElement(Text, { m: "16px 0", fontSize: isTablet ? "20px" : "14px", color: isMobile && opened ? "primary" : "text" }, label),
                            !isTablet && (React__default["default"].createElement(IconComponent, { iconName: opened ? "ChevronUp" : "ChevronDown", color: opened ? "primary" : "text" })))));
                    } },
                    React__default["default"].createElement(Grid, { gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gridColumnGap: 16 }, innerItems.map(function (_a, itemItem) {
                        var _b = _a.type, type = _b === void 0 ? exports.DropdownMenuItemType.INTERNAL_LINK : _b, label = _a.label, rightIconFill = _a.rightIconFill, description = _a.description, _c = _a.href, href = _c === void 0 ? "/" : _c, status = _a.status, _d = _a.leftIcon, leftIcon = _d === void 0 ? "" : _d, _e = _a.rightIcon, rightIcon = _e === void 0 ? "" : _e, _f = _a.links, links = _f === void 0 ? [] : _f, bannerRenderer = _a.bannerRenderer, itemProps = __rest(_a, ["type", "label", "rightIconFill", "description", "href", "status", "leftIcon", "rightIcon", "links", "bannerRenderer"]);
                        var getMenuItemContent = function (icon) {
                            if (icon === void 0) { icon = rightIcon; }
                            return (React__default["default"].createElement(MenuItemContent, { label: label, fill: rightIconFill, leftIcon: leftIcon, rightIcon: icon, description: description, status: status }));
                        };
                        var isActive = href === activeItem;
                        return (visualize && (React__default["default"].createElement(DropdownMenuItemContainer, __assign({ key: itemItem, isActive: isActive, leftIcon: leftIcon, getMenuItemContent: getMenuItemContent, links: links, setIsOpen: setIsOpen, linkComponent: linkComponent, href: href, bannerRenderer: bannerRenderer, type: type }, itemProps))));
                    }))),
                isTablet && !showItemsOnMobile && React__default["default"].createElement(DropdownMenuDivider, null)));
        })))));
};
var templateObject_1$f;

var MobileDropdownMenu = function (_a) {
    var items = _a.items, activeItem = _a.activeItem;
    var _b = React.useState(false), isOpened = _b[0], setIsOpened = _b[1];
    var isMobile = useMatchBreakpoints().isMobile;
    return (React__default["default"].createElement(MobileMenu, { items: items, mobileMenuCallback: setIsOpened, isMobileNav: true, activeItem: activeItem },
        React__default["default"].createElement(MenuItem, null,
            React__default["default"].createElement(IconComponent, { iconName: isOpened ? "ButtonMenuOpened" : "ButtonMenu", color: isMobile ? "text" : "white" }),
            !isMobile && React__default["default"].createElement(Text, { ml: "8px" }, "Menu"))));
};

var Divider = styled__default["default"](Box)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  opacity: 0.16;\n  border: 1px solid ", ";\n"], ["\n  opacity: 0.16;\n  border: 1px solid ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.white;
});
var MenuItemDivider = function () { return React__default["default"].createElement(Divider, { width: 0, height: 20 }); };
var templateObject_1$e;

var MenuItems = function (_a) {
    var _b = _a.items, items = _b === void 0 ? [] : _b, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, props = __rest(_a, ["items", "activeItem", "activeSubItem"]);
    var _c = useMatchBreakpoints(), isDesktop = _c.isDesktop, isTablet = _c.isTablet;
    return (React__default["default"].createElement(Flex, __assign({}, props, { alignItems: "center" }),
        !isDesktop && (React__default["default"].createElement(MobileDropdownMenu, { items: items, activeItem: activeItem })),
        items.map(function (_a) {
            var _b, _c;
            var label = _a.label, _d = _a.items, menuItems = _d === void 0 ? [] : _d, href = _a.href, _e = _a.icon, icon = _e === void 0 ? "" : _e, isExtended = _a.isExtended, showItemsOnMobile = _a.showItemsOnMobile, type = _a.type;
            var statusColor = (_c = (_b = menuItems === null || menuItems === void 0 ? void 0 : menuItems.find(function (menuItem) { return menuItem.status !== undefined; })) === null || _b === void 0 ? void 0 : _b.status) === null || _c === void 0 ? void 0 : _c.color;
            var isActive = activeItem === href;
            var linkProps = isTouchDevice() && menuItems && menuItems.length > 0
                ? {}
                : { href: href };
            var visualize = isDesktop || (isTablet && showItemsOnMobile);
            return (visualize && (React__default["default"].createElement(React__default["default"].Fragment, null,
                React__default["default"].createElement(DropdownMenu, { key: "".concat(label, "#").concat(href, "#").concat(icon), items: menuItems, py: 1, activeItem: activeSubItem, isExtended: isExtended },
                    React__default["default"].createElement(MenuItem, __assign({}, linkProps, { isActive: isActive, statusColor: statusColor }),
                        type === ItemTypes.DIVIDER && React__default["default"].createElement(MenuItemDivider, null),
                        icon && (React__default["default"].createElement(IconComponent, { iconName: icon, color: isActive ? "pastelBlue" : "white" })),
                        label && (React__default["default"].createElement(Text, { ml: "8px", color: isActive ? "pastelBlue" : "white" }, label)))))));
        })));
};

var blink = styled.keyframes(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"], ["\n  0%,  100% { transform: scaleY(1); }\n  50% { transform:  scaleY(0.1); }\n"])));
var StyledLink = styled__default["default"]("a")(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 145px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 145px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    _a.isDark; var href = _a.href;
    var linkComponent = React.useContext(MenuContext).linkComponent;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default["default"].createElement(React__default["default"].Fragment, null,
        React__default["default"].createElement(Icon$1y, { className: "mobile-icon" }),
        React__default["default"].createElement(Icon$E, { className: "desktop-icon" })));
    return (React__default["default"].createElement(Flex, null, isAbsoluteUrl ? (React__default["default"].createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React__default["default"].createElement(StyledLink, { href: href, as: linkComponent, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$1 = React__default["default"].memo(Logo, function (prev, next) { return prev.isDark === next.isDark; });
var templateObject_1$d, templateObject_2$a;

var getBanner = function () { return "<div>BANNER</div>"; };
var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
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
        label: "Trade",
        href: "/swap",
        items: [
            {
                label: "Swap",
                href: "/swap",
                leftIcon: "Swap",
                description: "Item description",
            },
            {
                label: "Expert Trade",
                leftIcon: "ExpertTrade",
                // rightIcon: "ArrowUpForward",
                rightIconFill: "primary",
                description: "Item description",
                href: "/liquidity",
            },
            {
                label: "Liquidity",
                href: "/pool",
                leftIcon: "Liquidity",
                description: "Item description",
            },
        ],
    },
    {
        label: "Earn",
        href: "/earn",
        items: [
            {
                label: "Farms",
                href: "/pool",
                leftIcon: "Farms",
                description: "Item description",
            },
            {
                label: "LaunchPools",
                href: "/pool",
                leftIcon: "Launch",
                description: "Item description",
                type: exports.DropdownMenuItemType.CONTAINER,
                links: [
                    {
                        label: "Stake BSW",
                        href: "/polar",
                    },
                    {
                        label: "Stake tokens",
                        href: "/polar",
                    },
                ],
            },
            {
                label: "Referral Program",
                href: "/pool",
                leftIcon: "Referral",
                description: "Item description",
            },
            {
                label: "IDO",
                href: "/pool",
                leftIcon: "IdoMenu",
                description: "Item description",
            },
        ],
    },
    {
        label: "Win",
        href: "/",
        items: [
            {
                label: "Lottery",
                href: "/pool",
                leftIcon: "Lottery",
                description: "Item description",
            },
            {
                label: "Competitions",
                href: "/pool",
                leftIcon: "Competitions",
                description: "Item description",
            },
        ],
    },
    {
        label: "NFT",
        href: "/",
        items: [
            {
                label: "NFT Launchpad",
                href: "/pool",
                leftIcon: "NftLaunch",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "NFT Earn",
                href: "/pool",
                leftIcon: "NftEarn",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                type: exports.DropdownMenuItemType.BANNER,
                bannerRenderer: getBanner,
            },
        ],
    },
    {
        label: "Info",
        href: "/",
        isExtended: true,
        items: [
            {
                label: "Analytics",
                href: "/pool",
                description: "Item description",
            },
            {
                label: "Voting",
                href: "/pool",
                description: "Item description",
            },
            {
                label: "About BSW",
                href: "/pool",
                description: "Item description",
            },
            {
                label: "Team",
                href: "/pool",
                description: "Item description",
            },
            {
                label: "$10M Program",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "News",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "Docs",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "Audit",
                href: "/pool",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
        ],
    },
    {
        type: ItemTypes.DIVIDER,
        showItemsOnMobile: true,
    },
    {
        label: "Biswap Products",
        href: "/",
        icon: "Products",
        isMobileNav: true,
        showItemsOnMobile: true,
        items: [
            {
                label: "Marketplace",
                href: "/pool",
                leftIcon: "MarketMenu",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
            {
                label: "GameFi",
                href: "/pool",
                leftIcon: "GameFi",
                description: "Item description",
                type: exports.DropdownMenuItemType.EXTERNAL_LINK,
            },
        ],
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
var TOP_BANNER_HEIGHT = 70;
var TOP_BANNER_HEIGHT_MOBILE = 84;
var MOBILE_EVENT_BUTTON_HEIGHT = 40;

var Icon$a = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default["default"].createElement("g", { opacity: "0.56" },
            React__default["default"].createElement("path", { d: "M18.6667 7.625L6 7.625C5.82319 7.625 5.65362 7.55586 5.5286 7.43279C5.40357 7.30972 5.33333 7.1428 5.33333 6.96875C5.33333 6.7947 5.40357 6.62778 5.5286 6.50471C5.65362 6.38164 5.82319 6.3125 6 6.3125L16.6667 6.3125C16.8435 6.3125 17.013 6.24336 17.1381 6.12029C17.2631 5.99722 17.3333 5.8303 17.3333 5.65625C17.3333 5.4822 17.2631 5.31528 17.1381 5.19221C17.013 5.06914 16.8435 5 16.6667 5L6 5C5.46975 5.0006 4.9614 5.20821 4.58646 5.57729C4.21151 5.94638 4.00061 6.44679 4 6.96875L4 17.0312C4.00061 17.5532 4.21151 18.0536 4.58646 18.4227C4.9614 18.7918 5.46975 18.9994 6 19H18.6667C19.0202 18.9996 19.3591 18.8612 19.609 18.6151C19.859 18.3691 19.9996 18.0355 20 17.6875V8.9375C19.9996 8.58953 19.859 8.25592 19.609 8.00986C19.3591 7.76381 19.0202 7.6254 18.6667 7.625ZM16.3333 14.5156C16.1356 14.5156 15.9422 14.4579 15.7778 14.3497C15.6133 14.2416 15.4851 14.0878 15.4095 13.908C15.3338 13.7281 15.314 13.5302 15.3525 13.3392C15.3911 13.1483 15.4864 12.9729 15.6262 12.8352C15.7661 12.6975 15.9443 12.6038 16.1382 12.5658C16.3322 12.5278 16.5333 12.5473 16.716 12.6218C16.8987 12.6963 17.0549 12.8225 17.1648 12.9844C17.2747 13.1462 17.3333 13.3366 17.3333 13.5313C17.3333 13.7923 17.228 14.0427 17.0404 14.2273C16.8529 14.4119 16.5985 14.5156 16.3333 14.5156Z" }))));
};

var rotate = styled.keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var StyledSVG = styled__default["default"].svg(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"], ["\n  animation: 2s ", " linear infinite;\n  height: ", ";\n  width: ", ";\n  path {\n    stroke: ", ";\n  }\n"
    /**
     * Takes in custom size and stroke for circle color, default to primary color as fill,
     * need ...rest for layered styles on top
     */
])), rotate, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var stroke = _a.stroke, theme = _a.theme;
    return stroke !== null && stroke !== void 0 ? stroke : theme.colors.primary;
});
/**
 * Takes in custom size and stroke for circle color, default to primary color as fill,
 * need ...rest for layered styles on top
 */
function Loader(_a) {
    var _b = _a.size, size = _b === void 0 ? '16px' : _b, stroke = _a.stroke, rest = __rest(_a, ["size", "stroke"]);
    return (React__default["default"].createElement(StyledSVG, __assign({ style: { marginLeft: '8px' }, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", size: size, stroke: stroke }, rest),
        React__default["default"].createElement("path", { d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5", strokeWidth: "2.5", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var templateObject_1$c, templateObject_2$9;

var Icon$9 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default["default"].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default["default"].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default["default"].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default["default"].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default["default"].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default["default"].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default["default"].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default["default"].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default["default"].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default["default"].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default["default"].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default["default"].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default["default"].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default["default"].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$8 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$7 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ width: "32", height: "32", viewBox: "0 0 1024 1024", fill: "none" }, props),
        React__default["default"].createElement("g", null,
            React__default["default"].createElement("path", { d: "M0,512a512,512 0 1,0 1024,0a512,512 0 1,0 -1024,0", fill: "#2980FE" }),
            React__default["default"].createElement("g", { clipPath: "url(#clip0_408_225)" },
                React__default["default"].createElement("path", { d: "M406.796 438.643H406.927C406.796 437.857 406.796 436.94 406.796 436.154V438.643Z", fill: "#29AEFF" }),
                React__default["default"].createElement("path", { d: "M667.602 463.533H523.249V724.076C523.249 736.389 533.204 746.345 545.517 746.345H645.333C657.647 746.345 667.602 736.389 667.602 724.076V463.533Z", fill: "white" }),
                React__default["default"].createElement("path", { d: "M453.563 277H448.716H190.269C177.955 277 168 286.955 168 299.269V389.653C168 401.967 177.955 411.922 190.269 411.922H250.918H275.021V438.644V724.731C275.021 737.045 284.976 747 297.289 747H392.128C404.441 747 414.396 737.045 414.396 724.731V438.644V436.156V411.922H438.499H448.323H453.17C490.372 411.922 520.631 381.663 520.631 344.461C521.024 307.259 490.765 277 453.563 277Z", fill: "white" }),
                React__default["default"].createElement("path", { d: "M667.735 463.533V645.35C672.713 646.529 677.821 647.446 683.061 648.232C690.397 649.28 697.994 649.935 705.592 650.066C705.985 650.066 706.378 650.066 706.902 650.066V505.45C685.026 504.009 667.735 485.801 667.735 463.533Z", fill: "url(#paint0_linear_408_225)" }),
                React__default["default"].createElement("path", { d: "M709.781 277C606.822 277 523.249 360.573 523.249 463.533C523.249 552.084 584.946 626.225 667.733 645.35V463.533C667.733 440.347 686.596 421.484 709.781 421.484C732.967 421.484 751.83 440.347 751.83 463.533C751.83 483.051 738.6 499.425 720.523 504.14C717.117 505.057 713.449 505.581 709.781 505.581V650.066C713.449 650.066 716.986 649.935 720.523 649.804C818.505 644.171 896.314 562.956 896.314 463.533C896.445 360.573 812.872 277 709.781 277Z", fill: "white" }),
                React__default["default"].createElement("path", { d: "M709.78 650.066V505.581C708.733 505.581 707.816 505.581 706.768 505.45V650.066C707.816 650.066 708.864 650.066 709.78 650.066Z", fill: "white" }))),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("linearGradient", { id: "paint0_linear_408_225", x1: "709.844", y1: "556.827", x2: "667.753", y2: "556.827", gradientUnits: "userSpaceOnUse" },
                React__default["default"].createElement("stop", { stopColor: "white" }),
                React__default["default"].createElement("stop", { offset: "0.9667", stopColor: "white", stopOpacity: "0.3233" }),
                React__default["default"].createElement("stop", { offset: "1", stopColor: "white", stopOpacity: "0.3" })),
            React__default["default"].createElement("clipPath", { id: "clip0_408_225" },
                React__default["default"].createElement("rect", { width: "728.448", height: "470", fill: "white", transform: "translate(168 277)" })))));
};

var Icon$6 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("g", { clipPath: "url(#clip0)" },
            React__default["default"].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default["default"].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default["default"].createElement("defs", null,
            React__default["default"].createElement("clipPath", { id: "clip0" },
                React__default["default"].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$5 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default["default"].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$4 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default["default"].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default["default"].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default["default"].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$3 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React__default["default"].createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon$2 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 40 40" }, props),
        React__default["default"].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.13298 26.6579C3.13253 26.6921 3.1323 26.7263 3.1323 26.7606C3.1323 30.9564 6.53367 34.3577 10.7295 34.3577C14.9253 34.3577 18.3266 30.9564 18.3266 26.7606C18.3266 26.7263 18.3264 26.6921 18.326 26.6579H14.732C14.7329 26.692 14.7333 26.7262 14.7333 26.7606C14.7333 28.9719 12.9407 30.7645 10.7294 30.7645C8.51812 30.7645 6.7255 28.9719 6.7255 26.7606C6.7255 26.7262 6.72593 26.692 6.72679 26.6579H3.13298ZM10.7295 5.71436C15.6624 5.71436 19.6613 9.71326 19.6613 14.6462C19.6613 19.5791 15.6624 23.578 10.7295 23.578C5.79663 23.578 1.79773 19.5791 1.79773 14.6462C1.79773 9.71326 5.79663 5.71436 10.7295 5.71436ZM10.7295 9.3076C13.6779 9.3076 16.0681 11.6977 16.0681 14.6461C16.0681 17.5945 13.6779 19.9847 10.7295 19.9847C7.78111 19.9847 5.39096 17.5945 5.39096 14.6461C5.39096 11.6977 7.78111 9.3076 10.7295 9.3076ZM11.3454 12.9033C12.0632 13.157 12.5775 13.8415 12.5775 14.6462C12.5775 15.6668 11.7501 16.4941 10.7295 16.4941C9.70893 16.4941 8.88157 15.6668 8.88157 14.6462C8.88157 13.8416 9.39577 13.1571 10.1135 12.9034V11.6689H11.3454V12.9033ZM22.7464 16.9552C22.154 15.8735 21.8172 14.6318 21.8172 13.3115C21.8172 9.11573 25.2186 5.71436 29.4144 5.71436C33.6102 5.71436 37.0115 9.11573 37.0115 13.3115C37.0115 14.6319 36.6747 15.8735 36.0823 16.9553C35.1444 16.216 34.0807 15.6291 32.9286 15.232C33.2408 14.6618 33.4183 14.0074 33.4183 13.3115C33.4183 11.1002 31.6257 9.30761 29.4144 9.30761C27.2031 9.30761 25.4105 11.1002 25.4105 13.3115C25.4105 14.0074 25.588 14.6618 25.9002 15.2319C24.7481 15.629 23.6844 16.2159 22.7464 16.9552ZM29.4144 34.3577C34.3473 34.3577 38.3462 30.3588 38.3462 25.4259C38.3462 20.493 34.3473 16.4941 29.4144 16.4941C24.4815 16.4941 20.4826 20.493 20.4826 25.4259C20.4826 30.3588 24.4815 34.3577 29.4144 34.3577ZM29.4144 30.7645C32.3628 30.7645 34.7529 28.3743 34.7529 25.4259C34.7529 22.4775 32.3628 20.0874 29.4144 20.0874C26.466 20.0874 24.0758 22.4775 24.0758 25.4259C24.0758 28.3743 26.466 30.7645 29.4144 30.7645ZM30.0303 27.1688C30.7481 26.9151 31.2624 26.2306 31.2624 25.4259C31.2624 24.4053 30.435 23.578 29.4144 23.578C28.3938 23.578 27.5665 24.4053 27.5665 25.4259C27.5665 26.2305 28.0807 26.915 28.7984 27.1687V28.4032H30.0303V27.1688Z", fill: "#DEAE30" })));
};

var Icon$1 = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default["default"].createElement("path", { d: "M0 21.5327C0 9.64052 9.64052 0 21.5327 0H74.4673C86.3595 0 96 9.64052 96 21.5327V74.4673C96 86.3595 86.3595 96 74.4673 96H21.5327C9.64052 96 0 86.3595 0 74.4673V21.5327Z", fill: "#0A59FF" }),
        React__default["default"].createElement("path", { d: "M81.8692 48C81.8692 66.7054 66.7054 81.8692 48 81.8692C29.2946 81.8692 14.1309 66.7054 14.1309 48C14.1309 29.2946 29.2946 14.1309 48 14.1309C66.7054 14.1309 81.8692 29.2946 81.8692 48Z", fill: "white" }),
        React__default["default"].createElement("path", { d: "M37.0094 39.7009C37.0094 38.2143 38.2145 37.0093 39.701 37.0093H56.2991C57.7856 37.0093 58.9907 38.2143 58.9907 39.7009V56.299C58.9907 57.7855 57.7856 58.9906 56.2991 58.9906H39.701C38.2145 58.9906 37.0094 57.7855 37.0094 56.299V39.7009Z", fill: "#0A59FF" })));
};

var Icon = function (props) {
    return (React__default["default"].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default["default"].createElement("circle", { cx: "16", cy: "16", r: "16", fill: "white" }),
        React__default["default"].createElement("g", { transform: "translate(0,32) scale(0.1,-0.1)", stroke: "none" },
            React__default["default"].createElement("path", { fill: "#01003b", d: "M157 253 c-3 -15 -19 -46 -36 -67 -17 -21 -31 -45 -31 -53 0 -28 31 -72 51 -73 3 0 4 14 1 30 -3 21 3 42 22 70 29 44 31 64 12 99 l-13 23 -6 -29z" }),
            React__default["default"].createElement("path", { fill: "#3e89d0", d: "M198 158 c-22 -34 -30 -66 -21 -83 8 -13 12 -13 31 5 22 21 29 64 13 88 -6 10 -12 8 -23 -10z" }))));
};

exports.ConnectorNames = void 0;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
})(exports.ConnectorNames || (exports.ConnectorNames = {}));

var connectors = [
    {
        title: "Metamask",
        icon: Icon$9,
        connectorId: exports.ConnectorNames.Injected,
        priority: 1,
    },
    {
        title: "TrustWallet",
        icon: Icon$6,
        connectorId: exports.ConnectorNames.Injected,
        priority: 2,
    },
    {
        title: "MathWallet",
        icon: Icon$8,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "TokenPocket",
        icon: Icon$7,
        connectorId: exports.ConnectorNames.Injected,
        priority: 4
    },
    {
        title: "Coin98",
        icon: Icon$2,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "WalletConnect",
        icon: Icon$5,
        connectorId: exports.ConnectorNames.WalletConnect,
        priority: 3,
    },
    {
        title: "Binance Chain",
        icon: Icon$4,
        connectorId: exports.ConnectorNames.BSC,
        priority: 999,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$3,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Coinbase Wallet",
        icon: Icon$1,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
    {
        title: "Huobi Wallet",
        icon: Icon,
        connectorId: exports.ConnectorNames.Injected,
        priority: 999,
    },
];
var connectorLocalStorageKey = "connectorId";
var walletLocalStorageKey = "wallet";

var StyledButton = styled__default["default"](Button)(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 8px 0 0;\n  white-space: nowrap;\n  min-height: 91px;\n"], ["\n  display: flex; \n  flex-direction: column;\n  justify-content: space-around;\n  padding: 8px 0 0;\n  white-space: nowrap;\n  min-height: 91px;\n"])));
var StyledText = styled__default["default"](Text)(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  font-weight: bold;\n  color: ", ";\n"], ["\n  font-weight: bold;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default["default"].createElement(StyledButton, { variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            localStorage.setItem(walletLocalStorageKey, walletConfig.title);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, id: "wallet-connect-".concat(title.toLocaleLowerCase()) },
        React__default["default"].createElement(Icon, { width: "32px" }),
        React__default["default"].createElement(StyledText, null, title)));
};
var templateObject_1$b, templateObject_2$8;

var HelpLink = styled__default["default"](Link)(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 40px;\n  \n  ", " {\n    margin-top: 24px;\n  }\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 40px;\n  \n  ", " {\n    margin-top: 24px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Wrapper$3 = styled__default["default"].div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n"], ["\n"])));
var WalletCardsWrapper = styled__default["default"].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"], ["\n  display: grid;\n  grid-gap: 16px;\n  width: 100%;\n  grid-template-columns: repeat(2, 1fr);\n"])));
var getPreferredConfig = function (walletConfig) {
    var preferredWalletName = localStorage.getItem(walletLocalStorageKey);
    var sortedConfig = walletConfig.sort(function (a, b) { return a.priority - b.priority; });
    if (!preferredWalletName) {
        return sortedConfig;
    }
    var preferredWallet = sortedConfig.find(function (sortedWalletConfig) { return sortedWalletConfig.title === preferredWalletName; });
    if (!preferredWallet) {
        return sortedConfig;
    }
    return __spreadArray([
        preferredWallet
    ], sortedConfig.filter(function (sortedWalletConfig) { return sortedWalletConfig.title !== preferredWalletName; }), true);
};
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    var sortedConfig = getPreferredConfig(connectors);
    return (React__default["default"].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        React__default["default"].createElement(Wrapper$3, null,
            React__default["default"].createElement(WalletCardsWrapper, null, sortedConfig.map(function (entry) { return (React__default["default"].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss })); })),
            React__default["default"].createElement(HelpLink, { href: "https://docs.biswap.org/faq/biswap-platform#how-do-i-connect-my-wallet-to-biswap", external: true },
                React__default["default"].createElement(Icon$1B, { color: "primary", mr: "6px" }),
                "Learn how to connect"))));
};
var templateObject_1$a, templateObject_2$7, templateObject_3$3;

var StyleButton = styled__default["default"](Text).attrs({ role: "button" })(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default["default"].div(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default["default"].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(toCopy);
                setIsTooltipDisplayed(true);
                setTimeout(function () {
                    setIsTooltipDisplayed(false);
                }, 1000);
            }
        } }, props),
        children,
        React__default["default"].createElement(Icon$1C, { width: "20px", color: "primary", ml: "4px" }),
        React__default["default"].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$9, templateObject_2$6;

var Wrapper$2 = styled__default["default"].div(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  padding-bottom: 64px;\n\n  ", " {\n    padding: 0;\n  }\n"], ["\n  padding-bottom: 64px;\n\n  ", " {\n    padding: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ConnectedWrapper = styled__default["default"].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"])));
var TransactionWrapper = styled__default["default"].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"], ["\n  border-radius: 16px;\n  padding: 24px;\n  background-color: #F2F6FC;\n"])));
var AccountModal = function (_a) {
    var transactionsForUIKit = _a.transactionsForUIKit, isSwap = _a.isSwap, account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b, login = _a.login, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction;
    var onPresentConnectModal = useWalletModal(login, logout, account, recentTransaction, chainId).onPresentConnectModal;
    var changeWalletHandler = function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, onDismiss()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, logout()];
                case 2:
                    _a.sent();
                    onPresentConnectModal();
                    return [2 /*return*/];
            }
        });
    }); };
    var ClearAndDismiss = function () {
        clearTransaction();
        onDismiss();
    };
    return (React__default["default"].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default["default"].createElement(Wrapper$2, null,
            React__default["default"].createElement(ConnectedWrapper, null,
                React__default["default"].createElement(Text, { fontSize: '14px', fontWeight: '400', lineHeight: '21px', color: '#1DC872' }, "Connected"),
                React__default["default"].createElement(Button, { onClick: changeWalletHandler, scale: 'sm', variant: 'primary' }, "Change")),
            React__default["default"].createElement(Text, { fontSize: "14px", fontWeight: '600', color: '#07162D', style: {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    marginBottom: "8px",
                    marginTop: '16px'
                } }, account),
            React__default["default"].createElement(Flex, { mb: "32px" },
                React__default["default"].createElement(CopyToClipboard, { toCopy: account }, "Copy Address"),
                React__default["default"].createElement(LinkExternal, { ml: '26px', small: true, href: "https://bscscan.com/address/".concat(account), mr: "16px" }, "View on BscScan")),
            isSwap && (React__default["default"].createElement(TransactionWrapper, null,
                React__default["default"].createElement(Flex, { justifyContent: 'space-between', alignItems: 'center' },
                    React__default["default"].createElement(Text, { fontSize: '14px', fontWeight: '600', lineHeight: '21px', color: '#07162D' }, "Recent transactions"),
                    React__default["default"].createElement(Button, { m: 0, p: 0, scale: 'sm', variant: 'text', onClick: ClearAndDismiss }, "Clear All")),
                React__default["default"].createElement(React__default["default"].Fragment, null, transactionsForUIKit()))),
            React__default["default"].createElement(Flex, null,
                React__default["default"].createElement(Button, { style: { width: '100%' }, mt: '24px', variant: "tertiaryOut", onClick: function () {
                        logout();
                        onDismiss();
                    } }, "Logout")))));
};
var templateObject_1$8, templateObject_2$5, templateObject_3$2;

var useWalletModal = function (login, logout, account, recentTransaction, chainId, clearTransaction, isSwap, transactionsForUIKit) {
    var onPresentConnectModal = useModal(React__default["default"].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default["default"].createElement(AccountModal, { transactionsForUIKit: transactionsForUIKit, isSwap: isSwap, login: login, recentTransaction: recentTransaction, chainId: chainId, account: account || "", logout: logout, clearTransaction: clearTransaction }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var WalletWrap = styled__default["default"].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  background: ", ";\n  border-radius: 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  background: ", ";\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.card;
});
// const CurrencyValue = styled.div`
//   padding: 0 16px;
// `;
var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout, pendingTransactions = _a.pendingTransactions, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction, isSwap = _a.isSwap, transactionsForUIKit = _a.transactionsForUIKit;
    var _b = useWalletModal(login, logout, account, recentTransaction, chainId, clearTransaction, isSwap, transactionsForUIKit), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? "".concat(account.substring(0, 4), "...").concat(account.substring(account.length - 4)) : null;
    var iconProps = { width: "24px", color: "white", style: { cursor: "pointer" } };
    var _c = useMatchBreakpoints(), isSm = _c.isSm, isXs = _c.isXs;
    return (React__default["default"].createElement("div", null, account ? (React__default["default"].createElement(WalletWrap, null,
        React__default["default"].createElement(Button, { variant: pendingTransactions ? "success" : "primary", scale: isSm || isXs ? 'md' : 'lg', onClick: function () {
                onPresentAccountModal();
            } }, pendingTransactions ? (React__default["default"].createElement(React__default["default"].Fragment, null,
            pendingTransactions,
            " pending ",
            React__default["default"].createElement(Loader, { stroke: "#fff" }))) : (React__default["default"].createElement(React__default["default"].Fragment, null,
            !isSm && !isXs && (React__default["default"].createElement(Icon$a, __assign({}, iconProps, { mr: "8px" }))),
            accountEllipsis))))) : (React__default["default"].createElement(Button, { scale: isSm || isXs ? 'md' : 'lg', onClick: function () {
            onPresentConnectModal();
        } },
        !isSm && !isXs && (React__default["default"].createElement(Icon$a, __assign({}, iconProps, { mr: "8px" }))),
        "Connect wallet"))));
};
var templateObject_1$7;

var Wrapper$1 = styled__default["default"].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  margin-right: 0;\n\n  ", " {\n    margin-right: 10px;\n  }\n"], ["\n  margin-right: 0;\n\n  ", " {\n    margin-right: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var StyledBtn = styled__default["default"](Button)(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  background: linear-gradient(79.91deg, #1263F1 -19.82%, #543FD7 48.01%, #F93B5D 173.07%);\n"], ["\n  background: linear-gradient(79.91deg, #1263F1 -19.82%, #543FD7 48.01%, #F93B5D 173.07%);\n"])));
var BDayEvent = function (_a) {
    var login = _a.login, logout = _a.logout, account = _a.account, callback = _a.callback;
    var isMobile = useMatchBreakpoints().isMobile;
    var onPresentConnectModal = useWalletModal(login, logout).onPresentConnectModal;
    var onClickHandler = function () {
        if (account && callback)
            callback();
        if (!account)
            onPresentConnectModal();
    };
    return (React__default["default"].createElement(Wrapper$1, null,
        React__default["default"].createElement(StyledBtn, { flat: isMobile, width: isMobile && '100%', scale: "md", onClick: onClickHandler }, "B-Day Presents")));
};
var templateObject_1$6, templateObject_2$4;

var Wrapper = styled__default["default"].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default["default"].nav(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  transform: translate3d(0, 0, 0);\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    background-color: transparent;\n  }\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  transform: translate3d(0, 0, 0);\n  padding-left: 16px;\n  padding-right: 16px;\n\n  ", " {\n    background-color: transparent;\n  }\n"])), MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var FixedContainer = styled__default["default"].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  height: ", ";\n  width: 100%;\n  z-index: 20;\n"])), function (_a) {
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
    var _c = _a.linkComponent, linkComponent = _c === void 0 ? "a" : _c; _a.userMenu; var banner = _a.banner, isDark = _a.isDark, links = _a.links, subLinks = _a.subLinks, activeItem = _a.activeItem, activeSubItem = _a.activeSubItem, children = _a.children, BSWPriceLabel = _a.BSWPriceLabel, BSWPriceValue = _a.BSWPriceValue, footerStatistic = _a.footerStatistic, onClick = _a.onClick, buyBswLink = _a.buyBswLink, aboutLinks = _a.aboutLinks, productLinks = _a.productLinks, serviceLinks = _a.serviceLinks; _a.currentNetwork; _a.networkChangeToBSC; _a.networkChangeToAvalanche; var account = _a.account, login = _a.login, logout = _a.logout, pendingTransactions = _a.pendingTransactions, recentTransaction = _a.recentTransaction, chainId = _a.chainId, clearTransaction = _a.clearTransaction, isSwap = _a.isSwap, transactionsForUIKit = _a.transactionsForUIKit, withEvent = _a.withEvent, eventCallback = _a.eventCallback;
    var isMobile = useMatchBreakpoints().isMobile;
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(typeof window === "undefined" ? 0 : window.pageYOffset);
    var topBannerHeight = isMobile
        ? TOP_BANNER_HEIGHT_MOBILE
        : TOP_BANNER_HEIGHT;
    var TopMenuWithBannerHeight = banner
        ? MENU_HEIGHT + topBannerHeight
        : MENU_HEIGHT;
    var totalTopMenuHeight = withEvent && isMobile
        ? TopMenuWithBannerHeight + MOBILE_EVENT_BUTTON_HEIGHT
        : TopMenuWithBannerHeight;
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight ===
                currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current ||
                    currentOffset <= totalTopMenuHeight) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default["default"](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, [totalTopMenuHeight]);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default["default"].createElement(MenuContext.Provider, { value: { linkComponent: linkComponent } },
        React__default["default"].createElement(Wrapper, null,
            React__default["default"].createElement(FixedContainer, { showMenu: showMenu, height: totalTopMenuHeight },
                banner && (React__default["default"].createElement(TopBannerContainer, { height: topBannerHeight }, banner)),
                React__default["default"].createElement(StyledNav, null,
                    React__default["default"].createElement(Flex, null,
                        React__default["default"].createElement(Logo$1, { isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
                        React__default["default"].createElement(MenuItems, { items: links, activeItem: activeItem, activeSubItem: activeSubItem, ml: "24px" })),
                    React__default["default"].createElement(Flex, { alignItems: "center", height: "100%" },
                        withEvent && !isMobile && (React__default["default"].createElement(BDayEvent, { account: account, login: login, logout: logout, callback: eventCallback })),
                        React__default["default"].createElement(UserBlock, { clearTransaction: clearTransaction, account: account, login: login, logout: logout, recentTransaction: recentTransaction, chainId: chainId, pendingTransactions: pendingTransactions, isSwap: isSwap, transactionsForUIKit: transactionsForUIKit }))),
                withEvent && isMobile && (React__default["default"].createElement(BDayEvent, { account: account, login: login, logout: logout, callback: eventCallback }))),
            React__default["default"].createElement(BodyWrapper, { mt: !subLinks ? "".concat(totalTopMenuHeight + 1, "px") : "0" },
                React__default["default"].createElement(Inner, { isPushed: false, showMenu: showMenu },
                    children,
                    React__default["default"].createElement(Footer, { BSWPriceLabel: BSWPriceLabel, BSWPriceValue: BSWPriceValue, footerStatistic: footerStatistic, onClick: onClick, buyBswLink: buyBswLink, aboutLinks: aboutLinks, productLinks: productLinks, serviceLinks: serviceLinks }))))));
};
var templateObject_1$5, templateObject_2$3, templateObject_3$1, templateObject_4$1, templateObject_5$1, templateObject_6$1;

var UserMenuDivider = styled__default["default"].hr(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"], ["\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0 0;\n  margin: 4px 0;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var UserMenuItem = styled__default["default"].button(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"], ["\n  align-items: center;\n  border: 0;\n  background: transparent;\n  color: ", ";\n  cursor: ", ";\n  display: flex;\n  font-size: 16px;\n  height: 48px;\n  justify-content: space-between;\n  outline: 0;\n  padding-left: 16px;\n  padding-right: 16px;\n  width: 100%;\n\n  &:hover:not(:disabled) {\n    background-color: ", ";\n  }\n\n  &:active:not(:disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n  }\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "textSubtle"];
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "not-allowed" : "pointer");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
});
var templateObject_1$4, templateObject_2$2;

var giftImg = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANWSURBVHgB7ZTdaxRXGMafc+ZjZ8zudrJht2uT6MYYU5WSgFAKvbFQWqS9EWpbclEQCqWXgfaid70oQqFg/4FC6VXBgk1LrwpFaKsxKiZ+RQ3qBj+iJuvOZndn5+N8eGbUIMSYXe8U32GYM2cO5zfP+z7vAV7GCxuV+fkdtVptvN31dL0Fd8rlvcuue7jRaIw+mluYnS1FrvseQvau53l9aCPIegtuX7lymOr6iOU43cHlq3tR6mvIVusXWnH/JIvVPfzytTKs1Bt6JG/lvhx7+9lBl+a+4Ro9IAlx7VeyDhcCuLsEuViBSSjYwl0QDhi7dqL100S6+MPXzSfto68FuPHtwY/opo3f8/9PbjHfHAUt5h1CCMTvf4P9OwXJBUJKoKe7YKazEKPbkWJNA+0quvHJFyMyxI9CiN2MR7APfAXZ0w31DjF9AQvfHYRUV8QZqFLUOzyMdC4PbexDN/fWru61QKsUNbf2fr7439RuziK0wgh9fgu09sAzWi6LmteAEqb+UF1q4N+rwrYz0Berjty3TyOHDvEngVa5zurf+IcwKCLBIKXE8szZB2qEhOh2QDMbEHKeKArVzzSWa4B6V2mGWxhZ04GrQHZu6zEt3zPtRUoRC1E9fhJhGCIIfHgtD2RoAI0oQD3y0VKp1a0UaMqEDCIwKkptgwofv9Po3fP+WLYnB9swEJ2YgViqwFBj0zThbH8dGcNE1rSRNhREmUIwla26SumOwYG2QXGUPvt0dkOxcEcnGixdhzdzDpTS5La2bUnqoxGS1Cr0Q0ilXrp1aJbV3xEoDs00f42f8abR3LWk8HHom/sTYOJXqUAsAFeplUsusG1zT8egrnx+Qp0IyX7B+Ysr89yyYBVfTcwRR8QYWBBAVmrQhku3OgalhjadNpx0XVlPed6DP3/94RcJa+fww5EEE1yBfIiqC0nlzY5BA/v3u2Ymc0omiwia52dXvhmlvsT6CUxZP/KVItVzQXV5qmNQoqrLnogrHqePla+vzFtDgwkoZqmTD6FSxO/V/yoMDs49Ewii9bM09SNMo5P1M+fKXDVm3LykWFBFtFXfqJoRiabqKb9e/e1pW617ej8ek5OTQ1TQ1zjhpGhZ00fGx+EAjhlS+cHRf+bxMp7ruA9B8HiZzFdvegAAAABJRU5ErkJggg==";

var ActionsContainer = styled__default["default"].div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  display: flex;\n  justify-content: flex-start;\n"], ["\n  display: flex;\n  justify-content: flex-start;\n"])));
var StyledIcon = styled__default["default"].img(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"], ["\n  width: 26px;\n  filter: drop-shadow(2px 4px 8px rgba(0, 109, 163, 0.4));\n"])));
var ToastAction = function (_a) {
    _a.title; var telegramDescription = _a.telegramDescription, tweeterDescription = _a.tweeterDescription, url = _a.url; _a.thx;
    return (React__default["default"].createElement(ActionsContainer, null,
        React__default["default"].createElement(reactShare.TwitterShareButton, { style: { width: '35%' }, title: tweeterDescription, url: "".concat(url) },
            React__default["default"].createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#16CDFD', alignItems: "center" } },
                React__default["default"].createElement(StyledIcon, { src: giftImg, alt: "gift-icon" }),
                React__default["default"].createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Twitter"),
                React__default["default"].createElement(Icon$y, { mr: "8px", color: "#fff", width: "20px" }))),
        React__default["default"].createElement(reactShare.TelegramShareButton, { style: { width: '35%', marginLeft: "10px", alignItems: "center" }, title: telegramDescription, url: "".concat(url) },
            React__default["default"].createElement(Button, { scale: "sm", width: '100%', style: { backgroundColor: '#26A6E5', alignItems: "center" } },
                React__default["default"].createElement(Text, { color: '#fff', fontSize: '12px', bold: true }, "Telegram"),
                React__default["default"].createElement(Icon$z, { mr: "8px", color: "#fff", width: "20px" })))));
};
var templateObject_1$3, templateObject_2$1;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$4.INFO,
    _a[types.SUCCESS] = variants$4.SUCCESS,
    _a[types.DANGER] = variants$4.DANGER,
    _a[types.WARNING] = variants$4.WARNING,
    _a);
var ClearAllButton = styled__default["default"](Button)(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"], ["\n  position: absolute;\n  right: 0;\n  top: ", ";\n"])), function (_a) {
    var top = _a.top;
    return "".concat(-top, "px");
});
var StyledToast = styled__default["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"], ["\n  left: 50%;\n  transform: translate(-50%, 0);\n  position: fixed;\n  max-width: calc(100% - 12px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  box-shadow: 0px -4px 11px rgba(0, 0, 0, 0.1), 0px 20px 36px -8px rgba(14, 14, 44, 0.32), 0px 1px 1px rgba(0, 0, 0, 0.16);\n  border-radius: 16px;\n\n  ", " {\n    transform: none;\n    left: auto;\n    right: 35px;\n    max-width: 350px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var ProgressWrapper = styled__default["default"].div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"], ["\n  background-color: ", "\n  bottom: 0;\n  min-height: 5px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
});
var ProgressLine = styled__default["default"].div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"], ["\n  background-color: ", ";\n  height: 5px;\n  transition: 100ms all;\n  border-radius: 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
var AlertWrapper = styled__default["default"].div(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  padding: 0 16px;\n"], ["\n  padding: 0 16px;\n"])));
var LinkWrapper = styled__default["default"].div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"], ["\n  margin: 14px 0 11px 0;\n  display: flex;\n  align-items: center;\n"])));
var LinkStyles = styled__default["default"].a(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"], ["\n color: ", ";\n font-size: 14px;\n font-weight: 700;\n line-height: 21px;\n  text-decoration: underline;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var SharingText = styled__default["default"].div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n"], ["\n  display: flex;\n  flex-direction: row;\n"])));
var ActionContainer = styled__default["default"].div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n"], ["\n"])));
var Toast = function (_a) {
    var _b = _a.removeButtonPosition, removeButtonPosition = _b === void 0 ? 60 : _b, clearAll = _a.clearAll, toast = _a.toast, style = _a.style, handleMouseEnter = _a.handleMouseEnter, handleMouseLeave = _a.handleMouseLeave, handleRemove = _a.handleRemove, progress = _a.progress, props = __rest(_a, ["removeButtonPosition", "clearAll", "toast", "style", "handleMouseEnter", "handleMouseLeave", "handleRemove", "progress"]);
    var description = toast.description, type = toast.type, title = toast.title, telegramDescription = toast.telegramDescription, tweeterDescription = toast.tweeterDescription, hash = toast.hash, url = toast.url;
    return (React__default["default"].createElement(reactTransitionGroup.CSSTransition, __assign({ timeout: 250, style: style }, props),
        React__default["default"].createElement(StyledToast, { onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            clearAll && (React__default["default"].createElement(ClearAllButton, { variant: 'text', top: removeButtonPosition, onClick: function () { return clearAll(); } },
                React__default["default"].createElement(Text, { fontSize: '16px', color: '#1263F1', lineHeight: '19px' }, "Clear All"))),
            React__default["default"].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove },
                React__default["default"].createElement(AlertWrapper, null,
                    hash &&
                        React__default["default"].createElement(LinkWrapper, null,
                            React__default["default"].createElement(LinkStyles, { target: "_blank", href: "https://bscscan.com/tx/".concat(hash) }, "View on bscscan"),
                            React__default["default"].createElement(Icon$19, { ml: '7px', width: '18px', height: '18px', color: 'primary' })),
                    description ? React__default["default"].createElement(Text, { color: "#6B7D98", fontSize: "12px", as: "p", mb: "8px", dangerouslySetInnerHTML: { __html: description } }) : React__default["default"].createElement(React__default["default"].Fragment, null),
                    telegramDescription && tweeterDescription && (React__default["default"].createElement(ActionContainer, null,
                        React__default["default"].createElement(ToastAction, { telegramDescription: telegramDescription, tweeterDescription: tweeterDescription, title: title, url: url, thx: "https://bscscan.com/tx/".concat(hash) }),
                        React__default["default"].createElement(Button, { p: "0", scale: "sm", variant: 'text', as: 'a', href: 'https://docs.biswap.org/sharing-season', target: "_blank" },
                            React__default["default"].createElement(SharingText, null,
                                React__default["default"].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98' }, "*Check"),
                                React__default["default"].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: "#1263F1", ml: "2px" }, "Sharing Season"),
                                React__default["default"].createElement(Text, { fontSize: '10px', pl: '0', fontWeight: '400', lineHeight: '12px', color: '#6b7d98', ml: "2px" }, "details")))))),
                React__default["default"].createElement("div", { style: { width: '100%' } },
                    React__default["default"].createElement(ProgressWrapper, { style: { width: '100%' } }, progress ? React__default["default"].createElement(ProgressLine, { style: { width: "".concat(100 - progress, "%") } }) : null))))));
};
var templateObject_1$2, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;

var ZINDEX = 1000;
var BOTTOM_POSITION = 120; // Initial position from the bottom
var StyledToastContainer = styled__default["default"].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var clearAll = _a.clearAll, toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 10000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 8 : _c;
    var _d = React.useState(100), progress = _d[0], setProgress = _d[1];
    var _e = React.useState(true), progressRun = _e[0], setProgressRun = _e[1];
    var _f = React.useState(ttl), currentTime = _f[0], setCurrentTime = _f[1];
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
                if (progressRun && (timeToRemove - percent) >= 0) {
                    setProgress((timeToRemove - percent) / percent);
                }
            }, 100);
        }
        if (toasts.length && progressRun) {
            intervalRef.current = window.setTimeout(function () {
                var timeToRemove = ttl * progress / 100;
                var percent = ttl / 100;
                setCurrentTime(timeToRemove > 0 ? timeToRemove : 0);
                if (progressRun && (timeToRemove - percent) >= 0) {
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
        timer.current = window.setTimeout(function () {
        }, currentTime);
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
    return (React__default["default"].createElement(StyledToastContainer, null,
        React__default["default"].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var bottom = BOTTOM_POSITION + index * stackSpacing;
            var removeButtonPosition = stackSpacing * toasts.length + 40;
            if (index === 0)
                return React__default["default"].createElement(Toast, { handleRemove: handleRemove, handleMouseEnter: handleMouseEnter, handleMouseLeave: handleMouseLeave, progress: progress, key: toast.id, toast: toast, zIndex: zIndex, ttl: ttl, removeButtonPosition: removeButtonPosition, clearAll: toasts.length > 1 ? clearAllHandler : undefined, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex } });
            return (React__default["default"].createElement(Toast, { key: toast.id, toast: toast, style: { bottom: "".concat(bottom, "px"), zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = styled.createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

exports.AddFilledIcon = Icon$H;
exports.AddIcon = Icon$1Y;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$1X;
exports.ArrowDownIcon = Icon$1W;
exports.ArrowDropDownIcon = Icon$1V;
exports.ArrowDropUpIcon = Icon$1U;
exports.ArrowForwardIcon = Icon$1T;
exports.ArrowUpForwardIcon = Icon$1R;
exports.ArrowUpIcon = Icon$1S;
exports.AutoCompaundIcon = Icon$11;
exports.AutoRenewIcon = Icon$1Q;
exports.AvalancheIcon = Icon$d;
exports.BSCIcon = Icon$f;
exports.BackgroundImage = BackgroundImage;
exports.Badge = Badge;
exports.BalanceInput = BalanceInput;
exports.BaseLayout = GridLayout$1;
exports.BaseMenu = BaseMenu;
exports.BinanceIcon = Icon$1P;
exports.BlockIcon = Icon$1_;
exports.BottomDrawer = BottomDrawer;
exports.Box = Box;
exports.Breadcrumbs = Breadcrumbs;
exports.BscNewIcon = Icon$F;
exports.BunnyPlaceholderIcon = Icon$1O;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuIcon = Icon$i;
exports.ButtonMenuItem = ButtonMenuItem;
exports.ButtonMenuOpenedIcon = Icon$h;
exports.CalculateIcon = Icon$1M;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$1N;
exports.CardsLayout = GridLayout;
exports.CerticAuditedIcon = Icon$g;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon$20;
exports.CheckmarkIcon = Icon$1L;
exports.ChevronDownIcon = Icon$1K;
exports.ChevronLeftIcon = Icon$1J;
exports.ChevronRightEndIcon = Icon$1H;
exports.ChevronRightIcon = Icon$1I;
exports.ChevronUpIcon = Icon$1G;
exports.ClickableElementContainer = ClickableElementContainer;
exports.CloseIcon = Icon$1F;
exports.CogIcon = Icon$1E;
exports.CommunityIcon = Icon$1D;
exports.CompetitionsIcon = Icon$o;
exports.CopyIcon = Icon$1C;
exports.CupIcon = Icon$12;
exports.DownloadIcon = Icon$1a;
exports.Dropdown = Dropdown;
exports.EditIcon = Icon$I;
exports.ErrorIcon = Icon$1$;
exports.ExpandableButton = ExpandableButton;
exports.ExpandableLabel = ExpandableLabel;
exports.ExpertTradeIcon = Icon$v;
exports.FarmsIcon = Icon$t;
exports.FavoriteEmptyIcon = Icon$T;
exports.FavoriteFullIcon = Icon$U;
exports.FireIcon = Icon$10;
exports.FlagIcon = Icon$17;
exports.Flex = Flex;
exports.GameFiIcon = Icon$k;
exports.GasIcon = Icon$_;
exports.Grid = Grid;
exports.Heading = Heading;
exports.HelpIcon = Icon$1B;
exports.HolderAutoIcon = Icon$G;
exports.HourglassIcon = Icon$$;
exports.IconButton = IconButton;
exports.IdoIcon = Icon$O;
exports.IdoMenuIcon = Icon$q;
exports.Image = Image;
exports.ImgWarnIcon = Icon$D;
exports.InfoIcon = Icon$1Z;
exports.InlineMenu = InlineMenu;
exports.InlineMenuContainer = InlineMenuContainer;
exports.Input = Input$1;
exports.InputGroup = InputGroup;
exports.InstagramIcon = Icon$B;
exports.ItemTypes = ItemTypes;
exports.LaunchIcon = Icon$s;
exports.LevelIcon = Icon$X;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.LinkIcon = Icon$19;
exports.LiquidityIcon = Icon$u;
exports.ListViewIcon = Icon$1A;
exports.LoaderIcon = Icon$1w;
exports.LogoIcon = Icon$1y;
exports.LogoRoundIcon = Icon$1x;
exports.LogoWithTextIcon = Icon$E;
exports.LotteryIcon = Icon$p;
exports.MarketBagIcon = Icon$P;
exports.MarketMenuIcon = Icon$l;
exports.MarketplaceIcon = Icon$V;
exports.MediumIcon = Icon$x;
exports.Menu = Menu;
exports.MetamaskIcon = Icon$1v;
exports.MinusIcon = Icon$1u;
exports.Modal = Modal;
exports.ModalBackButton = ModalBackButton;
exports.ModalBody = ModalBody$1;
exports.ModalCloseButton = ModalCloseButton;
exports.ModalContainer = ModalContainer;
exports.ModalHeader = ModalHeader;
exports.ModalProvider = ModalProvider;
exports.ModalTitle = ModalTitle;
exports.ModalWithBackground = ModalWithBackground;
exports.MouseIcon = Icon$14;
exports.NftEarnIcon = Icon$m;
exports.NftLaunchIcon = Icon$n;
exports.NoProfileAvatarIcon = Icon$1s;
exports.NotificationDot = NotificationDot;
exports.OpenNewIcon = Icon$1r;
exports.Overlay = Overlay;
exports.PancakeRoundIcon = Icon$1p;
exports.PancakeToggle = PancakeToggle;
exports.PancakesIcon = Icon$1q;
exports.PlayCircleOutlineIcon = Icon$1o;
exports.PlayersIcon = Icon$L;
exports.PlusIcon = Icon$1t;
exports.PolygonIcon = Icon$e;
exports.PrizeIcon = Icon$1n;
exports.ProductsIcon = Icon$j;
exports.ProfileAvatar = ProfileAvatar;
exports.Progress = Progress;
exports.ProgressBar = Bar;
exports.ProgressBunny = Icon$1k;
exports.Radio = Radio;
exports.RatingIcon = Icon$13;
exports.ReferralIcon = Icon$r;
exports.RemoveIcon = Icon$1m;
exports.ResetCSS = ResetCSS;
exports.RobiBoostIcon = Icon$W;
exports.RocketIcon = Icon$18;
exports.SearchIcon = Icon$1e;
exports.SettingsIcon = Icon$Q;
exports.ShareIcon = Icon$S;
exports.Skeleton = Skeleton;
exports.Slider = Slider;
exports.Spinner = Spinner;
exports.SquidEnergyIcon = Icon$K;
exports.SquidIcon = Icon$N;
exports.SquidV2Icon = Icon$M;
exports.StarIcon = Icon$Y;
exports.SubMenu = SubMenu;
exports.SubMenuContainer = SubMenuContainer;
exports.SubMenuItem = SubMenuItem;
exports.SubMenuItems = SubMenuItems;
exports.Svg = Svg;
exports.SwapIcon = Icon$w;
exports.SwapVertIcon = Icon$1d;
exports.SyncAltIcon = Icon$1c;
exports.TabMenu = TabMenu;
exports.Tag = Tag;
exports.TelegramIcon = Icon$z;
exports.Text = Text;
exports.TextField = Textfield;
exports.Ticket = Icon$1h;
exports.TicketRound = Icon$1g;
exports.TileViewIcon = Icon$1z;
exports.Timeline = Timeline;
exports.TimerIcon = Icon$1f;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.TokenImage = TokenImage;
exports.TokenPairImage = TokenPairImage;
exports.TooltipText = TooltipText;
exports.TradeIcon = Icon$Z;
exports.TwitchIcon = Icon$A;
exports.TwitterIcon = Icon$y;
exports.UserMenuDivider = UserMenuDivider;
exports.UserMenuItem = UserMenuItem;
exports.VerifiedIcon = Icon$1l;
exports.ViewIcon = Icon$R;
exports.VoteIcon = Icon$J;
exports.WaitIcon = Icon$1j;
exports.WaitReloadIcon = Icon$15;
exports.WalletIcon = Icon$16;
exports.WarningIcon = Icon$1b;
exports.Won = Icon$1i;
exports.YoutubeIcon = Icon$C;
exports.alertVariants = variants$4;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.connectorLocalStorageKey = connectorLocalStorageKey;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.menuStatus = status;
exports.toastTypes = types;
exports.useDelayedUnmount = useDelayedUnmount;
exports.useKonamiCheatCode = useKonamiCheatCode;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useOnClickOutside = useOnClickOutside;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useTooltip = useTooltip;
exports.useWalletModal = useWalletModal;
