import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hood } from '../model/hood';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoodsService {
  hoods : Hood[] = [];

  constructor(private http: HttpClient) { 

  }

  getHoods(): Observable<Hood[]> {
    return this.http.get<Hood[]>('assets/hoods.json');
  }
}
