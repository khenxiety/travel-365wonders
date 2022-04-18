import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DummyServiceService } from 'src/app/dummy/dummy-service.service';
import {Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth'
import {collection,addDoc,Firestore, getDocs, deleteDoc, doc, updateDoc} from '@angular/fire/firestore'
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  tours:any;

  tourist:any

  public data:any=[]


  singleData:any;


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

  postId:any
  searchResult: any;

  modalTitle:any;

  constructor(private dummy:DummyServiceService,private router:Router, private auth :Auth, private firestore:Firestore,private toast:ToastrService ) { }

  ngOnInit(): void {
   this.getPosts()
    

  
  

  }


  sampleRegister(){
    // createUserWithEmailAndPassword(this.auth,'test@gmail.com','123456').then((res:any)=>{
    //   console.log(res.user)
    // })
    // .catch((err:any)=>{
    //   console.log(err.message)

    // })


   
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
      // console.log(this.tours)
    }).catch((err:any)=>{
      console.log(err.message)
    })


 


  }
  deletePost(id:any){
    const deleteDocs=doc(this.firestore,'posts',id)
    deleteDoc(deleteDocs).then((res:any)=>{
     
      this.toast.success('Post Deleted')
      this.ngOnInit()

    }).catch((err:any)=>{
      console.log(err.message)
    })
  }
  search() {
    if (this.searchResult == '') {
      this.getPosts();
      // this.searchActive = false;
    } else {
      this.tours = this.tours.filter((tour: any) => {
        return tour.title
          .toLowerCase()
          .includes(this.searchResult.toLowerCase());
      });
      // this.searchActive = true;
    }
  }


  singlePost(id:any){
    this.singleData=this.tours.filter((tour:any)=>tour.id==id)
    this.modalTitle=this.singleData[0].title

    this.title=this.singleData[0].title
    this.price=this.singleData[0].price
    this.image=this.singleData[0].image
    this.description=this.singleData[0].description
    this.location=this.singleData[0].location
    this.days=this.singleData[0].days
    this.people=this.singleData[0].people
    this.departure=this.singleData[0].departure
    this.return=this.singleData[0].return
    this.category=this.singleData[0].category
    this.facebookpost=this.singleData[0].facebookpost


  
    
  }



  updatePost(){
   

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


    const updatedoc=doc(this.firestore,'posts',this.singleData[0].id)
    updateDoc(updatedoc,data).then((res:any)=>{
     
      this.toast.success('Post Updated')
      this.ngOnInit()

    }).catch((err:any)=>{
      console.log(err.message)
      this.toast.error('All feilds are required', "Error")

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



  redirectToAdd(){
    this.router.navigate(['/admin/add-posts'])

  }
}
