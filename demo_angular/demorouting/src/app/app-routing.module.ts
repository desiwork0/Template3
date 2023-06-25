import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HrvComponent } from './hrv/hrv.component';
import { EngComponent } from './eng/eng.component';

const routes: Routes = [
  {path: 'eng', component: EngComponent},
  {path: 'hrv', component: HrvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
