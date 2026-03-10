import { Component, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./loader.service";
import * as i2 from "@angular/common";
export class HashLoaderComponent {
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
HashLoaderComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderComponent, deps: [{ token: i1.LoaderService }], target: i0.ɵɵFactoryTarget.Component });
HashLoaderComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.0.5", type: HashLoaderComponent, selector: "lib-hash-loader", inputs: { topOffSet: "topOffSet" }, ngImport: i0, template: "<div *ngIf=\"isLoading && heightStyle\" id=\"pause\" class=\"d-flex align-items-center justify-content-center\" [attr.style]=\"heightStyle\">\r\n      <div class=\"hash-loader\"></div>\r\n</div>\r\n", styles: ["@keyframes frames{0%{transform:rotate(0)}to{transform:rotate(360deg)}}#pause{display:block;background:rgba(236,236,236,.66) no-repeat 0 0;width:100%;height:100%;position:fixed;bottom:0;left:0;z-index:1000}.hashloader-container{height:100vh;background:grey}.hash-loader{position:relative;width:6em;height:6em;transform:rotate(165deg);background:none;animation:loading 1s linear infinite}.hash-loader:before,.hash-loader:after{content:\"\";position:absolute;top:50%;left:50%;display:block;width:1em;height:1em;border-radius:.5em;transform:translate(-50%,-50%)}.hash-loader:before{animation:before 2s infinite}.hash-loader:after{animation:after 2s infinite}@keyframes before{0%{width:1em;box-shadow:2.5em -1.5em #538abccc,-2.5em 1.5em #538abccc}35%{width:6em;box-shadow:0 -1.5em #538abccc,0 1.5em #538abccc}70%{width:1em;box-shadow:-2.5em -1.5em #538abccc,2.5em 1.5em #538abccc}to{box-shadow:2.5em -1.5em #538abccc,-2.5em 1.5em #538abccc}}@keyframes after{0%{height:1em;box-shadow:1.5em 2.5em #a3deedcc,-1.5em -2.5em #a3deedcc}35%{height:6em;box-shadow:1.5em 0 #a3deedcc,-1.5em 0 #a3deedcc}70%{height:1em;box-shadow:1.5em -2.5em #a3deedcc,-1.5em 2.5em #a3deedcc}to{box-shadow:1.5em 2.5em #a3deedcc,-1.5em -2.5em #a3deedcc}}.hash-loader{position:absolute;top:calc(50% - 3em);left:calc(50% - 3em)}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.0.5", ngImport: i0, type: HashLoaderComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-hash-loader',
                    templateUrl: './hash-loader.component.html',
                    styleUrls: ['./hash-loader.component.scss']
                }]
        }], ctorParameters: function () { return [{ type: i1.LoaderService }]; }, propDecorators: { topOffSet: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFzaC1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvaGFzaC1sb2FkZXIvc3JjL2xpYi9oYXNoLWxvYWRlci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9wcm9qZWN0cy9oYXNoLWxvYWRlci9zcmMvbGliL2hhc2gtbG9hZGVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDOzs7O0FBUXpELE1BQU0sT0FBTyxtQkFBbUI7SUFPOUIsWUFBb0IsYUFBNEI7UUFBNUIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFMaEQsY0FBUyxHQUFXLEtBQUssQ0FBQztJQUswQixDQUFDO0lBRXJELFFBQVE7UUFDTixJQUFHLElBQUksQ0FBQyxTQUFTO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyx3QkFBd0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDOztZQUMzRSxJQUFJLENBQUMsV0FBVyxHQUFHLGVBQWUsQ0FBQztRQUN4QyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFjLEVBQUUsRUFBRTtZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7O2dIQWZVLG1CQUFtQjtvR0FBbkIsbUJBQW1CLDJGQ1JoQyx3TUFHQTsyRkRLYSxtQkFBbUI7a0JBTC9CLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsV0FBVyxFQUFFLDhCQUE4QjtvQkFDM0MsU0FBUyxFQUFFLENBQUMsOEJBQThCLENBQUM7aUJBQzVDO29HQUlVLFNBQVM7c0JBQWpCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuL2xvYWRlci5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWhhc2gtbG9hZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2hhc2gtbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaGFzaC1sb2FkZXIuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBIYXNoTG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBpc0xvYWRpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0b3BPZmZTZXQ6YW55O1xuXG4gIGhlaWdodFN0eWxlIDphbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2FkZXJTZXJ2aWNlOiBMb2FkZXJTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZih0aGlzLnRvcE9mZlNldCkgdGhpcy5oZWlnaHRTdHlsZSA9IGBoZWlnaHQ6IGNhbGMoMTAwdmggLSAke3RoaXMudG9wT2ZmU2V0fSlgO1xuICAgIGVsc2UgdGhpcy5oZWlnaHRTdHlsZSA9ICdoZWlnaHQ6IDEwMHZoJztcbiAgICB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLnN1YnNjcmliZSgoc3RhdHVzOmJvb2xlYW4pID0+IHtcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gc3RhdHVzO1xuICAgIH0pO1xuICB9XG5cbn1cbiIsIjxkaXYgKm5nSWY9XCJpc0xvYWRpbmcgJiYgaGVpZ2h0U3R5bGVcIiBpZD1cInBhdXNlXCIgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiBbYXR0ci5zdHlsZV09XCJoZWlnaHRTdHlsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaGFzaC1sb2FkZXJcIj48L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==