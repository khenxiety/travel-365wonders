import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DummyServiceService } from 'src/app/dummy/dummy-service.service';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})
export class ToursPageComponent implements OnInit {

  searchResult:any;

  searchActive:Boolean=false;

  apiTour:any;

  tourists:any;
  tours:any

  constructor(private dummy:DummyServiceService,private title: Title, private router :Router,private api:ApiService) { }

  ngOnInit(): void {
    window.scroll({ 
      top: 0, 
      left: 0
    });
    this.title.setTitle('365Wonders | Tours');



    this.tours=this.dummy.getData()
    this.getPosts();
    







    


  }



  details(data:any){
    // this.router.navigate(['/tours/tour-details',data._id])
    this.router.navigate(['/tours/tour-details',data.id])

    console.log(data);

  }



  getPosts(){
    // this.api.getPosts().subscribe(
    //   res=>{
    //     console.log(res)
    //     this.apiTour=res;
    //     this.tourists=this.tours;
        
        
        
       

    //   },
    //   err=>{
    //     console.log(err);
    //   }
    // )
    this.tourists=this.tours;

  }


  search(){
    // filter by search

    if(this.searchResult==""){
      this.getPosts();
      this.searchActive=false;
    }
    else{
      this.tourists=this.tourists.filter((tour: any)=>{
      
        return tour.title.toLowerCase().includes(this.searchResult.toLowerCase())
      }
    )
    this.searchActive=true;

    }
    
  

  
   
    
    
   

  
    
  }



  print(){
    window.print();
  }
}
