import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorComponent } from './vendor/vendor.component';
import { VendorDetailsComponent } from './vendor-details/vendor-details.component';
import { VendorAddComponent } from './vendor-add/vendor-add.component';
import { VendorEditComponent } from './vendor-edit/vendor-edit.component';

const routes: Routes = [
  {
    path: 'vendors',
    component: VendorComponent,
    data: { title: 'List of Vendors' }
  },
  {
    path: 'vendor-details/:id',
    component: VendorDetailsComponent,
    data: { title: 'Vendor Details' }
  },
  {
    path: 'vendor-add',
    component: VendorAddComponent,
    data: { title: 'Add Vendor' }
  },
  {
    path: 'vendor-edit/:id',
    component: VendorEditComponent,
    data: { title: 'Edit Vendor' }
  },
  { path: '',
    redirectTo: '/vendors',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
