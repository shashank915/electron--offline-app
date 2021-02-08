import { Injectable } from '@angular/core';
import { ElectronService } from 'ngx-electron';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Vendor } from './model/vendor';


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "localhost:8080/api/v1/products";

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendors: Vendor[] = [];

  constructor(private httpClient: HttpClient) { 
    this.vendors.push({'id': '1', 'name': 'Shashank', 'mobile': 8240095059, 'address': 'Bangalore', 'email': 'shashank@xyz.com', 'gstNo': '12345'})
    this.vendors.push({'id': '2', 'name': 'Shashank', 'mobile': 8240095059, 'address': 'Bangalore', 'email': 'shashank@xyz.com', 'gstNo': '12345'})
    this.vendors.push({'id': '3', 'name': 'Shashank', 'mobile': 8240095059, 'address': 'Bangalore', 'email': 'shashank@xyz.com', 'gstNo': '12345'})
    this.vendors.push({'id': '4', 'name': 'Shashank', 'mobile': 8240095059, 'address': 'Bangalore', 'email': 'shashank@xyz.com', 'gstNo': '12345'})
    this.vendors.push({'id': '5', 'name': 'Shashank', 'mobile': 8240095059, 'address': 'Bangalore', 'email': 'shashank@xyz.com', 'gstNo': '12345'})
    this.vendors.push({'id': '6', 'name': 'Shashank', 'mobile': 8240095059, 'address': 'Bangalore', 'email': 'shashank@xyz.com', 'gstNo': '12345'})

  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // getVendors(): Observable<Vendor[]>{
  //   let url = apiUrl;
  //   return this.httpClient.get<Vendor[]>(url)
  //   .pipe(
  //     tap(vendors => console.log('fetched vendors')),
  //     catchError(this.handleError('getVendors', []))
  //   );
  // }

  // getVendorById(id: string): Observable<Vendor>{
  //   let url = apiUrl + "/" + id;
  //   return this.httpClient.get<Vendor>(url)
  //   .pipe(
  //     tap(vendor => console.log('fetched vendors')),
  //     catchError(this.handleError<Vendor>('getVendorById id=${id}'))
  //   );
  // }

  // addVendor(vendor: Vendor): Observable<Vendor>{
  //   let url = apiUrl + "/add";
  //   return this.httpClient.post<Vendor>(url, vendor, httpOptions)
  //   .pipe(
  //     tap((vendor: Vendor) => console.log(`added vendor w/ id=${vendor.id}`)),
  //     catchError(this.handleError<Vendor>('addProduct'))
  //   );
  // }

  // updateVendor(vendor: Vendor): Observable<Vendor>{
  //   let url = apiUrl + "/update";
  //   return this.httpClient.put<Vendor>(url, vendor, httpOptions)
  //   .pipe(
  //     tap((vendor: Vendor) => console.log(`added vendor w/ id=${vendor.id}`)),
  //     catchError(this.handleError<Vendor>('addProduct'))
  //   );
  // }



  getVendors(): Vendor[]{
    // let url = apiUrl;
    // return this.httpClient.get<Vendor[]>(url)
    // .pipe(
    //   tap(vendors => console.log('fetched vendors')),
    //   catchError(this.handleError('getVendors', []))
    // );

    return this.vendors;
  }

  getVendorById(id: string): Vendor{
    let filteredVendors = this.vendors.filter(data => data.id == id);
    if(filteredVendors.length === 0){
      console.log('Vendor Not found with id: {}', id);
    }
    return filteredVendors[0];
  }

  addVendor(vendor: any): Vendor{
    vendor.id = this.vendors.length;
    this.vendors.push(vendor);
    return vendor;
  }

  updateVendor(vendor: any, id: string): Vendor{
    // let filteredVendors = this.vendors.filter(data => data.id == id);
    let existingVendorIndex = this.vendors.findIndex(data => data.id == id);
    if(existingVendorIndex == -1){
      console.log('Vendor Not found with id: {}', vendor.id);
    }
    vendor.id = id;
    this.vendors[existingVendorIndex] = vendor;
    return vendor;
  }

  // deleteVendor(id: string){
  //   this.vendors.
  // }

}
