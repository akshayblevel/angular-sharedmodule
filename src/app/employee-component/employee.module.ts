import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeeComponentComponent } from './employee-component.component';
import { EmployeedetailComponentComponent } from './employeedetail-component/employeedetail-component.component';
import { EmployeedetailGuard } from './employeedetail-component/employeedetail.guard';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'employees', component: EmployeeComponentComponent },
      {
        path: 'employees/:id',
        component: EmployeedetailComponentComponent,
        canActivate: [EmployeedetailGuard]
      }
    ]),
    SharedModule
  ],
  declarations: [EmployeeComponentComponent, EmployeedetailComponentComponent]
})
export class EmployeeModule {}
