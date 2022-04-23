import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
import { DummyServiceService } from 'src/app/dummy/dummy-service.service';
import {collection,addDoc,Firestore, getDocs} from '@angular/fire/firestore'


init("user_2OS84QxjMn43nqkQifnJH");


@Component({
  selector: 'app-tour-details',
  templateUrl: './tour-details.component.html',
  styleUrls: ['./tour-details.component.scss']
})
export class TourDetailsComponent implements OnInit {


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

  max:number=9

  maxChild:number=this.max;
  maxInfants:number=this.max;
  maxAdult:number=this.max;




  maxmessage:any;


  toursFiltered:any;

  

  id:any;
  total: number=0;
  
  
  apiTour: any;
  tourists: any;

  tours:any
  package:any;
 
  url: SafeResourceUrl | undefined;
  subject: any;

  constructor(private dummy:DummyServiceService,private route:Router,private activated:ActivatedRoute, private title:Title,private toastr:ToastrService,private api:ApiService,public sanitizer:DomSanitizer,private firestore:Firestore,) { 

    this.id=this.activated.snapshot.paramMap.get('id');
   

  }

  ngOnInit(): void {
    this.title.setTitle('365Wonders | ' +"Details")

    window.scroll({ 
      top: 0, 
      left: 0
    });
    
    
    
    
    this.getPosts();
  }
  getPosts(){
    const dbinstance=collection(this.firestore,'posts');
    getDocs(
      dbinstance,
    ).then((res:any)=>{
     
      this.tours=[...res.docs.map((doc:any)=>{
        return {...doc.data(),id:doc.id}
      })]
  


      this.toursFiltered=this.tours.filter((tour:any)=>tour.id==this.id)
    
      this.package=this.toursFiltered[0].title;
      this.destination=this.toursFiltered[0].location;

      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.toursFiltered[0].facebookpost);  
     
    }).catch((err:any)=>{
      console.log(err.message)
    })

    
  }

  showSuccess(){
    this.toastr.success('Successfully added to cart!', 'Success!');
  }
  showMax(){
    this.toastr.error('Maximum number of 9', 'Maximum number of people exceeded!');
  }
  showMinimum(){
    this.toastr.error('Minimum number of people is 2!', 'Error!');
  }


  incrementChild(data:any){
    if(data=='child'){
      if(this.child<this.max){
        this.child++;
       
      }else if(this.child>=this.max){
        
        this.showMax()
  
      }

    }
    if(data=='adult'){
      if(this.adult<this.max){
        this.adult++;
        
      }else if(this.adult>=this.max){
        
        this.showMax()
  
      }

    }
    if(data=='infants'){
      if(this.infants<this.max){
        this.infants++;
        
      }else if(this.infants>=this.max){
        
        this.showMax()
  
      }

    }
    if(this.adult+this.child+this.infants>this.max){
      this.showMax()
    }
    // total people
    this.total=this.adult+this.child+this.infants;

    
      
    }

  

    decrementChild(data:any){
     

      if(data=='child'){
        if(this.child>0){
          this.child--;
         
        }else if(this.child<=0){
          this.showMinimum()
        }
  
      }else if(data=='adult'){
        if(this.adult>0){
          this.adult--;
          
        }else if(this.adult<=0){
          this.showMinimum()
        }
      }else if(data=='infants'){
        if(this.infants>0){
          this.infants--;
         
        }else if(this.infants<=0){
          this.showMinimum()
        }
      }
    this.total=this.adult-this.child-this.infants;
        
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
          subject:this.package
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
          this.subject=''
          
         
          
          this.toastr.success('Your request has been sent', 'Success');
    
    
        }, (error) => {
          console.log(error.text);
          this.toastr.error('Something went wrong', 'Error');
        });
        

    }

  

}
