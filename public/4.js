(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/src/containers/Backend/User/Vehicles/Actions/Edit.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Vehicles/Actions/Edit.js ***!
  \***************************************************************************/
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
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../shared/utility */ "./resources/js/src/shared/utility.js");
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
      vehicle_type_id: '',
      nominal_capacity: '',
      builder_id: '',
      customer_id: '',
      serial_number: '',
      year: '',
      ref: '',
      chassis_number: '',
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
          vehicle_type_id = _this$state.vehicle_type_id,
          nominal_capacity = _this$state.nominal_capacity,
          builder_id = _this$state.builder_id,
          customer_id = _this$state.customer_id,
          serial_number = _this$state.serial_number,
          year = _this$state.year,
          ref = _this$state.ref,
          chassis_number = _this$state.chassis_number;
      var _this$props$backend$v = this.props.backend.vehicles,
          vehicleTypes = _this$props$backend$v.vehicleTypes,
          builders = _this$props$backend$v.builders,
          customers = _this$props$backend$v.customers;
      if (!vehicleTypes) vehicleTypes = [];
      if (!builders) builders = [];
      var vehicleTypesOptions = vehicleTypes.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.name);
      });
      var buildersOptions = builders.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.name);
      });
      var customersOptions = customers.map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
          value: item.id,
          key: JSON.stringify(item)
        }, item.name);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: this.submitHandler,
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "vehicle_type_id",
        placeholder: "Type de v\xE9hicule",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrain"],
        validation: {
          required: true
        },
        required: true,
        value: vehicle_type_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S\xE9lectionner un type de v\xE9hicule"), vehicleTypesOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "builder_id",
        onChange: this.inputChangedHandler,
        placeholder: "Constructeur",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBuilding"],
        validation: {
          required: true
        },
        required: true,
        value: builder_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S\xE9lectionner un constructeur"), buildersOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "customer_id",
        onChange: this.inputChangedHandler,
        placeholder: "Constructeur",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUserTie"],
        validation: {
          required: true
        },
        required: true,
        value: customer_id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", null, "S\xE9lectionner un client"), customersOptions), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "ref",
        placeholder: "Num\xE9ro d'immatriculation",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStickyNote"],
        validation: {
          required: true
        },
        required: true,
        value: ref
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "serial_number",
        placeholder: "Num\xE9ro de s\xE9rie",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStickyNote"],
        validation: {
          required: true
        },
        required: true,
        value: serial_number
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "text",
        name: "chassis_number",
        placeholder: "Num\xE9ro de ch\xE2ssis",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faStickyNote"],
        validation: {
          required: true
        },
        required: true,
        value: chassis_number
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "nominal_capacity",
        placeholder: "Capacit\xE9 nominale",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTruck"],
        validation: {
          required: true
        },
        required: true,
        value: nominal_capacity
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "number",
        name: "year",
        placeholder: "Ann\xE9e de fabrication",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faCalendar"],
        validation: {
          required: true
        },
        required: true,
        value: year
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
      if (nextProps.vehicle && prevState.vehicle_type_id === '') return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_8__["updateObject"])(prevState, _objectSpread({}, nextProps.vehicle));
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
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["patchVehiclesUpdate"](id, data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, mapDispatchToProps)(Edit)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Vehicles/Actions/View.js":
/*!***************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Vehicles/Actions/View.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");





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
  var vehicle = _ref2.vehicle;
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
  }), "D\xE9tails du v\xE9hicule"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Type de v\xE9hicule"
  }, vehicle.vehicle_type), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Constructeur"
  }, vehicle.builder), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Client"
  }, vehicle.customer), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Num\xE9ro d'immatriculation"
  }, vehicle.ref), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Num\xE9ro de s\xE9rie"
  }, vehicle.serial_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Num\xE9ro de ch\xE2ssis"
  }, vehicle.chassis_number), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Capacit\xE9 nominale"
  }, vehicle.nominal_capacity), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(I, {
    label: "Ann\xE9e de fabrication"
  }, vehicle.year)));
});

/***/ })

}]);