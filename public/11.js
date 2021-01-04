(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Add.js":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Add.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var Add = /*#__PURE__*/function (_Component) {
  _inherits(Add, _Component);

  var _super = _createSuper(Add);

  function Add() {
    var _this;

    _classCallCheck(this, Add);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      customer_id: '',
      vehicle_id: '',
      gauging_id: '',
      date: '',
      nominal_capacity: '',
      gap_distance: '',
      average_centimetric_volume: '',
      total_height: '',
      total_capacity: '',
      ref: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "dateInputFocused", function (e) {
      e.target.type = 'date';
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.onSubmit(e.target);
    });

    return _this;
  }

  _createClass(Add, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          customer_id = _this$state.customer_id,
          vehicle_id = _this$state.vehicle_id,
          gauging_id = _this$state.gauging_id,
          date = _this$state.date,
          nominal_capacity = _this$state.nominal_capacity,
          gap_distance = _this$state.gap_distance,
          average_centimetric_volume = _this$state.average_centimetric_volume,
          total_height = _this$state.total_height,
          total_capacity = _this$state.total_capacity,
          ref = _this$state.ref;
      var _this$props$backend$g = this.props.backend.gaugings,
          customers = _this$props$backend$g.customers,
          gaugings = _this$props$backend$g.gaugings;
      var customersOptions = customers.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.name);
      });
      var gaugingsOptions = gaugings.sort(function (a, b) {
        return a.ref > b.ref;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.ref);
      });
      var customer = customers.find(function (customer) {
        return +customer.id === +customer_id;
      });
      var vehiclesOptions;
      if (customer) vehiclesOptions = customer.vehicles.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.ref);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.submitHandler,
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "customer_id",
        onChange: this.inputChangedHandler,
        placeholder: "Client",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBuilding"],
        validation: {
          required: true
        },
        required: true,
        value: customer_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S\xE9lectionner un client"), customersOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "vehicle_id",
        onChange: this.inputChangedHandler,
        placeholder: "V\xE9hicule",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCar"],
        validation: {
          required: true
        },
        required: true,
        value: vehicle_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S\xE9lectionner un v\xE9hicule"), vehiclesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "gauging_id",
        onChange: this.inputChangedHandler,
        placeholder: "Jaugeage",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTools"],
        value: gauging_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ''
      }, "S\xE9lectionner un jaugeage"), gaugingsOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "ref",
        placeholder: "Num\xE9ro de l'ordre",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFile"],
        validation: {
          required: true
        },
        required: true,
        value: ref
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "date",
        placeholder: "Date de l'ordre",
        onFocus: this.dateInputFocused,
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faClock"],
        validation: {
          required: true
        },
        required: true,
        value: date
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "nominal_capacity",
        placeholder: "Capacit\xE9 nominale",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: nominal_capacity
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "gap_distance",
        placeholder: "Distance de creux",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: gap_distance
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "average_centimetric_volume",
        placeholder: "Volume centim\xE9trique moyen",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faRulerHorizontal"],
        validation: {
          required: true
        },
        required: true,
        value: average_centimetric_volume
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "total_height",
        placeholder: "Hauteur totale",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: total_height
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "total_capacity",
        placeholder: "Capacit\xE9 totale",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: total_capacity
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["FormGroup"], {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: "brokenblue",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPaperPlane"]
      }, "Envoyer"))));
    }
  }]);

  return Add;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function onSubmit(data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["postGaugingsStore"](data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Add)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Edit.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Edit.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/utility */ "./resources/js/src/shared/utility.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      customer_id: '',
      vehicle_id: '',
      gauging_id: '',
      date: '',
      nominal_capacity: '',
      gap_distance: '',
      average_centimetric_volume: '',
      total_height: '',
      total_capacity: '',
      ref: '',
      id: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type,
          files = _e$target.files;
      if (type === 'file') return _this.setState(_defineProperty({}, name, files));

      _this.setState(_defineProperty({}, name, value));
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.submit(_this.state.id, _this.state);
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          customer_id = _this$state.customer_id,
          vehicle_id = _this$state.vehicle_id,
          gauging_id = _this$state.gauging_id,
          date = _this$state.date,
          nominal_capacity = _this$state.nominal_capacity,
          gap_distance = _this$state.gap_distance,
          average_centimetric_volume = _this$state.average_centimetric_volume,
          total_height = _this$state.total_height,
          total_capacity = _this$state.total_capacity,
          ref = _this$state.ref;
      var _this$props$backend$g = this.props.backend.gaugings,
          customers = _this$props$backend$g.customers,
          gaugings = _this$props$backend$g.gaugings;
      var customersOptions = customers.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.name);
      });
      var gaugingsOptions = gaugings.sort(function (a, b) {
        return a.ref > b.ref;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.ref);
      });
      var customer = customers.find(function (customer) {
        return +customer.id === +customer_id;
      });
      var vehiclesOptions;
      if (customer) vehiclesOptions = customer.vehicles.sort(function (a, b) {
        return a.name > b.name;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.ref);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.submitHandler,
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "customer_id",
        onChange: this.inputChangedHandler,
        placeholder: "Client",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBuilding"],
        validation: {
          required: true
        },
        required: true,
        value: customer_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S\xE9lectionner un client"), customersOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "vehicle_id",
        onChange: this.inputChangedHandler,
        placeholder: "V\xE9hicule",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCar"],
        validation: {
          required: true
        },
        required: true,
        value: vehicle_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S\xE9lectionner un v\xE9hicule"), vehiclesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "gauging_id",
        onChange: this.inputChangedHandler,
        placeholder: "Jaugeage",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTools"],
        value: gauging_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: ''
      }, "S\xE9lectionner un jaugeage"), gaugingsOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "ref",
        placeholder: "Num\xE9ro de l'ordre",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faFile"],
        validation: {
          required: true
        },
        required: true,
        value: ref
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "date",
        placeholder: "Date de l'ordre",
        onFocus: this.dateInputFocused,
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faClock"],
        validation: {
          required: true
        },
        required: true,
        value: date
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "nominal_capacity",
        placeholder: "Capacit\xE9 nominale",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: nominal_capacity
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "gap_distance",
        placeholder: "Distance de creux",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: gap_distance
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "average_centimetric_volume",
        placeholder: "Volume centim\xE9trique moyen",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRulerHorizontal"],
        validation: {
          required: true
        },
        required: true,
        value: average_centimetric_volume
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "total_height",
        placeholder: "Hauteur totale",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: total_height
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "total_capacity",
        placeholder: "Capacit\xE9 totale",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlassWhiskey"],
        validation: {
          required: true
        },
        required: true,
        value: total_capacity
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: "brokenblue",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPaperPlane"]
      }, "Envoyer"))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.gauging && prevState.customer_id === '') return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_8__["updateObject"])(prevState, _objectSpread({}, nextProps.gauging));
      return prevState;
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submit: function submit(id, data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["patchGaugingsUpdate"](id, data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Edit)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Measures.js":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Measures.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../../shared/utility */ "./resources/js/src/shared/utility.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var Fields = function Fields(_ref) {
  var heights = _ref.heights,
      volumes = _ref.volumes,
      _onChange = _ref.onChange,
      onPlus = _ref.onPlus,
      onMinus = _ref.onMinus;
  return heights.map(function (height, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      xs: 12,
      key: Math.random()
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
      className: "align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "col-lg-5",
      type: "number",
      name: "heights[]",
      placeholder: "Hauteur " + (i + 1),
      onChange: function onChange(e) {
        return _onChange(e, i);
      },
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faRulerVertical"],
      validation: {
        required: true
      },
      required: true,
      defaultValue: heights[i]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: "col-lg-5",
      type: "number",
      name: "volumes[]",
      placeholder: "Volume " + (i + 1),
      onChange: function onChange(e) {
        return _onChange(e, i);
      },
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faGlassWhiskey"],
      validation: {
        required: true
      },
      required: true,
      defaultValue: volumes[i]
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      className: "text-center pb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      size: "2x",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlusCircle"],
      className: "text-green cursor-pointer",
      onClick: onPlus
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
      className: "text-center pb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
      size: "2x",
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faMinusCircle"],
      className: "text-red cursor-pointer",
      onClick: onMinus
    }))));
  });
};

