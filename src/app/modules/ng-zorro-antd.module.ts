import { NgModule } from '@angular/core';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [],
  imports: [
    // NzButtonModule,
    NgZorroAntdMobileModule,
    NzTableModule,
    NzInputModule
  ],
  exports: [
    // NzButtonModule,
    NgZorroAntdMobileModule,
    NzTableModule,
    NzInputModule
  ]
})
export class NgZorroAntdModule { }
