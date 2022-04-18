import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  email:any
  password:any;
  constructor(private router:Router, private auth:Auth,private toast:ToastrService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    signInWithEmailAndPassword(this.auth,this.email,this.password).then((res:any)=>{
      
      localStorage.setItem('token',res.user.accessToken)



      this.toast.success('Login Successful')
      this.router.navigate(['/admin']);

    })
    .catch((err:any)=>{
      console.log(err)
      this.toast.error('Login Failed',err.message)

    })

  }


  signUp(){
    createUserWithEmailAndPassword(this.auth,this.email,this.password).then((res:any)=>{
      console.log(res.user)
    })
    .catch((err:any)=>{
      console.log(err.message)

    })

  }



}
