import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-death',
  templateUrl: './death.component.html',
  styleUrls: ['./death.component.scss']
})
export class DeathComponent implements OnInit {

  dt_firstName:any;
  dt_lastName:any;
 dt_middleName:any;
  
  req_name:any;
  req_contact:any;

  req_city:any;
  req_province:any;


  
  
  
  
  
  bc_bdate_MM:any;
  bc_bdate_DD:any;
  bc_bdate_YR:any;
  
  bc_pBirth_city:any;
  bc_pBirth_province:any;
  
  country:any

  copies:any
  m_husbandfirstname:any;
  m_husbandlastname:any;
  m_husbandmiddlename:any;

  m_wifefirstname:any;
  m_wifelastname:any;
  m_wifemiddlename:any;



 
  // mothers
  

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
