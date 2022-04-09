import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  userConnected? : User;
  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
    var userConnectedTmp = localStorage.getItem('userConnected');

    if(userConnectedTmp) {
      let jsonObject : any = JSON.parse(userConnectedTmp);

      this.userConnected = <User>jsonObject;
      
      
    }
  }

  deconnect(): void {
  	localStorage.removeItem('isConnected');
  	this.router.navigate(['/login']);
  }
}
