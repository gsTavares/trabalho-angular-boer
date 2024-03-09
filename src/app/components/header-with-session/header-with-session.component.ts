import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { User } from '../../@types/user';

@Component({
  selector: 'app-header-with-session',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './header-with-session.component.html',
  styleUrl: './header-with-session.component.css'
})
export class HeaderWithSessionComponent implements OnInit {

  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  isShowingSidebar: boolean = false;

  shouldRenderMenu: boolean = true;

  @Input() loggedUser?: User

  constructor(
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationEnd) {
          this.shouldRenderMenu = event.url !== '/login' && event.url !== '/register';
        }
      }
    });
  }

  terminateSession() {
    this.onLogout.emit(false);
  }

}
