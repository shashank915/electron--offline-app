import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Vendor } from '../model/vendor';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendorFormGroup: FormGroup;
  id = '';
  name = '';
  mobile = '';
  email = '';
  address = '';
  gstNo = '';
  vendor: Vendor;

  isShowingResult = true;

  constructor(private router: Router,
     private route: ActivatedRoute,
      private service: VendorService,
       private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.vendorFormGroup = this.formBuilder.group({
      'name': [null, Validators.required],
      'email': [null, Validators.required],
      'mobile': [null, Validators.required],
      'address': [null, Validators.required],
      'gstNo': [null, Validators.required],
    });
    this.getVendor(this.route.snapshot.params['id']);
  }
  getVendor(id) {
    this.service.getVendorById(id).subscribe((result:Vendor) => {
      this.vendor = result
      this.id = this.vendor.id;
      this.vendorFormGroup.setValue({
        'name': this.vendor.name,
        'mobile': this.vendor.mobile,
        'email': this.vendor.email,
        'address': this.vendor.address,
        'gstNo': this.vendor.gstNo,
      });
    });
    
  }

  updateVendor(form: NgForm){
    // form.setValue({id: this.id});
    this.service.updateVendor(form, this.id).subscribe();
    this.isShowingResult = false;
    this.router.navigate(['/vendor-details', this.id])
  }

  vendorDetails() {
    this.router.navigate(['/vendor-details', this.id]);
  }

}
