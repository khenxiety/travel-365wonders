import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from '../../pages/add-post/add-post.component';
import { DashHomeComponent } from '../../pages/dash-home/dash-home.component';
import { PostsComponent } from '../../pages/posts/posts.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component:AdminDashboardComponent,children: [
      {
        path: 'dashboard',
        component: DashHomeComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      }, 
      {
        path: 'add-posts',
        component: AddPostComponent
      }, 
      {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
      }
    ]
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
