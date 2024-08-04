import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule, MatIconModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  userService = inject(UserService);

  ngOnInit() {
    this.userService.authenticate().subscribe((response) => {
      if (response.user.token) {
        localStorage.setItem('token', response.user.token);
        this.userService.currentUserSignal.set(response.user);
      } else {
        localStorage.setItem('token', '');
      }
    });
  }
}
