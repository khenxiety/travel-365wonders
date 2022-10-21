import { Component, OnInit } from '@angular/core';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytesResumable,
} from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  title: any;
  price: any;
  image: any;
  description: any;
  location: any;
  days: any;
  people: any;
  departure: any;
  return: any;
  category: any;
  facebookpost: any;

  file!: File;
  fileRestriction: Array<any> = ['image/jpeg', 'image/png'];
  isFileValid: boolean = true;

  isLoading: boolean = false;
  constructor(
    private firestore: Firestore,
    private toast: ToastrService,
    private router: Router,
    private storage: Storage
  ) {}

  ngOnInit(): void {}

  fileChange(event: any) {
    if (this.fileRestriction.includes(event.target.files[0].type)) {
      this.file = event.target.files[0];
      this.isFileValid = true;
    } else {
      this.toast.error('Invalid file format');
      this.isFileValid = false;
    }
  }

  uploadFile(event: any) {
    this.isLoading = true;
    const storageRef = ref(this.storage, `images/${this.file.name}`);
    const upload = uploadBytesResumable(storageRef, this.file);

    upload.on(
      'state_changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress);

        if (progress === 100) {
          setTimeout(() => {
            getDownloadURL(upload.snapshot.ref).then((url) => {
              console.log(url);
              this.addPost(url);
            });
          }, 2000);
        }
      },
      () => {
        getDownloadURL(upload.snapshot.ref).then((url) => {
          console.log('dlurl', url);
        });
      }
    );
  }

  addPost(url: any) {
    // createUserWithEmailAndPassword(this.auth,'test@gmail.com','123456').then((res:any)=>{
    //   console.log(res.user)
    // })
    // .catch((err:any)=>{
    //   console.log(err.message)

    // })

    const dbinstance = collection(this.firestore, 'posts');
    let data = {
      title: this.title,
      price: this.price,
      image: url,
      description: this.description,
      location: this.location,

      days: this.days,
      people: this.people,
      departure: this.departure,
      return: this.return,

      category: this.category,
      facebookpost: this.facebookpost,
    };

    addDoc(dbinstance, data)
      .then((res: any) => {
        // console.log(res)
        this.toast.success('Post Added');
        this.ngOnInit();
        this.isLoading = false;

        this.router.navigate(['/admin/posts']);
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }
}
