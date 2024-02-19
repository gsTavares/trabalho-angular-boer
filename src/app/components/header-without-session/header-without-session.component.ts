import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header-without-session',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header-without-session.component.html',
  styleUrl: './header-without-session.component.css'
})
export class HeaderWithoutSessionComponent {

}
