import * as i0 from '@angular/core';
import { Injectable, Component, Input, NgModule } from '@angular/core';
import { Subject } from 'rxjs';
import * as i2 from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

class LoaderService {
    constructor() {
        this.isLoading = new Subject();
    }
    invokeLoaderComponent(status) {
        this.isLoading.next(status);
    }
}
LoaderService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LoaderService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
LoaderService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LoaderService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: LoaderService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }] });

class HashLoaderComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.isLoading = false;
    }
    ngOnInit() {
        if (this.topOffSet)
            this.heightStyle = `height: calc(100vh - ${this.topOffSet})`;
        else
            this.heightStyle = 'height: 100vh';
        this.loaderService.isLoading.subscribe((status) => {
            this.isLoading = status;
        });
    }
}
HashLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderComponent, deps: [{ token: LoaderService }], target: i0.ɵɵFactoryTarget.Component });
HashLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: HashLoaderComponent, selector: "lib-hash-loader", inputs: { topOffSet: "topOffSet" }, ngImport: i0, template: "<div *ngIf=\"isLoading && heightStyle\" id=\"pause\" class=\"d-flex align-items-center justify-content-center\" [attr.style]=\"heightStyle\">\r\n      <div class=\"hash-loader\"></div>\r\n</div>\r\n", styles: ["@keyframes frames{0%{transform:rotate(0)}to{transform:rotate(360deg)}}#pause{display:block;background:rgba(236,236,236,.66) no-repeat 0 0;width:100%;height:100%;position:fixed;bottom:0;left:0;z-index:1000}.hashloader-container{height:100vh;background:grey}.hash-loader{position:relative;width:6em;height:6em;transform:rotate(165deg);background:none;animation:loading 1s linear infinite}.hash-loader:before,.hash-loader:after{content:\"\";position:absolute;top:50%;left:50%;display:block;width:1em;height:1em;border-radius:.5em;transform:translate(-50%,-50%)}.hash-loader:before{animation:before 2s infinite}.hash-loader:after{animation:after 2s infinite}@keyframes before{0%{width:1em;box-shadow:2.5em -1.5em #538abccc,-2.5em 1.5em #538abccc}35%{width:6em;box-shadow:0 -1.5em #538abccc,0 1.5em #538abccc}70%{width:1em;box-shadow:-2.5em -1.5em #538abccc,2.5em 1.5em #538abccc}to{box-shadow:2.5em -1.5em #538abccc,-2.5em 1.5em #538abccc}}@keyframes after{0%{height:1em;box-shadow:1.5em 2.5em #a3deedcc,-1.5em -2.5em #a3deedcc}35%{height:6em;box-shadow:1.5em 0 #a3deedcc,-1.5em 0 #a3deedcc}70%{height:1em;box-shadow:1.5em -2.5em #a3deedcc,-1.5em 2.5em #a3deedcc}to{box-shadow:1.5em 2.5em #a3deedcc,-1.5em -2.5em #a3deedcc}}.hash-loader{position:absolute;top:calc(50% - 3em);left:calc(50% - 3em)}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-hash-loader',
                    templateUrl: './hash-loader.component.html',
                    styleUrls: ['./hash-loader.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: LoaderService }]; }, propDecorators: { topOffSet: [{
                type: Input
            }] } });

class HashLoaderModule {
}
HashLoaderModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
HashLoaderModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderModule, declarations: [HashLoaderComponent], imports: [BrowserModule], exports: [HashLoaderComponent] });
HashLoaderModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderModule, imports: [[
            BrowserModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        HashLoaderComponent
                    ],
                    imports: [
                        BrowserModule
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

export { HashLoaderComponent, HashLoaderModule, LoaderService };
//# sourceMappingURL=hash-loader.js.map
