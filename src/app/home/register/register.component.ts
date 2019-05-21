import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from 'src/app/service/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    title = 'Entre em Contato'

    constructor(private app: AppComponent, private loginService: AuthService) { }


    register(client) {
        this.loginService.register(client)
            .subscribe(
                res => {
                    this.app.changeSuccessMessage('success', 'Registro realizado com sucesso.');
                },
                (ex: HttpErrorResponse) => {
                    this.app.changeSuccessMessage('error', ex.message);
                });;
    }

}
