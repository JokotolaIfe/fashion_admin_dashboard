import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LbdModule } from '../../lbd/lbd.module';
import { NguiMapModule} from '@ngui/map';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { HomeComponent } from '../../home/home.component';

import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';

import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { DropdownModule } from 'angular-bootstrap-md';

import { ProductsComponent } from '../../products/products.component';
// import { environment } from './../../../environments/environment.prod';
// import { AngularFireModule } from '@angular/fire';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';

import { OrdersComponent } from '../../orders/orders.component';
import { EditComponent } from '../../edit/edit.component';
import { SubscriptionsComponent } from '../../subscriptions/subscriptions.component';
import { PrivacyComponent } from '../../privacy/privacy.component';
import { ReturnComponent } from '../../return/return.component';
import { TermsComponent } from '../../terms/terms.component';
import { HelpComponent } from '../../help/help.component';
import { FamilyComponent } from '../../family/family.component';
import { UsersComponent } from '../../users/users.component';
import { PaymentsComponent } from '../../payments/payments.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    LbdModule,
    MDBBootstrapModule.forRoot(),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=YOUR_KEY_HERE'}),
    DropdownModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbPaginationModule, NgbAlertModule 
  ],
  declarations: [
    HomeComponent,
    UserComponent,
    TablesComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    ProductsComponent,
    OrdersComponent,
    EditComponent,
    PaymentsComponent,
    SubscriptionsComponent,
    PrivacyComponent,
    ReturnComponent,
    TermsComponent,
    HelpComponent,
    FamilyComponent,
    UsersComponent
  ],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})

export class AdminLayoutModule {}
