import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  fetchDetail: any;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit() {

   this.fetchDetail = this.apiService.getCategorySpecificData();
   console.log(this.fetchDetail);

}
}
