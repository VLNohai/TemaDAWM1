import { LowerCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hood } from 'src/app/model/hood';
import { HoodsService } from 'src/app/services/hoods.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchTerm : string = "";
  visibleHoods : Hood[] = [];

  constructor(private route : ActivatedRoute, private hoodsService : HoodsService){
    
  }

  ngOnInit(){
    this.route.queryParams.subscribe(params => {
      this.searchTerm = params['search'];
      this.hoodsService.getHoods();
      this.hoodsService.getHoods().subscribe(hoods => {
        this.visibleHoods = hoods.filter(hood => hood.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1);
        console.log(this.visibleHoods);
      })
    });
  }
}
