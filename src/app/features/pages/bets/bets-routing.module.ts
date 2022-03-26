import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BetsComponent } from './bets.component';
import { GlobalGuard } from "@core/guards/global.guard";

const routes: Routes = [{
  path: '',
  component: BetsComponent,
  canActivate: [GlobalGuard],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {}
