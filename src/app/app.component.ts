import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderWithoutSessionComponent } from './components/header-without-session/header-without-session.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderWithoutSessionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

    shouldRenderMenu: boolean = true;
  
    constructor(private router: Router) {

    }

    ngOnInit(): void {
      this.router.events.subscribe({
        next: (event) => {
          if(event instanceof NavigationEnd) {
            this.shouldRenderMenu = event.url !== '/login';
          }
        }
      })
    }

}
