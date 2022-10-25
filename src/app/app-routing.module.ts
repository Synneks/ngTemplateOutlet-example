import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bad',
    loadChildren: () =>
      import('./bad-example/bad-example.module').then(
        (m) => m.BadExampleModule
      ),
  },
  {
    path: 'good',
    loadChildren: () =>
      import('./good-example/good-example.module').then(
        (m) => m.GoodExampleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
