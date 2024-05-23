import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Menu } from '../../models/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{

  public menuProperties: Array<Menu> = [
    {
    id: '1',
    titre: 'Tableau de bord',
    icon: 'fas fa-chart-line',
    url: '',
    sousMenu: [
      {
        id: '11',
        titre: 'Vue d\'ensemble',
        icon: 'fas fa-chart-pie',
        url: ''
      },
      {
        id: '12',
        titre: 'Statistiques',
        icon: 'fas fa-chart-bar',
        url: 'statistiques'
      }
    ]
  },
   // {
   //   id: '2',
   //   titre: 'Sousstructure',
   //   icon: 'fas fa-boxes',
   //   url: '',
   //   sousMenu: [
   //     {
     //     id: '21',
     //     titre: 'sousstructure',
     //     icon: 'fas fa-boxes',
     //     url: 'sousstructure'
     //   }
     // ]
   // },
    {
      id: '3',
      titre: 'Agent',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '31',
          titre: 'Agent',
          icon: 'fas fa-users',
          url: 'agent'
        }
      ]
    }
    //,
   // {
     // id: '4',
     // titre: 'structure',
     // icon: 'fas fa-users',
      //url: '',
      //sousMenu: [
      //  {
       //   id: '41',
       //   titre: 'structure',
       //   icon: 'fas fa-users',
       //   url: 'structure'
       // },
        
      //]
   // },
    
    //{
   //   id: '5',
   //   titre: 'Responsable',
    //  icon: 'fas fa-users',
    //  url: '',
      //sousMenu: [
      //  {
      //    id: '51',
      //    titre: 'Responsable',
      //    icon: 'fas fa-users',
      //    url: 'responsable'
      //  },
        
      //]
    //}
    //,

   // {
      //id: '6',
    //  titre: 'Parametrages',
    //  icon: 'fas fa-cogs',
    //  url: '',
    //  sousMenu: [
     //   {
      //    id: '61',
       //   titre: 'Ajouter une soustructure',
       //   icon: 'fas fa-users-cog',
       //   url: 'addsousstructure'
       // },
       // {
       //   id: '62',
       //   titre: 'Ajouter un agent',
        //  icon: 'fas fa-users-cog',
         // url: 'addagent'
       // }
      //  ,
        //{
        //  id: '63',
        //  titre: 'Ajouter une structure',
        //  icon: 'fas fa-users-cog',
         // url: 'addstructure'
       // },
        
       // {
        //  id: '64',
       //   titre: 'Ajouter une responsable',
       //   icon: 'fas fa-users-cog',
       //   url: 'addresponsable'
       // }
    
    
   // ]

//}
,
    
    {
      id: '7',
      titre: 'Direction',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '71',
          titre: 'Direction',
          icon: 'fas fa-users',
          url: 'direction'
        },
        
      ]
    },
    {
      id: '8',
      titre: 'Matiere',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
        {
          id: '81',
          titre: 'Matiere',
          icon: 'fas fa-users',
          url: 'matiere'
        },
        
      ]
    },
    
    {
      id: '9',
      titre: 'Evaluation',
      icon: 'fas fa-users',
      url: '',
      sousMenu: [
       // {
        //  id: '91',
        //  titre: 'Evaluation',
        //  icon: 'fas fa-users',
        //  url: 'levaluation'
        //},
        //{
        //  id: '92',
        //  titre: 'Evaluation',
        //  icon: 'fas fa-users',
        //  url: ''
       // },
       // {
       //   id: '93',
       //   titre: 'Evaluation',
        //  icon: 'fas fa-users',
       //   url: ''
       // },
        {
          id: '94',
          titre: 'Evaluation',
          icon: 'fas fa-users',
          url: 'evaluations'
        },
        //{
        //  id: '95',
        //  titre: 'Evaluation',
        //  icon: 'fas fa-users',
        //  url: ''
       // },
      ]
    },
];



private lastSelectedMenu: Menu | undefined;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  navigate(menu: Menu): void {
    if (this.lastSelectedMenu) {
      this.lastSelectedMenu.active = false;
    }
    menu.active = true;
    this.lastSelectedMenu = menu;
    this.router.navigate([menu.url]);
  }


}
