import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OAuthService} from "angular-oauth2-oidc";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'scpi-invest-admin';
  username: string = '';

  constructor(private oauthService: OAuthService) {
    this.loadUserProfile();
  }

  loadUserProfile() {
    const claims = this.oauthService.getIdentityClaims();
    if (claims) {
      this.username = claims['preferred_username'];
    }
  }

  logout() {
    this.oauthService.logOut();
  }
}
