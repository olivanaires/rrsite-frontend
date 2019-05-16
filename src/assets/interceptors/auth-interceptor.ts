import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const backEndUrl = req.clone({
            url: environment.url.concat(req.url)
        });

        const authToken = localStorage.getItem("token");
        if (authToken) {
            const authRequest = backEndUrl.clone({
                headers: req.headers.set("Authorization", authToken)
            });
            return next.handle(authRequest);
        }
        return next.handle(backEndUrl);
    }
}
