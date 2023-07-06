import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PodComponent } from './components/pod.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, PodComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-table';
}
