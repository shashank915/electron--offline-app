import { Component, OnInit } from '@angular/core';
import { Vendor } from '../model/vendor';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {
  vendors: Vendor[];
  displayedColumns: string[] = ['name', 'mobile', 'gstNo'];
  isLoadingResults = true;

  constructor(private vendorService: VendorService ) { 
  }

  ngOnInit() {

    // this.vendorService.getVendors().subscribe(res => {
    //   this.vendors = res;
    //   this.isLoadingResults=false;
    //   console.log(this.vendors);
    // }, err => {
    //   console.log(err);
    //   this.isLoadingResults = false;
    // })


    this.vendors = this.vendorService.getVendors();
    this.isLoadingResults = false;
  }

}
