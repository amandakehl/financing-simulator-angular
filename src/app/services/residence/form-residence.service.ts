import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormResidenceModel } from 'src/app/models/residence.model';

@Injectable({
  providedIn: 'root'
})
export class FormResidenceService {

  constructor(private http: HttpClient) { }

  saveInfosResidence(info: FormResidenceModel): Observable<any> {
    return this.http.post("http://localhost:3000/residence", info)
  }
}
