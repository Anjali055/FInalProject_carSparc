import{Routes} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { UserServiceButtonsComponent } from './user-service-buttons/user-service-buttons.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashBordComponent } from './dash-bord/dash-bord.component';

import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
//import {} from './sign-up/SignupCustomModule'
import{}from './forgot-password/ForgotPasswordCustomModule'

export const MyRoutes:Routes=
[
    {path:'',component:LoginComponent},
    {path:'UserserviceButtons',component:UserServiceButtonsComponent},
    //used inside the lazyloadedcomponent
    // {path:'usersignUp',component:SignUpComponent},
    {path:'usersignUp',loadChildren:'./sign-up/SignupCustomModule#SignupCustomModule'},
    {path:'setPassword',component:SetPasswordComponent},
    //{path:'ForgotPassword',component:ForgotPasswordComponent},
    {path:'ForgotPassword',loadChildren:'./forgot-password/ForgotPasswordCustomModule#ForgotPasswordCustomModule'},
    {path:'MenuDashboard',component:DashBordComponent,
     children: [
                 { path:'editprofile',component:EditProfileComponent},
                 {path:'chagepassword',component:ChangePasswordComponent}
             ]

     }
    
   

             
    
]