var Edit = /*#__PURE__*/function (_Component) {
  _inherits(Edit, _Component);

  var _super = _createSuper(Edit);

  function Edit() {
    var _this;

    _classCallCheck(this, Edit);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      heights: ['0'],
      volumes: ['0'],
      id: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e, i) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value,
          type = _e$target.type,
          files = _e$target.files;
      e.persist();

      if (name === 'heights[]') {
        var heights = _this.state.heights;
        heights[i] = value;
        return _this.setState({
          heights: heights
        }, function () {
          return e.target.focus();
        });
      }

      if (name === 'volumes[]') {
        var volumes = _this.state.volumes;
        volumes[i] = value;
        return _this.setState({
          volumes: volumes
        });
      }

      _this.setState(_defineProperty({}, name, value), function () {
        return e.target.focus();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "submitHandler", function (e) {
      e.preventDefault();

      _this.props.submit(_this.state.id, _this.state);
    });

    _defineProperty(_assertThisInitialized(_this), "plusBtnClickedHandler", function (index) {
      var _this$state = _this.state,
          heights = _this$state.heights,
          volumes = _this$state.volumes;
      var firstPartHeights = heights.filter(function (h, i) {
        return i <= index;
      });
      var secondPartHeights = heights.filter(function (h, i) {
        return i > index;
      });
      var firstPartVolumes = volumes.filter(function (h, i) {
        return i <= index;
      });
      var secondPartVolumes = volumes.filter(function (h, i) {
        return i > index;
      });

      _this.setState({
        heights: [].concat(_toConsumableArray(firstPartHeights), ['0'], _toConsumableArray(secondPartHeights)),
        volumes: [].concat(_toConsumableArray(firstPartVolumes), ['0'], _toConsumableArray(secondPartVolumes))
      });
    });

    _defineProperty(_assertThisInitialized(_this), "minusBtnClickedHandler", function (index) {
      var _this$state2 = _this.state,
          heights = _this$state2.heights,
          volumes = _this$state2.volumes;

      _this.setState({
        heights: heights.filter(function (h, i) {
          return i !== index;
        }),
        volumes: volumes.filter(function (h, i) {
          return i !== index;
        })
      });
    });

    return _this;
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      var _this$state3 = this.state,
          heights = _this$state3.heights,
          volumes = _this$state3.volumes;
      if (heights.length === 0) heights = ['0'];
      if (volumes.length === 0) volumes = ['0'];
      var fields = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Fields, {
        heights: heights,
        volumes: volumes,
        onPlus: this.plusBtnClickedHandler,
        onMinus: this.minusBtnClickedHandler,
        onChange: this.inputChangedHandler
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.submitHandler,
        className: "row"
      }, fields, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["FormGroup"], {
        className: "col-12"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: "brokenblue",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPaperPlane"]
      }, "Envoyer"))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.gauging && prevState.id === '') return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_8__["updateObject"])(prevState, _objectSpread({}, nextProps.gauging));
      return prevState;
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    submit: function submit(id, data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["patchGaugingsUpdate"](id, data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Edit)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/View.js":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/View.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../shared/utility */ "./resources/js/src/shared/utility.js");






var I = function I(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 6 : _ref$size,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? null : _ref$label,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    lg: size,
    className: "pb-3"
  }, label ? label + ': ' : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-green text-500"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_ref2) {
  var gauging = _ref2.gauging;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "m-0 p-3 rounded bg-green-20"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "text-green text-700 mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faUser"],
    className: "mr-2",
    fixedWidth: true
  }), "D\xE9tails du jaugeage"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Nom du client"
  }, gauging.customer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Nom du v\xE9hicule"
  }, gauging.vehicle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Num\xE9ro de l'ordre"
  }, gauging.ref), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Date de l'ordre"
  }, Object(_shared_utility__WEBPACK_IMPORTED_MODULE_4__["convertDate"])(gauging.date)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Capacit\xE9 nominale"
  }, gauging.nominal_capacity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Distance de creux"
  }, gauging.gap_distance), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Volume centim\xE9trique moyen"
  }, gauging.average_centimetric_volume), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Hauteur totale"
  }, gauging.total_height), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Capacit\xE9 totale"
  }, gauging.total_capacity)));
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/index.js":
/*!********************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Prestations/Gaugings/index.js ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../components/Backend/UI/List/List */ "./resources/js/src/components/Backend/UI/List/List.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../components/Backend/UI/View/View */ "./resources/js/src/components/Backend/UI/View/View.js");
/* harmony import */ var _Actions_Edit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Actions/Edit */ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Edit.js");
/* harmony import */ var _Actions_Add__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Actions/Add */ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Add.js");
/* harmony import */ var _Actions_Measures__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Actions/Measures */ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/Measures.js");
/* harmony import */ var _Actions_View__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Actions/View */ "./resources/js/src/containers/Backend/User/Prestations/Gaugings/Actions/View.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../../shared/utility */ "./resources/js/src/shared/utility.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






 // Components

















