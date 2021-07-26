(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-config-config-module"], {
    /***/
    "0KAq":
    /*!*****************************************************************!*\
      !*** ./src/app/modules/config/main-view/main-view.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MainViewComponent */

    /***/
    function KAq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainViewComponent", function () {
        return MainViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/electron.service */
      "o7AV");

      var MainViewComponent = /*#__PURE__*/function () {
        function MainViewComponent(_electron) {
          _classCallCheck(this, MainViewComponent);

          this._electron = _electron;
        }

        _createClass(MainViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._electron.getIp().then(function (res) {
              _this.ip = res;
            });
          }
        }]);

        return MainViewComponent;
      }();

      MainViewComponent.ɵfac = function MainViewComponent_Factory(t) {
        return new (t || MainViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]));
      };

      MainViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainViewComponent,
        selectors: [["conf-main-view"]],
        decls: 5,
        vars: 1,
        consts: [[1, "input-group", 2, "max-width", "300px"], [1, "input-group-prepend"], [1, "input-group-text"], ["type", "text", "readonly", "", 1, "form-control", 3, "placeholder"]],
        template: function MainViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "IP:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("placeholder", ctx.ip ? ctx.ip : "No est\xE1 conectado ninguna red");
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'conf-main-view',
            templateUrl: './main-view.component.html',
            styleUrls: ['./main-view.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Tmgp":
    /*!*********************************************************!*\
      !*** ./src/app/modules/config/config-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ConfigRoutingModule */

    /***/
    function Tmgp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigRoutingModule", function () {
        return ConfigRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-view/main-view.component */
      "0KAq");

      var routes = [{
        path: '',
        component: _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_2__["MainViewComponent"]
      }];

      var ConfigRoutingModule = function ConfigRoutingModule() {
        _classCallCheck(this, ConfigRoutingModule);
      };

      ConfigRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ConfigRoutingModule
      });
      ConfigRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ConfigRoutingModule_Factory(t) {
          return new (t || ConfigRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "VU6V":
    /*!*************************************************!*\
      !*** ./src/app/modules/config/config.module.ts ***!
      \*************************************************/

    /*! exports provided: ConfigModule */

    /***/
    function VU6V(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ConfigModule", function () {
        return ConfigModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _config_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./config-routing.module */
      "Tmgp");
      /* harmony import */


      var _main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main-view/main-view.component */
      "0KAq");

      var ConfigModule = function ConfigModule() {
        _classCallCheck(this, ConfigModule);
      };

      ConfigModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: ConfigModule
      });
      ConfigModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function ConfigModule_Factory(t) {
          return new (t || ConfigModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _config_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ConfigModule, {
          declarations: [_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__["MainViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _config_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfigModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_view_main_view_component__WEBPACK_IMPORTED_MODULE_3__["MainViewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _config_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfigRoutingModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-config-config-module-es5.js.map