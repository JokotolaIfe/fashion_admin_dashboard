import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

// const redirectToLogin = redirectUnauthorizedTo(['login']);

const routes: Routes =[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule',
      },
]},
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const AppRoutes: ModuleWithProviders = RouterModule.forRoot(routes);

