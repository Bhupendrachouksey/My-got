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
  fetchBookDetails:any;
  fetchBookSpecificData:any;
  mapped:any;
  fetchDetails: any;
  secondMapped: any;
  details: any;
  identity:any;
  selectedIndex:any;
 

  constructor(
    private apiService:ApiServiceService,
    private router:Router, private http: HttpClient) { }
    

    ngOnInit() {
      this.apiService.getApiData().subscribe(data=>{
        this.fetchDetails= data;
        this.mapped = Object.keys(this.fetchDetails).map(key => ({type: key, value: this.fetchDetails[key]}));
        console.log(this.mapped);
      });
    }
// fetchBookInfo(selectedBook){
//   this.apiService.getApiData("books/" + selectedBook).subscribe(data=>{
//     this.fetchBookSpecificData= data;
//     //sessionStorage.setItem("bookDetails", this.fetchBookSpecificData);
//     sessionStorage.setItem("bookDetails", JSON.stringify(this.fetchBookSpecificData));
//     this.router.navigate(['/book-details']);
//   });
// }

fetchList(select)
{
  this.selectedIndex=select;
this.identity=this.mapped[select].value;
  this.http.get(this.identity).subscribe(data=>{
    this.details=data;
    //this.secondMapped = Object.keys(this.details).map(key => ({type: key, value: this.details[key]}));
    console.log(this.details)
    //sessionStorage.setItem("details", JSON.stringify(this.fetchDetails))
  })

  console.log(this.identity);

}
}
