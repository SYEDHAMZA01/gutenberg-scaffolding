/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/section/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/section/main.js":
/*!********************************!*\
  !*** ./blocks/section/main.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main */ "./main.js");



/**
 * Registers a new block provided a unique name and an object defining its behavior.
 * @see https://github.com/WordPress/gutenberg/tree/master/blocks#api
 */

var __ = wp.i18n.__; // Import __() from wp.i18n

var registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks

var _wp$blockEditor = wp.blockEditor,
    RichText = _wp$blockEditor.RichText,
    useBlockProps = _wp$blockEditor.useBlockProps;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/**
 * Every block starts by registering a new block type definition.
 * @see https://wordpress.org/gutenberg/handbook/block-api/
 */

var blockSlug = 'section';
var blockName = 'Section';
Object(_main__WEBPACK_IMPORTED_MODULE_2__["blockBakeryRegisterBlock"])(blockSlug, {
  /**
   * This is the display title for your block, which can be translated with `i18n` functions.
   * The block inserter will show this name.
   */
  title: __('Gutenberg ' + blockName),
  modules: {
    spacing: [{
      name: "Padding",
      prefix: "padding"
    }, {
      name: "Margin",
      prefix: "margin"
    }],
    contentWidth: {
      name: "Content Width",
      prefix: "width"
    },
    height: {
      name: "Height",
      prefix: "height"
    },
    columnPosition: {
      name: "Column Position",
      prefix: "column_position"
    },
    columnGap: {
      name: "Columns Gap",
      prefix: "columns_gap"
    },
    verticalAlignment: {
      name: "Vertical Alignment",
      prefix: "vertical_alignment"
    },
    overflow: {
      name: "Overflow",
      prefix: "overflow"
    },
    htmlTags: {
      name: "HTML Tags",
      prefix: "html_tags"
    },
    background: {
      name: "Background Parent",
      prefix: "bg_abc_parent"
    }
  },
  attributes: {
    backgroundColor: {
      default: "yellow",
      type: "string"
    },
    deviceSelection: {
      type: 'string',
      default: 'desktop'
    },
    someText: {
      type: 'string',
      source: 'html',
      selector: 'h2',
      default: "Write Something"
    }
  },

  /**
   * Blocks are grouped into categories to help users browse and discover them.
   * The categories provided by core are `common`, `embed`, `formatting`, `layout` and `widgets`.
   */
  category: 'widgets',
  //MAMD_PLUGIN_INFO.category_slug

  /**
   * Optional block extended support features.
   */
  // supports: {
  //     // Removes support for an HTML mode.
  //     html: false,
  // },

  /**
   * The edit function describes the structure of your block in the context of the editor.
   * This represents what the editor will render when the block is used.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#edit
   *
   * @param {Object} [props] Properties passed from the editor.
   * @return {Element}       Element to render.
   */
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var blockProps = useBlockProps({
      className: 'my-random-classname'
    });
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __('Some Text Here')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TextControl, {
      placeholder: "Some Dummy",
      type: "number",
      value: attributes.bb_section_padding
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h1", null, "Padding Attribute Update"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, Object(_main__WEBPACK_IMPORTED_MODULE_2__["getAttribute"])(attributes, 'padding', 'ALL', 'TOP')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Top ", attributes["".concat(attributes.mainPrefix, "_padding_top")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "Right ", attributes["".concat(attributes.mainPrefix, "_padding_right")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "bottom ", attributes["".concat(attributes.mainPrefix, "_padding_bottom")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("p", null, "left ", attributes["".concat(attributes.mainPrefix, "_padding_left")], "px"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      tagName: "h2" // The tag here is the element output and editable in the admin
      ,
      value: attributes.someText // Any existing content, either from the database or an attribute default
      ,
      allowedFormats: ['core/bold', 'core/italic'] // Allow the content to be made bold or italic, but do not allow other formatting options
      ,
      onChange: function onChange(someText) {
        return setAttributes({
          someText: someText
        });
      } // Store updated content as a block attribute
      ,
      placeholder: __('Heading...') // Display this text before any content has been added by the user

    }))));
  },

  /**
   * The save function defines the way in which the different attributes should be combined
   * into the final markup, which is then serialized by Gutenberg into `post_content`.
   * @see https://wordpress.org/gutenberg/handbook/block-edit-save/#save
   *
   * @return {Element}       Element to render.
   */
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var blockProps = useBlockProps.save();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RichText.Content, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
      tagName: "h2",
      value: attributes.someText
    }));
  }
});

