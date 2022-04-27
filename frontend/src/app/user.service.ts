import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
	public   userUrl= 'http://localhost:3000/api/ekaly';
	httpOptions = {
	 //headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};
 
    constructor(private http: HttpClient) { }

   	getUser(): Observable<User> {
  		//return this.http.get<User>(this.userUrl+'/getUser')
  		return this.http.get<User>(this.userUrl+'/getClient')
    	.pipe(
    	);
    }

	saveInscription(user:User) :Observable<boolean> {
  		return this.http.post<boolean>(this.userUrl+'/signup', user, this.httpOptions)
		//  return this.http.post<boolean>(this.userUrl+'/signup', user, this.httpOptions)
    	.pipe(
    	); 
    }	
}
