import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/home', title: 'Dashboard',  icon: 'pe-7s-graph', class: '' },
    { path: '/users', title: 'Users',  icon:'pe-7s-users', class: '' },
    { path: '/tables', title: 'Categories',  icon:'pe-7s-shopbag', class: '' },
    { path: '/products', title: 'Fashions',  icon:'pe-7s-wristwatch', class: '' },
    { path: '/orders', title: 'Orders',  icon:'pe-7s-cart', class: '' },
    { path: '/payments', title: 'Payments',  icon:'pe-7s-cash', class: '' },
    { path: '/subscriptions', title: 'Subscriptions',  icon:'pe-7s-mail', class: '' },

    // { path: '/upgrade', title: 'Upgrade to PRO',  icon:'pe-7s-rocket', class: 'active-pro' },

];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
