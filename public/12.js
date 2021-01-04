(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./resources/js/src/components/Backend/Dashboard/Card/Card.js":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/Backend/Dashboard/Card/Card.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");




var card = function card(_ref) {
  var title = _ref.title,
      _ref$titleColor = _ref.titleColor,
      titleColor = _ref$titleColor === void 0 ? 'white' : _ref$titleColor,
      details = _ref.details,
      children = _ref.children,
      link = _ref.link,
      _ref$light = _ref.light,
      light = _ref$light === void 0 ? false : _ref$light,
      icon = _ref.icon,
      color = _ref.color,
      _ref$circleBorder = _ref.circleBorder,
      circleBorder = _ref$circleBorder === void 0 ? 'orange' : _ref$circleBorder,
      _ref$circleColor = _ref.circleColor,
      circleColor = _ref$circleColor === void 0 ? 'white' : _ref$circleColor;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    md: 12,
    lg: 6,
    xl: 3,
    className: "pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "h-100 rounded overflow-hidden position-relative bg-".concat(color)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "py-3 border-bottom border-show position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-large text-700 text-".concat(titleColor)
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle position-absolute bg-".concat(color, " border border-2 border-").concat(circleBorder),
    style: {
      width: 20,
      height: 20,
      bottom: 0,
      left: 16,
      transform: 'translateY(50%)',
      padding: 2
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "rounded-circle w-100 h-100 bg-".concat(circleColor)
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: 12,
    className: "py-3 pl-5 position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      zIndex: 0,
      top: 16,
      right: 16
    },
    className: "position-absolute"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    style: {
      zIndex: 0
    },
    className: "text-" + (light ? "black" : "white") + "-20",
    size: "4x"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    style: {
      zIndex: 10
    },
    className: "text-white text-montserrat text-700"
  }, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      zIndex: 10
    },
    className: "text-white text-300"
  }, details)))));
};

/* harmony default export */ __webpack_exports__["default"] = (card);

/***/ }),

