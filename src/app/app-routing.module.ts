import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'memory-game', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import(`./login/login.module`).then((m) => m.LoginModule)
  },
  {
    path: 'memory-game',
    loadChildren: () =>
      import(`./memory-game/memory-game.module`).then((m) => m.MemoryGameModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
