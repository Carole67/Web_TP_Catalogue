import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import {environment} from '../environments/environment';
import { ProductComponent } from './product/product.component';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor(private httpClient:HttpClient) { }

  public getCharacters(): Observable<ProductComponent[]>{    
    return this.httpClient.get<ProductComponent[]>(environment.backendClient);
  }
  
  public getColumns(): string[]{
    return ["Nom", "Matière", "Prix"];
  }
}
