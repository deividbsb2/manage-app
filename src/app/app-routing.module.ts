import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'list-people', loadChildren: './person/list/list.module#ListPageModule' },
  { path: 'detail-person/:id', loadChildren: './person/detail/detail.module#DetailPageModule' },
  { path: 'edit-person/:id', loadChildren: './person/edit/edit.module#EditPageModule' },
  { path: 'create-person', loadChildren: './person/create/create.module#CreatePageModule' },
  { path: 'list-apps', loadChildren: './apps/list/list.module#ListPageModule' },
  { path: 'create-app', loadChildren: './apps/create/create.module#CreatePageModule' },
  { path: 'edit-app/:id', loadChildren: './apps/edit/edit.module#EditPageModule' },
  { path: 'detail-app/:id', loadChildren: './apps/detail/detail.module#DetailPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
