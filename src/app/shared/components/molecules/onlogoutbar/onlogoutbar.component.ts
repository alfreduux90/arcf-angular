import { Component, inject } from "@angular/core";
import { UserService } from "../../../../core/services/user.service";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { AsyncPipe, NgIf } from "@angular/common";
import { ShowAuthedDirective } from "../../../directives/show-authed.directive";

@Component({
	selector: 'app-logoutbar',
	templateUrl: './onlogoutbar.component.html',
	styleUrls: ['./onlogoutbar.component.scss'],
  imports: [RouterLinkActive, RouterLink, AsyncPipe, NgIf, ShowAuthedDirective],
  standalone: true,
})
export class OnLoginBarComponent {
  currentUser$ = inject(UserService).currentUser;
}