import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './service/auth.service';
import { RegisterComponent } from './register/register.component';
import { FileComponent } from './file/file.component';
import { FileService } from './service/file.service';
import { AuthInterceptor } from 'src/assets/interceptors/auth-interceptor';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from 'src/assets/interceptors/admin-auth-guard';
import { PropertyComponent } from './property/property.component';
import { ImagePreview } from 'src/assets/directives/image-preview.directive';
import { PropertyCaroucelComponent } from './home/property_caroucel/property-caroucel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    FileComponent,
    PropertyComponent,
    ImagePreview,
    PropertyCaroucelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FileUploadModule,
    MatIconModule
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
