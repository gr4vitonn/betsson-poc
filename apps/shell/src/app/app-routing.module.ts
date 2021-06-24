import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@myorg/home').then((m) => m.HomeModule),
  },
  {
    path: 'sportsbook',
    loadChildren: () =>
      import('sportsbook/SportsbookModule').then((m) => m.SportsbookModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
