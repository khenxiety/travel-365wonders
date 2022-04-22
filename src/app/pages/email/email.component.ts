import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  



  fullname: any;
  mobile_no: any;
  email: any;
  messages: any;
  subject: any;


  constructor(private toastr:ToastrService, private title: Title) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
    this.title.setTitle('365Wonders | Email');
  }




  onSubmit(){

    let data ={
      from_name:this.fullname,
      email:this.email,
      mob_num:this.mobile_no,
      message:this.messages,
      subject:this.subject
    }


    emailjs.send('service_2hem73b', 'template_a5fm2z8',data , 'user_2OS84QxjMn43nqkQifnJH').then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      this.fullname='';
    
      this.mobile_no='';
      this.email='';
      this.subject='';

      this.messages='';
     
      
     
      
      this.toastr.success('Your request has been sent', 'Success');


    }, (error) => {
      console.log(error.text);
      this.toastr.error('Something went wrong', 'Error');
    });
  }

}
