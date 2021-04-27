import { ɵɵdefineInjectable, Injectable, Component, NgModule } from '@angular/core';

class FwkService {
    constructor() { }
}
FwkService.ɵprov = ɵɵdefineInjectable({ factory: function FwkService_Factory() { return new FwkService(); }, token: FwkService, providedIn: "root" });
FwkService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
FwkService.ctorParameters = () => [];

class FwkComponent {
    constructor() { }
    ngOnInit() {
    }
}
FwkComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-fwk',
                template: `
    <p>
      fwk works!
    </p>
  `
            },] }
];
FwkComponent.ctorParameters = () => [];

class FwkModule {
}
FwkModule.decorators = [
    { type: NgModule, args: [{
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

export { FwkComponent, FwkModule, FwkService };
//# sourceMappingURL=fwk.js.map
