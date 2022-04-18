import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private auth:AuthService, public router: Router,private toast:ToastrService) { }



  showError(){
    this.toast.error('You need to login first before accesing this page', 'Error');
  }

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/home']);
      console.log("not login")
      this.showError()

      return false;
    }
    return true;
  }
}
