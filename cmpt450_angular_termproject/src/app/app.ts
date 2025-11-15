import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainDashboardPage } from "./main-dashboard-page/main-dashboard-page";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('cmpt450_angular_termproject');
}
