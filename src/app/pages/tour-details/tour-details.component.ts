import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ApiService } from 'src/app/services/api.service';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';

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

  tours=[
    {
      id:1,
      title:'Tagaytay Staycation',
      price: 'P1,999',
      image:'assets/tours/tour1.jpg',
      description:"P1,999 lang per night, Tagaytay Staycation na yan! Oo, di ka namamalikmata, P1,999 nga!",
      location:'Tagaytay City',
      rating:4.5,
      days:"3 days-2 nights",
      people:2,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Tagaytay City',
        'Tagaytay Beach',
        'Tagaytay National Park',
        'Tagaytay Zoo',
        'Tagaytay Museum',
        'Tagaytay City',
      ],
      category:'local',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1416317538805326&show_text=true&width=500'




    },
    {
      id:2,
      title:'2D1N BAGUIO Staycation',
      price: ' P3,799 /person',
      image:'assets/tours/tour2.jpg',
      description:"Abot kayang 2D1N BAGUIO Private Tours for as low as PHP 3,799 /person",
      location:'Baguio City',
      rating:4.5,
      days:"2 days-1 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      category:'local',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1406885423081871&show_text=true&width=500'

      


    },
    {
      id:3,
      title:'4D3N BORACAY ALL IN PACKAGE',
      price: 'P8,999 /person',
      image:'assets/tours/tour3.jpg',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      location:'Boracay Island',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      category:'local',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1406858206417926&show_text=true&width=500'
      


    },
    {
      id:4,
      title:'Thailand Trip',
      price: 'P8,999 /person',
      image:'assets/tours/tour4.jpg',
      description:"Abot kayang 4D3N Thailand ALL IN PACKAGE for as low as PHP 8,999 /person",
      location:'Thailand',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Thailand City',
        'Thailand Beach',
        'Thailand National Park',
        'Thailand Zoo',
        'Thailand Museum',
        'Thailand City',
      ],
      category:'international',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1425242434579503&show_text=true&width=500'

      


    },
    {
      id:5,
      title:'Ilocos',
      price: 'P8,999 /person',
      image:'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/276161930_1428594167577663_8841921417650499926_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFYljWw96WQWWcPR5RlulLAOgqwb2RlBDg6CrBvZGUEOJ1JICUiFa1Xex9Za_FgGelGAammE0UXdNACiyFA-L8J&_nc_ohc=hvI6as1TfdYAX-yzSo1&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-zC8WJdyjVZNTLeIg-71mUTtV9lunNjldilI_Q5_5_tw&oe=62497FAD',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      location:'Boracay Island',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      category:'local',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1428596154244131&show_text=true&width=500'

      
      


    },
    {
      id:6,
      title:'3-day Puerto Princesa Package',
      price: 'P6,180 /person',
      image:'https://scontent.fcrk1-4.fna.fbcdn.net/v/t39.30808-6/277355936_1425343991236014_9134754103797484454_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeENfvcIKqqjSMQ2f2pD_vk0JxS1dJ5bnssnFLV0nluey0WxEso2ZUF5xCTyETcCIQU6Bwgw8Dzukx7nFhVqn3NB&_nc_ohc=sW8vit2DYQ0AX_-qNYM&_nc_ht=scontent.fcrk1-4.fna&oh=00_AT-vGM7lW2EDuZ5TuIN5SWDIq0gXTJB3U1KrbTR--nwOyw&oe=624E6F3A',
      description:"Explore the lush beauty of Puerto Princesa, the City in a Forest. Our 3-day package will bring you to the sights and sounds of its wonderous nature for as low as PHP 6,180",
      location:'Puerto Princesa Palawan',
      rating:4.5,
      days:"3 days-2 nights",
      people:9,
      departure:'Mar 28, 2022',
      return:'June 30, 2022',
      highlights:[
        'Puerto Princesa',
        'Puerto Princesa Beach',
        'Puerto Princesa National Park',

      ],
      category:'local',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1425344154569331&show_text=true&width=500'


    },
    {
      id:7,
      title:'KUALA LUMPUR Package',
      price: 'PHP 14,200 /person',
      image:'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/277354941_1425365297900550_6400606129481221524_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGDoogiLKhb-UB7QJV2wG07uT1cCEcY5zm5PVwIRxjnOXWcFp7cJiQ6f8a0ovFF1BryV9K_TXiuo9q9BkCyffNf&_nc_ohc=93O2bdDsGpoAX_5ZLcR&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT9zQ__ertfCr3juiC1MZukdKqAu6biqYgL2UACYp5wntw&oe=624EC725',
      description:'4D3N KUALA LUMPUR W/ GENTING HIGHLAND for as low as PHP 14,200 /person',
      location:'Malaysia',
      rating:4.5,
      days:"4 days-3 nights",
      people:9,
      departure:'Apr 1 , 2022',
      return:'Apr 4, 2022',
      highlights:[
        'Kuala Lumpur',
        'Kuala Lumpur Beach',
        'Kuala Lumpur National Park']
      ,
      category:'international',
      facebookpost:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1425365841233829&show_text=true&width=500"
    },
    {
      id:8,
      title:'Dubai Package',
      price: 'PHP 27,160 /person',
      image:'https://scontent.fcrk1-3.fna.fbcdn.net/v/t39.30808-6/277580796_1429879324115814_4534942616432561662_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH_F9zeT8q69mym5dnJchpKBTa-2BGXNU0FNr7YEZc1TRaiJvKAkYTuXJKOiXe8meTSAXD3JMp4s8ILOHKzDuoB&_nc_ohc=BvB4wvr7vMgAX9kky5p&_nc_ht=scontent.fcrk1-3.fna&oh=00_AT858qEah1_Sk_zoy5T1M7qcXoTGN2cSXdJPb7TBWJckCA&oe=624E8A35',
      description:'Feel the best tour & travel package to magnificent city of Dubai 6D5N Dubai Land Arrangement Package for as low as PHP 27,160 /person'
      ,
      location:'Dubai',
      rating:4.5,
      days:"6 days-5 nights",
      people:9,
      departure:'Apr 1 , 2022',
      return:'Apr 4, 2022',
      highlights:[
        'Dubai',
      ]
      ,
      category:'international',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1429879550782458&show_text=true&width=500'

    }
  ]
  package:any;
 
  url: SafeResourceUrl | undefined;

  constructor(private route:Router,private activated:ActivatedRoute, private title:Title,private toastr:ToastrService,private api:ApiService,public sanitizer:DomSanitizer) { 

    this.id=this.activated.snapshot.paramMap.get('id');
     console.log(this.id)

  }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });



    // filter by id
    this.toursFiltered=this.tours.filter(tour=>tour.id==this.id)

    this.tourists=this.toursFiltered[0];
    console.log(this.tourists)
    this.destination=this.tourists.location;
    this.package=this.tourists.title;


    this.title.setTitle('365Wonders | ' +"Details")

    this.getPosts();

    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.tourists.facebookpost);  
    console.log(this.url)


  }
  getPosts(){

    // const test="62494635e9e444c0f1c89fbc"
    // this.api.getIndividualPost(this.id).subscribe(
    //   res=>{
    //     console.log(res)
    //     this.apiTour=res;
    //     this.tourists=this.apiTour.post;


    //     console.log(this.tourists)
    //     this.destination=this.tourists.location;


        
        
        
       

    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // )
  }

  showSuccess(){
    this.toastr.success('Successfully added to cart!', 'Success!');
  }
  showMax(){
    this.toastr.error('Maximum number of 9', 'Maximum number of people exceeded!');
  }
  showMinimum(){
    this.toastr.error('Minimum number of people is 1!', 'Error!');
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
      console.log("Child: "+this.child+" Adults: "+this.adult+" Infants "+this.infants)

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
          package:this.tourists.title,
        }
        
        emailjs.send('service_qhjhmhr', 'template_gfc4aq8',data , 'knXkgg-HEEkVjRDb_').then((result: EmailJSResponseStatus) => {
          console.log(result.text);
          this.fullname='';
          this.tel_no='';
          this.mobile_no='';
          this.email='';
          this.departure_date='';
          this.return_date='';
          this.messages='';
         
          
         
          
          this.toastr.success('Your request has been sent', 'Success');
    
    
        }, (error) => {
          console.log(error.text);
          this.toastr.error('Something went wrong', 'Error');
        });
        // emailjs.send('service_2hem73b', 'template_oeby71o',data).then((res) =>{
        //     console.log("success", res.status)
        //     this.showSuccess()

           
        //     this.fullname="";
        //     this.email="";
        //     this.mobile_no="";
        //     this.tel_no="";
        //     this.destination="";
        //     this.departure_date="";
        //     this.return_date="";
        //     this.messages="";
        //     this.adult=0;
        //     this.child=0;
        //     this.infants=0;

        // }, (err) => {
        //     console.log("error", err)
            
        // })

    }

  

}
