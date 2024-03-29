import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus, init } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';
init('knXkgg-HEEkVjRDb_');

@Component({
  selector: 'app-passport-appointment',
  templateUrl: './passport-appointment.component.html',
  styleUrls: ['./passport-appointment.component.scss'],
})
export class PassportAppointmentComponent implements OnInit {
  // applicants
  firstName: any;
  lastName: any;
  middleName: any;
  civil_status: any;
  citizenship: any;
  gender: any;
  bdate_MM: any;
  bdate_DD: any;
  bdate_YR: any;
  bLegitimacy: any;
  pBirth_city: any;
  pBirth_province: any;
  phoneNumber: any;
  mobileNumber: any;
  email: any;

  // fathers

  fathers_lastname: any;
  fathers_firstname: any;
  fathers_middle: any;
  fathers_citizenship: any;
  // mothers
  mothers_lastname: any;
  mothers_firstname: any;
  mothers_middle: any;
  mothers_citizenship: any;

  // spouse
  spouse_lastname: any;
  spouse_firstname: any;
  spouse_middle: any;
  spouse_citizenship: any;

  // for renewal
  passportNumber: any;
  passportDate_MM: any;
  passportDate_DD: any;
  passportDate_YR: any;
  expiryDate_MM: any;
  expiryDate_DD: any;
  expiryDate_YR: any;
  issuingAuth: any;

  renewalOpen: Boolean = false;

  appointmentFor: any;

  emergency_name: any;
  emergency_contact: any;

  occupation: any;
  complete_address: any;
  landmark: any;

  constructor(private toast: ToastrService) {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
  applicant() {
    const renewal = document.getElementById('openRenewal')!;
    if (this.appointmentFor == 'Renewal') {
      renewal.classList.add('open');
    } else {
      renewal.classList.remove('open');
    }
  }
  status() {
    const spouse = document.getElementById('spouse')!;
    if (
      this.civil_status == 'Married' ||
      this.civil_status == 'Widowed' ||
      this.civil_status == 'Separated'
    ) {
      spouse.classList.add('open');
    } else if (this.civil_status == 'Single') {
      spouse.classList.remove('open');
    }
  }

  onSubmit() {
    let data: any = {
      from_name: this.firstName,
      firstName: this.firstName,
      lastName: this.lastName,
      middleName: this.middleName,
      civil_status: this.civil_status,
      citizenship: this.citizenship,
      gender: this.gender,
      bdate_MM: this.bdate_MM,
      bdate_DD: this.bdate_DD,
      bdate_YR: this.bdate_YR,
      bLegitimacy: this.bLegitimacy,
      pBirth_city: this.pBirth_city,
      pBirth_province: this.pBirth_province,
      phoneNumber: this.phoneNumber,
      mobileNumber: this.mobileNumber,
      email: this.email,
      f_lastname: this.fathers_lastname,
      f_firstname: this.fathers_firstname,
      f_middlename: this.fathers_middle,
      f_citizenship: this.fathers_citizenship,

      m_lastname: this.mothers_lastname,
      m_firstname: this.mothers_firstname,
      m_middle: this.mothers_middle,
      m_citizenship: this.mothers_citizenship,

      s_lastname: this.spouse_lastname,
      s_firstname: this.spouse_firstname,
      s_middlename: this.spouse_middle,
      s_citizenship: this.spouse_citizenship,

      passportNumber: this.passportNumber,
      passportDate_MM: this.passportDate_MM,
      passportDate_DD: this.passportDate_DD,
      passportDate_YR: this.passportDate_YR,
      expiryDate_MM: this.expiryDate_MM,
      expiryDate_DD: this.expiryDate_DD,
      expiryDate_YR: this.expiryDate_YR,
      issuingAuth: this.issuingAuth,
      appointmentFor: this.appointmentFor,
      emergency_name: this.emergency_name,
      emergency_contact: this.emergency_contact,
      occupation: this.occupation,
      complete_address: this.complete_address,
      landmark: this.landmark,
    };

    emailjs
      .send('service_qhjhmhr', 'template_3sratr7', data, 'knXkgg-HEEkVjRDb_')
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);

          window.location.reload();

          this.toast.success('Your appointment has been sent', 'Success');
        },
        (error) => {
          console.log(error.text);
          this.toast.error('Something went wrong', 'Error');
        }
      );
  }
}
