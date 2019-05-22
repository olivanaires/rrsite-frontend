import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { PropertyComponent } from '../property/property.component';
import { DashboardComponent } from './dashboard.component';
import { AdminAuthGuard } from 'src/assets/interceptors/admin-auth-guard';

const routes: Routes = [
    {
        path: 'dashboard', component: DashboardComponent,
        children: [
            { path: "property", component: PropertyComponent, canActivate: [AdminAuthGuard] },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }