import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  value: string | undefined;

  constructor(
    private router: Router
  ) {
  }


  goToTeamGame() {
    console.log('ding')
    this.router.navigate(['/pilice-VS-loknice']);
  }
}
