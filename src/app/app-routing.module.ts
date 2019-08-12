import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'complaint', loadChildren: './complaint/complaint.module#ComplaintPageModule' },
  { path: 'locations', loadChildren: './locations/locations.module#LocationsPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'notice-period', loadChildren: './notice-period/notice-period.module#NoticePeriodPageModule' },
  { path: 'guest-stay', loadChildren: './guest-stay/guest-stay.module#GuestStayPageModule' },
  { path: 'rent-payment', loadChildren: './rent-payment/rent-payment.module#RentPaymentPageModule' },
  { path: 'room-change', loadChildren: './room-change/room-change.module#RoomChangePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
