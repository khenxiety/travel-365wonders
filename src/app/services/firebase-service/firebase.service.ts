import { Injectable } from '@angular/core';
import { Firestore,addDoc,getDocs,collection } from '@angular/fire/firestore';




//Now import this 
import 'firebase/firestore';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  tours:any;

  


  constructor(private ngFirestore:Firestore) { 

    this.getPostsFirebase()


    

    
  }



  createPost(){
    return new Promise<any>((resolve, reject) => {
      // add firestore
      
        
    })
  }


  getPostsFirebase(){
    const dbinstance=collection(this.ngFirestore,'posts');
    getDocs(
      dbinstance,
    ).then((res:any)=>{
      // console.log(res.docs.map((doc:any)=>{
      //   return {...doc.data(),id:doc.id}
      // }))
      this.tours=[...res.docs.map((doc:any)=>{
        return {...doc.data(),id:doc.id}
      })]

      

      
      

    
    }).catch((err:any)=>{
      console.log(err.message)
    })
    


  }

  
}
