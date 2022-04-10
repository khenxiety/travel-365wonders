import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// emailjs
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
init("user_2OS84QxjMn43nqkQifnJH");

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  date:any;
  fullname:any;
  email:any;
  mobile_no:any;
  tel_no:any;
  destination:any;
  departure_date:any;
  return_date:any;
  messages:any;




  child:number=0 ;
  infants:number=0 ;
  adult:number=0;

  max:number=0

  maxChild:number=this.max;
  maxInfants:number=this.max;




  maxmessage:any;


  emailverify:any;




  

  constructor(private toastr:ToastrService, private title: Title) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
    this.title.setTitle('365Wonders | Booking');

  }
  showSuccess(status:any) {
    this.toastr.success('Email sent successfully!', status);
  }
  showError() {
    this.toastr.error('Hello world!', 'Toastr fun!');
  }

  toggle(){
    const nav = document.getElementById('nav-items')!;
    nav.classList.toggle('open');


    const section1 = document.getElementById('blur-book')!;
    section1.classList.toggle('open');
  }


  sendMail(){
    
    const departure= new Date(this.departure_date);
    const return_date= new Date(this.return_date);
    
      
        // this.messages="Im requesting to reset my password. Email me at"+this.email;
        let data={
          from_name: this.fullname,
          full_name: this.fullname,
          dates: "From "+departure.toDateString()+" to "+return_date.toDateString(),
          destination: this.destination,
          no_person: this.adult+" Adult "+this.child+" Child "+this.infants+" Infants ",
          telephone:this.tel_no,

          mobile: this.mobile_no,
          email_add: this.email,
          message:this.messages
        }
        console.log(data)
        emailjs.send('service_2hem73b', 'template_oeby71o',data).then((res) =>{
            console.log("success", res.status)
            this.showSuccess(res.status);

           
            this.fullname="";
            this.email="";
            this.mobile_no="";
            this.tel_no="";
            this.destination="";
            this.departure_date="";
            this.return_date="";
            this.messages="";
            this.adult=0;
            this.child=0;
            this.infants=0;

        }, (err) => {
            console.log("error", err)
            this.showError();
        })

       
      
      
    
  }

  onChange(){
    
    
    this.max=this.max+this.adult+this.child+this.infants;


    if (this.adult==undefined || this.child==undefined || this.infants==undefined) {
      this.maxmessage="";
      this.max=0
     
      
    }
    if (this.max>=9) {
      this.maxmessage="Maximum number of passengers reached";
      
      
    } else {
      
    }
    
  }



}
