import {NgModule} from '@angular/core';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {TableModule} from 'primeng/table';
import {OrganizationChartModule} from 'primeng/organizationchart';

@NgModule({
    declarations: [],
    imports: [
        AccordionModule,
        DialogModule,
        RadioButtonModule,
        ScrollPanelModule,
        TableModule,
        OrganizationChartModule
    ],
    exports: [
        AccordionModule,
        DialogModule,
        RadioButtonModule,
        ScrollPanelModule,
        TableModule,
        OrganizationChartModule
    ],
    providers: []
})
export class PrimengModule {
}