/***/ }),

/***/ "./components/background/index.js":
/*!****************************************!*\
  !*** ./components/background/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
// import { __ } from '@wordpress/i18n';

var __ = wp.i18n.__; // Import __() from wp.i18n
// const { InspectorControls,
//     BlockControls,
//     AlignmentToolbar,
//     BlockAlignmentToolbar,
//     RichText,
//     MediaUpload, MediaUploadCheck, InnerBlocks } = wp.editor;
// const { PanelBody, PanelRow,
//     TextControl, SelectControl, RangeControl, Dashicon, ToggleControl, ColorPalette, ColorIndicator,
//     Card, CardBody, Button, AlignmentMatrixControl, AnglePickerControl, ColorGradientControl, __experimentalGradientPicker, ColorPicker } = wp.components;
// let DDD = __experimentalGradientPicker;

/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _objectSpread2;

  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_color"), {
    type: 'string',
    default: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_gradient_color"), {
    type: 'string',
    default: '#f00'
  }), _objectSpread2));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["__experimentalColorGradientControl"], {
      colorValue: attributes["".concat(props.prefix, "_color")],
      gradientValue: attributes["".concat(props.prefix, "_gradient_color")],
      colors: [{
        name: 'red',
        color: '#f00'
      }, {
        name: 'white',
        color: '#fff'
      }, {
        name: 'blue',
        color: '#00f'
      }],
      gradients: [{
        name: 'Vivid cyan blue to vivid purple',
        gradient: 'linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)',
        slug: 'vivid-cyan-blue-to-vivid-purple'
      }, {
        name: 'Light green cyan to vivid green cyan',
        gradient: 'linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)',
        slug: 'light-green-cyan-to-vivid-green-cyan'
      }, {
        name: 'Luminous vivid amber to luminous vivid orange',
        gradient: 'linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)',
        slug: 'luminous-vivid-amber-to-luminous-vivid-orange'
      }],
      label: __("Choose a color or a gradient"),
      onColorChange: function onColorChange(newValue) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_color"), newValue));
      },
      onGradientChange: function onGradientChange(newValue) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_gradient_color"), newValue));
      }
    }));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/column_position/index.js":
/*!*********************************************!*\
  !*** ./components/column_position/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_column_position"), {
    type: 'string',
    default: 'middle'
  }));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "Column Position"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        alignSelf: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      value: attributes["".concat(props.prefix, "_column_position")],
      options: [{
        label: 'Stretch',
        value: 'stretch'
      }, {
        label: 'Top',
        value: 'top'
      }, {
        label: 'Middle',
        value: 'middle'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }],
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_column_position"), new_val));
      }
    }))));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/columns_gap/index.js":
/*!*****************************************!*\
  !*** ./components/columns_gap/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
var customgapelement = false;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _objectSpread2;

  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_columns_gap"), {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_custom_columns_gap"), {
    type: 'number',
    default: 10
  }), _objectSpread2));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "Columns Gap"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        alignSelf: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      value: attributes["".concat(props.prefix, "_columns_gap")],
      options: [{
        label: 'Default',
        value: 'default'
      }, {
        label: 'No Gap',
        value: 'No Gap'
      }, {
        label: 'Narrow',
        value: 'Narrow'
      }, {
        label: 'Extended',
        value: 'Extended'
      }, {
        label: 'Wide',
        value: 'Wide'
      }, {
        label: 'Wider',
        value: 'Wider'
      }, {
        label: 'Costom',
        value: 'Costom'
      }],
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_columns_gap"), new_val))(new_val == 'Costom' ? customgapelement = true : customgapelement = false);
      }
    }))), customgapelement == true ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Custom Column Gap', 'blocks-bakery'),
      min: 0,
      max: 500,
      value: ["".concat(props.prefix, "_custom_columns_gap")],
      step: 1,
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_custom_columns_gap"), new_val));
      }
    }) : '');
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/content_width/index.js":
/*!*******************************************!*\
  !*** ./components/content_width/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main */ "./main.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";

