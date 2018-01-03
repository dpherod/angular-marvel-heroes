
import {RouterModule, Routes} from "@angular/router";

import {IndexComponent} from "./containers/index/index.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

}
