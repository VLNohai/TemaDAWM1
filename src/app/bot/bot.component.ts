import { Component, Output, EventEmitter  } from '@angular/core';
import { SearchComponent } from '../search/search/search.component';
import { HoodsService } from '../services/hoods.service';
import { Hood } from '../model/hood';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.scss']
})
export class BotComponent {
  hoods : Hood[] = [];
  visibleHoods : Hood[] = [];
  currentPage = 1;
  canGoLeft = false;
  canGoRight = true;
  @Output() clickEvent = new EventEmitter<string>();

  constructor(private hoodsService : HoodsService){
    hoodsService.getHoods().subscribe(hoods => {
      this.hoods = hoods;
      this.goToPage(1);
    })
  }

  goToPage(number : number){
    this.currentPage = number;
    this.visibleHoods = [];
    for(let i=0; i<6; i++){
      let index = (number - 1) * 6 + i;
      if(index >= this.hoods.length) break;
      this.visibleHoods.push(this.hoods[index]);
    }
    if(number == 1) { 
      this.canGoLeft = false; 
    }
    else{
      this.canGoLeft = true;
    }
    if(number * 6 >= this.hoods.length) { 
      this.canGoRight = false; 
    }
    else{
      this.canGoRight = true;
    }
  }
}
