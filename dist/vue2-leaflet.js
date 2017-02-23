(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("leaflet"), require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["leaflet", "lodash"], factory);
	else if(typeof exports === 'object')
		exports["Vue2Leaflet"] = factory(require("leaflet"), require("lodash"));
	else
		root["Vue2Leaflet"] = factory(root["leaflet"], root["lodash"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_7__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.Map = __webpack_require__(27);
	exports.TileLayer = __webpack_require__(31);
	exports.Marker = __webpack_require__(28);
	exports.Polyline = __webpack_require__(29);
	exports.LayerGroup = __webpack_require__(26);
	exports.GeoJSON = __webpack_require__(23);
	exports.IconDefault = __webpack_require__(24);
	exports.Tooltip = __webpack_require__(32);
	exports.Popup = __webpack_require__(30);
	exports.LCircle = __webpack_require__(25);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _eventsBinder = __webpack_require__(19);
	
	var _eventsBinder2 = _interopRequireDefault(_eventsBinder);
	
	var _propsBinder = __webpack_require__(20);
	
	var _propsBinder2 = _interopRequireDefault(_propsBinder);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  events: [],
	  props: [],
	  mounted: function mounted() {
	    this.$lfObj = this.createLeafletObject();
	    if (this.$lfObj) {
	      (0, _eventsBinder2.default)(this, this.$lfObj, this.events);
	      (0, _propsBinder2.default)(this, this.$lfObj, this.props);
	    }
	    if (this.$lfObj && this.$parent && this.$parent.$lfObj) {
	      this.deferredMountedTo(this.$parent.$lfObj);
	    }
	  },
	  methods: {
	    deferredMountedTo: function deferredMountedTo(parent) {
	      this.beforeDeferredMount(parent);
	      if (this.$lfObj) {
	        var newParent = parent;
	        if (this.$parent && this.$parent.$lfObj) {
	          newParent = this.$lfObj;
	        }
	        this.$children.forEach(function (child) {
	          if (child.deferredMountedTo) {
	            child.deferredMountedTo(newParent);
	          }
	        });
	      }
	      this.afterDeferredMount(parent);
	    },
	    createLeafletObject: function createLeafletObject() {
	      return null;
	    },
	    beforeDeferredMount: function beforeDeferredMount(parent) {},
	    afterDeferredMount: function afterDeferredMount(parent) {}
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}
	
	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }
	
	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports
	
	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }
	
	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }
	
	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }
	
	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("leaflet");

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  beforeDestroy: function beforeDestroy() {
	    this.removeFromParent();
	  },
	
	  methods: {
	    beforeDeferredMount: function beforeDeferredMount(parent) {
	      this.addToParent(parent);
	    },
	    addToParent: function addToParent(parent) {
	      if (this.$lfObj && parent) {
	        this.$lfParent = parent;
	        if (!this.$lfParent.hasLayer(this.$lfObj)) {
	          this.$lfObj.addTo(this.$lfParent);
	        }
	      }
	    },
	    removeFromParent: function removeFromParent() {
	      var parentObj = null;
	      if (this.$lfObj && this.$lfParent) {
	        parentObj = this.$lfParent;
	        if (this.$lfParent.hasLayer(this.$lfObj)) {
	          this.$lfParent.removeLayer(this.$lfObj);
	        }
	        this.$lfParent = null;
	      }
	      return parentObj;
	    }
	  }
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AddToParent = __webpack_require__(4);
	
	var _AddToParent2 = _interopRequireDefault(_AddToParent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  mixins: [_AddToParent2.default],
	  props: {
	    visible: {
	      type: Boolean,
	      custom: true,
	      default: true
	    }
	  },
	  methods: {
	    afterDeferredMount: function afterDeferredMount(parent) {
	      this.$lfParent = parent;
	      this.setVisible(this.visible, !this.visible);
	    },
	    setVisible: function setVisible(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.addToParent(this.$lfParent);
	      } else {
	        this.$lfParent = this.removeFromParent();
	      }
	    }
	  }
	};

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _AddToParent = __webpack_require__(4);
	
	var _AddToParent2 = _interopRequireDefault(_AddToParent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	module.exports = {
	  mixins: [_AddToParent2.default],
	  props: {
	    content: {
	      custom: true,
	      default: ''
	    }
	  },
	  methods: {
	    afterDeferredMount: function afterDeferredMount(parent) {
	      this.setContent(this.content, null);
	    },
	    setContent: function setContent(newVal, oldVal) {
	      if (newVal === oldVal) return;
	      if (this.$lfObj) {
	        this.content = newVal;
	        this.$lfObj.setContent(newVal);
	      }
	    }
	  }
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("lodash");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _AddToParent = __webpack_require__(4);
	
	var _AddToParent2 = _interopRequireDefault(_AddToParent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _AddToParent2.default],
	  props: ['geojson', 'options'],
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating GeoJSON...");
	      return _leaflet2.default.geoJSON(null, this.options);
	    },
	    afterDeferredMount: function afterDeferredMount(parent) {
	      this.addGeoJSONData(this.geojson);
	    },
	    addGeoJSONData: function addGeoJSONData(geojsonData) {
	      if (this.$lfObj) {
	        this.$lfObj.addData(geojsonData);
	      }
	    },
	    getGeoJSONData: function getGeoJSONData() {
	      if (this.$lfObj) {
	        return this.$lfObj.toGeoJSON();
	      }
	      return null;
	    },
	    getBounds: function getBounds() {
	      if (this.$lfObj) {
	        return this.$lfObj.getBounds();
	      }
	      return null;
	    }
	  }
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lfProps = {
	  imagePath: {
	    type: String,
	    custom: true,
	    default: ""
	  }
	};
	
	exports.default = {
	  mixins: [_LeafletObject2.default],
	  props: lfProps,
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating image path...");
	      this.setImagePath(this.imagePath, null);
	      return null;
	    },
	    setImagePath: function setImagePath(newVal, oldVal) {
	      _leaflet2.default.Icon.Default.imagePath = newVal;
	    }
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _Visibility = __webpack_require__(5);
	
	var _Visibility2 = _interopRequireDefault(_Visibility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lfEvents = ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'add', 'remove', 'popupopen', 'popupclose', 'tooltipopen', 'tooltipclose'];
	
	var lfProps = {
	  latLng: {
	    type: Object
	  },
	  radius: {
	    type: Number
	  },
	  style: {
	    type: Object
	  },
	  color: {
	    type: String,
	    custom: true,
	    default: '#3388ff'
	  },
	  weight: {
	    type: Number,
	    custom: true,
	    default: 3
	  },
	  opacity: {
	    type: Number,
	    custom: true,
	    default: 1.0
	  },
	  lineCap: {
	    type: String,
	    custom: true,
	    default: 'round'
	  },
	  lineJoin: {
	    type: String,
	    custom: true,
	    default: 'round'
	  },
	  dashArray: {
	    type: String,
	    custom: true,
	    default: null
	  },
	  dashOffset: {
	    type: String,
	    custom: true,
	    default: null
	  },
	  fill: {
	    type: Boolean,
	    custom: true,
	    default: true
	  },
	  fillColor: {
	    type: String,
	    custom: true,
	    default: '#3388ff'
	  },
	  fillOpacity: {
	    type: Number,
	    custom: true,
	    default: 0.2
	  },
	  fillRule: {
	    type: String,
	    custom: true,
	    default: 'evenodd'
	  },
	  className: {
	    type: String,
	    custom: true,
	    default: null
	  }
	
	};
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _Visibility2.default],
	  events: lfEvents,
	  props: lfProps,
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating circle...");
	      var options = {};
	      if (this.color) {
	        options.color = this.color;
	      }
	      if (this.radius) {
	        options.radius = this.radius;
	      }
	      return _leaflet2.default.circle(this.latLng, options);
	    },
	    setColor: function setColor(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ color: newVal });
	      }
	    },
	    setWeight: function setWeight(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ weight: newVal });
	      }
	    },
	    setOpacity: function setOpacity(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ opacity: newVal });
	      }
	    },
	    setLineCap: function setLineCap(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ lineCap: newVal });
	      }
	    },
	    setLineJoin: function setLineJoin(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ lineJoin: newVal });
	      }
	    },
	    setDashArray: function setDashArray(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ dashArray: newVal });
	      }
	    },
	    setDashOffset: function setDashOffset(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ dashOffset: newVal });
	      }
	    },
	    setFill: function setFill(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ fill: newVal });
	      }
	    },
	    setFillColor: function setFillColor(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ fillColor: newVal });
	      }
	    },
	    setFillOpacity: function setFillOpacity(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ fillOpacity: newVal });
	      }
	    },
	    setFillRule: function setFillRule(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ fillRule: newVal });
	      }
	    },
	    setClassName: function setClassName(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ className: newVal });
	      }
	    },
	    addLatLng: function addLatLng(value) {
	      this.$lfObj.addLatLng(value);
	    }
	  }
	};

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _Visibility = __webpack_require__(5);
	
	var _Visibility2 = _interopRequireDefault(_Visibility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _Visibility2.default],
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating layer group...");
	      return _leaflet2.default.layerGroup();
	    }
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lfEvents = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'contextmenu', 'focus', 'blur', 'preclick', 'load', 'unload', 'viewreset', 'movestart', 'move', 'moveend', 'dragstart', 'drag', 'dragend', 'zoomstart', 'zoomend', 'zoomanim', 'zoomlevelschange', 'resize', 'autopanstart', 'layeradd', 'layerremove', 'baselayerchange', 'overlayadd', 'overlayremove', 'locationfound', 'locationerror', 'popupopen', 'popupclose'];
	
	var lfProps = {
	  center: {
	    custom: true,
	    default: undefined
	  },
	  bounds: {
	    custom: true,
	    default: undefined
	  },
	  zoom: {
	    type: Number,
	    default: undefined
	  },
	  minZoom: {
	    type: Number,
	    default: undefined
	  },
	  maxZoom: {
	    type: Number,
	    default: undefined
	  },
	  paddingBottomRight: {
	    custom: true,
	    default: null
	  },
	  paddingTopLeft: {
	    custom: true,
	    default: null
	  },
	  padding: {
	    custom: true,
	    default: null
	  },
	  worldCopyJump: {
	    type: Boolean,
	    default: false
	  }
	};
	
	exports.default = {
	  mixins: [_LeafletObject2.default],
	  events: lfEvents,
	  props: lfProps,
	  mounted: function mounted() {
	    this.deferredMountedTo(this.$lfObj);
	  },
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating map...");
	      return _leaflet2.default.map(this.$el, {
	        center: this.center,
	        zoom: this.zoom,
	        minZoom: this.minZoom,
	        maxZoom: this.maxZoom,
	        worldCopyJump: this.worldCopyJump
	      });
	    },
	    afterDeferredMount: function afterDeferredMount(parent) {
	      this.setBounds(this.bounds);
	      this.$lfObj.whenReady(function () {
	        this.$emit('l-ready');
	      }, this);
	    },
	    setCenter: function setCenter(newVal, oldVal) {
	      this.$lfObj.setView(newVal, this.zoom);
	    },
	    setBounds: function setBounds(newVal, oldVal) {
	      if (!(newVal && newVal.isValid())) {
	        return;
	      }
	      var options = {};
	      if (this.padding) {
	        options.padding = this.padding;
	      } else {
	        if (this.paddingBottomRight) {
	          options.paddingBottomRight = this.paddingBottomRight;
	        }
	        if (this.paddingTopLeft) {
	          options.paddingTopLeft = this.paddingTopLeft;
	        }
	      }
	      this.$lfObj.fitBounds(newVal, options);
	    },
	    setPaddingBottomRight: function setPaddingBottomRight(newVal, oldVal) {
	      this.paddingBottomRight = newVal;
	    },
	    setPaddingTopLeft: function setPaddingTopLeft(newVal, oldVal) {
	      this.paddingTopLeft = newVal;
	    },
	    setPadding: function setPadding(newVal, oldVal) {
	      this.padding = newVal;
	    }
	  }
	};

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _Visibility = __webpack_require__(5);
	
	var _Visibility2 = _interopRequireDefault(_Visibility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lfEvents = ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'dragstart', 'drag', 'dragend', 'move', 'add', 'remove', 'popupopen', 'popupclose', 'tooltipopen', 'tooltipclose'];
	
	var lfProps = {
	  draggable: {
	    type: Boolean,
	    custom: true,
	    default: false
	  },
	  latLng: {
	    type: Object
	  },
	  icon: {
	    custom: false,
	    default: function _default() {
	      return new _leaflet2.default.Icon.Default();
	    }
	  }
	};
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _Visibility2.default],
	  events: lfEvents,
	  props: lfProps,
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating marker...");
	      var options = {
	        draggable: this.draggable
	      };
	      if (this.icon) {
	        options.icon = this.icon;
	      }
	      return _leaflet2.default.marker(this.latLng, options);
	    },
	    setDraggable: function setDraggable(newVal, oldVal) {
	      if (this.$lfObj.dragging) {
	        newVal ? this.$lfObj.dragging.enable() : this.$lfObj.dragging.disable();
	      }
	    }
	  }
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _Visibility = __webpack_require__(5);
	
	var _Visibility2 = _interopRequireDefault(_Visibility);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lfEvents = ['click', 'dblclick', 'mousedown', 'mouseover', 'mouseout', 'contextmenu', 'add', 'remove', 'popupopen', 'popupclose', 'tooltipopen', 'tooltipclose'];
	
	var lfProps = {
	  latLngs: {
	    type: Array,
	    default: []
	  },
	  style: {
	    type: Object
	  },
	  color: {
	    type: String,
	    custom: true,
	    default: 'red'
	  }
	};
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _Visibility2.default],
	  events: lfEvents,
	  props: lfProps,
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating polyline...");
	      return _leaflet2.default.polyline(this.latLngs, { color: this.color });
	    },
	    setColor: function setColor(newVal, oldVal) {
	      if (newVal == oldVal) return;
	      if (newVal) {
	        this.$lfObj.setStyle({ color: newVal });
	      }
	    },
	    addLatLng: function addLatLng(value) {
	      this.$lfObj.addLatLng(value);
	    }
	  }
	};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _AddToParent = __webpack_require__(4);
	
	var _AddToParent2 = _interopRequireDefault(_AddToParent);
	
	var _ContentEditable = __webpack_require__(6);
	
	var _ContentEditable2 = _interopRequireDefault(_ContentEditable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lfEvents = ['add', 'remove', 'popupopen', 'popupclose', 'tooltipopen', 'tooltipclose'];
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _AddToParent2.default, _ContentEditable2.default],
	  events: lfEvents,
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating Popup...");
	      return _leaflet2.default.popup();
	    },
	    addToParent: function addToParent(parent) {
	      if (this.$lfObj && parent) {
	        console.log(parent);
	        this.$lfParent = parent;
	        this.$lfParent.bindPopup(this.$lfObj);
	      }
	    },
	    removeFromParent: function removeFromParent() {
	      var parentObj = null;
	      if (this.$lfObj && this.$lfParent && this.$lfParent.getPopup() === this.$lfObj) {
	        parentObj = this.$lfParent;
	        this.$lfParent.unbindPopup();
	      }
	      this.$lfParent = null;
	      return parentObj;
	    }
	  }
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _AddToParent = __webpack_require__(4);
	
	var _AddToParent2 = _interopRequireDefault(_AddToParent);
	
	var _Layer = __webpack_require__(18);
	
	var _Layer2 = _interopRequireDefault(_Layer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _AddToParent2.default, _Layer2.default],
	  props: ['url', 'options'],
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating tile layer...");
	      return _leaflet2.default.tileLayer(this.url, this.options);
	    }
	  }
	};

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _leaflet = __webpack_require__(3);
	
	var _leaflet2 = _interopRequireDefault(_leaflet);
	
	var _LeafletObject = __webpack_require__(1);
	
	var _LeafletObject2 = _interopRequireDefault(_LeafletObject);
	
	var _AddToParent = __webpack_require__(4);
	
	var _AddToParent2 = _interopRequireDefault(_AddToParent);
	
	var _ContentEditable = __webpack_require__(6);
	
	var _ContentEditable2 = _interopRequireDefault(_ContentEditable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var lfEvents = ['add', 'remove', 'popupopen', 'popupclose', 'tooltipopen', 'tooltipclose'];
	
	exports.default = {
	  mixins: [_LeafletObject2.default, _AddToParent2.default, _ContentEditable2.default],
	  events: lfEvents,
	  methods: {
	    createLeafletObject: function createLeafletObject() {
	      console.log("Creating Tooltip...");
	      return _leaflet2.default.tooltip();
	    },
	    addToParent: function addToParent(parent) {
	      if (this.$lfObj && parent) {
	        this.$lfParent = parent;
	        this.$lfParent.bindTooltip(this.$lfObj);
	      }
	    },
	    removeFromParent: function removeFromParent() {
	      var parentObj = null;
	      if (this.$lfObj && this.$lfParent && this.$lfParent.getTooltip() === this.$lfObj) {
	        parentObj = this.$lfParent;
	        this.$lfParent.unbindTooltip();
	      }
	      this.$lfParent = null;
	      return parentObj;
	    }
	  }
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	"use strict";
	
	module.exports = {
	  props: {
	    zIndex: {
	      type: Number,
	      default: 1
	    },
	    pane: {
	      type: String,
	      default: null
	    }
	  },
	  methods: {
	    setZIndex: function setZIndex(zIndex) {
	      if (this.$lfObj) {
	        this.$lfObj.setZIndex(zIndex);
	      }
	    }
	  }
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(7);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = function (vueElement, leaflet, events) {
	  _lodash2.default.forEach(events, function (eventName) {
	    var exposedName = 'l-' + eventName;
	    leaflet.on(eventName, function (ev) {
	      vueElement.$emit(exposedName, ev);
	    });
	  });
	};

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _lodash = __webpack_require__(7);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function capitalizeFirstLetter(string) {
	  return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
	exports.default = function (vueElement, leafletElement, props, options) {
	  _lodash2.default.forEach(props, function (_ref, attribute) {
	    var twoWay = _ref.twoWay,
	        type = _ref.type,
	        custom = _ref.custom,
	        eventName = _ref.eventName;
	
	    var setMethodName = 'set' + capitalizeFirstLetter(attribute);
	    vueElement.$watch(attribute, function (newVal, oldVal) {
	      if (custom) {
	        vueElement[setMethodName](newVal, oldVal);
	      } else {
	        leafletElement[setMethodName](newVal);
	      }
	    }, {
	      deep: type === Object
	    });
	  });
	};

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(22)();
	// imports
	
	
	// module
	exports.push([module.id, "#map,.map-container{height:100%;width:100%}", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(8),
	  /* template */
	  __webpack_require__(34),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(9),
	  /* template */
	  __webpack_require__(33),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(10),
	  /* template */
	  __webpack_require__(40),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(11),
	  /* template */
	  __webpack_require__(39),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(43)
	
	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(12),
	  /* template */
	  __webpack_require__(35),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(13),
	  /* template */
	  __webpack_require__(38),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(14),
	  /* template */
	  __webpack_require__(42),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(15),
	  /* template */
	  __webpack_require__(41),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(16),
	  /* template */
	  __webpack_require__(36),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(2)(
	  /* script */
	  __webpack_require__(17),
	  /* template */
	  __webpack_require__(37),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	
	module.exports = Component.exports


/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c("div")
	},staticRenderFns: []}

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c("div")
	},staticRenderFns: []}

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "map-container"
	  }, [_vm._m(0), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "map-container"
	  }, [_c('div', {
	    attrs: {
	      "id": "map"
	    }
	  })])
	}]}

