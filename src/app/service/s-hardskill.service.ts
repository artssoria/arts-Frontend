import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hardskill } from '../model/hardskill';

@Injectable({
  providedIn: 'root'
})
export class SHardskillService {
  expURL = 'https://backendsoria.herokuapp.com/hardskill';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Hardskill[]>{
    return this.httpClient.get<Hardskill[]>(this.expURL + 'lista');
  }

  public detail(id: number): Observable<Hardskill>{
    return this.httpClient.get<Hardskill>(this.expURL + `detail/${id}`);
  } 

  public save(hardskill: Hardskill): Observable<any>{
    return this.httpClient.post<any>(this.expURL + 'create', hardskill);
  }

  public update(id: number, hardskill: Hardskill): Observable<any>{
    return this.httpClient.put<any>(this.expURL + `update/${id}`, hardskill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.expURL + `delete/${id}`);
  }
}
