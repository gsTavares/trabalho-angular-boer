import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-without-session',
  standalone: true,
  imports: [
    RouterLink, RouterOutlet
  ],
  templateUrl: './header-without-session.component.html',
  styleUrl: './header-without-session.component.css'
})
export class HeaderWithoutSessionComponent implements OnInit {

  shouldRenderMenu: boolean = true;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.shouldRenderMenu = event.url !== '/login' && event.url !== '/register';
        }
      }
    })
  }

}
