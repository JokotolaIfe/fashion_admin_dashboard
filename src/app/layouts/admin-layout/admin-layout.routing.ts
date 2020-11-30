import { Routes } from '@angular/router';

import { HomeComponent } from '../../home/home.component';
import { UserComponent } from '../../user/user.component';
import { TablesComponent } from '../../tables/tables.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ProductsComponent } from '../../products/products.component';
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

import { LoginComponent } from './../../login/login.component';

export const AdminLayoutRoutes: Routes = [ 
    { path: 'home',      component: HomeComponent,},
    { path: 'user',           component: UserComponent},
    { path: 'login',          component: LoginComponent},
    { path: 'tables',         component: TablesComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'products',       component: ProductsComponent },
    { path: 'orders',         component: OrdersComponent },
    { path: 'edit',           component: EditComponent },
    { path: 'subscriptions',  component: SubscriptionsComponent },
    { path: 'privacy',        component: PrivacyComponent },
    { path: 'return',         component: ReturnComponent },
    { path: 'terms',          component: TermsComponent },
    { path: 'help',           component: HelpComponent },
    { path: 'family',         component: FamilyComponent },
    { path: 'users',          component: UsersComponent },
    { path: 'payments',       component: PaymentsComponent },

];
