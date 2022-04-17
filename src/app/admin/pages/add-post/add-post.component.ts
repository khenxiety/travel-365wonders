import { Component, OnInit } from '@angular/core';
import {collection,addDoc,Firestore, getDocs,deleteDoc, doc} from '@angular/fire/firestore'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {

  title:any
  price:any
  image:any
  description:any
  location:any
  days:any
  people:any
  departure:any
  return:any
  category:any
  facebookpost:any


  constructor(private firestore:Firestore,private toast:ToastrService,private router:Router) { }

  ngOnInit(): void {
  }


  addPost(){
    // createUserWithEmailAndPassword(this.auth,'test@gmail.com','123456').then((res:any)=>{
    //   console.log(res.user)
    // })
    // .catch((err:any)=>{
    //   console.log(err.message)

    // })

    const dbinstance=collection(this.firestore,'posts')
    let data={
    
      title:this.title,
      price: this.price,
      image:this.image,
      description:this.description,
      location:this.location,
   
      days:this.days,
      people:this.people,
      departure:this.departure,
      return:this.return,
    
      category:this.category,
      facebookpost:this.facebookpost

      
      


    }



    addDoc(dbinstance,data).then(
      (res:any)=>{
        console.log(res)
        this.toast.success('Post Added');
        this.ngOnInit()

        this.router.navigate(['/admin/posts'])
      }
    ).catch((err:any)=>{
      console.log(err.message)
    })


   
  }


  

}
