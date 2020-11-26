import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StockGroup } from '../domain/stockgroup';
import { API_URl } from '../app-constants';

@Injectable({
  providedIn: 'root'
})
export class StockGroupService {

  constructor(private http: HttpClient) { }

  getHeader() {
     const headers = new HttpHeaders({
      Authorization: sessionStorage.getItem('authentication')
    });
    return headers;
  }
  getAll() {
    const headers = this.getHeader();
    console.log('getAll stock group detail service is calling!!');
     return this.http.get<StockGroup[]>(`${API_URl}/stockgroup/getAll`, {headers}).toPromise()
            .then(res => <StockGroup[]>res);
  }

  delete(id: number) {
    const headers = this.getHeader();
    console.log('Delete todo request sending !!');
     return this.http.delete(`${API_URl}/stockgroup/delete/${id}`, {headers});
  }

  retriveById(id: number) {
    const headers = this.getHeader();
    return this.http.get<StockGroup>(`${API_URl}/stockgroup/getById/${id}`, {headers});
  }

  update(stockgroup: StockGroup) {
    const headers = this.getHeader();
    return this.http.post<StockGroup>(`${API_URl}/stockgroup/update`, stockgroup, {headers});
  }

  create(stockgroup: StockGroup) {
    console.log('Saving stock group details !! name:: ' + stockgroup.name);
    const headers = this.getHeader();
    return this.http.post<StockGroup>(`${API_URl}/stockgroup/save`, stockgroup, {headers});
  }

  isStockGroupNameExists(name: string, id: number) {
    console.log('Checking stock group !! name:: ' + name);
    const headers = this.getHeader();
    return this.http.get<StockGroup>(`${API_URl}/stockgroup/isStockExists/${name}/${id}` , {headers});
  }
}
