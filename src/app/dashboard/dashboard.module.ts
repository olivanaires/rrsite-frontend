import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyComponent } from '../property/property.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { MatIconModule, MatToolbarModule, MatButtonModule, MatSidenavModule, MatListModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';
import { ImagePreview } from 'src/assets/directives/image-preview.directive';
import { FileComponent } from '../file/file.component';

@NgModule({
    declarations: [
        DashboardComponent,
        ImagePreview,
        PropertyComponent,
        FileComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
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
        ScrollDispatchModule
    ]
})
export class DashboardModule { }
