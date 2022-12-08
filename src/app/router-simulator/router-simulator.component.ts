import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-router-simulator',
  templateUrl: './router-simulator.component.html',
  styleUrls: ['./router-simulator.component.css']
})
export class RouterSimulatorComponent implements OnInit {

  selected: string;
  constructor(private router: Router) {
    this.selected = this.router.url.replace('/', '');
    router.events.subscribe((routeEvent) => {
      if (routeEvent instanceof NavigationEnd)
        this.selected = routeEvent.url.replace('/', '');
    });
  }

  ngOnInit(): void {}

  goTo(route: string) {
    const link =[route];
    this.router.navigate(link);
  }
}
