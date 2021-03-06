import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DummyServiceService } from 'src/app/dummy/dummy-service.service';
import { ApiService } from 'src/app/services/api.service';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss'],
})
export class ToursPageComponent implements OnInit {
  searchResult: any;

  searchActive: Boolean = false;

  apiTour: any;

  tourists: any;
  tours: any;

  filtered: any;

  constructor(
    private dummy: DummyServiceService,
    private title: Title,
    private router: Router,
    private api: ApiService,
    private firestore: Firestore
  ) {}

  ngOnInit(): void {
    window.scroll({
      top: 0,
      left: 0,
    });
    this.title.setTitle('365Wonders | Tours');

    // this.tours=this.dummy.getData()
    this.getPosts();
  }

  details(data: any) {
    // this.router.navigate(['/tours/tour-details',data._id])
    this.router.navigate(['/tours/tour-details', data.id]);

  }


  getPosts() {
    const dbinstance = collection(this.firestore, 'posts');
    getDocs(dbinstance)
      .then((res: any) => {
       
        this.tours = [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
      
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }

  search() {
    if (this.searchResult == '') {
      this.getPosts();
      this.searchActive = false;
    } else {
      this.tours = this.tours.filter((tour: any) => {
        return tour.location
          .toLowerCase()
          .includes(this.searchResult.toLowerCase());
      });
      this.searchActive = true;
    }
  }

  filter() {
    if (this.filtered == 'all') {
      this.getPosts();
    } else {
      

      this.tours = this.tours.filter((tour: any) => {
        return tour.category
          .toLowerCase()
          .includes(this.filtered.toLowerCase());
      });
      if (this.tours.length == 0) {
        this.getPosts();
        
      }
      
    }
  }
}
