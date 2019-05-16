import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  _success = new Subject<string>();
  type: string;
  message: string;
  isUserAutenticated: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.message = null);
    this.authService.autoAuthUser();
    this.isUserAutenticated = this.authService.getIsAuth();
  }

  logout() {
    this.authService.logout().subscribe(res => {
      this.isUserAutenticated = false;
      this.authService.removeUser();
      this.authService.setIsAuth(true);
      this.router.navigateByUrl("/");
    });
  }

  public changeSuccessMessage(type: string, message: string) {
    this.message = message;
    this.type = type;
    this._success.next();
  }

}
