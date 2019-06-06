import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {


  ngOnInit() {
  }
  arrayOne = [
    {path:"login",name:"login"},
    {path:"contact",name:"contact"},
    {path:"about",name:"about"},
    {path:"form",name:"form"}]

    constructor(private router: Router) { 
    }

    onNavigate(item){
      this.router.navigateByUrl(item.path)
    }

}
