(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('fwk', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.fwk = {}, global.ng.core));
}(this, (function (exports, i0) { 'use strict';

    var FwkService = /** @class */ (function () {
        function FwkService() {
        }
        return FwkService;
    }());
    FwkService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FwkService_Factory() { return new FwkService(); }, token: FwkService, providedIn: "root" });
    FwkService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    FwkService.ctorParameters = function () { return []; };

    var FwkComponent = /** @class */ (function () {
        function FwkComponent() {
        }
        FwkComponent.prototype.ngOnInit = function () {
        };
        return FwkComponent;
    }());
    FwkComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-fwk',
                    template: "\n    <p>\n      fwk works!\n    </p>\n  "
                },] }
    ];
    FwkComponent.ctorParameters = function () { return []; };

    var FwkModule = /** @class */ (function () {
        function FwkModule() {
        }
        return FwkModule;
    }());
    FwkModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        FwkComponent
                    ],
                    imports: [],
                    exports: [
                        FwkComponent
                    ]
                },] }
    ];

    /*
     * Public API Surface of fwk
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.FwkComponent = FwkComponent;
    exports.FwkModule = FwkModule;
    exports.FwkService = FwkService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=fwk.umd.js.map
