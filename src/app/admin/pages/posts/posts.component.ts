import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyServiceService } from 'src/app/dummy/dummy-service.service';
import {Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth'
import {collection,addDoc,Firestore, getDocs} from '@angular/fire/firestore'


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  tours:any;

  tourist:any

  public data:any=[]

  constructor(private dummy:DummyServiceService,private router:Router, private auth :Auth, private firestore:Firestore) { }

  ngOnInit(): void {
    
    // this.tours=this.dummy.getData()
    // console.log(this.tours)
    
  
    // this.sampleRegister()
  
  
    
    this.getPosts()
    

  
  

  }


  sampleRegister(){
    // createUserWithEmailAndPassword(this.auth,'test@gmail.com','123456').then((res:any)=>{
    //   console.log(res.user)
    // })
    // .catch((err:any)=>{
    //   console.log(err.message)

    // })

    const dbinstance=collection(this.firestore,'posts')
    let data={
      
      title:'KUALA LUMPUR Package',
      price: 'PHP 14,200 /person',
      image:'https://scontent.fmnl17-4.fna.fbcdn.net/v/t39.30808-6/277354941_1425365297900550_6400606129481221524_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGDoogiLKhb-UB7QJV2wG07uT1cCEcY5zm5PVwIRxjnOXWcFp7cJiQ6f8a0ovFF1BryV9K_TXiuo9q9BkCyffNf&_nc_ohc=93O2bdDsGpoAX_5ZLcR&_nc_ht=scontent.fmnl17-4.fna&oh=00_AT9zQ__ertfCr3juiC1MZukdKqAu6biqYgL2UACYp5wntw&oe=624EC725',
      description:'4D3N KUALA LUMPUR W/ GENTING HIGHLAND for as low as PHP 14,200 /person',
      location:'Malaysia',
      
      days:"4 days-3 nights",
      people:9,
      departure:'Apr 1 , 2022',
      return:'Apr 4, 2022',
      
      category:'international',
      facebookpost:"https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1425365841233829&show_text=true&width=500"
    }



    addDoc(dbinstance,data).then(
      (res:any)=>{
        console.log(res)
      }
    ).catch((err:any)=>{
      console.log(err.message)
    })


   
  }
  getPosts(){
    const dbinstance=collection(this.firestore,'posts');
    getDocs(
      dbinstance,
    ).then((res:any)=>{
      // console.log(res.docs.map((doc:any)=>{
      //   return {...doc.data(),id:doc.id}
      // }))
      this.tours=[...res.docs.map((doc:any)=>{
        return {...doc.data(),id:doc.id}
      })]
      console.log(this.tours)
    }).catch((err:any)=>{
      console.log(err.message)
    })


  }

  




  openDelete(){
    const del=document.getElementById('delete')!;
    del.classList.toggle('open');
  }
  openEdit(){
    const edit=document.getElementById('edit')!;
    edit.classList.toggle('open');
  }


  deletePost(id:any){
    this.dummy.delete(id);
    this.ngOnInit()

  }

  redirectToAdd(){
    this.router.navigate(['/admin/add-posts'])

  }
}
