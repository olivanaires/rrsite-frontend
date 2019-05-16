import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { AppComponent } from '../app.component';

@Component({
  templateUrl: './register.component.html'
})
export class RegisterComponent {

  title = 'Cadastro'

  constructor(private app: AppComponent, private loginService: AuthService) { }


  register(user) {
    console.log(user);
    this.loginService.register(user)
      .subscribe(
        res => {
          this.app.changeSuccessMessage('success', 'Registro realizado com sucesso.');
        },
        (ex: HttpErrorResponse) => {
          console.log(ex);
        });;
  }

}
