import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';

// modules
import { AngularModule } from 'src/app/modules/angular.module';
import { MaterialModule } from 'src/app/modules/material.module';
import { NgZorroAntdModule } from 'src/app/modules/ng-zorro-antd.module';
// import { PrimengModule } from 'src/app/modules/primeng.module';

// 组件
import { AppComponent } from './app.component';
import { AppRegistFormComponent } from './vvms/regist-form/app-regist-form.component';
import { BooleanPipe } from 'src/app/pipes/boolean.pipe';
import { BooleanSexPipe } from 'src/app/pipes/booleanSex.pipe';

// 弹框

@NgModule({
  declarations: [
    //Pipe
    BooleanPipe,
    BooleanSexPipe,
    // 组件和弹框
    AppComponent,
    AppRegistFormComponent
  ],
  imports: [
    // module
    BrowserAnimationsModule,
    AppRoutingModule,
    NgZorroAntdMobileModule,
    AngularModule,
    MaterialModule,
    NgZorroAntdModule,
    // PrimengModule,
  ],
  entryComponents: [
    // 弹框
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
