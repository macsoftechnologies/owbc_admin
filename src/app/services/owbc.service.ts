import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwbcService {
  

  constructor(private httpClient:HttpClient) { }

  public adminLogin(data: any): Observable <any> {
    try{
      return this.httpClient.post(environment.BaseUrl + 'admin/login', data)
    }catch(error){}
  }
}
