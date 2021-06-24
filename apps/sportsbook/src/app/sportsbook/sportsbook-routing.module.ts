import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsbookComponent } from './sportsbook.component';

const routes: Routes = [
  {
    path: '',
    component: SportsbookComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('@myorg/sportsbook/home').then((m) => m.SportsbookHomeModule),
      },
      {
        path: 'live',
        loadChildren: () =>
          import('@myorg/sportsbook/live-betting').then(
            (m) => m.SportsbookLiveBettingModule
          ),
      },
      {
        path: 'starting-soon',
        loadChildren: () =>
          import('@myorg/sportsbook/starting-soon').then(
            (m) => m.SportsbookStartingSoonModule
          ),
      },
      {
        path: 'bet-builder',
        loadChildren: () =>
          import('@myorg/sportsbook/bet-builder').then(
            (m) => m.SportsbookBetBuilderModule
          ),
      },
      {
        path: 'statistics',
        loadChildren: () =>
          import('@myorg/sportsbook/statistics').then(
            (m) => m.SportsbookStatisticsModule
          ),
      },
      {
        path: 'bet-history',
        loadChildren: () =>
          import('@myorg/sportsbook/bet-history').then(
            (m) => m.SportsbookBetHistoryModule
          ),
      },
      {
        path: 'price-boost',
        loadChildren: () =>
          import('@myorg/sportsbook/price-boost').then(
            (m) => m.SportsbookPriceBoostModule
          ),
      },
      {
        path: 'settings',
        loadChildren: () =>
          import('@myorg/sportsbook/settings').then(
            (m) => m.SportsbookSettingsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SportsbookRoutingModule {}