/***/ "./resources/js/src/components/Backend/UI/Table/Table.js":
/*!***************************************************************!*\
  !*** ./resources/js/src/components/Backend/UI/Table/Table.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");




/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var fields = _ref.fields,
      array = _ref.array,
      limit = _ref.limit,
      bordered = _ref.bordered,
      xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      lg = _ref.lg,
      xl = _ref.xl,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      title = _ref.title,
      icon = _ref.icon,
      dark = _ref.dark,
      borderless = _ref.borderless,
      _ref$innerClassName = _ref.innerClassName,
      innerClassName = _ref$innerClassName === void 0 ? '' : _ref$innerClassName,
      _ref$outerClassName = _ref.outerClassName,
      outerClassName = _ref$outerClassName === void 0 ? '' : _ref$outerClassName,
      p0 = _ref.p0,
      select = _ref.select,
      children = _ref.children,
      selectHandler = _ref.selectHandler,
      style = _ref.style,
      searchable = _ref.searchable,
      draggable = _ref.draggable,
      closable = _ref.closable;
  var titles = fields.map(function (_ref2) {
    var name = _ref2.name;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "align-middle text-nowrap",
      key: name
    }, name);
  });
  titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "text-center align-middle",
    key: "#"
  }, "SL"));
  if (select) titles.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    className: "align-middle text-center",
    key: "select_all"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "checkbox",
    onClick: selectHandler,
    className: "select_all"
  })));
  var content = array.map(function (item, index) {
    if (limit && index >= limit) return null;
    var inside = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'primary' + index
    }, index + 1)];
    if (select) inside.unshift( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
      className: "text-center align-middle",
      key: 'secondary' + index
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "checkbox",
      value: item._id
    })));
    fields.forEach(function (_ref3) {
      var key = _ref3.key;
      inside.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
        className: "align-middle text-nowrap",
        key: key
      }, item[key]));
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      className: "align-middle",
      key: index + 1
    }, inside);
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: xs,
    sm: sm,
    md: md,
    lg: lg,
    xl: xl,
    className: outerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column h-100 " + (dark ? "text-secondary " : " ") + className,
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "p-3 border-bottom border-soft text-700 text-brokenblue d-flex position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-inline-flex align-items-center"
  }, icon ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    fixedWidth: true,
    className: "mr-2 text-orange",
    icon: icon,
    size: "lg"
  }) : null, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-auto d-none d-lg-flex justify-content-end align-items-center text-secondary position-absolute",
    style: {
      top: '50%',
      right: 16,
      transform: 'translateY(-50%)'
    }
  }, searchable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    type: "search",
    placeholder: "Search here...",
    className: "small bg-soft rounded-0 border-0 text-secondary mr-3"
  }) : null, draggable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faArrowsAlt"],
    size: "lg",
    className: "mr-3"
  }) : null, closable ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"],
    size: "2x"
  }) : null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "flex-fill d-flex flex-column " + (!p0 ? "p-3" : "p-0")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "table-responsive flex-fill"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    dark: dark,
    bordered: bordered,
    borderless: borderless,
    className: innerClassName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    className: "bg-soft text-secondary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", null, titles)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
    className: "bg-soft-50 text-secondary"
  }, content))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pt-3"
  }, children))));
});

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Dashboard/Dashboard.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Dashboard/Dashboard.js ***!
  \*************************************************************************/
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
/* harmony import */ var _WorkTimeTracker_WorkTimeTracker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WorkTimeTracker/WorkTimeTracker */ "./resources/js/src/containers/Backend/User/Dashboard/WorkTimeTracker/WorkTimeTracker.js");
/* harmony import */ var _components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/Backend/UI/Breadcrumb/Breadcrumb */ "./resources/js/src/components/Backend/UI/Breadcrumb/Breadcrumb.js");
/* harmony import */ var _components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../components/UI/Titles/SpecialTitle/SpecialTitle */ "./resources/js/src/components/UI/Titles/SpecialTitle/SpecialTitle.js");
/* harmony import */ var _components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../components/UI/Titles/Subtitle/Subtitle */ "./resources/js/src/components/UI/Titles/Subtitle/Subtitle.js");
/* harmony import */ var _components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../components/Backend/Dashboard/Card/Card */ "./resources/js/src/components/Backend/Dashboard/Card/Card.js");
/* harmony import */ var _components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../components/Backend/UI/Table/Table */ "./resources/js/src/components/Backend/UI/Table/Table.js");
/* harmony import */ var _components_Error_Error__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../components/Error/Error */ "./resources/js/src/components/Error/Error.js");
/* harmony import */ var _components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../components/UI/CustomSpinner/CustomSpinner */ "./resources/js/src/components/UI/CustomSpinner/CustomSpinner.js");
/* harmony import */ var _components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../components/Backend/UI/View/View */ "./resources/js/src/components/Backend/UI/View/View.js");
/* harmony import */ var _components_Backend_UI_Delete_Delete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../components/Backend/UI/Delete/Delete */ "./resources/js/src/components/Backend/UI/Delete/Delete.js");
/* harmony import */ var _components_UI_Button_BetweenButton_BetweenButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../components/UI/Button/BetweenButton/BetweenButton */ "./resources/js/src/components/UI/Button/BetweenButton/BetweenButton.js");
/* harmony import */ var _Backend_User_Vehicles_Actions_View__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../Backend/User/Vehicles/Actions/View */ "./resources/js/src/containers/Backend/User/Vehicles/Actions/View.js");
/* harmony import */ var _Backend_User_Vehicles_Actions_Edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../Backend/User/Vehicles/Actions/Edit */ "./resources/js/src/containers/Backend/User/Vehicles/Actions/Edit.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../store/actions */ "./resources/js/src/store/actions/index.js");
/* harmony import */ var _shared_utility__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../shared/utility */ "./resources/js/src/shared/utility.js");
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






 // Components

















