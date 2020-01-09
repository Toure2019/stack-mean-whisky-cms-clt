import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { MaterialModule } from './material.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { BlogpostCreateComponent } from './blogpost-create/blogpost-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BlogpostEditComponent } from './blogpost-edit/blogpost-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogpostComponent,
    BlogpostListComponent,
    NotFoundComponent,
    AdminComponent,
    BlogpostCreateComponent,
    BlogpostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
