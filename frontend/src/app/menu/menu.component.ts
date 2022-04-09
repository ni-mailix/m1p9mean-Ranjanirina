import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu.service';
import { CommandeService } from '../commande.service';
import { Menu } from '../menu';
import { Commande } from '../commande';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  commande?: Commande;
  menus?: Menu[];
  quantiteACommander: number[] = [];
  constructor(private menuService : MenuService , private commandeService : CommandeService, private router: Router) { 
    //this.quantiteACommander= [];
  }

  ngOnInit(): void {
  	var isConnected = localStorage.getItem('isConnected');
  	if(isConnected != 'oui') {
  		this.router.navigate(['/login']);
  	}

    this.getMenu();
  }

  getMenu(): void{
    this.menuService.getMenu()
      .subscribe(res => this.menus = res);
  }

  addCommand(menuSelected:Menu) : void {
    if(this.quantiteACommander[menuSelected.id_menu]) {
      let qte = this.quantiteACommander[menuSelected.id_menu];
      let prixTotal = qte * menuSelected.prix_menu;

      this.commande =  {
        id_commande: 1,
        id_menu: menuSelected.id_menu,
        prix_commande: prixTotal,
        qte_commande: qte,
        id_client : 1
      }

      this.commandeService.addCommande(this.commande)
      .subscribe({
          error: (err: Error) =>  alert("Erreur sur l'enregistrement"),
          complete: () => {

            alert("Commande ajoutée");
            this.quantiteACommander[menuSelected.id_menu] = 0;
          }
      });
      
    }  else {
      alert("Veuillez ajouter la quantité commandée");
    }
    //console.log(this.quantiteACommander[menuId]);
  }
}
