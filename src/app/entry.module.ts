import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from '@angular/router';
import {PromotionComponent} from "./promotion/promotion.component";
import {MicrofondsComponent} from "./microfonds/microfonds.component";

@NgModule({
    declarations: [MicrofondsComponent, PromotionComponent],
    imports: [
        RouterModule.forChild([{
            path: "",
            component: MicrofondsComponent,
        }]),

    ],
    providers: [],
})
export class RemoteEntryModule {
}
