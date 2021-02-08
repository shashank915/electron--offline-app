import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { VendorService } from '../vendor.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';

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
    let vendor = this.service.getVendorById(id);
    this.id = vendor.id;
    this.vendorFormGroup.setValue({
      'name': vendor.name,
      'mobile': vendor.mobile,
      'email': vendor.email,
      'address': vendor.address,
      'gstNo': vendor.gstNo,
    });
  }

  updateVendor(form: NgForm){
    // form.setValue({id: this.id});
    this.service.updateVendor(form, this.id);
    this.isShowingResult = false;
    this.router.navigate(['/vendor-details', this.id])
  }

  vendorDetails() {
    this.router.navigate(['/vendor-details', this.id]);
  }

}