var Dashboard = /*#__PURE__*/function (_Component) {
  _inherits(Dashboard, _Component);

  var _super = _createSuper(Dashboard);

  function Dashboard() {
    var _this;

    _classCallCheck(this, Dashboard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      blocksData: null,
      vehicles: null,
      maintenances: null
    });

    return _this;
  }

  _createClass(Dashboard, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getUserDashboard();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var dashboard = this.props.backend.dashboard;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.dashboardReset();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          blocksData = _this$state.blocksData,
          maintenances = _this$state.maintenances,
          vehicles = _this$state.vehicles;
      var _this$props$backend$d = this.props.backend.dashboard,
          loading = _this$props$backend$d.loading,
          error = _this$props$backend$d.error;
      var content = null;
      var errors = null;
      if (loading) content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
        xs: 12
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_CustomSpinner_CustomSpinner__WEBPACK_IMPORTED_MODULE_13__["default"], null));else {
        errors = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Error_Error__WEBPACK_IMPORTED_MODULE_12__["default"], {
          err: error
        }));

        if (blocksData) {
          var totalVehicles = blocksData.totalVehicles,
              totalMaintenances = blocksData.totalMaintenances,
              totalActions = blocksData.totalActions,
              totalCustomers = blocksData.totalCustomers;
          var data = [{
            title: 'Nombre de véhicules',
            children: totalVehicles,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faClock"],
            link: '/user/vehicles/',
            color: 'paleblue',
            details: 'Véhicules',
            titleColor: 'white',
            circleColor: 'white',
            circleBorder: 'orange'
          }, {
            title: 'Nombre de maintenances',
            children: totalMaintenances,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faLandmark"],
            link: '/user/maintenances/',
            color: 'nightblue',
            details: 'Maintenances',
            titleColor: 'white',
            circleColor: 'orange',
            circleBorder: 'white'
          }, {
            title: 'Nombre d\'actions',
            children: totalActions,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
            link: '/user/actions',
            color: 'pink',
            details: 'Actions',
            titleColor: 'white',
            circleColor: 'orange',
            circleBorder: 'white'
          }, {
            title: 'Nombre de clients',
            children: totalCustomers,
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faStopwatch"],
            link: '/user/customers',
            color: 'green',
            details: 'Clients',
            titleColor: 'white',
            circleColor: 'orange',
            circleBorder: 'white'
          }];
          var cards = data.map(function (_ref, index) {
            var title = _ref.title,
                titleColor = _ref.titleColor,
                icon = _ref.icon,
                link = _ref.link,
                color = _ref.color,
                children = _ref.children,
                details = _ref.details,
                circleBorder = _ref.circleBorder,
                circleColor = _ref.circleColor,
                light = _ref.light;
            return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_Dashboard_Card_Card__WEBPACK_IMPORTED_MODULE_10__["default"], {
              color: color,
              key: index,
              title: title,
              titleColor: titleColor,
              details: details,
              circleBorder: circleBorder,
              circleColor: circleColor,
              icon: icon,
              link: link,
              light: light
            }, children);
          });
          var maintenancesData = maintenances.map(function (day) {
            // const viewContent = <RequestView day={day} country={country} />;
            // const editContent = <Edit day={updateObject(day, { page_status: 'dashboard' })} />;
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["updateObject"])(day, {
              date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["convertDate"])(day.date),
              delivery_date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["convertDate"])(day.delivery_date),
              real_start_date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["convertDate"])(day.real_start_date),
              real_end_date: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["convertDate"])(day.real_end_date)
            });
          });
          var vehiclesData = vehicles.map(function (vehicle) {
            var viewContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Backend_User_Vehicles_Actions_View__WEBPACK_IMPORTED_MODULE_17__["default"], {
              vehicle: vehicle
            });
            var editContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Backend_User_Vehicles_Actions_Edit__WEBPACK_IMPORTED_MODULE_18__["default"], {
              vehicle: vehicle
            });
            return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["updateObject"])(vehicle, {
              created_at: Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["convertDate"])(vehicle.created_at),
              action: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
                className: "text-center"
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_14__["default"], {
                title: 'Détails du véhicule: ' + vehicle.name,
                content: viewContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEye"],
                className: "text-green mr-2",
                fixedWidth: true
              })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_View_View__WEBPACK_IMPORTED_MODULE_14__["default"], {
                title: 'Modifier le véhicule: ' + vehicle.name,
                content: editContent
              }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
                icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEdit"],
                className: "text-brokenblue",
                fixedWidth: true
              })))
            });
          });
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], null, cards), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
            className: "mt-5"
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
            array: maintenancesData,
            draggable: true,
            closable: true,
            title: "Derni\xE8res maintenances",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTasks"],
            bordered: true,
            limit: 5,
            lg: 6,
            outerClassName: "pt-3",
            className: "bg-white shadow-sm",
            fields: [{
              name: 'Exploitant',
              key: 'customer'
            }, {
              name: 'N° d\'ordre',
              key: 'ref'
            }, {
              name: 'Date d\'ordre',
              key: 'date'
            }, {
              name: 'Date de livraison',
              key: 'delivery_date'
            }, {
              name: 'Début réel des travaux',
              key: 'real_start_date'
            }, {
              name: 'Nombre de jours effectifs',
              key: 'days'
            }, {
              name: 'Fin d\'exécution',
              key: 'real_end_date'
            }]
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/user/maintenances",
            className: "text-secondary"
          }, 'Voir la liste complète | >')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Table_Table__WEBPACK_IMPORTED_MODULE_11__["default"], {
            array: vehiclesData,
            draggable: true,
            closable: true,
            title: "V\xE9hicules r\xE9cents",
            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faEnvelope"],
            bordered: true,
            limit: 5,
            lg: 6,
            outerClassName: "pt-3",
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
          }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
            to: "/user/vehicles",
            className: "text-secondary"
          }, 'Voir la liste complète | >'))));
        }
      }
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-white py-4 pl-5 pr-4 position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Backend_UI_Breadcrumb_Breadcrumb__WEBPACK_IMPORTED_MODULE_7__["default"], {
        main: "Tableau de bord",
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTachometerAlt"]
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_SpecialTitle_SpecialTitle__WEBPACK_IMPORTED_MODULE_8__["default"], {
        user: true,
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTachometerAlt"]
      }, "Panneau de l'utilisateur"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_UI_Titles_Subtitle_Subtitle__WEBPACK_IMPORTED_MODULE_9__["default"], {
        user: true
      }, "Tableau de bord")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-4 pb-0"
      }, errors, content));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.backend.dashboard.blocksData && !prevState.blocksData) {
        return Object(_shared_utility__WEBPACK_IMPORTED_MODULE_20__["updateObject"])(prevState, _objectSpread({}, nextProps.backend.dashboard));
      } // if (nextProps.backend.requests.requests && !prevState.requestsRequests) return updateObject(prevState, { requestsRequests: nextProps.backend.requests.requests });


      return prevState;
    }
  }]);

  return Dashboard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return _objectSpread({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getUserDashboard: function getUserDashboard() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_19__["getUserDashboard"]());
    },
    dashboardReset: function dashboardReset() {
      return dispatch(_store_actions__WEBPACK_IMPORTED_MODULE_19__["dashboardReset"]());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Dashboard)));

