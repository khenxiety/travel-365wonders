import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marriage',
  templateUrl: './marriage.component.html',
  styleUrls: ['./marriage.component.scss']
})
export class MarriageComponent implements OnInit {
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
