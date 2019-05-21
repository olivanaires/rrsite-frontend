import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FileComponent } from './file/file.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from 'src/assets/interceptors/admin-auth-guard';
import { PropertyComponent } from './property/property.component';
import { RegisterComponent } from './home/register/register.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "property", component: PropertyComponent, canActivate: [AdminAuthGuard] },
    { path: "file", component: FileComponent, canActivate: [AdminAuthGuard] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
