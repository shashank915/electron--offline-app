import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { VendorService } from '../vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor-details',
  templateUrl: './vendor-details.component.html',
  styleUrls: ['./vendor-details.component.css']
})
export class VendorDetailsComponent implements OnInit {

  vendor: Vendor;
  isShowingResult = true;

  constructor(private route: ActivatedRoute, private vendorService: VendorService, private router: Router) { }

  ngOnInit() {
    this.getVendorDetails(this.route.snapshot.params['id']);
  }

  getVendorDetails(id) {
    this.vendor = this.vendorService.getVendorById(id);
  }

  

}