/***/ },
/* 36 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c("div")
	},staticRenderFns: []}

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c("div")
	},staticRenderFns: []}

/***/ },
/* 38 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 39 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c("div")
	},staticRenderFns: []}

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_vm._t("default")], 2)
	},staticRenderFns: []}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add the styles to the DOM
	var update = __webpack_require__(44)("27cb3c18", content, true);
	// Hot Module Replacement
	if(false) {
	 // When the styles change, update the <style> tags
	 if(!content.locals) {
	   module.hot.accept("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-22963f5a!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Map.vue", function() {
	     var newContent = require("!!../../node_modules/css-loader/index.js?minimize!../../node_modules/vue-loader/lib/style-rewriter.js?id=data-v-22963f5a!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Map.vue");
	     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
	     update(newContent);
	   });
	 }
	 // When the module is disposed, remove the <style> tags
	 module.hot.dispose(function() { update(); });
	}

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  MIT License http://www.opensource.org/licenses/mit-license.php
	  Author Tobias Koppers @sokra
	  Modified by Evan You @yyx990803
	*/
	
	var hasDocument = typeof document !== 'undefined'
	
	if (false) {
	  if (!hasDocument) {
	    throw new Error(
	    'vue-style-loader cannot be used in a non-browser environment. ' +
	    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
	  ) }
	}
	
	var listToStyles = __webpack_require__(45)
	
	/*
	type StyleObject = {
	  id: number;
	  parts: Array<StyleObjectPart>
	}
	
	type StyleObjectPart = {
	  css: string;
	  media: string;
	  sourceMap: ?string
	}
	*/
	
	var stylesInDom = {/*
	  [id: number]: {
	    id: number,
	    refs: number,
	    parts: Array<(obj?: StyleObjectPart) => void>
	  }
	*/}
	
	var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
	var singletonElement = null
	var singletonCounter = 0
	var isProduction = false
	var noop = function () {}
	
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())
	
	module.exports = function (parentId, list, _isProduction) {
	  isProduction = _isProduction
	
	  var styles = listToStyles(parentId, list)
	  addStylesToDom(styles)
	
	  return function update (newList) {
	    var mayRemove = []
	    for (var i = 0; i < styles.length; i++) {
	      var item = styles[i]
	      var domStyle = stylesInDom[item.id]
	      domStyle.refs--
	      mayRemove.push(domStyle)
	    }
	    if (newList) {
	      styles = listToStyles(parentId, newList)
	      addStylesToDom(styles)
	    } else {
	      styles = []
	    }
	    for (var i = 0; i < mayRemove.length; i++) {
	      var domStyle = mayRemove[i]
	      if (domStyle.refs === 0) {
	        for (var j = 0; j < domStyle.parts.length; j++) {
	          domStyle.parts[j]()
	        }
	        delete stylesInDom[domStyle.id]
	      }
	    }
	  }
	}
	
	function addStylesToDom (styles /* Array<StyleObject> */) {
	  for (var i = 0; i < styles.length; i++) {
	    var item = styles[i]
	    var domStyle = stylesInDom[item.id]
	    if (domStyle) {
	      domStyle.refs++
	      for (var j = 0; j < domStyle.parts.length; j++) {
	        domStyle.parts[j](item.parts[j])
	      }
	      for (; j < item.parts.length; j++) {
	        domStyle.parts.push(addStyle(item.parts[j]))
	      }
	      if (domStyle.parts.length > item.parts.length) {
	        domStyle.parts.length = item.parts.length
	      }
	    } else {
	      var parts = []
	      for (var j = 0; j < item.parts.length; j++) {
	        parts.push(addStyle(item.parts[j]))
	      }
	      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
	    }
	  }
	}
	
	function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = { css: css, media: media, sourceMap: sourceMap }
	    if (!newStyles[id]) {
	      part.id = parentId + ':0'
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      part.id = parentId + ':' + newStyles[id].parts.length
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}
	
	function createStyleElement () {
	  var styleElement = document.createElement('style')
	  styleElement.type = 'text/css'
	  head.appendChild(styleElement)
	  return styleElement
	}
	
	function addStyle (obj /* StyleObjectPart */) {
	  var update, remove
	  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')
	  var hasSSR = styleElement != null
	
	  // if in production mode and style is already provided by SSR,
	  // simply do nothing.
	  if (hasSSR && isProduction) {
	    return noop
	  }
	
	  if (isOldIE) {
	    // use singleton mode for IE9.
	    var styleIndex = singletonCounter++
	    styleElement = singletonElement || (singletonElement = createStyleElement())
	    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
	    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
	  } else {
	    // use multi-style-tag mode in all other cases
	    styleElement = styleElement || createStyleElement()
	    update = applyToTag.bind(null, styleElement)
	    remove = function () {
	      styleElement.parentNode.removeChild(styleElement)
	    }
	  }
	
	  if (!hasSSR) {
	    update(obj)
	  }
	
	  return function updateStyle (newObj /* StyleObjectPart */) {
	    if (newObj) {
	      if (newObj.css === obj.css &&
	          newObj.media === obj.media &&
	          newObj.sourceMap === obj.sourceMap) {
	        return
	      }
	      update(obj = newObj)
	    } else {
	      remove()
	    }
	  }
	}
	
	var replaceText = (function () {
	  var textStore = []
	
	  return function (index, replacement) {
	    textStore[index] = replacement
	    return textStore.filter(Boolean).join('\n')
	  }
	})()
	
	function applyToSingletonTag (styleElement, index, remove, obj) {
	  var css = remove ? '' : obj.css
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = replaceText(index, css)
	  } else {
	    var cssNode = document.createTextNode(css)
	    var childNodes = styleElement.childNodes
	    if (childNodes[index]) styleElement.removeChild(childNodes[index])
	    if (childNodes.length) {
	      styleElement.insertBefore(cssNode, childNodes[index])
	    } else {
	      styleElement.appendChild(cssNode)
	    }
	  }
	}
	
	function applyToTag (styleElement, obj) {
	  var css = obj.css
	  var media = obj.media
	  var sourceMap = obj.sourceMap
	
	  if (media) {
	    styleElement.setAttribute('media', media)
	  }
	
	  if (sourceMap) {
	    // https://developer.chrome.com/devtools/docs/javascript-debugging
	    // this makes source maps inside style tags work properly in Chrome
	    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
	    // http://stackoverflow.com/a/26603875
	    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
	  }
	
	  if (styleElement.styleSheet) {
	    styleElement.styleSheet.cssText = css
	  } else {
	    while (styleElement.firstChild) {
	      styleElement.removeChild(styleElement.firstChild)
	    }
	    styleElement.appendChild(document.createTextNode(css))
	  }
	}


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Translates the list format produced by css-loader into something
	 * easier to manipulate.
	 */
	module.exports = function listToStyles (parentId, list) {
	  var styles = []
	  var newStyles = {}
	  for (var i = 0; i < list.length; i++) {
	    var item = list[i]
	    var id = item[0]
	    var css = item[1]
	    var media = item[2]
	    var sourceMap = item[3]
	    var part = {
	      id: parentId + ':' + i,
	      css: css,
	      media: media,
	      sourceMap: sourceMap
	    }
	    if (!newStyles[id]) {
	      styles.push(newStyles[id] = { id: id, parts: [part] })
	    } else {
	      newStyles[id].parts.push(part)
	    }
	  }
	  return styles
	}


/***/ }
/******/ ])
});
;
//# sourceMappingURL=vue2-leaflet.js.map