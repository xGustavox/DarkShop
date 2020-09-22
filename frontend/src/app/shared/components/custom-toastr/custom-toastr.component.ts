import { Component, OnInit } from '@angular/core';
import { Toast, ToastrService, ToastPackage } from 'ngx-toastr';

@Component({
  selector: 'app-custom-toastr',
  templateUrl: './custom-toastr.component.html',
  styleUrls: ['./custom-toastr.component.scss']
})
export class CustomToastrComponent extends Toast {

  constructor(toastrService: ToastrService, toastPackage: ToastPackage) { 
    console.log(toastrService);
    console.log(toastPackage);
    
    super(toastrService, toastPackage);
  }

  ngOnInit(): void {
  }

}
