import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
    {
        path: 'user-details/:id',
        component: UserDetailsComponent
    }
];

export const UserRouterModule = RouterModule.forChild(routes);