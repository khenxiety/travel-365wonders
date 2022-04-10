import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { DashHomeComponent } from '../../pages/dash-home/dash-home.component';




@NgModule({
  declarations: [

    AdminDashboardComponent,
    SidebarComponent,
    DashHomeComponent
  ],
  imports: [
   
    AdminModuleRoutingModule
  ],
  bootstrap: [AdminDashboardComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
  
})
export class AdminModuleModule { }
