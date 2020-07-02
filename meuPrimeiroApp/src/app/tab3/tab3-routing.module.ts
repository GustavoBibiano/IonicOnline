import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PesoIdealTab } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: PesoIdealTab,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
