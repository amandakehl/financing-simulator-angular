import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBidderModel } from 'src/app/models/bidder.model';

@Injectable({
  providedIn: 'root'
})
export class FormBidderService {


  constructor(private http: HttpClient) { }

  saveInfosBidder(info: FormBidderModel): Observable<any> {
    return this.http.post("http://localhost:3000/bidders", info)
  }

  getInfosBidder(info: FormBidderModel): Observable<any> {
    return this.http.get<FormBidderModel[]>("http://localhost:3000/bidders")
  }
}
