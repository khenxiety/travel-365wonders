import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-visa-processing',
  templateUrl: './visa-processing.component.html',
  styleUrls: ['./visa-processing.component.scss']
})
export class VisaProcessingComponent implements OnInit {


  destination:any;
  return_date:any;
  departure_date:any
  country_origin:any;
  first_name:any;
  last_name:any;
  address:any;
  email:any;
  phone_number:any
  birth_date:any
  passport_number:any;
  name_title:any;


  country:any;
  constructor(private http:HttpClient, private title: Title,private toast:ToastrService) { }

  ngOnInit(): void {



    this.http.get('https://restcountries.com/v3.1/all').subscribe(data=>{
      
      this.country=data;
      // sort
      this.country=this.country.name.common.sort((a:any,b:any)=>{
        if(a.name>b.name) return 1;
        if(a.name<b.name) return -1;
        return 0;
      })
      
      console.log(this.country);
    })
    window.scroll({ 
      top: 0, 
      left: 0
    });

    this.title.setTitle('365Wonders | Services | Travel Insurance');

  }


  onSubmit(){
    
    let data:any ={
      destination:this.destination,
      return_date:this.return_date,
      departure_date:this.departure_date,
      country_origin:this.country_origin,
      first_name:this.first_name,
      last_name:this.last_name,
      address:this.address,
      email:this.email,
      phone_number:this.phone_number,
      birth_date:this.birth_date,
      passport_number:this.passport_number,
      name_title:this.name_title

            
    
      
      
      
            
    }

    
    
    
          emailjs.send('service_s1fe8xj', 'template_iuzssps',data , 'O_8JdJWT-A4Ao6W50').then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          
          
          window.location.reload();
          
          this.toast.success('Your appointment has been sent', 'Success');
    
    
        }, (error) => {
          console.log(error.text);
          this.toast.error('Something went wrong', 'Error');
        });
    
        
    
    
        
    
        
        
        
    
        
    
    
    
        
    
    
    
    
      
    
    
        
        
      }




}
