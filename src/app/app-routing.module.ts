import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogpostListComponent } from './blogpost-list/blogpost-list.component';
import { BlogpostComponent } from './blogpost/blogpost.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminComponent } from './admin/admin.component';
import { BlogpostEditComponent } from './blogpost-edit/blogpost-edit.component';

const routes: Routes = [
    { path: '', component: BlogpostListComponent },
    { path: 'blog-posts/:id', component: BlogpostComponent }, //localhost:4200/az12r5cg
    { path: 'admin', component: AdminComponent },
    { path: 'admin/blog-posts/:id', component: BlogpostEditComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }