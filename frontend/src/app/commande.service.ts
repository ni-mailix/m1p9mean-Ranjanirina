import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Commande } from './commande';


@Injectable({
  providedIn: 'root'
})
export class CommandeService {
		//private userUrl = 'api/commande';
	private commandeUrl = 'assets/commande.json';
	httpOptions = {
	  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
	};

   constructor(private http: HttpClient) { }

   	getCommande(): Observable<Commande> {
  		//return this.http.get<User>(this.userUrl+'/getUser')
  		return this.http.get<Commande>(this.commandeUrl)
    	.pipe(
    	);
    }

  	addCommande(commande:Commande) :Observable<boolean> {
  		return this.http.post<boolean>(this.commandeUrl+'/saveUser', commande, this.httpOptions)
    	.pipe(
    	);
    }	
}
