import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
// emailjs
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
init("user_2OS84QxjMn43nqkQifnJH");

import {
  collection,
  addDoc,
  Firestore,
  getDocs,
} from '@angular/fire/firestore';

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

  subject:any

  package:any


  child:number=0 ;
  infants:number=0 ;
  adult:number=0;

  max:number=0

  maxChild:number=this.max;
  maxInfants:number=this.max;




  maxmessage:any;


  emailverify:any;
  tours: any;




  

    
    constructor(private toastr:ToastrService, private title: Title, private firestore: Firestore) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
    this.title.setTitle('365Wonders | Booking');

    this.getPosts();
    

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


  addToCart(){
      

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
          message:this.messages,
          package:this.package,
          subject:this.subject,
        
      }
      
      emailjs.send('service_qhjhmhr', 'template_h2wa38m',data , 'knXkgg-HEEkVjRDb_').then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.fullname='';
        this.tel_no='';
        this.mobile_no='';
        this.email='';
        this.departure_date='';
        this.return_date='';
        this.messages='';
        this.subject='';
       
        
       
        
        this.toastr.success('Your request has been sent', 'Success');
  
  
      }, (error) => {
        console.log(error.text);
        this.toastr.error('Something went wrong', 'Error');
      });
      

  }

  tourDest(){
    this.destination=this.tours[0].destination;
  }

  type(){
    const pack=document.getElementById('package')!;
    if(this.subject=='Tour Package'){
      pack.classList.add('open');
     

    }else{
      pack.classList.remove('open');
    }
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




  getPosts() {
    const dbinstance = collection(this.firestore, 'posts');
    getDocs(dbinstance)
      .then((res: any) => {
       
        this.tours = [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
        
      
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }



}
