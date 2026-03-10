(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('@angular/common'), require('@angular/platform-browser')) :
    typeof define === 'function' && define.amd ? define('hash-loader', ['exports', '@angular/core', 'rxjs', '@angular/common', '@angular/platform-browser'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["hash-loader"] = {}, global.ng.core, global.rxjs, global.ng.common, global.ng.platformBrowser));
})(this, (function (exports, i0, rxjs, i2, platformBrowser) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    var LoaderService = /** @class */ (function () {
        function LoaderService() {
            this.isLoading = new rxjs.Subject();
        }
        LoaderService.prototype.invokeLoaderComponent = function (status) {
            this.isLoading.next(status);
        };
        return LoaderService;
    }());
    LoaderService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: LoaderService, deps: [], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    LoaderService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: LoaderService, providedIn: 'root' });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: LoaderService, decorators: [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }] });

    var HashLoaderComponent = /** @class */ (function () {
        function HashLoaderComponent(loaderService) {
            this.loaderService = loaderService;
            this.isLoading = false;
        }
        HashLoaderComponent.prototype.ngOnInit = function () {
            var _this = this;
            if (this.topOffSet)
                this.heightStyle = "height: calc(100vh - " + this.topOffSet + ")";
            else
                this.heightStyle = 'height: 100vh';
            this.loaderService.isLoading.subscribe(function (status) {
                _this.isLoading = status;
            });
        };
        return HashLoaderComponent;
    }());
    HashLoaderComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: HashLoaderComponent, deps: [{ token: LoaderService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    HashLoaderComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: HashLoaderComponent, selector: "lib-hash-loader", inputs: { topOffSet: "topOffSet" }, ngImport: i0__namespace, template: "<div *ngIf=\"isLoading && heightStyle\" id=\"pause\" class=\"d-flex align-items-center justify-content-center\" [attr.style]=\"heightStyle\">\r\n      <div class=\"hash-loader\"></div>\r\n</div>\r\n", styles: ["@keyframes frames{0%{transform:rotate(0)}to{transform:rotate(360deg)}}#pause{display:block;background:rgba(236,236,236,.66) no-repeat 0 0;width:100%;height:100%;position:fixed;bottom:0;left:0;z-index:1000}.hashloader-container{height:100vh;background:grey}.hash-loader{position:relative;width:6em;height:6em;transform:rotate(165deg);background:none;animation:loading 1s linear infinite}.hash-loader:before,.hash-loader:after{content:\"\";position:absolute;top:50%;left:50%;display:block;width:1em;height:1em;border-radius:.5em;transform:translate(-50%,-50%)}.hash-loader:before{animation:before 2s infinite}.hash-loader:after{animation:after 2s infinite}@keyframes before{0%{width:1em;box-shadow:2.5em -1.5em #538abccc,-2.5em 1.5em #538abccc}35%{width:6em;box-shadow:0 -1.5em #538abccc,0 1.5em #538abccc}70%{width:1em;box-shadow:-2.5em -1.5em #538abccc,2.5em 1.5em #538abccc}to{box-shadow:2.5em -1.5em #538abccc,-2.5em 1.5em #538abccc}}@keyframes after{0%{height:1em;box-shadow:1.5em 2.5em #a3deedcc,-1.5em -2.5em #a3deedcc}35%{height:6em;box-shadow:1.5em 0 #a3deedcc,-1.5em 0 #a3deedcc}70%{height:1em;box-shadow:1.5em -2.5em #a3deedcc,-1.5em 2.5em #a3deedcc}to{box-shadow:1.5em 2.5em #a3deedcc,-1.5em -2.5em #a3deedcc}}.hash-loader{position:absolute;top:calc(50% - 3em);left:calc(50% - 3em)}\n"], directives: [{ type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: HashLoaderComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'lib-hash-loader',
                        templateUrl: './hash-loader.component.html',
                        styleUrls: ['./hash-loader.component.scss']
                    }]
            }], ctorParameters: function () { return [{ type: LoaderService }]; }, propDecorators: { topOffSet: [{
                    type: i0.Input
                }] } });

    var HashLoaderModule = /** @class */ (function () {
        function HashLoaderModule() {
        }
        return HashLoaderModule;
    }());
    HashLoaderModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: HashLoaderModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    HashLoaderModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: HashLoaderModule, declarations: [HashLoaderComponent], imports: [platformBrowser.BrowserModule], exports: [HashLoaderComponent] });
    HashLoaderModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: HashLoaderModule, imports: [[
                platformBrowser.BrowserModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0__namespace, type: HashLoaderModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            HashLoaderComponent
                        ],
                        imports: [
                            platformBrowser.BrowserModule
                        ],
                        exports: [
                            HashLoaderComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of hash-loader
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.HashLoaderComponent = HashLoaderComponent;
    exports.HashLoaderModule = HashLoaderModule;
    exports.LoaderService = LoaderService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=hash-loader.umd.js.map
