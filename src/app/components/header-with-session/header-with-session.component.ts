import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header-with-session',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './header-with-session.component.html',
  styleUrl: './header-with-session.component.css'
})
export class HeaderWithSessionComponent implements OnInit {

  isShowingSidebar: boolean = false;

  shouldRenderMenu: boolean = true;

  constructor(private router: Router) {

  }
  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.shouldRenderMenu = event.url !== '/login';
        }
      }
    })
  }

}
