import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenomar',
  templateUrl: './cenomar.component.html',
  styleUrls: ['./cenomar.component.scss']
})
export class CenomarComponent implements OnInit {

  bc_firstName:any;
  bc_lastName:any;
  bc_middleName:any;
  civil_status:any;
  citizenship:any;
  gender:any;
  bc_bdate_MM:any;
  bc_bdate_DD:any;
  bc_bdate_YR:any;
  
  bc_pBirth_city:any;
  bc_pBirth_province:any;
  
  bc_country:any

  copies:any



  // fathers

  bc_fathers_lastname:any;
  bc_fathers_firstname:any;
  bc_fathers_middle:any;
  bc_fathers_citizenship:any;
  // mothers
  bc_mothers_lastname:any;
  bc_mothers_firstname:any;
  bc_mothers_middle:any;
  bc_mothers_citizenship:any;

  // spouse
  spouse_lastname:any;
  spouse_firstname:any;
  spouse_middle:any;
  spouse_citizenship:any;


  // for renewal
  





  appointmentFor:any;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
