
import {RouterModule, Routes} from "@angular/router";

import {IndexComponent} from "./containers/index/index.component";
import {NgModule} from "@angular/core";

const routes: Routes = [
  {
    path: '',
    loadChildren: './app/+dashboard/dashboard.module#DashboardModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [IndexComponent]
})
export class DashboardRoutingModule {

}
