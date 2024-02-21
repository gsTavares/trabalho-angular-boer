import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderWithSessionComponent } from './components/header-with-session/header-with-session.component';
import { HeaderWithoutSessionComponent } from './components/header-without-session/header-without-session.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderWithoutSessionComponent, HeaderWithSessionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  isLogged: boolean = true;

  constructor() {

  }

}
