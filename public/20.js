(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./resources/js/src/containers/Backend/User/Vehicles/Actions/Add.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Vehicles/Actions/Add.js ***!
  \**************************************************************************/
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
/* harmony import */ var _components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../components/Backend/UI/Input/Input */ "./resources/js/src/components/Backend/UI/Input/Input.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../store/actions */ "./resources/js/src/store/actions/index.js");
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
      vehicle_type_id: '',
      nominal_capacity: '',
      builder_id: '',
      customer_id: '',
      serial_number: '',
      year: '',
      ref: '',
      chassis_number: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputChangedHandler", function (e) {
      var _e$target = e.target,
          name = _e$target.name,
          value = _e$target.value;

      _this.setState(_defineProperty({}, name, value));
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
        onSubmit: this.submitHandler,
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "col-lg-6",
        type: "select",
        name: "vehicle_type_id",
        placeholder: "Type de v\xE9hicule",
        onChange: this.inputChangedHandler,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrain"],
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
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBuilding"],
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
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUserTie"],
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
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStickyNote"],
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
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStickyNote"],
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
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faStickyNote"],
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
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTruck"],
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
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCalendar"],
        validation: {
          required: true
        },
        required: true,
        value: year
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
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_7__["postVehiclesStore"](data));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(Add)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Vehicles/index.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Vehicles/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/Backend/UI/List/List */ "./resources/js/src/components/Backend/UI/List/List.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/Feedback/Feedback */ "./resources/js/src/components/Feedback/Feedback.js");
/* harmony import */ var _components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/Backend/UI/Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/Backend/UI/View/View */ "./resources/js/src/components/Backend/UI/View/View.js");
/* harmony import */ var _Actions_Edit__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Actions/Edit */ "./resources/js/src/containers/Backend/User/Vehicles/Actions/Edit.js");
/* harmony import */ var _Actions_Add__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Actions/Add */ "./resources/js/src/containers/Backend/User/Vehicles/Actions/Add.js");
/* harmony import */ var _Actions_View__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Actions/View */ "./resources/js/src/containers/Backend/User/Vehicles/Actions/View.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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






 // Components
















var Index = /*#__PURE__*/function (_Component) {
  _inherits(Index, _Component);

  var _super = _createSuper(Index);

  function Index() {
    _classCallCheck(this, Index);

    return _super.apply(this, arguments);
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
      var _this = this;

      var _this$props$backend$v = this.props.backend.vehicles,
          loading = _this$props$backend$v.loading,
          error = _this$props$backend$v.error,
          message = _this$props$backend$v.message,
          vehicles = _this$props$backend$v.vehicles;
      var content;
      var errors;
      var feedback;
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_11__["default"], null));else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_10__["default"], {
          err: error
        }));

        if (vehicles) {
          feedback = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Feedback_Feedback__WEBPACK_IMPORTED_MODULE_12__["default"], {
            message: message
          });
          var data = vehicles.map(function (vehicle) {
            var viewContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Actions_View__WEBPACK_IMPORTED_MODULE_17__["default"], {
              vehicle: vehicle
            });
            var editContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Actions_Edit__WEBPACK_IMPORTED_MODULE_15__["default"], {
              vehicle: vehicle
            });
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_19__["updateObject"])(vehicle, {
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_19__["convertDate"])(vehicle.created_at),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_14__["default"], {
                title: 'Détails du véhicule: ' + vehicle.ref,
                content: viewContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_14__["default"], {
                title: 'Modifier le véhicule: ' + vehicle.ref,
                content: editContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
                className: "text-brokenblue",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_13__["default"], {
                deleteAction: function deleteAction() {
                  return _this.props["delete"](vehicle.id);
                }
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTrash"],
                className: "text-red mr-2",
                fixedWidth: true
              })))
            });
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_List_List__WEBPACK_IMPORTED_MODULE_9__["default"], {
            array: data,
            data: JSON.stringify(vehicles),
            bordered: true,
            add: "Ajouter un v\xE9hicule",
            content: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Actions_Add__WEBPACK_IMPORTED_MODULE_16__["default"], null),
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCalendarAlt"],
            title: "V\xE9hicules",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Numéro d\'immatriculation',
              key: 'ref'
            }, {
              name: 'Client',
              key: 'customer'
            }, {
              name: 'Constructeur',
              key: 'builder'
            }, {
              name: 'Numéro de châssis',
              key: 'chassis_number'
            }, {
              name: 'Numéro de série',
              key: 'serial_number'
            }, {
              name: 'Type',
              key: 'vehicle_type'
            }, {
              name: 'Capacité nominale',
              key: 'nominal_capacity'
            }, {
              name: 'Année de fabrication',
              key: 'year'
            }, {
              name: 'Date d\'ajout',
              key: 'created_at'
            }, {
              name: 'Action',
              key: 'action'
            }]
          })));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-white py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_6__["default"], {
        main: "V\xE9hicules",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCalendarAlt"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faCalendarAlt"]
      }, "Panneau de l'utilisateur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: true
      }, "V\xE9hicules")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-4 pb-0"
      }, errors, feedback, content));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    reset: function reset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_18__["vehiclesReset"]());
    },
    get: function get() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_18__["getVehicles"]());
    },
    "delete": function _delete(id) {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_18__["deleteVehicles"](id));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Index)));

/***/ })

}]);