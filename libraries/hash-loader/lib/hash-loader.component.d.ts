import { OnInit } from '@angular/core';
import { LoaderService } from './loader.service';
import * as i0 from "@angular/core";
export declare class HashLoaderComponent implements OnInit {
    private loaderService;
    isLoading: boolean;
    topOffSet: any;
    heightStyle: any;
    constructor(loaderService: LoaderService);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HashLoaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HashLoaderComponent, "lib-hash-loader", never, { "topOffSet": "topOffSet"; }, {}, never, never>;
}
