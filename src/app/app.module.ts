import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxEditorModule } from 'ngx-editor';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { BlogpostCreateComponent } from './blogpost-create/blogpost-create.component';
import { BlogpostEditComponent } from './blogpost-edit/blogpost-edit.component';
import { AuthComponent } from './auth/auth.component';
import { AddCookieInterceptor } from './add-cookie.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    BlogpostListComponent,
    NotFoundComponent,
    AdminComponent,
    BlogpostCreateComponent,
    BlogpostEditComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEditorModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AddCookieInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
