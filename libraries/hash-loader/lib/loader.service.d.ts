import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare class LoaderService {
    isLoading: Subject<boolean>;
    invokeLoaderComponent(status: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<LoaderService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LoaderService>;
}
