import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatacomeComponent } from './datacome/datacome.component';
import { ParentsComponent } from './datacommunication/parents/parents.component';
import { FComponent } from './f/f.component';
import { FirstComponent } from './first/first.component';
import { ForpraComponent } from './forpra/forpra.component';
import { PradataComponent } from './pradata/pradata.component';
import { SComponent } from './s/s.component';
import { SampaldataComponent } from './sampaldata/sampaldata.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  
  {path:"parent",component:ParentsComponent},
  {path:"first",component:FirstComponent},
  {path:"second",component:SecondComponent},
  {path:"f",component:FComponent},
  {path:"s",component:SComponent},
  {path:"samp",component:SampaldataComponent},
  {path:"dt",component:DatacomeComponent},
  {path:"newdata",component:PradataComponent},
  {path:"renu",component:ForpraComponent},
  {
    path:'ug', loadChildren:()=>import('./ug/ug.module').then(mod=>mod.UGModule)
  },
  {
    path:'pg', loadChildren:()=>import('./pg/pg.module').then(mod=>mod.PGModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
