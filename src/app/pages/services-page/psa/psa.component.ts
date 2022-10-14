import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psa',
  templateUrl: './psa.component.html',
  styleUrls: ['./psa.component.scss']
})
export class PsaComponent implements OnInit {

  select:any='Select Appointment'

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

    window.scroll(
      {
        top: 0,
        left: 0,
      }
    )
  }
  test(){
    console.log(this.copies)
  }


  onSubmit(){
    
  }

  appointment(){
    const birth=document.getElementById('birth-cert')!;
    const marriage=document.getElementById('marriage')!;
    const death=document.getElementById('death')!;
    const cenomar=document.getElementById('cenomar')!;



    if (this.appointmentFor == 'Birth Certificate') {
      birth.classList.add('open');
      marriage.classList.remove('open');
      death.classList.remove('open');
      cenomar.classList.remove('open');

    

    }
    else if(this.appointmentFor == 'Marriage Certificate'){
      marriage.classList.add('open');
      birth.classList.remove('open');
      death.classList.remove('open');
      cenomar.classList.remove('open');


    }else if( this.appointmentFor == 'Death Certificate'){
      death.classList.add('open');
      marriage.classList.remove('open');
      birth.classList.remove('open');
      cenomar.classList.remove('open');

    }else if( this.appointmentFor == 'CENOMAR'){
      cenomar.classList.add('open');
      marriage.classList.remove('open');
      death.classList.remove('open');
      birth.classList.remove('open');

    

    }

    
  }

  setCopiesValue(copy:any){
    this.copies=copy;
  }
}
