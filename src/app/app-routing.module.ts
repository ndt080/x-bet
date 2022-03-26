import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavigationPath } from "@core/consts";

const routes: Routes = [
  { path: NavigationPath.SIGN_IN, loadChildren: () => import('@features/pages/sign-in/sign-in.module').then(m => m.SignInModule) },
  { path: NavigationPath.SIGN_UP, loadChildren: () => import('@features/pages/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: NavigationPath.HOME, loadChildren: () => import('@features/pages/home/home.module').then(m => m.HomeModule) },
  { path: NavigationPath.BETS, loadChildren: () => import('@features/pages/bets/bets.module').then(m => m.BetsModule) },
  { path: NavigationPath.RACES, loadChildren: () => import('@features/pages/races/races.module').then(m => m.RacesModule) },
  { path: '**', loadChildren: () => import('./features/pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
