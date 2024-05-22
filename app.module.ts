import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputTextModule } from 'primeng/inputtext';
import { CalendarModule } from 'primeng/calendar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BasicFormComponent } from './basic-form/basic-form.component';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
//import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter';
import { CheckboxModule } from 'primeng/checkbox';
import { ImportComponent } from './import/import.component';
import { FileUploadModule } from 'primeng/fileupload';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ViewerAppComponent } from './viewer-app/viewer-app.component';
import { QuoteScreenComponent } from './quote-screen/quote-screen.component';
import { EmailComponent } from './email/email.component';
//import { FileUploadComponent } from './file-upload/file-upload.component';
//import { PdfComponent } from './pdf/pdf.component';
//import { TableModule } from 'primeng/table';
import { ChipsModule } from 'primeng/chips';

@NgModule({
  declarations: [
    AppComponent,
    BasicFormComponent,
    HomeComponent,
    ViewerAppComponent,
    //AppImportComponent
    ImportComponent,
    QuoteScreenComponent,
    EmailComponent,
   //FileUploadComponent,
    // PdfComponent,
    //TableModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    CalendarModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    ButtonModule,
    FloatLabelModule,
    TableModule, CommonModule,
    FieldsetModule,
    SplitterModule,
    CheckboxModule,
    FileUploadModule,
    NgxExtendedPdfViewerModule,
    ChipsModule

   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
