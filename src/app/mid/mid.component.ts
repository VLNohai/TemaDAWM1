import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss']
})
export class MidComponent {
  showSearch : boolean = false;
  searchTerm : string = '';

  constructor(private router : Router){

  }

  search(){
    if(this.searchTerm == ''){
      this.router.navigateByUrl('');
      this.showSearch = false;
      return;
    }
    this.showSearch = true;
    const queryParams = { search: this.searchTerm };
    const navigationExtras = {
      queryParams,
    };
    this.router.navigate([''], navigationExtras);
  }
}
