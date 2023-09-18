import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  listeLien! : MenuItem[]

  ngOnInit() {
   this.listeLien = [
      {
          label: 'Movie',
          icon: 'pi pi-fw pi-video',
          items: [
              {
                  label: 'Nouveau',
                  icon: 'pi pi-fw pi-plus'}
                  ,
                  {label : 'Liste',
                  icon : 'pi pi-fw pi-list',
                  url : "movielist"}

                  ]
              },

          ]

  }
}
