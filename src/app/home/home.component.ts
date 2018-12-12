import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fetchBookDetails: any;
  mapped: any;
  fetchDetails: any;
  secondMapped: any;
  identity: any;
  selectedIndex: any;


  constructor(
    private apiService: ApiServiceService,
    private router: Router, private http: HttpClient) { }


  ngOnInit() {
    this.http.get('https://www.anapioficeandfire.com/api/').subscribe(data => {
      this.fetchDetails = data;
      this.mapped = Object.keys(this.fetchDetails).map(key => ({ type: key, value: this.fetchDetails[key], data: [] }));
      for (let i = 0; i < this.mapped.length; i++) {
        this.http.get(this.mapped[i].value).subscribe(data => {
          let gameAsset = data;
          this.mapped[i].data = gameAsset;
        })
      }
    });
  }
  getCategoryDetails(data){
    this.http.get(data.url).subscribe(data=>{
      let fetchSpecificData= data;
	  this.apiService.setCategorySpecificData(fetchSpecificData);
	   this.router.navigate(['/category']);
   });
  }

 
  getGameElement(i) {
    
    if (this.mapped[i].type == 'books') return "book-background";
    
    if (this.mapped[i].type == 'characters') return "character-background";
    if (this.mapped[i].type == 'houses') return "houses-background";

  }
}

