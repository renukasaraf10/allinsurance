import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipeComponent } from './pipe/pipe.component';
import { CustPipe } from './cust.pipe';
import { ChildComponent } from './child/child.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CustdirDirective } from './custdir.directive';
import { CrudappComponent } from './crudapp/crudapp.component';
import { ServiceDataComponent } from './service-data/service-data.component';
import{ HttpClientModule} from '@angular/common/http';
import { PromiseComponent } from './promise/promise.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { TemplateformComponent } from './templateform/templateform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { PracticeComponent } from './practice/practice.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    DirectivesComponent,
    PipeComponent,
    CustPipe,
    ChildComponent,
    LifecycleComponent,
    CustdirDirective,
    CrudappComponent,
    ServiceDataComponent,
    PromiseComponent,
    RxjsComponent,
    TemplateformComponent,
    ReactiveformComponent,
    PracticeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
