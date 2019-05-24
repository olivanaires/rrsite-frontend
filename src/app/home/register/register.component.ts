import { Component } from '@angular/core';
import { HomeComponent } from '../home.component';
import { AuthService } from 'src/app/service/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent {

    title = 'Entre em Contato'

    constructor(private home: HomeComponent, private authService: AuthService) { }


    register(client) {
        this.authService.register(client)
            .subscribe(
                res => {
                    console.log("sucesso")
                    this.home.changeSuccessMessage('success', 'Registro realizado com sucesso.');
                },
                (ex: HttpErrorResponse) => {
                    this.home.changeSuccessMessage('error', ex.message);
                });
    }

}
