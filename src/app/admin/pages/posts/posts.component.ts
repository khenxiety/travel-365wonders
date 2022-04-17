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

    const dbinstance=collection(this.firestore,'posts')
    let data={
    
      title:'Ilocos',
      price: 'P8,999 /person',
      image:'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/276161930_1428594167577663_8841921417650499926_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFYljWw96WQWWcPR5RlulLAOgqwb2RlBDg6CrBvZGUEOJ1JICUiFa1Xex9Za_FgGelGAammE0UXdNACiyFA-L8J&_nc_ohc=hvI6as1TfdYAX-yzSo1&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-zC8WJdyjVZNTLeIg-71mUTtV9lunNjldilI_Q5_5_tw&oe=62497FAD',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      location:'Boracay Island',
   
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
    
      category:'local',
      facebookpost:'https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ftravelby365wonders%2Fposts%2F1428596154244131&show_text=true&width=500'

      
      


    }



    addDoc(dbinstance,data).then(
      (res:any)=>{
        console.log(res)
        this.toast.success('Post Added');
        this.ngOnInit()
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


  singlePost(id:any){
    this.singleData=this.tours.filter((tour:any)=>tour.id==id)

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
