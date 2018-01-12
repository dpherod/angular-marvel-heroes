import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {EditComponent} from "./containers/edit/edit.component";

import {IndexComponent} from "./containers/index/index.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  },
  {
    path: ':id',
    component: EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PowersRoutingModule {

}
