import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
	private userUrl = 'api/users';
	//private userUrl = 'assets/users.json';
	httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

    constructor(private http: HttpClient) { }

   	getUser(): Observable<User> {
  		//return this.http.get<User>(this.userUrl+'/getUser')
  		return this.http.get<User>(this.userUrl)
    	.pipe(
    	);
    }

	saveInscription(user:User) :Observable<boolean> {
  		return this.http.post<boolean>(this.userUrl+'/saveUser', user, this.httpOptions)
    	.pipe(
    	);
    }	
}
