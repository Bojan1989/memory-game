// **Vendros:**
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TeamGameComponent } from './components/team-game/team-game.component';

// Main routes.
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'memory-game', component: DashboardComponent },
    ],
  },
  { path: 'pilice-VS-loknice', component: TeamGameComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoryGameRoutingModule {}