var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    BaseControl = _wp$components.BaseControl,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    ButtonGroup = _wp$components.ButtonGroup,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attrs = _objectSpread(_objectSpread(_objectSpread({}, props.attributes), Object(_main__WEBPACK_IMPORTED_MODULE_2__["getResponsiveMode"])(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_max"), {
    type: "number",
    default: 1140
  }), true, ["all"])), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_type"), {
    type: "string",
    default: "boxed"
  })); //   console.log(`attr generaator`,getResponsiveMode({
  //     [`${props.prefix}_max`]: {
  //       type: "number",
  //       default: 1140,
  //     },
  //   },true,['all']));


  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, "blocks-bakery"),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "Content Width (", Object(_main__WEBPACK_IMPORTED_MODULE_2__["getAttribute"])(attributes, props.prefix, "type"), ")"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        alignSelf: "center"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      value: Object(_main__WEBPACK_IMPORTED_MODULE_2__["getAttribute"])(attributes, props.prefix, "type"),
      options: [{
        label: "Boxed",
        value: "boxed"
      }, {
        label: "Full Width",
        value: "full_width"
      }],
      onChange: function onChange(nextValues) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_type"), nextValues));
      }
    }))), Object(_main__WEBPACK_IMPORTED_MODULE_2__["getAttribute"])(attributes, props.prefix, "type") === "boxed" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        display: "flex"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        marginTop: "30px",
        marginBottom: "30px"
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      style: {
        marginRight: "10px"
      }
    }, "Border Width"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(ButtonGroup, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      variant: "primary",
      style: {
        cursor: "pointer"
      },
      onClick: function onClick(e) {
        return Object(_main__WEBPACK_IMPORTED_MODULE_2__["responsiveChange"])("desktop", setAttributes);
      },
      icon: "laptop"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      variant: "secondary",
      style: {
        cursor: "pointer"
      },
      onClick: function onClick(e) {
        return Object(_main__WEBPACK_IMPORTED_MODULE_2__["responsiveChange"])("tablet", setAttributes);
      },
      icon: "tablet"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Button, {
      variant: "primary",
      style: {
        cursor: "pointer"
      },
      onClick: function onClick(e) {
        return Object(_main__WEBPACK_IMPORTED_MODULE_2__["responsiveChange"])("mobile", setAttributes);
      },
      icon: "smartphone"
    })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      min: 500,
      max: 1600,
      value: Object(_main__WEBPACK_IMPORTED_MODULE_2__["getAttribute"])(attributes, props.prefix, "max_type", attributes.deviceSelection),
      step: 1,
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_max"), new_val));
      }
    })) : "not found");
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/height/index.js":
/*!************************************!*\
  !*** ./components/height/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
var heightelement = false;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var _objectSpread2;

  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_height"), {
    type: 'string'
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(props.prefix, "_custom_min_height"), {
    type: 'number',
    default: 400
  }), _objectSpread2));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "Height"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        alignSelf: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      value: attributes["".concat(props.prefix, "_height")],
      options: [{
        label: 'Default',
        value: 'default'
      }, {
        label: 'Fit To Screen',
        value: 'fit_to_screen'
      }, {
        label: 'Min Height',
        value: 'min_height'
      }],
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_height"), new_val))(new_val == 'min_height' ? heightelement = true : heightelement = false);
      }
    }))), heightelement == true ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(RangeControl, {
      label: __('Minimum Height', 'blocks-bakery'),
      min: 0,
      max: 1440,
      value: ["".concat(props.prefix, "_custom_min_height")],
      step: 1,
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_custom_min_height"), new_val));
      }
    }) : '');
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/html_tags/index.js":
/*!***************************************!*\
  !*** ./components/html_tags/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_html_tags"), {
    type: 'string',
    default: 'section'
  }));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "HTML Tags"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        alignSelf: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      value: attributes["".concat(props.prefix, "_html_tags")],
      options: [{
        label: 'Default',
        value: 'section'
      }, {
        label: 'Header',
        value: 'header'
      }, {
        label: 'Section',
        value: 'section'
      }, {
        label: 'Footer',
        value: 'footer'
      }, {
        label: 'Main',
        value: 'main'
      }, {
        label: 'Nav',
        value: 'nav'
      }, {
        label: 'Article',
        value: 'article'
      }, {
        label: 'Aside',
        value: 'aside'
      }],
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_html_tags"), new_val));
      }
    }))));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/overflow/index.js":
/*!**************************************!*\
  !*** ./components/overflow/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_overflow"), {
    type: 'string',
    default: 'default'
  }));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "Overflow"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        alignSelf: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      value: attributes["".concat(props.prefix, "_overflow")],
      options: [{
        label: 'Default',
        value: 'default'
      }, {
        label: 'Hidden',
        value: 'hidden'
      }],
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_overflow"), new_val));
      }
    }))));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/spacing/index.js":
/*!*************************************!*\
  !*** ./components/spacing/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_all"), {
    type: 'array',
    default: {
      top: '50px',
      left: '10%',
      right: '10%',
      bottom: '50px'
    }
  }));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(BoxControl, {
      label: 'Padding',
      values: attributes["".concat(props.prefix, "_all")],
      onChange: function onChange(nextValues) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_all"), nextValues));
      }
    }));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./components/vertical_alignment/index.js":
/*!************************************************!*\
  !*** ./components/vertical_alignment/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// import "./style.scss";
var __ = wp.i18n.__; // Import __() from wp.i18n

var __experimentalBoxControl = wp.components.__experimentalBoxControl;
var BoxControl = __experimentalBoxControl;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    PanelRow = _wp$components.PanelRow,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    RangeControl = _wp$components.RangeControl,
    Dashicon = _wp$components.Dashicon,
    ToggleControl = _wp$components.ToggleControl,
    ColorPalette = _wp$components.ColorPalette,
    ColorIndicator = _wp$components.ColorIndicator,
    Card = _wp$components.Card,
    CardBody = _wp$components.CardBody,
    Button = _wp$components.Button,
    AlignmentMatrixControl = _wp$components.AlignmentMatrixControl,
    AnglePickerControl = _wp$components.AnglePickerControl,
    ColorGradientControl = _wp$components.ColorGradientControl,
    __experimentalGradientPicker = _wp$components.__experimentalGradientPicker,
    ColorPicker = _wp$components.ColorPicker;
/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var attrs = _objectSpread(_objectSpread({}, props.attributes), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_vertical_alignment"), {
    type: 'string',
    default: 'default'
  }));

  var content = function content(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelBody, {
      title: __(props.name, 'blocks-bakery'),
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PanelRow, null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h4", null, "Vertical Alignment"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      style: {
        alignSelf: 'center'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SelectControl, {
      value: attributes["".concat(props.prefix, "_vertical_alignment")],
      options: [{
        label: 'Default',
        value: 'default'
      }, {
        label: 'Top',
        value: 'top'
      }, {
        label: 'Middle',
        value: 'middle'
      }, {
        label: 'Bottom',
        value: 'bottom'
      }, {
        label: 'Space Between',
        value: 'space_between'
      }, {
        label: 'Space Around',
        value: 'space_around'
      }, {
        label: 'Space Evenly',
        value: 'space_evenly'
      }],
      onChange: function onChange(new_val) {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(props.prefix, "_vertical_alignment"), new_val));
      }
    }))));
  };

  return {
    attrs: attrs,
    content: content
  };
});

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! exports provided: blockBakeryRegisterBlock, responsiveChange, getAttribute, getResponsiveMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blockBakeryRegisterBlock", function() { return blockBakeryRegisterBlock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "responsiveChange", function() { return responsiveChange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAttribute", function() { return getAttribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getResponsiveMode", function() { return getResponsiveMode; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_spacing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/spacing */ "./components/spacing/index.js");
/* harmony import */ var _components_columns_gap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/columns_gap */ "./components/columns_gap/index.js");
/* harmony import */ var _components_content_width__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content_width */ "./components/content_width/index.js");
/* harmony import */ var _components_height__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/height */ "./components/height/index.js");
/* harmony import */ var _components_column_position__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/column_position */ "./components/column_position/index.js");
/* harmony import */ var _components_vertical_alignment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/vertical_alignment */ "./components/vertical_alignment/index.js");
/* harmony import */ var _components_overflow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/overflow */ "./components/overflow/index.js");
/* harmony import */ var _components_html_tags__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/html_tags */ "./components/html_tags/index.js");
/* harmony import */ var _components_background__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/background */ "./components/background/index.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    useBlockProps = _wp$blockEditor.useBlockProps;
var __ = wp.i18n.__; // Import __() from wp.i18n

