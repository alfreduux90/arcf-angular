import { Component, OnInit, Output, EventEmitter, Input, inject } from '@angular/core';
import { NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

import { ListContainerComponent } from '../../molecules/list-container/list-container.component';
import { ShowAuthedDirective } from "../../../../shared/directives/show-authed.directive";
import { UserService } from "../../../../core/services/user.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    @Input() list: string[] = [];
    @Output() menuToggle = new EventEmitter<void>();

    currentUser$ = inject(UserService).currentUser;

    constructor(private router:Router) {}

    loginVerified(): boolean {
      const accessToken = 'token';
      if (accessToken) {
        return true;
      }
      return false;
    }

    goToLogin(): void {
      this.router.navigate(['/login']);
    }
  
    ngOnInit(): void {}
    onMenuToggleDispatch(): void {
      this.menuToggle.emit();
    }
  }
