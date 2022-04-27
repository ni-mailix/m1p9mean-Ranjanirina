import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})


export class InscriptionComponent implements OnInit {
  	confirmPassword ?: string;
    messageError?: string = '';
    resSaveNewUSer? : boolean;
  	user: User;
  	constructor(private userService : UserService) { 
  		this.user = {
	    //	id_user: 0,
        tel:'',
		  	nom: '',
		  	login: '',
		  	password: '',
		  	type: ''
	  	};
	}

  ngOnInit(): void  {
  }

  saveInscription(): void {
    if(this.user.password != "" && this.confirmPassword != "" && this.user.password == this.confirmPassword) {
      //this.user.type = "client";
      this.userService.saveInscription(this.user)
      .subscribe({
          error: (err: Error) =>  this.messageError = "Erreur sur l'enregistrement",
          complete: () => this.resSaveNewUSer = true,
      }); 
 
    } else {
      this.messageError = "Veuillez verifier le mot passe";
    }
    
  }
}
/*
function newFunction() {
  [UserService];
}
*/
