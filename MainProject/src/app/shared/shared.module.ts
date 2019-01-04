import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";

@NgModule({ // The reason behind the shared module is we can declare our directive here and also export that directive to be used in other modules
    declarations: [
        DropdownDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective
    ] // We should never add services in the shared module, that is something angular team recommends
})
export class SharedModule {}