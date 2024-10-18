import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoryGameRoutingModule } from './memory-game-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { TeamGameComponent } from './components/team-game/team-game.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

@NgModule({
  declarations: [
    DashboardComponent,
    TeamGameComponent
  ],
  imports: [
    CommonModule,
    MemoryGameRoutingModule,
    InputTextModule,
    ButtonModule,
    ImageModule,
  ]
})
export class MemoryGameModule { }
