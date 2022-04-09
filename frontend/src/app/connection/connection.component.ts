import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  	user: User;
    login?: string;
    password?: string;
    connected ?:boolean;
  	constructor(private userService : UserService, private router: Router) { 
  		this.user = {
	    	id_user: 0,
		  	nom: '',
		  	tel : '',
		  	login: '',
		  	password: '',
		  	type: ''
	  	};
  	}

  ngOnInit(): void {
  }

  connect() : void {
    //this.router.navigate(['/menu']);
    
  	console.log(this.user);
  	this.userService.getUser()
  		.subscribe(res => this.user = res);


    if(this.user) {
        if(this.user.login == this.login && this.user.password == this.password) {
          this.connected = true;
          localStorage.setItem("isConnected", "oui");
          localStorage.setItem("userConnected", JSON.stringify(this.user));
          this.router.navigate(['/menu']);
        } else {
            this.connected = false;
        }
    } else {
      this.connected = false;
    }
  }

}
