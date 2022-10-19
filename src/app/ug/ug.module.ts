import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UgstaffComponent } from './ugstaff/ugstaff.component';
import { UgstudentComponent } from './ugstudent/ugstudent.component';
import { UghomeComponent } from './ughome/ughome.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { UgdepartmentComponent } from './ugdepartment/ugdepartment.component';
import {ButtonModule} from 'primeng/button';
import { ConfirmationService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { Dialog, DialogModule } from 'primeng/dialog';


const route : Routes=[
    {path:"ughome",component:UghomeComponent},
   { path:'ugstaff',component:UgstaffComponent},
   {path: 'ugstud', component:UgstudentComponent},
   {path: 'ugdept', component:UgdepartmentComponent}

]


@NgModule({
  declarations: [
    UgstaffComponent,
    UgstudentComponent,
    UghomeComponent,
    UgdepartmentComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
 

    [RouterModule.forChild(route)],
    ConfirmDialogModule,
   DialogModule,
  
  ],
  providers:[ConfirmationService]
})
export class UGModule { }
