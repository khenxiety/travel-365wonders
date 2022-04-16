import { Injectable } from '@angular/core';
import { Firestore,addDoc } from '@angular/fire/firestore';



//Now import this 
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {


  

  constructor(private ngFirestore:Firestore) { }



  createPost(){
    return new Promise<any>((resolve, reject) => {
      // add firestore
      
        
    })
  }
}