/***/ }),

/***/ "./resources/js/src/containers/Backend/User/Dashboard/WorkTimeTracker/WorkTimeTracker.js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/containers/Backend/User/Dashboard/WorkTimeTracker/WorkTimeTracker.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FinanceTracker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recharts */ "./node_modules/recharts/es6/index.js");
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




var FinanceTracker = /*#__PURE__*/function (_PureComponent) {
  _inherits(FinanceTracker, _PureComponent);

  var _super = _createSuper(FinanceTracker);

  function FinanceTracker() {
    _classCallCheck(this, FinanceTracker);

    return _super.apply(this, arguments);
  }

  _createClass(FinanceTracker, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["ResponsiveContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
        data: this.props.data
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["CartesianGrid"], {
        strokeDasharray: "3 3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["XAxis"], {
        dataKey: "name"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["YAxis"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Legend"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "pending",
        fill: "#e79300"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "cancelled",
        fill: "#ff0b33"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recharts__WEBPACK_IMPORTED_MODULE_1__["Bar"], {
        dataKey: "solved",
        fill: "#049d27"
      })));
    }
  }]);

  return FinanceTracker;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

_defineProperty(FinanceTracker, "jsfiddleUrl", 'https://jsfiddle.net/alidingling/30763kr7/');



/***/ })

}]);