var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "exportData", /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(url, name) {
        var token, formData, res, resData, downloadLink, a;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                token = localStorage.getItem('token');
                _context.prev = 1;
                formData = new FormData();
                formData.append('name', name);
                _context.next = 6;
                return fetch(url, {
                  method: 'POST',
                  body: formData,
                  headers: {
                    Authorization: token
                  }
                });

              case 6:
                res = _context.sent;
                _context.next = 9;
                return res.blob();

              case 9:
                resData = _context.sent;
                downloadLink = URL.createObjectURL(resData);
                a = document.createElement('a');
                a.style.display = 'none';
                a.href = downloadLink;
                a.download = name;
                document.body.appendChild(a);
                a.click();
                window.URL.revokeObjectURL(downloadLink);
                _context.next = 23;
                break;

              case 20:
                _context.prev = 20;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 23:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 20]]);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }());

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.get();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.reset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props$backend$g = this.props.backend.gaugings,
          loading = _this$props$backend$g.loading,
          error = _this$props$backend$g.error,
          message = _this$props$backend$g.message,
          gaugings = _this$props$backend$g.gaugings;
      var content;
      var errors;
      var feedback;
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_12__["default"], null));else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_11__["default"], {
          err: error
        }));

        if (gaugings) {
          feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_13__["default"], {
            message: message
          });
          var data = gaugings.map(function (gauging) {
            var viewContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Actions_View__WEBPACK_IMPORTED_MODULE_19__["default"], {
              gauging: gauging
            });
            var editContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Actions_Edit__WEBPACK_IMPORTED_MODULE_16__["default"], {
              gauging: gauging
            });
            var measuresContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Actions_Measures__WEBPACK_IMPORTED_MODULE_18__["default"], {
              gauging: gauging
            });
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["updateObject"])(gauging, {
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(gauging.created_at),
              date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_21__["convertDate"])(gauging.date),
              proforma: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
                color: "primary",
                size: "sm",
                className: "rounded-2",
                onClick: function onClick() {
                  return _this2.exportData("/api/user/gaugings/".concat(gauging.id, "/proforma"), "".concat(gauging.ref, ".pdf"));
                }
              }, "Proforma", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faPrint"],
                fixedWidth: true,
                className: "ml-1"
              })),
              measures: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Mesures du jaugeage: ' + gauging.ref,
                content: measuresContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Badge"], {
                color: "nightblue",
                className: "badge-block position-static"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faList"],
                className: "text-orange",
                fixedWidth: true
              }), " ", gauging.measures.length, " mesure", gauging.measures.length > 1 ? 's' : '')),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Détails du jaugeage: ' + gauging.ref,
                content: viewContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_15__["default"], {
                title: 'Modifier le jaugeage: ' + gauging.ref,
                content: editContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faEdit"],
                className: "text-brokenblue mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_14__["default"], {
                deleteAction: function deleteAction() {
                  return _this2.props["delete"](gauging.id);
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTrash"],
                className: "text-red",
                fixedWidth: true
              })))
            });
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
            array: data,
            data: JSON.stringify(gaugings),
            bordered: true,
            add: "Ajouter un jaugeage",
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Actions_Add__WEBPACK_IMPORTED_MODULE_17__["default"], null),
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTools"],
            title: "Jaugeages",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Client',
              key: 'customer'
            }, {
              name: 'Véhicule',
              key: 'vehicle'
            }, {
              name: 'Numéro de l\'ordre',
              key: 'ref'
            }, {
              name: 'Date de l\'ordre',
              key: 'date'
            }, {
              name: 'Capacité nominale',
              key: 'nominal_capacity'
            }, {
              name: 'Mesures',
              key: 'measures',
              minWidth: 150
            }, {
              name: 'Distance de creux',
              key: 'gap_distance'
            }, {
              name: 'Volume centimétrique moyen',
              key: 'average_centimetric_volume'
            }, {
              name: 'Hauteur totale',
              key: 'total_height'
            }, {
              name: 'Capacité totale',
              key: 'total_capacity'
            }, {
              name: 'Impression',
              key: 'proforma',
              minWidth: 140
            }, {
              name: 'Action',
              key: 'action'
            }]
          })));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "bg-white py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
        main: "Jaugeages",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTools"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faTools"]
      }, "Panneau de l'utilisateur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: true
      }, "Jaugeages")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "p-4 pb-0"
      }, errors, feedback, content));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    reset: function reset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["gaugingsReset"]());
    },
    get: function get() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["getGaugings"]());
    },
    patchGaugingsUpdate: function patchGaugingsUpdate(id, data) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["patchGaugingsUpdate"](id, data));
    },
    "delete": function _delete(id) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_20__["deleteGaugings"](id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Index)));

/***/ })

}]);