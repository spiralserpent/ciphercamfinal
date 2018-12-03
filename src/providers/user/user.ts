import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Users} from'../../shared/users';
import {dbURL} from '../../shared/dburl';
/*
  Generated class for the LeaderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello Users Provider ');
  }
  getUsers(): Observable<Users[]>{
    return this.http.get<Users[]>(dbURL + 'users').map(
      res => res
    );
  }
 


}
