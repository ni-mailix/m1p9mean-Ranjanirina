import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Menu } from './menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  //private userUrl = 'api/menu';
	private menuUrl = 'assets/menu.json';


	constructor(private http: HttpClient) { }

	getMenu(): Observable<Menu[]> {
		//return this.http.get<User>(this.userUrl+'/getUser')
		return this.http.get<Menu[]>(this.menuUrl)
	.pipe(
	);
	}
  
}