var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockAlignmentToolbar = _wp$editor.BlockAlignmentToolbar,
    MediaUpload = _wp$editor.MediaUpload,
    MediaUploadCheck = _wp$editor.MediaUploadCheck,
    InnerBlocks = _wp$editor.InnerBlocks;
var MAMD_PLUGIN_INFO = {
  name: "BB",
  slug: "blocks-bakery",
  prefix: "bb",
  category_slug: "bb_category"
};
var editPanels = [];
var blockBakeryRegisterBlock = function blockBakeryRegisterBlock(blockName, options) {
  var attributes = _objectSpread({
    mainPrefix: {
      type: "string",
      default: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName)
    }
  }, options.attributes);

  if (options.modules) {
    // Content Width
    if (options.modules.contentWidth) {
      var _options$modules$cont = options.modules.contentWidth,
          name = _options$modules$cont.name,
          prefix = _options$modules$cont.prefix;
      var contentWidthPanelObj = Object(_components_content_width__WEBPACK_IMPORTED_MODULE_5__["default"])({
        name: name,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(prefix ? "_".concat(prefix) : ""),
        attributes: attributes
      });
      attributes = contentWidthPanelObj.attrs;
      editPanels.push(contentWidthPanelObj.content);
    } //Height


    if (options.modules.height) {
      var _options$modules$heig = options.modules.height,
          _name = _options$modules$heig.name,
          _prefix = _options$modules$heig.prefix;
      var heightPanelObj = Object(_components_height__WEBPACK_IMPORTED_MODULE_6__["default"])({
        name: _name,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(_prefix ? "_".concat(_prefix) : ""),
        attributes: attributes
      });
      attributes = heightPanelObj.attrs;
      editPanels.push(heightPanelObj.content);
    } // Column Position


    if (options.modules.columnPosition) {
      var _options$modules$colu = options.modules.columnPosition,
          _name2 = _options$modules$colu.name,
          _prefix2 = _options$modules$colu.prefix;
      var columnPositionPanelObj = Object(_components_column_position__WEBPACK_IMPORTED_MODULE_7__["default"])({
        name: _name2,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(_prefix2 ? "_".concat(_prefix2) : ""),
        attributes: attributes
      });
      attributes = columnPositionPanelObj.attrs;
      editPanels.push(columnPositionPanelObj.content);
    } // Column Gap


    if (options.modules.columnGap) {
      var _options$modules$colu2 = options.modules.columnGap,
          _name3 = _options$modules$colu2.name,
          _prefix3 = _options$modules$colu2.prefix;
      var columnGapPanelObj = Object(_components_columns_gap__WEBPACK_IMPORTED_MODULE_4__["default"])({
        name: _name3,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(_prefix3 ? "_".concat(_prefix3) : ""),
        attributes: attributes
      });
      attributes = columnGapPanelObj.attrs;
      editPanels.push(columnGapPanelObj.content);
    } // Vertical Alignment


    if (options.modules.verticalAlignment) {
      var _options$modules$vert = options.modules.verticalAlignment,
          _name4 = _options$modules$vert.name,
          _prefix4 = _options$modules$vert.prefix;
      var verticalAlignmentPanelObj = Object(_components_vertical_alignment__WEBPACK_IMPORTED_MODULE_8__["default"])({
        name: _name4,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(_prefix4 ? "_".concat(_prefix4) : ""),
        attributes: attributes
      });
      attributes = verticalAlignmentPanelObj.attrs;
      editPanels.push(verticalAlignmentPanelObj.content);
    } // Overflow


    if (options.modules.overflow) {
      var _options$modules$over = options.modules.overflow,
          _name5 = _options$modules$over.name,
          _prefix5 = _options$modules$over.prefix;
      var overflowPanelObj = Object(_components_overflow__WEBPACK_IMPORTED_MODULE_9__["default"])({
        name: _name5,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(_prefix5 ? "_".concat(_prefix5) : ""),
        attributes: attributes
      });
      attributes = overflowPanelObj.attrs;
      editPanels.push(overflowPanelObj.content);
    } // HtmlTags


    if (options.modules.htmlTags) {
      var _options$modules$html = options.modules.htmlTags,
          _name6 = _options$modules$html.name,
          _prefix6 = _options$modules$html.prefix;
      var htmlTagsPanelObj = Object(_components_html_tags__WEBPACK_IMPORTED_MODULE_10__["default"])({
        name: _name6,
        prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(_prefix6 ? "_".concat(_prefix6) : ""),
        attributes: attributes
      });
      attributes = htmlTagsPanelObj.attrs;
      editPanels.push(htmlTagsPanelObj.content);
    } // Spacing


    if (options.modules.spacing.length > 0) {
      options.modules.spacing.map(function (_ref) {
        var name = _ref.name,
            prefix = _ref.prefix;
        var spacingPanelObj = Object(_components_spacing__WEBPACK_IMPORTED_MODULE_3__["default"])({
          name: name,
          prefix: "".concat(MAMD_PLUGIN_INFO.prefix, "_").concat(blockName).concat(prefix ? "_".concat(prefix) : ""),
          attributes: attributes
        });
        attributes = spacingPanelObj.attrs;
        editPanels.push(spacingPanelObj.content);
      });
    } // if (options.modules.background) {
    //     console.log(options.modules.background);
    //     let { name, prefix } = options.modules.background;
    //     let backgroundPanelObject = backgroundPanel({ name, prefix: `${MAMD_PLUGIN_INFO.prefix}_${blockName}${prefix ? `_${prefix}` : ''}`, attributes });
    //     attributes = backgroundPanelObject.attrs;
    //     editPanels.push(backgroundPanelObject.content);
    // }

  }

  return registerBlockType("".concat(MAMD_PLUGIN_INFO.slug, "/").concat(blockName), _objectSpread(_objectSpread({}, options), {}, {
    attributes: attributes,
    category: MAMD_PLUGIN_INFO.category_slug,
    edit: function edit(props) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(InspectorControls, null, editPanels.map(function (a) {
        return a(props);
      })), options.edit(props));
    },
    save: function save(props) {
      return options.save(props);
    }
  }));
};
var responsiveChange = function responsiveChange(device, setAttributes) {
  switch (device) {
    case "desktop":
      setAttributes({
        deviceSelection: "desktop"
      });

      wp.data.dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Device");

      break;

    case "tablet":
      setAttributes({
        deviceSelection: "tablet"
      });

      wp.data.dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Tablet");

      break;

    case "mobile":
      setAttributes({
        deviceSelection: "mobile"
      });

      wp.data.dispatch("core/edit-post").__experimentalSetPreviewDeviceType("Mobile");

      break;
  }
};
var getAttribute = function getAttribute(attributes, prefix, itemName) {
  var device = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "desktop";
  var withHover = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var addSuffixDeviceName = device === "tablet" ? "_tablet" : device === "mobile" ? "_mobile" : "";
  var addSuffixHover = withHover ? "_hover" : "";
  console.log("GetAttribute", "".concat(prefix, "_").concat(itemName).concat(addSuffixDeviceName).concat(addSuffixHover));
  console.log("GetAttribute Value", attributes["".concat(prefix, "_").concat(itemName).concat(addSuffixDeviceName).concat(addSuffixHover)] || attributes["".concat(prefix, "_").concat(itemName)]);
  return attributes["".concat(prefix, "_").concat(itemName).concat(addSuffixDeviceName).concat(addSuffixHover)] || attributes["".concat(prefix, "_").concat(itemName)];
};
var getResponsiveMode = function getResponsiveMode(dataArray) {
  var hover = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var devicesPlusEffects = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["all"];
  var keyName = window.lodash.first(Object.keys(dataArray));
  var additionObjs = {};

  if (devicesPlusEffects.indexOf("all") > -1) {
    var _additionObjs;

    additionObjs = (_additionObjs = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_additionObjs, "".concat(keyName, "_tablet"), dataArray[keyName]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_additionObjs, "".concat(keyName, "_mobile"), dataArray[keyName]), _additionObjs);

    if (hover) {
      var _objectSpread2;

      additionObjs = _objectSpread(_objectSpread({}, additionObjs), {}, (_objectSpread2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(keyName, "_tablet_hover"), dataArray[keyName]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_objectSpread2, "".concat(keyName, "_mobile_hover"), dataArray[keyName]), _objectSpread2));
    }

    return _objectSpread(_objectSpread({}, dataArray), additionObjs);
  }

  if (devicesPlusEffects.indexOf("mobile") > -1) {
    additionObjs = _objectSpread(_objectSpread({}, additionObjs), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(keyName, "_mobile"), dataArray[keyName]));

    if (hover) {
      additionObjs = _objectSpread(_objectSpread({}, additionObjs), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(keyName, "_mobile_hover"), dataArray[keyName]));
    }
  }

  if (devicesPlusEffects.indexOf("tablet") > -1) {
    additionObjs = _objectSpread(_objectSpread({}, additionObjs), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(keyName, "_tablet"), dataArray[keyName]));

    if (hover) {
      additionObjs = _objectSpread(_objectSpread({}, additionObjs), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(keyName, "_tablet_hover"), dataArray[keyName]));
    }
  }

  return _objectSpread(_objectSpread({}, dataArray), additionObjs);
};

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map