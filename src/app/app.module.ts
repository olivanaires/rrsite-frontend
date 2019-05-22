import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileUploadModule } from 'ng2-file-upload';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './service/auth.service';
import { FileService } from './service/file.service';
import { AuthInterceptor } from 'src/assets/interceptors/auth-interceptor';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from 'src/assets/interceptors/admin-auth-guard';
import { ImagePreview } from 'src/assets/directives/image-preview.directive';
import { PropertyCaroucelComponent } from './home/property_caroucel/property-caroucel.component';
import { MainNavComponent } from './home/main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { RegisterComponent } from './home/register/register.component';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        HomeComponent,
        PropertyCaroucelComponent,
        MainNavComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        FileUploadModule,
        MatIconModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
        ScrollDispatchModule,
        DashboardModule
    ],
    providers: [
        AuthService,
        FileService,
        AdminAuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
