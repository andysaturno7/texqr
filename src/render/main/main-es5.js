(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Andy Sánchez\Desktop\apps\electron-training\fervi\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "3Ej/":
    /*!*******************************************!*\
      !*** ./src/app/services/rooms.service.ts ***!
      \*******************************************/

    /*! exports provided: RoomsService */

    /***/
    function Ej(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RoomsService", function () {
        return RoomsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./electron.service */
      "o7AV");

      var RoomsService = /*#__PURE__*/function () {
        function RoomsService(_electron) {
          _classCallCheck(this, RoomsService);

          this._electron = _electron;
          this.rooms$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.rooms = this.rooms$.asObservable();

          if (_electron.isElectron()) {
            this.invokeRooms();
          }
        }

        _createClass(RoomsService, [{
          key: "setRooms",
          value: function setRooms(rooms) {
            this.rooms$.next(rooms);
          }
        }, {
          key: "invokeRooms",
          value: function invokeRooms() {
            var _this = this;

            if (this._electron.isElectron()) {
              this._electron.invoke('get_rooms', null).then(function (rooms) {
                _this.rooms$.next(rooms);
              });
            }
          }
        }, {
          key: "getRooms",
          get: function get() {
            return this.rooms$.getValue();
          }
        }]);

        return RoomsService;
      }();

      RoomsService.ɵfac = function RoomsService_Factory(t) {
        return new (t || RoomsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]));
      };

      RoomsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RoomsService,
        factory: RoomsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "59QQ":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/registrants/registrants-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: RegistrantsRoutingModule */

    /***/
    function QQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrantsRoutingModule", function () {
        return RegistrantsRoutingModule;
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


      var _root_registrants_root_registrants_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./root-registrants/root-registrants.component */
      "lEui");

      var routes = [{
        path: 'registro',
        component: _root_registrants_root_registrants_component__WEBPACK_IMPORTED_MODULE_2__["RootRegistrantsComponent"]
      }];

      var RegistrantsRoutingModule = function RegistrantsRoutingModule() {
        _classCallCheck(this, RegistrantsRoutingModule);
      };

      RegistrantsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RegistrantsRoutingModule
      });
      RegistrantsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RegistrantsRoutingModule_Factory(t) {
          return new (t || RegistrantsRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrantsRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrantsRoutingModule, [{
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
    "5U9e":
    /*!********************************************!*\
      !*** ./src/app/services/socket.service.ts ***!
      \********************************************/

    /*! exports provided: SocketService */

    /***/
    function U9e(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SocketService", function () {
        return SocketService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _registrants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registrants.service */
      "uf/k");
      /* harmony import */


      var _asistance_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./asistance.service */
      "8jQU");
      /* harmony import */


      var _systems_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./systems.service */
      "vkYu");
      /* harmony import */


      var _rooms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./rooms.service */
      "3Ej/");

      var SocketService = /*#__PURE__*/function () {
        function SocketService(_registrants, _asistance, _systems, _rooms) {
          var _this2 = this;

          _classCallCheck(this, SocketService);

          this._registrants = _registrants;
          this._asistance = _asistance;
          this._systems = _systems;
          this._rooms = _rooms;
          this.message = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this.uriServer = 'http://127.0.0.1:5050';

          if (window.require) {
            var io = window.require('socket.io-client');

            this.socket = io(this.uriServer);
            this.socket.emit('connect_client', {
              name: 'localMachine',
              room: 'globalRoom'
            });
            this.socket.on('welcome', function (data) {
              alert(data.message);
            });
            this.socket.on('updated_registrant', function (data) {
              var asistData = _this2._asistance.getData();

              asistData.total = data.length;

              _this2._asistance.setData(asistData);

              _this2._registrants.setRegistrants(data);
            });
            this.socket.on('dropped_registrants', function () {
              var asistData = _this2._asistance.getData();

              asistData.total = 0;

              _this2._asistance.setData(asistData);

              _this2._registrants.setRegistrants(null);
            });
            this.socket.on('updated_asistance', function (data) {
              _this2._asistance.setData(data);
            });
            this.socket.on('dropped_asistance', function () {
              _this2._asistance.setData(null);
            });
            this.socket.on('updated_systems', function (data) {
              _this2._systems.setSystems(data.systems);
            });
            this.socket.on('updated_rooms', function (data) {
              console.log('rooms Updated: ' + data);
            });
          }
        }

        _createClass(SocketService, [{
          key: "getUriServer",
          value: function getUriServer() {
            return this.uriServer;
          }
        }]);

        return SocketService;
      }();

      SocketService.ɵfac = function SocketService_Factory(t) {
        return new (t || SocketService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_registrants_service__WEBPACK_IMPORTED_MODULE_2__["RegistrantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_asistance_service__WEBPACK_IMPORTED_MODULE_3__["AsistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_systems_service__WEBPACK_IMPORTED_MODULE_4__["SystemsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_rooms_service__WEBPACK_IMPORTED_MODULE_5__["RoomsService"]));
      };

      SocketService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SocketService,
        factory: SocketService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocketService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _registrants_service__WEBPACK_IMPORTED_MODULE_2__["RegistrantsService"]
          }, {
            type: _asistance_service__WEBPACK_IMPORTED_MODULE_3__["AsistanceService"]
          }, {
            type: _systems_service__WEBPACK_IMPORTED_MODULE_4__["SystemsService"]
          }, {
            type: _rooms_service__WEBPACK_IMPORTED_MODULE_5__["RoomsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "7eNj":
    /*!*****************************************************************************!*\
      !*** ./src/app/modules/pre-data/load-data-view/load-data-view.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: LoadDataViewComponent */

    /***/
    function eNj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoadDataViewComponent", function () {
        return LoadDataViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/agRenderer/options-table/options-table.component */
      "DCFc");
      /* harmony import */


      var src_app_services_asistance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/asistance.service */
      "8jQU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../data-view/data-view.component */
      "Tuzo");

      var _c0 = ["agGrid"];

      function LoadDataViewComponent_ng_container_4_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "data-view", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", i_r2.data)("title", i_r2.title);
        }
      }

      function LoadDataViewComponent_ng_container_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LoadDataViewComponent_ng_container_4_div_1_Template, 2, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataAsistance);
        }
      }

      var LoadDataViewComponent = /*#__PURE__*/function () {
        function LoadDataViewComponent(_asistance, cdr) {
          _classCallCheck(this, LoadDataViewComponent);

          this._asistance = _asistance;
          this.cdr = cdr;
          this.columnDefs = [{
            field: 'id',
            checkboxSelection: true,
            maxWidth: 100
          }, {
            headerName: '',
            cellRendererFramework: _shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_1__["OptionsTableComponent"],
            maxWidth: 60,
            text: 'left'
          }, {
            field: 'name',
            headerName: 'Nombre',
            sortable: true,
            filter: true,
            editable: true
          }, {
            field: 'code',
            filter: true,
            editable: true,
            cellRenderer: this.getCodeCellRender
          }];
          this.defaultColDef = {
            minWidth: 120
          };
          this.rowData = [{
            id: 258,
            name: 'Andy',
            code: 45657
          }, {
            id: 258,
            name: 'Marcelo',
            code: 45657
          }, {
            id: 258,
            name: 'Carmelo',
            code: 45657
          }, {
            id: 258,
            name: 'Luis',
            code: 45657
          }, {
            id: 258,
            name: 'Andy',
            code: 45657
          }, {
            id: 258,
            name: 'Marcelo',
            code: 45657
          }, {
            id: 258,
            name: 'Carmelo',
            code: 45657
          }, {
            id: 258,
            name: 'Luis',
            code: 45657
          }];
        }

        _createClass(LoadDataViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subscAsistance();
          }
        }, {
          key: "subscAsistance",
          value: function subscAsistance() {
            var _this3 = this;

            this._asistance.data.subscribe(function (res) {
              if (res !== null) {
                _this3.dataAsistance = [{
                  title: 'Aforo',
                  data: res.total
                }, {
                  title: 'Afluencia',
                  data: res.connected.count
                }, {
                  title: 'Asistencia',
                  data: res.asistance
                }];

                _this3.cdr.detectChanges();
              }
            });
          }
        }, {
          key: "onRowChange",
          value: function onRowChange(event) {
            console.log(event.data);
          }
        }, {
          key: "getSelectedRow",
          value: function getSelectedRow() {
            var selectedNodes = this.table.api.getSelectedNodes();
            var selectedData = selectedNodes.map(function (node) {
              return node.data;
            });
            console.log(selectedData);
          }
        }, {
          key: "exportTable",
          value: function exportTable() {
            this.table.api.exportDataAsCsv();
          }
        }, {
          key: "getCodeCellRender",
          value: function getCodeCellRender(params) {
            return "\n      <i class=\"fa fa-qrcode mr-2 text-primary\"></i>".concat(params.value, "\n    ");
          }
        }]);

        return LoadDataViewComponent;
      }();

      LoadDataViewComponent.ɵfac = function LoadDataViewComponent_Factory(t) {
        return new (t || LoadDataViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_asistance_service__WEBPACK_IMPORTED_MODULE_2__["AsistanceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      LoadDataViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoadDataViewComponent,
        selectors: [["load-data-view"]],
        viewQuery: function LoadDataViewComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        decls: 5,
        vars: 1,
        consts: [[1, "row"], [1, "col-sm-9"], [1, "col-sm-3"], [1, "row", "m-0", "p-0", 2, "display", "flex", "justify-content", "space-evenly"], [4, "ngIf"], ["class", "my-3", "style", "width: 200px", 4, "ngFor", "ngForOf"], [1, "my-3", 2, "width", "200px"], [3, "data", "title"]],
        template: function LoadDataViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoadDataViewComponent_ng_container_4_Template, 2, 1, "ng-container", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataAsistance);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_4__["DataViewComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkLWRhdGEtdmlldy5jb21wb25lbnQuY3NzIn0= */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadDataViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'load-data-view',
            templateUrl: './load-data-view.component.html',
            styleUrls: ['./load-data-view.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: src_app_services_asistance_service__WEBPACK_IMPORTED_MODULE_2__["AsistanceService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['agGrid']
          }]
        });
      })();
      /***/

    },

    /***/
    "8jQU":
    /*!***********************************************!*\
      !*** ./src/app/services/asistance.service.ts ***!
      \***********************************************/

    /*! exports provided: AsistanceService */

    /***/
    function jQU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AsistanceService", function () {
        return AsistanceService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./electron.service */
      "o7AV");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AsistanceService = /*#__PURE__*/function () {
        function AsistanceService(_electron, http) {
          var _this4 = this;

          _classCallCheck(this, AsistanceService);

          this._electron = _electron;
          this.http = http;
          this.sampleData = [{
            id: 456,
            joinTime: 5454,
            leaveTime: 1235,
            Registrant: {
              firstName: 'Andy',
              lastName: 'Sanchez'
            }
          }];
          this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
          this.data = this.data$.asObservable();
          this.asistance$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sampleData);
          this.asistance = this.asistance$.asObservable();

          if (_electron.isElectron()) {
            this._electron.invoke('get_asistance_count', null).then(function (res) {
              _this4.data$.next(res);
            })["catch"](function (err) {
              console.error(err);
            });
          }
        }

        _createClass(AsistanceService, [{
          key: "setData",
          value: function setData(newData) {
            this.data$.next(newData);
          }
        }, {
          key: "getData",
          value: function getData() {
            return this.data$.getValue();
          }
        }, {
          key: "setAsistance",
          value: function setAsistance(asist) {
            this.asistance$.next(asist);
          }
        }, {
          key: "getAsistance",
          value: function getAsistance() {
            var _this5 = this;

            if (this._electron.isElectron()) {
              this._electron.invoke('get_asistance', null).then(function (res) {
                _this5.setAsistance(res);
              })["catch"](function (err) {
                return console.error(err);
              });
            }
          }
        }]);

        return AsistanceService;
      }();

      AsistanceService.ɵfac = function AsistanceService_Factory(t) {
        return new (t || AsistanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
      };

      AsistanceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: AsistanceService,
        factory: AsistanceService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsistanceService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Cl3E":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/shared/agRenderer/qr-renderer/qr-renderer.component.ts ***!
      \********************************************************************************/

    /*! exports provided: QrRendererComponent */

    /***/
    function Cl3E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "QrRendererComponent", function () {
        return QrRendererComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var QrRendererComponent = /*#__PURE__*/function () {
        function QrRendererComponent() {
          _classCallCheck(this, QrRendererComponent);
        }

        _createClass(QrRendererComponent, [{
          key: "agInit",
          value: function agInit(params) {
            this.params = params;
          }
        }, {
          key: "refresh",
          value: function refresh(params) {
            this.params = params;
          }
        }, {
          key: "touchQR",
          value: function touchQR() {
            this.params.context.componentParent.QRTouched(this.params.value);
          }
        }]);

        return QrRendererComponent;
      }();

      QrRendererComponent.ɵfac = function QrRendererComponent_Factory(t) {
        return new (t || QrRendererComponent)();
      };

      QrRendererComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: QrRendererComponent,
        selectors: [["qr-renderer"]],
        decls: 2,
        vars: 1,
        consts: [["role", "button", 1, "fa", "fa-qrcode", "mr-2", "text-primary", 3, "click"]],
        template: function QrRendererComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QrRendererComponent_Template_i_click_0_listener() {
              return ctx.touchQR();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.params.value);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJxci1yZW5kZXJlci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QrRendererComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'qr-renderer',
            template: "<i\n      class=\"fa fa-qrcode mr-2 text-primary\"\n      role=\"button\"\n      (click)=\"touchQR()\"\n    ></i\n    >{{ params.value }}",
            styleUrls: ['./qr-renderer.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "DCFc":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/shared/agRenderer/options-table/options-table.component.ts ***!
      \************************************************************************************/

    /*! exports provided: OptionsTableComponent */

    /***/
    function DCFc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OptionsTableComponent", function () {
        return OptionsTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var OptionsTableComponent = /*#__PURE__*/function () {
        function OptionsTableComponent() {
          _classCallCheck(this, OptionsTableComponent);

          this.connected = 'danger';
        }

        _createClass(OptionsTableComponent, [{
          key: "agInit",
          value: function agInit(params) {
            this.params = params;
            this.text = params.colDef.text || 'right';
            this.connected = params.data.connected > 0 ? 'success' : 'secondary';
          }
        }, {
          key: "refresh",
          value: function refresh(params) {
            this.params = params;
          }
        }, {
          key: "editItem",
          value: function editItem() {
            this.params.context.componentParent.editItem(this.params.data.id);
          }
        }, {
          key: "deleteItem",
          value: function deleteItem() {
            this.params.context.componentParent.deleteItem(this.params.data.id);
          }
        }, {
          key: "alert",
          value: function (_alert) {
            function alert(_x) {
              return _alert.apply(this, arguments);
            }

            alert.toString = function () {
              return _alert.toString();
            };

            return alert;
          }(function (ctx) {
            alert(ctx);
          })
        }]);

        return OptionsTableComponent;
      }();

      OptionsTableComponent.ɵfac = function OptionsTableComponent_Factory(t) {
        return new (t || OptionsTableComponent)();
      };

      OptionsTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: OptionsTableComponent,
        selectors: [["options-table"]],
        decls: 4,
        vars: 4,
        consts: [["role", "button", 1, "fa", "fa-pencil", "text-primary", "ml-2", 3, "click"], ["role", "button", 1, "fa", "fa-trash", "text-secondary", "ml-2", 3, "click"]],
        template: function OptionsTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsTableComponent_Template_i_click_2_listener() {
              return ctx.editItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OptionsTableComponent_Template_i_click_3_listener() {
              return ctx.deleteItem();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"]("float: " + ctx.text);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("fa fa-circle text-" + ctx.connected);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionsTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'options-table',
            templateUrl: './options-table.component.html'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "F7u2":
    /*!*************************************************************!*\
      !*** ./src/app/modules/pre-data/pre-data-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: PreDataRoutingModule */

    /***/
    function F7u2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreDataRoutingModule", function () {
        return PreDataRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [];

      var PreDataRoutingModule = function PreDataRoutingModule() {
        _classCallCheck(this, PreDataRoutingModule);
      };

      PreDataRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PreDataRoutingModule
      });
      PreDataRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PreDataRoutingModule_Factory(t) {
          return new (t || PreDataRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreDataRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreDataRoutingModule, [{
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
    "FpXt":
    /*!*************************************************!*\
      !*** ./src/app/modules/shared/shared.module.ts ***!
      \*************************************************/

    /*! exports provided: SharedModule */

    /***/
    function FpXt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./pipes/search.pipe */
      "mPR0");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");
      /* harmony import */


      var _agRenderer_qr_renderer_qr_renderer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./agRenderer/qr-renderer/qr-renderer.component */
      "Cl3E");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"], _agRenderer_qr_renderer_qr_renderer_component__WEBPACK_IMPORTED_MODULE_4__["QrRendererComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"]],
          exports: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"], _agRenderer_qr_renderer_qr_renderer_component__WEBPACK_IMPORTED_MODULE_4__["QrRendererComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_3__["AgGridModule"]],
            exports: [_pipes_search_pipe__WEBPACK_IMPORTED_MODULE_2__["SearchPipe"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "HVfF":
    /*!***************************************************!*\
      !*** ./src/app/components/list/list.component.ts ***!
      \***************************************************/

    /*! exports provided: ListComponent */

    /***/
    function HVfF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
        return ListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_electron_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/electron.service */
      "o7AV");

      var ListComponent = /*#__PURE__*/function () {
        function ListComponent(_electron) {
          _classCallCheck(this, ListComponent);

          this._electron = _electron;
          this.isElectron = null;
          this.participants = ['Andy Gabriel Sanchez Sandoval', 'Gabrielon', 'Sanchez', 'Sandoval', 'Eriberto'];
          this.isElectron = _electron.isElectron();
        }

        _createClass(ListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "update",
          value: function update() {}
        }, {
          key: "dragover",
          value: function dragover(ev) {
            ev.preventDefault();
          }
        }, {
          key: "drop",
          value: function drop(ev) {
            console.log(ev);
          }
        }]);

        return ListComponent;
      }();

      ListComponent.ɵfac = function ListComponent_Factory(t) {
        return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_electron_service__WEBPACK_IMPORTED_MODULE_1__["ElectronService"]));
      };

      ListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ListComponent,
        selectors: [["app-list"]],
        decls: 2,
        vars: 0,
        template: function ListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "list-component works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.css']
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
    "JoN+":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/shared/agRenderer/input-cell/input-cell.component.ts ***!
      \******************************************************************************/

    /*! exports provided: InputCellComponent */

    /***/
    function JoN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InputCellComponent", function () {
        return InputCellComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var _c0 = ["input"];

      var InputCellComponent = /*#__PURE__*/function () {
        function InputCellComponent() {
          _classCallCheck(this, InputCellComponent);
        }

        _createClass(InputCellComponent, [{
          key: "getGui",
          value: function getGui() {
            return this.input.nativeElement;
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {// setTimeout(() => this.input.element.nativeElement.focus());
          }
        }, {
          key: "agInit",
          value: function agInit(params) {
            alert('Iniciado');
            console.log('params: ' + params);
            this.params = params;
            this.value = params.value;
          }
        }, {
          key: "getValue",
          value: function getValue() {
            return this.value;
          }
        }, {
          key: "isCancelBeforeStart",
          value: function isCancelBeforeStart() {
            return false;
          }
        }, {
          key: "isCancelAfterEnd",
          value: function isCancelAfterEnd() {
            return false;
          }
        }]);

        return InputCellComponent;
      }();

      InputCellComponent.ɵfac = function InputCellComponent_Factory(t) {
        return new (t || InputCellComponent)();
      };

      InputCellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: InputCellComponent,
        selectors: [["input-cell"]],
        viewQuery: function InputCellComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
          }
        },
        decls: 2,
        vars: 1,
        consts: [["type", "number", 1, "form-control", "bg-dark", 3, "value"], ["input", ""]],
        template: function InputCellComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 0, 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value);
          }
        },
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputCellComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'input-cell',
            template: '<input type="number" class="form-control bg-dark" [value]="value" #input />'
          }]
        }], null, {
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input']
          }]
        });
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _components_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./components/client-layout/client-layout.component */
      "mPyS");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'fervi';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        consts: [[1, "w-100"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "client-layout", 0);
          }
        },
        directives: [_components_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_1__["ClientLayoutComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Tuzo":
    /*!*******************************************************************!*\
      !*** ./src/app/modules/pre-data/data-view/data-view.component.ts ***!
      \*******************************************************************/

    /*! exports provided: DataViewComponent */

    /***/
    function Tuzo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DataViewComponent", function () {
        return DataViewComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var DataViewComponent = /*#__PURE__*/function () {
        function DataViewComponent() {
          _classCallCheck(this, DataViewComponent);

          this.title = null;
          this.data = null;
        }

        _createClass(DataViewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DataViewComponent;
      }();

      DataViewComponent.ɵfac = function DataViewComponent_Factory(t) {
        return new (t || DataViewComponent)();
      };

      DataViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DataViewComponent,
        selectors: [["data-view"]],
        inputs: {
          title: "title",
          data: "data"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "card", "shadow", 2, "width", "100%"], [1, "card-body"], [1, "text-center", "text-secondary"], [1, "text-center", "text-primary", 2, "font-size", "30px"]],
        template: function DataViewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXRhLXZpZXcuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataViewComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'data-view',
            templateUrl: './data-view.component.html',
            styleUrls: ['./data-view.component.css']
          }]
        }], function () {
          return [];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Ymua":
    /*!*****************************************************************!*\
      !*** ./src/app/components/main-client/main-client.component.ts ***!
      \*****************************************************************/

    /*! exports provided: MainClientComponent */

    /***/
    function Ymua(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainClientComponent", function () {
        return MainClientComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/services/socket.service */
      "5U9e");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var MainClientComponent = /*#__PURE__*/function () {
        function MainClientComponent(_ws) {
          _classCallCheck(this, MainClientComponent);

          this._ws = _ws;
          this.isScanActive = true;
          this.uri = null;
          this.dataAsistance = [{
            title: 'Total',
            data: 250
          }, {
            title: 'Presencial',
            data: 50
          }, {
            title: 'En línea',
            data: 200
          }];
          this.uri = _ws.getUriServer();
        }

        _createClass(MainClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainClientComponent;
      }();

      MainClientComponent.ɵfac = function MainClientComponent_Factory(t) {
        return new (t || MainClientComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]));
      };

      MainClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainClientComponent,
        selectors: [["main-client"]],
        decls: 2,
        vars: 0,
        consts: [[1, "p-3", 2, "height", "100%", "overflow-y", "auto"]],
        template: function MainClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLWNsaWVudC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainClientComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'main-client',
            templateUrl: './main-client.component.html',
            styleUrls: ['./main-client.component.css']
          }]
        }], function () {
          return [{
            type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ngx-formly/core */
      "0FS3");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _modules_registrants_registrants_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./modules/registrants/registrants.module */
      "pCfQ");
      /* harmony import */


      var _modules_pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./modules/pre-data/pre-data.module */
      "ZXe1");
      /* harmony import */


      var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./modules/shared/shared.module */
      "FpXt");
      /* harmony import */


      var _components_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./components/list/list.component */
      "HVfF");
      /* harmony import */


      var _components_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/client-layout/client-layout.component */
      "mPyS");
      /* harmony import */


      var _components_side_client_side_client_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/side-client/side-client.component */
      "gOv7");
      /* harmony import */


      var _components_main_client_main_client_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/main-client/main-client.component */
      "Ymua");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: 'API_URL',
          useValue: 'http://127.0.0.1:5050'
        }],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _modules_pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__["PreDataModule"], _modules_registrants_registrants_module__WEBPACK_IMPORTED_MODULE_8__["RegistrantsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forRoot({
          extras: {
            lazyRender: true
          }
        })]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"], _components_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_12__["ClientLayoutComponent"], _components_side_client_side_client_component__WEBPACK_IMPORTED_MODULE_13__["SideClientComponent"], _components_main_client_main_client_component__WEBPACK_IMPORTED_MODULE_14__["MainClientComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _modules_pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__["PreDataModule"], _modules_registrants_registrants_module__WEBPACK_IMPORTED_MODULE_8__["RegistrantsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_list_list_component__WEBPACK_IMPORTED_MODULE_11__["ListComponent"], _components_client_layout_client_layout_component__WEBPACK_IMPORTED_MODULE_12__["ClientLayoutComponent"], _components_side_client_side_client_component__WEBPACK_IMPORTED_MODULE_13__["SideClientComponent"], _components_main_client_main_client_component__WEBPACK_IMPORTED_MODULE_14__["MainClientComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__["CommonModule"], _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"], _modules_pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__["PreDataModule"], _modules_registrants_registrants_module__WEBPACK_IMPORTED_MODULE_8__["RegistrantsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _ngx_formly_core__WEBPACK_IMPORTED_MODULE_6__["FormlyModule"].forRoot({
              extras: {
                lazyRender: true
              }
            })],
            providers: [{
              provide: 'API_URL',
              useValue: 'http://127.0.0.1:5050'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZXe1":
    /*!*****************************************************!*\
      !*** ./src/app/modules/pre-data/pre-data.module.ts ***!
      \*****************************************************/

    /*! exports provided: PreDataModule */

    /***/
    function ZXe1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PreDataModule", function () {
        return PreDataModule;
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


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");
      /* harmony import */


      var _pre_data_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./pre-data-routing.module */
      "F7u2");
      /* harmony import */


      var _load_data_view_load_data_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./load-data-view/load-data-view.component */
      "7eNj");
      /* harmony import */


      var _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./data-view/data-view.component */
      "Tuzo");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../shared/agRenderer/options-table/options-table.component */
      "DCFc");
      /* harmony import */


      var _shared_agRenderer_input_cell_input_cell_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../shared/agRenderer/input-cell/input-cell.component */
      "JoN+");

      var PreDataModule = function PreDataModule() {
        _classCallCheck(this, PreDataModule);
      };

      PreDataModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PreDataModule
      });
      PreDataModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PreDataModule_Factory(t) {
          return new (t || PreDataModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pre_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreDataRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridModule"].withComponents([_shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_8__["OptionsTableComponent"], _shared_agRenderer_input_cell_input_cell_component__WEBPACK_IMPORTED_MODULE_9__["InputCellComponent"]])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PreDataModule, {
          declarations: [_load_data_view_load_data_view_component__WEBPACK_IMPORTED_MODULE_4__["LoadDataViewComponent"], _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_5__["DataViewComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pre_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreDataRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridModule"]],
          exports: [_load_data_view_load_data_view_component__WEBPACK_IMPORTED_MODULE_4__["LoadDataViewComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreDataModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_load_data_view_load_data_view_component__WEBPACK_IMPORTED_MODULE_4__["LoadDataViewComponent"], _data_view_data_view_component__WEBPACK_IMPORTED_MODULE_5__["DataViewComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _pre_data_routing_module__WEBPACK_IMPORTED_MODULE_3__["PreDataRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_2__["AgGridModule"].withComponents([_shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_8__["OptionsTableComponent"], _shared_agRenderer_input_cell_input_cell_component__WEBPACK_IMPORTED_MODULE_9__["InputCellComponent"]])],
            exports: [_load_data_view_load_data_view_component__WEBPACK_IMPORTED_MODULE_4__["LoadDataViewComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "gOv7":
    /*!*****************************************************************!*\
      !*** ./src/app/components/side-client/side-client.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SideClientComponent */

    /***/
    function gOv7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SideClientComponent", function () {
        return SideClientComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var SideClientComponent = /*#__PURE__*/function () {
        function SideClientComponent() {
          _classCallCheck(this, SideClientComponent);

          this.selected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        }

        _createClass(SideClientComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "onSelected",
          value: function onSelected() {
            this.selected.emit();
          }
        }]);

        return SideClientComponent;
      }();

      SideClientComponent.ɵfac = function SideClientComponent_Factory(t) {
        return new (t || SideClientComponent)();
      };

      SideClientComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SideClientComponent,
        selectors: [["side-client"]],
        outputs: {
          selected: "selected"
        },
        decls: 25,
        vars: 0,
        consts: [[1, "w-100", "logo-container"], ["src", "assets/img/logo.png", "alt", "logo", 2, "max-height", "80px", "width", "auto"], ["role", "tablist", "aria-orientation", "vertical", 1, "nav", "flex-column", "nav-pills"], ["routerLink", "client", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "fa", "fa-dashboard"], ["routerLink", "salas", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "fa", "fa-bookmark"], ["routerLink", "equipos", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "fa", "fa-feed"], ["routerLink", "registro", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "fa", "fa-address-book"], ["routerLink", "asistencia", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "fa", "fa-check"], ["routerLink", "settings", "routerLinkActive", "active", 1, "nav-link", 3, "click"], [1, "fa", "fa-wrench"], [1, "barb-container"], ["src", "assets/img/barb.png"]],
        template: function SideClientComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideClientComponent_Template_a_click_3_listener() {
              return ctx.onSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideClientComponent_Template_a_click_6_listener() {
              return ctx.onSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Salas");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideClientComponent_Template_a_click_9_listener() {
              return ctx.onSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Equipos");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideClientComponent_Template_a_click_12_listener() {
              return ctx.onSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Registro");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideClientComponent_Template_a_click_15_listener() {
              return ctx.onSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Asistencia");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SideClientComponent_Template_a_click_18_listener() {
              return ctx.onSelected();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Configuraci\xF3n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Andy Development");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
        styles: [".active[_ngcontent-%COMP%] {\r\n  background-color: #17a2b8 !important;\r\n  border-radius: 0 !important;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #17a2b8;\r\n}\r\n\r\n.logo-container[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.barb-container[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  position: absolute;\r\n  bottom: 0;\r\n}\r\n\r\n.barb-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 35px;\r\n}\r\n\r\n.barb-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #17a2b8;\r\n  font-size: small;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  img[_ngcontent-%COMP%] {\r\n    max-width: 256px;\r\n  }\r\n\r\n  a[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZGUtY2xpZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBb0M7RUFDcEMsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNpZGUtY2xpZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzE3YTJiODtcclxufVxyXG5cclxuLmxvZ28tY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmFyYi1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5iYXJiLWNvbnRhaW5lciBpbWcge1xyXG4gIHdpZHRoOiAzNXB4O1xyXG59XHJcbi5iYXJiLWNvbnRhaW5lciBzcGFuIHtcclxuICBjb2xvcjogIzE3YTJiODtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDI1NnB4O1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SideClientComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'side-client',
            templateUrl: './side-client.component.html',
            styleUrls: ['./side-client.component.css']
          }]
        }], function () {
          return [];
        }, {
          selected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "gXI+":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/registrants/add-registrant/add-registrant.component.ts ***!
      \********************************************************************************/

    /*! exports provided: AddRegistrantComponent */

    /***/
    function gXI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRegistrantComponent", function () {
        return AddRegistrantComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var src_app_services_registrants_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/services/registrants.service */
      "uf/k");

      var AddRegistrantComponent = /*#__PURE__*/function () {
        function AddRegistrantComponent(fb, _registrant) {
          _classCallCheck(this, AddRegistrantComponent);

          this.fb = fb;
          this._registrant = _registrant;
          this.regisForm = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: [''],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            company: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(30)],
            chair: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(8)]],
            code: ['']
          });
        }

        _createClass(AddRegistrantComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "send",
          value: function send() {
            this._registrant.addOne(this.regisForm.value);

            this.regisForm.reset();
          }
        }]);

        return AddRegistrantComponent;
      }();

      AddRegistrantComponent.ɵfac = function AddRegistrantComponent_Factory(t) {
        return new (t || AddRegistrantComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_registrants_service__WEBPACK_IMPORTED_MODULE_2__["RegistrantsService"]));
      };

      AddRegistrantComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddRegistrantComponent,
        selectors: [["add-registrant"]],
        decls: 32,
        vars: 2,
        consts: [[1, "card", "shadow"], [1, "card-body"], [1, "row", "text-secondary", 3, "formGroup"], [1, "col-sm"], ["for", "regisName", 1, "col"], ["formControlName", "firstName", "type", "text", "id", "regisName", 1, "form-control", "form-control-sm"], ["for", "regisLast", 1, "col"], ["formControlName", "lastName", "type", "text", "id", "regisLast", 1, "form-control", "form-control-sm"], ["for", "regisEmail", 1, "col"], ["formControlName", "email", "type", "email", "id", "regisEmail", 1, "form-control", "form-control-sm"], ["for", "regisCompany", 1, "col"], ["formControlName", "company", "type", "text", "id", "regisCompany", 1, "form-control", "form-control-sm"], ["for", "regisChair", 1, "col"], ["formControlName", "chair", "type", "text", "id", "regisChair", 1, "form-control", "form-control-sm"], ["for", "regisCode", 1, "col"], ["formControlName", "code", "type", "text", "id", "regisCode", 1, "form-control", "form-control-sm"], [2, "opacity", "0"], ["type", "submit", 1, "btn", "btn-primary", "btn-sm", "col-sm", 3, "disabled", "click"], [1, "fa", "fa-plus"]],
        template: function AddRegistrantComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Apellido");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Correo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Empresa");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Silla");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "C\xF3digo");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "A");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddRegistrantComponent_Template_button_click_30_listener() {
              return ctx.send();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.regisForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.regisForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVnaXN0cmFudC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRegistrantComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'add-registrant',
            templateUrl: './add-registrant.component.html',
            styleUrls: ['./add-registrant.component.css']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: src_app_services_registrants_service__WEBPACK_IMPORTED_MODULE_2__["RegistrantsService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "lC5G":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/registrants/add-registrant-form/add-registrant-form.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: AddRegistrantFormComponent */

    /***/
    function lC5G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddRegistrantFormComponent", function () {
        return AddRegistrantFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AddRegistrantFormComponent = /*#__PURE__*/function () {
        function AddRegistrantFormComponent() {
          _classCallCheck(this, AddRegistrantFormComponent);
        }

        _createClass(AddRegistrantFormComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AddRegistrantFormComponent;
      }();

      AddRegistrantFormComponent.ɵfac = function AddRegistrantFormComponent_Factory(t) {
        return new (t || AddRegistrantFormComponent)();
      };

      AddRegistrantFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AddRegistrantFormComponent,
        selectors: [["add-registrant-form"]],
        decls: 2,
        vars: 0,
        template: function AddRegistrantFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "add-registrant-form works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVnaXN0cmFudC1mb3JtLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRegistrantFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'add-registrant-form',
            templateUrl: './add-registrant-form.component.html',
            styleUrls: ['./add-registrant-form.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "lEui":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/registrants/root-registrants/root-registrants.component.ts ***!
      \************************************************************************************/

    /*! exports provided: RootRegistrantsComponent */

    /***/
    function lEui(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RootRegistrantsComponent", function () {
        return RootRegistrantsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _add_registrant_add_registrant_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../add-registrant/add-registrant.component */
      "gXI+");
      /* harmony import */


      var _registrant_table_registrant_table_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../registrant-table/registrant-table.component */
      "m8nf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angularx-qrcode */
      "0hV+");

      var _c0 = ["qr"];

      function RootRegistrantsComponent_ng_container_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootRegistrantsComponent_ng_container_6_Template_i_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.closeQR();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "qrcode", 9, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RootRegistrantsComponent_ng_container_6_Template_qrcode_click_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.downloadQR($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("qrdata", ctx_r0.qrData)("margin", 1)("elementType", "img")("width", 200);
        }
      }

      var RootRegistrantsComponent = /*#__PURE__*/function () {
        function RootRegistrantsComponent() {
          _classCallCheck(this, RootRegistrantsComponent);

          this.renderQR = false;
        }

        _createClass(RootRegistrantsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "seeQR",
          value: function seeQR(code) {
            this.qrData = code;
          }
        }, {
          key: "downloadQR",
          value: function downloadQR(event) {
            var img = event.srcElement;

            if (confirm('Deseas descargar la el código como imágen?')) {
              this.a = document.createElement('a');
              this.a.href = img.src;
              this.a.download = this.qrData;
              this.a.click();
            } else {
              this.closeQR();
            }
          }
        }, {
          key: "closeQR",
          value: function closeQR() {
            this.qrData = null;
          }
        }]);

        return RootRegistrantsComponent;
      }();

      RootRegistrantsComponent.ɵfac = function RootRegistrantsComponent_Factory(t) {
        return new (t || RootRegistrantsComponent)();
      };

      RootRegistrantsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RootRegistrantsComponent,
        selectors: [["root-registrants"]],
        viewQuery: function RootRegistrantsComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.QRComponent = _t.first);
          }
        },
        decls: 7,
        vars: 1,
        consts: [[1, "row", "mb-2"], [1, "col"], [1, "row"], [3, "QREvent"], [4, "ngIf"], ["draggable", "true", 1, "bg-white", "shadow", "card", "animate__animated", "animate__fadeIn", "qr-container"], [1, "text-right"], ["role", "button", 1, "fa", "fa-close", "mr-2", 3, "click"], [1, "card-body", "p-2"], ["role", "button", "title", "Descargar", 3, "qrdata", "margin", "elementType", "width", "click"], ["qr", ""]],
        template: function RootRegistrantsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "add-registrant");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "registrant-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("QREvent", function RootRegistrantsComponent_Template_registrant_table_QREvent_5_listener($event) {
              return ctx.seeQR($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RootRegistrantsComponent_ng_container_6_Template, 8, 4, "ng-container", 4);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrData);
          }
        },
        directives: [_add_registrant_add_registrant_component__WEBPACK_IMPORTED_MODULE_1__["AddRegistrantComponent"], _registrant_table_registrant_table_component__WEBPACK_IMPORTED_MODULE_2__["RegistrantTableComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_4__["QRCodeComponent"]],
        styles: [".qr-container[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  border-radius: 12px;\r\n  transform: translate(0, -50%);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvb3QtcmVnaXN0cmFudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoicm9vdC1yZWdpc3RyYW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnFyLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RootRegistrantsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'root-registrants',
            templateUrl: './root-registrants.component.html',
            styleUrls: ['./root-registrants.component.css']
          }]
        }], function () {
          return [];
        }, {
          QRComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['qr']
          }]
        });
      })();
      /***/

    },

    /***/
    "m8nf":
    /*!************************************************************************************!*\
      !*** ./src/app/modules/registrants/registrant-table/registrant-table.component.ts ***!
      \************************************************************************************/

    /*! exports provided: RegistrantTableComponent */

    /***/
    function m8nf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrantTableComponent", function () {
        return RegistrantTableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/agRenderer/options-table/options-table.component */
      "DCFc");
      /* harmony import */


      var _shared_agRenderer_qr_renderer_qr_renderer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/agRenderer/qr-renderer/qr-renderer.component */
      "Cl3E");
      /* harmony import */


      var src_app_services_registrants_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/services/registrants.service */
      "uf/k");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");

      var _c0 = ["agGrid"];

      var _c1 = function _c1() {
        return {
          minWidth: 200
        };
      };

      var RegistrantTableComponent = /*#__PURE__*/function () {
        function RegistrantTableComponent(_registrants, cdr) {
          _classCallCheck(this, RegistrantTableComponent);

          this._registrants = _registrants;
          this.cdr = cdr;
          this.QREvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.columnDefs = [{
            field: '',
            headerName: '',
            cellRendererFramework: _shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_1__["OptionsTableComponent"],
            checkboxSelection: true,
            headerCheckboxSelection: true,
            filter: false,
            pinned: 'left',
            editable: false,
            maxWidth: 120,
            flex: 1
          }, {
            field: 'id',
            headerName: '#',
            editable: false,
            maxWidth: 60,
            filter: false,
            hide: true
          }, {
            field: 'firstName',
            headerName: 'Nombre'
          }, {
            field: 'lastName',
            headerName: 'Apellido'
          }, {
            field: 'email',
            headerName: 'Correo'
          }, {
            field: 'company',
            headerName: 'Empresa'
          }, {
            field: 'chair',
            headerName: 'Silla',
            maxWidth: 80
          }, {
            field: 'code',
            headerName: 'Codigo QR',
            cellRendererFramework: _shared_agRenderer_qr_renderer_qr_renderer_component__WEBPACK_IMPORTED_MODULE_2__["QrRendererComponent"],
            filter: true
          }, {
            field: 'connected',
            headerName: '',
            hide: true
          }];
          this.defaultColDef = {
            minWidth: 100,
            editable: true,
            flex: 1,
            resizable: true,
            filter: true
          };
          this.context = {
            componentParent: this
          };
        }

        _createClass(RegistrantTableComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.subsc = this.subscribeRegistrants();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.subsc.unsubscribe();
          }
        }, {
          key: "onGridReady",
          value: function onGridReady(params) {// this._registrants.registrants.subscribe((data) => {
            //   this.registrants = data;
            //   this.cdr.detectChanges();
            // });
          }
        }, {
          key: "subscribeRegistrants",
          value: function subscribeRegistrants() {
            var _this6 = this;

            return this._registrants.registrants.subscribe(function (res) {
              _this6.registrants = res;

              _this6.cdr.detectChanges();
            });
          }
        }, {
          key: "deleteItem",
          value: function deleteItem(id) {
            confirm('Estás seguro que deseas eliminar este registro?') ? this._registrants.deleteOne(id) : null;
          }
        }, {
          key: "editItem",
          value: function editItem(id) {
            console.log(id);
          }
        }, {
          key: "inlineUpdate",
          value: function inlineUpdate(event) {
            var data = event.data;

            this._registrants.update(data);
          }
        }, {
          key: "getCodeCellRender",
          value: function getCodeCellRender(params) {
            return "\n      <i class=\"fa fa-qrcode mr-2 text-primary\" role=\"button\"></i>".concat(params.value, "\n    ");
          }
        }, {
          key: "importDB",
          value: function importDB() {
            this._registrants["import"]();
          }
        }, {
          key: "exportTable",
          value: function exportTable() {
            this.table.api.exportDataAsCsv({
              fileName: 'registro'
            });
          }
        }, {
          key: "dropDB",
          value: function dropDB() {
            if (confirm('Estás seguro de querer borrar todos los elementos?')) {
              this._registrants.drop();
            }

            return null;
          }
        }, {
          key: "QRTouched",
          value: function QRTouched(code) {
            this.QREvent.emit(code);
          }
        }]);

        return RegistrantTableComponent;
      }();

      RegistrantTableComponent.ɵfac = function RegistrantTableComponent_Factory(t) {
        return new (t || RegistrantTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_registrants_service__WEBPACK_IMPORTED_MODULE_3__["RegistrantsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      RegistrantTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegistrantTableComponent,
        selectors: [["registrant-table"]],
        viewQuery: function RegistrantTableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        outputs: {
          QREvent: "QREvent"
        },
        decls: 10,
        vars: 12,
        consts: [[1, "ag-theme-balham", "card", "shadow"], [1, "card-header"], [1, "text-primary", 2, "float", "right", "font-size", "1.2rem"], ["role", "button", "title", "Eliminar Registro", 1, "fa", "fa-ban", 3, "click"], ["role", "button", "title", "A\xF1adir Nuevo", 1, "fa", "fa-plus", "ml-3"], ["role", "button", "title", "Importar", 1, "fa", "fa-upload", "ml-3", 3, "click"], ["role", "button", "title", "Exportar como CSV", 1, "fa", "fa-file-excel-o", "ml-3", 3, "click"], ["role", "button", 1, "fa", "fa-ellipsis-v", "ml-3"], [2, "height", "480px", "font-size", "1rem", 3, "rowData", "context", "columnDefs", "defaultColDef", "enableRangeSelection", "rowSelection", "suppressRowClickSelection", "autoGroupColumnDef", "editType", "pagination", "paginationAutoPageSize", "rowValueChanged", "gridReady"], ["agGrid", ""]],
        template: function RegistrantTableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrantTableComponent_Template_i_click_3_listener() {
              return ctx.dropDB();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrantTableComponent_Template_i_click_5_listener() {
              return ctx.importDB();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrantTableComponent_Template_i_click_6_listener() {
              return ctx.exportTable();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ag-grid-angular", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowValueChanged", function RegistrantTableComponent_Template_ag_grid_angular_rowValueChanged_8_listener($event) {
              return ctx.inlineUpdate($event);
            })("gridReady", function RegistrantTableComponent_Template_ag_grid_angular_gridReady_8_listener($event) {
              return ctx.onGridReady($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("rowData", ctx.registrants)("context", ctx.context)("columnDefs", ctx.columnDefs)("defaultColDef", ctx.defaultColDef)("enableRangeSelection", true)("rowSelection", "multiple")("suppressRowClickSelection", true)("autoGroupColumnDef", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1))("editType", "fullRow")("pagination", true)("paginationAutoPageSize", true);
          }
        },
        directives: [ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridAngular"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYW50LXRhYmxlLmNvbXBvbmVudC5jc3MifQ== */"],
        changeDetection: 0
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrantTableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'registrant-table',
            templateUrl: './registrant-table.component.html',
            styleUrls: ['./registrant-table.component.css'],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
          }]
        }], function () {
          return [{
            type: src_app_services_registrants_service__WEBPACK_IMPORTED_MODULE_3__["RegistrantsService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, {
          QREvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['agGrid']
          }]
        });
      })();
      /***/

    },

    /***/
    "mPR0":
    /*!*****************************************************!*\
      !*** ./src/app/modules/shared/pipes/search.pipe.ts ***!
      \*****************************************************/

    /*! exports provided: SearchPipe */

    /***/
    function mPR0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SearchPipe", function () {
        return SearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var SearchPipe = /*#__PURE__*/function () {
        function SearchPipe() {
          _classCallCheck(this, SearchPipe);
        }

        _createClass(SearchPipe, [{
          key: "transform",
          value: function transform(value, condition) {
            if (!value) return null;
            if (!condition || condition == '') return value;
            condition = condition.toLowerCase();
            return value.filter(function (val, index, ob) {
              return JSON.stringify(val).toLowerCase().includes(condition);
            });
            return [];
          }
        }]);

        return SearchPipe;
      }();

      SearchPipe.ɵfac = function SearchPipe_Factory(t) {
        return new (t || SearchPipe)();
      };

      SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "search",
        type: SearchPipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'search'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "mPyS":
    /*!*********************************************************************!*\
      !*** ./src/app/components/client-layout/client-layout.component.ts ***!
      \*********************************************************************/

    /*! exports provided: ClientLayoutComponent */

    /***/
    function mPyS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientLayoutComponent", function () {
        return ClientLayoutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _side_client_side_client_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../side-client/side-client.component */
      "gOv7");
      /* harmony import */


      var _main_client_main_client_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../main-client/main-client.component */
      "Ymua");

      var ClientLayoutComponent = /*#__PURE__*/function () {
        function ClientLayoutComponent() {
          _classCallCheck(this, ClientLayoutComponent);

          this.activeMenu = false;
        }

        _createClass(ClientLayoutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "log",
          value: function log() {
            console.log(this.activeMenu);
          }
        }]);

        return ClientLayoutComponent;
      }();

      ClientLayoutComponent.ɵfac = function ClientLayoutComponent_Factory(t) {
        return new (t || ClientLayoutComponent)();
      };

      ClientLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ClientLayoutComponent,
        selectors: [["client-layout"]],
        decls: 12,
        vars: 0,
        consts: [[1, "w-100", "m-0", 2, "height", "100vh"], ["for", "menu-active", 1, "menu-toggle"], ["label_menu", ""], ["role", "button", "aria-hidden", "true", 1, "fa", "fa-bars", "text-info", "p-2"], ["type", "checkbox", "id", "menu-active"], ["cb_menu", ""], [1, "p-0", "bg-light", "h-100", "side-client", "shadow", 2, "overflow", "auto"], ["for", "menu-active", "role", "button", 1, "close-menu", "p-2"], [1, "fa", "fa-close"], [3, "selected"], [1, "p-0", "h-100", "main-client"]],
        template: function ClientLayoutComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1, 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "side-client", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selected", function ClientLayoutComponent_Template_side_client_selected_9_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);

              return _r0.click();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "main-client");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_side_client_side_client_component__WEBPACK_IMPORTED_MODULE_1__["SideClientComponent"], _main_client_main_client_component__WEBPACK_IMPORTED_MODULE_2__["MainClientComponent"]],
        styles: [".menu-toggle[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.side-client[_ngcontent-%COMP%] {\r\n  width: 13%;\r\n  position: relative;\r\n  margin: 0;\r\n  display: inline-block;\r\n  transform: translate(0, 0, 0);\r\n  transition: none;\r\n}\r\n\r\n.fa[_ngcontent-%COMP%] {\r\n  font-size: 26px;\r\n}\r\n\r\n.main-client[_ngcontent-%COMP%] {\r\n  width: 87%;\r\n  display: inline-block;\r\n}\r\n\r\n.close-menu[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\ninput[type=\"checkbox\"][_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .menu-toggle[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: absolute;\r\n  }\r\n\r\n  .side-client[_ngcontent-%COMP%] {\r\n    z-index: 10;\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    transform: translateX(-100%);\r\n    transition: transform 0.25s ease-in;\r\n  }\r\n\r\n  .main-client[_ngcontent-%COMP%] {\r\n    width: 100% !important;\r\n    padding-top: 25px !important;\r\n  }\r\n\r\n  input[type=\"checkbox\"][_ngcontent-%COMP%]:checked    ~ .side-client[_ngcontent-%COMP%] {\r\n    transform: translateX(0%);\r\n  }\r\n\r\n  .close-menu[_ngcontent-%COMP%] {\r\n    display: block;\r\n    float: right;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaWVudC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULHFCQUFxQjtFQUNyQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLDRCQUE0QjtJQUM1QixtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsNEJBQTRCO0VBQzlCOztFQUVBO0lBQ0UseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImNsaWVudC1sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnNpZGUtY2xpZW50IHtcclxuICB3aWR0aDogMTMlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDAsIDApO1xyXG4gIHRyYW5zaXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mYSB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG59XHJcblxyXG4ubWFpbi1jbGllbnQge1xyXG4gIHdpZHRoOiA4NyU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uY2xvc2UtbWVudSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tZW51LXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gIC5zaWRlLWNsaWVudCB7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMgZWFzZS1pbjtcclxuICB9XHJcblxyXG4gIC5tYWluLWNsaWVudCB7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZy10b3A6IDI1cHggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkIH4gLnNpZGUtY2xpZW50IHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwJSk7XHJcbiAgfVxyXG5cclxuICAuY2xvc2UtbWVudSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbn1cclxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClientLayoutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'client-layout',
            templateUrl: './client-layout.component.html',
            styleUrls: ['./client-layout.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "o7AV":
    /*!**********************************************!*\
      !*** ./src/app/services/electron.service.ts ***!
      \**********************************************/

    /*! exports provided: ElectronService */

    /***/
    function o7AV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ElectronService", function () {
        return ElectronService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ElectronService = /*#__PURE__*/function () {
        function ElectronService() {
          _classCallCheck(this, ElectronService);

          this.electron = null;

          if (this.isElectron()) {
            this.electron = window.require('electron');
          }
        }

        _createClass(ElectronService, [{
          key: "isElectron",
          value: function isElectron() {
            if (window.require) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "getIp",
          value: function getIp() {
            var _this7 = this;

            return new Promise(function (resolve) {
              _this7.electron.ipcRenderer.invoke('get_ip').then(function (address) {
                return resolve(address[0]);
              });
            });
          }
        }, {
          key: "launchImport",
          value: function launchImport() {
            if (this.isElectron()) {
              this.electron.ipcRenderer.send('launch_import');
            }
          }
        }, {
          key: "invoke",
          value: function invoke(channel, args) {
            if (this.isElectron()) {
              return this.electron.ipcRenderer.invoke(channel, args);
            }
          }
        }]);

        return ElectronService;
      }();

      ElectronService.ɵfac = function ElectronService_Factory(t) {
        return new (t || ElectronService)();
      };

      ElectronService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ElectronService,
        factory: ElectronService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ElectronService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "pCfQ":
    /*!***********************************************************!*\
      !*** ./src/app/modules/registrants/registrants.module.ts ***!
      \***********************************************************/

    /*! exports provided: RegistrantsModule */

    /***/
    function pCfQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrantsModule", function () {
        return RegistrantsModule;
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


      var _registrants_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./registrants-routing.module */
      "59QQ");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/shared.module */
      "FpXt");
      /* harmony import */


      var _registrant_table_registrant_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./registrant-table/registrant-table.component */
      "m8nf");
      /* harmony import */


      var _add_registrant_add_registrant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./add-registrant/add-registrant.component */
      "gXI+");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../shared/dropdown/dropdown.component */
      "w0nB");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var _pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../pre-data/pre-data.module */
      "ZXe1");
      /* harmony import */


      var _root_registrants_root_registrants_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./root-registrants/root-registrants.component */
      "lEui");
      /* harmony import */


      var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ag-grid-angular */
      "cWTo");
      /* harmony import */


      var _shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../shared/agRenderer/options-table/options-table.component */
      "DCFc");
      /* harmony import */


      var angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! angularx-qrcode */
      "0hV+");
      /* harmony import */


      var _add_registrant_form_add_registrant_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./add-registrant-form/add-registrant-form.component */
      "lC5G");

      var RegistrantsModule = function RegistrantsModule() {
        _classCallCheck(this, RegistrantsModule);
      };

      RegistrantsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: RegistrantsModule
      });
      RegistrantsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function RegistrantsModule_Factory(t) {
          return new (t || RegistrantsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _registrants_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrantsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(), _pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__["PreDataModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"].withComponents([_shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_12__["OptionsTableComponent"]]), angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__["QRCodeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RegistrantsModule, {
          declarations: [_registrant_table_registrant_table_component__WEBPACK_IMPORTED_MODULE_4__["RegistrantTableComponent"], _add_registrant_add_registrant_component__WEBPACK_IMPORTED_MODULE_5__["AddRegistrantComponent"], _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"], _root_registrants_root_registrants_component__WEBPACK_IMPORTED_MODULE_10__["RootRegistrantsComponent"], _add_registrant_form_add_registrant_form_component__WEBPACK_IMPORTED_MODULE_14__["AddRegistrantFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _registrants_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrantsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"], _pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__["PreDataModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"], angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__["QRCodeModule"]],
          exports: [_registrant_table_registrant_table_component__WEBPACK_IMPORTED_MODULE_4__["RegistrantTableComponent"], _add_registrant_add_registrant_component__WEBPACK_IMPORTED_MODULE_5__["AddRegistrantComponent"], _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrantsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_registrant_table_registrant_table_component__WEBPACK_IMPORTED_MODULE_4__["RegistrantTableComponent"], _add_registrant_add_registrant_component__WEBPACK_IMPORTED_MODULE_5__["AddRegistrantComponent"], _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"], _root_registrants_root_registrants_component__WEBPACK_IMPORTED_MODULE_10__["RootRegistrantsComponent"], _add_registrant_form_add_registrant_form_component__WEBPACK_IMPORTED_MODULE_14__["AddRegistrantFormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _registrants_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrantsRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_8__["BsDropdownModule"].forRoot(), _pre_data_pre_data_module__WEBPACK_IMPORTED_MODULE_9__["PreDataModule"], ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"].withComponents([_shared_agRenderer_options_table_options_table_component__WEBPACK_IMPORTED_MODULE_12__["OptionsTableComponent"]]), angularx_qrcode__WEBPACK_IMPORTED_MODULE_13__["QRCodeModule"]],
            exports: [_registrant_table_registrant_table_component__WEBPACK_IMPORTED_MODULE_4__["RegistrantTableComponent"], _add_registrant_add_registrant_component__WEBPACK_IMPORTED_MODULE_5__["AddRegistrantComponent"], _shared_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_7__["DropdownComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "uf/k":
    /*!*************************************************!*\
      !*** ./src/app/services/registrants.service.ts ***!
      \*************************************************/

    /*! exports provided: RegistrantsService */

    /***/
    function ufK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegistrantsService", function () {
        return RegistrantsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./electron.service */
      "o7AV");

      var RegistrantsService = /*#__PURE__*/function () {
        function RegistrantsService(_electron) {
          var _this8 = this;

          _classCallCheck(this, RegistrantsService);

          this._electron = _electron;
          this.sampleRegistrant = [{
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            code: '556541',
            email: 'jdoe@mail.com',
            connected: 0,
            chair: 21,
            Rooms: [{
              name: 'defaultRoom',
              capacity: 100,
              isDefaultRoom: true
            }, {
              name: 'Sala 1',
              capacity: 50,
              isDefaultRoom: false
            }, {
              name: 'Sala 2',
              capacity: 50,
              isDefaultRoom: false
            }, {
              name: 'Sala 3',
              capacity: 50,
              isDefaultRoom: false
            }]
          }, {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            code: '556541ecg',
            email: 'jdoe@mail.com',
            connected: 0
          }, {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            code: 'poiiy556541',
            email: 'jdoe@mail.com',
            connected: 0
          }];
          this.registrants$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.sampleRegistrant);
          this.registrants = this.registrants$.asObservable();

          if (_electron.isElectron()) {
            _electron.invoke('get_registrants', null).then(function (res) {
              var result = [];
              res.forEach(function (element) {
                if (element.dataValues) {
                  result.push(element.dataValues);
                } else {
                  result.push(element);
                }
              });

              _this8.setRegistrants(result);
            });
          }
        }

        _createClass(RegistrantsService, [{
          key: "setRegistrants",
          value: function setRegistrants(registrants) {
            this.registrants$.next(registrants);
          }
        }, {
          key: "addOne",
          value: function addOne(registrant) {
            this._electron.invoke('add_registrant', registrant);
          }
        }, {
          key: "update",
          value: function update(registrants) {
            this._electron.invoke('update_registrants', registrants);
          }
        }, {
          key: "deleteOne",
          value: function deleteOne(id) {
            this._electron.invoke('delete_registrant', id);
          }
        }, {
          key: "import",
          value: function _import() {
            this._electron.launchImport();
          }
        }, {
          key: "drop",
          value: function drop() {
            this._electron.invoke('drop_registrants', null);
          }
        }]);

        return RegistrantsService;
      }();

      RegistrantsService.ɵfac = function RegistrantsService_Factory(t) {
        return new (t || RegistrantsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]));
      };

      RegistrantsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: RegistrantsService,
        factory: RegistrantsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrantsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _modules_pre_data_load_data_view_load_data_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modules/pre-data/load-data-view/load-data-view.component */
      "7eNj");

      var routes = [{
        path: '',
        pathMatch: 'full',
        redirectTo: 'registro'
      }, {
        path: 'client',
        component: _modules_pre_data_load_data_view_load_data_view_component__WEBPACK_IMPORTED_MODULE_2__["LoadDataViewComponent"]
      }, {
        path: 'registro',
        loadChildren: function loadChildren() {
          return Promise.resolve().then(__webpack_require__.bind(null,
          /*! ./modules/registrants/registrants.module */
          "pCfQ")).then(function (m) {
            return m.RegistrantsModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-config-config-module */
          "modules-config-config-module").then(__webpack_require__.bind(null,
          /*! ./modules/config/config.module */
          "VU6V")).then(function (m) {
            return m.ConfigModule;
          });
        }
      }, {
        path: 'asistencia',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-asistance-asistance-module */
          "modules-asistance-asistance-module").then(__webpack_require__.bind(null,
          /*! ./modules/asistance/asistance.module */
          "SP1S")).then(function (m) {
            return m.AsistanceModule;
          });
        }
      }, {
        path: 'salas',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-rooms-rooms-module */
          "modules-rooms-rooms-module").then(__webpack_require__.bind(null,
          /*! ./modules/rooms/rooms.module */
          "nUm/")).then(function (m) {
            return m.RoomsModule;
          });
        }
      }, {
        path: 'equipos',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-systems-systems-module */
          "modules-systems-systems-module").then(__webpack_require__.bind(null,
          /*! ./modules/systems/systems.module */
          "T+Tt")).then(function (m) {
            return m.SystemsModule;
          });
        }
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
          useHash: true
        })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
              useHash: true
            })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "vkYu":
    /*!*********************************************!*\
      !*** ./src/app/services/systems.service.ts ***!
      \*********************************************/

    /*! exports provided: SystemsService */

    /***/
    function vkYu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SystemsService", function () {
        return SystemsService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _electron_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./electron.service */
      "o7AV");

      var SystemsService = /*#__PURE__*/function () {
        function SystemsService(_electron) {
          _classCallCheck(this, SystemsService);

          this._electron = _electron;
          this.systems$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
          this.systems = this.systems$.asObservable();
        }

        _createClass(SystemsService, [{
          key: "setSystems",
          value: function setSystems(systems) {
            this.systems$.next(systems);
          }
        }, {
          key: "getSystems",
          value: function getSystems() {
            var _this9 = this;

            this._electron.invoke('get_systems', null).then(function (data) {
              _this9.setSystems(data);
            })["catch"](function (err) {
              return console.error(err);
            });
          }
        }]);

        return SystemsService;
      }();

      SystemsService.ɵfac = function SystemsService_Factory(t) {
        return new (t || SystemsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]));
      };

      SystemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: SystemsService,
        factory: SystemsService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SystemsService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _electron_service__WEBPACK_IMPORTED_MODULE_2__["ElectronService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "w0nB":
    /*!***************************************************************!*\
      !*** ./src/app/modules/shared/dropdown/dropdown.component.ts ***!
      \***************************************************************/

    /*! exports provided: DropdownComponent */

    /***/
    function w0nB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DropdownComponent", function () {
        return DropdownComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "dZIy");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function DropdownComponent_ng_container_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.caption, " ");
        }
      }

      function DropdownComponent_ul_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = ["*"];

      var DropdownComponent = /*#__PURE__*/function () {
        function DropdownComponent() {
          _classCallCheck(this, DropdownComponent);
        }

        _createClass(DropdownComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return DropdownComponent;
      }();

      DropdownComponent.ɵfac = function DropdownComponent_Factory(t) {
        return new (t || DropdownComponent)();
      };

      DropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DropdownComponent,
        selectors: [["app-dropdown"]],
        inputs: {
          caption: "caption"
        },
        ngContentSelectors: _c0,
        decls: 3,
        vars: 1,
        consts: [["dropdownToggle", "", 1, "dropdown-toggle"], [4, "ngIf"], ["id", "dropdown-basic", "class", "dropdown-menu shadow", "role", "menu", "aria-labelledby", "button-basic", 4, "dropdownMenu"], ["id", "dropdown-basic", "role", "menu", "aria-labelledby", "button-basic", 1, "dropdown-menu", "shadow"]],
        template: function DropdownComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DropdownComponent_ng_container_1_Template, 2, 1, "ng-container", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DropdownComponent_ul_2_Template, 2, 0, "ul", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.caption);
          }
        },
        directives: [ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownToggleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_1__["BsDropdownMenuDirective"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkcm9wZG93bi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DropdownComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-dropdown',
            templateUrl: './dropdown.component.html',
            styleUrls: ['./dropdown.component.css']
          }]
        }], function () {
          return [];
        }, {
          caption: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map