import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  collapse() {
    if (window.innerWidth < 991) {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse!.classList.contains('show')) {
        navbarCollapse!.classList.remove('show');
      } else {
        navbarCollapse!.classList.add('show');
      }
    }
  }

}
