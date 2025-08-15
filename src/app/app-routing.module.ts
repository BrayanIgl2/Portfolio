import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionsContainerComponent } from './sections/sections-container/sections-container.component';

const routes: Routes = [
  {path: '', component: SectionsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
