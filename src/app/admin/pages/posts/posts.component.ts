import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  tours=[
    {
      id:1,
      title:'Tagaytay Staycation',
      price: 'P1,999',
      img:'assets/tours/tour1.jpg',
      description:"P1,999 lang per night, Tagaytay Staycation na yan! Oo, di ka namamalikmata, P1,999 nga!",
      destination:'Tagaytay City',
      rating:4.5,
      days:"3 days-2 nights",
      people:2,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Tagaytay City',
        'Tagaytay Beach',
        'Tagaytay National Park',
        'Tagaytay Zoo',
        'Tagaytay Museum',
        'Tagaytay City',
      ],
      type:'Local tour'



    },
    {
      id:2,
      title:'2D1N BAGUIO Staycation',
      price: ' P3,799 /person',
      img:'assets/tours/tour2.jpg',
      description:"Abot kayang 2D1N BAGUIO Private Tours for as low as PHP 3,799 /person",
      destination:'Baguio City',
      rating:4.5,
      days:"2 days-1 nights",
      people:9,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      type:'Local tour'
      


    },
    {
      id:3,
      title:'4D3N BORACAY ALL IN PACKAGE',
      price: 'P8,999 /person',
      img:'assets/tours/tour3.jpg',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      destination:'Boracay Island',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      type:'Local tour'
      


    },
    {
      id:4,
      title:'Thailand Trip',
      price: 'P8,999 /person',
      img:'assets/tours/tour4.jpg',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      destination:'Boracay Island',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      type:'International tour'
      


    },
    {
      id:5,
      title:'Ilocos',
      price: 'P8,999 /person',
      img:'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/276161930_1428594167577663_8841921417650499926_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFYljWw96WQWWcPR5RlulLAOgqwb2RlBDg6CrBvZGUEOJ1JICUiFa1Xex9Za_FgGelGAammE0UXdNACiyFA-L8J&_nc_ohc=hvI6as1TfdYAX-yzSo1&_nc_ht=scontent.fmnl30-1.fna&oh=00_AT-zC8WJdyjVZNTLeIg-71mUTtV9lunNjldilI_Q5_5_tw&oe=62497FAD',
      description:"Abot kayang 4D3N BORACAY ALL IN PACKAGE for as low as PHP 8,999 /person",
      destination:'Boracay Island',
      rating:4.5,
      days:"4 days-3 nights",
      people:1,
      departure:'May 15, 2020',
      return:'May 18, 2020',
      highlights:[
        'Baguio City',
        'Baguio Beach',
        'Baguio National Park',
        'Baguio Zoo',
        'Baguio Museum',
        'Baguio City',
      ],
      type:'Local tour'
      
      


    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
